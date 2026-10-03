import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";
import { getProductSlug } from "@/services/productService";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group min-w-0 border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-muted-foreground">
      <Link
        to="/product/$slug"
        params={{ slug: getProductSlug(product.name) }}
        className="block overflow-hidden bg-secondary"
      >
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={800}
            height={1000}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-3 sm:p-4">
        <Link
          to="/product/$slug"
          params={{ slug: getProductSlug(product.name) }}
          className="line-clamp-2 block min-h-10 font-display text-sm text-foreground transition hover:text-primary sm:text-base"
        >
          {product.name}
        </Link>
        <div className="mt-3 flex min-w-0 items-baseline gap-2">
          <span className="text-sm font-semibold text-foreground sm:text-base">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
        </div>
      </div>
    </article>
  );
}
