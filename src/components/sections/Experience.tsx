
import React, { useEffect, useRef } from 'react';
import { Award, Calendar } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Senior Cloud Engineer',
    company: 'Oracle',
    duration: 'Jan 2021 - Present',
    description: 'Leading cloud migration projects and developing scalable solutions for enterprise clients.',
    achievements: [
      'Reduced deployment time by 40% through automation',
      'Led a team of 5 engineers to implement CI/CD pipelines',
      'Architected multi-region cloud infrastructure for high availability'
    ]
  },
  {
    id: 2,
    role: 'Product Manager',
    company: 'Z Collective',
    duration: 'Mar 2019 - Dec 2020',
    description: 'Managed product roadmap and development for SaaS platform serving 50K+ users.',
    achievements: [
      'Increased user engagement by 30% through data-driven UX improvements',
      'Coordinated cross-functional teams to deliver features on time',
      'Implemented agile methodologies that reduced time-to-market by 25%'
    ]
  },
  {
    id: 3,
    role: 'Data Engineer',
    company: 'Tech Innovators',
    duration: 'Jun 2017 - Feb 2019',
    description: 'Built data pipelines and analytics solutions for processing large datasets.',
    achievements: [
      'Developed ETL processes that handled 500M+ daily records',
      'Created dashboards for real-time analytics and reporting',
      'Optimized database queries resulting in 60% performance improvement'
    ]
  }
];

const certifications = [
  {
    id: 1,
    name: 'Oracle Cloud Infrastructure Architect Professional',
    issuer: 'Oracle',
    date: 'May 2022',
    link: '#'
  },
  {
    id: 2,
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: 'Jan 2021',
    link: '#'
  },
  {
    id: 3,
    name: 'Professional Scrum Product Owner',
    issuer: 'Scrum.org',
    date: 'Nov 2019',
    link: '#'
  }
];

const Experience = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  
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
    
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    
    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="section">
      <div 
        ref={experienceRef} 
        className="space-y-12 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Experience & Certifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and credentials
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Calendar className="text-primary" size={20} />
              <span>Work Experience</span>
            </h3>
            
            <div className="relative pl-8 border-l-2 border-border space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className="relative animate-fade-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -left-[41px] h-8 w-8 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary"></div>
                  </div>
                  
                  <div className="blur-card rounded-lg p-6 space-y-4">
                    <div className="space-y-1">
                      <h4 className="text-xl font-semibold">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                      <p className="text-sm text-muted-foreground">{exp.duration}</p>
                    </div>
                    
                    <p className="text-foreground/80">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="h-5 w-5 mt-0.5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                          </span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold flex items-center gap-2">
              <Award className="text-primary" size={20} />
              <span>Certifications</span>
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={cert.id} 
                  className="blur-card rounded-lg p-6 space-y-2 animate-slide-in-right"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex justify-between items-start">
                    <h4 className="text-lg font-semibold">{cert.name}</h4>
                    <span className="badge bg-primary/10 text-primary">{cert.date}</span>
                  </div>
                  
                  <p className="text-muted-foreground">Issued by {cert.issuer}</p>
                  
                  <a 
                    href={cert.link} 
                    className="text-sm text-primary inline-flex items-center gap-1 hover:underline"
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
            
            <div className="blur-card rounded-lg p-6 mt-8 border-l-4 border-primary">
              <h4 className="text-lg font-semibold">Education</h4>
              <p className="text-foreground/80 mt-2">
                Bachelor of Science in Computer Science
              </p>
              <p className="text-muted-foreground">
                University Name, Graduated 2017
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
