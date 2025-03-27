import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { projects, skills } from '../data';
import { Project } from '../types';

const Hero = () => (
  <div className="relative h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 gradient-animate opacity-10"></div>
    <div className="relative z-10 text-center px-4">
      <h1 className="text-8xl md:text-9xl font-inter font-thin mb-6 bg-clip-text text-transparent bg-gradient-to-b from-violet-600 to-indigo-600 animate-fade-in-up">
        Asaka<br />Natori
      </h1>
      <p className="text-xl font-inter md:text-2xl mb-8 text-zinc-500 animate-fade-in-up animate-delay-100">
        Frontend Engineer
      </p>
      <div className="flex justify-center gap-6 animate-fade-in-up animate-delay-200">
        <a href="https://github.com/asaka0126" className="transform hover:scale-110 transition-transform duration-200">
          <Github className="w-7 h-7 text-violet-600" />
        </a>
        <a href="mailto:askn.work@gmail.com" className="transform hover:scale-110 transition-transform duration-200">
          <Mail className="w-7 h-7 text-violet-600" />
        </a>
      </div>
    </div>
    <div className="absolute bottom-5 w-100 animate-bounce">
      <ArrowRight className="w-8 h-8 text-violet-600 transform rotate-90" />
    </div>
  </div>
);

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Link
    to={`/project/${project.id}`}
    className="group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
  >
    <div className="aspect-video bg-gradient-to-br from-violet-100 to-indigo-100 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-semibold mb-3 text-zinc-800">{project.title}</h3>
      <p className="text-zinc-600 mb-6">
        {project.description}
      </p>
      <div className="flex flex-wrap items-center gap-3 text-sm">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1.5 bg-violet-100 text-violet-600 rounded-full font-medium">
            {tag}
          </span>
        ))}
        <ExternalLink className="w-5 h-5 ml-auto text-zinc-400 group-hover:text-violet-600 transition-colors" />
      </div>
    </div>
  </Link>
);

interface SkillCardProps {
  name: string;
  years: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, years }) => (
  <div
    className="p-8 text-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <p className="font-medium text-zinc-800 mb-2">{name}</p>
    <p className="text-sm text-violet-600">{years} years</p>
  </div>
);

export function Portfolio() {
  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <Hero />

      {/* Projects Section */}
      <div className="max-w-6xl mx-auto px-4 py-32">
        <h2 className="title">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-animate opacity-5"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="title">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} years={skill.years} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto px-4 py-32">
        <h2 className="title">
          Contact
        </h2>
        <div className="max-w-xl mx-auto text-center">
          <a
            href="mailto:askn.work@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl font-medium hover:from-violet-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <Mail className="w-5 h-5" />
            askn.work@gmail.com
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-zinc-400">© 2024 Asaka Natori. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
