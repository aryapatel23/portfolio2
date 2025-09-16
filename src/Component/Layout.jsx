import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Home, 
  User, 
  Code, 
  FolderOpen, 
  GraduationCap, 
  Mail, 
  Github, 
  Linkedin,
  Menu,
  X,
  Award
} from "lucide-react";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Skills", url: "/skills", icon: Code },
  { title: "Projects", url: "/projects", icon: FolderOpen },
  { title: "Education", url: "/education", icon: GraduationCap },
  { title: "Certificates", url: "/certificates", icon: Award },
  { title: "Contact", url: "/contact", icon: Mail },
];


export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-emerald-800/90  overflow-hidden">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-6 left-6 z-50 p-3 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
      >
        {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white/10 backdrop-blur-lg border-r border-white/20 z-40 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-8 h-full flex flex-col">
          {/* Logo/Brand */}
          <div className="mb-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/25">
              <span className="text-2xl font-bold text-white">AP</span>
            </div>
            <h1 className="text-xl font-bold text-white text-center">Arya Patel</h1>
            <p className="text-emerald-300 text-sm text-center mt-1">Full-Stack Developer</p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-2">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.url;
              return (
                <Link
                  key={item.title}
                  to={item.url}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 group ${
                    isActive
                      ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 shadow-lg shadow-emerald-500/10'
                      : 'text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20'
                  }`}
                >
                  <item.icon className={`w-5 h-5 ${isActive ? 'text-emerald-400' : 'text-gray-200 group-hover:text-gray-200'}`} />
                  <span className="font-medium">{item.title}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="pt-8 border-t border-white/10">
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/aryapatel23/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/70 text-gray-600 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/arya-patel-profile/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white/70 text-gray-600 hover:text-white hover:bg-white/20 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="lg:ml-80 min-h-screen">
        <div className="min-h-screen">
          {children}
        </div>
        
        {/* Footer */}
        <footer className="bg-white/5 backdrop-blur-lg border-t border-white/10">
          <div className="px-8 py-6">
            <div className="text-center text-gray-400">
              <p>&copy; 2025 Arya Patel. Crafted with passion and precision.</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}