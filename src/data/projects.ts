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
    title: 'Ocean Number Game',
    description: 'A React Native mobile game where players compete against the computer in a number-guessing challenge. Features an intuitive UI, custom animations, and engaging gameplay mechanics.',
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    technologies: ['React Native', 'Expo', 'Custom Animations', 'Styled Components'],
    githubUrl: 'https://github.com/Byimer1/ocean-number-game',
    liveUrl: '#',
  },
  {
    id: '2',
    title: 'Threat Detector HashScanner',
    description: 'An interactive virus hash and URL scanner built with Flask and Bootstrap. Features include scanning file hashes and URLs for malware, viewing vendor statuses, and detailed metadata analysis using the VirusTotal API.',
    image: 'https://images.unsplash.com/photo-1555066931-bf19f8fd1085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['Python', 'Flask', 'SQLite3', 'Bootstrap', 'HTML', 'CSS', 'VirusTotal API'],
    githubUrl: 'https://github.com/Byimer1/HashScanner',
    liveUrl: '#',
  },
  {
    id: '3',
    title: 'My Old Portfolio',
    description: 'My previous portfolio website showcasing my work and skills, built with HTML, CSS, and JavaScript. Features a clean and responsive design with smooth animations.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/Byimer1/Byimer1.github.io',
    liveUrl: 'https://birukyimer.vercel.app',
  },
 
];