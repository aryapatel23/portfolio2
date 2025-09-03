// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import emailjs from "emailjs-com";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   Send,
//   Github,
//   Linkedin,
//   MessageCircle,
//   CheckCircle,
//   AlertCircle
// } from "lucide-react";


// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.8,
//         staggerChildren: 0.3
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setSubmitStatus(null);

//     try {
//       await emailjs.send(
//         "service_d3pir3p",   // 🔹 from EmailJS dashboard
//         "template_o90rrmb",  // 🔹 from EmailJS dashboard
//         {
//           from_name: formData.name,
//           from_email: formData.email,
//           message: formData.message,
//         },
//         "yDufHlmiXuqjHuRpY"    // 🔹 from EmailJS dashboard
//       );

//       setSubmitStatus("success");
//       setFormData({ name: "", email: "", message: "" });
//     } catch (error) {
//       setSubmitStatus("error");
//       console.error("EmailJS error:", error);
//     }

//     setIsSubmitting(false);
//   };


//   const contactInfo = [
//     {
//       icon: Mail,
//       title: "Email",
//       value: "aryaunjha@gmail.com",
//       link: "mailto:aryaunjha@gmail.com",
//       color: "emerald"
//     },
//     {
//       icon: Phone,
//       title: "Phone",
//       value: "+91 9727659973",
//       link: "tel:+919727659973",
//       color: "blue"
//     },
//     {
//       icon: MapPin,
//       title: "Location",
//       value: "Gujarat, India",
//       color: "purple"
//     }
//   ];

//   const socialLinks = [
//     {
//       icon: Github,
//       title: "GitHub",
//       value: "@aryapatel",
//       link: "https://github.com/aryapatel23",
//       color: "gray"
//     },
//     {
//       icon: Linkedin,
//       title: "LinkedIn",
//       value: "/in/aryapatel",
//       link: "https://www.linkedin.com/in/arya-patel-profile/",
//       color: "blue"
//     }
//   ];



//   return (
//     <div className="min-h-screen p-8 pt-20 lg:pt-8">
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//         className="max-w-6xl mx-auto"
//       >
//         {/* Header */}
//         <motion.div variants={itemVariants} className="text-center mb-16">
//           <h1 className="text-5xl font-bold text-white mb-6">
//             Get In <span className="text-emerald-400">Touch</span>
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Ready to collaborate? Let's discuss your next project or just have a friendly chat about technology
//           </p>
//         </motion.div>

//         <div className="grid lg:grid-cols-2 gap-12">
//           {/* Contact Form */}
//           <motion.div variants={itemVariants}>
//             <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-xl">
//               <div className="flex items-center gap-3 mb-8">
//                 <MessageCircle className="w-6 h-6 text-emerald-400" />
//                 <h2 className="text-2xl font-bold text-white">Send Message</h2>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all duration-300"
//                     placeholder="Your full name"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all duration-300"
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleInputChange}
//                     required
//                     rows={6}
//                     className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
//                     placeholder="Tell me about your project or just say hello..."
//                   />
//                 </div>

//                 {submitStatus && (
//                   <div className={`p-4 rounded-xl flex items-center gap-3 ${submitStatus === 'success'
//                     ? 'bg-green-500/20 border border-green-500/30 text-green-300'
//                     : 'bg-red-500/20 border border-red-500/30 text-red-300'
//                     }`}>
//                     {submitStatus === 'success' ? (
//                       <>
//                         <CheckCircle className="w-5 h-5" />
//                         <span>Message sent successfully! I'll get back to you soon.</span>
//                       </>
//                     ) : (
//                       <>
//                         <AlertCircle className="w-5 h-5" />
//                         <span>Failed to send message. Please try again.</span>
//                       </>
//                     )}
//                   </div>
//                 )}

//                 <motion.button
//                   type="submit"
//                   disabled={isSubmitting}
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-5 h-5" />
//                       Send Message
//                     </>
//                   )}
//                 </motion.button>
//               </form>
//             </div>
//           </motion.div>

//           {/* Contact Info */}
//           <motion.div variants={itemVariants} className="space-y-8">
//             {/* Contact Details */}
//             <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-xl">
//               <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

//               <div className="space-y-6">
//                 {contactInfo.map((info, index) => (
//                   <motion.div
//                     key={index}
//                     whileHover={{ x: 5 }}
//                     className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/20 transition-all duration-300"
//                   >
//                     <div className={`p-3 rounded-2xl bg-${info.color}-500/20`}>
//                       <info.icon className={`w-5 h-5 text-${info.color}-400`} />
//                     </div>
//                     <div>
//                       <p className="text-gray-400 text-sm">{info.title}</p>
//                       {info.link ? (
//                         <a
//                           href={info.link}
//                           className="text-white font-medium hover:text-emerald-400 transition-colors duration-300"
//                         >
//                           {info.value}
//                         </a>
//                       ) : (
//                         <p className="text-white font-medium">{info.value}</p>
//                       )}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>

//             {/* Social Links */}
//             <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-xl">
//               <h2 className="text-2xl font-bold text-white mb-8">Connect With Me</h2>

//               <div className="grid gap-4">
//                 {socialLinks.map((social, index) => (
//                   <motion.a
//                     key={index}
//                     href={social.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     whileHover={{ scale: 1.02, x: 5 }}
//                     className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/20 transition-all duration-300 group"
//                   >
//                     <div className={`p-3 rounded-2xl bg-${social.color}-500/20`}>
//                       <social.icon className={`w-5 h-5 text-${social.color}-500`} />
//                     </div>
//                     <div>
//                       <p className="text-gray-400 text-sm">{social.title}</p>
//                       <p className="text-white font-medium group-hover:text-emerald-400 transition-colors duration-300">
//                         {social.value}
//                       </p>
//                     </div>
//                   </motion.a>
//                 ))}
//               </div>
//             </div>

//             {/* Availability */}
//             <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 backdrop-blur-lg rounded-3xl border border-emerald-500/20 p-8">
//               <div className="text-center">
//                 <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
//                   <CheckCircle className="w-8 h-8 text-emerald-400" />
//                 </div>
//                 <h3 className="text-xl font-bold text-white mb-2">Available for Projects</h3>
//                 <p className="text-gray-300">
//                   I'm currently accepting new projects and collaboration opportunities.
//                   Let's create something amazing together!
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }








import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // ✅ FIX: Add missing input change handler
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_d3pir3p", // 🔹 your EmailJS service ID
        "template_o90rrmb", // 🔹 your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "yDufHlmiXuqjHuRpY" // 🔹 your EmailJS public key
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("EmailJS error:", error);
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "aryaunjha@gmail.com",
      link: "mailto:aryaunjha@gmail.com",
      color: "emerald",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9727659973",
      link: "tel:+919727659973",
      color: "blue",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Gujarat, India",
      color: "purple",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      value: "@aryapatel",
      link: "https://github.com/aryapatel23",
      color: "gray",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "/in/aryapatel",
      link: "https://www.linkedin.com/in/arya-patel-profile/",
      color: "blue",
    },
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
            Get In <span className="text-emerald-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to collaborate? Let's discuss your next project or just have a
            friendly chat about technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <MessageCircle className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-bold text-white">Send Message</h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange} // ✅ FIXED
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange} // ✅ FIXED
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange} // ✅ FIXED
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </div>

                {submitStatus && (
                  <div
                    className={`p-4 rounded-xl flex items-center gap-3 ${
                      submitStatus === "success"
                        ? "bg-green-500/20 border border-green-500/30 text-green-300"
                        : "bg-red-500/20 border border-red-500/30 text-red-300"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>
                          Message sent successfully! I'll get back to you soon.
                        </span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="w-5 h-5" />
                        <span>
                          Failed to send message. Please try again.
                        </span>
                      </>
                    )}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-3"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
             {/* Contact Details */}
             <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-xl">
               <h2 className="text-2xl font-bold text-white mb-8">Contact Information</h2>

               <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/20 transition-all duration-300"
                  >
                    <div className={`p-3 rounded-2xl bg-${info.color}-500/20`}>
                      <info.icon className={`w-5 h-5 text-${info.color}-400`} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.title}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white font-medium hover:text-emerald-400 transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 p-8 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-8">Connect With Me</h2>

              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-emerald-500/20 transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-2xl bg-${social.color}-500/20`}>
                      <social.icon className={`w-5 h-5 text-${social.color}-500`} />
                    </div>
                    <div>
                      <p className="text-gray-700 text-sm">{social.title}</p>
                      <p className="text-white font-medium group-hover:text-emerald-400 transition-colors duration-300">
                        {social.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="bg-gradient-to-r from-emerald-500/10 to-emerald-600/10 backdrop-blur-lg rounded-3xl border border-emerald-500/20 p-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Available for Projects</h3>
                <p className="text-gray-300">
                  I'm currently accepting new projects and collaboration opportunities.
                  Let's create something amazing together!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
