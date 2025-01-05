import { motion } from 'framer-motion';

interface TechItem {
  name: string;
  icon: string;
}

interface TechCategory {
  title: string;
  items: TechItem[];
}

export const TechStack = () => {
  const techCategories: TechCategory[] = [
    {
      title: "Frontend",
      items: [
        { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "React Native", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
        { name: "HTML", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" },
        { name: "CSS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
        { name: "Bootstrap", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-original.svg" },
        { name: "Expo", icon: "https://www.vectorlogo.zone/logos/expoio/expoio-icon.svg" },
      ]
    },
    {
      title: "Backend",
      items: [
        { name: "Python", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
        { name: "C++", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
        { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
        { name: "Express", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg" },
        { name: "Django", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" },
        { name: "Flask", icon: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg" },
      ]
    },
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
        { name: "MySQL", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
        { name: "SQLite", icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" },
        { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
      ]
    },
    {
      title: "DevOps & Cloud",
      items: [
        { name: "AWS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg" },
        { name: "Docker", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg" },
        { name: "Git", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
        { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
      ]
    }
  ];

  return (
    <div className="space-y-8">
      {techCategories.map((category, index) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.title}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {category.items.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center p-4 bg-gray-800/50 rounded-lg 
                         hover:bg-gray-700/50 transition-colors duration-300"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 mb-2"
                />
                <span className="text-sm text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};