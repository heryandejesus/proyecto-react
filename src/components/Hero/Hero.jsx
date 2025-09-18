import React from 'react'

const Hero = () => {
  return (
    <section className="text-white min-h-screen flex flex-col justify-center items-center px-4 text-center">
      <h1 
        className="text-5xl sm:text-6xl font-bold mb-4 opacity-0"
        style={{
          animation: `fadeInUp 0.4s ease forwards 0.4s`
        }}
      >
        ¡Hola! Soy Heryan 👋
      </h1>
      
      <p 
        className="text-lg sm:text-2xl mb-6 max-w-xl opacity-0"
        style={{
          animation: `fadeInUp 0.5s ease forwards 0.5s`
        }}
      >
        Desarrollador Frontend, me encanta transformar ideas en proyectos creativos.
      </p>
      
      <a 
        href="#projects" 
        className="bg-purple-600 hover:bg-purple-800 border border-white px-6 py-3 rounded-3xl transition-all duration-300 opacity-0"
        style={{
          animation: `fadeInUp 0.6s ease forwards 0.6s`
        }}
      >
        Ver mis proyectos
      </a>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero