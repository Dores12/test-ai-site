import React from 'react';
import { Check, Plus } from 'lucide-react';
import { PACKAGES, FAQS } from '../constants';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Services: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32">
      
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-20">
        <ScrollReveal>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Investment & Packages</h1>
            <p className="text-gray-500 max-w-xl mx-auto font-light">
            Simple, transparent pricing. No hidden fees, just beautiful photography.
            </p>
        </ScrollReveal>
      </div>

      {/* Pricing Cards */}
      <div className="bg-brand-light py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {PACKAGES.map((pkg, idx) => (
              <ScrollReveal 
                key={idx} 
                delay={idx * 100}
                className={`bg-white p-8 md:p-12 border ${
                  pkg.isPopular ? 'border-brand-primary shadow-xl relative scale-105 z-10' : 'border-transparent shadow-sm'
                } flex flex-col transition-transform`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-brand-primary text-white text-[10px] uppercase tracking-widest px-4 py-1">
                    Most Popular
                  </div>
                )}
                <h3 className="font-serif text-2xl mb-2">{pkg.title}</h3>
                <div className={`text-3xl font-light mb-4 ${pkg.isPopular ? 'text-brand-primary' : 'text-brand-black'}`}>{pkg.price}</div>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed border-b border-gray-100 pb-8">
                  {pkg.description}
                </p>
                
                <ul className="space-y-4 mb-10 flex-grow">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-600">
                      <Check size={16} className="mr-3 mt-0.5 text-brand-primary" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link 
                  to="/contact" 
                  className={`w-full text-center py-3 text-xs uppercase tracking-widest font-semibold transition-colors ${
                    pkg.isPopular 
                      ? 'bg-brand-primary text-white hover:opacity-90 shadow-md shadow-brand-primary/20' 
                      : 'border border-gray-200 hover:border-brand-primary hover:bg-brand-primary hover:text-white'
                  }`}
                >
                  Select Plan
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <h2 className="font-serif text-3xl text-center mb-16">Frequently Asked Questions</h2>
          </ScrollReveal>
          <div className="space-y-6">
             {FAQS.map((faq, idx) => (
               <ScrollReveal key={idx} delay={idx * 50} className="border-b border-gray-100 pb-6">
                 <details className="group">
                   <summary className="flex justify-between items-center cursor-pointer list-none">
                     <span className="font-serif text-xl text-gray-800">{faq.question}</span>
                     <span className="transition group-open:rotate-45">
                       <Plus size={20} className="text-brand-primary" />
                     </span>
                   </summary>
                   <p className="text-gray-500 mt-4 leading-relaxed font-light pl-2">
                     {faq.answer}
                   </p>
                 </details>
               </ScrollReveal>
             ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Services;