import React, { useEffect, useRef } from 'react';
import { Award, Calendar, BookOpen } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Staff Cloud Solutions Engineer',
    company: 'Oracle Corporation',
    duration: 'Mar 2021 - Nov 2022',
    description: 'Led customer discovery sessions, aligning cloud solutions with business requirements.',
    achievements: [
      'Reduced healthcare new hire process time by 85% through strategic solution design',
      'Cut user customization time by 70% with a new application discovery platform',
      'Conducted 100+ technical sessions ensuring seamless client adoption',
      'Delivered enterprise cloud solutions as part of multi-million-dollar deals'
    ]
  },
  {
    id: 2,
    role: 'Associate Solutions Engineer',
    company: 'Oracle Corporation',
    duration: 'Jun 2018 - Feb 2021',
    description: 'Developed cloud prototypes to onboard new enterprise customers.',
    achievements: [
      'Aligned solution architecture with customer roadmaps through cross-functional collaboration',
      'Won 1st place at MadHacks Hackathon with an innovative cloud-native application'
    ]
  },
  {
    id: 3,
    role: 'Cloud Research Analyst',
    company: 'Z-Collective',
    duration: 'May 2024 - Present',
    description: 'Researching MLOps practices and MLflow for machine learning lifecycle management.',
    achievements: [
      'Implementing MLflow to track experiments and deploy models across diverse environments'
    ]
  },
  {
    id: 4,
    role: 'Lead Business Consultant',
    company: 'Eller Business Consulting',
    duration: 'Jan 2024 - May 2024',
    description: 'Established performance framework using continuous feedback loops.',
    achievements: [
      'Led team of 7 using design thinking & Six Sigma for problem-solving',
      'Identified key insights through root cause analysis and strategic interviews',
      'Processed 13GB of data with Python to identify critical KPIs'
    ]
  },
  {
    id: 5,
    role: 'Graduate Teaching Assistant',
    company: 'University of Arizona',
    duration: 'Aug 2024 - Dec 2024',
    description: 'Primary liaison between instructor and students for cloud computing course.',
    achievements: [
      'Led hands-on labs for AWS, Azure, and GCP cloud platforms'
    ]
  }
];

const certifications = [
  {
    id: 1,
    name: 'Oracle Cloud Infrastructure Architect Professional',
    issuer: 'Oracle',
    date: '2022',
    link: '#'
  },
  {
    id: 2,
    name: 'AWS Certified Solutions Architect',
    issuer: 'Amazon Web Services',
    date: '2023',
    link: '#'
  },
  {
    id: 3,
    name: 'Azure Solutions Architect Expert',
    issuer: 'Microsoft',
    date: '2023',
    link: '#'
  }
];

const education = [
  {
    id: 1,
    degree: 'Masters in Management Information System',
    institution: 'University of Arizona',
    duration: 'Aug 2023 - Dec 2024',
    gpa: 'CGPA: 3.7'
  },
  {
    id: 2,
    degree: 'Bachelor of Technology',
    institution: 'Amrita University',
    duration: 'Aug 2014 - May 2018',
    gpa: 'CGPA: 3.2'
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
          <h2 className="text-3xl md:text-4xl font-bold">Experience & Qualifications</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey, education, and credentials
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

          <div className="space-y-12">
            {/* Certifications */}
            {/* <div className="space-y-6">
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
            </div> */}

            {/* Education */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <BookOpen className="text-primary" size={20} />
                <span>Education</span>
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={edu.id}
                    className="blur-card rounded-lg p-6 space-y-2 animate-slide-in-right border-l-4 border-primary"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <h4 className="text-lg font-semibold">{edu.degree}</h4>
                    <p className="text-foreground/80">
                      {edu.institution}
                    </p>
                    <div className="flex justify-between">
                      <p className="text-muted-foreground">
                        {edu.duration}
                      </p>
                      <p className="text-primary font-medium">
                        {edu.gpa}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;