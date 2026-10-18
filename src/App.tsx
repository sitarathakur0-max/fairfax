import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { FaqsPage } from './pages/FaqsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // Determine initial page from current pathname
  const getPageFromPath = (path: string): PageId => {
    const clean = path.replace(/\/$/, '').toLowerCase();
    if (clean === '/services') return 'services';
    if (clean === '/about') return 'about';
    if (clean === '/faqs') return 'faqs';
    if (clean === '/contact') return 'contact';
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(() => {
    if (typeof window !== 'undefined') {
      return getPageFromPath(window.location.pathname);
    }
    return 'home';
  });

  // Keep browser history and document title in sync
  const pageMeta: Record<PageId, { title: string; desc: string; path: string }> = {
    home: {
      title: 'Fairtax Solutions – Tax Preparation & Consultancy in Jhang',
      desc: 'Professional tax preparation and consultancy services in Jhang, Punjab, Pakistan. Office 104, Crown Plaza, Nawaz Chowk, Civil Lines.',
      path: '/',
    },
    services: {
      title: 'Tax Services & Engagement Scope – Fairtax Solutions Jhang',
      desc: 'Tax preparation assistance, compliance enquiries, and consultative scope at Fairtax Solutions in Jhang, Punjab.',
      path: '/services',
    },
    about: {
      title: 'About the Practice – Fairtax Solutions, Jhang, Punjab',
      desc: 'Fairtax Solutions is listed as a tax preparation and consultancy business at Crown Plaza, Civil Lines, Jhang, Pakistan.',
      path: '/about',
    },
    faqs: {
      title: 'Tax FAQs & Enquiries – Fairtax Solutions Jhang',
      desc: 'Frequently asked questions regarding tax preparation, documents, fees, and consultation with Fairtax Solutions.',
      path: '/faqs',
    },
    contact: {
      title: 'Contact & Consultation – Fairtax Solutions Jhang',
      desc: 'Contact Fairtax Solutions at Office 104, Crown Plaza, Nawaz Chowk, Civil Lines, Jhang. Call +92 301 0159289.',
      path: '/contact',
    },
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    const meta = pageMeta[page];
    if (meta) {
      document.title = meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', meta.desc);
      }
      if (window.location.pathname !== meta.path) {
        window.history.pushState({ page }, '', meta.path);
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back and forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const page = getPageFromPath(window.location.pathname);
      setCurrentPage(page);
      const meta = pageMeta[page];
      if (meta) {
        document.title = meta.title;
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F0E7] text-[#242321] selection:bg-[#702B3A] selection:text-[#F5F0E7]">
      
      {/* Skip link for keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 px-4 py-2 bg-[#702B3A] text-white text-xs uppercase font-bold tracking-wider"
      >
        Skip to main content
      </a>

      {/* Editorial Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
        {currentPage === 'about' && <AboutPage onNavigate={handleNavigate} />}
        {currentPage === 'faqs' && <FaqsPage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Editorial Footer */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
