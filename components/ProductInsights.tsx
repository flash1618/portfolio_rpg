'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Lightbulb, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Users,
  Map,
  Instagram,
  Music,
  Home,
  Tv
} from 'lucide-react';

interface ProductInsight {
  id: string;
  product: string;
  suggestion: string;
  reasoning: string;
  icon: React.ReactNode;
  color: string;
}

const insights: ProductInsight[] = [
  {
    id: 'linkedin-h1b',
    product: 'LinkedIn',
    suggestion: 'Add H1B sponsorship filter for job searches',
    reasoning: 'This will save time and effort for both applicants and recruiters by allowing targeted job searches',
    icon: <Users className="w-6 h-6" />,
    color: 'text-blue-400'
  },
  {
    id: 'google-maps-signals',
    product: 'Google Maps',
    suggestion: 'Indicate approaching red signals and bridge inclines',
    reasoning: 'Help drivers prepare for traffic signals and understand road conditions for safer driving',
    icon: <Map className="w-6 h-6" />,
    color: 'text-green-400'
  },
  {
    id: 'instagram-scroll',
    product: 'Instagram',
    suggestion: 'Add option to disable infinite scroll for reels',
    reasoning: 'Based on research on infinite scrolling behavior and user control preferences',
    icon: <Instagram className="w-6 h-6" />,
    color: 'text-pink-400'
  },
  {
    id: 'spotify-homepod',
    product: 'Spotify',
    suggestion: 'Improve Apple HomePod compatibility',
    reasoning: 'Reduce the 3-second lag when playing music from Spotify on Apple HomePod for better user experience',
    icon: <Music className="w-6 h-6" />,
    color: 'text-green-500'
  },
  {
    id: 'apple-homepod-hub',
    product: 'Apple HomePod',
    suggestion: 'Make compatible with multiple smart devices like Alexa',
    reasoning: 'Allow integration with smart bulbs, fans, etc. so users don\'t need to buy multiple smart home systems',
    icon: <Home className="w-6 h-6" />,
    color: 'text-gray-400'
  },
  {
    id: 'streaming-student-plan',
    product: 'Streaming Services',
    suggestion: 'Collaborate on affordable student plan ($5/month)',
    reasoning: 'Allow students to watch up to 5 shows per month from any platform with single-device login to prevent sharing',
    icon: <Tv className="w-6 h-6" />,
    color: 'text-red-400'
  }
];

export default function ProductInsights() {
  const [expandedInsight, setExpandedInsight] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-game-card to-game-border border border-game-border rounded-xl p-8"
    >
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-16 h-16 bg-gradient-to-br from-game-gold to-game-red rounded-full mx-auto mb-4 flex items-center justify-center"
        >
          <Lightbulb className="w-8 h-8 text-white" />
        </motion.div>
        <h3 className="text-2xl font-bold text-white mb-2 font-game">Product Insights</h3>
        <p className="text-gray-300">
          Daily app usage reveals opportunities for improvement. Here are my suggestions for better user experiences:
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-game-bg/50 border border-game-border rounded-lg p-4 cursor-pointer hover:border-game-purple/50 transition-all duration-300"
            onClick={() => setExpandedInsight(expandedInsight === insight.id ? null : insight.id)}
          >
            <div className="flex items-start space-x-3">
              <div className={`${insight.color} flex-shrink-0 mt-1`}>
                {insight.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white">{insight.product}</h4>
                  {expandedInsight === insight.id ? (
                    <ChevronUp className="w-5 h-5 text-game-purple" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-game-purple" />
                  )}
                </div>
                <p className="text-sm text-gray-300 mt-1">{insight.suggestion}</p>
                
                <AnimatePresence>
                  {expandedInsight === insight.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 pt-3 border-t border-game-border"
                    >
                      <p className="text-sm text-gray-400 leading-relaxed">
                        <span className="text-game-gold font-medium">Reasoning:</span> {insight.reasoning}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-gray-400 mb-4">
          These insights demonstrate my user-centric thinking and problem-solving approach to product improvement.
        </p>
        <motion.a
          href="https://sb7867.wixsite.com/snehalbondre"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center space-x-2 text-game-purple hover:text-white transition-colors"
        >
          <span>View full portfolio</span>
          <ExternalLink className="w-4 h-4" />
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
