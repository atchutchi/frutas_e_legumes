"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Photo, Play } from "./site";
const FilmPlayer = dynamic(() => import("./film-player"), {
  ssr: false,
  loading: () => <p className="film-loading">A preparar a apresentação…</p>,
});
export function Film() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="film">
      {playing ? (
        <FilmPlayer />
      ) : (
        <button onClick={() => setPlaying(true)} className="film-cover">
          <Photo
            src="triagem.jpg"
            alt="Equipa na linha de selecção de mangas"
          />
          <span className="film-tint" />
          <span className="film-title">
            Da nossa terra,
            <br />
            para novos horizontes.
            <small>
              <span className="play-circle">
                <Play size={18} weight="fill" />
              </span>{" "}
              Conheça o nosso trabalho
            </small>
          </span>
        </button>
      )}
    </div>
  );
}
