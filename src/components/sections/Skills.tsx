import React, { useEffect, useRef } from 'react';
import { Server, Code, Users, PenSquare, Database, FileSliders } from 'lucide-react';

const skillCategories = [
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    icon: <Server className="text-primary" size={20} />,
    skills: [
      { name: 'Oracle Cloud', level: 95 },
      { name: 'AWS', level: 90 },
      { name: 'Azure', level: 85 },
      { name: 'GCP', level: 80 },
      { name: 'Terraform', level: 85 },
      { name: 'Microservices', level: 85 },
    ]
  },
  {
    id: 'solutions',
    name: 'Solution Architecture',
    icon: <FileSliders className="text-primary" size={20} />,
    skills: [
      { name: 'SaaS', level: 95 },
      { name: 'PaaS', level: 90 },
      { name: 'IaaS', level: 90 },
      { name: 'ITIL/ITSM', level: 85 },
      { name: 'CI/CD', level: 80 },
      { name: 'DevOps', level: 85 },
    ]
  },
  {
    id: 'customer',
    name: 'Customer Engagement',
    icon: <Users className="text-primary" size={20} />,
    skills: [
      { name: 'Pre-sales Support', level: 95 },
      { name: 'Stakeholder Comm.', level: 90 },
      { name: 'Technical Presentations', level: 95 },
      { name: 'POC/POV', level: 90 },
      { name: 'Process Automation', level: 85 },
      { name: 'Req. Gathering', level: 90 },
    ]
  },
  {
    id: 'technical',
    name: 'Technical Skills',
    icon: <Code className="text-primary" size={20} />,
    skills: [
      { name: 'REST APIs', level: 90 },
      { name: 'JSON', level: 95 },
      { name: 'Python', level: 90 },
      { name: 'R', level: 80 },
      { name: 'JavaScript', level: 85 },
      { name: 'C/C++', level: 80 },
    ]
  },
  {
    id: 'data',
    name: 'Data & Analytics',
    icon: <Database className="text-primary" size={20} />,
    skills: [
      { name: 'Data Analysis', level: 90 },
      { name: 'Pandas', level: 85 },
      { name: 'Oracle DB', level: 90 },
      { name: 'Data Visualization', level: 85 },
      { name: 'ML Lifecycle', level: 80 },
      { name: 'MLflow', level: 85 },
    ]
  },
  {
    id: 'collaboration',
    name: 'Collaboration Tools',
    icon: <PenSquare className="text-primary" size={20} />,
    skills: [
      { name: 'Agile Development', level: 90 },
      { name: 'Jira/Confluence', level: 95 },
      { name: 'Figma/Lucidchart', level: 85 },
      { name: 'Adobe XD', level: 80 },
      { name: 'Tableau', level: 85 },
      { name: 'Notion', level: 90 },
    ]
  }
];

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section bg-secondary/30">
      <div
        ref={skillsRef}
        className="space-y-12 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills & Tools</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and methodologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              className="blur-card rounded-xl p-6 space-y-6 animate-scale"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-2">
                {category.icon}
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className="space-y-2"
                    style={{
                      animationDelay: `${(categoryIndex * 100) + (skillIndex * 50)}ms`,
                      "--index": skillIndex
                    } as React.CSSProperties}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>

                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all ease-out duration-1000 animate-slide-right"
                        style={{
                          width: '0%',
                          animationFillMode: 'forwards',
                          '--to-width': `${skill.level}%`
                        } as React.CSSProperties}
                        onAnimationStart={(e) => {
                          // Add delay based on the index
                          const delay = (categoryIndex * 100) + (skillIndex * 50);
                          setTimeout(() => {
                            const target = e.target as HTMLElement;
                            target.style.width = `${skill.level}%`;
                          }, 500 + delay);
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="blur-card rounded-xl p-6 text-center space-y-4">
          <h3 className="text-xl font-semibold">Current Learning Focus</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['MLOps', 'Machine Learning Lifecycle', 'Cloud Architecture', 'Digital Transformation', 'Six Sigma'].map((item, i) => (
              <span
                key={i}
                className="badge bg-primary/10 text-primary px-4 py-2 animate-fade-in"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;