import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-brand-white text-brand-black">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm border-gray-200 py-3' : 'bg-transparent border-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-serif tracking-widest font-semibold uppercase group">
            Meno<span className="text-brand-primary text-xl group-hover:text-brand-primary/80 transition-colors">.</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm tracking-widest uppercase hover:text-brand-primary transition-colors ${
                    isActive ? 'font-semibold border-b border-brand-primary text-brand-primary' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 hover:text-brand-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col space-y-4 md:hidden transition-all duration-300 origin-top transform ${
            isMobileMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'
          }`}
        >
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `text-lg font-serif ${isActive ? 'text-brand-primary' : 'text-brand-black'}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-brand-black text-white py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-serif tracking-widest uppercase">Meno<span className="text-brand-primary">.</span></h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Capturing life's most fleeting moments with elegance and timeless style. Based in New York, available worldwide.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-serif text-gray-200">Menu</h4>
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.path} to={item.path} className="text-gray-400 hover:text-brand-primary transition-colors text-sm uppercase tracking-wide">
                {item.label}
              </NavLink>
            ))}
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-serif text-gray-200">Connect</h4>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-brand-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-brand-primary transition-colors"><Twitter size={20} /></a>
            </div>
            <p className="text-gray-400 text-sm mt-4">hello@menophoto.com</p>
            <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-gray-800 text-center text-gray-600 text-xs uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Meno Photography. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;