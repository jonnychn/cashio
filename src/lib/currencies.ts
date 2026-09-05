export type CurrencyRegion =
  | "Americas"
  | "Europe"
  | "Asia Pacific"
  | "Middle East & Africa";

export type Currency = {
  code: string;
  name: string;
  short: string;
  symbol: string;
  decimals: number;
  region: CurrencyRegion;
};

export const CURRENCIES: Currency[] = [
  { code: "USD", name: "US Dollar", short: "US dollar", symbol: "$", decimals: 2, region: "Americas" },
  { code: "CAD", name: "Canadian Dollar", short: "Canadian dollar", symbol: "CA$", decimals: 2, region: "Americas" },
  { code: "MXN", name: "Mexican Peso", short: "Mexican peso", symbol: "MX$", decimals: 2, region: "Americas" },
  { code: "BRL", name: "Brazilian Real", short: "Brazilian real", symbol: "R$", decimals: 2, region: "Americas" },
  { code: "ARS", name: "Argentine Peso", short: "Argentine peso", symbol: "AR$", decimals: 2, region: "Americas" },
  { code: "CLP", name: "Chilean Peso", short: "Chilean peso", symbol: "CL$", decimals: 0, region: "Americas" },
  { code: "PEN", name: "Peruvian Sol", short: "Peruvian sol", symbol: "S/", decimals: 2, region: "Americas" },
  { code: "EUR", name: "Euro", short: "Euro", symbol: "€", decimals: 2, region: "Europe" },
  { code: "GBP", name: "British Pound", short: "Pound sterling", symbol: "£", decimals: 2, region: "Europe" },
  { code: "CHF", name: "Swiss Franc", short: "Swiss franc", symbol: "Fr", decimals: 2, region: "Europe" },
  { code: "SEK", name: "Swedish Krona", short: "Swedish krona", symbol: "kr", decimals: 2, region: "Europe" },
  { code: "NOK", name: "Norwegian Krone", short: "Norwegian krone", symbol: "kr", decimals: 2, region: "Europe" },
  { code: "DKK", name: "Danish Krone", short: "Danish krone", symbol: "kr", decimals: 2, region: "Europe" },
  { code: "PLN", name: "Polish Zloty", short: "Polish zloty", symbol: "zł", decimals: 2, region: "Europe" },
  { code: "CZK", name: "Czech Koruna", short: "Czech koruna", symbol: "Kč", decimals: 2, region: "Europe" },
  { code: "HUF", name: "Hungarian Forint", short: "Hungarian forint", symbol: "Ft", decimals: 0, region: "Europe" },
  { code: "RON", name: "Romanian Leu", short: "Romanian leu", symbol: "lei", decimals: 2, region: "Europe" },
  { code: "ISK", name: "Icelandic Krona", short: "Icelandic krona", symbol: "kr", decimals: 0, region: "Europe" },
  { code: "TRY", name: "Turkish Lira", short: "Turkish lira", symbol: "₺", decimals: 2, region: "Europe" },
  { code: "TWD", name: "New Taiwan Dollar", short: "Taiwan dollar", symbol: "NT$", decimals: 2, region: "Asia Pacific" },
  { code: "JPY", name: "Japanese Yen", short: "Japanese yen", symbol: "¥", decimals: 0, region: "Asia Pacific" },
  { code: "KRW", name: "South Korean Won", short: "Korean won", symbol: "₩", decimals: 0, region: "Asia Pacific" },
  { code: "CNY", name: "Chinese Yuan", short: "Chinese yuan", symbol: "¥", decimals: 2, region: "Asia Pacific" },
  { code: "HKD", name: "Hong Kong Dollar", short: "Hong Kong dollar", symbol: "HK$", decimals: 2, region: "Asia Pacific" },
  { code: "SGD", name: "Singapore Dollar", short: "Singapore dollar", symbol: "S$", decimals: 2, region: "Asia Pacific" },
  { code: "THB", name: "Thai Baht", short: "Thai baht", symbol: "฿", decimals: 2, region: "Asia Pacific" },
  { code: "MYR", name: "Malaysian Ringgit", short: "Malaysian ringgit", symbol: "RM", decimals: 2, region: "Asia Pacific" },
  { code: "IDR", name: "Indonesian Rupiah", short: "Indonesian rupiah", symbol: "Rp", decimals: 0, region: "Asia Pacific" },
  { code: "PHP", name: "Philippine Peso", short: "Philippine peso", symbol: "₱", decimals: 2, region: "Asia Pacific" },
  { code: "VND", name: "Vietnamese Dong", short: "Vietnamese dong", symbol: "₫", decimals: 0, region: "Asia Pacific" },
  { code: "INR", name: "Indian Rupee", short: "Indian rupee", symbol: "₹", decimals: 2, region: "Asia Pacific" },
  { code: "AUD", name: "Australian Dollar", short: "Australian dollar", symbol: "A$", decimals: 2, region: "Asia Pacific" },
  { code: "NZD", name: "New Zealand Dollar", short: "New Zealand dollar", symbol: "NZ$", decimals: 2, region: "Asia Pacific" },
  { code: "AED", name: "UAE Dirham", short: "UAE dirham", symbol: "AED", decimals: 2, region: "Middle East & Africa" },
  { code: "SAR", name: "Saudi Riyal", short: "Saudi riyal", symbol: "SAR", decimals: 2, region: "Middle East & Africa" },
  { code: "QAR", name: "Qatari Riyal", short: "Qatari riyal", symbol: "QAR", decimals: 2, region: "Middle East & Africa" },
  { code: "KWD", name: "Kuwaiti Dinar", short: "Kuwaiti dinar", symbol: "KD", decimals: 3, region: "Middle East & Africa" },
  { code: "ILS", name: "Israeli Shekel", short: "Israeli shekel", symbol: "₪", decimals: 2, region: "Middle East & Africa" },
  { code: "EGP", name: "Egyptian Pound", short: "Egyptian pound", symbol: "E£", decimals: 2, region: "Middle East & Africa" },
  { code: "MAD", name: "Moroccan Dirham", short: "Moroccan dirham", symbol: "MAD", decimals: 2, region: "Middle East & Africa" },
  { code: "ZAR", name: "South African Rand", short: "South African rand", symbol: "R", decimals: 2, region: "Middle East & Africa" },
];

export const CURRENCY_BY_CODE = Object.fromEntries(
  CURRENCIES.map((c) => [c.code, c]),
) as Record<string, Currency>;

export const QUICK_AMOUNTS = [10, 20, 50, 100, 200, 500, 1000, 5000];

export const CHEAT_AMOUNTS = [1, 5, 10, 20, 50, 100, 200, 500, 1000, 5000];

const REGION_ORDER: CurrencyRegion[] = [
  "Asia Pacific",
  "Europe",
  "Americas",
  "Middle East & Africa",
];

export function groupedCurrencies(list: Currency[] = CURRENCIES) {
  const groups: { region: CurrencyRegion; items: Currency[] }[] = [];
  for (const region of REGION_ORDER) {
    const items = list.filter((c) => c.region === region);
    if (items.length) groups.push({ region, items });
  }
  return groups;
}

export function searchCurrencies(query: string): Currency[] {
  const q = query.trim().toLowerCase();
  if (!q) return CURRENCIES;
  return CURRENCIES.filter((c) => {
    return (
      c.code.toLowerCase().includes(q) ||
      c.name.toLowerCase().includes(q) ||
      c.short.toLowerCase().includes(q) ||
      c.symbol.toLowerCase().includes(q)
    );
  });
}

export function formatMoney(amount: number, code: string, compact = false): string {
  const meta = CURRENCY_BY_CODE[code];
  const decimals = meta?.decimals ?? 2;
  if (!Number.isFinite(amount)) return "—";
  if (compact && Math.abs(amount) >= 1_000_000) {
    return new Intl.NumberFormat(undefined, {
      notation: "compact",
      maximumFractionDigits: 2,
    }).format(amount);
  }
  return new Intl.NumberFormat(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
}

export function stampLetters(code: string): string {
  if (code.length <= 2) return code;
  if (code === "USD" || code === "EUR" || code === "GBP") return code.slice(0, 2);
  if (code.endsWith("D") && code.length === 3) return code.slice(0, 2);
  return code.slice(0, 2);
}
