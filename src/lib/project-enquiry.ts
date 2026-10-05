export const projectServices = [
  'Product & UX',
  'Website / landing page',
  'Brand identity',
  'Something else',
] as const;

export interface ProjectEnquiry {
  name: string;
  email: string;
  company: string;
  service: (typeof projectServices)[number];
  notes: string;
}

type EnquiryValidation =
  | { success: true; data: ProjectEnquiry }
  | { success: false; error: string };

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const readString = (
  value: unknown,
  maxLength: number,
  required = false,
): string | null => {
  if (typeof value !== 'string') return null;
  const normalized = value.trim();
  if (normalized.length > maxLength || (required && normalized.length === 0)) return null;
  return normalized;
};

export function validateProjectEnquiry(value: unknown): EnquiryValidation {
  if (!isRecord(value)) {
    return { success: false, error: 'Please submit a valid project enquiry.' };
  }

  const name = readString(value.name ?? '', 100, true);
  const email = readString(value.email ?? '', 254, true);
  const company = readString(value.company ?? '', 160);
  const service = readString(value.service ?? '', 64, true);
  const notes = readString(value.notes ?? '', 3000);

  if (name === null || email === null || company === null || service === null || notes === null) {
    return { success: false, error: 'Please check the enquiry fields and try again.' };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: 'Please enter a valid email address.' };
  }

  if (/[\u0000-\u001f\u007f]/.test(name) || /[\u0000-\u001f\u007f]/.test(company)) {
    return { success: false, error: 'Please remove unsupported characters and try again.' };
  }

  if (/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/.test(notes)) {
    return { success: false, error: 'Please remove unsupported characters and try again.' };
  }

  const selectedService = projectServices.find((option) => option === service);
  if (!selectedService) {
    return { success: false, error: 'Please select a valid project service.' };
  }

  return {
    success: true,
    data: {
      name,
      email,
      company,
      service: selectedService,
      notes,
    },
  };
}
