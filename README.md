# Cashio

Offline-first currency converter for travel. Convert 40+ currencies with no
signal, pin favorites, and install it on an iPhone Home Screen.

Rates are mid-market (not bureau cash rates). Live quotes come from
[Open Exchange Rates](https://www.exchangerate-api.com/) when you are online,
then persist on the device. A bundled snapshot means the converter still works
on first launch without a network.

## Features

- USD, TWD, JPY, EUR, GBP, THB, KRW, and 30+ other traveler currencies
- Works in airplane mode after rates are saved (or from the packed snapshot)
- Cheat sheet for common amounts
- Add to Home Screen on iPhone (Safari → Share → Add to Home Screen)
- Service worker caches the app shell on production deploys

## Fork and run locally

You need [Node.js 22+](https://nodejs.org/).

```bash
git clone https://github.com/jonnychn/cashio.git
cd cashio
npm install
npm run dev
```

Open [http://localhost:8080](http://localhost:8080).

Useful scripts:

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server on `0.0.0.0:8080` |
| `npm run build` | Production build (Vercel / Nitro) |
| `npm run typecheck` | TypeScript check |
| `npm run preview` | Serve the production build locally |

No API keys, database, or auth required for the converter. Pair, amount, and
favorites live in `localStorage`.

## Deploy on Vercel

This repo is already wired for Vercel (`nitro` preset in `vite.config.ts`).

1. Fork this repository.
2. Import the fork in [Vercel](https://vercel.com/new).
3. Leave build settings on auto-detect. Framework is Vite / TanStack Start.
4. Deploy. No environment variables are required.

Or click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/jonnychn/cashio)

After it is live, open the URL in **Safari** on iPhone, then Share → Add to
Home Screen. Open it once on Wi-Fi so today’s rates save to the phone.

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

`AGENTS.md` and `.grok/` are for the Grok App Builder sandbox. You can ignore
them when forking.

## License

[MIT](LICENSE)
