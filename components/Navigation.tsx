'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Home, 
  Map, 
  Trophy, 
  User, 
  Mail, 
  Menu, 
  X,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  isRPGMode?: boolean;
  onToggleMode?: () => void;
}

export default function Navigation({ activeSection, onSectionChange, isRPGMode = true, onToggleMode }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'quests', label: 'Quests', icon: Map },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'about', label: 'About', icon: User },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const socialLinks = [
    { href: 'https://www.linkedin.com/in/snehal-bondre/', icon: Linkedin, label: 'LinkedIn' },
    { href: 'https://sb7867.wixsite.com/snehalbondre', icon: Github, label: 'Portfolio' },
    { href: 'mailto:sb7867@nyu.edu', icon: Mail, label: 'Email' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="hidden md:flex fixed top-0 left-0 right-0 z-40 sticky-nav"
      >
        <div className="max-w-7xl mx-auto w-full px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => onSectionChange('home')}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-game-purple to-game-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-white font-game">Snehal</span>
            </motion.div>

            {/* Navigation Items */}
            <div className="flex items-center space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                
                return (
                  <motion.button
                    key={item.id}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onSectionChange(item.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'bg-game-purple/20 text-game-purple border border-game-purple/50'
                        : 'text-gray-300 hover:text-white hover:bg-game-bg/50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Mode Toggle & Social Links */}
            <div className="flex items-center space-x-4">
              {onToggleMode && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onToggleMode}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isRPGMode
                      ? 'bg-game-purple/20 text-game-purple border border-game-purple/50'
                      : 'bg-gray-100 text-gray-700 border border-gray-300'
                  }`}
                >
                  {isRPGMode ? '🎮 RPG Mode' : '💼 Professional Mode'}
                </motion.button>
              )}
              
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-game-purple transition-colors"
                    title={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:hidden fixed top-0 left-0 right-0 z-40 sticky-nav"
      >
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => onSectionChange('home')}
            >
              <div className="w-8 h-8 bg-gradient-to-br from-game-purple to-game-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-lg font-bold text-white font-game">Snehal</span>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden bg-game-bg/95 backdrop-blur-sm border-t border-game-border"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <motion.button
                  key={item.id}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onSectionChange(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-game-purple/20 text-game-purple border border-game-purple/50'
                      : 'text-gray-300 hover:text-white hover:bg-game-bg/50'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </motion.button>
              );
            })}
            
            {/* Mobile Social Links */}
            <div className="flex items-center justify-center space-x-6 pt-4 border-t border-game-border">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-game-purple transition-colors"
                    title={social.label}
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20 md:h-24" />
    </>
  );
}
