import React, { useState } from 'react';
import { EnquiryFormData, SubmissionResponse } from '../types';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    fullName: '',
    phoneNumber: '',
    enquiryType: 'General Tax Consultancy',
    requirements: '',
    preferredContact: 'Phone Call',
    hp_company: '', // Honeypot field
  });

  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<SubmissionResponse | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errors.fullName = 'Please enter your full name.';
    } else if (formData.fullName.trim().length < 2) {
      errors.fullName = 'Full name must contain at least 2 characters.';
    }

    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = 'Please enter your contact phone number.';
    } else if (!/^[0-9+\s\-().]{7,25}$/.test(formData.phoneNumber.trim())) {
      errors.phoneNumber = 'Please enter a valid phone number (digits and standard formatting).';
    }

    if (!formData.requirements.trim()) {
      errors.requirements = 'Please provide a brief description of your tax requirement.';
    } else if (formData.requirements.trim().length < 10) {
      errors.requirements = 'Please describe your requirement with at least 10 characters.';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Server rejected the enquiry. Please call the office directly.');
      }

      setSubmitSuccess(data);
      // Reset form on success
      setFormData({
        fullName: '',
        phoneNumber: '',
        enquiryType: 'General Tax Consultancy',
        requirements: '',
        preferredContact: 'Phone Call',
        hp_company: '',
      });
      setValidationErrors({});
    } catch (err: unknown) {
      if (err instanceof Error) {
        setSubmitError(err.message);
      } else {
        setSubmitError('Unable to send enquiry at this moment. Please call +92 301 0159289.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      
      {/* Page Title & Intro */}
      <div className="border-b border-[#A99C8C] pb-6 mb-12">
        <div className="text-xs uppercase tracking-[0.25em] font-semibold text-[#702B3A] mb-2">
          Enquiries & Consultations
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#242321] tracking-tight">
          Contact Fairtax Solutions
        </h1>
        <p className="text-base text-[#242321]/80 max-w-2xl mt-3 leading-relaxed">
          Reach out by telephone or submit your tax-related enquiry below. All communications are reviewed directly by the office in Jhang.
        </p>
      </div>

      {/* Visually Distinct Layout: Compact Burgundy Contact-Information Column beside Large Enquiry Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        
        {/* Compact Burgundy Contact-Information Column */}
        <aside className="lg:col-span-4 bg-[#702B3A] text-[#F5F0E7] p-8 sm:p-10 border border-[#551E2B] space-y-8">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#E8D8D8] block mb-1">
              Registered Listing
            </span>
            <div className="font-serif text-2xl font-bold text-[#F5F0E7]">
              Fairtax Solutions
            </div>
            <div className="text-xs text-[#E8D8D8]/80 mt-1 uppercase tracking-wider font-sans">
              Tax Preparation & Consultancy
            </div>
          </div>

          <div className="h-px bg-[#E8D8D8]/30 w-full" />

          {/* Physical Address */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#E8D8D8] block font-semibold">
              Office Premises
            </span>
            <address className="not-italic text-sm text-[#F5F0E7]/90 leading-relaxed font-sans">
              <strong className="text-white block font-serif text-base">Office 104, Crown Plaza</strong>
              <div>Nawaz Chowk, Civil Lines</div>
              <div>Jhang, 35200</div>
              <div>Punjab, Pakistan</div>
            </address>
          </div>

          {/* Telephone Contact with Click-to-call */}
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#E8D8D8] block font-semibold">
              Telephone
            </span>
            <div>
              <a
                href="tel:+923010159289"
                className="inline-block font-mono text-lg font-bold text-white hover:text-[#E8D8D8] underline decoration-[#E8D8D8] underline-offset-4"
                aria-label="Call Fairtax Solutions at +92 301 0159289"
              >
                +92 301 0159289
              </a>
            </div>
            <p className="text-xs text-[#E8D8D8]/75 leading-relaxed pt-1">
              Click to dial directly. For formal discussions, bring relevant documents to the consultation.
            </p>
          </div>

          <div className="h-px bg-[#E8D8D8]/30 w-full" />

          {/* Security & Document Warning */}
          <div className="text-xs text-[#E8D8D8]/90 leading-relaxed bg-[#551E2B] p-4 border border-[#E8D8D8]/30">
            <strong className="text-white block mb-1 uppercase tracking-wider text-[10px]">
              Document Security Policy
            </strong>
            Do not submit confidential documents, CNIC numbers, bank credentials, or tax portal passwords through web forms. All sensitive records should be reviewed in person or through confirmed secure channels.
          </div>
        </aside>

        {/* Large, Clean Enquiry Form */}
        <main className="lg:col-span-8 bg-white border border-[#A99C8C] p-8 sm:p-12 shadow-xs">
          
          <div className="border-b border-[#A99C8C]/40 pb-4 mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#242321]">
              Consultation Intake Form
            </h2>
            <p className="text-xs text-[#57534E] mt-1">
              Fields marked with an asterisk (<span className="text-[#702B3A]">*</span>) are required. Submissions are processed by our real intake server.
            </p>
          </div>

          {/* Server Error Alert */}
          {submitError && (
            <div
              className="mb-8 p-4 bg-[#E8D8D8]/60 border-l-4 border-[#702B3A] text-sm text-[#242321]"
              role="alert"
            >
              <div className="font-semibold text-[#702B3A] mb-1">Enquiry Submission Error</div>
              <p>{submitError}</p>
            </div>
          )}

          {/* Server Success Confirmation */}
          {submitSuccess && (
            <div
              className="mb-8 p-6 bg-[#F5F0E7] border-2 border-[#702B3A] text-sm text-[#242321]"
              role="status"
            >
              <div className="font-serif text-xl font-bold text-[#702B3A] mb-2">
                Enquiry Receipt Confirmed
              </div>
              <p className="text-base text-[#242321]/90 mb-4">
                {submitSuccess.message}
              </p>
              
              <div className="bg-white p-4 border border-[#A99C8C] font-mono text-xs space-y-2 mb-4">
                <div>
                  <span className="text-[#57534E]">Reference Code: </span>
                  <span className="font-bold text-[#702B3A] text-sm">{submitSuccess.referenceCode}</span>
                </div>
                {submitSuccess.details && (
                  <>
                    <div>
                      <span className="text-[#57534E]">Enquiry Category: </span>
                      <span className="font-semibold">{submitSuccess.details.enquiryType}</span>
                    </div>
                    <div>
                      <span className="text-[#57534E]">Preferred Contact: </span>
                      <span className="font-semibold">{submitSuccess.details.preferredContact}</span>
                    </div>
                    <div className="text-[#57534E] pt-2 border-t border-[#A99C8C]/30">
                      {submitSuccess.details.officeNotice}
                    </div>
                  </>
                )}
              </div>

              <button
                type="button"
                onClick={() => setSubmitSuccess(null)}
                className="text-xs uppercase tracking-wider font-semibold text-[#702B3A] underline decoration-[#702B3A] cursor-pointer"
              >
                Submit Another Enquiry
              </button>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Honeypot field (hidden from genuine users, catches automated spam bots) */}
            <div className="hidden" aria-hidden="true">
              <label htmlFor="hp_company">Company Name (leave empty)</label>
              <input
                type="text"
                id="hp_company"
                name="hp_company"
                value={formData.hp_company}
                onChange={(e) => setFormData({ ...formData, hp_company: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Row 1: Full Name & Phone Number */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#242321] mb-1.5"
                >
                  Full Name <span className="text-[#702B3A]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={(e) => {
                    setFormData({ ...formData, fullName: e.target.value });
                    if (validationErrors.fullName) {
                      setValidationErrors({ ...validationErrors, fullName: '' });
                    }
                  }}
                  className={`w-full px-4 py-2.5 text-sm bg-[#F5F0E7]/40 border ${
                    validationErrors.fullName ? 'border-[#702B3A] bg-[#E8D8D8]/20' : 'border-[#A99C8C]'
                  } text-[#242321] focus:bg-white transition-colors`}
                  placeholder="e.g. Muhammad Ali"
                  aria-required="true"
                  aria-invalid={!!validationErrors.fullName}
                  aria-describedby={validationErrors.fullName ? 'fullName-error' : undefined}
                />
                {validationErrors.fullName && (
                  <p id="fullName-error" className="mt-1.5 text-xs text-[#702B3A] font-medium">
                    {validationErrors.fullName}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#242321] mb-1.5"
                >
                  Phone Number <span className="text-[#702B3A]">*</span>
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={(e) => {
                    setFormData({ ...formData, phoneNumber: e.target.value });
                    if (validationErrors.phoneNumber) {
                      setValidationErrors({ ...validationErrors, phoneNumber: '' });
                    }
                  }}
                  className={`w-full px-4 py-2.5 text-sm bg-[#F5F0E7]/40 border ${
                    validationErrors.phoneNumber ? 'border-[#702B3A] bg-[#E8D8D8]/20' : 'border-[#A99C8C]'
                  } text-[#242321] focus:bg-white transition-colors font-mono`}
                  placeholder="e.g. +92 300 1234567"
                  aria-required="true"
                  aria-invalid={!!validationErrors.phoneNumber}
                  aria-describedby={validationErrors.phoneNumber ? 'phoneNumber-error' : undefined}
                />
                {validationErrors.phoneNumber && (
                  <p id="phoneNumber-error" className="mt-1.5 text-xs text-[#702B3A] font-medium">
                    {validationErrors.phoneNumber}
                  </p>
                )}
              </div>

            </div>

            {/* Row 2: Type of Enquiry & Preferred Contact Method */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              <div>
                <label
                  htmlFor="enquiryType"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#242321] mb-1.5"
                >
                  Type of Enquiry <span className="text-[#702B3A]">*</span>
                </label>
                <select
                  id="enquiryType"
                  name="enquiryType"
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm bg-[#F5F0E7]/40 border border-[#A99C8C] text-[#242321] focus:bg-white transition-colors cursor-pointer"
                >
                  <option value="General Tax Consultancy">General Tax Consultancy</option>
                  <option value="Tax Preparation Enquiry">Tax Preparation Enquiry</option>
                  <option value="Tax Compliance Question">Tax Compliance Question</option>
                  <option value="Other Tax-Related Question">Other Tax-Related Question</option>
                </select>
                <span className="block mt-1 text-[11px] text-[#57534E]">
                  Select the closest general category.
                </span>
              </div>

              <div>
                <label
                  htmlFor="preferredContact"
                  className="block text-xs font-semibold uppercase tracking-wider text-[#242321] mb-1.5"
                >
                  Preferred Contact Method
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={formData.preferredContact}
                  onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value as 'Phone Call' | 'Text Message' })}
                  className="w-full px-4 py-2.5 text-sm bg-[#F5F0E7]/40 border border-[#A99C8C] text-[#242321] focus:bg-white transition-colors cursor-pointer"
                >
                  <option value="Phone Call">Phone Call</option>
                  <option value="Text Message">Text Message</option>
                </select>
                <span className="block mt-1 text-[11px] text-[#57534E]">
                  How the office should reach back out.
                </span>
              </div>

            </div>

            {/* Row 3: Brief Description of Requirements */}
            <div>
              <label
                htmlFor="requirements"
                className="block text-xs font-semibold uppercase tracking-wider text-[#242321] mb-1.5"
              >
                Brief Description of Requirements <span className="text-[#702B3A]">*</span>
              </label>
              <textarea
                id="requirements"
                name="requirements"
                rows={4}
                value={formData.requirements}
                onChange={(e) => {
                  setFormData({ ...formData, requirements: e.target.value });
                  if (validationErrors.requirements) {
                    setValidationErrors({ ...validationErrors, requirements: '' });
                  }
                }}
                className={`w-full px-4 py-2.5 text-sm bg-[#F5F0E7]/40 border ${
                  validationErrors.requirements ? 'border-[#702B3A] bg-[#E8D8D8]/20' : 'border-[#A99C8C]'
                } text-[#242321] focus:bg-white transition-colors`}
                placeholder="Briefly state your tax-related question or filing enquiry. Please do NOT include passwords, bank accounts, or confidential credentials."
                aria-required="true"
                aria-invalid={!!validationErrors.requirements}
                aria-describedby={validationErrors.requirements ? 'requirements-error' : undefined}
              />
              {validationErrors.requirements && (
                <p id="requirements-error" className="mt-1.5 text-xs text-[#702B3A] font-medium">
                  {validationErrors.requirements}
                </p>
              )}
            </div>

            {/* Submit Action */}
            <div className="pt-4 border-t border-[#A99C8C]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#F5F0E7] bg-[#702B3A] hover:bg-[#551E2B] transition-colors border border-[#702B3A] cursor-pointer ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Transmitting Enquiry to Server...' : 'Submit Enquiry to Office'}
              </button>

              <div className="text-xs text-[#57534E] font-sans">
                Immediate urgency? Call <a href="tel:+923010159289" className="font-mono text-[#702B3A] underline">+92 301 0159289</a>
              </div>
            </div>

          </form>

        </main>

      </div>
    </div>
  );
};
