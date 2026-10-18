import React, { useState } from 'react';
import { PageId } from '../types';

interface FaqsPageProps {
  onNavigate: (page: PageId) => void;
}

interface FaqItemData {
  id: string;
  question: string;
  answer: string;
}

export const FaqsPage: React.FC<FaqsPageProps> = ({ onNavigate }) => {
  // Store set of open FAQ item IDs for accordion behavior
  const [openIds, setOpenIds] = useState<Set<string>>(new Set(['faq-1']));

  const faqs: FaqItemData[] = [
    {
      id: 'faq-1',
      question: 'What services does Fairtax Solutions provide?',
      answer: 'Fairtax Solutions is listed as a tax preparation and consultancy business. Contact the office to confirm whether it handles your specific requirement.',
    },
    {
      id: 'faq-2',
      question: 'What documents should I prepare?',
      answer: 'Requirements depend on your circumstances and the service requested. Ask the business which documents are necessary before sharing them.',
    },
    {
      id: 'faq-3',
      question: 'How much does tax preparation cost?',
      answer: 'Fees depend on the type and complexity of the work. Request a quote directly from the business.',
    },
    {
      id: 'faq-4',
      question: 'Can I get help with a specific tax issue?',
      answer: 'Describe your situation when contacting the business so it can confirm whether the requested assistance is available.',
    },
    {
      id: 'faq-5',
      question: 'Can you guarantee a refund or a particular tax outcome?',
      answer: 'No specific outcome should be assumed. Tax results depend on the relevant facts, documentation, and applicable rules.',
    },
    {
      id: 'faq-6',
      question: 'Where is Fairtax Solutions located?',
      answer: 'Office 104, Crown Plaza, Nawaz Chowk, Civil Lines, Jhang, Punjab, Pakistan.',
    },
    {
      id: 'faq-7',
      question: 'How can I contact the office?',
      answer: 'Call +92 301 0159289.',
    },
  ];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setOpenIds(new Set(faqs.map((f) => f.id)));
  };

  const collapseAll = () => {
    setOpenIds(new Set());
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      {/* Header */}
      <div className="border-b border-[#A99C8C] pb-6 mb-10">
        <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A] mb-2">
          Questions & Answers
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#242321] tracking-tight">
          Tax Consultation FAQs
        </h1>
        <p className="text-base text-[#242321]/80 mt-3 leading-relaxed">
          Frequently asked questions regarding tax preparation, consultation scope, fees, documentation, and contact details for Fairtax Solutions in Jhang.
        </p>

        {/* Accordion Controls */}
        <div className="flex items-center gap-4 pt-6 text-xs font-mono">
          <button
            onClick={expandAll}
            className="text-[#702B3A] hover:underline decoration-[#702B3A] cursor-pointer"
          >
            [ + Expand All ]
          </button>
          <span className="text-[#A99C8C]">/</span>
          <button
            onClick={collapseAll}
            className="text-[#57534E] hover:underline decoration-[#57534E] cursor-pointer"
          >
            [ − Collapse All ]
          </button>
        </div>
      </div>

      {/* Accordion List */}
      <div className="divide-y divide-[#A99C8C] border-t border-b border-[#A99C8C] bg-white">
        {faqs.map((faq, index) => {
          const isOpen = openIds.has(faq.id);
          const numStr = (index + 1).toString().padStart(2, '0');

          return (
            <div key={faq.id} className="transition-colors hover:bg-[#F5F0E7]/30">
              <button
                type="button"
                onClick={() => toggleAccordion(faq.id)}
                className="w-full py-6 px-6 sm:px-8 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:bg-[#E8D8D8]/50"
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${faq.id}`}
                id={`faq-btn-${faq.id}`}
              >
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="font-mono text-sm font-semibold text-[#702B3A] pt-0.5 tabular-nums">
                    {numStr}.
                  </span>
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#242321] leading-snug">
                    {faq.question}
                  </span>
                </div>
                
                {/* Text-based toggle symbol (Strictly NO SVG or icons) */}
                <span
                  className="font-mono text-xl font-bold text-[#702B3A] shrink-0 select-none ml-2 leading-none"
                  aria-hidden="true"
                >
                  {isOpen ? '−' : '+'}
                </span>
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${faq.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${faq.id}`}
                  className="px-6 sm:px-8 pb-6 pl-14 sm:pl-16 text-base text-[#242321]/90 leading-relaxed font-sans border-t border-[#A99C8C]/20 pt-4"
                >
                  <p>{faq.answer}</p>

                  {faq.id === 'faq-6' && (
                    <div className="mt-3 text-xs text-[#57534E] font-sans">
                      Postal Code: 35200 · Civil Lines, Jhang, Punjab, Pakistan.
                    </div>
                  )}

                  {faq.id === 'faq-7' && (
                    <div className="mt-3">
                      <a
                        href="tel:+923010159289"
                        className="inline-block text-xs font-semibold uppercase tracking-wider text-[#702B3A] underline decoration-[#702B3A]"
                      >
                        Dial +92 301 0159289 Directly →
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Advisory Legal Disclaimer */}
      <div className="mt-12 p-6 bg-[#EBE5DC] border border-[#A99C8C] text-xs text-[#57534E] leading-relaxed">
        <strong className="text-[#242321] block mb-1">General Information Advisory:</strong>
        The answers provided above are intended solely for general organizational guidance and describe the standard consultative procedures of Fairtax Solutions. These responses do not constitute formal legal counsel or personalized tax advisory opinions. For tailored tax analysis, please discuss your documentation with the business directly.
      </div>

      {/* Call to action prompt */}
      <div className="mt-12 p-8 bg-white border border-[#A99C8C] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="font-serif text-xl font-bold text-[#242321]">
            Have an enquiry not addressed here?
          </h2>
          <p className="text-xs text-[#57534E] mt-1 font-sans">
            Reach out directly to discuss your specific paperwork or questions.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+923010159289"
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F5F0E7] bg-[#702B3A] hover:bg-[#551E2B] transition-colors"
          >
            Call Office
          </a>
          <button
            onClick={() => onNavigate('contact')}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#242321] border border-[#A99C8C] hover:border-[#702B3A] transition-colors cursor-pointer"
          >
            Submit Enquiry
          </button>
        </div>
      </div>

    </div>
  );
};
