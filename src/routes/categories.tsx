import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { categories } from "@/data/categories";
export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories — Kota Vape Shop" },
      { name: "description", content: "Explore Kota Vape Shop collections by category." },
      { property: "og:title", content: "Categories — Kota Vape Shop" },
      { property: "og:description", content: "Discover bags, watches, footwear and fragrance." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});
function Page() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="text-[10px] uppercase tracking-[0.28em] text-primary">Explore the edit</p>
      <h1 className="mt-3 font-display text-5xl sm:text-7xl">Categories</h1>
      <div className="mt-12 grid grid-cols-2 border-l border-t border-border lg:grid-cols-4">
        {categories.map((category) => (
          <Link
            key={category.name}
            to="/shop"
            search={{ category: category.name }}
            className="group flex aspect-[4/3] items-end justify-between border-b border-r border-border bg-card p-5 transition hover:bg-accent"
          >
            <span className="font-display text-xl sm:text-2xl">{category.name}</span>
            <ArrowRight className="h-4 w-4 text-primary transition group-hover:translate-x-1" />
          </Link>
        ))}
      </div>
    </div>
  );
}
