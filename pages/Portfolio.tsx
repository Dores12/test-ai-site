import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PORTFOLIO_ITEMS } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import { X } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'wedding' | 'portrait' | 'event'>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems = filter === 'all' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === filter);

  return (
    <div className="pt-24 md:pt-32">
      {/* Header */}
      <div className="container mx-auto px-6 mb-16 text-center">
        <ScrollReveal>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Stories I Captured</h1>
            <p className="text-gray-500 max-w-xl mx-auto font-light mb-12">
            A collection of love, light, and authentic moments from around the world.
            </p>

            {/* Filters */}
            <div className="flex justify-center flex-wrap gap-4 md:gap-8">
            {['all', 'wedding', 'portrait', 'event'].map((cat) => (
                <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`text-xs uppercase tracking-widest pb-1 transition-all ${
                    filter === cat 
                    ? 'border-b border-brand-primary text-brand-primary font-semibold' 
                    : 'text-gray-400 hover:text-brand-primary border-transparent border-b hover:border-gray-300'
                }`}
                >
                {cat}s
                </button>
            ))}
            </div>
        </ScrollReveal>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <ScrollReveal 
              key={item.id} 
              delay={(index % 3) * 100} 
              className="group relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-pointer shadow-md"
              onClick={() => setSelectedImage(item.imageUrl)}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
                 <span className="text-xs uppercase tracking-widest text-white/80 mb-2">{item.category}</span>
                 <h3 className="font-serif text-2xl text-white">{item.title}</h3>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20 text-gray-400 font-serif text-xl">
            No projects found in this category.
          </div>
        )}
      </div>

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

      {/* CTA Section */}
      <section className="bg-brand-light py-24 px-6 text-center">
        <ScrollReveal>
            <h2 className="font-serif text-3xl mb-4">Love these photos?</h2>
            <p className="text-gray-600 mb-8">Let's discuss how we can create something similar for you.</p>
            <Link 
            to="/contact" 
            className="inline-block border border-brand-black px-8 py-3 uppercase tracking-widest text-xs font-semibold hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-colors"
            >
            Let's Talk
            </Link>
        </ScrollReveal>
      </section>
    </div>
  );
};

export default Portfolio;