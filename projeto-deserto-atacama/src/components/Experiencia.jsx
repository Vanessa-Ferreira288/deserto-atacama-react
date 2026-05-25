import React from "react";

export default function Experiencia({ experiencias }) {
  return (
    <section
      id="experiencia"
      className="py-24 px-6 bg-gradient-to-b from-slate-950 to-black"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase text-sm tracking-[0.3em] text-gray-500 mb-4">
            Astronomia
          </p>

          <h3 className="text-4xl font-bold text-white">
            Experiências inesquecíveis
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {experiencias.map((item) => (
            <div
              key={item.id}
              className="border border-gray-800 rounded-2xl p-8 bg-black hover:bg-slate-900 transition duration-300"
            >
              <h4 className="text-2xl font-semibold text-white mb-4">
                {item.titulo}
              </h4>

              <p className="text-gray-400 leading-7">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}