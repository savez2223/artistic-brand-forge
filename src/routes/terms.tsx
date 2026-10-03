import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — Kota Vape Shop" },
      {
        name: "description",
        content: "Terms for using the Kota Vape Shop catalog and enquiry service.",
      },
      { property: "og:title", content: "Terms — Kota Vape Shop" },
      { property: "og:description", content: "Terms for the Kota Vape Shop catalog." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});
function Page() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-5xl sm:text-7xl">Terms</h1>
      <p className="mt-8 text-sm leading-8 text-muted-foreground">
        Product availability, final pricing, delivery and payment details are confirmed directly by
        our concierge before an order is accepted. Catalog imagery and descriptions are provided for
        guidance.
      </p>
    </div>
  );
}
