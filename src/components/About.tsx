import React from 'react';
import { Code2, Laptop, Globe2, Rocket } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Me
          </h2>
          <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
          Experienced Full-Stack Developer proficient in MERN stack, Spring Boot, and Next.js. 
          Skilled in delivering high-quality, scalable applications on time. Strong collaborator with cross-functional teams, 
          passionate about leveraging full-stack expertise to drive innovation.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={<Code2 className="h-8 w-8" />}
            title="Clean Code"
            description="I write clean, maintainable code following best practices and design patterns."
          />
          <FeatureCard
            icon={<Laptop className="h-8 w-8" />}
            title="Responsive Design"
            description="Creating beautiful, responsive websites that work on all devices."
          />
          <FeatureCard
            icon={<Globe2 className="h-8 w-8" />}
            title="Scalable Solutions"
            description="Building scalable applications that can grow with your business."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
    <div className="text-indigo-600">{icon}</div>
    <h3 className="mt-4 text-xl font-semibold text-gray-900">{title}</h3>
    <p className="mt-2 text-gray-500">{description}</p>
  </div>
);

export default About;