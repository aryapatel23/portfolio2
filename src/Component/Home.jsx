import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "./Layout";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2
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

  return (
    <>
      {/* <Layout/> */}
      <div className="min-h-screen flex items-center justify-center p-8 relative overflow-hidden">

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full bg-emerald-500/5 backdrop-blur-3xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20 + i * 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-4xl mx-auto text-center"
        >

          {/* Hero Card */}
          <motion.div
            variants={itemVariants}
            className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-12 shadow-2xl shadow-black/20 hover:shadow-emerald-500/10 transition-all duration-700"
          >
            <motion.div
              variants={itemVariants}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                Available for Full-Time Opportunities
              </div>

              <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-500 bg-clip-text text-transparent">
                  Arya Patel
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl font-light text-gray-300 mb-8">
                Computer Science Engineer &
                <br />
                <span className="text-emerald-400">Aspiring Full-Stack Developer</span>
              </h2>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-400 leading-relaxed mb-12 max-w-2xl mx-auto"
            >
              Passionate about creating innovative digital solutions with a strong foundation in
              computer science and a burning desire to excel in full-stack development.
              Currently maintaining a <span className="text-emerald-400 font-semibold">9.76 CGPA</span> at Rai University.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.a
                href="https://drive.google.com/uc?export=download&id=112P3HGfpmMwWo0QKb79gH0yXl6_MzjKT"
                download="Arya-Patel-Resume.pdf"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(16, 185, 129, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center gap-3"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </motion.a>



              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-2xl border border-white/20 hover:bg-white/20 hover:border-emerald-500/50 transition-all duration-300 flex items-center gap-3"
                >
                  Contact Me
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              { label: "CGPA", value: "9.76", color: "gray" },
              { label: "Projects Completed", value: "7+", color: "blue" },
              { label: "Technologies", value: "15+", color: "purple" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 text-center hover:border-emerald-500/30 transition-all duration-300"
              >
                <div className={`text-3xl font-bold ${stat.color === 'emerald' ? 'text-gray-600' :
                  stat.color === 'blue' ? 'text-blue-400' : 'text-purple-400'
                  }`}>
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}