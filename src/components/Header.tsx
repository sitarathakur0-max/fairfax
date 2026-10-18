import React, { useState } from 'react';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About' },
    { id: 'faqs', label: 'FAQs' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F5F0E7] border-b border-[#A99C8C] shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Wordmark & Descriptor */}
          <div className="flex flex-col justify-center shrink-0">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left group cursor-pointer focus:outline-none"
              aria-label="Fairtax Solutions Home"
            >
              <div className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#242321] group-hover:text-[#702B3A] transition-colors leading-none">
                FAIRTAX <span className="font-normal text-[#A99C8C]">/</span> SOLUTIONS
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase font-sans font-semibold text-[#702B3A] mt-1">
                TAX CONSULTANCY
              </div>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-sm font-medium tracking-wide transition-colors py-1 relative cursor-pointer ${
                    isActive
                      ? 'text-[#702B3A] font-semibold border-b-2 border-[#702B3A]'
                      : 'text-[#242321] hover:text-[#702B3A]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Desktop Primary Action */}
          <div className="hidden md:flex items-center space-x-4 shrink-0">
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F0E7] bg-[#702B3A] hover:bg-[#551E2B] transition-colors border border-[#702B3A] cursor-pointer"
            >
              Make an Enquiry
            </button>
          </div>

          {/* Mobile Menu Toggle Button (Text-based, strictly NO SVGs or image assets) */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#242321] border border-[#A99C8C] hover:border-[#702B3A] hover:text-[#702B3A] transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? '[ Close ]' : '[ Menu ]'}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F0E7] border-b border-[#A99C8C] px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => {
            const isActive = currentPage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left py-2.5 px-3 text-sm font-medium transition-colors border-l-2 ${
                  isActive
                    ? 'border-[#702B3A] text-[#702B3A] bg-[#E8D8D8]/40 font-semibold'
                    : 'border-transparent text-[#242321] hover:text-[#702B3A] hover:bg-[#EBE5DC]/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full text-center py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F0E7] bg-[#702B3A] hover:bg-[#551E2B] transition-colors"
            >
              Make an Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
