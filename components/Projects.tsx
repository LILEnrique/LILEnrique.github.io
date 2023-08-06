"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Proyectos", 0.2);

  return (
    <section ref={ref} id="projects" className=" mb-28 scroll-mt-28  sm:mb-40">
      <h2 className="pb-4 text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60 text-center ">
        Proyectos<span className="text-primary">.</span>
      </h2>
      <p className="pb-12 text-lg text-zinc-300 text-center">Estos son algunos de los proyectos que he desarrollado recientemente.</p>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
