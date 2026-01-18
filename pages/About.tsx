import React from 'react';
import ScrollReveal from '../components/ScrollReveal';

const About: React.FC = () => {
  return (
    <div className="pt-24 md:pt-32">
      
      {/* Hero / Split Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="w-full md:w-1/2">
             <ScrollReveal className="relative">
                <img 
                  src="https://picsum.photos/seed/about/900/1200" 
                  alt="Meno Portrait" 
                  className="w-full grayscale shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-light z-[-1]"></div>
             </ScrollReveal>
          </div>
          <div className="w-full md:w-1/2 md:pt-12">
            <ScrollReveal>
                <h4 className="text-xs font-bold tracking-widest uppercase text-brand-primary mb-6">About Me</h4>
                <h1 className="font-serif text-5xl mb-8 leading-tight">I chase light and <br/>emotion.</h1>
                <div className="space-y-6 text-gray-600 font-light leading-relaxed">
                <p>
                    My journey into photography started not with a camera, but with a love for storytelling. I realized early on that some of the most profound stories are told without words.
                </p>
                <p>
                    Based in New York City but at home wherever there is love to be captured, I bring a calm, observant presence to your special days. My approach is non-intrusive, focusing on candid moments rather than forced poses.
                </p>
                <p>
                    When I'm not behind the lens, you can find me exploring local art galleries, brewing the perfect pour-over coffee, or hiking in the Hudson Valley.
                </p>
                </div>
                
                <div className="mt-12 pt-12 border-t border-gray-100 grid grid-cols-2 gap-8">
                <div>
                    <span className="block text-3xl font-serif mb-2 text-brand-primary">12+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">Years Experience</span>
                </div>
                <div>
                    <span className="block text-3xl font-serif mb-2 text-brand-primary">300+</span>
                    <span className="text-xs uppercase tracking-widest text-gray-400">Weddings Shot</span>
                </div>
                </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-brand-light py-24 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
             <h2 className="font-serif text-4xl text-center mb-16">The Process</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connecting Line (Desktop) */}
             <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gray-300 z-0"></div>

             {[
               { step: '01', title: 'Consultation', desc: 'We meet over coffee or Zoom to discuss your vision, timeline, and ensure we are a perfect fit.' },
               { step: '02', title: 'The Shoot', desc: 'I guide you through the session with ease, or document your event unobtrusively.' },
               { step: '03', title: 'Delivery', desc: 'Your hand-edited, high-resolution gallery is delivered within 4-6 weeks.' }
             ].map((item, idx) => (
               <ScrollReveal key={idx} delay={idx * 150} className="relative z-10 bg-brand-light">
                 <div className="w-24 h-24 bg-white border border-brand-primary/30 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-serif shadow-sm">
                   {item.step}
                 </div>
                 <div className="text-center px-4">
                   <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                   <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                 </div>
               </ScrollReveal>
             ))}
          </div>
        </div>
      </section>

      {/* Logo Cloud */}
      <section className="py-20 px-6 bg-white text-center">
        <ScrollReveal>
            <h4 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-12">As Seen In</h4>
            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Vogue', 'Brides', 'The Knot', 'Style Me Pretty'].map((brand) => (
                <span key={brand} className="font-serif text-2xl md:text-3xl text-gray-800 hover:text-brand-primary transition-colors cursor-default">{brand}</span>
            ))}
            </div>
        </ScrollReveal>
      </section>

    </div>
  );
};

export default About;