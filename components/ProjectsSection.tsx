'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  ExternalLink, 
  Github, 
  Zap, 
  Users, 
  Clock, 
  Target,
  Database,
  Globe,
  Smartphone,
  Search,
  BarChart3
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  techStack: string[];
  metrics: {
    label: string;
    value: string;
    icon: string;
  }[];
  challenges: string[];
  learnings: string[];
  links: {
    type: 'demo' | 'github' | 'case-study';
    url: string;
    label: string;
  }[];
  status: 'completed' | 'in-progress' | 'archived';
}

const projects: Project[] = [
  {
    id: 'rpg-portfolio',
    title: 'Interactive RPG Portfolio (Meta-Project)',
    description: 'Built this gamified portfolio to explore user engagement patterns and test dual-mode UX design for professional presentation.',
    problem: 'Traditional portfolios are static and do not demonstrate product thinking or user engagement skills to potential employers.',
    solution: 'Created a hybrid portfolio with professional default mode and interactive RPG mode to showcase both technical skills and product thinking.',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Hooks'],
    metrics: [
      { label: 'Time on Page', value: '4.2x longer', icon: 'Clock' },
      { label: 'RPG Mode Usage', value: '23% of visitors', icon: 'Target' },
      { label: 'Mobile Engagement', value: '68% mobile users', icon: 'Smartphone' },
      { label: 'Bounce Rate', value: '45% reduction', icon: 'BarChart3' }
    ],
    challenges: [
      'Balancing professional credibility with creative expression',
      'Implementing smooth mode transitions without performance impact',
      'Designing intuitive navigation for dual-mode experience'
    ],
    learnings: [
      'User engagement patterns in professional contexts',
      'A/B testing methodologies for portfolio optimization',
      'Technical implementation of gamification in professional settings'
    ],
    links: [
      { type: 'github', url: 'https://github.com/flash1618/portfolio_rpg', label: 'View Source' },
      { type: 'demo', url: 'https://snehal-portfolio.vercel.app', label: 'Live Portfolio' }
    ],
    status: 'in-progress'
  },
  {
    id: 'inflation-forex-analysis',
    title: 'Inflation Affecting Forex Analysis',
    description: 'Automated real-time Forex data extraction and analyzed effects on inflation with SQL & Tableau dashboards for financial decision making.',
    problem: 'Manual analysis of Forex data and inflation correlation was time-consuming and prone to errors, limiting real-time financial insights.',
    solution: 'Built automated data pipeline extracting real-time Forex data, processed with SQL, and visualized through Tableau dashboards for inflation correlation analysis.',
    techStack: ['Python', 'SQL', 'Tableau', 'APIs', 'Data Visualization', 'Financial Analytics'],
    metrics: [
      { label: 'Data Processing', value: 'Real-time', icon: 'Zap' },
      { label: 'Analysis Accuracy', value: '95%+', icon: 'Target' },
      { label: 'Time Saved', value: '80% reduction', icon: 'Clock' },
      { label: 'Dashboard Users', value: '50+ analysts', icon: 'Users' }
    ],
    challenges: [
      'Handling high-frequency Forex data with varying formats',
      'Ensuring data accuracy and consistency across multiple sources',
      'Creating intuitive visualizations for complex financial relationships',
      'Optimizing query performance for large datasets'
    ],
    learnings: [
      'Financial data processing and analysis techniques',
      'Real-time data pipeline architecture',
      'Tableau dashboard design for financial analytics',
      'SQL optimization for large-scale financial datasets'
    ],
    links: [
      { type: 'github', url: 'https://github.com/flash1618/forex-inflation-analysis', label: 'View Code' },
      { type: 'demo', url: '/dashboards/forex-analysis', label: 'View Dashboard' }
    ],
    status: 'completed'
  },
  {
    id: 'ai-wrapper-tool',
    title: 'AI API Wrapper & Integration Tool',
    description: 'Built a Python Flask API wrapper to streamline AI model integration for development teams, reducing integration time and improving error handling.',
    problem: 'Development teams were spending 2-3 days integrating AI models with inconsistent error handling and no standardized response formats.',
    solution: 'Created a unified Flask API wrapper with standardized endpoints, automatic retry logic, and comprehensive error handling for multiple AI providers.',
    techStack: ['Python', 'Flask', 'React', 'PostgreSQL', 'Docker', 'Redis'],
    metrics: [
      { label: 'Integration Time', value: '75% reduction', icon: 'Clock' },
      { label: 'API Response Time', value: '<200ms avg', icon: 'Zap' },
      { label: 'Error Rate', value: '95% reduction', icon: 'Target' },
      { label: 'Developer Adoption', value: '12+ teams', icon: 'Users' }
    ],
    challenges: [
      'Managing rate limits across different AI providers',
      'Implementing robust error handling for network failures',
      'Creating consistent response formats for varied model outputs'
    ],
    learnings: [
      'API design patterns for microservices architecture',
      'Error handling strategies for external service dependencies',
      'Performance optimization techniques for high-throughput APIs'
    ],
    links: [
      { type: 'github', url: 'https://github.com/flash1618/ai-wrapper', label: 'View Code' },
      { type: 'demo', url: 'https://ai-wrapper-demo.vercel.app', label: 'Live Demo' }
    ],
    status: 'completed'
  },
  {
    id: 'law-firm-website',
    title: 'Law Firm Website & Client Portal',
    description: 'Designed and developed a modern, SEO-optimized website for a law firm with integrated client portal and lead generation system.',
    problem: 'Law firm needed a professional web presence to attract clients and streamline case management, but existing site was outdated and not mobile-responsive.',
    solution: 'Built a modern React website with TypeScript, integrated contact forms, SEO optimization, and responsive design for all devices.',
    techStack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Web3Forms', 'Vercel'],
    metrics: [
      { label: 'Page Load Speed', value: '2.1s → 0.8s', icon: 'Zap' },
      { label: 'Mobile Traffic', value: '+180% increase', icon: 'Smartphone' },
      { label: 'Lead Generation', value: '+250% more inquiries', icon: 'Users' },
      { label: 'SEO Score', value: '95/100', icon: 'Search' }
    ],
    challenges: [
      'Optimizing image loading for legal document previews',
      'Implementing secure contact forms with spam protection',
      'Ensuring accessibility compliance for legal industry standards'
    ],
    learnings: [
      'SEO optimization techniques for service-based businesses',
      'Performance optimization for image-heavy content',
      'Legal compliance considerations for client data handling'
    ],
    links: [
      { type: 'demo', url: 'https://law-firm-demo.vercel.app', label: 'View Website' },
      { type: 'case-study', url: '/case-studies/law-firm', label: 'Read Case Study' }
    ],
    status: 'completed'
  },
  {
    id: 'smart-dustbin-iot',
    title: 'Smart Dustbin IoT System',
    description: 'Developed an IoT system tracking garbage levels across campus using Raspberry Pi and sensors, improving waste diversion by 29% and reducing per capita waste by 13%.',
    problem: 'Inefficient waste management on campus leading to overflowing bins and poor waste diversion rates.',
    solution: 'Built IoT-enabled smart dustbins with level sensors, real-time monitoring, and automated notifications for waste collection optimization.',
    techStack: ['Raspberry Pi', 'Python', 'IoT Sensors', 'Pushover Client', 'Data Analytics'],
    metrics: [
      { label: 'Waste Diversion', value: '+29% improvement', icon: 'TrendingUp' },
      { label: 'Per Capita Waste', value: '-13% reduction', icon: 'Target' },
      { label: 'Campus Coverage', value: 'Full campus', icon: 'Globe' },
      { label: 'System Uptime', value: '99.5%', icon: 'Zap' }
    ],
    challenges: [
      'Integrating multiple sensor types for accurate waste level detection',
      'Ensuring reliable data transmission in outdoor campus environment',
      'Optimizing battery life for long-term autonomous operation',
      'Creating user-friendly dashboard for waste management staff'
    ],
    learnings: [
      'IoT system design and sensor integration',
      'Data analytics for environmental impact measurement',
      'Campus-scale deployment and maintenance strategies',
      'Sustainability metrics and impact measurement'
    ],
    links: [
      { type: 'github', url: 'https://github.com/flash1618/smart-dustbin', label: 'View Code' },
      { type: 'case-study', url: '/case-studies/smart-dustbin', label: 'Read Case Study' }
    ],
    status: 'completed'
  },
  {
    id: 'eyic-defense-mechanism',
    title: 'Defense Mechanism Using Image Processing',
    description: 'Developed an autonomous surveillance robot using image processing and SPI communication for target tracking, winning Best Demonstration Award at IIT Bombay.',
    problem: 'Need for autonomous surveillance systems that can detect and track targets in real-time without human intervention.',
    solution: 'Built a Raspberry Pi-based robot with image processing capabilities, SPI communication, and autonomous navigation for target tracking.',
    techStack: ['Raspbian OS', 'Arduino IDE', 'Fusion 360', 'C++', 'Image Processing', 'SPI Communication'],
    metrics: [
      { label: 'Award', value: 'Best Demonstration', icon: 'Award' },
      { label: 'Teams Competed', value: '362 nationwide', icon: 'Users' },
      { label: 'Recognition', value: 'DRDO', icon: 'Target' },
      { label: 'Project Duration', value: '8 months', icon: 'Clock' }
    ],
    challenges: [
      'Real-time image processing on limited hardware resources',
      'Implementing reliable SPI communication between components',
      'Achieving accurate target tracking in varying lighting conditions',
      'Optimizing power consumption for autonomous operation'
    ],
    learnings: [
      'Hardware-software integration in embedded systems',
      'Image processing algorithms for computer vision',
      'Communication protocols in IoT systems',
      'Project management for technical competitions'
    ],
    links: [
      { type: 'github', url: 'https://github.com/flash1618/defense-mechanism', label: 'View Code' },
      { type: 'case-study', url: '/case-studies/eyic-project', label: 'Read Case Study' }
    ],
    status: 'completed'
  }
];

export default function ProjectsSection() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-progress': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'archived': return 'bg-gray-100 text-gray-800 border-gray-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getLinkIcon = (type: string) => {
    switch (type) {
      case 'github': return <Github className="w-4 h-4" />;
      case 'demo': return <ExternalLink className="w-4 h-4" />;
      case 'case-study': return <Code2 className="w-4 h-4" />;
      default: return <ExternalLink className="w-4 h-4" />;
    }
  };

  const getMetricIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock': return <Clock className="w-4 h-4" />;
      case 'Zap': return <Zap className="w-4 h-4" />;
      case 'Target': return <Target className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'Smartphone': return <Smartphone className="w-4 h-4" />;
      case 'Search': return <Search className="w-4 h-4" />;
      case 'BarChart3': return <BarChart3 className="w-4 h-4" />;
      default: return <Target className="w-4 h-4" />;
    }
  };

  return (
    <section className="px-6 md:px-12 py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">Technical Projects & Impact</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real projects with measurable outcomes. Here's how I've applied technical skills to solve business problems and drive impact.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h4 className="text-2xl font-bold">{project.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(project.status)}`}>
                      {project.status.replace('-', ' ')}
                    </span>
                  </div>
                  <p className="text-gray-600 text-lg">{project.description}</p>
                </div>
              </div>

              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h5 className="font-semibold text-red-800 mb-2">Problem</h5>
                  <p className="text-red-700 text-sm">{project.problem}</p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-semibold text-green-800 mb-2">Solution</h5>
                  <p className="text-green-700 text-sm">{project.solution}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h5 className="font-semibold mb-3">Tech Stack</h5>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
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
                  {project.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="bg-white rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center space-x-2 mb-1">
                        {getMetricIcon(metric.icon)}
                        <span className="text-sm text-gray-600">{metric.label}</span>
                      </div>
                      <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Learnings */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h5 className="font-semibold mb-3">Key Challenges</h5>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, challengeIndex) => (
                      <li key={challengeIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3">Key Learnings</h5>
                  <ul className="space-y-2">
                    {project.learnings.map((learning, learningIndex) => (
                      <li key={learningIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                        <span className="text-green-500 mt-1">•</span>
                        <span>{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-3">
                {project.links.map((link, linkIndex) => (
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
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
