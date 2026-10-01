import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type ButtonProps = { children: ReactNode; to?: string; onClick?: () => void; variant?: "gold" | "outline"; className?: string; ariaLabel?: string };

export function Button({ children, to, onClick, variant = "gold", className = "", ariaLabel }: ButtonProps) {
  const styles = `inline-flex min-h-11 items-center justify-center gap-2 rounded-sm px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] transition duration-300 ${variant === "gold" ? "bg-primary text-primary-foreground hover:bg-primary-bright" : "border border-border-bright bg-transparent text-foreground hover:bg-accent"} ${className}`;
  if (to) return <Link to={to} className={styles} aria-label={ariaLabel}>{children}</Link>;
  return <button type="button" onClick={onClick} className={styles} aria-label={ariaLabel}>{children}</button>;
}