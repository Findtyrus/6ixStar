import Link from "next/link";
import Logo from "./logo";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3" aria-label="SixStar Sports home">
          <Logo className="h-8 w-auto text-ink sm:h-9" />
          <span className="whitespace-nowrap font-display text-lg font-bold uppercase tracking-wide sm:text-2xl">
            SixStar Sports
          </span>
        </Link>
        <nav
          className="flex items-center gap-3 font-display text-base font-semibold uppercase tracking-wide sm:gap-8 sm:text-xl"
          aria-label="Primary"
        >
          <Link href="/#about" className="hidden text-muted transition hover:text-ink sm:inline">About</Link>
          <Link href="/#roster" className="text-muted transition hover:text-ink">Roster</Link>
          <Link href="/team" className="text-muted transition hover:text-ink">Team</Link>
          <Link href="/#contact" className="bg-ink px-2.5 py-1 text-paper transition hover:bg-ink/85 sm:px-4">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
