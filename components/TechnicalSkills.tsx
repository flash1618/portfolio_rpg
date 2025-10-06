'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  Database, 
  Globe, 
  Smartphone, 
  Zap, 
  Shield,
  BarChart3,
  Users,
  GitBranch,
  Cloud
} from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: 'expert' | 'advanced' | 'intermediate' | 'beginner';
    description: string;
  }[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend Development',
    icon: <Globe className="w-6 h-6" />,
    skills: [
      { name: 'React', level: 'expert', description: 'Hooks, Context, Performance optimization' },
      { name: 'TypeScript', level: 'advanced', description: 'Type safety, Interfaces, Generics' },
      { name: 'Next.js', level: 'advanced', description: 'App Router, SSR, API Routes' },
      { name: 'Tailwind CSS', level: 'expert', description: 'Responsive design, Custom components' }
    ]
  },
  {
    name: 'Backend & APIs',
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: 'Python', level: 'advanced', description: 'Flask, FastAPI, Data processing' },
      { name: 'Node.js', level: 'intermediate', description: 'Express, REST APIs' },
      { name: 'SQL', level: 'advanced', description: 'Query optimization, Database design' },
      { name: 'API Design', level: 'expert', description: 'RESTful, GraphQL, Documentation' }
    ]
  },
  {
    name: 'Product & Analytics',
    icon: <BarChart3 className="w-6 h-6" />,
    skills: [
      { name: 'Data Analysis', level: 'expert', description: 'SQL, Python, Statistical analysis' },
      { name: 'A/B Testing', level: 'advanced', description: 'Experiment design, Statistical significance' },
      { name: 'User Research', level: 'expert', description: 'Interviews, Surveys, Personas' },
      { name: 'Product Strategy', level: 'expert', description: 'Roadmapping, Prioritization, OKRs' }
    ]
  },
  {
    name: 'Tools & Platforms',
    icon: <Zap className="w-6 h-6" />,
    skills: [
      { name: 'Figma', level: 'expert', description: 'Design systems, Prototyping, Collaboration' },
      { name: 'Jira', level: 'advanced', description: 'Agile, Sprint planning, Issue tracking' },
      { name: 'Git', level: 'advanced', description: 'Version control, CI/CD, Collaboration' },
      { name: 'Docker', level: 'intermediate', description: 'Containerization, Deployment' }
    ]
  },
  {
    name: 'Cloud & DevOps',
    icon: <Cloud className="w-6 h-6" />,
    skills: [
      { name: 'Vercel', level: 'advanced', description: 'Deployment, Edge functions, Analytics' },
      { name: 'AWS', level: 'intermediate', description: 'EC2, S3, Lambda functions' },
      { name: 'Performance', level: 'expert', description: 'Core Web Vitals, Optimization' },
      { name: 'SEO', level: 'advanced', description: 'Technical SEO, Schema markup' }
    ]
  }
];

export default function TechnicalSkills() {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert': return 'bg-green-100 text-green-800 border-green-200';
      case 'advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'beginner': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'expert': return 'w-full';
      case 'advanced': return 'w-4/5';
      case 'intermediate': return 'w-3/5';
      case 'beginner': return 'w-2/5';
      default: return 'w-2/5';
    }
  };

  return (
    <section className="px-6 md:px-12 py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Technical Capabilities</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Full-stack development skills with a focus on product impact. Here's how I build and measure success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-blue-600">{category.icon}</div>
                <h4 className="text-xl font-bold">{category.name}</h4>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: getLevelWidth(skill.level).replace('w-', '').replace('/', '') + '%' }}
                        transition={{ duration: 0.8, delay: skillIndex * 0.1 }}
                        className={`h-2 rounded-full ${
                          skill.level === 'expert' ? 'bg-green-500' :
                          skill.level === 'advanced' ? 'bg-blue-500' :
                          skill.level === 'intermediate' ? 'bg-yellow-500' :
                          'bg-gray-400'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-white rounded-lg p-8 shadow-md border border-gray-200"
        >
          <h4 className="text-xl font-bold mb-6 text-center">Technical Impact Highlights</h4>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">75%</div>
              <div className="text-sm text-gray-600">Reduction in API integration time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-sm text-gray-600">Reduction in error rates</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.2x</div>
              <div className="text-sm text-gray-600">Increase in user engagement</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
