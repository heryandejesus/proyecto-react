import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { useLanguage } from "../../context/LanguageContext";
import { texts } from "../../i18n/texts";

// Redes sociales se pueden mantener estáticas
const navBarRedes = [
  {
    id: 1,
    title: "Linkedin",
    link: "https://www.linkedin.com/in/heryan-angulo-guzman-381494112/",
    icon: "bi bi-linkedin",
  },
  {
    id: 2,
    title: "Github",
    link: "https://github.com/heryandejesus",
    icon: "bi bi-github",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, changeLang } = useLanguage();
  const t = texts[lang];

  // Links del navbar dependiendo del idioma
  const navbarlinks = [
    { id: 1, title: t.navHome, link: "#" },
    { id: 2, title: t.navProjects, link: "#projects" },
    { id: 3, title: t.navAbout, link: "#about" },
    { id: 4, title: t.navContact, link: "#contact" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 bg-purple-900/20 w-full backdrop-blur-md z-50">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
        {/* Logo */}
        <div>
          <a href="#" className="block">
            <img src={Logo} alt="Logo del sitio" className="w-[130px]" />
          </a>
        </div>

        {/* Botón menú hamburguesa (mobile) */}
        <button
          className="sm:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <i className="bi bi-x" /> : <i className="bi bi-list" />}
        </button>

        {/* Navegación desktop */}
        <div className="hidden sm:flex items-center gap-8">
          <ul className="flex space-x-6">
            {navbarlinks.map((link) => (
              <li key={link.id}>
                <a
                  className="text-white text-sm md:text-lg hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration-300"
                  href={link.link}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Selector de idioma desktop */}
          <div className="flex items-center gap-1 border border-purple-300 rounded-full px-2 py-1 text-xs text-white">
            <button
              onClick={() => changeLang("es")}
              className={`px-2 py-0.5 rounded-full ${
                lang === "es" ? "bg-purple-600 font-semibold" : "opacity-70"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => changeLang("en")}
              className={`px-2 py-0.5 rounded-full ${
                lang === "en" ? "bg-purple-600 font-semibold" : "opacity-70"
              }`}
            >
              EN
            </button>
          </div>

          {/* Redes desktop */}
          <ul className="flex space-x-4">
            {navBarRedes.map((link) => (
              <li key={link.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-125"
                  href={link.link}
                >
                  <i className={`${link.icon} text-2xl text-white hover:text-sky-200 transition-all duration-300`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menú mobile desplegable */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pb-4">
          <ul className="flex flex-col space-y-3">
            {navbarlinks.map((link) => (
              <li key={link.id}>
                <a
                  className="block text-white text-lg hover:text-sky-200 transition-all duration-300"
                  href={link.link}
                  onClick={closeMenu}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Selector de idioma mobile */}
          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={() => {
                changeLang("es");
                closeMenu();
              }}
              className={`px-3 py-1 rounded-full text-sm text-white border ${
                lang === "es" ? "bg-purple-600 border-purple-400" : "border-purple-400 opacity-80"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => {
                changeLang("en");
                closeMenu();
              }}
              className={`px-3 py-1 rounded-full text-sm text-white border ${
                lang === "en" ? "bg-purple-600 border-purple-400" : "border-purple-400 opacity-80"
              }`}
            >
              EN
            </button>
          </div>

          {/* Redes mobile */}
          <ul className="flex space-x-4 mt-4">
            {navBarRedes.map((link) => (
              <li key={link.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-125"
                  href={link.link}
                  onClick={closeMenu}
                >
                  <i
                    className={`${link.icon} text-2xl text-white hover:text-sky-200 transition-all duration-300`}
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
