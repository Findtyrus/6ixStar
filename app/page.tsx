import ContactForm from "./contact-form";
import RosterGrid from "./roster-grid";
import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";

const services = [
  {
    title: "Athlete Branding",
    body: "Personal brand strategy, social positioning, and content direction built around each athlete.",
  },
  {
    title: "NIL Partnerships",
    body: "High-value local and national sponsorship outreach aligned with player goals and audience.",
  },
  {
    title: "Career Development",
    body: "Long-term support for recruiting, media prep, and post-college professional positioning.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <section id="top">
        <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-20 sm:px-8 md:pb-32 md:pt-32">
          <h1 className="max-w-4xl font-display text-6xl leading-[1.02] tracking-tight md:text-8xl">
            Football. Brand. Legacy.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
            SixStar Sports is a football NIL agency. We build elite opportunities for tomorrow&apos;s stars through
            modern NIL strategy, premium brand partnerships, and long-term career development.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 text-sm">
            <a href="#roster" className="bg-ink px-6 py-3 font-medium text-paper transition hover:bg-ink/85">
              Meet the roster
            </a>
            <a
              href="#contact"
              className="underline decoration-line underline-offset-[6px] transition hover:decoration-ink"
            >
              Work with us
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-line">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_2fr] md:py-24">
          <h2 className="font-display text-4xl tracking-tight md:text-5xl">What we do</h2>
          <div className="divide-y divide-line border-y border-line">
            {services.map((s) => (
              <div key={s.title} className="grid gap-2 py-6 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <h3 className="font-medium">{s.title}</h3>
                <p className="leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roster" className="border-t border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-24">
          <h2 className="mb-10 font-display text-4xl tracking-tight md:text-5xl">Roster</h2>
          <RosterGrid />
        </div>
      </section>

      <section id="contact" className="border-t border-line bg-tint">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-[1fr_1.4fr] md:py-24">
          <div>
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">Contact</h2>
            <p className="mt-5 max-w-sm leading-relaxed text-muted">
              Reach out for athlete representation, brand opportunities, and football NIL partnerships.
            </p>
            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="text-muted">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:sixstarsports79@gmail.com"
                    className="text-base underline decoration-line underline-offset-4 transition hover:decoration-ink"
                  >
                    sixstarsports79@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-muted">Phone</dt>
                <dd className="mt-1">
                  <a
                    href="tel:+16018963344"
                    className="text-base underline decoration-line underline-offset-4 transition hover:decoration-ink"
                  >
                    +1 (601) 896-3344
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
