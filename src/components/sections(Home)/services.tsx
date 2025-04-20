'use client'
import { motion } from 'framer-motion'

const serviceList = [
  {
    title: 'Desenvolvimento Full Stack',
    description:
      'Criação de aplicações completas, desde o backend até o frontend, com tecnologias modernas e escaláveis.'
  },
  {
    title: 'Desenvolvimento Backend',
    description:
      'Construção de APIs robustas, integrações e sistemas otimizados para atender às suas necessidades.'
  },
  {
    title: 'Desenvolvimento Frontend',
    description:
      'Interfaces modernas, responsivas e intuitivas para proporcionar a melhor experiência ao usuário.'
  },
  {
    title: 'Automação de Processos',
    description:
      'Criação de scripts e ferramentas para automatizar tarefas e aumentar a produtividade do seu negócio.'
  }
]

const Services = () => {
  return (
    <section id="services" className="p-6 sm:p-10 scroll-mt-23">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="w-full flex justify-between items-center bg-gray-800 px-6 py-4 rounded-md shadow-lg mb-8">
          <span className="text-gray-500 text-xl font-mono">&lt;</span>
          <h1 className="text-2xl font-mono text-green-400">Serviços</h1>
          <span className="text-gray-500 text-xl font-mono">/&gt;</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {serviceList.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/60 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl p-6 text-center border border-white/20 hover:scale-[1.03]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-700 text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
