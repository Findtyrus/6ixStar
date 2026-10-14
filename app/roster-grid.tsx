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
        className="flex flex-wrap gap-x-7 gap-y-2 border-b border-line"
        role="group"
        aria-label="Filter roster by position group"
      >
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            aria-pressed={active === f.id}
            className={`-mb-px border-b-4 pb-2 font-display text-xl font-semibold uppercase tracking-wide transition ${
              active === f.id ? "border-ink text-ink" : "border-transparent text-muted hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-x-5 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="flex h-full w-full items-center justify-center font-display text-8xl font-bold text-line">
                  {player.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
              {player.position ? (
                <span className="absolute left-0 top-4 bg-ink px-3 py-1 font-display text-lg font-bold uppercase leading-none tracking-wide text-paper">
                  {player.position}
                </span>
              ) : null}
            </div>
            <div className="mt-4">
              <h3 className="font-display text-3xl font-bold uppercase leading-none tracking-wide">{player.name}</h3>
              {player.details.length > 0 ? (
                <p className="mt-2 text-sm leading-relaxed text-muted">{player.details.join(" · ")}</p>
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
