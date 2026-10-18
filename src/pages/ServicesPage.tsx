import React from 'react';
import { PageId } from '../types';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      {/* Page Header */}
      <div className="border-b border-[#A99C8C] pb-8 mb-12">
        <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A] mb-2">
          Directory & Scope
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#242321] tracking-tight">
          Tax Services & Engagement Scope
        </h1>
        <p className="text-base sm:text-lg text-[#242321]/80 max-w-3xl mt-4 leading-relaxed">
          Fairtax Solutions provides tax preparation and consultancy assistance in Jhang. All specific return types, documentation requirements, and engagement terms are confirmed directly with the business.
        </p>
      </div>

      {/* Two-Column Asymmetrical Composition: Left Section Index & Right Reading Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Sticky Section Index */}
        <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-8 bg-white border border-[#A99C8C] p-6 sm:p-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#702B3A] block mb-2">
              Index of Matters
            </span>
            <div className="font-serif text-lg font-bold text-[#242321] border-b border-[#702B3A] pb-3">
              Practice Sections
            </div>
          </div>

          <nav className="space-y-4 text-xs font-sans" aria-label="Services Page Navigation">
            <a
              href="#service-01"
              className="block group py-1 border-b border-[#A99C8C]/20 hover:border-[#702B3A]"
            >
              <span className="text-[#702B3A] font-mono mr-2">01.</span>
              <span className="font-semibold text-[#242321] group-hover:text-[#702B3A] transition-colors">
                Tax Preparation Assistance
              </span>
            </a>
            <a
              href="#service-02"
              className="block group py-1 border-b border-[#A99C8C]/20 hover:border-[#702B3A]"
            >
              <span className="text-[#702B3A] font-mono mr-2">02.</span>
              <span className="font-semibold text-[#242321] group-hover:text-[#702B3A] transition-colors">
                Tax Compliance Enquiries
              </span>
            </a>
            <a
              href="#service-03"
              className="block group py-1 border-b border-[#A99C8C]/20 hover:border-[#702B3A]"
            >
              <span className="text-[#702B3A] font-mono mr-2">03.</span>
              <span className="font-semibold text-[#242321] group-hover:text-[#702B3A] transition-colors">
                Tax Consultancy & Orientation
              </span>
            </a>
            <a
              href="#checklist"
              className="block group py-1 border-b border-[#A99C8C]/20 hover:border-[#702B3A]"
            >
              <span className="text-[#702B3A] font-mono mr-2">04.</span>
              <span className="font-semibold text-[#242321] group-hover:text-[#702B3A] transition-colors">
                Before Your Enquiry (Checklist)
              </span>
            </a>
          </nav>

          <div className="pt-4 border-t border-[#A99C8C]/30 text-xs text-[#57534E] space-y-3">
            <p className="leading-relaxed">
              <strong>Confirmation Policy:</strong> Only tax preparation and consultancy are part of the verified public listing. Any other service categories remain subject to direct confirmation.
            </p>
            <div className="pt-2">
              <a
                href="tel:+923010159289"
                className="block text-center py-2.5 px-4 bg-[#702B3A] text-[#F5F0E7] text-[11px] uppercase tracking-wider font-semibold hover:bg-[#551E2B] transition-colors"
              >
                Call Office: +92 301 0159289
              </a>
            </div>
          </div>
        </aside>

        {/* Right Large Reading Column */}
        <main className="lg:col-span-8 space-y-16">
          
          {/* Service 01: Tax Preparation */}
          <section id="service-01" className="bg-white border border-[#A99C8C] p-8 sm:p-12 space-y-6">
            <div className="flex items-center justify-between border-b border-[#A99C8C]/40 pb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A]">
                Service Category 01
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 bg-[#EBE5DC] text-[#242321] border border-[#A99C8C]">
                Verified Business Listing
              </span>
            </div>

            <h2 className="font-serif text-3xl font-bold text-[#242321]">
              Tax Preparation
            </h2>

            <div className="space-y-4 text-[#242321]/90 leading-relaxed text-base">
              <p>
                Clients may enquire regarding professional tax preparation assistance for their personal or commercial requirements in Jhang. Because tax preparation parameters vary depending on the nature of income, enterprise structure, and relevant reporting rules, the firm undertakes work only after a factual preliminary discussion.
              </p>
              <p>
                Prospective clients should confirm the following details directly with Fairtax Solutions prior to engagement:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-[#242321]/80">
                <li>The specific return type or declaration required for your category</li>
                <li>Your eligibility and required supporting financial paperwork</li>
                <li>Applicable professional fee quotations based on case complexity</li>
                <li>Filing schedules, responsibilities, and procedural steps</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-[#A99C8C]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#57534E]">
                Need tax preparation guidance?
              </span>
              <button
                onClick={() => onNavigate('contact')}
                className="text-xs font-semibold uppercase tracking-wider text-[#702B3A] hover:text-[#551E2B] underline decoration-[#702B3A] cursor-pointer text-left sm:text-right"
              >
                Enquire About Tax Preparation →
              </button>
            </div>
          </section>

          {/* Service 02: Tax Compliance Enquiries */}
          <section id="service-02" className="bg-white border border-[#A99C8C] p-8 sm:p-12 space-y-6">
            <div className="flex items-center justify-between border-b border-[#A99C8C]/40 pb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A]">
                Service Category 02
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 bg-[#F5F0E7] text-[#57534E] border border-[#A99C8C]">
                Subject to Direct Confirmation
              </span>
            </div>

            <h2 className="font-serif text-3xl font-bold text-[#242321]">
              Tax Compliance Enquiries
            </h2>

            <div className="space-y-4 text-[#242321]/90 leading-relaxed text-base">
              <p>
                Tax obligations frequently involve ongoing compliance questions, such as registration confirmations, documentation retention standards, and verification of periodic submission obligations.
              </p>
              <p>
                Customers can discuss their compliance-related questions to establish whether Fairtax Solutions can assist with their particular circumstances.
              </p>
              
              <div className="p-4 bg-[#F5F0E7] border border-[#A99C8C]/50 text-xs text-[#57534E] leading-relaxed">
                <strong className="text-[#242321] block mb-1">Scope & Verification Boundary:</strong>
                Fairtax Solutions does not claim specialized representation before specific tax authorities, litigation courts, formal audits, or legal tribunal appeals unless verified in direct individual engagement. Initial consultations are meant to confirm whether your compliance enquiry falls within standard consultative scope.
              </div>
            </div>

            <div className="pt-4 border-t border-[#A99C8C]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#57534E]">
                Have a compliance question?
              </span>
              <button
                onClick={() => onNavigate('contact')}
                className="text-xs font-semibold uppercase tracking-wider text-[#702B3A] hover:text-[#551E2B] underline decoration-[#702B3A] cursor-pointer text-left sm:text-right"
              >
                Discuss Compliance Requirements →
              </button>
            </div>
          </section>

          {/* Service 03: Tax Consultancy */}
          <section id="service-03" className="bg-white border border-[#A99C8C] p-8 sm:p-12 space-y-6">
            <div className="flex items-center justify-between border-b border-[#A99C8C]/40 pb-4">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A]">
                Service Category 03
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 bg-[#EBE5DC] text-[#242321] border border-[#A99C8C]">
                Verified Business Listing
              </span>
            </div>

            <h2 className="font-serif text-3xl font-bold text-[#242321]">
              Tax Consultancy
            </h2>

            <div className="space-y-4 text-[#242321]/90 leading-relaxed text-base">
              <p>
                Tax consultancy allows clients to review their situational requirements with a professional, clarify general procedural expectations, and identify which records must be assembled.
              </p>
              <p>
                Customers can describe their individual or business circumstances and ask about the consultancy options available. Because every taxpayer’s position is unique, individual tax advice is never offered in broad website summaries; substantive guidance requires direct review of your verified figures and records.
              </p>
            </div>

            <div className="pt-4 border-t border-[#A99C8C]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-[#57534E]">
                Schedule a consultative enquiry:
              </span>
              <button
                onClick={() => onNavigate('contact')}
                className="text-xs font-semibold uppercase tracking-wider text-[#702B3A] hover:text-[#551E2B] underline decoration-[#702B3A] cursor-pointer text-left sm:text-right"
              >
                Request Consultancy Discussion →
              </button>
            </div>
          </section>

          {/* Practical Checklist: Before Your Enquiry */}
          <section id="checklist" className="bg-[#E8D8D8]/40 border-2 border-[#702B3A] p-8 sm:p-12 space-y-6">
            <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A]">
              Essential Preparation
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#242321]">
              Before Your Enquiry: Practical Checklist
            </h2>
            <p className="text-sm text-[#242321]/80 leading-relaxed">
              To ensure a productive discussion and safeguard your personal information, please review these practical recommendations before contacting the office:
            </p>

            <ol className="space-y-4 text-sm text-[#242321]">
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-[#702B3A]">01.</span>
                <span><strong>Identify the type of tax assistance required:</strong> Determine whether you require annual return preparation, a routine compliance question, or an initial general consultation.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-[#702B3A]">02.</span>
                <span><strong>Gather relevant documents before the consultation:</strong> Collect salary certificates, bank tax deductions, invoices, or prior return records so they can be referenced accurately.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-[#702B3A]">03.</span>
                <span><strong>Ask about applicable fees and scope of work:</strong> Transparent professional fees depend on complexity and should be confirmed explicitly before work begins.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-[#702B3A]">04.</span>
                <span><strong>Confirm deadlines and filing responsibilities directly:</strong> Ensure that statutory submission windows and respective duties are verified directly with the advisor.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="font-mono font-bold text-[#702B3A]">05.</span>
                <span><strong>Avoid sending sensitive documents through an unsecured form:</strong> Never transmit identity numbers, passkeys, confidential bank statements, or portal passwords through web contact forms. Present documentation only during direct consultations.</span>
              </li>
            </ol>

            <div className="pt-6 border-t border-[#702B3A]/30">
              <a
                href="tel:+923010159289"
                className="inline-block px-6 py-3 bg-[#702B3A] text-[#F5F0E7] text-xs font-semibold uppercase tracking-wider hover:bg-[#551E2B] transition-colors"
              >
                Call Office 104: +92 301 0159289
              </a>
            </div>
          </section>

        </main>

      </div>
    </div>
  );
};
