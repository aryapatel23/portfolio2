import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Palette, 
  Database, 
  Globe, 
  Award,
  Target,
  Heart,
  BookOpen
} from "lucide-react";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const interests = [
    { icon: Code, title: "Frontend Development", desc: "React, Next.js, TypeScript" },
    { icon: Database, title: "Backend Development", desc: "Node.js, Express, MongoDB" },
    { icon: Palette, title: "UI/UX Design", desc: "Figma, Adobe XD, Prototyping" },
    { icon: Globe, title: "Full-Stack Projects", desc: "End-to-end development" }
  ];

  return (
    <div className="min-h-screen p-8 pt-20 lg:pt-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About <span className="text-emerald-400">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate about technology and driven by curiosity to build impactful solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-xl hover:shadow-emerald-500/10 transition-all duration-500">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                <span className="text-4xl font-bold text-white">AP</span>
              </div>
              
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-white">Arya Patel</h2>
                <p className="text-emerald-400 font-medium">Computer Science Engineering Student</p>
                
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-300 font-semibold">CGPA: 9.76</span>
                </div>
              </div>
            </div>

            {/* Goals Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 hover:border-emerald-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">My Goals</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">
                To become a skilled full-stack developer who creates meaningful digital experiences. 
                I'm committed to continuous learning and staying updated with the latest technologies 
                to deliver innovative solutions.
              </p>
            </motion.div>
          </motion.div>

          {/* Info Section */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-xl hover:shadow-emerald-500/10 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-6 h-6 text-emerald-400" />
                <h3 className="text-2xl font-bold text-white">My Story</h3>
              </div>
              
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  I'm a dedicated Computer Science Engineering student at Rai University X Codinggita, 
                  currently in my first year with a stellar <span className="text-emerald-500 font-semibold">9.76 CGPA</span>. 
                  My journey in technology began with curiosity and has evolved into a passion 
                  for creating digital solutions that make a difference.
                </p>
                
                <p>
                  What drives me is the endless possibility to learn and grow in this field. 
                  I've already built several projects including e-commerce clones, job portals, 
                  and participated in hackathons. Each project teaches me something new and 
                  brings me closer to my goal of becoming a full-stack developer.
                </p>
                
                <p>
                  I believe in the power of clean code, beautiful design, and user-centered thinking. 
                  My approach combines technical skills with creative problem-solving to build 
                  applications that are both functional and delightful to use.
                </p>
              </div>
            </div>

            {/* Learning Focus */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 hover:border-emerald-500/30 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-emerald-400" />
                <h3 className="text-xl font-bold text-white">Current Focus</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/20 transition-all duration-300"
                  >
                    <interest.icon className="w-8 h-8 text-emerald-400 mb-3" />
                    <h4 className="font-semibold text-white text-sm mb-1">{interest.title}</h4>
                    <p className="text-xs text-gray-400">{interest.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}