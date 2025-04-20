'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Make Your Burger',
    description:
      'Desenvolvi um sistema para hamburgueria com Vue.js no front-end. Inclui uma página para pedidos e uma dashboard para gerenciar e atualizar o status dos pedidos. O backend foi criado com uma API RESTful em Python e Django REST Framework.',
    stacks: ['Vue.JS', 'DjangoRestFramework', 'PostgreSQL'],
    image: '/MakeYourBurger.jpg',
    github: 'https://github.com/JulioVieiraP/Make-your-burger',
    preview: 'https://make-your-burger-lemon.vercel.app',
  },
  {
    title: 'Efood',
    description:
      'O objetivo do projeto é ser uma vitrine digital para diversos restaurantes, onde cada estabelecimento pode apresentar seus pratos de forma organizada.',
    stacks: ['React.JS', 'Redux.js', 'TypeScript', 'Styled-components'],
    image: '/Efood.jpg',
    github: 'https://github.com/JulioVieiraP/efood',
    preview: 'https://efood-lyart-ten.vercel.app',
  },
  {
    title: 'Eplay',
    description:
      'Desenvolvi um e-commerce de jogos com design responsivo e foco em usabilidade. O site possui páginas por categoria, seções como "Em Breve" e "Promoções", além de um carrinho de compras completo com checkout seguro.',
    stacks: [
      'React.JS',
      'Redux.js',
      'TypeScript',
      'Styled-components',
      'yup',
      'formik',
    ],
    image: '/Eplay.jpg',
    github: 'https://github.com/JulioVieiraP/eplay',
    preview: 'https://eplay-iota.vercel.app',
  },
]

const Projects = () => {
  return (
    <section className="py-12 bg-gray-900 text-white w-full scroll-mt-23" id="projetos">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full flex justify-between items-center bg-gray-800 px-6 py-4 rounded-md shadow-lg mb-8"
        >
          <span className="text-gray-500 text-xl font-mono">&lt;</span>
          <h1 className="text-xl sm:text-2xl font-mono text-green-400">Projetos</h1>
          <span className="text-gray-500 text-xl font-mono">/&gt;</span>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectCard = ({ title, description, stacks, image, github, preview }: (typeof projects)[0]) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-t-lg hover:brightness-95 transition duration-300"
      />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p
          className="text-sm text-gray-600 line-clamp-3 sm:line-clamp-4"
        >
          {description}
        </p>

        <div className="mt-3">
          <h4 className="text-xs font-medium text-gray-700">Stacks:</h4>
          <ul className="flex flex-wrap gap-2 mt-1">
            {stacks.map((stack, idx) => (
              <li key={idx} className="text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded">
                {stack}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto pt-4 flex gap-4 text-sm">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={preview}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition"
          >
            <ExternalLink size={16} />
            Preview
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
