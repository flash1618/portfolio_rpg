'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Quest } from '@/lib/data';
import { 
  X, 
  TrendingUp, 
  Users, 
  Clock, 
  MapPin, 
  Target, 
  Lightbulb, 
  Trophy,
  Star,
  Shield,
  Sword,
  Crown
} from 'lucide-react';

interface QuestModalProps {
  quest: Quest | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function QuestModal({ quest, isOpen, onClose }: QuestModalProps) {
  if (!quest) return null;

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return <Star className="w-5 h-5 text-game-green" />;
      case 'medium': return <Shield className="w-5 h-5 text-game-blue" />;
      case 'hard': return <Sword className="w-5 h-5 text-game-gold" />;
      case 'legendary': return <Crown className="w-5 h-5 text-game-red" />;
      default: return <Star className="w-5 h-5" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-game-card to-game-border border border-game-border rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-game-card/95 backdrop-blur-sm border-b border-game-border p-6 rounded-t-2xl">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {getDifficultyIcon(quest.difficulty)}
                    <span className="text-sm font-bold text-game-gold uppercase tracking-wide">
                      {quest.difficulty} {quest.type === 'boss' ? 'BOSS BATTLE' : 'QUEST'}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white font-game mb-2">{quest.title}</h2>
                  <p className="text-gray-300 text-lg">{quest.description}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Quest Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center space-x-3 bg-game-bg/50 rounded-lg p-4">
                  <Clock className="w-5 h-5 text-game-blue" />
                  <div>
                    <div className="text-sm text-gray-400">Duration</div>
                    <div className="font-bold text-white">{quest.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-game-bg/50 rounded-lg p-4">
                  <MapPin className="w-5 h-5 text-game-green" />
                  <div>
                    <div className="text-sm text-gray-400">Company</div>
                    <div className="font-bold text-white">{quest.company}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 bg-game-bg/50 rounded-lg p-4">
                  <Trophy className="w-5 h-5 text-game-gold" />
                  <div>
                    <div className="text-sm text-gray-400">Status</div>
                    <div className="font-bold text-game-green capitalize">{quest.status}</div>
                  </div>
                </div>
              </div>

              {/* Challenge */}
              <div className="bg-game-bg/30 rounded-xl p-6 border border-game-border">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Target className="w-6 h-6 text-game-red mr-3" />
                  The Challenge
                </h3>
                <p className="text-gray-300 leading-relaxed">{quest.content.challenge}</p>
              </div>

              {/* Approach */}
              <div className="bg-game-bg/30 rounded-xl p-6 border border-game-border">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Lightbulb className="w-6 h-6 text-game-gold mr-3" />
                  My Approach
                </h3>
                <p className="text-gray-300 leading-relaxed">{quest.content.approach}</p>
              </div>

              {/* Results */}
              <div className="bg-game-bg/30 rounded-xl p-6 border border-game-border">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Trophy className="w-6 h-6 text-game-green mr-3" />
                  Results Achieved
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">{quest.content.results}</p>
                
                {/* Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quest.content.metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gradient-to-r from-game-purple/20 to-game-blue/20 border border-game-purple/30 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-sm text-gray-400">{metric.label}</div>
                          <div className="text-2xl font-bold text-white">{metric.value}</div>
                        </div>
                        <div className="text-3xl">{metric.icon}</div>
                      </div>
                      <div className="text-sm text-game-green mt-2">
                        {metric.change}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tools Used */}
              <div className="bg-game-bg/30 rounded-xl p-6 border border-game-border">
                <h3 className="text-xl font-bold text-white mb-4">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-3">
                  {quest.content.tools.map((tool, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-game-purple/20 border border-game-purple/50 text-game-purple px-4 py-2 rounded-full font-medium"
                    >
                      {tool}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Rewards */}
              <div className="bg-gradient-to-r from-game-gold/10 to-game-red/10 rounded-xl p-6 border border-game-gold/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                  <Star className="w-6 h-6 text-game-gold mr-3" />
                  Rewards Earned
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quest.rewards.map((reward, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-game-bg/50 rounded-lg p-4 border border-game-gold/20"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="text-2xl">{reward.icon}</div>
                        <div>
                          <div className="font-bold text-white">{reward.name}</div>
                          <div className="text-sm text-game-gold">{reward.value}</div>
                          <div className="text-xs text-gray-400">{reward.description}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
