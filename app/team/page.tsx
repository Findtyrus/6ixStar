import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteFooter from "../site-footer";
import SiteHeader from "../site-header";
import { team } from "../team";

export const metadata: Metadata = {
  title: "Our Team | SixStar Sports",
  description: "Meet the people behind SixStar Sports, the football NIL agency.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <main id="top" className="min-h-screen bg-background text-white">
      <SiteHeader />

      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_60%)]"
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-6xl px-6 pb-12 pt-16 md:px-10 md:pt-24">
          <p className="text-xs uppercase tracking-[0.25em] text-gold">Our Team</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            The people behind SixStar.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-zinc-300">
            A football-focused team working to build NIL opportunities for every athlete we represent.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article
              key={m.name}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 transition hover:-translate-y-1 hover:border-gold/50"
            >
              <div className="relative aspect-square w-full overflow-hidden">
                {m.image ? (
                  <Image
                    src={m.image}
                    alt={`${m.name}, ${m.title}`}
                    fill
                    sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 text-6xl font-semibold text-zinc-600">
                    {m.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
              </div>
              <div className="space-y-3 p-5">
                <div>
                  <h2 className="text-xl font-semibold tracking-tight">{m.name}</h2>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{m.title}</p>
                </div>
                {m.bio ? <p className="text-sm leading-relaxed text-zinc-300">{m.bio}</p> : null}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-zinc-400">
                  {m.instagram ? (
                    <a
                      href={`https://instagram.com/${m.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-gold"
                    >
                      {`@${m.instagram} on Instagram →`}
                    </a>
                  ) : null}
                  {m.x ? (
                    <a
                      href={`https://x.com/${m.x}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:text-gold"
                    >
                      {`@${m.x} on X →`}
                    </a>
                  ) : null}
                  {m.email ? (
                    <a href={`mailto:${m.email}`} className="transition hover:text-gold">
                      {m.email}
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-zinc-950/70 p-8 md:p-10">
          <h2 className="text-2xl font-semibold tracking-tight">Want to work with SixStar?</h2>
          <p className="mt-3 max-w-2xl text-zinc-300">
            Reach out for athlete representation, brand opportunities, and football NIL partnerships.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <Link
              href="/#contact"
              className="rounded-full bg-gold px-6 py-3 font-semibold text-black transition hover:brightness-110"
            >
              Get in touch
            </Link>
            <a
              href="mailto:sixstarsports79@gmail.com"
              className="rounded-full border border-gold/50 px-6 py-3 font-semibold text-gold transition hover:bg-gold hover:text-black"
            >
              sixstarsports79@gmail.com
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
