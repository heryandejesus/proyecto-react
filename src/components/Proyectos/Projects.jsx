import React from "react"

const projects = [
  {
    id: 1,
    title: "Proyecto React",
    description: "Aplicación web creada con React y Tailwind CSS.",
    img: "https://via.placeholder.com/400x200", // aquí pones tu imagen
    demo: "https://tusitio.com",
    code: "https://github.com/heryandejesus/proyecto-react"
  },
  {
    id: 2,
    title: "Landing Page",
    description: "Landing page responsive con HTML, CSS y JavaScript.",
    img: "https://via.placeholder.com/400x200",
    demo: "https://tusitio.com",
    code: "https://github.com/heryandejesus/landing-page"
  },
]

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 py-2">Proyectos</h2>
        
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
                    Código
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
