import SiteFooter from "./site-footer";
import SiteHeader from "./site-header";
import ContactForm from "./contact-form";
import RosterGrid from "./roster-grid";
import { groups, roster } from "./roster";

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

const stats = [
  { value: String(roster.length), label: "Athletes represented" },
  { value: String(groups.length), label: "Position groups" },
  { value: "100%", label: "Football focused" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-white">
      <SiteHeader />

      <section id="top" className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.14),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-20 md:px-10 md:pb-28 md:pt-28">
          <p className="mb-6 inline-flex rounded-full border border-gold/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Football NIL Agency
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Football. Brand. <span className="text-gold">Legacy.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-300 md:text-xl">
            Building elite football NIL opportunities for tomorrow&apos;s stars. Modern NIL strategy, premium brand
            partnerships, and long-term career development.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#roster"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black transition hover:bg-zinc-200"
            >
              Meet the roster
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold transition hover:border-white/60"
            >
              Work with us
            </a>
            <a
              href="mailto:sixstarsports79@gmail.com"
              className="rounded-full border border-gold/50 px-7 py-3.5 text-sm font-semibold text-gold transition hover:bg-gold hover:text-black"
            >
              Email us
            </a>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="text-3xl font-semibold md:text-4xl">{s.value}</dd>
                <dt className="mt-1 text-xs uppercase tracking-[0.15em] text-zinc-400">{s.label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-zinc-950/70">
        <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">About</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            One agency. Built around football athletes.
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {services.map((s, i) => (
              <article
                key={s.title}
                className="rounded-2xl border border-white/10 bg-black/40 p-7 transition hover:border-gold/40"
              >
                <span className="text-sm font-semibold text-gold">0{i + 1}</span>
                <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-300">{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="roster" className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <p className="text-xs uppercase tracking-[0.25em] text-gold">Current Roster</p>
        <h2 className="mb-8 mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Football Athletes</h2>
        <RosterGrid />
      </section>

      <section id="contact" className="border-t border-white/10 bg-zinc-950/70">
        <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1fr_1.4fr] md:px-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">Let&apos;s work.</h2>
            <p className="mt-4 text-zinc-300">
              Reach out for athlete representation, brand opportunities, and football NIL partnerships.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <p>
                <span className="block text-xs uppercase tracking-[0.2em] text-zinc-500">Email</span>
                <a href="mailto:sixstarsports79@gmail.com" className="text-zinc-200 transition hover:text-gold">
                  sixstarsports79@gmail.com
                </a>
              </p>
              <p>
                <span className="block text-xs uppercase tracking-[0.2em] text-zinc-500">Phone</span>
                <a href="tel:+16018963344" className="text-zinc-200 transition hover:text-gold">
                  +1 (601) 896-3344
                </a>
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="mailto:sixstarsports79@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 font-semibold text-black transition hover:brightness-110"
                >
                  <span aria-hidden="true">&#9993;</span> Email us
                </a>
                <a
                  href="tel:+16018963344"
                  className="inline-flex items-center gap-2 rounded-full border border-gold/50 px-5 py-2.5 font-semibold text-gold transition hover:bg-gold hover:text-black"
                >
                  <span aria-hidden="true">&#9742;</span> Call us
                </a>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
