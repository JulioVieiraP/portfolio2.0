'use client'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Desenvolvedor full stack junior - IPPS(Instituto de Pesquisa e Promoção da Saúde)',
    period: 'out 2024 - atualmente',
    description:
      'Trabalhei como desenvolvedor frontend, criando interfaces modernas e responsivas.'
  },
  {
    company: 'Desenvolvedor web - 14Bis Analítica',
    period: 'out 2024 - atualmente',
    description:
      'Atuo como Desenvolvedor Full Stack, onde transformo informações em decisões estratégicas por meio de soluções inovadoras e eficientes. Meu trabalho é focado em criar interfaces intuitivas e responsivas, utilizando as tecnologias mais modernas no desenvolvimento web para proporcionar a melhor experiência ao usuário.'
  },
  {
    company: 'Desenvolvedor Freelancer',
    period: 'out 2024 - atualmente',
    description: 'Como desenvolvedor freelancer, atuei em diversos projetos diferentes segmentos, entregando soluções full stack personalizadas. Fui responsável desde o levantamento de requisitos até a entrega final, desenvolvendo interfaces modernas, APIs escaláveis e implementando automações que otimizam processos e reduzem custos. Utilizei tecnologias como React, TypeScript, Node.js, PostgreSQL e ferramentas de versionamento e deploy para garantir qualidade e eficiência em cada entrega.'
  }
]

const Experience = () => {
  return (
    <section className="bg-gray-100 py-12 px-4 sm:px-6 w-full" id="experiencias">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full flex justify-between items-center bg-gray-800 px-4 sm:px-6 py-4 rounded-md shadow-lg mb-8"
        >
          <span className="text-gray-500 text-xl font-mono">&lt;</span>
          <h1 className="text-xl sm:text-2xl font-mono text-green-400">Experiências</h1>
          <span className="text-gray-500 text-xl font-mono">/&gt;</span>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.02, boxShadow: '0px 8px 20px rgba(0,0,0,0.1)' }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
                  {exp.company}
                </h2>
                <p className="text-sm text-gray-500">{exp.period}</p>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mt-2">
                {exp.description}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

export default Experience
