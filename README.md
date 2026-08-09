# Cinemate Production

Cinemate Production is a Next.js 16 website for photography, wedding films, fashion shoots, commercial visuals, and event coverage.

## Tech stack

- Next.js 16.3 with the App Router
- React 19
- GSAP and ScrollTrigger for motion
- SCSS-generated legacy theme assets with application-level CSS overrides
- EmailJS for the contact form
- npm for dependency management

## Requirements

- Node.js `20.9.0` or newer
- npm `10` or newer is recommended

Check the local versions before installing:

```bash
node --version
npm --version
```

## Local development

Install the exact lockfile dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Useful checks:

```bash
npm run lint
npm run build
npm run start
```

The production server can use a different port when `3000` is already in use:

```bash
npm run start -- -p 3100
```

### Test on a phone over the same Wi-Fi network

Use the computer's LAN address, not `localhost`. Start Next.js on all network interfaces:

```bash
npm run dev -- --hostname 0.0.0.0
```

Then open `http://<computer-lan-ip>:3000` on the phone. For a production build:

```bash
npm run build
npm run start -- --hostname 0.0.0.0 -p 3000
```

If the phone cannot connect, allow Node.js through the computer firewall and confirm that both devices are on the same Wi-Fi network. Do not expose a development server to the public internet.

## Environment variables

Copy the example file and replace the values for your environment:

```bash
cp .env.example .env.local
```

On Windows PowerShell, use:

```powershell
Copy-Item .env.example .env.local
```

Required public configuration:

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical production URL, without a trailing slash |
| `NEXT_PUBLIC_WEB_NAME` | First line of the brand name |
| `NEXT_PUBLIC_WEB_NAME2` | Second line of the brand name |
| `NEXT_PUBLIC_PHONE` | Contact phone number |
| `NEXT_PUBLIC_WHATSAPP` | WhatsApp number without the country code |
| `NEXT_PUBLIC_EMAIL` | Contact email address |
| `NEXT_PUBLIC_ADDRESS` | Contact address/copy |
| `NEXT_PUBLIC_INSTAGRAM` | Instagram profile URL |
| `NEXT_PUBLIC_FACEBOOK` | Facebook profile URL |
| `NEXT_PUBLIC_SITE_LAST_MODIFIED` | Stable date used by the sitemap, for example `2026-08-09` |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS browser/public key |

Only values prefixed with `NEXT_PUBLIC_` are used in the browser. Do not add private API keys to this project because the contact form is intentionally sent through EmailJS from the client.

The contact template must contain these exact variables:

```text
{{user_name}}
{{user_email}}
{{subject}}
{{phone}}
{{message}}
{{model_number}}
```

In the EmailJS dashboard, confirm that the selected service is connected, the template's **To Email** is your receiving inbox, and the production domain is included in the EmailJS allowed origins. The form sends `model_number` as `Contact Page` because this contact form has no model selector.

## Deploy to Vercel (recommended)

The repository includes [vercel.json](./vercel.json), which uses `npm ci` and `npm run build`.

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the repository in [Vercel](https://vercel.com/new).
3. Keep the detected framework as **Next.js** and the project root as the repository root.
4. Add every variable from `.env.example` in **Project Settings → Environment Variables** for Preview and Production as appropriate.
5. Deploy the project.
6. Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS domain and redeploy so canonical URLs, Open Graph URLs, robots, and sitemap output use the real domain.
7. Verify the deployment at:
   - `/`
   - `/about`
   - `/model`
   - `/memories`
   - `/gallery`
   - `/contact`
   - `/robots.txt`
   - `/sitemap.xml`

Vercel automatically runs the production build and serves the app with `next start`-compatible Next.js hosting.

## Deploy to a Node.js host or VPS

1. Install Node.js `20.9.0` or newer on the server.
2. Clone the repository and enter it:

   ```bash
   git clone <repository-url>
   cd cinemateproduction
   ```

3. Install the lockfile dependencies:

   ```bash
   npm ci
   ```

4. Create the production environment file and fill in real values:

   ```bash
   cp .env.example .env.production
   ```

5. Build and start the production app:

   ```bash
   npm run build
   npm run start
   ```

6. If the host uses a process manager, PM2 is a simple option:

   ```bash
   npm install --global pm2
   pm2 start npm --name cinemate-production -- run start
   pm2 save
   pm2 startup
   ```

7. Put the app behind an HTTPS reverse proxy such as Nginx or the host's managed proxy. Forward requests to the Next.js port, normally `3000`.
8. Configure the domain's DNS records and set `NEXT_PUBLIC_SITE_URL` to the HTTPS domain before rebuilding.

For a custom port:

```bash
npm run start -- -p 3100
```

## Routing and compatibility redirects

The canonical gallery route is `/gallery`. The old `/gallary` URL redirects to it for existing links and search traffic. The old `/blog` URL redirects to `/memories`.

The site also exposes App Router metadata endpoints:

- `/robots.txt`
- `/sitemap.xml`
- `/opengraph-image`

## Deployment checklist

- [ ] Node.js is `20.9.0` or newer.
- [ ] Production environment variables are configured on the hosting platform.
- [ ] `NEXT_PUBLIC_SITE_URL` matches the final HTTPS domain.
- [ ] `npm ci` completes without changing the lockfile.
- [ ] `npm run lint` passes.
- [ ] `npm run build` passes.
- [ ] Navbar opens and closes on desktop and mobile.
- [ ] Hero slider dots, keyboard controls, autoplay, and reduced-motion behavior work.
- [ ] Contact form EmailJS credentials are valid.
- [ ] `/robots.txt` and `/sitemap.xml` contain the final domain.
- [ ] A missing URL returns the custom 404 page.
