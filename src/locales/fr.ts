export default {
  // Navigation
  nav: {
    home: 'Accueil',
    about: 'À Propos',
    experience: 'Expérience',
    projects: 'Projets',
    skills: 'Compétences',
    education: 'Formation',
    contact: 'Contact',
    admin: 'Admin',
  },
  
  // Home
  home: {
    title: 'Nouho Sylla',
    subtitle: 'Data Scientist / Analyste',
    dynamicText: [
      'Data Scientist',
      'Analyste de Données',
      'Ingénieur ML',
      'Résolveur de Problèmes',
    ],
    cta: 'Voir Mon Travail',
    resume: 'Télécharger CV',
    contact: 'Me Contacter',
  },
  
  // About
  about: {
    title: 'À Propos de Moi',
    description: 'En tant que Data Scientist spécialisé en analyse et machine learning, j\'apporte une approche curieuse, rigoureuse et analytique aux défis liés aux données. J\'excelle dans l\'analyse détaillée, la gestion des priorités et la recherche de solutions innovantes à des problèmes complexes.',
    stats: {
      projects: 'Projets',
      certifications: 'Certifications',
      experience: 'Années d\'Expérience',
    },
    softSkills: {
      title: 'Soft Skills',
      skills: [
        'Sens du détail',
        'Gestion des priorités',
        'Pensée analytique',
        'Résolution de problèmes',
        'Communication',
        'Esprit d\'équipe',
      ],
    },
  },
  
  // Experience
  experience: {
    title: 'Expérience Professionnelle',
    viewAll: 'Voir Tout',
    timeline: [
      {
        title: 'Analyste de Données (Alternance)',
        company: 'Orange France',
        date: 'Sept 2024 - Présent',
        description: 'Travail en tant qu\'analyste de données en alternance.',
        skills: ['Analyse de Données', 'Reporting', 'Business Intelligence'],
      },
      {
        title: 'Projet Pipeline Temps Réel',
        company: 'Hetic',
        date: 'Mars 2025',
        description: 'Développement d\'un pipeline de données en temps réel pour le traitement et l\'analyse de données streaming.',
        skills: ['Kafka', 'Spark', 'Analytique en Temps Réel'],
      },
      {
        title: 'Projet Analyse Commentaires NLP',
        company: 'Airbnb',
        date: 'Janvier 2025',
        description: 'Analyse des commentaires clients en utilisant des techniques de Traitement Automatique du Langage Naturel pour extraire des insights.',
        skills: ['NLP', 'Analyse de Sentiment', 'Python'],
      },
      {
        title: 'Outil Post-Cyclone IA',
        company: 'CNES',
        date: 'Décembre 2024',
        description: 'Développement d\'un outil d\'IA pour l\'analyse d\'images satellites après des événements cycloniques.',
        skills: ['Vision par Ordinateur', 'Imagerie Satellite', 'Réponse aux Catastrophes'],
      },
      {
        title: 'Stagiaire Analyste Reporting',
        company: 'Unacoopec CI',
        date: 'Avril 2023 - Juillet 2023',
        description: 'Conduite de reporting et d\'analyse pour les métriques de performance business.',
        skills: ['Visualisation de Données', 'Reporting Business', 'Excel'],
      },
    ],
  },
  
  // Projects
  projects: {
    title: 'Projets',
    filters: {
      all: 'Tous',
      python: 'Python',
      cloud: 'Cloud',
      nlp: 'NLP',
      ml: 'Machine Learning',
      bi: 'BI',
    },
    viewProject: 'Voir le Projet',
    githubLink: 'GitHub',
    demoLink: 'Démo Live',
  },
  
  // Skills
  skills: {
    title: 'Compétences',
    categories: {
      dataScience: 'Data Science',
      bi: 'Business Intelligence',
      ml: 'Machine Learning',
      cloud: 'Cloud',
      tools: 'Outils & Autres',
    },
  },
  
  // Education
  education: {
    title: 'Formation',
    certifications: 'Certifications',
    degree: 'Diplôme',
    university: 'Université',
    date: 'Date',
    degrees: [
      {
        title: 'Master Data & IA',
        institution: 'Hetic Paris',
        year: '2025',
        description: 'Études avancées en science des données, intelligence artificielle et applications du machine learning.'
      },
      {
        title: 'M1 Big Data',
        institution: 'ESG Finance',
        year: '2024',
        description: 'Spécialisation dans les techniques de traitement, stockage et analyse de big data.'
      },
      {
        title: 'M1 Mathématiques',
        institution: 'IUA',
        year: '2023',
        description: 'Solides fondations en concepts mathématiques et méthodes computationnelles.'
      },
      {
        title: 'Licence en Statistiques & Économie Appliquée',
        institution: 'UP Bingerville',
        year: '2022',
        description: 'Formation fondamentale en analyse statistique et applications économiques.'
      }
    ],
    certifications: [
      {
        title: 'Machine Learning Supervisé',
        issuer: 'Stanford / Coursera',
        date: '2024',
        credential: 'ML001234'
      },
      {
        title: 'Machine Learning Appliqué',
        issuer: 'Université du Michigan',
        date: '2023',
        credential: 'AML5678'
      },
      {
        title: 'Génération d\'Images',
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
    title: 'Contact',
    name: 'Nom',
    email: 'Email',
    subject: 'Sujet',
    message: 'Message',
    send: 'Envoyer',
    success: 'Votre message a été envoyé !',
    error: 'Une erreur est survenue lors de l\'envoi de votre message.',
    info: {
      email: 'snouho.ylla@gmail.com',
      phone: '+33 6 13 10 46 26',
      linkedin: 'Nouho Sylla',
    },
  },
  
  // Admin
  admin: {
    login: 'Connexion',
    logout: 'Déconnexion',
    dashboard: 'Tableau de Bord Admin',
    sections: {
      projects: 'Projets',
      experience: 'Expérience',
      education: 'Formation',
      skills: 'Compétences',
      certifications: 'Certifications',
      settings: 'Paramètres',
    },
    actions: {
      add: 'Ajouter',
      edit: 'Modifier',
      delete: 'Supprimer',
      save: 'Sauvegarder',
      cancel: 'Annuler',
      preview: 'Aperçu',
      publish: 'Publier',
    },
    messages: {
      saveSuccess: 'Sauvegardé avec succès',
      deleteSuccess: 'Supprimé avec succès',
      error: 'Une erreur est survenue',
    },
  },

  // Footer
  footer: {
    rights: 'Tous droits réservés',
    madeWith: 'Réalisé avec',
  },

  // Common
  common: {
    loading: 'Chargement...',
    error: 'Erreur',
    notFound: 'Page non trouvée',
    back: 'Retour',
  },

  // Theme
  theme: {
    light: 'Clair',
    dark: 'Sombre',
  },
};