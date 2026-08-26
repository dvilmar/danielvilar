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

> **Nota — VPS compartido con los bots de trading de qx-core (950MB RAM
> total).** El contenedor de este portfolio corre con `mem_limit: 48m`,
> `cpus: 0.25` y logs acotados (ver `infra/vultr/docker-compose.yml`), y
> escucha solo en `127.0.0.1:8091` para no chocar con los puertos 3000
> (dashboard) / 8765 (api) de qx-core. `infra/vultr/setup.sh` nunca toca
> ufw más allá de añadir reglas ALLOW, ni borra el `default` de Nginx —
> pensado para no interferir con nada más que corra en esa máquina.

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

No hay GitHub Actions en este repo (por decisión explícita) — el deploy es
manual, por SSH directo al VPS.

### 1. Provisionar el VPS en Vultr — ✅ hecho

Ya desplegado en el VPS de qx-core (185.92.222.233), origen live en
`https://185.92.222.233.nip.io`. Para repetir el proceso en otro VPS:

```bash
git clone https://github.com/dvilmar/danielvilar.git /opt/danielvilar
cd /opt/danielvilar
./infra/vultr/setup.sh <IP-DEL-VPS>
docker compose -f infra/vultr/docker-compose.yml up -d --build
```

### 2. Actualizar tras un cambio

```bash
cd /opt/danielvilar && git pull && docker compose -f infra/vultr/docker-compose.yml up -d --build
```

### 3. Conectar Vercel como gateway

1. En [vercel.com](https://vercel.com), *Add New → Project* → importar
   `dvilmar/danielvilar`.
2. En *Build & Development Settings*: Framework Preset = **Other**, Build
   Command = *(vacío)*, Output Directory = *(vacío)*. El proyecto no debe
   construir la app Next real — solo sirve para aplicar los `rewrites` de
   `vercel.json` (ya apunta a `https://185.92.222.233.nip.io`).
3. El proyecto queda accesible en `https://dvilmar.vercel.app`.

## Pendiente de contenido

Email, LinkedIn y la selección de proyectos ya son reales. Sigue pendiente
(marcador `TODO(daniel)`):

- `src/components/About.tsx` — bio genérica, sustituir por el texto real.
- `src/data/skills.ts` — lista de skills sin confirmar/ajustar.
