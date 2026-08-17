#!/usr/bin/env bash
# One-time bootstrap for the Vultr VPS that serves this portfolio.
# Run as root (or with sudo):
#
#   ./setup.sh <server-ip>
#
# It installs (if missing) Docker + host Nginx + certbot, and issues a
# Let's Encrypt certificate for <server-ip>.nip.io (no domain purchase
# needed — nip.io resolves that hostname back to <server-ip>).
#
# SAFE FOR A SHARED PRODUCTION BOX: this script only ever touches things
# named "danielvilar" (its own nginx site file, its own app dir) or adds
# firewall ALLOW rules. It never disables/force-enables ufw, never removes
# the existing nginx "default" site, and never touches ports 3000/8765
# (used by other services on this box) -- the app container listens on
# 127.0.0.1:8091 only (see docker-compose.yml).
set -euo pipefail

SERVER_IP="${1:?Usage: setup.sh <server-ip>}"
DOMAIN="${SERVER_IP}.nip.io"
APP_PORT=8091

echo "==> Bootstrapping ${DOMAIN} (app port ${APP_PORT}, leaves 3000/8765 alone)"

apt-get update -y
apt-get install -y ca-certificates curl gnupg ufw nginx certbot python3-certbot-nginx

# --- Docker (skip if already installed, e.g. it already runs qx-core) ---
if ! command -v docker >/dev/null 2>&1; then
  install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
  chmod a+r /etc/apt/keyrings/docker.asc
  echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" \
    > /etc/apt/sources.list.d/docker.list
  apt-get update -y
  apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
fi

# --- Firewall: only add ALLOW rules, never touch enable/disable state or
#     any pre-existing rule. If ufw is inactive, leave it inactive -- that
#     decision belongs to whoever manages this box, not this script. ---
ufw allow 80/tcp || true
ufw allow 443/tcp || true
if ufw status | grep -q "Status: active"; then
  echo "==> ufw already active, rules for 80/443 ensured"
else
  echo "==> ufw is inactive -- left as-is (not enabling it from this script)"
fi

# --- Host Nginx: own site file only, does not touch any other server
#     block (including "default") ---
cat > /etc/nginx/sites-available/danielvilar <<NGINX
server {
    listen 80;
    server_name ${DOMAIN};

    location / {
        proxy_pass http://127.0.0.1:${APP_PORT};
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
NGINX

ln -sf /etc/nginx/sites-available/danielvilar /etc/nginx/sites-enabled/danielvilar
nginx -t && systemctl reload nginx

echo "==> Requesting Let's Encrypt certificate for ${DOMAIN}"
certbot --nginx -d "${DOMAIN}" --non-interactive --agree-tos --register-unsafely-without-email --redirect

echo "==> Nginx/TLS done. Now clone + build the app (no registry needed):"
echo "    git clone https://github.com/dvilmar/danielvilar.git /opt/danielvilar"
echo "    cd /opt/danielvilar && docker compose -f infra/vultr/docker-compose.yml up -d --build"
echo "==> Site will be live at: https://${DOMAIN}"
