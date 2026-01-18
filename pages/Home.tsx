import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, X } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';

const Home: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Split Screen Concept: Image right, text left on desktop */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          <div className="bg-brand-light flex items-center justify-center p-12 md:p-24 order-2 md:order-1">
            <ScrollReveal className="max-w-lg">
              <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
                Timeless Moments, <br/>
                <span className="italic text-brand-primary">Artfully</span> Captured.
              </h1>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed font-light">
                Professional wedding and portrait photography for those who value authentic storytelling and elegant aesthetics.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center space-x-2 bg-brand-primary text-white px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:opacity-90 transition-all shadow-xl shadow-brand-primary/20"
              >
                <span>Book Now</span>
                <ArrowRight size={16} />
              </Link>
            </ScrollReveal>
          </div>
          <div className="relative h-full w-full order-1 md:order-2">
            <ScrollReveal className="w-full h-full" delay={200}>
               <img 
                src="https://picsum.photos/seed/hero1/1200/1600" 
                alt="Meno Photography Hero" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-1000"
               />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 bg-white">
        <ScrollReveal>
          <div className="container mx-auto max-w-4xl flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/3">
              <div className="aspect-[3/4] overflow-hidden shadow-xl">
                  <img src="https://picsum.photos/seed/photographer/600/800" alt="Meno" className="object-cover w-full h-full" />
              </div>
            </div>
            <div className="w-full md:w-2/3">
              <h4 className="text-sm font-bold tracking-widest uppercase text-brand-primary mb-4">The Photographer</h4>
              <h2 className="font-serif text-4xl mb-6">Hello, I'm Meno.</h2>
              <p className="text-gray-600 leading-relaxed mb-6 font-light">
                I believe that photography is more than just clicking a shutter; it's about observing the quiet moments that make up our lives. With over a decade of experience, I strive to create images that feel as genuine as the moments they represent.
              </p>
              <Link to="/about" className="text-brand-black border-b border-brand-black pb-1 uppercase text-xs tracking-widest hover:text-brand-primary hover:border-brand-primary transition-colors">
                Read My Story
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Featured Work Grid */}
      <section className="py-24 px-6 bg-brand-light">
        <div className="container mx-auto">
          <ScrollReveal className="flex justify-between items-end mb-12">
            <h2 className="font-serif text-4xl">Curated Work</h2>
            <Link to="/portfolio" className="hidden md:inline-block text-sm uppercase tracking-widest border-b border-gray-400 pb-1 hover:text-brand-primary hover:border-brand-primary transition-colors">View Full Portfolio</Link>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* 6 Selected Photos */}
             {[1, 2, 3, 4, 5, 6].map((i) => (
               <ScrollReveal 
                key={i} 
                delay={i * 100} 
                className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
                onClick={() => setSelectedImage(`https://picsum.photos/seed/feat${i}/800/1000`)}
              >
                 <img 
                    src={`https://picsum.photos/seed/feat${i}/800/1000`} 
                    alt={`Featured ${i}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-serif text-xl tracking-wide border-b border-white pb-1">View Project</span>
                 </div>
               </ScrollReveal>
             ))}
          </div>
           <div className="mt-8 text-center md:hidden">
            <Link to="/portfolio" className="text-sm uppercase tracking-widest border-b border-gray-400 pb-1">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
           <ScrollReveal>
             <h2 className="font-serif text-4xl text-center mb-16">Areas of Expertise</h2>
           </ScrollReveal>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { title: 'Weddings', desc: 'Documenting the beginning of your legacy with grace and emotion.' },
               { title: 'Portraits', desc: 'Capturing your authentic self in a relaxed, natural environment.' },
               { title: 'Events', desc: 'Discreet coverage for galas, parties, and corporate gatherings.' }
             ].map((service, idx) => (
               <ScrollReveal key={idx} delay={idx * 150} className="flex flex-col items-center text-center group">
                 <div className="w-full aspect-[4/3] overflow-hidden mb-6 bg-gray-100 shadow-md">
                    <img src={`https://picsum.photos/seed/serv${idx}/800/600`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt={service.title} />
                 </div>
                 <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                 <p className="text-gray-500 font-light text-sm leading-relaxed max-w-xs">{service.desc}</p>
               </ScrollReveal>
             ))}
           </div>
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="py-24 px-6 bg-brand-black text-white">
        <ScrollReveal className="container mx-auto max-w-4xl text-center">
          <Star className="w-6 h-6 mx-auto mb-8 text-brand-primary" fill="currentColor" />
          <h2 className="font-serif text-3xl md:text-4xl italic mb-12">"Kind Words"</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={t.id} delay={i * 100} className="p-6 border border-gray-800 bg-gray-900/50">
                <p className="font-serif text-lg mb-6 text-gray-300">"{t.quote}"</p>
                <div className="text-xs uppercase tracking-widest text-gray-500">
                  <span className="block text-brand-primary font-bold mb-1">{t.name}</span>
                  {t.role}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 text-center bg-white">
         <ScrollReveal>
            <h2 className="font-serif text-5xl mb-6">Ready to create something beautiful?</h2>
            <p className="text-gray-500 mb-10 max-w-lg mx-auto font-light">My calendar fills up quickly. If you resonate with my work, I'd love to hear from you.</p>
            <Link 
                to="/contact" 
                className="inline-block bg-brand-primary text-white px-10 py-4 uppercase tracking-widest text-xs font-semibold hover:opacity-90 transition-all shadow-xl shadow-brand-primary/20"
            >
                Check Availability
            </Link>
         </ScrollReveal>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-brand-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full screen view" 
            className="max-h-[90vh] max-w-full object-contain shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Home;