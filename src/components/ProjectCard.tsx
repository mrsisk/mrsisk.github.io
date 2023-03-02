import React from 'react'
import { Project } from '../context/ProjectContext';
import line from '../assets/lines/right-line.svg'
import { Link } from 'react-router-dom';

export default function ProjectCard(props: {project: Project}) {
    const {project} = props
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="relative w-full lg:w-1/3 px-4"
    >
      <img
        className="hidden lg:block absolute top-0 left-0 -ml-14 mt-24"
        src={line}
        alt=""
      />
      <div className="relative z-10 lg:mt-8 lg:mb-8 rounded-lg bg-gray-800">
        <div className="relative mb-8 h-52">
          <img
            className="w-full h-full rounded-lg object-cover"
            src={project.image}
            alt=""
          />
          <div className="absolute bottom-0 left-0 ml-8 mb-6 px-3 pb-3 pt-1 inline-block bg-white rounded-b-2xl border-t-4 border-blue-500">
            <p className="text-xl font-bold">29</p>
            <p className="text-xs uppercase text-gray-800">Feb</p>
          </div>
        </div>
        <div className="px-14 pb-10 h-56 overflow-hidden">
          <div className="inline-block pt-4 text-lg text-white hover:text-gray-100  border-t border-gray-400">
            <p className="">{project.subtitle}</p>
          </div>
        </div>
      </div>
    </a>
  );
}
