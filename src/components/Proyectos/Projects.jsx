import React from "react"
import fondoLanding from "../../assets/landing-page.jpg"
import fondoLanding2 from "../../assets/landing-page-estatica.jpg"
import formularioDeContacto from "../../assets/formulario-de-contacto.jpg"
import proyectoReact from "../../assets/proyecto-react.jpg"

const projects = [
  {
    id: 1,
    title: "Landig Page",
    description: "Página web responsiva creada con HTML, CSS y JavaScript para un negocio de servicios de Micropigmentación Capilar.",
    img: fondoLanding, 
    demo: "https://heryandejesus.github.io/proyectorafa/",
    code: "https://github.com/heryandejesus/proyectorafa"
  },
  {
    id: 2,
    title: "Landing Page",
    description: "Landing page responsive con HTML y CSS. Entrega de Proyecto Final del Bootcamp de Desarrollo Web de Coderhouse",
    img: fondoLanding2,
    demo: "https://heryandejesus.github.io/53800/",
    code: "https://github.com/heryandejesus/53800"
  },
  {
    id: 3,
    title: "Formulario de Contacto",
    description: "Formulario de contacto responsive con HTML y CSS",
    img: formularioDeContacto,
    demo: "https://heryandejesus.github.io/formulario-de-contacto/",
    code: "https://github.com/heryandejesus/formulario-de-contacto"
  },
    {
    id: 4,
    title: "Mi Portfolio con React",
    description: "Mi portfolio personal desarrollado con React y Tailwind CSS",
    img: proyectoReact,
    demo: "https://heryandejesus.github.io/proyecto-react/",
    code: "https://github.com/heryandejesus/proyecto-react"
  }
]

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Proyectos</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-purple-800/30 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transform transition duration-300">
              <img src={project.img} alt={project.title} className="w-full h-40 object-cover" />
              <div className="p-5">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 mt-2">{project.description}</p>
                <div className="mt-4 flex justify-center gap-4">
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-purple-800 hover:bg-purple-950 border border-white px-4 py-3 rounded-3xl transition-all duration-300"
                  >
                    Ver Proyecto
                  </a>
                  <a 
                    href={project.code} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="bg-purple-600 hover:bg-purple-800 px-4 py-3 rounded-3xl transition-all duration-300"
                  >
                    Código <i className="bi bi-code mr-2"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
