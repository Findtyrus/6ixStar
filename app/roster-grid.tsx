"use client";

import Image from "next/image";
import { useState } from "react";
import { groups, roster, type PositionGroup } from "./roster";

export default function RosterGrid() {
  const [active, setActive] = useState<PositionGroup | "All">("All");
  const visible = active === "All" ? roster : roster.filter((a) => a.group === active);
  const filters = [{ id: "All" as const, label: "All" }, ...groups];

  return (
    <>
      <div
        className="-mx-4 flex gap-6 overflow-x-auto border-b border-line px-4 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:gap-x-7 sm:gap-y-2 sm:px-0 [&::-webkit-scrollbar]:hidden"
        role="group"
        aria-label="Filter roster by position group"
      >
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            aria-pressed={active === f.id}
            className={`-mb-px shrink-0 whitespace-nowrap border-b-4 pb-2.5 pt-1 font-display text-xl font-semibold uppercase tracking-wide transition ${
              active === f.id ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-9 sm:mt-10 sm:gap-x-5 sm:gap-y-12 lg:grid-cols-3">
        {visible.map((player) => (
          <article key={player.name}>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-tint">
              {player.image ? (
                <Image
                  src={player.image}
                  alt={`${player.name}${player.position ? `, ${player.position}` : ""}`}
                  fill
                  sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-display text-6xl font-bold text-line sm:text-8xl">
                  {player.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
              {player.position ? (
                <span className="absolute left-0 top-3 bg-ink px-2 py-0.5 font-display text-sm font-bold sm:top-4 sm:px-3 sm:py-1 sm:text-lg uppercase leading-none tracking-wide text-paper">
                  {player.position}
                </span>
              ) : null}
            </div>
            <div className="mt-4">
              <h3 className="font-display text-xl font-bold uppercase leading-[1.05] tracking-wide sm:text-3xl sm:leading-none">{player.name}</h3>
              {player.details.length > 0 ? (
                <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-muted sm:mt-2 sm:line-clamp-none sm:text-sm">{player.details.join(" · ")}</p>
              ) : null}
              {player.x ? (
                <a
                  href={`https://x.com/${player.x}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-block text-xs underline sm:mt-2 sm:text-sm decoration-line underline-offset-4 transition hover:decoration-ink"
                >
                  {`@${player.x}`}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
