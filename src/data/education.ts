import { IDegree, ICertification } from '../types';

export const degrees: IDegree[] = [
  {
    id: '1',
    title: 'Master Data & IA',
    institution: 'Hetic Paris',
    year: '2025',
    description: 'Advanced studies in data science, artificial intelligence and machine learning applications.',
  },
  {
    id: '2',
    title: 'M1 Big Data',
    institution: 'ESG Finance',
    year: '2024',
    description: 'Specialized in big data processing, storage and analysis techniques.',
  },
  {
    id: '3',
    title: 'M1 Mathematics',
    institution: 'IUA',
    year: '2023',
    description: 'Strong foundation in mathematical concepts and computational methods.',
  },
  {
    id: '4',
    title: 'Licence Statistics & Applied Economics',
    institution: 'UP Bingerville',
    year: '2022',
    description: 'Fundamental training in statistical analysis and economic applications.',
  },
];

export const certifications: ICertification[] = [
  {
    id: '1',
    title: 'Supervised Machine Learning',
    issuer: 'Stanford / Coursera',
    date: '2024',
    credential: 'ML001234',
    url: 'https://www.coursera.org/account/accomplishments/verify/ML001234',
  },
  {
    id: '2',
    title: 'Applied Machine Learning',
    issuer: 'University of Michigan',
    date: '2023',
    credential: 'AML5678',
    url: 'https://www.coursera.org/account/accomplishments/verify/AML5678',
  },
  {
    id: '3',
    title: 'Image Generation',
    issuer: 'Google Cloud',
    date: '2023',
    credential: 'GCP9012',
    url: 'https://www.cloudskillsboost.google/public_profiles/GCP9012',
  },
  {
    id: '4',
    title: 'Trading, ML & GCP',
    issuer: 'NYIF',
    date: '2022',
    credential: 'NYIF3456',
    url: 'https://www.nyif.com/verify/NYIF3456',
  },
];