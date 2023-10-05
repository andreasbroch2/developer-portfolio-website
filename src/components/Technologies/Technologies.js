import React from "react";
import { SectionDivider } from "../../styles/GlobalComponents";
import { techs } from "./techs";
import Image from "next/image";

const Technologies = () => (
  <section className="mx-md" id="tech">
    <SectionDivider divider />
    <h2>Skills</h2>
    <div className="md:flex gap-12 place-content-between my-16">
      {techs.map((t, i) => {
        return (
          <div key={i} className="basis-1/2">
            <h3 className="mb-4">{t.title}</h3>
            <p>{t.description}</p>
            <ul className="flex flex-wrap gap-6 my-8">
              {t.tags.map((tag, i) => {
                return (
                <li key={i} className="flex flex-col gap-1 items-center">
                  <div className="bg-white/80 p-4 rounded-full md:p-5 flex items-center justify-center">
                  <Image src={tag.icon} alt={tag.name} width={50} height={50} />
                  </div>
                  <p className="text-center text-lg font-medium text-gray-600">{tag.name}</p>
                  </li>
                )
              })}
            </ul>
          </div>
        );
      })}
    </div>
  </section>
);

export default Technologies;
