import React from 'react';

const skills = {
  frontend: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Redux'],
  backend: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs'],
  tools: ['Git', 'Docker', 'AWS', 'Jest', 'CI/CD'],
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Skills & Expertise
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Here are the technologies and tools I work with
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <SkillCategory title="Frontend Development" skills={skills.frontend} />
          <SkillCategory title="Backend Development" skills={skills.backend} />
          <SkillCategory title="Tools & DevOps" skills={skills.tools} />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    <div className="space-y-3">
      {skills.map((skill) => (
        <div key={skill} className="flex items-center">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-indigo-600 h-2.5 rounded-full"
              style={{ width: `${Math.random() * 30 + 70}%` }}
            ></div>
          </div>
          <span className="ml-4 text-sm text-gray-600 min-w-[80px]">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

export default Skills;