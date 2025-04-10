'use client'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Todos os direitos reservados.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/JulioVieiraP"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/juliovieirapaixão/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        <p className="text-sm">
          Desenvolvido por{' '}
          <span className="font-bold text-green-400">Julio Vieira</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer
