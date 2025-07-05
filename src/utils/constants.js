// The Pay Bureau Brand Constants
export const BRAND = {
  name: 'The Pay Bureau',
  tagline: 'Complete Compliance Solutions for Payroll Professionals',
  
  colors: {
    purple: '#401D6C',
    pink: '#EC385D', 
    peach: '#FF8073',
    light: '#F8F4FF',
  }
};

export const PRODUCTS = [
  {
    id: 'tprflow',
    name: 'TPRFlow',
    tagline: 'Pension Re-enrolment & Compliance',
    description: 'Automate pension re-enrolment cycles and never miss a TPR deadline',
    status: 'live',
    color: 'purple',
    features: ['3-year cycle automation', 'Smart reminders', 'Declaration tracking']
  },
  {
    id: 'hmrcflow', 
    name: 'HMRCFlow',
    tagline: 'HMRC Registration Tracking',
    description: 'Track new business registrations and PAYE setup deadlines',
    status: 'development',
    color: 'pink',
    features: ['Registration tracking', 'PAYE alerts', 'Compliance monitoring']
  },
  {
    id: 'teamflow',
    name: 'TeamFlow', 
    tagline: 'Employee Onboarding',
    description: 'Streamline employee onboarding and new starter workflows',
    status: 'development',
    color: 'peach',
    features: ['New starter workflows', 'Document collection', 'Automated reminders']
  },
  {
    id: 'engagementflow',
    name: 'EngagementFlow',
    tagline: 'Client Contract Management', 
    description: 'Professional client contracts with digital signatures',
    status: 'planned',
    color: 'blue',
    features: ['Digital contracts', 'E-signatures', 'Client portals']
  },
  {
    id: 'amlflow',
    name: 'AMLFlow',
    tagline: 'Anti-Money Laundering',
    description: 'Automated AML compliance and identity verification',
    status: 'planned', 
    color: 'red',
    features: ['Identity verification', 'Risk monitoring', 'Regulatory reporting']
  },
  {
    id: 'invoiceflow',
    name: 'InvoiceFlow',
    tagline: 'Automated Billing',
    description: 'Automated billing and payment management',
    status: 'planned',
    color: 'green', 
    features: ['Automated billing', 'Payment processing', 'Revenue analytics']
  }
];