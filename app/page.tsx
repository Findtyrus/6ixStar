import Image from "next/image";
import ContactForm from "./contact-form";

const rosterSpots = [
  {
    name: "Ruben Smith",
    position: "OG / OT",
    bio: "6'6\" | 315 lbs | Tyler Junior College | @ThunderSmith76",
    image: "/athlete-ruben-smith.png",
  },
  {
    name: "Amare Johnson",
    position: "Center / OG",
    bio: "6'3\" | Kentucky Christian University | X: @_yxngin97",
    image: "/athlete-amare-johnson.png",
  },
  {
    name: "Glendarious Ford",
    position: "CB / S",
    bio: "6'1\" | 180 lbs | Southwest CC | X: @glendarixus",
    image: "/athlete-glendarious-ford.png",
  },
  {
    name: "Khaleb Bridges",
    position: "5'11\" | 190 lbs",
    bio: "Citdeal | X: @khaleb2x4",
    image: "/athlete-khaleb-bridges.png",
  },
  {
    name: "Jabari Murphy",
    position: "RB",
    bio: "6'2\" | 225 lbs | X: @JabariMurphy",
    image: "/athlete-jabari-murphy.png",
  },
  {
    name: "Damion Miller",
    position: "CB",
    bio: "6'3\" | 200 lbs | Southwest CC | X: @DamionM2005",
    image: "/athlete-damion-miller.png",
  },
  {
    name: "Tahj Williby",
    position: "WR",
    bio: "6'4\" | 195 lbs | X: @TahjWilliby_10",
    image: "/athlete-tahj-williby.png",
  },
  {
    name: "AJ Howard",
    position: "Defensive Back",
    bio: "40 tackles | 27 solo | 2 TFL | 1 FF | 10 PBUs | X: @MrLocksmith__",
    image: "/athlete-aj-howard.png",
  },
  {
    name: "Caleb Bryant",
    position: "DT / Edge",
    bio: "6'3\" | 290 lbs | Bounce back from Mississippi State | X: @Calebb_45",
    image: "/athlete-caleb-bryant.png",
  },
  {
    name: "Caleb Williams",
    position: "Junior",
    bio: "Southern Miss | X: @IamCW_",
    image: "/athlete-caleb-williams.png",
  },
  {
    name: "Mekhi Brown",
    position: "LB",
    bio: "6'3\" | 205 lbs | 168 career tackles | 26 TFLs | 17 sacks | 2 INTs | X: @__mekhiiii__",
    image: "/athlete-mekhi-brown.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 pb-20 pt-10 md:px-10">
        <header className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative flex h-20 w-20 items-center justify-center" aria-label="SixStar Sports logo">
              <span className="select-none text-[5.5rem] font-black leading-none text-white">6</span>
              <span className="pointer-events-none absolute left-[52%] top-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black p-[3px] text-[1.15rem] leading-none text-white">
                ★
              </span>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">NIL Football Agency</p>
              <h1 className="text-2xl font-semibold tracking-tight">SixStar Sports</h1>
            </div>
          </div>
          <nav className="flex gap-3 text-sm text-zinc-200">
            <a href="#about" className="rounded-full border border-white/15 px-4 py-2 transition hover:border-white/50">About</a>
            <a href="#roster" className="rounded-full border border-white/15 px-4 py-2 transition hover:border-white/50">Roster</a>
            <a href="#contact" className="rounded-full border border-white/15 px-4 py-2 transition hover:border-white/50">Contact</a>
          </nav>
        </header>

        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black p-8 md:p-12">
          <p className="mb-3 inline-flex rounded-full border border-white/20 px-3 py-1 text-xs tracking-[0.2em] text-zinc-300">
            FOOTBALL. BRAND. LEGACY.
          </p>
          <h2 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Building elite football NIL opportunities for tomorrow&apos;s stars.
          </h2>
          <p className="mt-6 max-w-2xl text-base text-zinc-300 md:text-lg">
            SixStar Sports represents football athletes with modern NIL strategy, premium brand partnerships, and long-term career development.
          </p>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-zinc-950/70">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-14 md:grid-cols-3 md:px-10">
          <article className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <h3 className="text-lg font-semibold">Athlete Branding</h3>
            <p className="mt-3 text-sm text-zinc-300">Personal brand strategy, social positioning, and content direction built around each athlete.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <h3 className="text-lg font-semibold">NIL Partnerships</h3>
            <p className="mt-3 text-sm text-zinc-300">High-value local and national sponsorship outreach aligned with player goals and audience.</p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <h3 className="text-lg font-semibold">Career Development</h3>
            <p className="mt-3 text-sm text-zinc-300">Long-term support for recruiting, media prep, and post-college professional positioning.</p>
          </article>
        </div>
      </section>

      <section id="roster" className="mx-auto w-full max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">Current Roster</p>
            <h3 className="mt-2 text-3xl font-semibold">Football Athletes</h3>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rosterSpots.map((player) => (
            <article key={player.name} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70">
              {player.image ? (
                <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-white/10">
                  <Image
                    src={player.image}
                    alt={`${player.name} athlete photo`}
                    width={1200}
                    height={1600}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex h-44 items-center justify-center border-b border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950 text-xs uppercase tracking-[0.2em] text-zinc-300">
                  Player photo placeholder
                </div>
              )}
              <div className="space-y-2 p-5">
                <h4 className="text-lg font-semibold">{player.name}</h4>
                <p className="text-sm text-zinc-400">{player.position}</p>
                <p className="text-sm text-zinc-300">{player.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-black">
        <div className="mx-auto w-full max-w-6xl px-6 py-14 md:px-10">
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">Contact SixStar Sports</p>
          <h3 className="mt-2 text-3xl font-semibold">Let&apos;s Work</h3>
          <p className="mt-3 max-w-2xl text-sm text-zinc-300">
            Reach out for athlete representation, brand opportunities, and football NIL partnerships.
          </p>
          <ContactForm />
          <div className="mt-6 text-sm text-zinc-300">
            <p>Email: sixstarsports79@gmail.com</p>
            <p>Phone: +1 (601) 896-3344</p>
          </div>
        </div>
      </section>
    </main>
  );
}
