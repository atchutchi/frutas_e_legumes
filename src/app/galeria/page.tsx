import type { Metadata } from "next";
import { Breadcrumb, Intro, ContactBanner } from "@/components/site";
import { Gallery } from "@/components/gallery";
export const metadata: Metadata = { title: "Galeria" };
export default function GalleryPage() {
  return (
    <div className="container page-content">
      <Breadcrumb label="Galeria" />
      <Intro
        eyebrow="GALERIA"
        title={
          <>
            O nosso trabalho
            <br />
            em imagens.
          </>
        }
        description="Produtos, pessoas e instalações. Conheça os registos da produção, da selecção e do acondicionamento."
      />
      <Gallery />
      <section className="video-section">
        <div className="section-heading">
          <h2>Acompanhe as operações.</h2>
          <p>Registos em vídeo da actividade.</p>
        </div>
        <div className="video-grid">
          <figure>
            <video
              controls
              preload="metadata"
              playsInline
              poster="/images/linha-triagem.jpg"
            >
              <source src="/videos/operacoes-1.mp4" type="video/mp4" />
            </video>
            <figcaption>Operações e manuseamento dos produtos</figcaption>
          </figure>
          <figure>
            <video
              controls
              preload="metadata"
              playsInline
              poster="/images/armazem.jpg"
            >
              <source src="/videos/operacoes-2.mp4" type="video/mp4" />
            </video>
            <figcaption>Registo das instalações e dos produtos</figcaption>
          </figure>
        </div>
      </section>
      <ContactBanner />
    </div>
  );
}
