'use client';

import { motion } from 'framer-motion';
import { character } from '@/lib/data';
import { Star, TrendingUp, Award, Zap } from 'lucide-react';

export default function CharacterCard() {
  const progressPercentage = (character.xp / (character.xp + character.xpToNext)) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-game-card to-game-border border border-game-border rounded-xl p-6 shadow-2xl"
    >
      {/* Character Header */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="character-avatar w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white">
          {character.name.charAt(0)}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white font-game">{character.name}</h2>
          <p className="text-game-blue text-lg">Level {character.level} {character.class}</p>
        </div>
      </div>

      {/* XP Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-300">Experience</span>
          <span className="text-sm text-game-gold font-bold">{character.xp} / {character.xp + character.xpToNext} XP</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 1, delay: 0.5 }}
            className="progress-bar h-3 rounded-full"
          />
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {Object.entries(character.skills).map(([skill, level]) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + Math.random() * 0.3 }}
            className="bg-game-bg border border-game-border rounded-lg p-3"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm text-gray-300">{skill}</span>
              <span className="text-sm text-game-gold font-bold">{level}</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 1, delay: 0.8 + Math.random() * 0.3 }}
                className="bg-gradient-to-r from-game-purple to-game-blue h-2 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Equipment */}
      <div className="mb-6">
        <h3 className="text-lg font-bold text-white mb-3 flex items-center">
          <Zap className="w-5 h-5 text-game-gold mr-2" />
          Equipment
        </h3>
        <div className="flex flex-wrap gap-2">
          {character.equipment.map((tool, index) => (
            <motion.span
              key={tool}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
              className="bg-game-purple/20 border border-game-purple/50 text-game-purple px-3 py-1 rounded-full text-sm font-medium"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.2 }}
          className="text-center"
        >
          <div className="text-2xl font-bold text-game-gold">{character.achievements.length}</div>
          <div className="text-xs text-gray-400">Achievements</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.3 }}
          className="text-center"
        >
          <div className="text-2xl font-bold text-game-green">5</div>
          <div className="text-xs text-gray-400">Quests Done</div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="text-center"
        >
          <div className="text-2xl font-bold text-game-blue">2</div>
          <div className="text-xs text-gray-400">Boss Battles</div>
        </motion.div>
      </div>
    </motion.div>
  );
}


