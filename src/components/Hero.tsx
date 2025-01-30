import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '../images/profile.jpg';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="relative inline-block">
          <img
              src={profileImage} 
              alt="profile"
              className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
            />
          </div>
          
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Welcome to my portfolio
          </h2>
          <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
            Hi, I'm Omar BOUHDIDA
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Full-Stack Developer | Agile & Scalable Web Solutions
          </p>
          
          <div className="mt-8 flex justify-center space-x-6">
            <SocialLink href="https://github.com/omar-bouhdida" icon={<Github />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/omarbouhdida/" icon={<Linkedin />} label="LinkedIn" />
            <SocialLink href="mailto:john@example.com" icon={<Mail />} label="Email" />
          </div>

          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
            >
              Let's work together
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a
    href={href}
    className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
  >
    <span className="sr-only">{label}</span>
    {icon}
  </a>
);

export default Hero;