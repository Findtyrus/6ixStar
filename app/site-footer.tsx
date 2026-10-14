import Logo from "./logo";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-muted sm:px-8">
        <div className="flex items-center gap-3">
          <Logo className="h-7 w-auto text-ink" />
          <p>
            &copy; {new Date().getFullYear()} SixStar Sports &middot;{" "}
            <a href="mailto:sixstarsports79@gmail.com" className="transition hover:text-ink">
              sixstarsports79@gmail.com
            </a>
          </p>
        </div>
        <a href="#top" className="transition hover:text-ink">Back to top</a>
      </div>
    </footer>
  );
}
