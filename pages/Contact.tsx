import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message. Meno will be in touch shortly.");
    setFormData({ name: '', email: '', date: '', message: '' });
  };

  return (
    <div className="pt-24 md:pt-32 bg-white">
      <div className="container mx-auto px-6 pb-24">
        
        <div className="text-center mb-16">
          <ScrollReveal>
            <h1 className="font-serif text-5xl md:text-6xl mb-6">Let's Connect</h1>
            <p className="text-gray-500 max-w-xl mx-auto font-light">
                I'm currently accepting bookings for the 2024-2025 season. Please fill out the form below or reach out directly.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-6xl mx-auto bg-brand-light p-8 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-16 shadow-2xl shadow-gray-100">
          
          {/* Contact Info */}
          <div className="order-2 md:order-1 space-y-12">
            <ScrollReveal delay={100}>
              <h3 className="font-serif text-2xl mb-6">Contact Details</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="w-5 h-5 text-brand-primary mt-1" />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Email</span>
                    <a href="mailto:hello@menophoto.com" className="text-lg hover:text-brand-primary transition-colors">hello@menophoto.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-brand-primary mt-1" />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Phone</span>
                    <span className="text-lg">+1 (555) 123-4567</span>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-brand-primary mt-1" />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Studio</span>
                    <span className="text-lg leading-relaxed">123 Artist Lofts, Soho<br/>New York, NY 10012</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200} className="pt-12 border-t border-gray-200">
               <h3 className="font-serif text-2xl mb-4">Office Hours</h3>
               <p className="text-gray-500 font-light">
                 Tuesday - Saturday<br/>
                 10:00 AM - 6:00 PM EST
               </p>
            </ScrollReveal>
          </div>

          {/* Form */}
          <div className="order-1 md:order-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <ScrollReveal delay={150}>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="John Doe"
                />
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="john@example.com"
                />
              </ScrollReveal>

              <ScrollReveal delay={250}>
                <label htmlFor="date" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Event Date (Optional)</label>
                <input 
                  type="date" 
                  id="date" 
                  name="date" 
                  value={formData.date} 
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-brand-primary transition-colors"
                />
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Tell me about your vision</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message} 
                  onChange={handleChange}
                  required
                  className="w-full bg-white border border-gray-200 p-4 focus:outline-none focus:border-brand-primary transition-colors"
                  placeholder="Venue, style, vibe..."
                ></textarea>
              </ScrollReveal>

              <ScrollReveal delay={350}>
                <button 
                    type="submit" 
                    className="w-full bg-brand-primary text-white py-4 uppercase tracking-widest text-xs font-semibold hover:opacity-90 transition-all shadow-xl shadow-brand-primary/20"
                >
                    Send Message
                </button>
              </ScrollReveal>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;