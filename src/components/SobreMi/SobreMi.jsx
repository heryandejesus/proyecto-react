import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
} from "react-icons/si";
import Heryan from "../../assets/Heryan.jpeg";
import { useLanguage } from "../../context/LanguageContext";
import { texts } from "../../i18n/texts";

const SobreMi = () => {
  const { lang } = useLanguage();
  const t = texts[lang];

  const tecnologias = [
    { nombre: "HTML", icon: <SiHtml5 className="text-orange-500 w-6 h-6" /> },
    { nombre: "CSS", icon: <SiCss3 className="text-blue-500 w-6 h-6" /> },
    { nombre: "JavaScript", icon: <SiJavascript className="text-yellow-400 w-6 h-6" /> },
    { nombre: "React", icon: <SiReact className="text-cyan-400 w-6 h-6" /> },
    { nombre: "Tailwind", icon: <SiTailwindcss className="text-teal-400 w-6 h-6" /> },
    { nombre: "Bootstrap", icon: <SiBootstrap className="text-purple-600 w-6 h-6" /> },
    { nombre: "Git", icon: <SiGit className="text-red-500 w-6 h-6" /> },
  ];

  
  const cvFile =
    lang === "es" ? "cvheryanguzman.pdf" : "cvheryanenglish.pdf";

  const cvDownloadName =
    lang === "es" ? "CV-Heryan-Guzman-ES.pdf" : "CV-Heryan-Guzman-EN.pdf";

  return (
    <section
      id="about"
      className="text-white min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10"
    >
      {/* Imagen o avatar */}
      <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
        <img
          src={Heryan}
          alt="Foto de Heryan"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Texto */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          {t.aboutTitle}
        </h2>

        <p className="text-lg leading-relaxed mb-4">
          {t.aboutDescription}
        </p>

        {/* Tecnologías con iconos */}
        <div className="flex flex-wrap gap-4 mb-6 justify-center md:justify-start">
          {tecnologias.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1 border border-white rounded-full text-sm hover:bg-purple-600 transition-colors"
            >
              {tech.icon} <span>{tech.nombre}</span>
            </div>
          ))}
        </div>

        {/* Botón CV dependiente del idioma */}
        <a
          href={`${import.meta.env.BASE_URL}${cvFile}`}
          download={cvDownloadName}
          className="bg-purple-600 hover:bg-purple-800 px-6 py-3 rounded-3xl border border-white transition-all duration-300"
        >
          {t.downloadCv}
        </a>
      </div>
    </section>
  );
};

export default SobreMi;
