import { useMemo, useState } from "react";
import { Drawer } from "vaul";
import { Search, Star } from "lucide-react";
import {
  CURRENCY_BY_CODE,
  groupedCurrencies,
  searchCurrencies,
  stampLetters,
  type Currency,
} from "@/lib/currencies";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  value: string;
  onSelect: (code: string) => void;
  favorites: string[];
  onToggleFavorite: (code: string) => void;
  title: string;
};

function Stamp({ code, active }: { code: string; active?: boolean }) {
  return (
    <span
      className={cn(
        "grid size-11 shrink-0 place-items-center rounded-[var(--radius-sm)] font-display text-sm font-semibold tracking-wide",
        active
          ? "bg-accent text-accent-fg"
          : "bg-accent/10 text-accent",
      )}
    >
      {stampLetters(code)}
    </span>
  );
}

function Row({
  currency,
  selected,
  favorited,
  onSelect,
  onToggleFavorite,
}: {
  currency: Currency;
  selected: boolean;
  favorited: boolean;
  onSelect: () => void;
  onToggleFavorite: () => void;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-[var(--radius-lg)] px-2 py-1.5",
        selected && "bg-accent/10",
      )}
    >
      <button
        type="button"
        onClick={onSelect}
        className="flex min-h-12 min-w-0 flex-1 items-center gap-3 text-left"
      >
        <Stamp code={currency.code} active={selected} />
        <span className="min-w-0">
          <span className="block truncate font-medium text-ink">{currency.name}</span>
          <span className="block text-sm text-muted">{currency.code}</span>
        </span>
      </button>
      <button
        type="button"
        onClick={onToggleFavorite}
        aria-label={favorited ? `Unpin ${currency.code}` : `Pin ${currency.code}`}
        className="grid size-11 place-items-center rounded-[var(--radius-sm)] text-faint hover:text-ink"
      >
        <Star
          className="size-4"
          strokeWidth={1.75}
          fill={favorited ? "currentColor" : "none"}
        />
      </button>
    </div>
  );
}

export function CurrencySheet({
  open,
  onOpenChange,
  value,
  onSelect,
  favorites,
  onToggleFavorite,
  title,
}: Props) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchCurrencies(query), [query]);
  const favItems = useMemo(
    () =>
      favorites
        .map((code) => CURRENCY_BY_CODE[code])
        .filter((c): c is Currency => Boolean(c))
        .filter((c) => results.some((r) => r.code === c.code)),
    [favorites, results],
  );
  const groups = useMemo(() => groupedCurrencies(results), [results]);

  return (
    <Drawer.Root
      open={open}
      onOpenChange={(next) => {
        onOpenChange(next);
        if (!next) setQuery("");
      }}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-40 bg-ink/40" />
        <Drawer.Content className="fixed inset-x-0 bottom-0 z-50 flex h-[88dvh] flex-col rounded-t-[var(--radius-2xl)] bg-surface text-ink shadow-[var(--shadow-border)] outline-none">
          <div className="mx-auto mt-3 h-1 w-10 rounded-full bg-ink/15" />
          <Drawer.Title className="px-5 pt-4 font-display text-xl tracking-tight">
            {title}
          </Drawer.Title>
          <div className="px-5 pt-3">
            <label className="flex h-12 items-center gap-2 rounded-[var(--radius-md)] bg-raised px-3 shadow-[var(--shadow-border)]">
              <Search className="size-4 shrink-0 text-faint" strokeWidth={1.75} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search dollars, yen, baht…"
                aria-label="Search currencies"
                className="h-full w-full bg-transparent text-base text-ink outline-none placeholder:text-faint"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
              />
            </label>
          </div>
          <div className="mt-3 min-h-0 flex-1 overflow-y-auto px-3 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            {favItems.length > 0 && !query.trim() && (
              <section className="mb-4">
                <h3 className="px-2 pb-1 text-xs font-medium uppercase tracking-[0.14em] text-faint">
                  Pinned
                </h3>
                {favItems.map((c) => (
                  <Row
                    key={`fav-${c.code}`}
                    currency={c}
                    selected={c.code === value}
                    favorited
                    onSelect={() => {
                      onSelect(c.code);
                      onOpenChange(false);
                    }}
                    onToggleFavorite={() => onToggleFavorite(c.code)}
                  />
                ))}
              </section>
            )}
            {groups.map((group) => (
              <section key={group.region} className="mb-4">
                <h3 className="px-2 pb-1 text-xs font-medium uppercase tracking-[0.14em] text-faint">
                  {group.region}
                </h3>
                {group.items.map((c) => (
                  <Row
                    key={c.code}
                    currency={c}
                    selected={c.code === value}
                    favorited={favorites.includes(c.code)}
                    onSelect={() => {
                      onSelect(c.code);
                      onOpenChange(false);
                    }}
                    onToggleFavorite={() => onToggleFavorite(c.code)}
                  />
                ))}
              </section>
            ))}
            {results.length === 0 && (
              <p className="px-2 py-8 text-center text-sm text-muted">
                No currencies match “{query}”.
              </p>
            )}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
