import React from "react";
import { SectionDivider } from "../../styles/GlobalComponents";
import Carousel2 from "../Carousel/carousel2";


const Projects = () => (
  <section className="mx-md" id="projects">
    <SectionDivider divider />
    <h2>Key projects</h2>
    <Carousel2 />
  </section>
);

export default Projects;
