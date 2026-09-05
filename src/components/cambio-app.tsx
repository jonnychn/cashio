import { useEffect, useMemo, useState } from "react";
import { ArrowDownUp, Check, Copy, RefreshCw, WifiOff } from "lucide-react";
import { CurrencySheet } from "@/components/currency-sheet";
import { Button } from "@/components/ui/button";
import {
  CHEAT_AMOUNTS,
  CURRENCY_BY_CODE,
  QUICK_AMOUNTS,
  formatMoney,
  stampLetters,
} from "@/lib/currencies";
import { convertAmount, parseAmount } from "@/lib/rates";
import { cn } from "@/lib/utils";
import { useCambio } from "@/store/cambio";

function formatRateAge(fetchedAt: number) {
  const delta = Date.now() - fetchedAt;
  if (delta < 60_000) return "just now";
  if (delta < 3_600_000) {
    const m = Math.round(delta / 60_000);
    return `${m} min ago`;
  }
  if (delta < 86_400_000) {
    const h = Math.round(delta / 3_600_000);
    return `${h} hr ago`;
  }
  const d = Math.round(delta / 86_400_000);
  if (d === 1) return "yesterday";
  return new Intl.DateTimeFormat(undefined, {
    month: "short",
    day: "numeric",
  }).format(new Date(fetchedAt));
}

function isStandalone() {
  if (typeof window === "undefined") return false;
  const nav = window.navigator as Navigator & { standalone?: boolean };
  return (
    nav.standalone === true ||
    window.matchMedia("(display-mode: standalone)").matches
  );
}

function CurrencyTrigger({
  code,
  onClick,
}: {
  code: string;
  onClick: () => void;
}) {
  const meta = CURRENCY_BY_CODE[code];
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-h-14 w-full items-center gap-3 rounded-[var(--radius-lg)] bg-raised px-3 text-left shadow-[var(--shadow-border)] transition-[scale,background-color] duration-150 ease-out active:scale-[0.98]"
    >
      <span className="grid size-10 place-items-center rounded-[var(--radius-sm)] bg-accent font-display text-sm font-semibold text-accent-fg">
        {stampLetters(code)}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-medium tracking-wide text-ink">{code}</span>
        <span className="block truncate text-sm text-muted">
          {meta?.name ?? code}
        </span>
      </span>
      <span className="text-xs font-medium uppercase tracking-[0.12em] text-faint">
        Change
      </span>
    </button>
  );
}

export function CambioApp() {
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

  const [picker, setPicker] = useState<"from" | "to" | null>(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
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

  const cheatRows = useMemo(() => {
    return CHEAT_AMOUNTS.map((n) => ({
      n,
      out: convertAmount(n, from, to, rates),
    }));
  }, [from, to, rates]);

  const statusLabel = !online
    ? "Offline"
    : refreshing && source !== "live"
      ? "Updating"
      : source === "live"
        ? "Live rates"
        : source === "cached"
          ? "Saved rates"
          : "Packed rates";

  return (
    <div className="relative mx-auto min-h-dvh w-full max-w-5xl overflow-x-hidden px-4 pb-20 pt-[max(1.25rem,env(safe-area-inset-top))]">
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-faint">
            Pocket bureau
          </p>
          <h1 className="font-display text-brand leading-tight tracking-tight text-ink">
            Cashio
          </h1>
        </div>
        <div
          className={cn(
            "mt-1 inline-flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-medium",
            online ? "bg-accent/10 text-accent" : "bg-ink/10 text-muted",
          )}
        >
          {!online && <WifiOff className="size-3.5" strokeWidth={1.75} />}
          {statusLabel}
        </div>
      </header>

      <div className="mt-8 grid items-start gap-8 md:grid-cols-2">
        <div>
      <section>
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-faint">
          You get
        </p>
        <button
          type="button"
          onClick={() => void copyResult()}
          className="mt-1 w-full text-left"
          aria-label="Copy converted amount"
        >
          <p className="font-display text-hero leading-none tracking-tight text-ink tabular-nums break-all">
            {converted == null
              ? "—"
              : formatMoney(converted, to, Math.abs(converted) >= 100_000)}
          </p>
          <p className="mt-1 flex items-center gap-2 text-sm text-muted">
            <span>
              {toMeta?.symbol} {toMeta?.name ?? to}
            </span>
            <span className="inline-flex items-center gap-1 text-faint">
              {copied ? (
                <>
                  <Check className="size-3.5" strokeWidth={2} />
                  Copied
                </>
              ) : (
                <>
                  <Copy className="size-3.5" strokeWidth={1.75} />
                  Copy
                </>
              )}
            </span>
          </p>
        </button>
      </section>

      <section className="mt-8 rounded-[var(--radius-2xl)] bg-surface p-4 shadow-[var(--shadow-border)]">
        <label className="block">
          <span className="text-xs font-medium uppercase tracking-[0.16em] text-faint">
            You have
          </span>
          <div className="mt-2 flex items-baseline gap-2 border-b border-border pb-2">
            <span className="font-display text-lg text-muted">{fromMeta?.symbol}</span>
            <input
              value={amount}
              onChange={(e) => {
                const next = e.target.value.replace(/[^0-9.,]/g, "");
                setAmount(next);
              }}
              inputMode="decimal"
              enterKeyHint="done"
              className="w-full bg-transparent font-display text-amount leading-none tracking-tight text-ink tabular-nums outline-none placeholder:text-faint"
              placeholder="0"
              aria-label="Amount to convert"
              id="amount"
            />
          </div>
        </label>

        <div className="mt-4">
          <CurrencyTrigger code={from} onClick={() => setPicker("from")} />
        </div>

        <div className="relative my-1 flex justify-center">
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={swap}
            aria-label="Swap currencies"
            className="relative z-10 size-12 rounded-full bg-raised"
          >
            <ArrowDownUp className="size-4" strokeWidth={1.75} />
          </Button>
        </div>

        <CurrencyTrigger code={to} onClick={() => setPicker("to")} />

        <div className="mt-4 flex flex-wrap gap-2">
          {QUICK_AMOUNTS.map((n) => {
            const active = parsed === n && amount !== "";
            return (
              <Button
                key={n}
                type="button"
                variant="chip"
                size="chip"
                data-active={active}
                onClick={() => setAmount(String(n))}
              >
                {n >= 1000 ? `${n / 1000}k` : n}
              </Button>
            );
          })}
        </div>
      </section>

      <div className="mt-4 flex items-center justify-between gap-3 text-sm text-muted">
        <p>
          {inverse == null
            ? "Rate unavailable for this pair"
            : `1 ${from} = ${formatMoney(inverse, to)} ${to}`}
        </p>
        <button
          type="button"
          onClick={() => void refresh()}
          disabled={refreshing || !online}
          className="inline-flex h-11 items-center gap-1.5 rounded-[var(--radius-sm)] px-2 text-ink disabled:text-faint"
        >
          <RefreshCw
            className={cn("size-3.5", refreshing && "animate-spin")}
            strokeWidth={1.75}
          />
          <span>{formatRateAge(fetchedAt)}</span>
        </button>
      </div>
        </div>

      <div>
      <section>
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl tracking-tight">Cheat sheet</h2>
          <p className="text-xs uppercase tracking-[0.14em] text-faint">
            {from} → {to}
          </p>
        </div>
        <p className="mt-1 text-sm text-muted">
          Mid-market. Cash desks take a cut.
        </p>
        <div className="mt-3 overflow-hidden rounded-[var(--radius-xl)] bg-surface shadow-[var(--shadow-border)]">
          {cheatRows.map((row, i) => (
            <div
              key={row.n}
              className={cn(
                "flex items-baseline justify-between px-4 py-3",
                i !== 0 && "border-t border-border",
              )}
            >
              <span className="tabular-nums text-muted">
                {formatMoney(row.n, from)} {from}
              </span>
              <span className="font-medium tabular-nums text-ink">
                {row.out == null ? "—" : formatMoney(row.out, to)} {to}
              </span>
            </div>
          ))}
        </div>
      </section>

      {!installed && (
        <section className="mt-6 rounded-[var(--radius-xl)] bg-accent p-5 text-accent-fg">
          <h2 className="font-display text-xl tracking-tight">Use it like an app</h2>
          <ol className="mt-3 space-y-2 text-sm leading-relaxed text-accent-fg/85">
            <li>1. Open this page in Safari on iPhone.</li>
            <li>2. Tap Share, then Add to Home Screen.</li>
            <li>3. Open it once on Wi-Fi so today’s rates are saved on the phone.</li>
            <li>4. After that it still converts in airplane mode.</li>
          </ol>
          <p className="mt-4 text-xs leading-relaxed text-accent-fg/70">
            A webpage cannot browse the live internet without a connection. This
            one caches itself and the last rates, which is what a bureau desk
            actually needs overseas.
          </p>
        </section>
      )}

      {installed && !online && (
        <p className="mt-6 text-sm leading-relaxed text-muted">
          No signal. Using rates saved {formatRateAge(fetchedAt)}. Refresh when
          you are back on Wi-Fi.
        </p>
      )}
      </div>
      </div>

      <CurrencySheet
        open={picker === "from"}
        onOpenChange={(open) => setPicker(open ? "from" : null)}
        value={from}
        onSelect={setFrom}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        title="You have"
      />
      <CurrencySheet
        open={picker === "to"}
        onOpenChange={(open) => setPicker(open ? "to" : null)}
        value={to}
        onSelect={setTo}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
        title="You get"
      />
    </div>
  );
}
