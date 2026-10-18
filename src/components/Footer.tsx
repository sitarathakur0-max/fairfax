import React from 'react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#242321] text-[#F5F0E7] border-t border-[#702B3A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#A99C8C]/30">
          
          {/* Column 1: Identity & Description */}
          <div className="md:col-span-5 space-y-4">
            <div>
              <div className="font-serif text-2xl font-bold tracking-tight text-[#F5F0E7]">
                FAIRTAX <span className="font-light text-[#A99C8C]">/</span> SOLUTIONS
              </div>
              <div className="text-[10px] tracking-[0.25em] uppercase font-sans font-semibold text-[#E8D8D8] mt-1">
                TAX PREPARATION & CONSULTANCY
              </div>
            </div>
            <p className="text-sm text-[#F5F0E7]/80 leading-relaxed max-w-md pt-2">
              Assisting individuals and businesses with tax preparation requirements and compliance enquiries in Jhang. Contact the office directly to confirm scope and assistance available.
            </p>
            <div className="pt-2 text-xs text-[#A99C8C] font-mono">
              OFFICE LISTING · JHANG, PUNJAB
            </div>
          </div>

          {/* Column 2: Navigation Index */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8D8D8] border-b border-[#A99C8C]/30 pb-2">
              Page Directory
            </div>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-[#F5F0E7]/80 hover:text-white transition-colors cursor-pointer text-left"
                >
                  01 · Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-[#F5F0E7]/80 hover:text-white transition-colors cursor-pointer text-left"
                >
                  02 · Tax Services & Scope
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="text-[#F5F0E7]/80 hover:text-white transition-colors cursor-pointer text-left"
                >
                  03 · About the Practice
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="text-[#F5F0E7]/80 hover:text-white transition-colors cursor-pointer text-left"
                >
                  04 · Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-[#F5F0E7]/80 hover:text-white transition-colors cursor-pointer text-left"
                >
                  05 · Contact & Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Office Location & Telephone */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E8D8D8] border-b border-[#A99C8C]/30 pb-2">
              Verified Office Details
            </div>
            <div className="space-y-3 text-sm text-[#F5F0E7]/90 leading-relaxed">
              <div>
                <span className="block text-xs uppercase tracking-wider text-[#A99C8C]">Premises</span>
                <span className="font-serif text-base text-white">Office 104, Crown Plaza</span>
                <div className="text-xs text-[#F5F0E7]/70">Nawaz Chowk, Civil Lines</div>
                <div className="text-xs text-[#F5F0E7]/70">Jhang, 35200, Punjab, Pakistan</div>
              </div>
              <div className="pt-1">
                <span className="block text-xs uppercase tracking-wider text-[#A99C8C]">Telephone Enquiries</span>
                <a
                  href="tel:+923010159289"
                  className="inline-block font-mono text-base text-white hover:text-[#E8D8D8] underline decoration-[#702B3A] underline-offset-4"
                >
                  +92 301 0159289
                </a>
              </div>
              <div className="pt-1 text-xs text-[#A99C8C]">
                Official business category: Tax preparation and consultancy
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Informational Disclaimer */}
        <div className="pt-8 space-y-4 text-xs text-[#A99C8C] leading-relaxed">
          <p>
            <strong className="text-[#E8D8D8]">Notice & Scope Confirmation:</strong> Fairtax Solutions is listed as a tax preparation and consultancy business located at Office 104, Crown Plaza, Nawaz Chowk, Civil Lines, Jhang, Punjab, Pakistan. All specific service deliverables, return filings, deadlines, and applicable fees must be confirmed directly with the office based upon your documentation. Information published on this website is for general orientation purposes only and does not constitute formal tax or legal advice.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-[#A99C8C]/20 gap-2">
            <div>
              © {new Date().getFullYear()} Fairtax Solutions. All rights reserved.
            </div>
            <div className="text-[11px] font-mono text-[#A99C8C]">
              OFFICE 104 · CROWN PLAZA · JHANG
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};
