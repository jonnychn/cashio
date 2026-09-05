# Contributing to Cashio

Thanks for forking or sending a PR. Cashio is a small offline-first converter —
keep changes focused and skip auth, databases, and API keys unless the feature
truly needs them.

## Setup

```bash
git clone https://github.com/YOUR_USER/cashio.git
cd cashio
npm install
npm run dev
```

App runs at [http://localhost:8080](http://localhost:8080).

Before you open a PR:

```bash
npm run typecheck
npm run build
```

## Branch and PR

1. Fork the repo (or clone if you have push access).
2. Create a branch: `git checkout -b feat/add-vnd-cheat-amounts`.
3. Keep the diff small. One idea per PR.
4. Open a PR against `jonnychn/cashio` `main` with a short description of
   what a traveler will notice.

## Common changes

### Add a currency

Edit `src/lib/currencies.ts`. Each entry needs:

- `code` — ISO 4217 (must exist in the ER-API USD feed)
- `name` / `short` — shown in the picker
- `symbol` — prefix on amounts
- `decimals` — `0` for JPY/KRW-style currencies, `2` for most others
- `region` — one of `Americas`, `Europe`, `Asia Pacific`, `Middle East & Africa`

Then add the same code to `src/lib/rates-snapshot.ts` so first launch offline
still converts.

### Change the live feed

`src/lib/rates.ts` calls `https://open.er-api.com/v6/latest/USD`. Swap the URL
only if the replacement returns `{ rates: { USD: 1, ... } }`.

### UI

The converter lives in `src/components/cambio-app.tsx`. The currency picker is
`src/components/currency-sheet.tsx`. State is Zustand in `src/store/cambio.ts`
and is persisted with `src/lib/storage.ts`.

Please keep the layout usable at iPhone width (~390px): no horizontal overflow,
big tap targets.

## What not to add

- Secrets or `.env` files — the converter does not need them
- Auth or a database for “saving rates” — `localStorage` is the product
- Replacing the bundled snapshot with a network-only first load — that breaks
  airplane-mode on first open

## License

By contributing you agree the work is released under the [MIT License](LICENSE).
