import { useState } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Mail, Send, Linkedin, Github, InstagramIcon } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent! I\'ll get back to you within 48 hours.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section 
      ref={sectionRef}
      id="contact" 
      className="relative w-full py-20 bg-[#070B14] overflow-hidden"
    >
      <div className="w-full max-w-[1100px] mx-auto px-6 lg:px-12">
        {/* Contact Info Card */}
        <div 
          className={`glass-card rounded-[28px] p-8 md:p-12 mb-6 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
          }`}
          style={{
            transform: isVisible 
              ? 'perspective(1000px) rotateX(4deg) rotateY(-6deg)' 
              : 'perspective(1000px) rotateX(10deg) rotateY(-12deg) translateY(60px)',
            transformStyle: 'preserve-3d',
            transitionDelay: '0.1s',
          }}
        >
          <div className="text-center max-w-2xl mx-auto" style={{ transform: 'translateZ(30px)' }}>
            <h2 
              className={`text-[clamp(32px,4vw,52px)] font-bold text-white leading-tight mb-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.2s' }}
            >
              Let's build something<br />
              <span className="text-[#4F6DFF]">great.</span>
            </h2>
            
            <p 
              className={`text-[#A7B1C6] text-lg mb-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.3s' }}
            >
              Tell me what you're looking for. I'll reply within 48 hours.
            </p>

            {/* Email */}
            <a 
              href="mailto:hello@alexchen.dev"
              className={`inline-flex items-center gap-3 text-[#4F6DFF] font-medium text-lg hover:underline transition-all duration-700 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ transitionDelay: '0.4s' }}
              data-cursor-hover
            >
              <Mail className="w-5 h-5" />
              dushyantvasisht@gmail.com
            </a>

            {/* Social Links */}
            <div 
              className={`flex items-center justify-center gap-4 mt-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: '0.5s' }}
            >
              <SocialLink href="https://github.com/Dushyant-2004" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="#" icon={<InstagramIcon className="w-5 h-5" />} label="Instagram" />
            </div>
          </div>
        </div>

        {/* Form Card */}
        <div 
          className={`glass-card rounded-[28px] p-8 md:p-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
          style={{
            transform: isVisible 
              ? 'perspective(1000px) rotateX(4deg) rotateY(-6deg)' 
              : 'perspective(1000px) rotateX(12deg) rotateY(-12deg) translateY(80px)',
            transformStyle: 'preserve-3d',
            transitionDelay: '0.2s',
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6" style={{ transform: 'translateZ(20px)' }}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#A7B1C6] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#A7B1C6] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#A7B1C6] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="form-input resize-none"
                placeholder="What Can I Help You With?"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              data-cursor-hover
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Sending...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-[rgba(242,245,250,0.08)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-[#A7B1C6] text-sm">
              Dushyant Vasisht Portfolio . All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-[#A7B1C6]">
              <a href="#" className="hover:text-white transition-colors" data-cursor-hover>Privacy</a>
              <a href="#" className="hover:text-white transition-colors" data-cursor-hover>Terms</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Background Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at bottom center, rgba(79, 109, 255, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
    </section>
  );
}

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="w-12 h-12 rounded-full bg-[rgba(242,245,250,0.05)] border border-[rgba(242,245,250,0.1)] flex items-center justify-center text-[#A7B1C6] hover:text-white hover:bg-[rgba(79,109,255,0.1)] hover:border-[rgba(79,109,255,0.3)] transition-all duration-300"
      aria-label={label}
      data-cursor-hover
    >
      {icon}
    </a>
  );
}
