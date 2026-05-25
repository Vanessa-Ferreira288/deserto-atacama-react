import React from "react";

export default function Footer() {
  return (
    <footer
      id="contato"
      className="border-t border-gray-800 py-10 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center justify-between">
        <div>
          <h4 className="text-2xl font-bold text-white">
            ATACAMA SKY
          </h4>

          <p className="text-gray-500 mt-2">
            contato@atacamasky.com
          </p>
        </div>

        <div className="flex gap-6 text-gray-400">
          <a
            href="#"
            className="hover:text-white transition duration-300"
          >
            Instagram
          </a>

          <a
            href="#"
            className="hover:text-white transition duration-300"
          >
            Facebook
          </a>

          <a
            href="#"
            className="hover:text-white transition duration-300"
          >
            X / Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}