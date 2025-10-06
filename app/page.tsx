'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from '@/components/Navigation';
import CharacterCard from '@/components/CharacterCard';
import QuestCard from '@/components/QuestCard';
import QuestModal from '@/components/QuestModal';
import AchievementBadge from '@/components/AchievementBadge';
import ProductInsights from '@/components/ProductInsights';
import ProfessionalLayout from '@/components/ProfessionalLayout';
import { quests, achievements, character } from '@/lib/data';
import { Quest } from '@/lib/data';
import { 
  Play, 
  Star, 
  TrendingUp, 
  Users, 
  Target, 
  Zap,
  ArrowRight,
  Download,
  Mail,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import toast from 'react-hot-toast';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedQuest, setSelectedQuest] = useState<Quest | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visitedSections, setVisitedSections] = useState<string[]>([]);
  const [isRPGMode, setIsRPGMode] = useState(false);

  // Track section visits for achievements
  useEffect(() => {
    if (!visitedSections.includes(activeSection)) {
      setVisitedSections(prev => [...prev, activeSection]);
      
      // Check for explorer achievement
      if (visitedSections.length >= 4) {
        toast.success('🏆 Achievement Unlocked: Explorer!', {
          duration: 3000,
        });
      }
    }
  }, [activeSection, visitedSections]);

  const handleQuestSelect = (quest: Quest) => {
    setSelectedQuest(quest);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedQuest(null);
  };

  const toggleRPGMode = () => {
    setIsRPGMode(!isRPGMode);
    if (isRPGMode) {
      toast.success('💼 Switched to Professional Mode', {
        duration: 2000,
      });
    } else {
      toast.success('🎮 Welcome to RPG Mode! Explore my career as an adventure!', {
        duration: 3000,
      });
    }
  };

  const completedQuests = quests.filter(q => q.status === 'completed');
  const availableQuests = quests.filter(q => q.status === 'available');
  const unlockedAchievements = achievements.filter(a => a.unlocked);

  // If in professional mode, show the clean layout
  if (!isRPGMode) {
    return (
      <div className="min-h-screen">
        <ProfessionalLayout />
      </div>
    );
  }

  // RPG Mode - Original game-like interface
  const renderHomeSection = () => (
    <motion.div
      key="home"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="character-avatar w-32 h-32 rounded-full mx-auto mb-8 flex items-center justify-center text-4xl font-bold text-white">
            {character.name.charAt(0)}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-game">
            Welcome to My
            <span className="block bg-gradient-to-r from-game-purple to-game-blue bg-clip-text text-transparent">
              Career RPG
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            I'm <span className="text-game-purple font-bold">{character.name}</span>, a Level {character.level} Product Manager 
            at Edsoma Reads with 2+ years of experience. From childhood curiosity to leading product strategies, 
            explore my journey through Ed-tech innovation, social impact, and academic excellence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('quests')}
              className="bg-gradient-to-r from-game-purple to-game-blue text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Play className="w-5 h-5" />
              <span>Start Adventure</span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsRPGMode(false)}
              className="border border-game-purple text-game-purple px-8 py-4 rounded-xl font-bold text-lg flex items-center space-x-2 hover:bg-game-purple/10 transition-all duration-300"
            >
              <span>Switch to Professional Mode</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          <div className="bg-game-card/50 border border-game-border rounded-xl p-6">
            <div className="text-3xl font-bold text-game-gold mb-2">{completedQuests.length}</div>
            <div className="text-sm text-gray-400">Quests Completed</div>
          </div>
          <div className="bg-game-card/50 border border-game-border rounded-xl p-6">
            <div className="text-3xl font-bold text-game-green mb-2">{unlockedAchievements.length}</div>
            <div className="text-sm text-gray-400">Achievements</div>
          </div>
          <div className="bg-game-card/50 border border-game-border rounded-xl p-6">
            <div className="text-3xl font-bold text-game-blue mb-2">{character.level}</div>
            <div className="text-sm text-gray-400">Current Level</div>
          </div>
          <div className="bg-game-card/50 border border-game-border rounded-xl p-6">
            <div className="text-3xl font-bold text-game-purple mb-2">{character.xp}</div>
            <div className="text-sm text-gray-400">Total XP</div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  const renderQuestsSection = () => (
    <motion.div
      key="quests"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-12 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-game">
            Quest Journal
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore my career journey through interactive quests. Each quest represents a real project or challenge I've tackled as a Product Manager.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {quests.map((quest, index) => (
            <motion.div
              key={quest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <QuestCard quest={quest} onSelect={handleQuestSelect} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderAchievementsSection = () => (
    <motion.div
      key="achievements"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-game">
            Achievement Hall
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the milestones and accomplishments that define my journey as a Product Manager.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AchievementBadge achievement={achievement} size="lg" />
              <h3 className="text-lg font-bold text-white mt-4 mb-2">{achievement.name}</h3>
              <p className="text-sm text-gray-400">{achievement.description}</p>
              <div className={`text-xs font-bold mt-2 px-2 py-1 rounded-full inline-block ${
                achievement.rarity === 'legendary' ? 'bg-game-gold/20 text-game-gold' :
                achievement.rarity === 'epic' ? 'bg-game-purple/20 text-game-purple' :
                achievement.rarity === 'rare' ? 'bg-game-blue/20 text-game-blue' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {achievement.rarity.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );

  const renderAboutSection = () => (
    <motion.div
      key="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-game">
              About the Player
            </h2>
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                I'm Snehal Bondre, a Product Manager at Edsoma Reads with 2+ years of experience in Product Management. 
                From childhood curiosity to leading product strategies at Edsoma, my career has been a dynamic adventure 
                in problem-solving and product innovation.
              </p>
              <p>
                I've always had a knack for fixing things, and that innate problem-solving ability has become my driving 
                force as a Product Manager. I thrive on crafting solutions that address user pain points and drive product 
                excellence. My journey includes transforming education through innovative products at Edsoma, making a 
                meaningful difference for the homeless at BME-Street Care, and enhancing LMS systems at NYU.
              </p>
              <p>
                With an M.S. in Management of Technology from NYU, I bring a unique combination of technical knowledge, 
                user research expertise, and strategic thinking. I'm constantly exploring new communication techniques, 
                diving deep into user research, and seeking innovative strategies to tackle complex challenges.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <CharacterCard />
          </motion.div>
        </div>

        {/* Product Insights Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <ProductInsights />
        </motion.div>
      </div>
    </motion.div>
  );

  const renderContactSection = () => (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen py-12 px-4"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-game">
            Ready for the Next Quest?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Let's team up and build something amazing together. I'm always excited to discuss 
            new opportunities and product challenges.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-game-card/50 border border-game-border rounded-xl p-8">
            <Mail className="w-12 h-12 text-game-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
            <p className="text-gray-300 mb-4">Ready to discuss your next product challenge?</p>
            <motion.a
              href="mailto:sb7867@nyu.edu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-game-purple to-game-blue text-white px-6 py-3 rounded-lg font-bold inline-block"
            >
              Send Message
            </motion.a>
          </div>

          <div className="bg-game-card/50 border border-game-border rounded-xl p-8">
            <Download className="w-12 h-12 text-game-green mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Download Resume</h3>
            <p className="text-gray-300 mb-4">Get a traditional view of my experience</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-game-green text-game-green px-6 py-3 rounded-lg font-bold hover:bg-game-green/10 transition-all duration-300"
            >
              Download PDF
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-400 mb-4">Or connect with me on social media:</p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="https://www.linkedin.com/in/snehal-bondre/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-game-blue hover:text-white transition-colors"
            >
              <Linkedin className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="https://sb7867.wixsite.com/snehalbondre"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-game-purple hover:text-white transition-colors"
            >
              <Github className="w-8 h-8" />
            </motion.a>
            <motion.a
              href="mailto:sb7867@nyu.edu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="text-game-green hover:text-white transition-colors"
            >
              <Mail className="w-8 h-8" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen">
      <Navigation 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        isRPGMode={isRPGMode}
        onToggleMode={toggleRPGMode}
      />
      
      <AnimatePresence mode="wait">
        {activeSection === 'home' && renderHomeSection()}
        {activeSection === 'quests' && renderQuestsSection()}
        {activeSection === 'achievements' && renderAchievementsSection()}
        {activeSection === 'about' && renderAboutSection()}
        {activeSection === 'contact' && renderContactSection()}
      </AnimatePresence>

      <QuestModal 
        quest={selectedQuest} 
        isOpen={isModalOpen} 
        onClose={handleModalClose} 
      />
    </div>
  );
}