'use client';

import { motion } from 'framer-motion';
import { 
  Calendar, 
  MapPin, 
  ExternalLink, 
  Award, 
  Users, 
  TrendingUp,
  Code2,
  Database,
  Smartphone,
  Globe,
  Target,
  Zap
} from 'lucide-react';

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'work' | 'education' | 'project' | 'volunteer';
  description: string;
  achievements: string[];
  techStack: string[];
  metrics: {
    label: string;
    value: string;
    icon: string;
  }[];
  image?: string;
  links?: {
    type: 'website' | 'github' | 'demo' | 'case-study';
    url: string;
    label: string;
  }[];
}

const experiences: Experience[] = [
  {
    id: 'edsoma-pm',
    title: 'Product Manager',
    company: 'Edsoma',
    location: 'Remote',
    duration: 'May 2023 – Present',
    type: 'work',
    description: 'Leading AI-based reading app development with focus on teacher engagement and student progress tracking.',
    achievements: [
      'Led AI-based reading app with 15% engagement growth and 304% download increase',
      'Launched Teacher Dashboard website, onboarding 60,000+ users',
      'Optimized product via post-launch analytics and user feedback',
      'Translated business needs into Jira user stories, boosting sprint velocity by 6%'
    ],
    techStack: ['React', 'Node.js', 'AI/ML', 'Analytics', 'Jira', 'Agile'],
    metrics: [
      { label: 'User Growth', value: '304%', icon: 'TrendingUp' },
      { label: 'Engagement', value: '+15%', icon: 'Target' },
      { label: 'Users Onboarded', value: '60,000+', icon: 'Users' },
      { label: 'Sprint Velocity', value: '+6%', icon: 'Zap' }
    ],
    image: '/images/edsoma-dashboard.jpg',
    links: [
      { type: 'website', url: 'https://edsoma.com', label: 'View Product' }
    ]
  },
  {
    id: 'brightmind-pm',
    title: 'Product Manager',
    company: 'BrightMind / StreetCare',
    location: 'New York, NY',
    duration: 'Jan 2023 – Apr 2023',
    type: 'work',
    description: 'Managed iOS/Android apps and website for social impact organization focused on community support.',
    achievements: [
      'Managed iOS/Android apps and website for social impact',
      'Conducted A/B testing to improve volunteer engagement',
      'Prioritized backlog features and collaborated with cross-functional teams',
      'Ensured smooth integration of new features and user feedback'
    ],
    techStack: ['iOS', 'Android', 'React Native', 'A/B Testing', 'Analytics'],
    metrics: [
      { label: 'Volunteer Engagement', value: 'Improved', icon: 'Users' },
      { label: 'App Performance', value: 'Optimized', icon: 'Smartphone' },
      { label: 'User Feedback', value: 'Integrated', icon: 'Target' }
    ],
    image: '/images/brightmind-app.jpg'
  },
  {
    id: 'nyu-lms',
    title: 'LMS Consultant',
    company: 'NYU IT',
    location: 'New York, NY',
    duration: 'Jun 2021 – Dec 2022',
    type: 'work',
    description: 'Assisted faculty and students with learning management system issues and implemented process improvements.',
    achievements: [
      'Assisted 1,500+ faculty & students on LMS issues',
      'Implemented Agile processes improving productivity by 10%',
      'Enhanced user experience and adoption rates',
      'Maintained high academic standards while improving efficiency'
    ],
    techStack: ['LMS Systems', 'Agile', 'User Support', 'Process Improvement'],
    metrics: [
      { label: 'Users Assisted', value: '1,500+', icon: 'Users' },
      { label: 'Productivity', value: '+10%', icon: 'TrendingUp' },
      { label: 'Satisfaction', value: 'High', icon: 'Target' }
    ],
    image: '/images/nyu-lms.jpg'
  },
  {
    id: 'nyu-capstone',
    title: 'Product Manager / Capstone Project Lead',
    company: 'NYU Tandon - Virtual Technology Hub',
    location: 'New York, NY',
    duration: 'Jun 2022 – Dec 2022',
    type: 'project',
    description: 'Led capstone project developing virtual technology hub with comprehensive user research and data analytics.',
    achievements: [
      'Conducted 80+ interviews & surveys for user research',
      'Launched WordPress website for 200+ users',
      'Built SQL/Tableau dashboards, reducing manual reporting by 7 hours/week',
      'Implemented data-driven decision making processes'
    ],
    techStack: ['WordPress', 'SQL', 'Tableau', 'User Research', 'Data Analytics'],
    metrics: [
      { label: 'User Research', value: '80+ interviews', icon: 'Users' },
      { label: 'Time Saved', value: '7 hours/week', icon: 'Zap' },
      { label: 'Users Served', value: '200+', icon: 'Target' }
    ],
    image: '/images/nyu-capstone.jpg'
  },
  {
    id: 'broccolipizza-founder',
    title: 'Founder / Product Manager',
    company: 'Broccolipizza',
    location: 'Remote',
    duration: 'Jul 2020 – Dec 2021',
    type: 'project',
    description: 'Built and scaled recipe platform with focus on user engagement and content optimization.',
    achievements: [
      'Built recipe platform with 5k subscribers in 4 months',
      'Optimized engagement via A/B testing',
      'Developed content strategy and user acquisition',
      'Managed product roadmap and feature prioritization'
    ],
    techStack: ['Web Development', 'A/B Testing', 'Content Strategy', 'Analytics'],
    metrics: [
      { label: 'Subscribers', value: '5k', icon: 'Users' },
      { label: 'Growth Period', value: '4 months', icon: 'TrendingUp' },
      { label: 'Engagement', value: 'Optimized', icon: 'Target' }
    ],
    image: '/images/broccolipizza.jpg',
    links: [
      { type: 'github', url: 'https://github.com/flash1618/broccolipizza', label: 'View Code' }
    ]
  },
  {
    id: 'campk12-intern',
    title: 'Technical Assistant (Product Team Intern)',
    company: 'CampK-12',
    location: 'Remote',
    duration: 'Jul 2018 – Sep 2018',
    type: 'work',
    description: 'Developed interactive coding games and educational tools for K-12 students.',
    achievements: [
      'Developed interactive coding games using MIT App Inventor',
      'Reduced student learning time by 50%',
      'Created engaging educational content',
      'Collaborated with product team on user experience'
    ],
    techStack: ['MIT App Inventor', 'Educational Technology', 'Game Development'],
    metrics: [
      { label: 'Learning Time', value: '-50%', icon: 'Zap' },
      { label: 'Student Impact', value: 'High', icon: 'Users' },
      { label: 'Engagement', value: 'Improved', icon: 'Target' }
    ],
    image: '/images/campk12-games.jpg'
  }
];

export default function ExperienceSection() {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'work': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'education': return 'bg-green-100 text-green-800 border-green-200';
      case 'project': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'volunteer': return 'bg-orange-100 text-orange-800 border-orange-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'TrendingUp': return <TrendingUp className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Target': return <Target className="w-4 h-4" />;
      case 'Zap': return <Zap className="w-4 h-4" />;
      case 'Award': return <Award className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'website': return <Globe className="w-4 h-4" />;
      case 'github': return <Code2 className="w-4 h-4" />;
      case 'demo': return <ExternalLink className="w-4 h-4" />;
      case 'case-study': return <Database className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
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
          <h3 className="text-3xl font-bold mb-4">Professional Experience</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A journey through product management, technical leadership, and social impact. 
            Each role has shaped my approach to building meaningful products.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Experience Header */}
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-2xl font-bold">{experience.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getTypeColor(experience.type)}`}>
                      {experience.type.toUpperCase()}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 text-gray-600 mb-2">
                    <span className="font-semibold text-lg">{experience.company}</span>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{experience.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{experience.duration}</span>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg">{experience.description}</p>
                </div>
                
                {/* Experience Image Placeholder */}
                <div className="mt-4 lg:mt-0 lg:ml-6">
                  <div className="w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-sm text-center">
                      {experience.image ? 'Image Placeholder' : 'No Image'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Achievements */}
              <div className="mb-6">
                <h5 className="font-semibold mb-3">Key Achievements</h5>
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, achievementIndex) => (
                    <li key={achievementIndex} className="text-gray-700 flex items-start space-x-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h5 className="font-semibold mb-3">Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {experience.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics */}
              <div className="mb-6">
                <h5 className="font-semibold mb-3">Key Metrics & Impact</h5>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {experience.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-1">
                        {getMetricIcon(metric.icon)}
                        <span className="text-sm text-gray-600">{metric.label}</span>
                      </div>
                      <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Links */}
              {experience.links && experience.links.length > 0 && (
                <div className="flex flex-wrap gap-3">
                  {experience.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      {getLinkIcon(link.type)}
                      <span className="text-sm font-medium">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
