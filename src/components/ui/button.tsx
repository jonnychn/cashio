import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium select-none disabled:pointer-events-none disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:not-disabled:scale-[0.96] transition-[scale,background-color,color,opacity] duration-150 ease-out",
  {
    variants: {
      variant: {
        solid:
          "bg-accent text-accent-fg shadow-[var(--shadow-border)] hover:bg-stamp",
        ghost:
          "bg-transparent text-ink hover:bg-ink/5",
        outline:
          "bg-raised text-ink shadow-[var(--shadow-border)] hover:bg-surface",
        chip:
          "bg-raised text-ink shadow-[var(--shadow-border)] hover:bg-accent hover:text-accent-fg data-[active=true]:bg-accent data-[active=true]:text-accent-fg",
      },
      size: {
        sm: "h-9 rounded-[var(--radius-sm)] px-3 text-sm",
        md: "h-11 rounded-[var(--radius-md)] px-4 text-sm",
        lg: "h-12 rounded-[var(--radius-md)] px-5 text-base",
        icon: "size-11 rounded-[var(--radius-md)]",
        chip: "h-10 rounded-full px-3.5 text-sm tabular-nums",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "md",
    },
  },
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
