"use client";
import { Player } from "@remotion/player";
import {
  AbsoluteFill,
  Img,
  Sequence,
  interpolate,
  useCurrentFrame,
  staticFile,
} from "remotion";
const scenes = [
  {
    image: "campo-papaia.jpg",
    title: "Tudo começa na terra.",
    subtitle: "Produção agrícola e hortícolas",
  },
  {
    image: "triagem.jpg",
    title: "Cuidado em cada etapa.",
    subtitle: "Selecção, calibragem e embalamento",
  },
  {
    image: "camara-fria.jpg",
    title: "Frescura preservada.",
    subtitle: "Conservação e preparação para expedição",
  },
  {
    image: "caju.jpg",
    title: "Produtos com mais valor.",
    subtitle: "Frutas e Legumes Guiné-Bissau, SARL",
  },
];
function Scene({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  const frame = useCurrentFrame();
  return (
    <AbsoluteFill style={{ background: "#073e31" }}>
      <Img
        src={staticFile("images/" + image)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          scale: interpolate(frame, [0, 150], [1, 1.045], {
            extrapolateRight: "clamp",
          }),
          opacity: 0.6,
        }}
      />
      <AbsoluteFill
        style={{
          justifyContent: "flex-end",
          padding: 70,
          color: "white",
          fontFamily: "Arial,sans-serif",
        }}
      >
        <h2
          style={{
            fontSize: 62,
            lineHeight: 1.1,
            maxWidth: 800,
            margin: "0 0 20px",
            opacity: interpolate(frame, [0, 18], [0, 1], {
              extrapolateRight: "clamp",
            }),
          }}
        >
          {title}
        </h2>
        <p style={{ fontSize: 27, margin: 0 }}>{subtitle}</p>
      </AbsoluteFill>
    </AbsoluteFill>
  );
}
function Composition() {
  return (
    <AbsoluteFill>
      {scenes.map((s, i) => (
        <Sequence key={s.title} from={i * 150} durationInFrames={150}>
          <Scene {...s} />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
}
export default function FilmPlayer() {
  return (
    <Player
      component={Composition}
      durationInFrames={600}
      fps={30}
      compositionWidth={1280}
      compositionHeight={720}
      controls
      autoPlay={false}
      style={{ width: "100%", aspectRatio: "16 / 9" }}
    />
  );
}
