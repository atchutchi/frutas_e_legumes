"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { gallery } from "@/lib/content";
import { Photo, MagnifyingGlass } from "./site";
export function Gallery() {
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const shown =
    filter === "Todos" ? gallery : gallery.filter((g) => g.category === filter);
  return (
    <>
      <div className="filters" aria-label="Filtrar galeria">
        {["Todos", "Produção", "Infraestruturas", "Produtos", "Comunidade"].map(
          (c) => (
            <button
              key={c}
              aria-pressed={c === filter}
              onClick={() => setFilter(c)}
            >
              {c}
            </button>
          ),
        )}
      </div>
      <div className="gallery-grid">
        {shown.map((g) => (
          <button
            key={g.image}
            className="gallery-item"
            onClick={() => {
              setSelected(gallery.indexOf(g));
              dialog.current?.showModal();
            }}
            aria-label={"Ampliar: " + g.label}
          >
            <Photo
              src={g.image}
              alt={g.label}
              sizes="(max-width:600px) 50vw, 33vw"
            />
            <span>
              {g.label}
              <MagnifyingGlass size={20} />
            </span>
          </button>
        ))}
      </div>
      <dialog
        className="lightbox"
        ref={dialog}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current?.close();
        }}
      >
        <div>
          <button
            className="close-dialog"
            onClick={() => dialog.current?.close()}
            aria-label="Fechar fotografia"
          >
            Fechar ×
          </button>
          <Image
            src={"/images/" + gallery[selected].image}
            alt={gallery[selected].label}
            width={1400}
            height={1000}
          />
          <p>{gallery[selected].label}</p>
          <div className="lightbox-controls">
            <button
              onClick={() =>
                setSelected((selected + gallery.length - 1) % gallery.length)
              }
            >
              Anterior
            </button>
            <span>
              {selected + 1} / {gallery.length}
            </span>
            <button
              onClick={() => setSelected((selected + 1) % gallery.length)}
            >
              Seguinte
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
