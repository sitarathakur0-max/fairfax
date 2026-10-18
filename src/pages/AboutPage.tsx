import React from 'react';
import { PageId } from '../types';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      {/* Page Header */}
      <div className="border-b border-[#A99C8C] pb-6 mb-12">
        <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A] mb-2">
          Business Profile & Practice Standards
        </div>
        <div className="text-sm font-mono text-[#57534E]">
          FAIRTAX SOLUTIONS · CIVIL LINES, JHANG
        </div>
      </div>

      {/* Main Editorial Profile with Burgundy Vertical Rule */}
      <div className="bg-white border border-[#A99C8C] p-8 sm:p-14 lg:p-16 shadow-xs">
        
        {/* Burgundy Vertical Rule Section */}
        <div className="border-l-4 border-[#702B3A] pl-6 sm:pl-10 space-y-6">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A]">
            Practice Statement
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#242321] leading-tight">
            Professional Guidance Starts With the Right Questions.
          </h1>
        </div>

        {/* Short, factual paragraphs */}
        <div className="mt-10 space-y-6 text-base sm:text-lg text-[#242321]/90 leading-relaxed max-w-3xl">
          <p>
            Fairtax Solutions is listed as a tax preparation and consultancy business located in Jhang, Punjab, Pakistan. The firm provides guidance and preparation assistance for individuals, self-employed persons, and commercial operators seeking to navigate their tax obligations.
          </p>

          <p>
            Tax matters depend heavily on documentation, statutory timing, and specific factual situations. Fairtax Solutions approaches every engagement with a commitment to factual clarity: discussing relevant documents directly with prospective clients before establishing filing scopes, fees, and timelines.
          </p>

          <p>
            Rather than relying on generic promises or automated assumptions, the firm encourages clients to ask clear questions regarding their paperwork, compliance status, and the exact scope of services required.
          </p>
        </div>

        {/* Verified Location & Contact Information Block */}
        <div className="mt-12 pt-10 border-t border-[#A99C8C] grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="space-y-2 bg-[#F5F0E7] p-6 border border-[#A99C8C]/50">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#702B3A] block">
              Physical Location
            </span>
            <div className="font-serif text-xl font-bold text-[#242321]">
              Crown Plaza Office
            </div>
            <p className="text-sm text-[#242321]/80 leading-relaxed font-sans pt-1">
              Office 104, Crown Plaza, Nawaz Chowk, Civil Lines, Jhang, 35200, Punjab, Pakistan.
            </p>
          </div>

          <div className="space-y-2 bg-[#F5F0E7] p-6 border border-[#A99C8C]/50">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#702B3A] block">
              Direct Inquiries
            </span>
            <div className="font-serif text-xl font-bold text-[#242321]">
              Telephone Contact
            </div>
            <p className="text-sm text-[#242321]/80 leading-relaxed font-sans pt-1">
              Call <a href="tel:+923010159289" className="font-mono font-semibold text-[#702B3A] underline decoration-[#702B3A]">+92 301 0159289</a> to confirm whether your requirement falls within the practice’s working scope.
            </p>
          </div>

        </div>

        {/* Transparency & Credibility Notice */}
        <div className="mt-10 p-6 bg-[#EBE5DC] border border-[#A99C8C] text-xs text-[#57534E] leading-relaxed">
          <strong className="text-[#242321] block mb-1 uppercase tracking-wider text-[11px]">
            Professional Scope & Factual Transparency
          </strong>
          Fairtax Solutions provides information strictly based upon verified public business listing details. The firm does not make unsubstantiated claims regarding government affiliations, unverified years in business, speculative client numbers, or guaranteed tax refund outcomes. Every tax position is governed by applicable tax laws, individual financial facts, and verified documentation.
        </div>

        {/* Navigation Action */}
        <div className="mt-10 pt-8 border-t border-[#A99C8C]/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => onNavigate('services')}
            className="text-xs font-semibold uppercase tracking-wider text-[#242321] hover:text-[#702B3A] underline decoration-[#A99C8C] cursor-pointer"
          >
            ← View Tax Services
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-[#702B3A] text-[#F5F0E7] text-xs font-semibold uppercase tracking-wider hover:bg-[#551E2B] transition-colors cursor-pointer"
          >
            Make an Enquiry →
          </button>
        </div>

      </div>
    </div>
  );
};
