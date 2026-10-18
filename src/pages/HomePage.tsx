import React from 'react';
import { PageId } from '../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-24 pb-20">
      
      {/* SECTION A: Hero — Editorial Split Layout */}
      <section className="pt-12 sm:pt-16 lg:pt-20 border-b border-[#A99C8C] pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Headline & Supporting Actions */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-block text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A] border-b border-[#702B3A] pb-1">
                Consultancy & Preparation · Jhang, Punjab
              </div>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#242321] leading-[1.1] text-balance">
                Tax Matters Deserve Clarity.
              </h1>

              <p className="text-lg sm:text-xl text-[#242321]/80 leading-relaxed font-normal max-w-2xl">
                Get in touch with Fairtax Solutions in Jhang to discuss your tax-related requirements and confirm the assistance available for your situation.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href="tel:+923010159289"
                  className="inline-flex justify-center items-center px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#F5F0E7] bg-[#702B3A] hover:bg-[#551E2B] transition-colors border border-[#702B3A] shadow-xs text-center"
                >
                  Discuss Your Requirements
                </a>
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex justify-center items-center px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#242321] bg-transparent hover:bg-[#E8D8D8]/50 transition-colors border border-[#A99C8C] hover:border-[#702B3A] text-center cursor-pointer"
                >
                  Explore Tax Services →
                </button>
              </div>

              <div className="pt-6 border-t border-[#A99C8C]/40 text-xs text-[#57534E] flex flex-wrap gap-x-6 gap-y-2">
                <span>Verified Business Listing</span>
                <span className="text-[#A99C8C]">/</span>
                <span>Crown Plaza, Civil Lines</span>
                <span className="text-[#A99C8C]">/</span>
                <span>Direct Telephonic Consultation</span>
              </div>
            </div>

            {/* Right Column: Typographic Information Panel */}
            <div className="lg:col-span-5 bg-white border border-[#A99C8C] p-8 sm:p-10 shadow-xs relative">
              <div className="flex justify-between items-baseline pb-4 border-b border-[#702B3A]">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A]">
                  Dispatch Note
                </span>
                <span className="font-serif text-4xl font-bold text-[#702B3A] tabular-nums">
                  01
                </span>
              </div>

              <div className="pt-6 space-y-5 text-sm text-[#242321] leading-relaxed">
                <p className="font-serif text-lg italic text-[#242321]">
                  “Every tax assessment begins with your specific documents and documented circumstances.”
                </p>

                <div className="h-px bg-[#702B3A]/30 w-full" />

                <div className="space-y-3 font-sans text-xs text-[#57534E]">
                  <div>
                    <span className="font-semibold uppercase tracking-wider text-[#242321] block">
                      Physical Practice
                    </span>
                    Office 104, Crown Plaza, Nawaz Chowk, Civil Lines, Jhang, 35200, Punjab, Pakistan.
                  </div>
                  <div>
                    <span className="font-semibold uppercase tracking-wider text-[#242321] block">
                      Listing Focus
                    </span>
                    Tax preparation and consultancy. Specific return types, compliance steps, and fees are established during consultation.
                  </div>
                </div>

                <div className="pt-4 border-t border-[#A99C8C]/30 flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-[#702B3A] font-semibold">
                    Direct Enquiries
                  </span>
                  <a
                    href="tel:+923010159289"
                    className="font-mono text-sm font-semibold text-[#242321] hover:text-[#702B3A] underline decoration-[#702B3A]"
                  >
                    +92 301 0159289
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION B: Introductory Statement */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t-2 border-b-2 border-[#702B3A] py-12 sm:py-16 px-6 sm:px-12 bg-white/60">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A] mb-3">
            Orientation & Principles
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242321] mb-6 leading-tight">
            Clear Information. A Better Starting Point.
          </h2>
          <div className="space-y-5 text-base sm:text-lg text-[#242321]/90 leading-relaxed max-w-3xl">
            <p>
              Tax-related matters can involve complex documentation, statutory deadlines, and questions that depend strictly upon individual circumstances. Navigating tax responsibilities is rarely one-size-fits-all; understanding what applies to your personal or commercial profile requires clarity before taking action.
            </p>
            <p>
              Fairtax Solutions operates in Jhang to provide a direct point of contact for tax preparation and consultancy enquiries. Rather than relying on generic assumptions, prospective clients are encouraged to discuss their specific records, questions, and timelines directly with the office to establish exactly what assistance is appropriate.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION C: Services Overview — Vertically Numbered Editorial List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#A99C8C] pb-6 mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A]">
              Service Index
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242321] mt-1">
              Core Practice Areas
            </h2>
          </div>
          <div className="text-xs text-[#57534E] max-w-xs font-sans">
            Listed service areas are subject to direct confirmation based on individual requirements and documentation.
          </div>
        </div>

        <div className="divide-y divide-[#A99C8C] border-t border-b border-[#A99C8C] bg-white">
          
          {/* Service 01 */}
          <article className="p-8 sm:p-12 transition-colors hover:bg-[#F5F0E7]/40">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#702B3A] tabular-nums">
                  01
                </span>
              </div>
              <div className="md:col-span-6 space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#702B3A]">
                  Publicly Listed Business Service
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242321]">
                  Tax Preparation
                </h3>
                <p className="text-sm sm:text-base text-[#242321]/80 leading-relaxed">
                  Enquire about tax preparation assistance for your circumstances. Specific return types, documentation requirements, applicable fees, and filing arrangements are determined directly upon reviewing your particulars.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right pt-2 md:pt-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-block text-xs font-semibold uppercase tracking-wider text-[#702B3A] hover:text-[#551E2B] underline decoration-[#702B3A] underline-offset-4 cursor-pointer"
                >
                  View Preparation Details →
                </button>
              </div>
            </div>
          </article>

          {/* Service 02 */}
          <article className="p-8 sm:p-12 transition-colors hover:bg-[#F5F0E7]/40">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#702B3A] tabular-nums">
                  02
                </span>
              </div>
              <div className="md:col-span-6 space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#57534E]">
                  Enquiry & Assessment Service
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242321]">
                  Tax Compliance Enquiries
                </h3>
                <p className="text-sm sm:text-base text-[#242321]/80 leading-relaxed">
                  Discuss routine compliance-related queries to establish whether the office can assist with your particular filing status, documentation standing, or reporting questions. Scope is subject to direct case-by-case confirmation.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right pt-2 md:pt-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-block text-xs font-semibold uppercase tracking-wider text-[#702B3A] hover:text-[#551E2B] underline decoration-[#702B3A] underline-offset-4 cursor-pointer"
                >
                  View Compliance Scope →
                </button>
              </div>
            </div>
          </article>

          {/* Service 03 */}
          <article className="p-8 sm:p-12 transition-colors hover:bg-[#F5F0E7]/40">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              <div className="md:col-span-2">
                <span className="font-serif text-4xl sm:text-5xl font-light text-[#702B3A] tabular-nums">
                  03
                </span>
              </div>
              <div className="md:col-span-6 space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#702B3A]">
                  Publicly Listed Business Service
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#242321]">
                  Tax Consultancy
                </h3>
                <p className="text-sm sm:text-base text-[#242321]/80 leading-relaxed">
                  Describe your tax circumstances and explore the consultancy options available. Consultations clarify information requirements and procedural steps, avoiding speculative or generic website advice.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right pt-2 md:pt-4">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-block text-xs font-semibold uppercase tracking-wider text-[#702B3A] hover:text-[#551E2B] underline decoration-[#702B3A] underline-offset-4 cursor-pointer"
                >
                  View Consultancy Details →
                </button>
              </div>
            </div>
          </article>

        </div>
      </section>

      {/* SECTION D: How to Get Started — Horizontal 3-Step Sequence */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#E8D8D8]/30 border border-[#A99C8C] p-8 sm:p-12 lg:p-16">
          <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A] mb-2">
            Engagement Sequence
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242321] mb-4">
            How to Get Started
          </h2>
          <p className="text-sm text-[#57534E] max-w-2xl mb-12">
            Suggested consultative steps for prospective clients looking to confirm assistance for their tax requirements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            
            {/* Step 01 */}
            <div className="border-t-2 border-[#702B3A] pt-6 space-y-3 bg-[#F5F0E7] p-6 border border-[#A99C8C]/50">
              <span className="font-serif text-3xl font-bold text-[#702B3A] tabular-nums block">
                01.
              </span>
              <h3 className="font-serif text-xl font-bold text-[#242321]">
                Describe your requirements
              </h3>
              <p className="text-sm text-[#242321]/80 leading-relaxed">
                Contact the office by phone or submit an introductory enquiry detailing the broad category of tax assistance you require.
              </p>
            </div>

            {/* Step 02 */}
            <div className="border-t-2 border-[#702B3A] pt-6 space-y-3 bg-[#F5F0E7] p-6 border border-[#A99C8C]/50">
              <span className="font-serif text-3xl font-bold text-[#702B3A] tabular-nums block">
                02.
              </span>
              <h3 className="font-serif text-xl font-bold text-[#242321]">
                Discuss documentation & assistance
              </h3>
              <p className="text-sm text-[#242321]/80 leading-relaxed">
                Review which records, statements, or notices are applicable to your situation to confirm whether the practice can assist.
              </p>
            </div>

            {/* Step 03 */}
            <div className="border-t-2 border-[#702B3A] pt-6 space-y-3 bg-[#F5F0E7] p-6 border border-[#A99C8C]/50">
              <span className="font-serif text-3xl font-bold text-[#702B3A] tabular-nums block">
                03.
              </span>
              <h3 className="font-serif text-xl font-bold text-[#242321]">
                Confirm scope, fees & next steps
              </h3>
              <p className="text-sm text-[#242321]/80 leading-relaxed">
                Agree upon the exact professional scope, transparent quotation, and timelines directly with the business prior to commencement.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION E: Who May Enquire */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A] mb-2">
              Eligibility & Scope
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#242321]">
              Who May Enquire
            </h2>
            <p className="text-sm text-[#57534E] mt-4 leading-relaxed">
              Fairtax Solutions welcomes enquiries from parties seeking structured assistance with tax-related requirements.
            </p>
          </div>

          <div className="lg:col-span-8 bg-white border border-[#A99C8C] p-8 sm:p-10 space-y-6">
            <div className="space-y-4 text-base text-[#242321]/90 leading-relaxed">
              <p>
                Whether you are an individual assessing filing responsibilities, a self-employed professional with periodic reporting questions, or a local commercial operator in Jhang organizing tax records, you are invited to initiate an enquiry.
              </p>
              <p className="text-sm text-[#57534E] bg-[#F5F0E7] p-4 border-l-2 border-[#702B3A]">
                <strong>Scope Clarification:</strong> Fairtax Solutions does not claim that every conceivable tax matter or specialized corporate filing is handled. Determining whether your matter fits within the practice’s working scope is the primary purpose of the initial conversation.
              </p>
            </div>

            <div className="pt-4 border-t border-[#A99C8C]/30 flex flex-wrap gap-4 text-xs font-mono text-[#57534E]">
              <span className="bg-[#EBE5DC] px-3 py-1.5 border border-[#A99C8C]/40">Individual Filers</span>
              <span className="bg-[#EBE5DC] px-3 py-1.5 border border-[#A99C8C]/40">Sole Proprietors</span>
              <span className="bg-[#EBE5DC] px-3 py-1.5 border border-[#A99C8C]/40">Commercial Operators in Jhang</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: Closing CTA — Full-Width Deep Burgundy */}
      <section className="bg-[#702B3A] text-[#F5F0E7] py-16 sm:py-20 border-t border-b border-[#551E2B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="text-xs uppercase tracking-[0.3em] font-semibold text-[#E8D8D8]">
            Direct Contact · Office 104, Crown Plaza
          </div>
          
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-[#F5F0E7] tracking-tight">
            Start With a Conversation.
          </h2>

          <p className="text-base sm:text-lg text-[#F5F0E7]/85 max-w-2xl mx-auto leading-relaxed">
            Contact Fairtax Solutions to discuss your requirements and find out what assistance is available.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+923010159289"
              className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#702B3A] bg-[#F5F0E7] hover:bg-white transition-colors border border-[#F5F0E7] shadow-sm font-sans"
            >
              Call Fairtax Solutions
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center justify-center px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#F5F0E7] bg-transparent hover:bg-white/10 transition-colors border border-[#E8D8D8]/50"
            >
              Submit Written Enquiry
            </button>
          </div>

          <div className="text-xs text-[#E8D8D8]/70 font-mono pt-4">
            Office Phone: +92 301 0159289 · Civil Lines, Jhang
          </div>
        </div>
      </section>

    </div>
  );
};
