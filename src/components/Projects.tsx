import project1 from '../images/im1.jpg';
import project2 from '../images/im2.jpg';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform built with Spring Boot and Next.JS',
    image: project1,
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    tags: ['React', 'Node.js', 'SQLite', 'Tailwind CSS'],
  },
  {
    title: 'AI E-Book Platform NOVELOPIA  ',
    description: 'Development of an interactive and secure platform for children, using AI to promote learning and strengthen the parent-child bond.',
    image: project2,
    tags: ['React', 'Node.JS', 'Express', 'MongoDB'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
  {
    title: 'Upcoming Project ',
    description: 'Analytics dashboard for social media management',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?fit=crop&w=800&h=500',
    tags: ['React', 'D3.js', 'Node.js', 'Redis'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Here are some of my recent projects
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({
  title,
  description,
  image,
  tags,
}: {
  title: string;
  description: string;
  image: string;
  tags: string[];
}) => (
  <div className="bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-500">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-sm text-indigo-600 bg-indigo-50 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;
