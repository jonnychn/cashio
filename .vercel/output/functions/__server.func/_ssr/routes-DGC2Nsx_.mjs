import { i as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { l as Slot } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { n as TSS_SERVER_FUNCTION, r as getServerFnById, t as createServerFn } from "./ssr.mjs";
import { a as RefreshCw, c as ArrowDownUp, i as Search, o as Copy, r as Star, s as Check, t as WifiOff } from "../_libs/lucide-react.mjs";
import { t as Drawer } from "../_libs/vaul.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as create } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DGC2Nsx_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CURRENCIES = [
	{
		code: "USD",
		name: "US Dollar",
		short: "US dollar",
		symbol: "$",
		decimals: 2,
		region: "Americas"
	},
	{
		code: "CAD",
		name: "Canadian Dollar",
		short: "Canadian dollar",
		symbol: "CA$",
		decimals: 2,
		region: "Americas"
	},
	{
		code: "MXN",
		name: "Mexican Peso",
		short: "Mexican peso",
		symbol: "MX$",
		decimals: 2,
		region: "Americas"
	},
	{
		code: "BRL",
		name: "Brazilian Real",
		short: "Brazilian real",
		symbol: "R$",
		decimals: 2,
		region: "Americas"
	},
	{
		code: "ARS",
		name: "Argentine Peso",
		short: "Argentine peso",
		symbol: "AR$",
		decimals: 2,
		region: "Americas"
	},
	{
		code: "CLP",
		name: "Chilean Peso",
		short: "Chilean peso",
		symbol: "CL$",
		decimals: 0,
		region: "Americas"
	},
	{
		code: "PEN",
		name: "Peruvian Sol",
		short: "Peruvian sol",
		symbol: "S/",
		decimals: 2,
		region: "Americas"
	},
	{
		code: "EUR",
		name: "Euro",
		short: "Euro",
		symbol: "€",
		decimals: 2,
		region: "Europe"
	},
	{
		code: "GBP",
		name: "British Pound",
		short: "Pound sterling",
		symbol: "£",
		decimals: 2,
		region: "Europe"
	},
	{
		code: "CHF",
		name: "Swiss Franc",
		short: "Swiss franc",
		symbol: "Fr",
		decimals: 2,
		region: "Europe"
	},
	{
		code: "SEK",
		name: "Swedish Krona",
		short: "Swedish krona",
		symbol: "kr",
		decimals: 2,
		region: "Europe"
	},
	{
		code: "NOK",
		name: "Norwegian Krone",
		short: "Norwegian krone",
		symbol: "kr",
		decimals: 2,
		region: "Europe"
	},
	{
		code: "DKK",
		name: "Danish Krone",
		short: "Danish krone",
		symbol: "kr",
		decimals: 2,
		region: "Europe"
	},
	{
		code: "PLN",
		name: "Polish Zloty",
		short: "Polish zloty",
		symbol: "zł",
		decimals: 2,
		region: "Europe"
	},
	{
		code: "CZK",
		name: "Czech Koruna",
		short: "Czech koruna",
		symbol: "Kč",
		decimals: 2,
		region: "Europe"
	},
	{
		code: "HUF",
		name: "Hungarian Forint",
		short: "Hungarian forint",
		symbol: "Ft",
		decimals: 0,
		region: "Europe"
	},
	{
		code: "RON",
		name: "Romanian Leu",
		short: "Romanian leu",
		symbol: "lei",
		decimals: 2,
		region: "Europe"
	},
	{
		code: "ISK",
		name: "Icelandic Krona",
		short: "Icelandic krona",
		symbol: "kr",
		decimals: 0,
		region: "Europe"
	},
	{
		code: "TRY",
		name: "Turkish Lira",
		short: "Turkish lira",
		symbol: "₺",
		decimals: 2,
		region: "Europe"
	},
	{
		code: "TWD",
		name: "New Taiwan Dollar",
		short: "Taiwan dollar",
		symbol: "NT$",
		decimals: 2,
		region: "Asia Pacific"
	},
	{
		code: "JPY",
		name: "Japanese Yen",
		short: "Japanese yen",
		symbol: "¥",
		decimals: 0,
		region: "Asia Pacific"
	},
	{
		code: "KRW",
		name: "South Korean Won",
		short: "Korean won",
		symbol: "₩",
		decimals: 0,
		region: "Asia Pacific"
	},
	{
		code: "CNY",
		name: "Chinese Yuan",
		short: "Chinese yuan",
		symbol: "¥",
		decimals: 2,
		region: "Asia Pacific"
	},
	{
		code: "HKD",
		name: "Hong Kong Dollar",
		short: "Hong Kong dollar",
		symbol: "HK$",
		decimals: 2,
		region: "Asia Pacific"
	},
	{
		code: "SGD",
		name: "Singapore Dollar",
		short: "Singapore dollar",
		symbol: "S$",
		decimals: 2,
		region: "Asia Pacific"
	},
	{
		code: "THB",
		name: "Thai Baht",
		short: "Thai baht",
		symbol: "฿",
		decimals: 2,
		region: "Asia Pacific"
	},
	{
		code: "MYR",
		name: "Malaysian Ringgit",
		short: "Malaysian ringgit",
		symbol: "RM",
		decimals: 2,
		region: "Asia Pacific"
	},
	{
		code: "IDR",
		name: "Indonesian Rupiah",
		short: "Indonesian rupiah",
		symbol: "Rp",
		decimals: 0,
		region: "Asia Pacific"
	},
	{
		code: "PHP",
		name: "Philippine Peso",
		short: "Philippine peso",
		symbol: "₱",
		decimals: 2,
		region: "Asia Pacific"
	},
	{
		code: "VND",
		name: "Vietnamese Dong",
		short: "Vietnamese dong",
		symbol: "₫",
		decimals: 0,
		region: "Asia Pacific"
	},
	{
		code: "INR",
		name: "Indian Rupee",
		short: "Indian rupee",
		symbol: "₹",
		decimals: 2,
		region: "Asia Pacific"
	},
	{
		code: "AUD",
		name: "Australian Dollar",
		short: "Australian dollar",
		symbol: "A$",
		decimals: 2,
		region: "Asia Pacific"
	},
	{
		code: "NZD",
		name: "New Zealand Dollar",
		short: "New Zealand dollar",
		symbol: "NZ$",
		decimals: 2,
		region: "Asia Pacific"
	},
	{
		code: "AED",
		name: "UAE Dirham",
		short: "UAE dirham",
		symbol: "AED",
		decimals: 2,
		region: "Middle East & Africa"
	},
	{
		code: "SAR",
		name: "Saudi Riyal",
		short: "Saudi riyal",
		symbol: "SAR",
		decimals: 2,
		region: "Middle East & Africa"
	},
	{
		code: "QAR",
		name: "Qatari Riyal",
		short: "Qatari riyal",
		symbol: "QAR",
		decimals: 2,
		region: "Middle East & Africa"
	},
	{
		code: "KWD",
		name: "Kuwaiti Dinar",
		short: "Kuwaiti dinar",
		symbol: "KD",
		decimals: 3,
		region: "Middle East & Africa"
	},
	{
		code: "ILS",
		name: "Israeli Shekel",
		short: "Israeli shekel",
		symbol: "₪",
		decimals: 2,
		region: "Middle East & Africa"
	},
	{
		code: "EGP",
		name: "Egyptian Pound",
		short: "Egyptian pound",
		symbol: "E£",
		decimals: 2,
		region: "Middle East & Africa"
	},
	{
		code: "MAD",
		name: "Moroccan Dirham",
		short: "Moroccan dirham",
		symbol: "MAD",
		decimals: 2,
		region: "Middle East & Africa"
	},
	{
		code: "ZAR",
		name: "South African Rand",
		short: "South African rand",
		symbol: "R",
		decimals: 2,
		region: "Middle East & Africa"
	}
];
var CURRENCY_BY_CODE = Object.fromEntries(CURRENCIES.map((c) => [c.code, c]));
var QUICK_AMOUNTS = [
	10,
	20,
	50,
	100,
	200,
	500,
	1e3,
	5e3
];
var CHEAT_AMOUNTS = [
	1,
	5,
	10,
	20,
	50,
	100,
	200,
	500,
	1e3,
	5e3
];
var REGION_ORDER = [
	"Asia Pacific",
	"Europe",
	"Americas",
	"Middle East & Africa"
];
function groupedCurrencies(list = CURRENCIES) {
	const groups = [];
	for (const region of REGION_ORDER) {
		const items = list.filter((c) => c.region === region);
		if (items.length) groups.push({
			region,
			items
		});
	}
	return groups;
}
function searchCurrencies(query) {
	const q = query.trim().toLowerCase();
	if (!q) return CURRENCIES;
	return CURRENCIES.filter((c) => {
		return c.code.toLowerCase().includes(q) || c.name.toLowerCase().includes(q) || c.short.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q);
	});
}
function formatMoney(amount, code, compact = false) {
	const decimals = CURRENCY_BY_CODE[code]?.decimals ?? 2;
	if (!Number.isFinite(amount)) return "—";
	if (compact && Math.abs(amount) >= 1e6) return new Intl.NumberFormat(void 0, {
		notation: "compact",
		maximumFractionDigits: 2
	}).format(amount);
	return new Intl.NumberFormat(void 0, {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals
	}).format(amount);
}
function stampLetters(code) {
	if (code.length <= 2) return code;
	if (code === "USD" || code === "EUR" || code === "GBP") return code.slice(0, 2);
	if (code.endsWith("D") && code.length === 3) return code.slice(0, 2);
	return code.slice(0, 2);
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Stamp({ code, active }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid size-11 shrink-0 place-items-center rounded-[var(--radius-sm)] font-display text-sm font-semibold tracking-wide", active ? "bg-accent text-accent-fg" : "bg-accent/10 text-accent"),
		children: stampLetters(code)
	});
}
function Row({ currency, selected, favorited, onSelect, onToggleFavorite }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex items-center gap-3 rounded-[var(--radius-lg)] px-2 py-1.5", selected && "bg-accent/10"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: onSelect,
			className: "flex min-h-12 min-w-0 flex-1 items-center gap-3 text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stamp, {
				code: currency.code,
				active: selected
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate font-medium text-ink",
					children: currency.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block text-sm text-muted",
					children: currency.code
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: onToggleFavorite,
			"aria-label": favorited ? `Unpin ${currency.code}` : `Pin ${currency.code}`,
			className: "grid size-11 place-items-center rounded-[var(--radius-sm)] text-faint hover:text-ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				className: "size-4",
				strokeWidth: 1.75,
				fill: favorited ? "currentColor" : "none"
			})
		})]
	});
}
function CurrencySheet({ open, onOpenChange, value, onSelect, favorites, onToggleFavorite, title }) {
	const [query, setQuery] = (0, import_react.useState)("");
	const results = (0, import_react.useMemo)(() => searchCurrencies(query), [query]);
	const favItems = (0, import_react.useMemo)(() => favorites.map((code) => CURRENCY_BY_CODE[code]).filter((c) => Boolean(c)).filter((c) => results.some((r) => r.code === c.code)), [favorites, results]);
	const groups = (0, import_react.useMemo)(() => groupedCurrencies(results), [results]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Root, {
		open,
		onOpenChange: (next) => {
			onOpenChange(next);
			if (!next) setQuery("");
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Portal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Overlay, { className: "fixed inset-0 z-40 bg-ink/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Drawer.Content, {
			className: "fixed inset-x-0 bottom-0 z-50 flex h-[88dvh] flex-col rounded-t-[var(--radius-2xl)] bg-surface text-ink shadow-[var(--shadow-border)] outline-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-auto mt-3 h-1 w-10 rounded-full bg-ink/15" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Title, {
					className: "px-5 pt-4 font-display text-xl tracking-tight",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-5 pt-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-raised px-3 shadow-[var(--shadow-border)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
							className: "size-4 shrink-0 text-faint",
							strokeWidth: 1.75
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: query,
							onChange: (e) => setQuery(e.target.value),
							placeholder: "Search dollars, yen, baht…",
							"aria-label": "Search currencies",
							className: "h-full w-full bg-transparent text-base text-ink outline-none placeholder:text-faint",
							autoCapitalize: "off",
							autoCorrect: "off",
							spellCheck: false
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 min-h-0 flex-1 overflow-y-auto px-3 pb-[max(1.5rem,env(safe-area-inset-bottom))]",
					children: [
						favItems.length > 0 && !query.trim() && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "px-2 pb-1 text-xs font-medium uppercase tracking-[0.14em] text-faint",
								children: "Pinned"
							}), favItems.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								currency: c,
								selected: c.code === value,
								favorited: true,
								onSelect: () => {
									onSelect(c.code);
									onOpenChange(false);
								},
								onToggleFavorite: () => onToggleFavorite(c.code)
							}, `fav-${c.code}`))]
						}),
						groups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
							className: "mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "px-2 pb-1 text-xs font-medium uppercase tracking-[0.14em] text-faint",
								children: group.region
							}), group.items.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
								currency: c,
								selected: c.code === value,
								favorited: favorites.includes(c.code),
								onSelect: () => {
									onSelect(c.code);
									onOpenChange(false);
								},
								onToggleFavorite: () => onToggleFavorite(c.code)
							}, c.code))]
						}, group.region)),
						results.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "px-2 py-8 text-center text-sm text-muted",
							children: [
								"No currencies match “",
								query,
								"”."
							]
						})
					]
				})
			]
		})] })
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 font-medium select-none disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:not-disabled:scale-[0.96] transition-[scale,background-color,color,opacity] duration-150 ease-out", {
	variants: {
		variant: {
			solid: "bg-accent text-accent-fg shadow-[var(--shadow-border)] hover:bg-stamp",
			ghost: "bg-transparent text-ink hover:bg-ink/5",
			outline: "bg-raised text-ink shadow-[var(--shadow-border)] hover:bg-surface",
			chip: "bg-raised text-ink shadow-[var(--shadow-border)] hover:bg-accent hover:text-accent-fg data-[active=true]:bg-accent data-[active=true]:text-accent-fg"
		},
		size: {
			sm: "h-9 rounded-[var(--radius-sm)] px-3 text-sm",
			md: "h-11 rounded-[var(--radius-md)] px-4 text-sm",
			lg: "h-12 rounded-[var(--radius-md)] px-5 text-base",
			icon: "size-11 rounded-[var(--radius-md)]",
			chip: "h-10 rounded-full px-3.5 text-sm tabular-nums"
		}
	},
	defaultVariants: {
		variant: "solid",
		size: "md"
	}
});
function Button({ className, variant, size, asChild = false, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size
		}), className),
		...props
	});
}
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
/** Bundled mid-market USD rates so the converter works before any network. */
var SNAPSHOT_FETCHED_AT = 1788566552e3;
var SNAPSHOT_RATES = {
	USD: 1,
	AED: 3.6725,
	ARS: 1507.3745,
	AUD: 1.388189,
	BRL: 5.111452,
	CAD: 1.382855,
	CHF: .809855,
	CLP: 932.412272,
	CNY: 6.728858,
	CZK: 20.821419,
	DKK: 6.432372,
	EGP: 50.944245,
	EUR: .861117,
	GBP: .739612,
	HKD: 7.840994,
	HUF: 311.876276,
	IDR: 17674.218391,
	ILS: 3.011277,
	INR: 94.51761,
	ISK: 121.168844,
	JPY: 156.156625,
	KRW: 1348.990395,
	KWD: .308726,
	MAD: 9.348756,
	MXN: 16.894736,
	MYR: 4.044043,
	NOK: 9.302202,
	NZD: 1.700319,
	PEN: 3.360932,
	PHP: 62.696582,
	PLN: 3.711676,
	QAR: 3.64,
	RON: 4.520983,
	SAR: 3.75,
	SEK: 9.565227,
	SGD: 1.266802,
	THB: 32.914495,
	TRY: 48.416604,
	TWD: 31.630012,
	VND: 26025.122751,
	ZAR: 15.966228
};
var RATES_URL = "https://open.er-api.com/v6/latest/USD";
async function parseErApi(res) {
	if (!res.ok) throw new Error(`Rates request failed (${res.status})`);
	const data = await res.json();
	if (!data.rates || typeof data.rates.USD !== "number") throw new Error("Rates payload was incomplete");
	const fetchedAt = Date.now();
	return {
		rates: data.rates,
		fetchedAt
	};
}
var pullRatesViaServer = createServerFn({ method: "GET" }).handler(createSsrRpc("be0d273ea49712ffe9d5a7db59c031ad95c8da4ba3acd7a4a805ae7b56a09236"));
async function pullRatesDirect() {
	return parseErApi(await fetch(RATES_URL, { headers: { accept: "application/json" } }));
}
async function pullLiveRates() {
	try {
		return await pullRatesDirect();
	} catch {
		return await pullRatesViaServer();
	}
}
function convertAmount(amount, from, to, rates) {
	if (!Number.isFinite(amount)) return null;
	const a = rates[from];
	const b = rates[to];
	if (typeof a !== "number" || typeof b !== "number" || a === 0) return null;
	return amount * (b / a);
}
function bundledRates() {
	return {
		rates: SNAPSHOT_RATES,
		fetchedAt: SNAPSHOT_FETCHED_AT
	};
}
function parseAmount(raw) {
	const cleaned = raw.replace(/,/g, "").trim();
	if (!cleaned) return 0;
	const n = Number(cleaned);
	return Number.isFinite(n) ? n : 0;
}
var PREFS_KEY = "cambio:prefs";
var RATES_KEY = "cambio:rates";
function readJson(key) {
	if (typeof window === "undefined") return null;
	try {
		const raw = window.localStorage.getItem(key);
		if (!raw) return null;
		return JSON.parse(raw);
	} catch {
		return null;
	}
}
function loadPrefs() {
	const data = readJson(PREFS_KEY);
	if (!data || typeof data.from !== "string" || typeof data.to !== "string") return null;
	return {
		amount: typeof data.amount === "string" ? data.amount : "100",
		from: data.from,
		to: data.to,
		favorites: Array.isArray(data.favorites) ? data.favorites.filter((c) => typeof c === "string") : []
	};
}
function savePrefs(prefs) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
	} catch {}
}
function loadCachedRates() {
	const data = readJson(RATES_KEY);
	if (!data || !data.rates || typeof data.fetchedAt !== "number") return null;
	return data;
}
function saveCachedRates(payload) {
	if (typeof window === "undefined") return;
	try {
		window.localStorage.setItem(RATES_KEY, JSON.stringify(payload));
	} catch {}
}
var DEFAULT_FROM = "USD";
var DEFAULT_TO = "TWD";
function persist(get) {
	const { amount, from, to, favorites } = get();
	savePrefs({
		amount,
		from,
		to,
		favorites
	});
}
var useCambio = create((set, get) => ({
	amount: "100",
	from: DEFAULT_FROM,
	to: DEFAULT_TO,
	favorites: [
		"USD",
		"TWD",
		"EUR",
		"JPY"
	],
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
		const next = { ready: true };
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
		get().refresh();
	},
	setAmount: (value) => {
		set({
			amount: value,
			copied: false
		});
		persist(get);
	},
	setFrom: (code) => {
		const { to } = get();
		if (code === to) set({
			from: code,
			to: get().from,
			copied: false
		});
		else set({
			from: code,
			copied: false
		});
		persist(get);
	},
	setTo: (code) => {
		const { from } = get();
		if (code === from) set({
			to: code,
			from: get().to,
			copied: false
		});
		else set({
			to: code,
			copied: false
		});
		persist(get);
	},
	swap: () => {
		const { from, to, amount, rates } = get();
		const converted = convertAmount(parseAmount(amount), from, to, rates);
		set({
			from: to,
			to: from,
			amount: converted != null && Number.isFinite(converted) ? String(Number(converted.toFixed(CURRENCY_BY_CODE[to]?.decimals ?? 2))) : amount,
			copied: false
		});
		persist(get);
	},
	toggleFavorite: (code) => {
		const { favorites } = get();
		set({ favorites: favorites.includes(code) ? favorites.filter((c) => c !== code) : [...favorites, code] });
		persist(get);
	},
	setOnline: (online) => set({ online }),
	refresh: async () => {
		if (get().refreshing) return;
		set({
			refreshing: true,
			error: null
		});
		try {
			const payload = await pullLiveRates();
			saveCachedRates(payload);
			set({
				rates: payload.rates,
				fetchedAt: payload.fetchedAt,
				source: "live",
				refreshing: false,
				error: null
			});
		} catch (err) {
			const message = err instanceof Error ? err.message : "Could not refresh rates";
			set({
				refreshing: false,
				error: get().online ? message : null
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
		} catch {}
	}
}));
function formatRateAge(fetchedAt) {
	const delta = Date.now() - fetchedAt;
	if (delta < 6e4) return "just now";
	if (delta < 36e5) return `${Math.round(delta / 6e4)} min ago`;
	if (delta < 864e5) return `${Math.round(delta / 36e5)} hr ago`;
	if (Math.round(delta / 864e5) === 1) return "yesterday";
	return new Intl.DateTimeFormat(void 0, {
		month: "short",
		day: "numeric"
	}).format(new Date(fetchedAt));
}
function isStandalone() {
	if (typeof window === "undefined") return false;
	return window.navigator.standalone === true || window.matchMedia("(display-mode: standalone)").matches;
}
function CurrencyTrigger({ code, onClick }) {
	const meta = CURRENCY_BY_CODE[code];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: "flex min-h-14 w-full items-center gap-3 rounded-[var(--radius-lg)] bg-raised px-3 text-left shadow-[var(--shadow-border)] transition-[scale,background-color] duration-150 ease-out active:scale-[0.98]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-10 place-items-center rounded-[var(--radius-sm)] bg-accent font-display text-sm font-semibold text-accent-fg",
				children: stampLetters(code)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-medium tracking-wide text-ink",
					children: code
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block truncate text-sm text-muted",
					children: meta?.name ?? code
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs font-medium uppercase tracking-[0.12em] text-faint",
				children: "Change"
			})
		]
	});
}
function CambioApp() {
	const amount = useCambio((s) => s.amount);
	const from = useCambio((s) => s.from);
	const to = useCambio((s) => s.to);
	const favorites = useCambio((s) => s.favorites);
	const rates = useCambio((s) => s.rates);
	const fetchedAt = useCambio((s) => s.fetchedAt);
	const source = useCambio((s) => s.source);
	const online = useCambio((s) => s.online);
	const refreshing = useCambio((s) => s.refreshing);
	const copied = useCambio((s) => s.copied);
	const hydrate = useCambio((s) => s.hydrate);
	const setAmount = useCambio((s) => s.setAmount);
	const setFrom = useCambio((s) => s.setFrom);
	const setTo = useCambio((s) => s.setTo);
	const swap = useCambio((s) => s.swap);
	const toggleFavorite = useCambio((s) => s.toggleFavorite);
	const setOnline = useCambio((s) => s.setOnline);
	const refresh = useCambio((s) => s.refresh);
	const copyResult = useCambio((s) => s.copyResult);
	const [picker, setPicker] = (0, import_react.useState)(null);
	const [installed, setInstalled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		hydrate();
		setInstalled(isStandalone());
		const on = () => setOnline(true);
		const off = () => setOnline(false);
		window.addEventListener("online", on);
		window.addEventListener("offline", off);
		return () => {
			window.removeEventListener("online", on);
			window.removeEventListener("offline", off);
		};
	}, [hydrate, setOnline]);
	const parsed = parseAmount(amount);
	const converted = convertAmount(parsed, from, to, rates);
	const inverse = convertAmount(1, from, to, rates);
	const fromMeta = CURRENCY_BY_CODE[from];
	const toMeta = CURRENCY_BY_CODE[to];
	const cheatRows = (0, import_react.useMemo)(() => {
		return CHEAT_AMOUNTS.map((n) => ({
			n,
			out: convertAmount(n, from, to, rates)
		}));
	}, [
		from,
		to,
		rates
	]);
	const statusLabel = !online ? "Offline" : refreshing && source !== "live" ? "Updating" : source === "live" ? "Live rates" : source === "cached" ? "Saved rates" : "Packed rates";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto min-h-dvh w-full max-w-5xl overflow-x-hidden px-4 pb-20 pt-[max(1.25rem,env(safe-area-inset-top))]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex items-start justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium uppercase tracking-[0.22em] text-faint",
					children: "Pocket bureau"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-brand leading-tight tracking-tight text-ink",
					children: "Cashio"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("mt-1 inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-medium", online ? "bg-accent/10 text-accent" : "bg-ink/10 text-muted"),
					children: [!online && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WifiOff, {
						className: "size-3.5",
						strokeWidth: 1.75
					}), statusLabel]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid items-start gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium uppercase tracking-[0.16em] text-faint",
						children: "You get"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => void copyResult(),
						className: "mt-1 w-full text-left",
						"aria-label": "Copy converted amount",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-hero leading-none tracking-tight text-ink tabular-nums break-all",
							children: converted == null ? "—" : formatMoney(converted, to, Math.abs(converted) >= 1e5)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 flex items-center gap-2 text-sm text-muted",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								toMeta?.symbol,
								" ",
								toMeta?.name ?? to
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "inline-flex items-center gap-1 text-faint",
								children: copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-3.5",
									strokeWidth: 2
								}), "Copied"] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, {
									className: "size-3.5",
									strokeWidth: 1.75
								}), "Copy"] })
							})]
						})]
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-8 rounded-[var(--radius-2xl)] bg-surface p-4 shadow-[var(--shadow-border)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-medium uppercase tracking-[0.16em] text-faint",
									children: "You have"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-baseline gap-2 border-b border-border pb-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-display text-lg text-muted",
										children: fromMeta?.symbol
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										value: amount,
										onChange: (e) => {
											const next = e.target.value.replace(/[^0-9.,]/g, "");
											setAmount(next);
										},
										inputMode: "decimal",
										enterKeyHint: "done",
										className: "w-full bg-transparent font-display text-amount leading-none tracking-tight text-ink tabular-nums outline-none placeholder:text-faint",
										placeholder: "0",
										"aria-label": "Amount to convert",
										id: "amount"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencyTrigger, {
									code: from,
									onClick: () => setPicker("from")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative my-1 flex justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "button",
									variant: "outline",
									size: "icon",
									onClick: swap,
									"aria-label": "Swap currencies",
									className: "relative z-10 size-12 rounded-full bg-raised",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDownUp, {
										className: "size-4",
										strokeWidth: 1.75
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencyTrigger, {
								code: to,
								onClick: () => setPicker("to")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 flex flex-wrap gap-2",
								children: QUICK_AMOUNTS.map((n) => {
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "button",
										variant: "chip",
										size: "chip",
										"data-active": parsed === n && amount !== "",
										onClick: () => setAmount(String(n)),
										children: n >= 1e3 ? `${n / 1e3}k` : n
									}, n);
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between gap-3 text-sm text-muted",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: inverse == null ? "Rate unavailable for this pair" : `1 ${from} = ${formatMoney(inverse, to)} ${to}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							onClick: () => void refresh(),
							disabled: refreshing || !online,
							className: "inline-flex h-11 items-center gap-1.5 rounded-[var(--radius-sm)] px-2 text-ink disabled:text-faint",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, {
								className: cn("size-3.5", refreshing && "animate-spin"),
								strokeWidth: 1.75
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: formatRateAge(fetchedAt) })]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-end justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-2xl tracking-tight",
								children: "Cheat sheet"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs uppercase tracking-[0.14em] text-faint",
								children: [
									from,
									" → ",
									to
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: "Mid-market. Cash desks take a cut."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 overflow-hidden rounded-[var(--radius-xl)] bg-surface shadow-[var(--shadow-border)]",
							children: cheatRows.map((row, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: cn("flex items-baseline justify-between px-4 py-3", i !== 0 && "border-t border-border"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "tabular-nums text-muted",
									children: [
										formatMoney(row.n, from),
										" ",
										from
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium tabular-nums text-ink",
									children: [
										row.out == null ? "—" : formatMoney(row.out, to),
										" ",
										to
									]
								})]
							}, row.n))
						})
					] }),
					!installed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mt-6 rounded-[var(--radius-xl)] bg-accent p-5 text-accent-fg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display text-xl tracking-tight",
								children: "Use it like an app"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "mt-3 space-y-2 text-sm leading-relaxed text-accent-fg/85",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "1. Open this page in Safari on iPhone." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "2. Tap Share, then Add to Home Screen." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "3. Open it once on Wi-Fi so today’s rates are saved on the phone." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "4. After that it still converts in airplane mode." })
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-xs leading-relaxed text-accent-fg/70",
								children: "A webpage cannot browse the live internet without a connection. This one caches itself and the last rates, which is what a bureau desk actually needs overseas."
							})
						]
					}),
					installed && !online && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-6 text-sm leading-relaxed text-muted",
						children: [
							"No signal. Using rates saved ",
							formatRateAge(fetchedAt),
							". Refresh when you are back on Wi-Fi."
						]
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencySheet, {
				open: picker === "from",
				onOpenChange: (open) => setPicker(open ? "from" : null),
				value: from,
				onSelect: setFrom,
				favorites,
				onToggleFavorite: toggleFavorite,
				title: "You have"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CurrencySheet, {
				open: picker === "to",
				onOpenChange: (open) => setPicker(open ? "to" : null),
				value: to,
				onSelect: setTo,
				favorites,
				onToggleFavorite: toggleFavorite,
				title: "You get"
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CambioApp, {}) });
}
//#endregion
export { Home as component };
