'use client';

import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  TrendingUp, 
  Target, 
  Zap,
  Globe,
  Code2,
  Lightbulb,
  Star,
  Trophy
} from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  impact: string;
  icon: string;
  category: 'award' | 'leadership' | 'innovation' | 'social-impact';
}

const achievements: Achievement[] = [
  {
    id: 'nyu-stern-mentor',
    title: 'Hackathon Mentor',
    organization: 'NYU Stern',
    year: '2022',
    description: 'Guided student teams to design sustainability-focused hardware solutions during hackathon events.',
    impact: 'Mentored 20+ students in developing innovative sustainability solutions',
    icon: 'Globe',
    category: 'social-impact'
  },
  {
    id: 'iit-best-demonstration',
    title: 'Best Demonstration Award',
    organization: 'IIT Bombay - e-Yantra Ideas Competition',
    year: '2019',
    description: 'Awarded Best Demonstration for project "Defense Mechanism System using Image Processing" among 362 nationwide shortlisted teams.',
    impact: 'Recognized by DRDO for technical excellence in autonomous surveillance systems',
    icon: 'Trophy',
    category: 'award'
  },
  {
    id: 'entrepreneurship-club-founder',
    title: 'Entrepreneurship Club Founder',
    organization: 'RAIT',
    year: '2018-2020',
    description: 'Founded a club to help students take projects from ideation to implementation by connecting them with business leaders.',
    impact: 'Empowered 50+ students to transform ideas into viable business projects',
    icon: 'Lightbulb',
    category: 'leadership'
  },
  {
    id: 'ieee-marketing-manager',
    title: 'Marketing Manager',
    organization: 'IEEE RAIT',
    year: '2018-2019',
    description: 'Led a 30-person marketing team to organize tech events, contributing 37% of revenue and increasing engagement 12x in 60 days.',
    impact: 'Generated significant revenue growth and dramatically increased student participation',
    icon: 'TrendingUp',
    category: 'leadership'
  },
  {
    id: 'women-empowering-women',
    title: 'Event Organizer - Women Empowering Women',
    organization: 'IEEE GRSS & Robotics Workshops',
    year: '2018',
    description: 'Organized "Women Empowering Women" event along with Forklift Robotics, Circuit Designing, Arduino & Raspberry Pi workshops.',
    impact: 'Promoted diversity and inclusion in tech, reaching 200+ participants',
    icon: 'Users',
    category: 'social-impact'
  },
  {
    id: 'best-event-whizion',
    title: 'Best Event Award',
    organization: 'Whizion IEEE RAIT',
    year: '2018',
    description: 'Acted as Event Head, achieving the "Best Event" award for outstanding event organization and execution.',
    impact: 'Set new standards for event quality and student engagement',
    icon: 'Award',
    category: 'award'
  },
];

export default function LeadershipSection() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'award': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'leadership': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'innovation': return 'bg-green-100 text-green-800 border-green-200';
      case 'social-impact': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Trophy': return <Trophy className="w-6 h-6" />;
      case 'Lightbulb': return <Lightbulb className="w-6 h-6" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Award': return <Award className="w-6 h-6" />;
      case 'Globe': return <Globe className="w-6 h-6" />;
      case 'Target': return <Target className="w-6 h-6" />;
      case 'Code2': return <Code2 className="w-6 h-6" />;
      default: return <Star className="w-6 h-6" />;
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
          <h3 className="text-3xl font-bold mb-4">Leadership & Achievements</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Recognition for technical excellence, leadership initiatives, and social impact. 
            These achievements reflect my commitment to innovation and community building.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="text-blue-600 flex-shrink-0">
                  {getIcon(achievement.icon)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="text-lg font-bold">{achievement.title}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getCategoryColor(achievement.category)}`}>
                      {achievement.category.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">{achievement.organization}</p>
                  <p className="text-xs text-gray-500 mb-3">{achievement.year}</p>
                  <p className="text-sm text-gray-700 mb-3">{achievement.description}</p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-800 font-medium">Impact:</p>
                    <p className="text-sm text-blue-700">{achievement.impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 border border-blue-200"
        >
          <h4 className="text-xl font-bold text-center mb-6">Impact Summary</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-sm text-gray-600">Awards & Recognition</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Students Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-sm text-gray-600">Leadership Roles</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
              <div className="text-sm text-gray-600">Innovation Projects</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
