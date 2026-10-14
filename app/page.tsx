import Image from "next/image";
import ContactForm from "./contact-form";
import { roster } from "./roster";
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

// Action shots for the hero strip (matched by name so reordering the roster doesn't break it).
const heroNames = ["Winner Ndjibu", "Ruben Smith", "Elijah Hunter", "Marlos Walker", "Mekhi Brown"];
const heroShots = heroNames
  .map((n) => roster.find((a) => a.name === n))
  .filter((a): a is (typeof roster)[number] & { image: string } => Boolean(a?.image));
const [lead, ...strip] = heroShots;

export default function Home() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <section id="top">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 pb-10 pt-14 sm:px-8 md:grid-cols-[1.5fr_1fr] md:items-end md:pb-14 md:pt-20">
          <div>
            <p className="font-display text-xl font-semibold uppercase tracking-[0.15em] text-muted">
              College Football NIL Representation
            </p>
            <h1 className="mt-3 font-display text-[4.5rem] font-extrabold uppercase leading-[0.88] tracking-tight sm:text-[7rem] lg:text-[9.5rem]">
              Football.
              <br />
              Brand.
              <br />
              Legacy.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">
              SixStar Sports represents college football players. We build NIL deals, brand partnerships, and
              long-term careers for tomorrow&apos;s stars.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 whitespace-nowrap font-display text-lg font-bold uppercase tracking-wide sm:flex sm:flex-wrap sm:text-xl">
              <a href="#roster" className="bg-ink px-4 py-3 text-center text-paper transition hover:bg-ink/85 sm:px-7">
                Meet the roster
              </a>
              <a href="#contact" className="border-2 border-ink px-4 py-[10px] text-center transition hover:bg-ink hover:text-paper sm:px-7">
                Work with us
              </a>
            </div>
          </div>
          {lead ? (
            <div className="relative hidden aspect-[4/5] overflow-hidden bg-tint md:block">
              <Image
                src={lead.image}
                alt={lead.name}
                fill
                priority
                sizes="(min-width: 768px) 35vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          ) : null}
        </div>

        <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
          {strip.map((a, i) => (
            <div key={a.name} className="relative aspect-[3/4] overflow-hidden bg-tint">
              <Image
                src={a.image}
                alt={a.name}
                fill
                priority={i < 2}
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover object-top"
              />
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="border-t border-line">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 md:py-28">
          <h2 className="font-display text-5xl font-extrabold uppercase leading-none tracking-tight md:text-7xl">
            What we do
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {services.map((s) => (
              <div key={s.title} className="border-t-4 border-ink pt-5">
                <h3 className="font-display text-3xl font-bold uppercase tracking-wide">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roster" className="border-t border-line">
        <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-8 md:py-28">
          <h2 className="mb-10 font-display text-5xl font-extrabold uppercase leading-none tracking-tight md:text-7xl">
            The roster
          </h2>
          <RosterGrid />
        </div>
      </section>

      <section id="contact" className="border-t border-line bg-tint">
        <div className="mx-auto grid w-full max-w-7xl gap-12 px-4 py-20 sm:px-8 md:grid-cols-[1fr_1.4fr] md:py-28">
          <div>
            <h2 className="font-display text-5xl font-extrabold uppercase leading-none tracking-tight md:text-7xl">
              Get in touch
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-muted">
              Athletes, parents, coaches, and brands: reach out about representation, partnerships, and football NIL.
            </p>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="font-display text-lg font-semibold uppercase tracking-wide text-muted">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:sixstarsports79@gmail.com"
                    className="text-lg underline decoration-line underline-offset-4 transition hover:decoration-ink"
                  >
                    sixstarsports79@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-display text-lg font-semibold uppercase tracking-wide text-muted">Phone</dt>
                <dd className="mt-1">
                  <a
                    href="tel:+16018963344"
                    className="text-lg underline decoration-line underline-offset-4 transition hover:decoration-ink"
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
