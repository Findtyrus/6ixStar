export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-sm text-zinc-500 md:px-10">
        <p>
          &copy; {new Date().getFullYear()} SixStar Sports &middot;{" "}
          <a href="mailto:sixstarsports79@gmail.com" className="transition hover:text-white">
            sixstarsports79@gmail.com
          </a>
        </p>
        <a href="#top" className="transition hover:text-white">Back to top &uarr;</a>
      </div>
    </footer>
  );
}
