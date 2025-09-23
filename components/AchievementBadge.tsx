'use client';

import { motion } from 'framer-motion';
import { Achievement } from '@/lib/data';

interface AchievementBadgeProps {
  achievement: Achievement;
  size?: 'sm' | 'md' | 'lg';
}

export default function AchievementBadge({ achievement, size = 'md' }: AchievementBadgeProps) {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'common': return 'border-gray-500 bg-gray-500/20';
      case 'rare': return 'border-game-blue bg-game-blue/20';
      case 'epic': return 'border-game-purple bg-game-purple/20';
      case 'legendary': return 'border-game-gold bg-game-gold/20';
      default: return 'border-gray-500 bg-gray-500/20';
    }
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'sm': return 'w-12 h-12 text-lg';
      case 'md': return 'w-16 h-16 text-2xl';
      case 'lg': return 'w-20 h-20 text-3xl';
      default: return 'w-16 h-16 text-2xl';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={`relative ${getSizeClasses(size)} rounded-full border-2 ${getRarityColor(achievement.rarity)} flex items-center justify-center cursor-pointer group`}
      title={achievement.description}
    >
      {/* Achievement Icon */}
      <div className="text-center">
        <div className="text-2xl mb-1">{achievement.icon}</div>
        {size !== 'sm' && (
          <div className="text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity">
            {achievement.name}
          </div>
        )}
      </div>

      {/* Glow Effect for Unlocked Achievements */}
      {achievement.unlocked && (
        <motion.div
          animate={{ 
            boxShadow: [
              '0 0 10px rgba(139, 92, 246, 0.5)',
              '0 0 20px rgba(139, 92, 246, 0.8)',
              '0 0 10px rgba(139, 92, 246, 0.5)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 rounded-full"
        />
      )}

      {/* Lock Overlay for Locked Achievements */}
      {!achievement.unlocked && (
        <div className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center">
          <div className="text-gray-500 text-lg">🔒</div>
        </div>
      )}

      {/* Rarity Indicator */}
      <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
        achievement.rarity === 'legendary' ? 'bg-game-gold' :
        achievement.rarity === 'epic' ? 'bg-game-purple' :
        achievement.rarity === 'rare' ? 'bg-game-blue' :
        'bg-gray-500'
      }`} />
    </motion.div>
  );
}
