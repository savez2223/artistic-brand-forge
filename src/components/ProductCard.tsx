import { ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group min-w-0 border border-border bg-card transition duration-500 hover:-translate-y-1 hover:border-border-bright">
      <Link
        to="/product/$slug"
        params={{ slug: product.slug }}
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
          {(product.newProduct || product.sale) && (
            <span className="absolute left-2 top-2 bg-primary px-2 py-1 text-[9px] font-bold uppercase tracking-[0.12em] text-primary-foreground sm:left-3 sm:top-3 sm:text-[10px]">
              {product.sale ? "Sale" : "New"}
            </span>
          )}
        </div>
      </Link>
      <div className="p-3 sm:p-4">
        <p className="text-[9px] uppercase tracking-[0.18em] text-primary sm:text-[10px]">
          {product.brand}
        </p>
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="mt-2 line-clamp-2 block min-h-10 font-display text-sm text-foreground transition hover:text-primary sm:text-base"
        >
          {product.name}
        </Link>
        <div className="mt-3 flex min-w-0 items-baseline gap-2">
          <span className="text-sm font-semibold text-foreground sm:text-base">
            ₹{product.price.toLocaleString("en-IN")}
          </span>
          {product.oldPrice && (
            <span className="truncate text-[10px] text-muted-foreground line-through sm:text-xs">
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          aria-label={`View ${product.name}`}
          className="mt-4 flex min-h-10 items-center justify-between border-t border-border pt-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground transition group-hover:text-primary"
        >
          View details <ArrowUpRight className="h-4 w-4 shrink-0" />
        </Link>
      </div>
    </article>
  );
}
