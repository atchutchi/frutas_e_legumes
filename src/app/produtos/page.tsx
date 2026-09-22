import type { Metadata } from "next";
import {
  Breadcrumb,
  Intro,
  ContactBanner,
  DownloadSimple,
} from "@/components/site";
import { Catalog } from "@/components/catalog";
export const metadata: Metadata = { title: "Produtos" };
export default function Products() {
  return (
    <div className="container page-content">
      <Breadcrumb label="Produtos" />
      <Intro
        eyebrow="OS NOSSOS PRODUTOS"
        title={
          <>
            Sabores autênticos.
            <br />
            Qualidade para o seu negócio.
          </>
        }
        description="Frutas frescas e processadas, hortícolas de qualidade e produtos adaptados às necessidades do mercado local e internacional."
      />
      <Catalog />
      <ContactBanner />
      <div className="catalog-downloads">
        <span>Catálogo de mangas</span>
        <a
          href="/catalogos/mangas-fr.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadSimple size={18} /> Français · PDF
        </a>
        <a
          href="/catalogos/mangas-en.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DownloadSimple size={18} /> English · PDF
        </a>
      </div>
    </div>
  );
}
