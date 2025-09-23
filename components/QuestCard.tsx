'use client';

import { motion } from 'framer-motion';
import { Quest } from '@/lib/data';
import { 
  Sword, 
  Shield, 
  Crown, 
  Star, 
  TrendingUp, 
  Users, 
  Clock, 
  MapPin,
  ChevronRight,
  Lock,
  CheckCircle
} from 'lucide-react';
import { useState } from 'react';

interface QuestCardProps {
  quest: Quest;
  onSelect: (quest: Quest) => void;
}

export default function QuestCard({ quest, onSelect }: QuestCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-game-green';
      case 'medium': return 'text-game-blue';
      case 'hard': return 'text-game-gold';
      case 'legendary': return 'text-game-red';
      default: return 'text-gray-400';
    }
  };

  const getDifficultyIcon = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return <Star className="w-4 h-4" />;
      case 'medium': return <Shield className="w-4 h-4" />;
      case 'hard': return <Sword className="w-4 h-4" />;
      case 'legendary': return <Crown className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return <CheckCircle className="w-5 h-5 text-game-green" />;
      case 'available': return <ChevronRight className="w-5 h-5 text-game-blue" />;
      case 'locked': return <Lock className="w-5 h-5 text-gray-500" />;
      default: return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`quest-card rounded-xl p-6 cursor-pointer relative overflow-hidden ${
        quest.status === 'locked' ? 'opacity-60 cursor-not-allowed' : ''
      }`}
      onClick={() => quest.status !== 'locked' && onSelect(quest)}
    >
      {/* Quest Type Badge */}
      <div className="absolute top-4 right-4">
        <div className={`px-3 py-1 rounded-full text-xs font-bold ${
          quest.type === 'boss' 
            ? 'bg-game-red/20 text-game-red border border-game-red/50' 
            : quest.type === 'main'
            ? 'bg-game-blue/20 text-game-blue border border-game-blue/50'
            : 'bg-game-green/20 text-game-green border border-game-green/50'
        }`}>
          {quest.type === 'boss' ? 'BOSS BATTLE' : quest.type === 'main' ? 'MAIN QUEST' : 'SIDE QUEST'}
        </div>
      </div>

      {/* Quest Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2 font-game">{quest.title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{quest.description}</p>
        </div>
        <div className="ml-4">
          {getStatusIcon(quest.status)}
        </div>
      </div>

      {/* Quest Details */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-2">
          <div className={`${getDifficultyColor(quest.difficulty)} flex items-center space-x-1`}>
            {getDifficultyIcon(quest.difficulty)}
            <span className="text-sm font-medium capitalize">{quest.difficulty}</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{quest.duration}</span>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{quest.company}</span>
        </div>
        <div className="flex items-center space-x-2 text-game-gold">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">{quest.rewards.length} Rewards</span>
        </div>
      </div>

      {/* Rewards Preview */}
      <div className="mb-4">
        <h4 className="text-sm font-bold text-gray-300 mb-2">Rewards:</h4>
        <div className="flex flex-wrap gap-2">
          {quest.rewards.slice(0, 3).map((reward, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-game-gold/20 border border-game-gold/50 text-game-gold px-2 py-1 rounded text-xs font-medium"
            >
              {reward.icon} {reward.name}
            </motion.span>
          ))}
          {quest.rewards.length > 3 && (
            <span className="bg-gray-600/20 border border-gray-600/50 text-gray-400 px-2 py-1 rounded text-xs">
              +{quest.rewards.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Action Button */}
      <motion.div
        animate={{ 
          scale: isHovered ? 1.05 : 1,
          opacity: quest.status === 'locked' ? 0.5 : 1
        }}
        className="flex items-center justify-center space-x-2 text-game-blue font-bold"
      >
        <span className="text-sm">
          {quest.status === 'completed' ? 'View Results' : 
           quest.status === 'available' ? 'Start Quest' : 
           'Locked'}
        </span>
        {quest.status !== 'locked' && <ChevronRight className="w-4 h-4" />}
      </motion.div>

      {/* Hover Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        className="absolute inset-0 bg-gradient-to-r from-game-purple to-game-blue"
      />
    </motion.div>
  );
}
