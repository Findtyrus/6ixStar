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
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-line" role="group" aria-label="Filter roster by position group">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            aria-pressed={active === f.id}
            className={`-mb-px border-b-2 pb-3 text-sm transition ${
              active === f.id ? "border-ink font-medium text-ink" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((player) => (
          <article key={player.name}>
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-tint">
              {player.image ? (
                <Image
                  src={player.image}
                  alt={`${player.name}${player.position ? `, ${player.position}` : ""}`}
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center font-display text-7xl text-muted/50">
                  {player.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
            </div>
            <div className="mt-4">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="text-lg font-medium tracking-tight">{player.name}</h3>
                {player.position ? <p className="shrink-0 text-sm text-muted">{player.position}</p> : null}
              </div>
              {player.details.length > 0 ? (
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{player.details.join(" · ")}</p>
              ) : null}
              {player.x ? (
                <a
                  href={`https://x.com/${player.x}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm underline decoration-line underline-offset-4 transition hover:decoration-ink"
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
