import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/Button";
import { ExtraFeatures } from "@/components/ExtraFeatures";
import { PaymentStrip } from "@/components/PaymentStrip";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { WHATSAPP_NUMBER } from "@/config/contact";
import { getProductBySlug, getRelatedProducts } from "@/services/productService";

export const Route = createFileRoute("/product/$slug")({
  loader: ({ params }) => {
    const product = getProductBySlug(params.slug);
    if (!product) throw notFound();
    return product;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.name} — SHOW GREDI`
      : "Product unavailable — SHOW GREDI";
    const description =
      loaderData?.shortDescription ?? "The requested SHOW GREDI product is unavailable.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const product = Route.useLoaderData();
  const enquiry = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi, I would like more information about:\n${product.name}`)}`;
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:py-14">
        <nav className="mb-7 flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-muted-foreground">
          <Link to="/">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="truncate text-primary">{product.name}</span>
        </nav>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div className="overflow-hidden border border-border bg-card">
            <img
              src={product.image}
              alt={product.name}
              width={1200}
              height={1200}
              className="aspect-square h-full w-full object-cover transition duration-500 ease-out hover:scale-150"
            />
          </div>
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="grid grid-cols-2 gap-4 border-b border-border pb-4 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              <span>SKU: <b className="text-foreground">{product.sku}</b></span>
              <span>Category: <b className="text-foreground">{product.category}</b></span>
            </div>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">{product.name}</h1>
            <div className="mt-5 flex items-baseline gap-3">
              <span className="text-2xl">₹{product.price.toLocaleString("en-IN")}</span>
              {product.oldPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.oldPrice.toLocaleString("en-IN")}
                </span>
              )}
            </div>
            <a href={enquiry} target="_blank" rel="noreferrer">
              <Button className="mt-7 w-full">
                <MessageCircle className="h-4 w-4" /> Enquire on WhatsApp
              </Button>
            </a>
            <PaymentStrip />
            <ExtraFeatures />
          </div>
        </div>
        <section className="pt-20 lg:pt-28">
          <SectionHeading eyebrow="Complete the story" title="Related pieces" />
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">
            {getRelatedProducts(product.relatedProducts).map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
        <section className="py-20 lg:py-28">
          <SectionHeading eyebrow="Client notes" title="Reviews" />
          <div className="border border-border p-8 text-center text-sm text-muted-foreground">
            Be the first to share your experience with this piece.
          </div>
        </section>
      </div>
      <WhatsAppButton productName={product.name} />
    </>
  );
}
