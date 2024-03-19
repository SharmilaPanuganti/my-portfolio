import React from "react";
import { CodeIcon } from "@heroicons/react/solid";
import { projects } from "../data";
const Projects = () => {
  return (
    <section className="" id="projects">
      <div className="container lg:px-40 mx-auto px-10 py-10">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto w-10 inline-block text-center" />
          <h1 className="text-center title-font text-3xl font-medium text-white">
            Apps I have built
          </h1>
          <p className="mx-auto leading-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
            minus corporis harum facilis quaerat voluptate, incidunt vel nostrum
            optio amet.
          </p>
        </div>
        <div>
          {projects.map((project) => {
            return (
              <a href="#" key="project" className="w-100 p-4">
                <div className="flex-relative">
                  <img src={project.imageSrc} alt="project"></img>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
