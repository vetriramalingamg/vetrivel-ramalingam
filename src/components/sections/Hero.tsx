
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Download, GitHub, Linkedin } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleParallax = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.3}px)`;
      }
    };
    
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent/10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div ref={heroRef} className="space-y-3">
            <p className="badge bg-secondary text-secondary-foreground animate-fade-in">
              Available for Work
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-slide-up">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-foreground/80 font-light animate-slide-up" style={{ animationDelay: '100ms' }}>
              Cloud Engineer & Product Manager
            </h2>
            
            <p className="mt-6 text-lg text-foreground/70 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '200ms' }}>
              I build scalable cloud solutions and lead product development with a focus on user experience and technical excellence.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </a>
            <a 
              href="#" 
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-full font-medium hover:bg-secondary/80 transition-colors flex items-center gap-2"
            >
              <Download size={18} />
              Resume
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-4 pt-6 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <GitHub size={20} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
