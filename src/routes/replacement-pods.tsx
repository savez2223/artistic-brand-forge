import { createFileRoute } from "@tanstack/react-router";
import { ProductCard } from "@/components/ProductCard";
import { replacementPods } from "@/data/replacementPods";

export const Route = createFileRoute("/replacement-pods")({
  head: () => ({ meta: [
    { title: "Replacement Pods — SHOW GREDI" },
    { name: "description", content: "Shop replacement pods and cartridges at SHOW GREDI." },
    { property: "og:title", content: "Replacement Pods — SHOW GREDI" },
    { property: "og:description", content: "A separate collection of replacement pods and cartridges." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: ReplacementPodsPage,
});

function ReplacementPodsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:py-20">
      <div className="border-b border-border pb-10">
        <p className="text-[10px] uppercase tracking-[0.22em] text-primary">Dedicated collection</p>
        <h1 className="mt-3 font-display text-5xl sm:text-7xl">Replacement Pods</h1>
        <p className="mt-3 text-sm text-muted-foreground">{replacementPods.length} products</p>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
        {replacementPods.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
}