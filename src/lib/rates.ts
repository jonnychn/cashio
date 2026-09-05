import { createServerFn } from "@tanstack/react-start";
import { SNAPSHOT_FETCHED_AT, SNAPSHOT_RATES } from "@/lib/rates-snapshot";

export type RateSource = "live" | "cached" | "bundled";

export type RatesPayload = {
  rates: Record<string, number>;
  fetchedAt: number;
};

const RATES_URL = "https://open.er-api.com/v6/latest/USD";

async function parseErApi(res: Response): Promise<RatesPayload> {
  if (!res.ok) throw new Error(`Rates request failed (${res.status})`);
  const data = (await res.json()) as {
    result?: string;
    rates?: Record<string, number>;
    time_last_update_unix?: number;
  };
  if (!data.rates || typeof data.rates.USD !== "number") {
    throw new Error("Rates payload was incomplete");
  }
  const fetchedAt = Date.now();
  return { rates: data.rates, fetchedAt };
}

export const pullRatesViaServer = createServerFn({ method: "GET" }).handler(
  async (): Promise<RatesPayload> => {
    const res = await fetch(RATES_URL, {
      headers: { accept: "application/json" },
    });
    return parseErApi(res);
  },
);

export async function pullRatesDirect(): Promise<RatesPayload> {
  const res = await fetch(RATES_URL, {
    headers: { accept: "application/json" },
  });
  return parseErApi(res);
}

export async function pullLiveRates(): Promise<RatesPayload> {
  try {
    return await pullRatesDirect();
  } catch {
    return await pullRatesViaServer();
  }
}

export function convertAmount(
  amount: number,
  from: string,
  to: string,
  rates: Record<string, number>,
): number | null {
  if (!Number.isFinite(amount)) return null;
  const a = rates[from];
  const b = rates[to];
  if (typeof a !== "number" || typeof b !== "number" || a === 0) return null;
  return amount * (b / a);
}

export function bundledRates(): RatesPayload {
  return { rates: SNAPSHOT_RATES, fetchedAt: SNAPSHOT_FETCHED_AT };
}

export function parseAmount(raw: string): number {
  const cleaned = raw.replace(/,/g, "").trim();
  if (!cleaned) return 0;
  const n = Number(cleaned);
  return Number.isFinite(n) ? n : 0;
}
