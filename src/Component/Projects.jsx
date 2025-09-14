import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Star, Calendar, Code } from "lucide-react";

export default function Projects() {
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

  const projects = [
    {
      title: "BillManager project",
      description:
        "BillManager is a web application that helps users easily upload, store, and manage their bills in one place. It allows capturing bills via camera or upload, organizes them securely in the cloud, and provides a simple dashboard to track and access past bills.",
      tech: ["React", "CSS3", "Responsive Design"],
      category: "Frontend Project",
      status: "Completed",
      color: "pink",
      live: "https://bill-manager-dujl.onrender.com/",
      github: "https://github.com/aryapatel23/Bill-Manager"
    },
    {
      title: "Convic – Job & Internship Portal",
      description:
        "Convict is a web-based platform designed to connect students and job seekers with companies offering jobs and internships. It provides features like job posting, internship listings, candidate applications, and a clean user-friendly interface for easy navigation. The project showcases full-stack development with role-based functionality for both recruiters and applicants.",
      tech: ["React", "CSS3", "Tailwind", "Node js", "MongoDB", "Responsive Design"],
      category: "Frontend Project",
      status: "In Development",
      color: "red",
      live: "https://bill-manager-dujl.onrender.com/",
      github: "https://github.com/aryapatel23/Convict"
    },
    {
      title: "Student Result Portal",
      description:
        "A role-based result management system where students can search their results using GR number and date of birth, while admins (teachers) can upload results via Excel and manage student records. Built with a secure backend and an intuitive React frontend.",
      tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "ExcelJS"],
      category: "Full-Stack Project",
      status: "Completed",
      color: "cyan",
      live: "https://kamli-primary-school.vercel.app/",
      github: "https://github.com/aryapatel23/Result-portal"
    }
    ,
    {
      title: "Amazon Clone",
      description:
        "E-commerce platform replicating Amazon's core features including product catalog, shopping cart, user accounts, and checkout process with modern UI/UX design.",
      tech: ["HTML5", "CSS3", "JavaScript", "Local Storage", "Bootstrap"],
      category: "Frontend Project",
      status: "Completed",
      color: "orange",
      live: "https://your-amazon-demo-link.com",
      github: "https://github.com/your-username/amazon-clone"
    },
    {
      title: "Indigo Airlines Clone",
      description:
        "Flight booking website clone with search functionality, seat selection, booking management, and payment integration. Focus on user experience and responsive design.",
      tech: ["React", "CSS3", "JavaScript", "API Integration", "UI/UX"],
      category: "Frontend Project",
      status: "Completed",
      color: "blue",
      live: "https://your-indigo-demo-link.com",
      github: "https://github.com/your-username/indigo-clone"
    },
    {
      title: "Taj Hotel Clone",
      description:
        "Luxury hotel booking platform featuring room availability, booking system, gallery, and elegant design reflecting the brand's premium positioning.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive"],
      category: "Frontend Project",
      status: "Completed",
      color: "purple",
      live: "https://your-taj-demo-link.com",
      github: "https://github.com/your-username/taj-hotel-clone"
    },
    {
      title: "Coding Gita Clone",
      description:
        "Educational platform for coding tutorials and courses. Features course catalog, user progress tracking, and interactive learning modules.",
      tech: ["React", "CSS3", "JavaScript", "Educational Design"],
      category: "Frontend Project",
      status: "Completed",
      color: "cyan",
      live: "https://your-codinggita-demo-link.com",
      github: "https://github.com/your-username/coding-gita-clone"
    },
    {
      title: "SIH Hackathon Project",
      description:
        "Innovative solution developed for Smart India Hackathon addressing real-world problems through technology. Focus on scalable architecture and user-centered design.",
      tech: ["React", "Node.js", "Database", "API", "Innovation"],
      category: "Hackathon Project",
      status: "In Development",
      color: "pink",
      live: "https://your-sih-demo-link.com",
      github: "https://github.com/your-username/sih-hackathon"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      emerald: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 shadow-emerald-500/10 hover:shadow-emerald-500/20 text-emerald-400",
      red: "from-red-500/20 to-red-600/20 border-red-500/30 shadow-red-500/10 hover:shadow-red-500/20 text-red-400",
      orange: "from-orange-500/20 to-orange-600/20 border-orange-500/30 shadow-orange-500/10 hover:shadow-orange-500/20 text-orange-400",
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 shadow-blue-500/10 hover:shadow-blue-500/20 text-blue-400",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 shadow-purple-500/10 hover:shadow-purple-500/20 text-purple-400",
      cyan: "from-cyan-500/20 to-cyan-600/20 border-cyan-500/30 shadow-cyan-500/10 hover:shadow-cyan-500/20 text-cyan-400",
      pink: "from-pink-500/20 to-pink-600/20 border-pink-500/30 shadow-pink-500/10 hover:shadow-pink-500/20 text-pink-400"
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
            My <span className="text-emerald-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A showcase of applications I've built, from concept to deployment
          </p>
        </motion.div>

        {/* Featured Project */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="bg-gradient-to-r from-emerald-500/20 to-emerald-600/20 backdrop-blur-lg rounded-3xl border border-emerald-500/30 p-8 shadow-2xl shadow-emerald-500/10">
            <div className="flex items-center gap-3 mb-6">
              <Star className="w-6 h-6 text-emerald-400" />
              <h2 className="text-2xl font-bold text-white">Featured Project</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">Attendance & Payroll Management System</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  A web-based system built with React, Node.js, Express, and MongoDB to manage employees’ attendance and
                  payroll. It includes modules for employee profiles, attendance tracking, leave management, payroll calculation
                  (salary, deductions, paid/unpaid leaves), and PDF salary slip generation. The system provides separate dashboards for HR (admin)
                  to manage employees and payroll, and for Employees to view their own attendance, leaves, and monthly salary details
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["React", "Node.js", "MongoDB", "Express", "JWT"].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href="https://attendance-and-payroll-management.vercel.app "   // ✅ Replace with your demo link
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </motion.a>

                  <motion.a
                    href="https://github.com/aryapatel23/Attendance-and-Payroll-Management"  // ✅ Replace with your GitHub link
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </motion.a>
                </div>

              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 h-64 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Code className="w-16 h-16 mx-auto mb-4 text-emerald-400" />
                  <p>Project Preview</p>
                  <p className="text-sm">Interactive Demo Available</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`bg-gradient-to-br ${getColorClasses(project.color)} backdrop-blur-lg rounded-3xl border p-8 shadow-xl hover:shadow-2xl transition-all duration-500 group`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-2xl bg-white/10 backdrop-blur-sm`}>
                  <Code
                    className={`w-6 h-6 ${getColorClasses(project.color)
                      .split(" ")
                      .find((c) => c.startsWith("text-"))
                      }`}
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${project.status === "Completed"
                      ? "bg-green-500/20 text-green-300 border border-green-500/30"
                      : "bg-yellow-500/20 text-yellow-300 border border-yellow-500/30"
                      }`}
                  >
                    {project.status}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p
                className={`text-sm font-medium mb-4 ${getColorClasses(project.color)
                  .split(" ")
                  .find((c) => c.startsWith("text-"))
                  }`}
              >
                {project.category}
              </p>

              <p className="text-gray-200 text-sm leading-relaxed mb-6 line-clamp-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 rounded-md bg-white/10 text-gray-300 text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-2 py-1 rounded-md bg-white/10 text-gray-400 text-xs">
                    +{project.tech.length - 3} more
                  </span>
                )}
              </div>

              {/* ✅ Buttons with Live & GitHub links */}
              <div className="flex gap-3">
                {project.live && (
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <ExternalLink className="w-3 h-3" />
                    View
                  </motion.a>
                )}

                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <Github className="w-3 h-3" />
                    Code
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>


        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-16 text-center bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8"
        >
          <h2 className="text-3xl font-bold text-white mb-4">More Projects Coming Soon</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm constantly working on new projects and exploring innovative technologies.
            Follow my journey as I continue building impactful applications.
          </p>
          <div className="flex justify-center gap-4">
            <motion.a
              href="https://github.com/aryapatel23"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors duration-300"
            >
              View GitHub Profile
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}