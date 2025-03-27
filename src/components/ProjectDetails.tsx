import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';

interface ProjectDetailsProps {
  projects: Project[];
}

export function ProjectDetails({ projects }: ProjectDetailsProps) {
  const { id } = useParams<{ id: string }>();
  const [isMobile, setIsMobile] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const formatTitle = (title: string) => {
    if (isMobile && title === "ライフスタイルブランドサイト") {
      return (
        <span className="inline-block">
          <span className="inline-block">ライフスタイル</span>
          <span className="block w-full h-0"></span>
          <span className="inline-block">ブランドサイト</span>
        </span>
      );
    }
    return title;
  };

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-zinc-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-zinc-800 mb-4">Project not found</h1>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/20"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{formatTitle(project.title)}</h1>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
              {project.link}
            </a>
            <div className="flex flex-wrap justify-center gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>

        {/* Project Description */}
        <div className="prose prose-zinc max-w-none">
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
            <div className="mb-4">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-700"
              >
                <ExternalLink className="w-4 h-4" />
                {project.link}
              </a>
            </div>
            <div
              className="text-zinc-600"
              dangerouslySetInnerHTML={{ __html: project.fullDescription }}
            />
          </div>
        </div>

        {/* Screenshots */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Screenshots</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <div className="aspect-video relative">
                  <img
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div
                      className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(screenshot);
                      }}
                    >
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-zinc-900 text-white py-12 mt-32">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-zinc-400">© 2024 Asaka Natori. All rights reserved.</p>
        </div>
      </footer>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl max-h-full p-4"
            >
              <img src={selectedImage} alt="Enlarged screenshot" className="max-w-full max-h-full object-contain" />
              <button
                className="absolute top-4 right-4 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  closeModal();
                }}
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
