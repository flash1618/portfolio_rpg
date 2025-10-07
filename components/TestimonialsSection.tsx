'use client';

import { motion } from 'framer-motion';
import { Star, Quote, Linkedin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Laion Azeredo",
    role: "Tech Leader at Edsoma",
    company: "Edsoma",
    connection: "1st degree connection",
    relationship: "April 22, 2024, Laion worked with Snehal on the same team",
    content: "I work directly with Snehal at Edsoma, having daily contact with her work, as I am Tech Leader and she is Product Manager. Snehal is a professional with an incredible talent for learning quickly and adapting to different scopes and critical situations. As a product manager, she brings a broad and complete view of all facets of our products and relevant insights on how to drive their evolution. As a co-worker, she is always willing to collaborate and raise the team's spirit. There isn't a single person in the company who doesn't like Snehal. Any company that is lucky enough to hire Snehal will be successful on this front.",
    linkedin: "https://www.linkedin.com/in/laion-azeredo/",
    skills: ["Product Management", "Team Collaboration", "Adaptability", "Technical Leadership"]
  },
  {
    id: 2,
    name: "Clea Mahoney",
    role: "Customer Education Lead",
    company: "Tech Startup",
    connection: "1st degree connection", 
    relationship: "April 26, 2023, Clea managed Snehal directly",
    content: "I was lucky to supervise Snehal's work as an instructional technologist and training lead in NYU Information Technology. Snehal is extremely skilled in working with stakeholders (faculty, staff, students) of all levels, and often came to our team's rescue in facilitating consultation on educational technology with our most reluctant/challenging clients. Snehal is empathetic, applies close listening skills, and expertly consults on solutions that meet the client where they are. She's a proven problem-solver and a strategic thinker, and would be a wonderful asset to any team.",
    linkedin: "https://www.linkedin.com/in/clea-mahoney/",
    skills: ["Stakeholder Management", "Problem Solving", "Strategic Thinking", "Client Relations"]
  }
];

export default function TestimonialsSection() {
  return (
    <section className="px-6 md:px-12 py-16 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h3 className="heading-secondary mb-4">💬 What Colleagues Say</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real feedback from people I've worked with directly. These testimonials showcase 
            the impact I've made in collaborative environments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="testimonial-card hover-lift"
            >
              <div className="flex items-start space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <a 
                      href={testimonial.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.relationship}</p>
                </div>
              </div>

              <div className="mb-4">
                <Quote className="w-6 h-6 text-blue-500 mb-2" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {testimonial.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex items-center mt-4 pt-4 border-t border-gray-100">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500 ml-2">Exceptional Performance</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Want to see more recommendations? Check out my LinkedIn profile.
          </p>
          <a
            href="https://www.linkedin.com/in/snehal-bondre/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center space-x-2"
          >
            <Linkedin className="w-5 h-5" />
            <span>View All Recommendations</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
