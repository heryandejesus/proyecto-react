import React, { useState } from 'react'
import Logo from '../../assets/Logo.png'

const navbarlinks = [
  { id: 1, title: 'Inicio' , link: '#' },
  { id:2, title: 'Proyectos' , link: '#projects' },
  { id: 3, title: 'Sobre mí' , link: '#about' },
  { id: 4, title: 'Contacto' , link: '#contact' }
]

const navBarRedes = [
  { id: 1, title: 'Linkedin' , link: 'https://www.linkedin.com/in/heryan-angulo-guzman-381494112/', icon: 'bi bi-linkedin'},
  { id:2, title: 'Github' , link: 'https://github.com/heryandejesus', icon: 'bi bi-github' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Función para cerrar el menú
  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 bg-purple-900/20 w-full backdrop-blur-md z-50 ">
      <div className='flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3'>
        {/* Logo Navbar */}
        <div>
          <a href="#" className="block">
            <img src={Logo} alt="Logo del sitio" className="w-[130px]" />
          </a>
        </div>

        {/* Botón menú hamburguesa (solo en mobile) */}
        <button 
          className="sm:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
        </button>

        {/* Navegación desktop */}
        <div className="hidden sm:block">
          <ul className='flex sm:space-x-8 space-x-4'>
            {navbarlinks.map((link) => (
              <li key={link.id}>
                <a 
                  className='text-white sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration-300' 
                  href={link.link}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes desktop */}
        <div className="hidden sm:block">
          <ul className='flex space-x-4'>
            {navBarRedes.map((link) => (
              <li key={link.id}>
                <a 
                  target='_blank' 
                  rel='noopener noreferrer' 
                  className='inline-block transition-transform duration-300 transform hover:scale-125' 
                  href={link.link}
                >
                  <i className={`${link.icon} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300`}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menú mobile desplegable */}
<div className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
}`}>
  <div className="px-4 pb-4">
    <ul className='flex flex-col space-y-3'>
      {navbarlinks.map((link) => (
        <li key={link.id}>
          <a 
            className='block text-white text-lg hover:text-sky-200 transition-all duration-300' 
            href={link.link}
            onClick={closeMenu}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
    <ul className="flex space-x-4 mt-4">
      {navBarRedes.map((link) => (
        <li key={link.id}>
          <a 
            target='_blank' 
            rel='noopener noreferrer' 
            className='inline-block transition-transform duration-300 transform hover:scale-125' 
            href={link.link}
            onClick={closeMenu}
          >
            <i className={`${link.icon} text-2xl text-white hover:text-sky-200 transition-all duration-300`}></i>
          </a>
        </li>
      ))}
    </ul>
  </div>
</div>
    </nav>
  )
}

export default Navbar
