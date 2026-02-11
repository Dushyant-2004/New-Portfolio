import { useEffect } from 'react';
import { Toaster } from 'sonner';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Capabilities } from '@/sections/Capabilities';
import { Process } from '@/sections/Process';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';
import { useCustomCursor } from '@/hooks/useCustomCursor';

function App() {
  // Initialize custom cursor
  useCustomCursor();

  useEffect(() => {
    // Preload images for smoother experience
    const images = [
      '/about_photo.jpg',
      '/project_01.jpg',
      '/project_02.jpg',
      '/project_03.jpg',
      '/avatar_mina.jpg',
    ];

    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#070B14]">
      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Toast notifications */}
      <Toaster 
        position="top-center"
        toastOptions={{
          style: {
            background: 'rgba(11, 18, 34, 0.95)',
            border: '1px solid rgba(79, 109, 255, 0.2)',
            color: '#F2F5FA',
          },
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Capabilities />
        <Process />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;
