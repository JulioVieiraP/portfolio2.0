'use client'
import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Project 1',
    description: 'This is a description of project 1.',
    stacks: ['React', 'TypeScript', 'TailwindCSS'],
    image: 'https://via.placeholder.com/300',
    github: 'https://github.com/yourusername/project1',
    preview: 'https://project1.example.com'
  },
  {
    title: 'Project 2',
    description: 'This is a description of project 2.',
    stacks: ['Next.js', 'Node.js', 'CSS'],
    image: 'https://via.placeholder.com/300',
    github: 'https://github.com/yourusername/project2',
    preview: 'https://project2.example.com'
  }
]

const Projects = () => {
  return (
    <section
      className="py-12 bg-gray-900 text-white w-full scroll-mt-23"
      id="projetos"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full flex justify-between items-center bg-gray-800 px-6 py-4 rounded-md shadow-lg mb-8"
        >
          <span className="text-gray-500 text-xl font-mono">&lt;</span>
          <h1 className="text-xl sm:text-2xl font-mono text-green-400">
            Projetos
          </h1>
          <span className="text-gray-500 text-xl font-mono">/&gt;</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg hover:brightness-95 transition duration-300"
              />
              <div className="p-4 flex flex-col h-full">
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {project.description}
                </p>
                <div className="mb-3">
                  <h4 className="text-xs font-medium text-gray-700">Stacks:</h4>
                  <ul className="flex flex-wrap gap-2 mt-1">
                    {project.stacks.map((stack, idx) => (
                      <li
                        key={idx}
                        className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded"
                      >
                        {stack}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto flex justify-between text-sm">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Preview
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
