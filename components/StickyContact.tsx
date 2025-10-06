'use client';

import { motion } from 'framer-motion';
import { Mail, Download, Linkedin, ExternalLink } from 'lucide-react';

export default function StickyContact() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 space-y-3">
        <motion.a
          href="mailto:sb7867@nyu.edu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Mail className="w-4 h-4" />
          <span className="text-sm font-medium">Contact</span>
        </motion.a>
        
        <motion.a
          href="/SnehalBondre_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Download className="w-4 h-4" />
          <span className="text-sm font-medium">Resume</span>
        </motion.a>
        
        <motion.a
          href="https://www.linkedin.com/in/snehal-bondre/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
        >
          <Linkedin className="w-4 h-4" />
          <span className="text-sm font-medium">LinkedIn</span>
        </motion.a>
      </div>
    </motion.div>
  );
}
