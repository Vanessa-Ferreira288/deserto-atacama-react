import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-widest text-white">
          ATACAMA SKY
        </h1>

        <nav>
          <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            <li>
              <a
                href="#inicio"
                className="hover:text-white transition duration-300"
              >
                Início
              </a>
            </li>

            <li>
              <a
                href="#quartos"
                className="hover:text-white transition duration-300"
              >
                Quartos
              </a>
            </li>

            <li>
              <a
                href="#experiencia"
                className="hover:text-white transition duration-300"
              >
                Experiência
              </a>
            </li>

            <li>
              <a
                href="#contato"
                className="hover:text-white transition duration-300"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}