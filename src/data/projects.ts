import { IProject } from '../types';

export const projects: IProject[] = [
  {
    id: '1',
    title: 'Real-Time Data Pipeline',
    description: 'Developed a real-time data pipeline using Kafka, Spark, and Elasticsearch for processing and analyzing streaming data with dashboards for monitoring metrics.',
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Kafka', 'Spark', 'Elasticsearch', 'Kibana'],
    github: 'https://github.com/username/real-time-pipeline',
    demo: 'https://example.com/demo1',
    featured: true
  },
  {
    id: '2',
    title: 'NLP Comment Analysis',
    description: 'Built an NLP system to analyze customer feedback and comments, extracting sentiment, topics, and actionable insights using advanced natural language processing techniques.',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'NLP', 'BERT', 'Hugging Face', 'Pandas'],
    github: 'https://github.com/username/nlp-comment-analysis',
    featured: true
  },
  {
    id: '3',
    title: 'Post-Cyclone Analysis Tool',
    description: 'Developed an AI tool that uses computer vision to analyze satellite imagery after cyclone events, helping identify damaged areas and prioritize response efforts.',
    image: 'https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'TensorFlow', 'Computer Vision', 'GIS', 'Cloud Computing'],
    github: 'https://github.com/username/post-cyclone-analysis',
    demo: 'https://example.com/demo2',
    featured: true
  },
  {
    id: '4',
    title: 'Customer Segmentation Dashboard',
    description: 'Created an interactive dashboard for visualizing customer segmentation based on purchasing behavior, demographics, and engagement metrics.',
    image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Power BI', 'K-means', 'DAX', 'SQL'],
    featured: false
  },
  {
    id: '5',
    title: 'Predictive Maintenance Model',
    description: 'Implemented a machine learning model to predict equipment failures before they occur, reducing downtime and maintenance costs for manufacturing clients.',
    image: 'https://images.pexels.com/photos/1036936/pexels-photo-1036936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'Scikit-learn', 'Time Series Analysis', 'XGBoost', 'Feature Engineering'],
    github: 'https://github.com/username/predictive-maintenance',
    featured: false
  },
  {
    id: '6',
    title: 'Sales Forecasting Tool',
    description: 'Developed a forecasting system that predicts future sales trends based on historical data, seasonal patterns, and external factors.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Python', 'ARIMA', 'Prophet', 'Pandas', 'Tableau'],
    github: 'https://github.com/username/sales-forecasting',
    demo: 'https://example.com/demo3',
    featured: false
  }
];