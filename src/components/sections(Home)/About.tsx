'use client'
import { Typewriter } from 'react-simple-typewriter'
import Image from 'next/image'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <section className="container min-h-screen mt-16 flex flex-col-reverse md:flex-row items-center justify-evenly md:justify-between p-4 md:p-8 gap-10 bg-gray-100">
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800">
            Olá, meu nome é{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-black drop-shadow-md">
              Julio
            </span>
          </h1>

          <div className="flex justify-center md:justify-start items-center flex-wrap gap-2 text-3xl sm:text-5xl mb-4 mt-2">
            <p className="font-extrabold text-gray-800">Desenvolvedor</p>
            <span className="text-green-800 font-semibold">
              <Typewriter
                words={['Front-end', 'Back-end', 'Full Stack']}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>

          <p className="text-gray-700 mb-6 text-base sm:text-lg">
            Sou um desenvolvedor apaixonado por tecnologia e inovação. Tenho
            experiência em projetos front-end e back-end, buscando sempre
            entregar soluções completas e funcionais.
          </p>

          <motion.button
            onClick={() => window.open('/Currículo_Júlio Vieira Paixão.pdf', '_blank')}
            className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Baixar CV
          </motion.button>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <div className="relative w-70 h-70 sm:w-80 sm:h-80 md:w-[500px] md:h-[500px] rounded-xl overflow-hidden float-neon shadow-lg">
            <Image
              src="/Foto_perfil.jpg"
              alt="Minha Foto"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </section>

      {/* Seção Sobre */}
      <section
        className="container flex flex-col-reverse md:flex-row items-center justify-between p-6 md:p-6 gap-10 md:gap-20"
        id="Sobre"
      >
        <motion.div
          className="container md:w-1/2 relative h-64 md:h-[400px]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Image
            src="/programação.jpg"
            alt="Imagem de programação"
            fill
            className="object-cover rounded-xl shadow-xl"
          />
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="w-full flex justify-center md:justify-between items-center bg-gray-800 px-6 py-4 rounded-md shadow-lg mb-6">
            <span className="text-gray-500 text-xl font-mono hidden md:inline">
              &lt;
            </span>
            <h1 className="text-2xl font-mono text-green-400">Sobre mim</h1>
            <span className="text-gray-500 text-xl font-mono hidden md:inline">
              /&gt;
            </span>
          </div>

          <p className="text-gray-700 text-base text-start sm:text-lg leading-relaxed">
            Me chamo Julio, tenho 22 anos e sou natural de Areia Branca,
            Sergipe. Sou formado pela EBAC em Desenvolvimento Full Stack com
            Python e participei do bootcamp Java do Santander, onde desenvolvi
            uma API bancária com Spring Boot. <br />
            <br />
            Também já atuei como freelancer e em projetos voluntários para ONGs
            e empresas, sempre buscando unir criatividade, tecnologia e soluções
            funcionais. Atualmente estou focado em criar experiências digitais
            modernas e acessíveis tanto no front-end quanto no back-end.
          </p>
        </motion.div>
      </section>
    </>
  )
}

export default About
