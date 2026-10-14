import Link from "next/link";

function Mark() {
  return (
    <span className="relative inline-flex h-9 w-9 items-center justify-center" aria-hidden="true">
      <span className="select-none text-[2.75rem] font-black leading-none">6</span>
      <span className="absolute left-[52%] top-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper p-[2px] text-[0.6rem] leading-none text-ink">
        ★
      </span>
    </span>
  );
}

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-4 py-3 sm:gap-3 sm:px-8">
        <Link href="/" className="flex items-center gap-2 sm:gap-3" aria-label="SixStar Sports home">
          <Mark />
          <span className="whitespace-nowrap text-[0.95rem] font-semibold tracking-tight">SixStar Sports</span>
        </Link>
        <nav className="flex items-center gap-4 text-sm sm:gap-8" aria-label="Primary">
          <Link href="/#about" className="hidden text-muted transition hover:text-ink sm:inline">About</Link>
          <Link href="/#roster" className="text-muted transition hover:text-ink">Roster</Link>
          <Link href="/team" className="text-muted transition hover:text-ink">Team</Link>
          <Link
            href="/#contact"
            className="bg-ink px-3 py-2 font-medium sm:px-4 text-paper transition hover:bg-ink/85"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
