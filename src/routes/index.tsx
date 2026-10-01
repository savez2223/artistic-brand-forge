import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Headphones, ShieldCheck, Sparkles } from "lucide-react";
import heroImage from "@/assets/show-gredi-hero.jpg";
import editorialImage from "@/assets/show-gredi-editorial.jpg";
import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { categories, locations } from "@/data/categories";
import { getBestsellers, getFeaturedProducts } from "@/services/productService";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "SHOW GREDI — Curated Modern Luxury" },
    { name: "description", content: "Explore SHOW GREDI's edit of premium bags, watches, fragrance, footwear and accessories." },
    { property: "og:title", content: "SHOW GREDI — Curated Modern Luxury" },
    { property: "og:description", content: "A considered edit of modern luxury, chosen for distinction." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}), component: HomePage,
});

function HomePage() {
  return <div className="bg-background">
    <section className="relative min-h-[calc(100vh-6.5rem)] overflow-hidden border-b border-border sm:min-h-[720px]">
      <img src={heroImage} alt="SHOW GREDI luxury accessories collection" width={1920} height={1152} className="absolute inset-0 h-full w-full object-cover object-[60%_center] sm:object-center" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--background)_0%,color-mix(in_oklab,var(--background)_90%,transparent)_34%,color-mix(in_oklab,var(--background)_32%,transparent)_68%,transparent_100%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-6.5rem)] max-w-7xl items-center px-4 py-20 sm:min-h-[720px] sm:px-6">
        <div className="max-w-2xl animate-reveal"><p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">The autumn curation · 2026</p><h1 className="mt-5 font-display text-5xl leading-[0.92] text-foreground sm:text-7xl lg:text-[6.6rem]">Objects of<br /><span className="text-primary">distinction.</span></h1><p className="mt-6 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">A considered edit of exceptional fashion, fragrance and accessories—chosen to reward a closer look.</p><div className="mt-8 flex flex-wrap gap-3"><Button to="/shop">Explore the edit <ArrowRight className="h-4 w-4" /></Button><Button to="/about" variant="outline">Our point of view</Button></div></div>
      </div>
      <div className="absolute bottom-5 left-4 hidden items-center gap-3 text-[9px] uppercase tracking-[0.22em] text-muted-foreground sm:flex sm:left-6"><span className="h-px w-12 bg-primary" /> Scroll to discover</div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28"><SectionHeading eyebrow="Curated departments" title="Shop by category" copy="Every piece is selected for material, proportion and the way it becomes part of your story." /><div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">{categories.map((category) => <Link key={category.name} to="/shop" search={{ category: category.name }} className="group relative aspect-[4/5] overflow-hidden border border-border"><img src={category.image} alt={category.name} loading="lazy" width={800} height={1000} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" /><div className="absolute inset-x-0 bottom-0 p-4 sm:p-6"><p className="text-[9px] uppercase tracking-[0.18em] text-primary">{category.description}</p><h3 className="mt-1 font-display text-xl text-foreground sm:text-3xl">{category.name}</h3><span className="mt-3 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-muted-foreground transition group-hover:text-primary">View collection <ArrowRight className="h-3 w-3" /></span></div></Link>)}</div></section>

    <section className="border-y border-border bg-secondary"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28"><div className="flex items-end justify-between gap-5"><SectionHeading eyebrow="In focus" title="Trending now" /><Link to="/shop" className="mb-10 hidden text-xs uppercase tracking-[0.16em] text-primary sm:block">View all pieces →</Link></div><div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">{getFeaturedProducts().map((product) => <ProductCard key={product.id} product={product} />)}</div></div></section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28"><SectionHeading eyebrow="The connoisseur's choice" title="Most desired" /><div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-5">{getBestsellers().slice(0,4).map((product) => <ProductCard key={product.id} product={product} />)}</div></section>

    <section className="grid min-h-[620px] lg:grid-cols-2"><div className="relative min-h-[420px] overflow-hidden"><img src={editorialImage} alt="SHOW GREDI private collection" loading="lazy" width={1600} height={1200} className="absolute inset-0 h-full w-full object-cover" /></div><div className="flex items-center bg-card px-6 py-16 sm:px-12 lg:px-20"><div className="max-w-lg"><p className="text-[10px] uppercase tracking-[0.28em] text-primary">The private edit</p><h2 className="mt-4 font-display text-4xl leading-tight sm:text-6xl">Luxury should feel personal.</h2><p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">Our private concierge helps you discover pieces that speak to your taste, your rhythm and the moments that matter.</p><Button to="/contact" className="mt-8">Meet your concierge <ArrowRight className="h-4 w-4" /></Button></div></div></section>

    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28"><SectionHeading eyebrow="The SHOW GREDI standard" title="Chosen with intention" /><div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">{[[Sparkles,"Premium quality","Exceptional material and precise finishing."],[ShieldCheck,"Secure experience","Considered service from inquiry to delivery."],[Headphones,"Fast support","A responsive concierge when you need us."],[BadgeCheck,"Authenticity","Every piece is reviewed before it enters our edit."]].map(([Icon,title,copy]) => { const FeatureIcon = Icon as typeof Sparkles; return <div key={String(title)} className="bg-background p-7"><FeatureIcon className="h-6 w-6 text-primary" /><h3 className="mt-5 font-display text-2xl">{String(title)}</h3><p className="mt-3 text-sm leading-6 text-muted-foreground">{String(copy)}</p></div>; })}</div></section>

    <section className="border-y border-border bg-secondary"><div className="mx-auto max-w-7xl px-4 py-20 sm:px-6"><SectionHeading eyebrow="Closer to you" title="Shop by city" /><div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">{locations.map((location) => <Link key={location} to="/shop" className="group flex min-h-32 items-end justify-between border-b border-r border-border p-5 font-display text-xl transition hover:bg-accent sm:min-h-40 sm:text-2xl">{location}<ArrowRight className="h-4 w-4 text-primary transition group-hover:translate-x-1" /></Link>)}</div></div></section>

    <Faq />
  </div>;
}

function Faq() { const faqs = [{ q: "How do I enquire about a product?", a: "Open any product and use the WhatsApp enquiry button. Our concierge will share availability and details." }, { q: "Are SHOW GREDI products authentic?", a: "Authenticity and quality are core to our selection process. Every item is reviewed before being offered." }, { q: "Can you help me choose a gift?", a: "Yes. Share the occasion, recipient and budget with our concierge for a thoughtful shortlist." }, { q: "Do you deliver across India?", a: "Delivery availability and timelines are confirmed personally during your enquiry." }]; return <section className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:py-28"><SectionHeading eyebrow="Questions, considered" title="Frequently asked" /> <div className="border-t border-border">{faqs.map((faq) => <details key={faq.q} className="group border-b border-border py-1"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg text-foreground sm:text-xl">{faq.q}<span className="text-primary transition group-open:rotate-45">+</span></summary><p className="max-w-2xl pb-6 text-sm leading-7 text-muted-foreground">{faq.a}</p></details>)}</div></section>; }