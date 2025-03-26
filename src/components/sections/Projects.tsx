
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Layers } from 'lucide-react';

// Project data
const projects = [
  {
    id: 1,
    title: 'Cloud Migration Platform',
    description: 'A platform to streamline cloud migration processes for enterprise applications.',
    image: '/placeholder.svg',
    tags: ['Cloud', 'DevOps'],
    tech: ['AWS', 'Terraform', 'React', 'Node.js'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 2,
    title: 'Data Analytics Dashboard',
    description: 'Interactive dashboard for visualizing and analyzing big data sets in real-time.',
    image: '/placeholder.svg',
    tags: ['Data', 'Analytics'],
    tech: ['Python', 'Apache Spark', 'D3.js', 'Flask'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 3,
    title: 'ML Model Deployment Tool',
    description: 'Tool for simplified deployment and monitoring of machine learning models.',
    image: '/placeholder.svg',
    tags: ['ML', 'DevOps'],
    tech: ['Python', 'MLflow', 'Docker', 'Kubernetes'],
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: 4,
    title: 'Product Management System',
    description: 'System for managing product lifecycles, roadmaps, and customer feedback.',
    image: '/placeholder.svg',
    tags: ['Product', 'Management'],
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubUrl: '#',
    liveUrl: '#',
  },
];

// Categories for filtering
const categories = ['All', 'Cloud', 'DevOps', 'Data', 'ML', 'Product', 'Management', 'Analytics'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter(project => project.tags.includes(selectedCategory))
      );
    }
  }, [selectedCategory]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="section bg-secondary/30">
      <div 
        ref={projectsRef} 
        className="space-y-12 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Projects & Case Studies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work and technical projects
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`badge px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80 text-secondary-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex flex-col overflow-hidden rounded-xl blur-card transition-all duration-300 hover:shadow-md hover:-translate-y-1"
              style={{ 
                animationDelay: `${index * 100}ms`,
                "--index": index 
              } as React.CSSProperties}
            >
              <div className="aspect-video w-full overflow-hidden">
                <div className="h-full w-full bg-muted flex items-center justify-center">
                  <Layers size={40} className="text-muted-foreground" />
                </div>
              </div>
              
              <div className="flex flex-col flex-grow p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge bg-primary/10 text-primary text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="badge bg-secondary text-secondary-foreground text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
