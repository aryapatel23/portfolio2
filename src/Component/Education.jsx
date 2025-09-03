import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  BookOpen, 
  Calendar,
  Star,
  Trophy,
  Target,
  TrendingUp
} from "lucide-react";

export default function Education() {
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

  const achievements = [
    {
      title: "Outstanding Academic Performance",
      description: "Maintaining a stellar 9.76 CGPA throughout the first year",
      icon: Trophy,
      color: "emerald"
    },
    {
      title: "Technical Project Excellence",
      description: "Completed 7+ projects demonstrating practical application of theoretical knowledge",
      icon: Star,
      color: "blue"
    },
    {
      title: "Hackathon Participation",
      description: "Participated in Smart India Hackathon, showcasing innovation and problem-solving skills",
      icon: Target,
      color: "purple"
    },
    {
      title: "Continuous Learning",
      description: "Actively learning new technologies and staying updated with industry trends",
      icon: TrendingUp,
      color: "orange"
    }
  ];

  const courses = [
    "Data Structures and Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Computer Networks",
    "Software Engineering",
    "Web Technologies",
    "Operating Systems",
    "Mathematics for Computer Science"
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
            My <span className="text-emerald-400">Education</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Academic journey focused on building a strong foundation in computer science
          </p>
        </motion.div>

        {/* Main Education Card */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-lg rounded-3xl border border-emerald-500/30 p-8 shadow-2xl shadow-emerald-500/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-emerald-500/20 backdrop-blur-sm">
                    <GraduationCap className="w-10 h-10 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white">B.Tech in Computer Science Engineering</h2>
                    <p className="text-emerald-300 text-lg">Rai University</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">2024 - 2028 (Expected)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-emerald-400" />
                    <span className="text-gray-300">Current Year: First Year</span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-emerald-500/30 border border-emerald-500/50 shadow-lg shadow-emerald-500/20">
                  <Star className="w-6 h-6 text-emerald-300" />
                  <div>
                    <span className="text-emerald-200 text-sm font-medium">Current CGPA</span>
                    <div className="text-3xl font-bold text-white">9.76</div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-emerald-400" />
                  Key Subjects
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {courses.slice(0, 6).map((course, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-gray-200 text-sm">{course}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Academic <span className="text-emerald-400">Achievements</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -5 }}
                className={`bg-gradient-to-br from-${achievement.color}-500/10 to-${achievement.color}-600/10 backdrop-blur-lg rounded-3xl border border-${achievement.color}-500/20 p-6 shadow-xl hover:shadow-${achievement.color}-500/10 transition-all duration-500`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-2xl bg-${achievement.color}-500/20 backdrop-blur-sm`}>
                    <achievement.icon className={`w-6 h-6 text-${achievement.color}-400`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-200 text-sm leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          variants={itemVariants}
          className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-xl text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-emerald-400" />
            <h2 className="text-3xl font-bold text-white">Learning Philosophy</h2>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
            My approach to education goes beyond just achieving good grades. I believe in understanding 
            concepts deeply, applying theoretical knowledge through practical projects, and staying 
            curious about emerging technologies. Every course I take is an opportunity to build something 
            meaningful and solve real-world problems.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-8">
            {[
              { title: "Theory + Practice", desc: "Combining academic learning with hands-on projects" },
              { title: "Continuous Growth", desc: "Always learning new technologies and methodologies" },
              { title: "Problem Solving", desc: "Applying knowledge to create meaningful solutions" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Future Goals */}
        <motion.div
          variants={itemVariants}
          className="mt-12 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 rounded-3xl border border-emerald-500/20 p-8"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Target className="w-8 h-8 text-emerald-400" />
              <h2 className="text-3xl font-bold text-white">Academic Goals</h2>
            </div>
            
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              My goal is to maintain academic excellence while building practical skills that prepare me 
              for a successful career in technology. I plan to specialize in full-stack development, 
              contribute to open-source projects, and eventually pursue advanced studies in emerging 
              fields like AI and machine learning.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}