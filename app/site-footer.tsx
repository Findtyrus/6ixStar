export default function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:px-8">
        <p>
          &copy; {new Date().getFullYear()} SixStar Sports &middot;{" "}
          <a href="mailto:sixstarsports79@gmail.com" className="transition hover:text-ink">
            sixstarsports79@gmail.com
          </a>
        </p>
        <a href="#top" className="transition hover:text-ink">Back to top</a>
      </div>
    </footer>
  );
}
