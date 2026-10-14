// SixStar "6" mark: heavy numeral with a star cut into the bowl. Uses currentColor.
export default function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="150 80 500 740"
      className={className}
      role="img"
      aria-label="SixStar Sports"
      fill="currentColor"
    >
      <defs>
        <mask id="sixstar-hole">
          <rect x="0" y="0" width="800" height="900" fill="white" />
          <circle cx="400" cy="570" r="100" fill="black" />
        </mask>
      </defs>
      <g mask="url(#sixstar-hole)">
        <circle cx="400" cy="568" r="248" />
        <polygon points="390,85 543,85 412,322 400,568 215,400" />
      </g>
      <polygon points="400.0,497.0 416.6,548.1 470.4,548.1 426.9,579.7 443.5,630.9 400.0,599.3 356.5,630.9 373.1,579.7 329.6,548.1 383.4,548.1" />
    </svg>
  );
}
