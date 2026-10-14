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
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter roster by position group">
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setActive(f.id)}
            aria-pressed={active === f.id}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              active === f.id
                ? "border-gold bg-gold text-black"
                : "border-white/15 text-zinc-300 hover:border-white/40 hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((player) => (
          <article
            key={player.name}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/60 transition hover:-translate-y-1 hover:border-gold/50"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              {player.image ? (
                <Image
                  src={player.image}
                  alt={`${player.name}${player.position ? `, ${player.position}` : ""}`}
                  fill
                  sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950 text-6xl font-semibold text-zinc-600">
                  {player.name
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent p-5 pt-16">
                {player.position ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{player.position}</p>
                ) : null}
                <h3 className="mt-1 text-xl font-semibold tracking-tight">{player.name}</h3>
              </div>
            </div>

            <div className="space-y-4 p-5">
              {player.details.length > 0 ? (
                <ul className="flex flex-wrap gap-2">
                  {player.details.map((d) => (
                    <li key={d} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-zinc-300">
                      {d}
                    </li>
                  ))}
                </ul>
              ) : null}
              {player.x ? (
                <a
                  href={`https://x.com/${player.x}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-zinc-400 transition hover:text-gold"
                >
                  {`@${player.x} on X →`}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
