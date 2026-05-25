import React from "react";

export default function Quartos({ quartos }) {
  return (
    <section id="quartos" className="py-24 px-6 bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="uppercase text-sm tracking-[0.3em] text-gray-500 mb-4">
            Hospedagem
          </p>

          <h3 className="text-4xl font-bold text-white">
            Quartos exclusivos
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {quartos.map((quarto) => (
            <article
              key={quarto.id}
              className="bg-black border border-gray-800 rounded-2xl overflow-hidden hover:-translate-y-1 transition duration-300"
            >
              <img
                src={quarto.imagem}
                alt={quarto.nome}
                className="w-full h-64 object-cover"
              />

              <div className="p-6">
                <h4 className="text-2xl font-semibold text-white mb-3">
                  {quarto.nome}
                </h4>

                <p className="text-gray-400 leading-7 mb-5">
                  {quarto.descricao}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">
                    {quarto.preco}
                  </span>

                  <button className="px-5 py-2 border border-gray-600 rounded-full hover:bg-white hover:text-black transition duration-300">
                    Reservar
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}