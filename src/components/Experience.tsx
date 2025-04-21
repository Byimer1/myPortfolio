import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';

interface TimelineItem {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  isLeft: boolean;
}

export const Experience = () => {
  const experiences: TimelineItem[] = [
    {
      id: "exp1",
      title: "Freelance Developer",
      company: "Pharmacy Stock Management SaaS",
      period: "Jan 2025 - Present",
      description: "Developed a full-stack pharmacy inventory system with AI-powered assistant, supporting 100+ daily transactions for a live client.",
      isLeft: true
    },
    {
      id: "exp2",
      title: "Software Engineer",
      company: "Churchme",
      period: "June 2024 - Jan 2025",
      description: "Built and maintained backend services and CI/CD pipelines for a church community app with 3K+ users and a 4.7 rating.",
      isLeft: false
    },
    {
      id: "exp3",
      title: "Software Engineering Intern",
      company: "Comcast",
      period: "May 2023 - Aug 2023",
      description: "Focused on API testing using Karate and Python, improving test coverage and reducing manual QA efforts as a junior engineer.",
      isLeft: true
    },
    {
      id: "exp4",
      title: "Web Development and Python Instructor",
      company: "Children and Charity International",
      period: "Jun 2021 - Aug 2022",
      description: "Taught web development and Python to students, helping them build foundational coding skills and real-world projects.",
      isLeft: false
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeading>Experience</SectionHeading>

        <div className="relative mt-12">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500 timeline-line"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <TimelineEntry 
                key={exp.id} 
                item={exp} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface TimelineEntryProps {
  item: TimelineItem;
  index: number;
}

const TimelineEntry = ({ item, index }: TimelineEntryProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex items-center timeline-entry ${item.isLeft ? 'flex-row' : 'flex-row-reverse'} relative`}
    >
      {/* Timeline circle */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-blue-600 border-4 border-blue-900 z-10 timeline-circle"></div>
      
      {/* Content */}
      <div className={`w-5/12 timeline-content ${item.isLeft ? 'pr-8 text-right' : 'pl-8'}`}>
        <div className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-colors duration-300">
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <h4 className="text-lg font-medium text-blue-400">{item.company}</h4>
          <p className="text-gray-400 mb-3">{item.period}</p>
          <p className="text-gray-300">{item.description}</p>
        </div>
      </div>
      
      {/* Empty space on the other side */}
      <div className="w-5/12 timeline-content"></div>
    </motion.div>
  );
}; 