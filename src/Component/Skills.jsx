import React from "react";
import { motion } from "framer-motion";
import { 
  Code, 
  Palette, 
  Database, 
  GitBranch, 
  Puzzle,
  Globe,
  Smartphone,
  Server,
  Brush,
  FileCode
} from "lucide-react";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      color: "emerald",
      skills: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "blue",
      skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "Middleware"]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "purple",
      skills: ["Figma", "Prototyping", "Wireframing"]
    },
    {
      title: "Database",
      icon: Database,
      color: "orange",
      skills: ["MongoDB","Database Design", "Queries", "Optimization"]
    },
    {
      title: "Version Control",
      icon: GitBranch,
      color: "pink",
      skills: ["Git", "GitHub", "Version Control", "Collaboration", "Open Source"]
    },
    {
      title: "Problem Solving",
      icon: Puzzle,
      color: "cyan",
      skills: ["DSA", "Algorithms", "Logic Building", "Debugging", "Optimization"]
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 shadow-emerald-500/10 hover:shadow-emerald-500/20 text-emerald-400",
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 shadow-blue-500/10 hover:shadow-blue-500/20 text-blue-400",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 shadow-purple-500/10 hover:shadow-purple-500/20 text-purple-400",
      orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30 shadow-orange-500/10 hover:shadow-orange-500/20 text-orange-400",
      pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30 shadow-pink-500/10 hover:shadow-pink-500/20 text-pink-400",
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 shadow-cyan-500/10 hover:shadow-cyan-500/20 text-cyan-400"
    };
    return colors[color] || colors.emerald;
  };

  return (
    <div className="min-h-screen p-8 pt-20 lg:pt-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            My <span className="text-emerald-400">Skills</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A diverse toolkit for creating end-to-end digital solutions
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`bg-gradient-to-br ${getColorClasses(category.color)} backdrop-blur-lg rounded-3xl border p-8 shadow-xl hover:shadow-2xl transition-all duration-500`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-2xl bg-white/10 backdrop-blur-sm`}>
                  <category.icon className={`w-8 h-8 ${getColorClasses(category.color).split(' ').find(c => c.startsWith('text-'))}`} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className={`w-2 h-2 rounded-full ${getColorClasses(category.color).split(' ').find(c => c.startsWith('text-')).replace('text-', 'bg-')}`} />
                    <span className="text-gray-200 font-medium">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-xl"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Additional Expertise</h2>
            <p className="text-gray-300">Technologies and tools I'm comfortable working with</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              "Responsive Design",
              "API Integration", 
              "Testing",
              "Deployment",
              "Performance Optimization",
              "Code Review",
              "Agile Development",
              "Documentation",
              "Team Collaboration",
              "Project Management",
              "User Experience",
              "Cross-browser Compatibility"
            ].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/20 hover:bg-white/10 transition-all duration-300 text-center"
              >
                <span className="text-sm font-medium text-gray-200">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          variants={itemVariants}
          className="mt-12 text-center bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 rounded-3xl border border-emerald-500/20 p-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Globe className="w-6 h-6 text-emerald-400" />
            <h3 className="text-2xl font-bold text-white">Continuous Learning</h3>
          </div>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technology evolves rapidly, and I'm committed to staying current. I regularly explore new frameworks, 
            attend workshops, and contribute to open-source projects to expand my knowledge and give back to the community.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}