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
    <main id="top" className="min-h-screen bg-paper text-ink">
      <SiteHeader />

      <section>
        <div className="mx-auto w-full max-w-6xl px-5 pb-12 pt-16 sm:px-8 md:pb-16 md:pt-24">
          <h1 className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">Our team</h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            A football-focused team working to build NIL opportunities for every athlete we represent.
          </p>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 md:py-20">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((m) => (
              <article key={m.name}>
                <div className="relative aspect-square w-full overflow-hidden bg-tint">
                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={`${m.name}, ${m.title}`}
                      fill
                      sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-top"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center font-display text-7xl text-muted/50">
                      {m.name
                        .split(" ")
                        .map((w) => w[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                  )}
                </div>
                <div className="mt-4">
                  <h2 className="text-lg font-medium tracking-tight">{m.name}</h2>
                  <p className="mt-0.5 text-sm text-muted">{m.title}</p>
                  {m.bio ? <p className="mt-3 text-sm leading-relaxed">{m.bio}</p> : null}
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                    {m.instagram ? (
                      <a
                        href={`https://instagram.com/${m.instagram}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-line underline-offset-4 transition hover:decoration-ink"
                      >
                        {`Instagram @${m.instagram}`}
                      </a>
                    ) : null}
                    {m.x ? (
                      <a
                        href={`https://x.com/${m.x}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline decoration-line underline-offset-4 transition hover:decoration-ink"
                      >
                        {`X @${m.x}`}
                      </a>
                    ) : null}
                    {m.email ? (
                      <a
                        href={`mailto:${m.email}`}
                        className="underline decoration-line underline-offset-4 transition hover:decoration-ink"
                      >
                        {m.email}
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-tint">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-5 py-14 sm:px-8">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">Want to work with SixStar?</h2>
          <Link href="/#contact" className="bg-ink px-6 py-3 text-sm font-medium text-paper transition hover:bg-ink/85">
            Get in touch
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
