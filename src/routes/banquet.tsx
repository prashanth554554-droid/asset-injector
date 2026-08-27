import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import { FeatureCard } from "@/components/site/FeatureCard";
import { EnquiryForm } from "@/components/site/EnquiryForm";
import { Reveal } from "@/components/site/Reveal";
import { banquetFeatures, banquetOccasions, images } from "@/data/site";

const title = "Banquet Hall in Malakpet — The Royal Palace, Hyderabad";
const description =
  "Indoor banquet hall in Azampura, Malakpet: up to 125 seated, 200 guests floating, with veg and non-veg catering for weddings, engagements and birthdays.";

export const Route = createFileRoute("/banquet")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/banquet" },
    ],
    links: [{ rel: "canonical", href: "/banquet" }],
  }),
  component: BanquetPage,
});

function BanquetPage() {
  return (
    <>
      <PageHero
        image={images.banquet}
        alt="Banquet hall set with round tables, gold chairs and a decorated stage"
        eyebrow="Banquet Hall"
        title="Your Celebration. Our Royal Setting."
        description="An indoor hall for up to 125 seated guests and 200 floating, with in-house veg and non-veg catering."
      >
        <Button variant="gold" size="lg" asChild>
          <a href="#enquiry">Request Event Enquiry</a>
        </Button>
      </PageHero>

      <section className="section-y">
        <div className="container-royal">
          <SectionHeading eyebrow="Venue Features" title="What The Hall Offers" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {banquetFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 80} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-cream">
        <div className="container-royal grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Perfect For"
              title="Occasions We Host"
              description="From intimate family functions to full-hall receptions, the same kitchen that serves the restaurant caters your event."
            />
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {banquetOccasions.map((o, i) => (
                <Reveal
                  as="li"
                  key={o}
                  delay={(i % 4) * 60}
                  className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
                >
                  {o}
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal className="card-royal">
            <img
              src={images.celebration}
              alt="Family celebrating with a cake in the banquet hall"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1067}
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-royal">
          <SectionHeading
            eyebrow="Enquiry"
            title="Request Event Enquiry"
            description="Share your date and guest count — our banquet team will call you to confirm availability, menu and pricing."
          />
          <div className="mx-auto mt-12 max-w-3xl">
            <EnquiryForm id="enquiry" />
          </div>
        </div>
      </section>
    </>
  );
}
