import React from 'react'

const Hero = () => (
  <section className="text-white min-h-screen flex flex-col justify-center items-center px-4 text-center">
    <h1 className="text-5xl sm:text-6xl font-bold mb-4">Hola, soy Heryan</h1>
    <p className="text-lg sm:text-2xl mb-6 max-w-xl">
      Desarrollador Frontend apasionado por React, Tailwind y proyectos creativos.
    </p>
    <a href="#proyectos" className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-3xl transition-all duration-300">
      Ver mis proyectos
    </a>
  </section>
)

export default Hero
