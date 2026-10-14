import Link from "next/link";

function Mark() {
  return (
    <span className="relative inline-flex h-10 w-10 items-center justify-center" aria-hidden="true">
      <span className="select-none text-[3rem] font-black leading-none">6</span>
      <span className="absolute left-[52%] top-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black p-[2px] text-[0.65rem] leading-none text-gold">
        ★
      </span>
    </span>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-4 sm:px-6 md:px-10">
        <Link href="/" className="flex items-center gap-3" aria-label="SixStar Sports home">
          <Mark />
          <span className="whitespace-nowrap text-base font-semibold tracking-tight sm:text-lg">SixStar Sports</span>
        </Link>
        <nav className="flex items-center gap-1 text-sm text-zinc-300 sm:gap-2" aria-label="Primary">
          <Link href="/#about" className="hidden rounded-full px-2 py-2 transition hover:text-white sm:inline-block sm:px-3">About</Link>
          <Link href="/#roster" className="rounded-full px-2 py-2 transition hover:text-white sm:px-3">Roster</Link>
          <Link href="/team" className="rounded-full px-2 py-2 transition hover:text-white sm:px-3">Team</Link>
          <Link
            href="/#contact"
            className="rounded-full bg-gold px-3 py-2 font-semibold text-black transition hover:brightness-110 sm:px-4"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
