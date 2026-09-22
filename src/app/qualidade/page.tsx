import type { Metadata } from "next";
import {
  Breadcrumb,
  Intro,
  Photo,
  Snowflake,
  ShieldCheck,
  FileText,
  MagnifyingGlass,
  ContactBanner,
} from "@/components/site";
export const metadata: Metadata = { title: "Qualidade e Infraestruturas" };
const features = [
  {
    icon: Snowflake,
    title: "Conservação em frio",
    text: "Armazenamento e pré-arrefecimento pós-colheita.",
  },
  {
    icon: ShieldCheck,
    title: "Controlo fitossanitário",
    text: "Preparação para a inspecção e os requisitos de destino.",
  },
  {
    icon: FileText,
    title: "Embalamento cuidado",
    text: "Formatos adaptados a cada produto e mercado.",
  },
  {
    icon: MagnifyingGlass,
    title: "Rastreabilidade",
    text: "Identificação dos lotes ao longo da cadeia.",
  },
];
export default function Quality() {
  return (
    <div className="container page-content">
      <Breadcrumb label="Qualidade e Infraestruturas" />
      <Intro
        eyebrow="QUALIDADE EM TODA A CADEIA"
        title={
          <>
            Do campo ao mercado,
            <br />
            com cuidado em cada etapa.
          </>
        }
        description="Preservamos a frescura dos produtos através da selecção, do acondicionamento e da conservação pós-colheita."
      />
      <div className="quality-features">
        {features.map((f) => (
          <article key={f.title}>
            <f.icon size={33} />
            <h2>{f.title}</h2>
            <p>{f.text}</p>
          </article>
        ))}
      </div>
      <section className="infrastructure-band quality-band">
        <Photo
          src="camara-fria-melhorada.png"
          alt="Interior da câmara frigorífica"
        />
        <div>
          <p className="eyebrow">AS NOSSAS INSTALAÇÕES</p>
          <h2>
            Infraestruturas
            <br />
            para maior frescura.
          </h2>
          <p>
            Câmara fria, unidade de triagem e embalamento. A nossa estrutura
            acompanha os produtos desde a recepção até à preparação para
            expedição.
          </p>
          <a className="button secondary" href="#processo">
            Conheça o processo
          </a>
        </div>
      </section>
      <div className="stats">
        <div>
          <strong>35 t</strong>
          <span>Capacidade de armazenamento</span>
        </div>
        <div>
          <strong>3,8 °C</strong>
          <span>Temperatura da câmara indicada</span>
        </div>
        <div>
          <strong>Solar + híbrida</strong>
          <span>Processos de secagem</span>
        </div>
        <div>
          <strong>Por lote</strong>
          <span>Identificação e acompanhamento</span>
        </div>
      </div>
      <section className="split-intro process-section" id="processo">
        <div>
          <p className="eyebrow">SELECÇÃO E ACONDICIONAMENTO</p>
          <h2>
            A qualidade começa
            <br />
            nos detalhes.
          </h2>
          <p>
            A triagem permite seleccionar os frutos por maturação e calibre. O
            embalamento protege os produtos e adapta-os ao transporte e à
            distribuição.
          </p>
          <p>
            A unidade de desidratação acrescenta valor às frutas. Os formatos
            herméticos e o embalamento a vácuo complementam a oferta de manga e
            castanha de caju.
          </p>
        </div>
        <Photo
          src="triagem-melhorada.png"
          alt="Selecção de frutos na linha de embalamento"
        />
      </section>
      <ContactBanner />
    </div>
  );
}
