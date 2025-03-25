
import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<{
    status: 'idle' | 'loading' | 'success' | 'error';
    message: string;
  }>({
    status: 'idle',
    message: '',
  });
  
  const contactRef = useRef<HTMLDivElement>(null);
  
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
    
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ status: 'loading', message: 'Sending message...' });
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus({ 
        status: 'success', 
        message: 'Message sent successfully! I will get back to you soon.' 
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset after 5 seconds
      setTimeout(() => {
        setFormStatus({
          status: 'idle',
          message: '',
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div 
        ref={contactRef} 
        className="space-y-12 opacity-0 transition-opacity duration-1000"
      >
        <div className="text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a 
                    href="mailto:your.email@example.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-primary" size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Phone</h4>
                  <a 
                    href="tel:+1234567890" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-primary" size={18} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-muted-foreground">City, Country</p>
                </div>
              </div>
            </div>
            
            <div className="blur-card rounded-xl p-6 space-y-4">
              <h4 className="text-lg font-medium">Availability</h4>
              <p className="text-muted-foreground">
                I'm currently available for freelance work and full-time positions. Let's discuss how I can contribute to your project or team.
              </p>
            </div>
          </div>
          
          <div className="blur-card rounded-xl p-6 space-y-6">
            <h3 className="text-2xl font-semibold">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all bg-background"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all bg-background resize-none"
                />
              </div>
              
              <button
                type="submit"
                disabled={formStatus.status === 'loading'}
                className="w-full bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-70"
              >
                {formStatus.status === 'loading' ? (
                  <>Processing</>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
              
              {formStatus.message && (
                <div 
                  className={`p-4 rounded-lg ${
                    formStatus.status === 'success'
                      ? 'bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : formStatus.status === 'error'
                      ? 'bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                      : 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                  } animate-fade-in`}
                >
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
