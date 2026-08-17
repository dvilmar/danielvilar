#!/usr/bin/env bash
# One-time bootstrap for the Vultr VPS that serves this portfolio.
# Run as root (or with sudo) on a fresh Ubuntu 22.04/24.04 instance:
#
#   curl -fsSL https://raw.githubusercontent.com/dvilmar/danielvilar/main/infra/vultr/setup.sh | bash -s -- <server-ip>
#
# It installs Docker, host Nginx + certbot, opens the firewall, and issues a
# Let's Encrypt certificate for <server-ip>.nip.io (no domain purchase
# needed — nip.io resolves that hostname back to <server-ip>).
set -euo pipefail

SERVER_IP="${1:?Usage: setup.sh <server-ip>}"
DOMAIN="${SERVER_IP}.nip.io"
APP_DIR="/opt/danielvilar"

echo "==> Bootstrapping ${DOMAIN}"

apt-get update -y
apt-get install -y ca-certificates curl gnupg ufw nginx certbot python3-certbot-nginx

# --- Docker ---
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

# --- Firewall ---
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw --force enable

# --- App directory + compose file ---
mkdir -p "${APP_DIR}"
cp "$(dirname "$0")/docker-compose.yml" "${APP_DIR}/docker-compose.yml" 2>/dev/null || true

# --- Host Nginx reverse proxy (HTTP first, certbot upgrades to HTTPS) ---
cat > /etc/nginx/sites-available/danielvilar <<NGINX
server {
    listen 80;
    server_name ${DOMAIN};

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
NGINX

ln -sf /etc/nginx/sites-available/danielvilar /etc/nginx/sites-enabled/danielvilar
rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl reload nginx

echo "==> Requesting Let's Encrypt certificate for ${DOMAIN}"
certbot --nginx -d "${DOMAIN}" --non-interactive --agree-tos --register-unsafely-without-email --redirect

echo "==> Done. Bring up the app container with:"
echo "    cd ${APP_DIR} && docker compose up -d"
echo "==> Site will be live at: https://${DOMAIN}"
