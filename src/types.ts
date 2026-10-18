export type PageId = 'home' | 'services' | 'about' | 'faqs' | 'contact';

export interface NavItem {
  id: PageId;
  label: string;
  path: string;
}

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  enquiryType: string;
  requirements: string;
  preferredContact: 'Phone Call' | 'Text Message';
  hp_company?: string;
}

export interface SubmissionResponse {
  success: boolean;
  referenceCode?: string;
  message?: string;
  error?: string;
  details?: {
    enquiryType: string;
    preferredContact: string;
    officeNotice: string;
    officeAddress: string;
    officePhone: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}
