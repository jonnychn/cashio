import { create } from "zustand";
import { bundledRates, convertAmount, parseAmount, pullLiveRates, type RateSource } from "@/lib/rates";
import { CURRENCY_BY_CODE } from "@/lib/currencies";
import { loadCachedRates, loadPrefs, saveCachedRates, savePrefs } from "@/lib/storage";

type CambioState = {
  amount: string;
  from: string;
  to: string;
  favorites: string[];
  rates: Record<string, number>;
  fetchedAt: number;
  source: RateSource;
  online: boolean;
  refreshing: boolean;
  error: string | null;
  copied: boolean;
  ready: boolean;
  hydrate: () => void;
  setAmount: (value: string) => void;
  setFrom: (code: string) => void;
  setTo: (code: string) => void;
  swap: () => void;
  toggleFavorite: (code: string) => void;
  setOnline: (online: boolean) => void;
  refresh: () => Promise<void>;
  copyResult: () => Promise<void>;
};

const DEFAULT_FROM = "USD";
const DEFAULT_TO = "TWD";

function persist(get: () => CambioState) {
  const { amount, from, to, favorites } = get();
  savePrefs({ amount, from, to, favorites });
}

export const useCambio = create<CambioState>((set, get) => ({
  amount: "100",
  from: DEFAULT_FROM,
  to: DEFAULT_TO,
  favorites: ["USD", "TWD", "EUR", "JPY"],
  rates: bundledRates().rates,
  fetchedAt: bundledRates().fetchedAt,
  source: "bundled",
  online: true,
  refreshing: false,
  error: null,
  copied: false,
  ready: false,

  hydrate: () => {
    const prefs = loadPrefs();
    const cached = loadCachedRates();
    const next: Partial<CambioState> = { ready: true };
    if (prefs) {
      if (CURRENCY_BY_CODE[prefs.from]) next.from = prefs.from;
      if (CURRENCY_BY_CODE[prefs.to]) next.to = prefs.to;
      if (prefs.amount) next.amount = prefs.amount;
      if (prefs.favorites.length) next.favorites = prefs.favorites;
    }
    if (cached && Object.keys(cached.rates).length > 1) {
      next.rates = cached.rates;
      next.fetchedAt = cached.fetchedAt;
      next.source = "cached";
    }
    if (typeof navigator !== "undefined") next.online = navigator.onLine;
    set(next);
    void get().refresh();
  },

  setAmount: (value) => {
    set({ amount: value, copied: false });
    persist(get);
  },

  setFrom: (code) => {
    const { to } = get();
    if (code === to) {
      set({ from: code, to: get().from, copied: false });
    } else {
      set({ from: code, copied: false });
    }
    persist(get);
  },

  setTo: (code) => {
    const { from } = get();
    if (code === from) {
      set({ to: code, from: get().to, copied: false });
    } else {
      set({ to: code, copied: false });
    }
    persist(get);
  },

  swap: () => {
    const { from, to, amount, rates } = get();
    const n = parseAmount(amount);
    const converted = convertAmount(n, from, to, rates);
    const nextAmount =
      converted != null && Number.isFinite(converted)
        ? String(Number(converted.toFixed(CURRENCY_BY_CODE[to]?.decimals ?? 2)))
        : amount;
    set({ from: to, to: from, amount: nextAmount, copied: false });
    persist(get);
  },

  toggleFavorite: (code) => {
    const { favorites } = get();
    const next = favorites.includes(code)
      ? favorites.filter((c) => c !== code)
      : [...favorites, code];
    set({ favorites: next });
    persist(get);
  },

  setOnline: (online) => set({ online }),

  refresh: async () => {
    if (get().refreshing) return;
    set({ refreshing: true, error: null });
    try {
      const payload = await pullLiveRates();
      saveCachedRates(payload);
      set({
        rates: payload.rates,
        fetchedAt: payload.fetchedAt,
        source: "live",
        refreshing: false,
        error: null,
      });
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Could not refresh rates";
      set({
        refreshing: false,
        error: get().online ? message : null,
      });
    }
  },

  copyResult: async () => {
    const { amount, from, to, rates } = get();
    const n = parseAmount(amount);
    const converted = convertAmount(n, from, to, rates);
    if (converted == null) return;
    const text = `${n} ${from} = ${converted} ${to}`;
    try {
      await navigator.clipboard.writeText(text);
      set({ copied: true });
      window.setTimeout(() => {
        if (get().copied) set({ copied: false });
      }, 1600);
    } catch {
      /* clipboard may be blocked in iframe */
    }
  },
}));
