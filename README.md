# Cashio

Offline-first currency converter for travel. Convert 40+ currencies with no
signal, pin favorites, and install it on an iPhone Home Screen.

[![License: MIT](https://img.shields.io/github/license/jonnychn/cashio)](LICENSE)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-22c55e.svg)](CONTRIBUTING.md)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jonnychn/cashio)

Rates are **mid-market** (not bureau cash rates). Live quotes come from
[Open Exchange Rates](https://www.exchangerate-api.com/) when you are online,
then persist on the device. A bundled snapshot means the converter still works
on first launch without a network.

**No API keys. No database. No sign-in.** Pair, amount, and favorites live in
`localStorage`.

## Features

- USD, TWD, JPY, EUR, GBP, THB, KRW, and 30+ other traveler currencies
- Works in airplane mode after rates are saved (or from the packed snapshot)
- Cheat sheet for common amounts
- Add to Home Screen on iPhone (Safari → Share → Add to Home Screen)
- Service worker caches the app shell on production deploys

## Fork and deploy (5 minutes)

This repo is public MIT. Fork it, change it, ship your own converter.

### Option A — one-click clone on Vercel

1. Click **[Deploy with Vercel](https://vercel.com/new/clone?repository-url=https://github.com/jonnychn/cashio)**.
2. Vercel copies this repo into your GitHub account and deploys it.
3. Leave build settings alone. **No environment variables** are required.
4. Open the production URL in **Safari** on iPhone → Share → Add to Home Screen.
5. Open it once on Wi-Fi so today’s rates save to the phone.

### Option B — fork, then import

1. Click **Fork** on GitHub (top right). Keep the name `cashio` or pick your own.
2. Open [vercel.com/new](https://vercel.com/new) and import **your** fork.
3. Framework can stay on auto-detect (Vite / TanStack Start). Build command is
   `npm run build` (already in `vercel.json`).
4. Deploy. Every push to `main` rebuilds production.

Hobby accounts: install the **Vercel GitHub App** on the fork if the import
screen asks you to connect GitHub. That is what enables auto-deploy on push.

## Run locally

You need [Node.js 22+](https://nodejs.org/).

```bash
git clone https://github.com/YOUR_USER/cashio.git
cd cashio
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on `0.0.0.0:8080` |
| `npm run build` | Production build (Vercel / Nitro) |
| `npm run typecheck` | TypeScript check |
| `npm run preview` | Serve the production build locally |

## Customize

| I want to… | Edit |
| --- | --- |
| Add / rename a currency | [`src/lib/currencies.ts`](src/lib/currencies.ts) |
| Change the live rates URL | [`src/lib/rates.ts`](src/lib/rates.ts) |
| Refresh the offline snapshot | [`src/lib/rates-snapshot.ts`](src/lib/rates-snapshot.ts) |
| Tweak the converter UI | [`src/components/cambio-app.tsx`](src/components/cambio-app.tsx) |
| Change default pair / favorites | [`src/store/cambio.ts`](src/store/cambio.ts) |

Currencies need an ISO code that the [ER-API](https://www.exchangerate-api.com/)
feed returns (almost every common travel currency). After adding one, run
`npm run typecheck`.

To refresh the packed snapshot, fetch
`https://open.er-api.com/v6/latest/USD` while online and paste `rates` plus a
unix-ms `SNAPSHOT_FETCHED_AT` into `src/lib/rates-snapshot.ts`.

## How offline works

1. **First visit online** — live USD rates are stored in `localStorage`.
2. **No network** — the last saved rates are used. If the device has never
   fetched, the bundled snapshot in `src/lib/rates-snapshot.ts` is used.
3. **Installed PWA** — `public/sw.js` caches the app shell on production, so
   the UI itself loads in airplane mode after one successful visit.

Chrome-on-iPhone cannot be a full offline browser. Installing Cashio to the
Home Screen is the reliable path.

## Project layout

```
src/
  components/     Converter UI, currency sheet, service worker register
  lib/            Currency list, rate fetch + bundled snapshot, storage
  routes/         TanStack Start pages (`/` is the converter)
  store/          Zustand state (amount, pair, favorites, rates)
public/
  sw.js           Offline shell (registered in production only)
  favicon.svg     App icon
```

Stack: React 19, TanStack Start, Tailwind v4, Zustand, Vite, Nitro (Vercel).

`AGENTS.md` and `.grok/` are for the Grok App Builder sandbox. Ignore them
when forking — they are not required to run or deploy Cashio.

## Contributing

PRs and forks are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE) © Jonny Chan
