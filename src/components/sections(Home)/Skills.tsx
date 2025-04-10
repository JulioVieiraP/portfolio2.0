'use client'
import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaVuejs,
  FaJava
} from 'react-icons/fa'
import {
  SiTypescript,
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiDjango,
  SiPostgresql,
  SiDocker
} from 'react-icons/si'

const Skills = () => {
  const skills = [
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" /> },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-600" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
    { name: 'React', icon: <FaReact className="text-cyan-400" /> },
    { name: 'Vue.js', icon: <FaVuejs className="text-green-500" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'Git', icon: <FaGitAlt className="text-orange-500" /> },
    { name: 'Python', icon: <FaPython className="text-blue-300" /> },
    { name: 'Django', icon: <SiDjango className="text-green-700" /> },
    { name: 'Java', icon: <FaJava className="text-red-600" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-800" /> },
    { name: 'Docker', icon: <SiDocker className="text-blue-500" /> }
  ]

  return (
    <section
      className="py-10 bg-gray-900 text-white w-full scroll-mt-23"
      id="skills"
    >
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full flex justify-between items-center bg-gray-800 px-6 py-4 rounded-md shadow-lg mb-8"
        >
          <span className="text-gray-500 text-xl font-mono">&lt;</span>
          <h1 className="text-2xl font-mono text-green-400">Habilidades</h1>
          <span className="text-gray-500 text-xl font-mono">/&gt;</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-gray-300 mb-8 text-xl"
        >
          As skills, ferramentas e tecnologias que sou bom
        </motion.p>

        {/* Desktop Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
          viewport={{ once: true }}
          className="hidden sm:grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg hover:scale-105 hover:-translate-y-1 transition-all duration-300"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="sm:hidden flex overflow-x-auto gap-4 scrollbar-hide"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="min-w-[120px] flex-shrink-0 flex flex-col items-center justify-center p-4 bg-white shadow-md rounded-lg"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-700">{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
