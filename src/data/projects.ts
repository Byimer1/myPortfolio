import trendImage from '../assets/images/trend.JPG';
import guessingImage from '../assets/images/guessing.jpg';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'TrendAdSocial',
    description: 'A dynamic social media web application inspired by Instagram, featuring user authentication, real-time messaging, post sharing, and interactive features. Built with Django and Bootstrap, it includes features like follow systems, direct messaging, and push notifications.',
    image: trendImage,
    technologies: ['Python', 'Django', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'SQLite', 'REST API'],
    githubUrl: 'https://github.com/Byimer1/trendAdSocial',
    liveUrl: '#',
  },
  {
    id: '2',
    title: 'Ocean Number Game',
    description: 'A React Native mobile game where players compete against the computer in a number-guessing challenge. Features an intuitive UI, custom animations, and engaging gameplay mechanics.',
    image: guessingImage,
    technologies: ['React Native', 'Expo', 'Custom Animations', 'Styled Components'],
    githubUrl: 'https://github.com/Byimer1/ocean-number-game',
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'ML Model',
    description: 'Developed and optimized machine learning models using Python libraries such as Scikit-learn and TensorFlow, applying them to solve specific challenges like image classification and natural language processing. Features hyperparameter tuning, data preprocessing, and cross-validation techniques.',
    image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    githubUrl: 'https://github.com/Byimer1/MLproj',
    liveUrl: '#',
  },
  {
    id: '4',
    title: 'Threat Detector HashScanner',
    description: 'An interactive virus hash and URL scanner built with Flask and Bootstrap. Features include scanning file hashes and URLs for malware, viewing vendor statuses, and detailed metadata analysis using the VirusTotal API.',
    image: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['Python', 'Flask', 'SQLite3', 'Bootstrap', 'HTML', 'CSS', 'VirusTotal API'],
    githubUrl: 'https://github.com/Byimer1/HashScanner',
    liveUrl: '#',
  },
  {
    id: '5',
    title: 'My Old Portfolio',
    description: 'My previous portfolio website showcasing my work and skills, built with HTML, CSS, and JavaScript. Features a clean and responsive design with smooth animations.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Byimer1/Byimer1.github.io',
    liveUrl: 'https://birukyimer.vercel.app',
  },
];