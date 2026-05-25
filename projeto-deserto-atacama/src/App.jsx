import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Quartos from "./components/Quartos";
import Experiencia from "./components/Experiencia";
import Galeria from "./components/Galeria";
import Footer from "./components/Footer";
// Importando imagens da pasta assets
import imagem1 from "./assets/quarto1.jpg"
import imagem2 from "./assets/quarto2.jpg"
import imagem3 from "./assets/quarto3.jpg"


export default function App() {
  const quartos = [
    {
      id: 1,
      nome: "Suíte Orion",
      descricao:
        "Vista panorâmica do céu estrelado com varanda privativa.",
      preco: "R$ 890/noite",
      imagem: imagem1,
    },
    {
      id: 2,
      nome: "Quarto Nebulosa",
      descricao:
        "Ambiente minimalista e confortável inspirado no cosmos.",
      preco: "R$ 720/noite",
      imagem: imagem2,
    },
    {
      id: 3,
      nome: "Cabana Via Láctea",
      descricao:
        "Experiência premium com observação astronômica exclusiva.",
      preco: "R$ 1.250/noite",
      imagem: imagem3,
    },
  ];

  const experiencias = [
    {
      id: 1,
      titulo: "Observação com Telescópios",
      descricao:
        "Explore planetas, constelações e nebulosas com equipamentos profissionais.",
    },
    {
      id: 2,
      titulo: "Guias Astronômicos",
      descricao:
        "Especialistas locais apresentam curiosidades sobre o universo e a cultura do Atacama.",
    },
    {
      id: 3,
      titulo: "Fotografia Noturna",
      descricao:
        "Aprenda técnicas para capturar a Via Láctea em cenários únicos do deserto.",
    },
  ];

  return (
    <div className="bg-black text-gray-200 min-h-screen font-sans">
      <Header />

      <Hero />

      <Sobre />

      <Quartos quartos={quartos} />

      <Experiencia experiencias={experiencias} />

      <Galeria />

      <Footer />
    </div>
  );
}