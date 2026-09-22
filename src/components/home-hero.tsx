"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "./site";
const slides = [
  {
    image: "mangas-closeup.png",
    title: (
      <>
        Frutas tropicais
        <br />
        com mais valor.
      </>
    ),
    description:
      "Produção sustentável. Qualidade garantida.\nUm parceiro para o seu negócio.",
    tag: "DA GUINÉ-BISSAU PARA O MUNDO",
    position: "center 48%",
  },
  {
    image: "triagem-melhorada.png",
    title: (
      <>
        Cuidado em cada
        <br />
        etapa da colheita.
      </>
    ),
    description: "Da selecção ao embalamento,\nvalorizamos cada produto.",
    tag: "PRODUÇÃO E AGROINDÚSTRIA",
    position: "center",
  },
  {
    image: "pimentos-malagueta.jpg",
    title: (
      <>
        Frescura que começa
        <br />
        na nossa terra.
      </>
    ),
    description:
      "Hortícolas e frutas tropicais\npara o mercado local e regional.",
    tag: "SABORES DA NOSSA TERRA",
    position: "center",
  },
];
export function HomeHero() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  return (
    <section
      className="hero"
      aria-roledescription="carrossel"
      aria-label="Conheça a Frutas e Legumes"
    >
      <Image
        key={slide.image}
        src={"/images/" + slide.image}
        alt={
          index === 0
            ? "Mangas frescas seleccionadas"
            : index === 1
              ? "Equipa na linha de triagem"
              : "Pimentos e malaguetas"
        }
        fill
        priority
        sizes="100vw"
        style={{ objectPosition: slide.position }}
      />
      <div className="hero-shade" />
      <div className="container hero-content">
        <p className="eyebrow">{slide.tag}</p>
        <h1>{slide.title}</h1>
        <p className="hero-description">{slide.description}</p>
        <div className="hero-buttons">
          <Link className="button" href="/produtos">
            Explorar Produtos <ArrowRight size={19} />
          </Link>
          <Link className="button light-outline" href="/contactos">
            Pedir Cotação <ArrowUp />
          </Link>
        </div>
        <div className="carousel-controls">
          <button
            aria-label="Diapositivo anterior"
            onClick={() =>
              setIndex((index + slides.length - 1) % slides.length)
            }
          >
            <ArrowLeft size={18} />
          </button>
          <span aria-live="polite">
            0{index + 1}
            <span> / 0{slides.length}</span>
          </span>
          <button
            aria-label="Diapositivo seguinte"
            onClick={() => setIndex((index + 1) % slides.length)}
          >
            <ArrowRight size={18} />
          </button>
          <div className="slide-line">
            <i style={{ width: `${((index + 1) / slides.length) * 100}%` }} />
          </div>
        </div>
      </div>
      <span className="hero-caption">FRUTAS E LEGUMES · SARL</span>
    </section>
  );
}
function ArrowUp() {
  return <ArrowRight size={18} />;
}
