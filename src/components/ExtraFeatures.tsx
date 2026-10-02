import { BadgeCheck, Globe2, RotateCcw, ShieldCheck, WalletCards } from "lucide-react";

const features = [
  [BadgeCheck, "Premium Quality"],
  [WalletCards, "Secure Payments"],
  [ShieldCheck, "Satisfaction Guarantee"],
  [Globe2, "Worldwide Shipping"],
  [RotateCcw, "Money Back Guarantee"],
] as const;

export function ExtraFeatures() {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl">Extra Features</h2>
      <ul className="mt-4 divide-y divide-border border-y border-border">
        {features.map(([Icon, label]) => (
          <li key={label} className="flex items-center gap-3 py-3 text-sm text-muted-foreground">
            <Icon className="h-4 w-4 shrink-0 text-primary" /> {label}
          </li>
        ))}
      </ul>
    </section>
  );
}