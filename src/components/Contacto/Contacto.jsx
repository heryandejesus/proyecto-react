import React from "react";

const Contacto = () => {
  return (
    <section
      id="contact"
      className="text-white min-h-screen flex flex-col justify-center items-center px-6 py-16 text-center"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-6">Contacto</h2>
      <p className="max-w-xl text-lg sm:text-xl mb-8">
        ¿Quieres trabajar conmigo o tienes alguna idea? 🚀  
        Escríbeme y conversemos.
      </p>

      {/* Botón de email */}
      <a
        href="mailto:heryandejesus@gmail.com"
        className="bg-purple-600 hover:bg-purple-800 border border-white px-8 py-3 rounded-3xl transition-all duration-300 text-lg"
      >
        <i className="bi bi-envelope mr-2"></i>Envíame un correo
      </a>

      {/* Redes sociales */}
      <div className="flex space-x-6 mt-10">
        <a
          href="mailto:heryandejesus@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:scale-125 transition-transform duration-300"
        >
          <i className="bi bi-envelope"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/heryan-angulo-guzman-381494112/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:scale-125 transition-transform duration-300"
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://github.com/heryandejesus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl hover:scale-125 transition-transform duration-300"
        >
          <i className="bi bi-github"></i>
        </a>
      </div>
        <p className="pt-5">
            <a href="mailto:heryandejesus@gmail.com">heryandejesus@gmailcom</a>
        </p>
    </section>
  );
};

export default Contacto;
