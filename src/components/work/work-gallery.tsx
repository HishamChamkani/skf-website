"use client";

import { useState } from "react";
import { WorkCard } from "@/components/home/works";
import { projects, workCategories, type WorkCategory } from "@/lib/projects";

const ALL = "All Projects";
const PAGE_SIZE = 8;

type Filter = typeof ALL | WorkCategory;

export default function WorkGallery() {
  const [filter, setFilter] = useState<Filter>(ALL);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = filter === ALL ? projects : projects.filter((p) => p.categories.includes(filter));
  const shown = filtered.slice(0, visible);
  const tabs: Filter[] = [ALL, ...workCategories];

  return (
    <>
      <div role="group" aria-label="Filter projects" className="mt-12 flex max-w-[840px] flex-wrap justify-center gap-x-1.5 gap-y-2.5">
        {tabs.map((tab) => {
          const active = tab === filter;
          return (
            <button
              key={tab}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setFilter(tab);
                setVisible(PAGE_SIZE);
              }}
              className={`rounded-[40px] px-3 py-2 text-[14px] font-semibold leading-[19.2px] text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coal sm:px-[14px] sm:text-[16px] ${
                active ? "bg-[#ea580c]" : "bg-[#303030] hover:bg-brand"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {shown.length > 0 ? (
        <ul className="mt-12 grid w-full grid-cols-1 gap-x-[21px] gap-y-10 md:grid-cols-2 md:gap-y-[46px]">
          {shown.map((project, i) => (
            <li key={`${project.title}-${i}`}>
              <WorkCard work={{ ...project, category: project.label }} />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-16 text-center text-[16px] text-sub">No projects in this category yet.</p>
      )}

      {filtered.length > visible && (
        <button
          type="button"
          onClick={() => setVisible((v) => v + PAGE_SIZE)}
          className="relative mt-12 inline-flex h-[49px] items-center justify-center overflow-hidden rounded-2xl border border-coal bg-coal px-10 text-[17px] font-medium leading-[19.8px] tracking-[-0.72px] text-white shadow-[0px_0.723px_0.723px_-1.25px_rgba(0,0,0,0.22),0px_2.746px_2.746px_-2.5px_rgba(0,0,0,0.19),0px_12px_12px_-3.75px_rgba(0,0,0,0.08)] transition-colors duration-200 hover:border-brand hover:bg-brand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coal"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0px_0.602px_1.084px_-0.917px_rgba(255,255,255,0.35),inset_0px_2.289px_4.119px_-1.833px_rgba(255,255,255,0.34),inset_0px_10px_18px_-2.75px_rgba(255,255,255,0.29)]"
          />
          <span className="relative">See more</span>
        </button>
      )}
    </>
  );
}
