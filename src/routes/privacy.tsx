import { createFileRoute } from "@tanstack/react-router";
export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Kota Vape Shop" },
      { name: "description", content: "Kota Vape Shop privacy information." },
      { property: "og:title", content: "Privacy Policy — Kota Vape Shop" },
      { property: "og:description", content: "How Kota Vape Shop handles your information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Page,
});
function Page() {
  return (
    <Legal
      title="Privacy Policy"
      copy="We use information shared during an enquiry only to respond, provide requested service and coordinate an order. We do not sell personal information. Contact our concierge for access or deletion requests."
    />
  );
}
function Legal({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-display text-5xl sm:text-7xl">{title}</h1>
      <p className="mt-8 text-sm leading-8 text-muted-foreground">{copy}</p>
    </div>
  );
}
