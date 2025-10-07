'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Download, 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Clock, 
  MapPin,
  Briefcase,
  Lightbulb,
  Rocket,
  Laptop,
  Code2,
  Star,
  Award,
  Target
} from 'lucide-react';
import ProjectsSection from './ProjectsSection';
import TechnicalSkills from './TechnicalSkills';
import ExperienceSection from './ExperienceSection';
import LeadershipSection from './LeadershipSection';
import StickyContact from './StickyContact';

interface Analytics {
  visitorCount: number;
  averageTime: number;
  countries: number;
  mobilePercentage: number;
  rpgModeUsage: number;
}

export default function ProfessionalLayout() {
  const [analytics, setAnalytics] = useState<Analytics>({
    visitorCount: 1247,
    averageTime: 3.2,
    countries: 12,
    mobilePercentage: 68,
    rpgModeUsage: 23
  });

  // Professional mode only - no RPG toggle needed

  const productIdeas = [
    {
      company: "LinkedIn",
      icon: <Briefcase className="w-6 h-6 text-blue-600" />,
      idea: "Add an H-1B sponsorship filter to streamline job search for international candidates and recruiters.",
      impact: "Streamlined recruitment process for global talent"
    },
    {
      company: "Google Maps",
      icon: <Rocket className="w-6 h-6 text-green-600" />,
      idea: "Introduce a 'smart signal awareness' feature using AI to detect upcoming red lights and elevation changes.",
      impact: "Enhanced driver preparedness and safety"
    },
    {
      company: "Instagram",
      icon: <Lightbulb className="w-6 h-6 text-pink-500" />,
      idea: "Let users optionally disable infinite scroll to promote mindful usage and improve mental well-being.",
      impact: "Better mental health and mindful content consumption"
    },
    {
      company: "Spotify",
      icon: <Laptop className="w-6 h-6 text-green-500" />,
      idea: "Enable cross-ecosystem sync between HomePod, Alexa, and Google Home for seamless playback.",
      impact: "Unified smart home audio experience"
    },
    {
      company: "Apple Home",
      icon: <Code2 className="w-6 h-6 text-gray-800" />,
      idea: "Broaden HomeKit compatibility to support affordable IoT devices; reduce ecosystem lock-in.",
      impact: "More accessible smart home solutions"
    },
    {
      company: "Streaming Platforms",
      icon: <Rocket className="w-6 h-6 text-purple-500" />,
      idea: "Collaborate on a student multi-platform plan with viewing limits, offering affordability without revenue loss.",
      impact: "Accessible entertainment for students"
    },
    {
      company: "Notion",
      icon: <Target className="w-6 h-6 text-indigo-500" />,
      idea: "Add native A/B testing for product teams using Notion docs, integrating analytics for content experiments.",
      impact: "Data-driven content optimization"
    },
    {
      company: "Uber/Lyft",
      icon: <Users className="w-6 h-6 text-yellow-500" />,
      idea: "Introduce 'quiet reroute suggestions' based on real-time traffic stress detection.",
      impact: "Reduced travel stress and better route planning"
    },
    {
      company: "ChatGPT/Gemini",
      icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
      idea: "Offer a 'transparency toggle' showing prompt breakdowns, context retention, and token logic to help users understand AI reasoning.",
      impact: "Improved AI transparency and user understanding"
    }
  ];

  const achievements = [
    { metric: "2+ Years", label: "Product Management Experience", icon: <Briefcase className="w-5 h-5" /> },
    { metric: "40%", label: "User Engagement Increase", icon: <TrendingUp className="w-5 h-5" /> },
    { metric: "100+", label: "Lives Impacted", icon: <Users className="w-5 h-5" /> },
    { metric: "95%", label: "Stakeholder Satisfaction", icon: <Award className="w-5 h-5" /> }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <StickyContact />
      
      {/* Header with Analytics */}
      <header className="flex items-center justify-between p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold tracking-tight">Snehal Bondre</h1>
          <div className="hidden md:flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{analytics.visitorCount.toLocaleString()} visitors</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{analytics.averageTime}min avg</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{analytics.countries} countries</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <a
            href="mailto:sb7867@nyu.edu"
            className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            I Build Products That Connect
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tech, Design, and Impact
            </span>
          </h2>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Product Manager | UX Thinker | Data-Driven Storyteller
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-4xl mx-auto">
            I'm Snehal Bondre — a Product Manager with 2+ years of experience turning complex ideas into meaningful products. 
            From improving reading engagement at Edsoma to mentoring founders at NYU Stern, my goal is simple: 
            build products that make people feel empowered, not overwhelmed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="mailto:sb7867@nyu.edu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
            >
              <Mail className="w-5 h-5" />
              <span>Contact Me</span>
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/snehal-bondre/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center space-x-2"
            >
              <ExternalLink className="w-5 h-5" />
              <span>LinkedIn</span>
            </motion.a>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <div className="text-3xl font-bold text-blue-600 mb-2">{achievement.metric}</div>
                <div className="text-sm text-gray-600">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 py-16 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl font-bold mb-6">About Me</h3>
          <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
            <p>
              I started my journey at the intersection of technology and human behavior. With a Master's in Management of Technology, 
              I learned to bridge the gap between engineering and business — translating user needs into scalable, data-driven products.
            </p>
            <p>
              At Edsoma, I led initiatives that transformed how teachers track reading progress in real time. I've also mentored 
              early-stage founders at NYU Stern, contributed to social-impact projects like BrightMind and StreetCare, and led 
              hardware/software projects at IIT Bombay and RAIT.
            </p>
            <p>
              I thrive on creating products that solve real problems and bring positive change, blending data insights, user empathy, 
              and design thinking to deliver meaningful experiences.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Product Thinking Playground */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">🧠 Product Thinking Playground (2025 Edition)</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These are ongoing thought experiments on how everyday products could evolve with better UX, 
              data ethics, and AI integration. Each idea reflects my approach to product innovation:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productIdeas.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {item.icon}
                  <h4 className="font-semibold text-lg">{item.company}</h4>
                </div>
                <p className="text-gray-600 mb-3 leading-relaxed">{item.idea}</p>
                <div className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {item.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Leadership & Achievements */}
      <LeadershipSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Technical Skills */}
      <TechnicalSkills />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-gray-400">sb7867@nyu.edu</p>
              <p className="text-gray-400">(646) 417-0553</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2">
                <a href="https://www.linkedin.com/in/snehal-bondre/" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                <br />
                <a href="https://sb7867.wixsite.com/snehalbondre" className="text-gray-400 hover:text-white transition-colors">Portfolio</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Analytics</h4>
              <p className="text-gray-400">{analytics.visitorCount.toLocaleString()} visitors</p>
              <p className="text-gray-400">{analytics.rpgModeUsage}% tried RPG mode</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-gray-400">
            <p>© 2025 Snehal Bondre | Built with React, Next.js & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
