# danielvilar

Portfolio personal de Daniel Vilar Martínez.

## Arquitectura

```
usuario → https://dvilmar.vercel.app (Vercel, rewrite/gateway)
            → https://<IP-VPS>.nip.io (Nginx + Let's Encrypt en el VPS de Vultr)
                → contenedor Docker (Nginx sirviendo el export estático de Next.js)
```

- **App**: Next.js (App Router) con `output: 'export'` — genera HTML/CSS/JS
  estático en `out/`, sin servidor Node en producción.
- **Origen (Vultr)**: un VPS con Docker sirviendo la imagen de este repo
  detrás de un Nginx del host, que termina TLS con un certificado Let's
  Encrypt emitido para `<IP-del-VPS>.nip.io` (truco para tener HTTPS válido
  sin comprar dominio).
- **Gateway (Vercel)**: el proyecto de Vercel no construye la app — solo
  aplica los `rewrites` de `vercel.json`, reenviando todo el tráfico al
  origen de Vultr. Así `dvilmar.vercel.app` queda como entrada pública con
  la CDN/TLS de Vercel por delante.

## Desarrollo local

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # genera out/ (export estático)
npm run lint
```

## Docker (verificación local del origen)

```bash
docker build -t danielvilar-portfolio .
docker run -p 8080:80 danielvilar-portfolio
# http://localhost:8080
```

## Despliegue

### 1. Provisionar el VPS en Vultr

Crear un VPS Ubuntu 22.04/24.04 (plan básico es suficiente) y anotar su IP
pública. Luego, con SSH como root:

```bash
curl -fsSL https://raw.githubusercontent.com/dvilmar/danielvilar/main/infra/vultr/setup.sh | bash -s -- <IP-DEL-VPS>
```

Esto instala Docker, Nginx, certbot, abre el firewall (22/80/443) y emite el
certificado TLS para `<IP-DEL-VPS>.nip.io`. Al terminar, subir el
`docker-compose.yml` a `/opt/danielvilar/` (el script ya intenta copiarlo si
está junto a `setup.sh`) y levantar el contenedor:

```bash
cd /opt/danielvilar && docker compose up -d
```

### 2. Secrets en GitHub (para el deploy automático)

En `Settings → Secrets and variables → Actions` del repo, añadir:

| Secret            | Valor                                             |
| ----------------- | -------------------------------------------------- |
| `VULTR_HOST`      | IP pública del VPS                                  |
| `VULTR_SSH_USER`  | usuario SSH (`root` o el que se cree)               |
| `VULTR_SSH_KEY`   | clave privada SSH con acceso al VPS                 |

Cada push a `main` construye la imagen, la publica en
`ghcr.io/dvilmar/danielvilar` y hace SSH al VPS para actualizar el
contenedor (`.github/workflows/deploy-vultr.yml`).

> Primer despliegue: el paquete en GHCR se crea privado por defecto. Hay que
> ir a `github.com/dvilmar?tab=packages` → `danielvilar` → *Package settings*
> → *Change visibility* → **Public**, para que el VPS pueda hacer
> `docker compose pull` sin autenticarse.

### 3. Conectar Vercel como gateway

1. En [vercel.com](https://vercel.com), *Add New → Project* → importar
   `dvilmar/danielvilar`.
2. En *Build & Development Settings*: Framework Preset = **Other**, Build
   Command = *(vacío)*, Output Directory = *(vacío)*. El proyecto no debe
   construir la app Next real — solo sirve para aplicar los `rewrites` de
   `vercel.json`.
3. Editar `vercel.json` y sustituir `REPLACE_WITH_VULTR_IP` por la IP real
   del VPS, luego hacer commit/push (Vercel despliega automáticamente en
   cada push a `main`).
4. El proyecto queda accesible en `https://dvilmar.vercel.app`.

## Pendiente de contenido

Hay marcadores `TODO(daniel)` en `src/data/` y `src/components/About.tsx`
con textos placeholder (bio, proyectos, skills, enlaces de contacto) — hay
que revisarlos y sustituirlos por el contenido definitivo.
