import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Meridian Dashboard',
    description: 'Analytics UI kit with real-time data visualization',
    category: 'Dashboard',
    image: '/project_01.jpg',
    tags: ['React', 'D3.js', 'TypeScript'],
    link: '#',
  },
  {
    id: 2,
    title: 'Nova Commerce',
    description: 'Headless storefront with seamless checkout experience',
    category: 'E-commerce',
    image: '/project_02.jpg',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    link: '#',
  },
  {
    id: 3,
    title: 'Orbit Studio',
    description: 'Creative agency site with immersive animations',
    category: 'Website',
    image: '/project_03.jpg',
    tags: ['GSAP', 'Three.js', 'WebGL'],
    link: '#',
  },
];

const categories = ['All', 'Dashboard', 'E-commerce', 'Website'];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section 
      ref={sectionRef}
      id="work" 
      className="relative w-full min-h-screen py-20 bg-[#0B1222] overflow-hidden"
    >
      {/* Section Label */}
      <div 
        className={`text-center section-label mb-4 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        Selected Work
      </div>

      {/* Header */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 
            className={`text-[clamp(36px,5vw,64px)] font-bold text-white leading-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Featured<br />
            <span className="text-[#4F6DFF]">Projects</span>
          </h2>

          {/* Filter Tabs */}
          <div 
            className={`flex flex-wrap gap-2 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-[#4F6DFF] text-white'
                    : 'bg-[rgba(242,245,250,0.05)] text-[#A7B1C6] hover:bg-[rgba(242,245,250,0.1)] hover:text-white'
                }`}
                data-cursor-hover
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{
            perspective: '1000px',
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* View All Link */}
        <div 
          className={`mt-12 text-right transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.6s' }}
        >
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-[#4F6DFF] font-medium hover:gap-4 transition-all duration-300"
            data-cursor-hover
          >
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Background Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(79, 109, 255, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </section>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isVisible: boolean;
}

function ProjectCard({ project, index, isVisible }: ProjectCardProps) {
  const cardRef = useScrollReveal<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={cardRef.ref}
      className={`group relative transition-all duration-700 ${
        isVisible && cardRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{
        transitionDelay: `${0.3 + index * 0.1}s`,
        transform: isVisible && cardRef.isVisible 
          ? 'perspective(1000px) rotateX(4deg) rotateY(-4deg)' 
          : 'perspective(1000px) rotateX(15deg) rotateY(-15deg) translateY(50px)',
        transformStyle: 'preserve-3d',
      }}
    >
      <a 
        href={project.link}
        className="block glass-card rounded-[24px] overflow-hidden hover-lift"
        data-cursor-hover
      >
        {/* Image */}
        <div className="aspect-[16/10] relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-[#070B14]/20 to-transparent opacity-60" />
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-[#4F6DFF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* External Link Icon */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs text-[#4F6DFF] font-medium uppercase tracking-wider">
              {project.category}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#4F6DFF] transition-colors duration-300">
            {project.title}
          </h3>
          
          <p className="text-sm text-[#A7B1C6] mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span 
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-[rgba(242,245,250,0.05)] text-[#A7B1C6]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </div>
  );
}
