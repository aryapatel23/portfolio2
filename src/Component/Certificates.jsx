import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  ExternalLink,
  Download,
  Building,
  Star,
  Filter,
  Search,
  CheckCircle,
  Globe
} from "lucide-react";

export default function Certificates() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

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

  // Sample certificates structure - replace with your actual data
  const certificates = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "HackerRank",
    date: "30 May, 2025",
    category: "Web Development",
    description: "Comprehensive certification covering HTML, CSS, JavaScript, React, Node.js, and MongoDB",
    image: "https://www.hackerrank.com/certificates/iframe/daf77ab80b72",
    certificateUrl: "https://www.hackerrank.com/certificates/iframe/f24b58885467",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
    status: "Completed",
    color: "emerald"
  },
  {
    id: 2,
    title: "CSS (Basic)",
    issuer: "HackerRank",
    date: "17 May, 2025",
    status: "Completed",
    certificateUrl: "https://www.hackerrank.com/certificates/iframe/6efe82024665",
    image: "/certificates/css-basic.png",
    color: "yellow",
    description: "Verified CSS (Basic) skill assessment by HackerRank, covering selectors, styling, layouts, and responsive design.",
    skills: ["CSS", "Selectors", "Box Model", "Flexbox", "Responsive Design"]
  },
  {
    id: 3,
    title: "JavaScript (Basic)",
    issuer: "HackerRank",
    date: "19 May, 2025",
    status: "Completed",
    certificateUrl: "https://www.hackerrank.com/certificates/iframe/0499d89f914e",
    image: "/certificates/javascript-basic.png",
    color: "blue",
    description: "Verified JavaScript (Basic) skill assessment, focusing on syntax, loops, functions, and core ES6 concepts.",
    skills: ["JavaScript", "Variables", "Functions", "Loops", "ES6"]
  },
  {
    id: 4,
    title: "React (Basic)",
    issuer: "HackerRank",
    date: "28 May, 2025",
    status: "Completed",
    certificateUrl: "https://www.hackerrank.com/certificates/iframe/7d508f218df9",
    image: "/certificates/react-basic.png",
    color: "cyan",
    description: "Verified React (Basic) skill assessment, covering components, props, state, hooks, and rendering logic.",
    skills: ["React", "Components", "Hooks", "Props", "JSX"]
  },
  {
    id: 5,
    title: "Node (Basic)",
    issuer: "HackerRank",
    date: "05 Jun, 2025",
    status: "Completed",
    certificateUrl: "https://www.hackerrank.com/certificates/iframe/76a42537e314",
    image: "/certificates/node-basic.png",
    color: "green",
    description: "Verified Node.js (Basic) skill assessment, including modules, event loop, npm usage, and basic APIs.",
    skills: ["Node.js", "Modules", "Event Loop", "NPM", "APIs"]
  },
  {
    id: 6,
    title: "JavaScript (Intermediate)",
    issuer: "HackerRank",
    date: "18 Jun, 2025",
    status: "Completed",
    certificateUrl: "https://www.hackerrank.com/certificates/iframe/daf77ab80b72",
    image: "/certificates/javascript-intermediate.png",
    color: "purple",
    description: "Verified JavaScript (Intermediate) skill assessment, covering closures, async/await, promises, and advanced concepts.",
    skills: ["JavaScript", "Closures", "Async/Await", "Promises", "OOP"]
  },
    {
      id: 7,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2024",
      category: "Programming",
      description: "Advanced JavaScript programming including ES6, regular expressions, debugging, and algorithmic thinking",
      image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=400&h=300&fit=crop",
      credentialId: "freecodecamp.org/certification/aryapatel/javascript-algorithms-and-data-structures",
      skills: ["JavaScript", "Algorithms", "Data Structures", "ES6"],
      status: "Completed",
      color: "yellow"
    },
    {
      id: 8,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      category: "Design",
      description: "Creating responsive websites using HTML, CSS, Flexbox, CSS Grid, and responsive design principles",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      credentialId: "freecodecamp.org/certification/aryapatel/responsive-web-design",
      skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "CSS Grid"],
      status: "Completed",
      color: "blue"
    },
    {
      id: 9,
      title: "React Development",
      issuer: "Meta (Facebook)",
      date: "2024",
      category: "Frontend",
      description: "Advanced React development including hooks, context, state management, and modern React patterns",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      credentialId: "coursera.org/account/accomplishments/certificate/ABC123",
      skills: ["React", "Hooks", "State Management", "JSX", "Component Architecture"],
      status: "In Progress",
      color: "cyan"
    },
    {
      id: 10,
      title: "MongoDB Database Design",
      issuer: "MongoDB University",
      date: "2024",
      category: "Database",
      description: "Database design, data modeling, aggregation framework, and performance optimization in MongoDB",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      credentialId: "university.mongodb.com/course_completion/abc123",
      skills: ["MongoDB", "Database Design", "Data Modeling", "Aggregation"],
      status: "Completed",
      color: "green"
    },
    {
      id:11,
      title: "Git Version Control",
      issuer: "GitHub",
      date: "2023",
      category: "Development Tools",
      description: "Version control with Git, GitHub workflows, branching strategies, and collaborative development",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
      certificateUrl: "https://www.hackerrank.com/certificates/iframe/daf77ab80b72",
      credentialId: "github.com/aryapatel/certificates/git-certification",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      status: "Completed",
      color: "purple"
    }
  ];

  const categories = ["all", ...new Set(certificates.map(cert => cert.category))];

  const filteredCertificates = certificates.filter(cert => {
    const matchesSearch = cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || cert.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getColorClasses = (color) => {
    const colors = {
      emerald: "from-emerald-500/20 to-emerald-600/20 border-emerald-500/30 shadow-emerald-500/10 hover:shadow-emerald-500/20 text-emerald-400",
      blue: "from-blue-500/20 to-blue-600/20 border-blue-500/30 shadow-blue-500/10 hover:shadow-blue-500/20 text-blue-400",
      purple: "from-purple-500/20 to-purple-600/20 border-purple-500/30 shadow-purple-500/10 hover:shadow-purple-500/20 text-purple-400",
      yellow: "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30 shadow-yellow-500/10 hover:shadow-yellow-500/20 text-yellow-400",
      green: "from-green-500/20 to-green-600/20 border-green-500/30 shadow-green-500/10 hover:shadow-green-500/20 text-green-400",
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
            My <span className="text-emerald-400">Certificates</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my technical expertise
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search certificates, issuers, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all duration-300"
                />
              </div>
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-gray-400" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:border-emerald-500/50 transition-all duration-300"
                >
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800">
                      {category === "all" ? "All Categories" : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: "Total Certificates", value: certificates.length.toString(), icon: Award, color: "emerald" },
            { label: "Completed", value: certificates.filter(c => c.status === "Completed").length.toString(), icon: CheckCircle, color: "green" },
            { label: "In Progress", value: certificates.filter(c => c.status === "In Progress").length.toString(), icon: Star, color: "yellow" },
            { label: "Categories", value: categories.length - 1, icon: Building, color: "blue" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 text-center hover:border-emerald-500/30 transition-all duration-300"
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 text-${stat.color}-400`} />
              <div className={`text-3xl font-bold text-${stat.color}-400 mb-1`}>{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCertificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className={`bg-gradient-to-br ${getColorClasses(certificate.color)} backdrop-blur-lg rounded-3xl border p-6 shadow-xl hover:shadow-2xl transition-all duration-500 group`}
            >
              {/* Certificate Image */}
              <div className="relative mb-6 overflow-hidden rounded-2xl">
                <a href={certificate.certificateUrl} target="_blank" rel="noopener noreferrer">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </a>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${certificate.status === 'Completed'
                    ? 'bg-green-500/80 text-green-100'
                    : 'bg-yellow-500/80 text-yellow-100'
                  }`}>
                  {certificate.status}
                </div>
              </div>

              {/* Certificate Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{certificate.title}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <Building className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm font-medium">{certificate.issuer}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-300 text-sm">{certificate.date}</span>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3 mb-4">
                  {certificate.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {certificate.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-md bg-white/10 text-gray-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                  {certificate.skills.length > 3 && (
                    <span className="px-2 py-1 rounded-md bg-white/10 text-gray-400 text-xs">
                      +{certificate.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <motion.a
                    href={certificate.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Verify
                  </motion.a>
                  <motion.a
                    href={certificate.image}
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-lg hover:bg-emerald-600 transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>


        {/* No Results */}
        {filteredCertificates.length === 0 && (
          <motion.div
            variants={itemVariants}
            className="text-center py-16"
          >
            <Award className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-xl font-bold text-white mb-2">No certificates found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Integration Note */}
        <motion.div
          variants={itemVariants}
          className="mt-16 bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 backdrop-blur-lg rounded-3xl border border-emerald-500/20 p-8"
        >
          <div className="text-center">
            <Globe className="w-12 h-12 mx-auto mb-4 text-emerald-400" />
            <h3 className="text-2xl font-bold text-white mb-4">Certificate Management</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              This section is ready to be integrated with your certificate management folder.
              Please provide the link to your certificates folder, and I'll connect it to display
              your actual certificates with real-time updates.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}