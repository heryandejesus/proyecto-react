import React from "react";

const Footer = () => {
  return (
    <footer className="bg-purple-900/20 backdrop-blur-md text-white text-center py-6 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} Heryan Guzmán. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
