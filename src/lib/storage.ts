const PREFS_KEY = "cambio:prefs";
const RATES_KEY = "cambio:rates";

export type CambioPrefs = {
  amount: string;
  from: string;
  to: string;
  favorites: string[];
};

export type CachedRates = {
  rates: Record<string, number>;
  fetchedAt: number;
};

function readJson<T>(key: string): T | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return null;
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
}

export function loadPrefs(): CambioPrefs | null {
  const data = readJson<CambioPrefs>(PREFS_KEY);
  if (!data || typeof data.from !== "string" || typeof data.to !== "string") {
    return null;
  }
  return {
    amount: typeof data.amount === "string" ? data.amount : "100",
    from: data.from,
    to: data.to,
    favorites: Array.isArray(data.favorites)
      ? data.favorites.filter((c): c is string => typeof c === "string")
      : [],
  };
}

export function savePrefs(prefs: CambioPrefs) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    /* quota / private mode */
  }
}

export function loadCachedRates(): CachedRates | null {
  const data = readJson<CachedRates>(RATES_KEY);
  if (!data || !data.rates || typeof data.fetchedAt !== "number") return null;
  return data;
}

export function saveCachedRates(payload: CachedRates) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(RATES_KEY, JSON.stringify(payload));
  } catch {
    /* quota / private mode */
  }
}
