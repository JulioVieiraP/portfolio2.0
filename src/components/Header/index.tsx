'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaBars } from 'react-icons/fa'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 h-16 text-white ${scrolled ? 'bg-gray-800 shadow-lg backdrop-blur-md' : 'bg-gray-800'
        }`}
    >
      <div className="container mx-auto flex justify-between items-center h-full px-4">
        {/* Logo */}
        <div className="bg-gray-800 px-4 py-2 rounded-md shadow-md">
          <h1 className="text-xl font-mono text-green-400">
            <span className="text-gray-500">&lt;</span>
            My Portfolio
            <span className="text-gray-500"> /&gt;</span>
          </h1>
        </div>

        {/* Menu mobile (ícone) */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className="text-white w-6 h-6" />
          </button>
        </div>

        {/* Navegação (desktop) */}
        <div className="hidden md:flex items-center gap-8">
          <nav>
            <ul className="flex gap-6">
              {['Home', 'Sobre', 'Skills', 'Projetos', 'Contato'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                      className="hover:text-green-400 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="flex gap-4">
            <a
              href="https://github.com/JulioVieiraP"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/juliovieirapaixão/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Menu mobile aberto */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 px-6 pb-4">
          <nav>
            <ul className="flex flex-col gap-4 text-white">
              {['Home', 'Sobre', 'Skills', 'Projetos', 'Contato'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={item === 'Home' ? '/' : `/#${item.toLowerCase()}`}
                      className="block hover:text-green-400 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
              <div className="flex gap-4 mt-2">
                <a
                  href="https://github.com/JulioVieiraP"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/juliovieirapaixão/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
