import React from "react";
import ImagemHero from "../assets/atacama1.jpg";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative h-screen flex items-center justify-center text-center"
    >
      <img
        src={ImagemHero}
        alt="Céu estrelado no Deserto do Atacama"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 px-6 max-w-3xl">
        <p className="uppercase tracking-[0.4em] text-gray-400 text-sm mb-4">
          Deserto do Atacama • Chile
        </p>

        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Descubra o universo sob o céu mais estrelado do mundo
        </h2>

        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          Uma experiência única de hospedagem e observação astronômica no
          coração do Atacama.
        </p>

        <button className="mt-8 px-8 py-4 bg-white text-black font-semibold rounded-full hover:opacity-80 transition duration-300 shadow-lg">
          Reserve sua viagem astronômica
        </button>
      </div>
    </section>
  );
}