import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Frequently Asked Questions — Kota Vape Shop" },
      {
        name: "description",
        content: "Answers about Kota Vape Shop products, enquiries, authenticity and delivery.",
      },
      { property: "og:title", content: "Frequently Asked Questions — Kota Vape Shop" },
      {
        property: "og:description",
        content: "Helpful details about shopping with Kota Vape Shop.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});
const faqs = [
  [
    "How can I order?",
    "Our catalog is enquiry-led. Choose a product and contact our concierge through WhatsApp to confirm availability and delivery.",
  ],
  [
    "Are products authentic?",
    "Yes. Quality and authenticity are reviewed before a piece enters the Kota Vape Shop edit.",
  ],
  ["Where do you deliver?", "Delivery coverage and timing are confirmed during your enquiry."],
  [
    "Can I request recommendations?",
    "Absolutely. Tell us the occasion, taste and budget, and our concierge will prepare a shortlist.",
  ],
];
function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:py-24">
      <p className="text-[10px] uppercase tracking-[0.28em] text-primary">Client care</p>
      <h1 className="mt-4 font-display text-5xl sm:text-7xl">Frequently asked</h1>
      <div className="mt-12 border-t border-border">
        {faqs.map(([q, a]) => (
          <details key={q} className="group border-b border-border">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 font-display text-xl">
              {q}
              <span className="text-primary group-open:rotate-45">+</span>
            </summary>
            <p className="max-w-2xl pb-6 text-sm leading-7 text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
