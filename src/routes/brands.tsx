import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { brands } from "@/data/brands";
export const Route = createFileRoute("/brands")({
  head: () => ({
    meta: [
      { title: "Brands — Kota Vape Shop" },
      { name: "description", content: "Meet the houses selected by Kota Vape Shop." },
      { property: "og:title", content: "Brands — Kota Vape Shop" },
      { property: "og:description", content: "A selective portfolio of modern luxury houses." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});
function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-[10px] uppercase tracking-[0.28em] text-primary">Our houses</p>
      <h1 className="mt-3 font-display text-5xl sm:text-7xl">Brands</h1>
      <div className="mt-12 grid border-l border-t border-border sm:grid-cols-2">
        {brands.map((brand, index) => (
          <Link
            key={brand}
            to="/shop"
            className="group flex min-h-48 items-end justify-between border-b border-r border-border p-7 transition hover:bg-card"
          >
            <span>
              <small className="block text-[10px] uppercase tracking-[0.18em] text-primary">
                0{index + 1}
              </small>
              <strong className="mt-3 block font-display text-3xl font-normal sm:text-4xl">
                {brand}
              </strong>
            </span>
            <ArrowRight className="h-5 w-5 text-primary transition group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </div>
  );
}
