
import React, { useEffect, useRef } from 'react';
import { Award, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
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
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section">
      <div 
        ref={aboutRef} 
        className="space-y-12 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My background, journey, and what drives me
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <p className="text-lg leading-relaxed">
              I'm a passionate Cloud Engineer and Product Manager with over X years of experience building scalable cloud solutions and leading product development.
            </p>
            
            <p className="text-lg leading-relaxed">
              My journey began at [University/First Company], where I discovered my passion for cloud technologies and product management. Since then, I've worked with companies like Oracle and Z Collective to build and scale innovative solutions.
            </p>
            
            <p className="text-lg leading-relaxed">
              When I'm not coding or designing products, you can find me [Your Hobbies/Interests]. I believe in [Your Philosophy/Approach].
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center p-4 blur-card rounded-lg">
                <Briefcase className="text-primary mb-2" size={24} />
                <h3 className="text-xl font-semibold">X+</h3>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              
              <div className="flex flex-col items-center p-4 blur-card rounded-lg">
                <Award className="text-primary mb-2" size={24} />
                <h3 className="text-xl font-semibold">Y+</h3>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>
              
              <div className="flex flex-col items-center p-4 blur-card rounded-lg">
                <GraduationCap className="text-primary mb-2" size={24} />
                <h3 className="text-xl font-semibold">Z+</h3>
                <p className="text-sm text-muted-foreground">Certifications</p>
              </div>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent opacity-30 blur-sm rounded-2xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl"></div>
              <div className="relative h-full w-full bg-muted rounded-2xl flex items-center justify-center overflow-hidden">
                <div className="bg-white dark:bg-gray-800 rounded-full h-48 w-48 md:h-64 md:w-64 flex items-center justify-center">
                  {/* Replace with an actual image */}
                  <p className="text-muted-foreground">Your Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
