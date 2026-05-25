import React from "react";
// Importando imagens
import atacama1 from "../assets/atacama2.jpg";
import atacama2 from "../assets/atacama3.jpg";
import atacama3 from "../assets/atacama4.jpg";
import atacama4 from "../assets/atacama5.jpg";

export default function Galeria() {
  const fotos = [
    {
      id: 1,
      imagem: atacama1,
      titulo: "Paisagens do Atacama",
    },
    {
      id: 2,
      imagem: atacama2,
      titulo: "Montanhas e Céu Noturno",
    },
    {
      id: 3,
      imagem: atacama3 ,
      titulo: "Horizonte do Deserto",
    },
    {
      id: 4,
      imagem: atacama4,
      titulo: "Noites Astronômicas",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <p className="uppercase text-sm tracking-[0.3em] text-gray-500 mb-4">
            Galeria
          </p>

          <h3 className="text-4xl font-bold text-white">
            A beleza do Deserto do Atacama
          </h3>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-7">
            Explore cenários impressionantes entre dunas, montanhas e o céu
            estrelado mais famoso do planeta.
          </p>
        </div>

        {/* Grid de imagens */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {fotos.map((foto) => (
            <div
              key={foto.id}
              className="relative overflow-hidden rounded-2xl group"
            >
              <img
                src={foto.imagem}
                alt={foto.titulo}
                className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition duration-500"></div>

              {/* Texto */}
              <div className="absolute bottom-6 left-6">
                <h4 className="text-white text-2xl font-semibold">
                  {foto.titulo}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}