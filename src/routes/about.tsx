import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureCard } from "@/components/site/FeatureCard";
import { Reveal } from "@/components/site/Reveal";
import { highlights, images, restaurant } from "@/data/site";

const title = "About Us — The Royal Palace, Malakpet Hyderabad";
const description =
  "The story of The Royal Palace: a multi cuisine restaurant and indoor banquet hall in Azampura, Malakpet, Hyderabad, serving Hyderabadi, North Indian, tandoor and Chinese.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        image={images.interior}
        alt="Interior of The Royal Palace restaurant"
        eyebrow="About"
        title="A Royal Welcome In Malakpet"
        description="A multi cuisine kitchen and an indoor banquet hall, under one roof in Azampura."
      />

      <section className="section-y">
        <div className="container-royal grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Built Around Family Tables"
              description="The Royal Palace brings together the dishes Hyderabad loves — slow-cooked dum biryani, charcoal tandoor, North Indian curries and Indo-Chinese — in a setting made for family dining. The same kitchen caters our indoor banquet hall, so celebrations get the same food guests come back for."
            />
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <Fact label="Address" value={restaurant.address} />
              <Fact label="Opening Hours" value={`Daily ${restaurant.hours}`} />
              <Fact label="Banquet Seating" value={restaurant.banquet.seated} />
              <Fact label="Floating Capacity" value={restaurant.banquet.floating} />
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="gold" asChild>
                <Link to="/reservations">Book a Table</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/menu">View Menu</Link>
              </Button>
            </div>
          </div>

          <Reveal className="card-royal self-start">
            <img
              src={images.ambience}
              alt="Candlelit table showing the warm ambience of the restaurant"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1067}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-royal">
          <SectionHeading eyebrow="What We Offer" title="Dining, Catering & Events" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <FeatureCard key={h.title} {...h} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4">
      <dt className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-1 text-sm text-foreground">{value}</dd>
    </div>
  );
}
