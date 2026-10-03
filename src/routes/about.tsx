import { createFileRoute } from "@tanstack/react-router";
import editorialImage from "@/assets/show-gredi-editorial.jpg";
import { Button } from "@/components/Button";
export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Kota Vape Shop" },
      {
        name: "description",
        content: "Discover the point of view behind Kota Vape Shop's considered luxury edit.",
      },
      { property: "og:title", content: "About Us — Kota Vape Shop" },
      { property: "og:description", content: "Luxury chosen with taste, restraint and intention." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});
function Page() {
  return (
    <div>
      <section className="relative min-h-[64vh]">
        <img
          src={editorialImage}
          alt="Kota Vape Shop collection"
          width={1600}
          height={1200}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
        <div className="relative mx-auto flex min-h-[64vh] max-w-7xl items-center px-4 sm:px-6">
          <div className="max-w-xl">
            <p className="text-[10px] uppercase tracking-[0.28em] text-primary">
              Our point of view
            </p>
            <h1 className="mt-4 font-display text-5xl leading-tight sm:text-7xl">
              Less noise.
              <br />
              Better choices.
            </h1>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <h2 className="font-display text-4xl sm:text-6xl">
          We curate what deserves your attention.
        </h2>
        <div>
          <p className="text-base leading-8 text-muted-foreground">
            Kota Vape Shop was created around a simple conviction: modern luxury is not about having
            more. It is about choosing better. We look for confident design, enduring materials and
            details that become more rewarding over time.
          </p>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Our edit is deliberately selective, supported by personal service that feels considered
            from first look to final choice.
          </p>
          <Button to="/shop" className="mt-8">
            Discover the collection
          </Button>
        </div>
      </section>
    </div>
  );
}
