export default {
  // Navigation
  nav: {
    home: 'Home',
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    contact: 'Contact',
    admin: 'Admin',
  },
  
  // Home
  home: {
    title: 'Nouho Sylla',
    subtitle: 'Data Scientist / Analyst',
    dynamicText: [
      'Data Scientist',
      'Data Analyst',
      'ML Engineer',
      'Problem Solver',
    ],
    cta: 'View My Work',
    resume: 'Download CV',
    contact: 'Contact Me',
  },
  
  // About
  about: {
    title: 'About Me',
    description: 'As a Data Scientist with a focus on analytics and machine learning, I bring a curious, rigorous, and analytical approach to data challenges. I excel in detailed analysis, priority management, and finding innovative solutions to complex problems.',
    stats: {
      projects: 'Projects',
      certifications: 'Certifications',
      experience: 'Years Experience',
    },
    softSkills: {
      title: 'Soft Skills',
      skills: [
        'Detail-oriented',
        'Priority management',
        'Analytical thinking',
        'Problem-solving',
        'Communication',
        'Team player',
      ],
    },
  },
  
  // Experience
  experience: {
    title: 'Work Experience',
    viewAll: 'View All',
    timeline: [
      {
        title: 'Data Analyst (Internship)',
        company: 'Orange France',
        date: 'Sept 2024 - Present',
        description: 'Working as a data analyst in an alternating work-study program.',
        skills: ['Data Analysis', 'Reporting', 'Business Intelligence'],
      },
      {
        title: 'Real-Time Data Pipeline Project',
        company: 'Hetic',
        date: 'March 2025',
        description: 'Developed a real-time data pipeline for processing and analyzing streaming data.',
        skills: ['Kafka', 'Spark', 'Real-time Analytics'],
      },
      {
        title: 'NLP Comment Analysis Project',
        company: 'Airbnb',
        date: 'January 2025',
        description: 'Analyzed customer comments using Natural Language Processing techniques to extract insights.',
        skills: ['NLP', 'Sentiment Analysis', 'Python'],
      },
      {
        title: 'AI Post-Cyclone Tool',
        company: 'CNES',
        date: 'December 2024',
        description: 'Developed an AI tool for analyzing satellite imagery after cyclone events.',
        skills: ['Computer Vision', 'Satellite Imagery', 'Disaster Response'],
      },
      {
        title: 'Reporting Analyst Intern',
        company: 'Unacoopec CI',
        date: 'April 2023 - July 2023',
        description: 'Conducted reporting and analysis for business performance metrics.',
        skills: ['Data Visualization', 'Business Reporting', 'Excel'],
      },
    ],
  },
  
  // Projects
  projects: {
    title: 'Projects',
    filters: {
      all: 'All',
      python: 'Python',
      cloud: 'Cloud',
      nlp: 'NLP',
      ml: 'Machine Learning',
      bi: 'BI',
    },
    viewProject: 'View Project',
    githubLink: 'GitHub',
    demoLink: 'Live Demo',
  },
  
  // Skills
  skills: {
    title: 'Skills',
    categories: {
      dataScience: 'Data Science',
      bi: 'Business Intelligence',
      ml: 'Machine Learning',
      cloud: 'Cloud',
      tools: 'Tools & Other',
    },
  },
  
  // Education
  education: {
    title: 'Education',
    certifications: 'Certifications',
    degree: 'Degree',
    university: 'University',
    date: 'Date',
    degrees: [
      {
        title: 'Master in Data & AI',
        institution: 'Hetic Paris',
        year: '2025',
        description: 'Advanced studies in data science, artificial intelligence and machine learning applications.'
      },
      {
        title: 'M1 Big Data',
        institution: 'ESG Finance',
        year: '2024',
        description: 'Specialized in big data processing, storage and analysis techniques.'
      },
      {
        title: 'M1 Mathematics',
        institution: 'IUA',
        year: '2023',
        description: 'Strong foundation in mathematical concepts and computational methods.'
      },
      {
        title: 'Bachelor in Statistics & Applied Economics',
        institution: 'UP Bingerville',
        year: '2022',
        description: 'Fundamental training in statistical analysis and economic applications.'
      }
    ],
    certifications: [
      {
        title: 'Supervised Machine Learning',
        issuer: 'Stanford / Coursera',
        date: '2024',
        credential: 'ML001234'
      },
      {
        title: 'Applied Machine Learning',
        issuer: 'University of Michigan',
        date: '2023',
        credential: 'AML5678'
      },
      {
        title: 'Image Generation',
        issuer: 'Google Cloud',
        date: '2023',
        credential: 'GCP9012'
      },
      {
        title: 'Trading, ML & GCP',
        issuer: 'NYIF',
        date: '2022',
        credential: 'NYIF3456'
      }
    ]
  },
  
  // Contact
  contact: {
    title: 'Get In Touch',
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    send: 'Send Message',
    success: 'Your message has been sent!',
    error: 'There was an error sending your message.',
    info: {
      email: 'snouho.ylla@gmail.com',
      phone: '+33 6 13 10 46 26',
      linkedin: 'Nouho Sylla',
    },
  },
  
  // Admin
  admin: {
    login: 'Login',
    logout: 'Logout',
    dashboard: 'Admin Dashboard',
    sections: {
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
      skills: 'Skills',
      certifications: 'Certifications',
      settings: 'Settings',
    },
    actions: {
      add: 'Add',
      edit: 'Edit',
      delete: 'Delete',
      save: 'Save',
      cancel: 'Cancel',
      preview: 'Preview',
      publish: 'Publish',
    },
    messages: {
      saveSuccess: 'Saved successfully',
      deleteSuccess: 'Deleted successfully',
      error: 'An error occurred',
    },
  },

  // Footer
  footer: {
    rights: 'All rights reserved',
    madeWith: 'Made with',
  },

  // Common
  common: {
    loading: 'Loading...',
    error: 'Error',
    notFound: 'Page not found',
    back: 'Go back',
  },

  // Theme
  theme: {
    light: 'Light',
    dark: 'Dark',
  },
};