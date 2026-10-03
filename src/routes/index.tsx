import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BadgeCheck, Headphones, ShieldCheck, Sparkles } from "lucide-react";

import heroImage from "../assets/Hero-main.png";
import editorialImage from "@/assets/show-gredi-editorial.jpg";
import elfBarCategoryImage from "../assets/elf.webp";
import uwellCategoryImage from "../assets/uwell.webp";
import podSaltCategoryImage from "../assets/Pod-salt.webp";
import iGetCategoryImage from "../assets/iget.webp";

import { Button } from "@/components/Button";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";

import { categories, locations } from "@/data/categories";
import { getBestsellers, getFeaturedProducts } from "@/services/productService";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Kota Vape Shop — Premium Vape Store",
      },
      {
        name: "description",
        content: "Explore Kota Vape Shop's premium collection of authentic vape products.",
      },
      {
        property: "og:title",
        content: "Kota Vape Shop — Premium Vape Store",
      },
      {
        property: "og:description",
        content: "A premium collection of authentic vape products.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: HomePage,
});

function HomePage() {
  const categoryImages = [
    elfBarCategoryImage,
    uwellCategoryImage,
    podSaltCategoryImage,
    iGetCategoryImage,
  ];
  const tickerItems = [
    "⚡ Same Day Delivery",
    "🚚 48-Hour Fast Delivery",
    "💵 Cash on Delivery Available",
    "✅ 100% Genuine Products",
    "🔥 Premium Vape Store",
  ];

  return (
    <>
      {/* =====================================================
          PAGE STYLES & MARQUEE ANIMATION
      ===================================================== */}

      <style>{`
        .kota-marquee-container {
          width: 100%;
          height: 42px;
          overflow: hidden;
          background: #000000;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          display: flex;
          align-items: center;
          position: relative;
        }

        .kota-marquee-track {
          display: flex;
          white-space: nowrap;
          width: max-content;
          animation: marquee-scroll 25s linear infinite;
        }

        .kota-marquee-container:hover .kota-marquee-track {
          animation-play-state: paused;
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .kota-marquee-content {
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          color: #ffffff;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .kota-marquee-item {
          color: #ffffff;
          transition: color 0.2s ease;
        }

        .kota-marquee-item:hover {
          color: #ef4444;
        }

        .kota-marquee-dot {
          display: inline-block;
          margin-left: 26px;
          margin-right: 26px;
          color: #ef4444;
          font-size: 14px;
        }

        @media (max-width: 640px) {
          .kota-marquee-container {
            height: 38px;
          }

          .kota-marquee-content {
            font-size: 9px;
            letter-spacing: 0.09em;
          }

          .kota-marquee-dot {
            margin-left: 18px;
            margin-right: 18px;
          }
        }
      `}</style>

      <div className="bg-background">
        {/* CSS-Powered Marquee Ticker */}
        <div className="kota-marquee-container">
          <div className="kota-marquee-track">
            {/* Original Items */}
            <span className="kota-marquee-content">
              {tickerItems.map((item, index) => (
                <span key={`orig-${index}`} className="kota-marquee-item">
                  {item}
                  <span className="kota-marquee-dot">•</span>
                </span>
              ))}
            </span>

            {/* Duplicated Items for Seamless Infinite Loop */}
            <span className="kota-marquee-content">
              {tickerItems.map((item, index) => (
                <span key={`dup-${index}`} className="kota-marquee-item">
                  {item}
                  <span className="kota-marquee-dot">•</span>
                </span>
              ))}
            </span>
          </div>
        </div>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="relative h-[380px] overflow-hidden border-b border-white/10 sm:h-[450px] lg:h-[520px]">
          <img
            src={heroImage}
            alt="Kota Vape premium collection"
            width={1900}
            height={1200}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/25" />
        </section>

        {/* =====================================================
            SHOP BY CATEGORY
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
          <SectionHeading
            eyebrow="Curated departments"
            title="Shop by category"
            copy="Every piece is selected for material, proportion and the way it becomes part of your story."
          />

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
            {categories.map((category, index) => (
              <Link
                key={category.name}
                to="/shop"
                search={{ category: category.name }}
                className="group relative aspect-[4/5] overflow-hidden border border-border"
              >
                <img
                  src={categoryImages[index]}
                  alt={category.name}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                  <h3 className="mt-1 font-display text-xl text-white sm:text-3xl">
                    {category.name}
                  </h3>

                  <span className="mt-2 inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.14em] text-white/70 transition group-hover:text-red-500">
                    View collection
                    <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* =====================================================
            TRENDING NOW
        ===================================================== */}

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
            <div className="flex items-end justify-between gap-5">
              <SectionHeading eyebrow="In focus" title="Trending now" />

              <Link
                to="/shop"
                className="mb-8 hidden text-xs uppercase tracking-[0.16em] text-red-500 transition-colors hover:text-white sm:block"
              >
                View all pieces →
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
              {getFeaturedProducts().map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            MOST DESIRED
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
          <SectionHeading eyebrow="The connoisseur's choice" title="Most desired" />

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 lg:gap-4">
            {getBestsellers()
              .slice(0, 4)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </section>

        {/* =====================================================
            EDITORIAL
        ===================================================== */}

        <section className="grid min-h-[480px] lg:grid-cols-2">
          <div className="relative min-h-[350px] overflow-hidden">
            <img
              src={editorialImage}
              alt="Kota Vape private collection"
              loading="lazy"
              width={1600}
              height={1200}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center bg-card px-6 py-10 sm:px-10 lg:px-16">
            <div className="max-w-lg">
              <p className="text-[10px] uppercase tracking-[0.28em] text-red-500">
                The private edit
              </p>

              <h2 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl">
                Premium vaping should feel personal.
              </h2>

              <p className="mt-5 text-sm leading-7 text-white/60 sm:text-base">
                Our private concierge helps you discover products that match your taste, preferences
                and everyday experience.
              </p>

              <Button to="/contact" className="mt-6">
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* =====================================================
            FEATURES
        ===================================================== */}

        <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
          <SectionHeading eyebrow="The KOTA standard" title="Chosen with intention" />

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Sparkles, "Premium quality", "Exceptional material and precise finishing."],
              [ShieldCheck, "Secure experience", "Considered service from inquiry to delivery."],
              [Headphones, "Fast support", "A responsive concierge when you need us."],
              [BadgeCheck, "Authenticity", "Every piece is reviewed before it enters our edit."],
            ].map(([Icon, title, copy]) => {
              const FeatureIcon = Icon as typeof Sparkles;

              return (
                <div key={String(title)} className="bg-background p-6">
                  <FeatureIcon className="h-6 w-6 text-red-500" />

                  <h3 className="mt-4 font-display text-2xl text-white">{String(title)}</h3>

                  <p className="mt-2 text-sm leading-6 text-white/60">{String(copy)}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            SHOP BY CITY
        ===================================================== */}

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:py-14">
            <SectionHeading eyebrow="Closer to you" title="Shop by city" />

            <div className="grid grid-cols-2 border-l border-t border-border md:grid-cols-4">
              {locations.map((location) => (
                <Link
                  key={location}
                  to="/shop"
                  className="group flex min-h-28 items-end justify-between border-b border-r border-border p-4 font-display text-xl text-white transition-colors hover:bg-accent hover:text-red-500 sm:min-h-32 sm:p-5 sm:text-2xl"
                >
                  {location}

                  <ArrowRight className="h-4 w-4 text-red-500 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            FAQ
        ===================================================== */}

        <Faq />
      </div>
    </>
  );
}

/* =========================================================
    FAQ
========================================================= */

function Faq() {
  const faqs = [
    {
      q: "How do I enquire about a product?",
      a: "Open any product and use the WhatsApp enquiry button. Our concierge will share availability and details.",
    },
    {
      q: "Are KOTA Vape products authentic?",
      a: "Authenticity and quality are core to our selection process. Every item is reviewed before being offered.",
    },
    {
      q: "Can you help me choose a product?",
      a: "Yes. Share what type of product you are looking for and our concierge can help.",
    },
    {
      q: "Do you deliver across India?",
      a: "Delivery availability and timelines are confirmed personally during your enquiry.",
    },
  ];

  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:py-14">
      <SectionHeading eyebrow="Questions, considered" title="Frequently asked" />

      <div className="border-t border-border">
        {faqs.map((faq) => (
          <details key={faq.q} className="group border-b border-border py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg text-white sm:text-xl">
              {faq.q}

              <span className="text-red-500 transition group-open:rotate-45">+</span>
            </summary>

            <p className="max-w-2xl pb-5 text-sm leading-7 text-white/60">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
