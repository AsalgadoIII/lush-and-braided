import React, { useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Menu, Instagram, Facebook, Twitter, ArrowRight } from 'lucide-react';
import AIAdvisor from './components/AIAdvisor';
import Gallery from './components/Gallery';
import Booking from './components/Booking';

export default function App() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen selection:bg-brand-rose selection:text-brand-ink">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 mix-blend-difference text-brand-cream">
        <div className="text-2xl font-serif italic tracking-tighter">Lush & Braided</div>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest font-medium">
            <a href="#gallery" className="hover:text-brand-rose transition-colors">Gallery</a>
            <a href="#ai-advisor" className="hover:text-brand-rose transition-colors">AI Advisor</a>
            <a href="#booking" className="hover:text-brand-rose transition-colors">Booking</a>
          </div>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-ink pt-32 pb-20">
        <motion.div 
          style={{ opacity, scale }}
          className="absolute inset-0 z-0"
        >
          <img 
            src="/Gemini_Generated_Image_9echq09echq09ech.png" 
            alt="Hero Background" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-ink/30 via-transparent to-brand-ink" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-brand-rose font-medium tracking-[0.3em] uppercase text-sm block mb-8"
          >
            Independent Brand • AI Powered
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-[8rem] font-serif italic leading-[0.85] text-brand-cream mb-12 mt-8"
          >
            Elevating <br />
            <span className="text-brand-rose">Beauty</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-center gap-8"
          >
            <a 
              href="#booking" 
              className="group bg-brand-rose text-brand-ink px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 hover:bg-brand-cream transition-all shadow-2xl shadow-brand-rose/20"
            >
              Book Your Session
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-brand-cream/60 max-w-xs text-left text-sm leading-relaxed border-l border-brand-rose/30 pl-6">
              Specializing in intricate knotless designs and luxury hair treatments for the modern woman.
            </p>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-20 right-20 hidden lg:block"
        >
          <div className="glass-card p-6 rounded-3xl rotate-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-rose/20" />
              <div>
                <div className="h-2 w-24 bg-brand-rose/40 rounded mb-2" />
                <div className="h-2 w-16 bg-brand-rose/20 rounded" />
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      {/* Quote Section */}
      <section className="py-32 bg-brand-ink flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="border-r border-brand-cream/20 h-full" />
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif italic text-brand-cream neon-text tracking-tight">
            "If it makes you feel beautiful, do it."
          </h2>
          <div className="mt-8 w-24 h-px bg-brand-rose mx-auto" />
        </motion.div>
      </section>

      <Gallery />
      
      <AIAdvisor />

      <Booking />

      {/* Footer */}
      <footer className="bg-brand-ink text-brand-cream py-24 px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-serif italic mb-8">Lush & Braided</div>
            <p className="text-brand-cream/40 max-w-sm mb-12 text-lg">
              Crafting confidence through artistic expression and innovative hair systems.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-brand-rose transition-colors"><Instagram /></a>
              <a href="#" className="hover:text-brand-rose transition-colors"><Facebook /></a>
              <a href="#" className="hover:text-brand-rose transition-colors"><Twitter /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-8 text-brand-rose">Explore</h4>
            <ul className="space-y-4 text-brand-cream/60">
              <li><a href="#" className="hover:text-brand-cream transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Braid Care</a></li>
              <li><a href="#" className="hover:text-brand-cream transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-widest font-bold mb-8 text-brand-rose">Location</h4>
            <p className="text-brand-cream/60 leading-relaxed">
              123 Beauty Lane<br />
              Suite 400<br />
              Los Angeles, CA 90210
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-brand-cream/20">
          <p>© 2026 Lush & Braided. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
