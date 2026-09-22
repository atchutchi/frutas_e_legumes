import type { Metadata } from "next";
import {
  Breadcrumb,
  Photo,
  Button,
  GlobeHemisphereWest,
  FileText,
  Truck,
  Handshake,
  ContactBanner,
} from "@/components/site";
export const metadata: Metadata = { title: "Exportação" };
const items = [
  {
    icon: GlobeHemisphereWest,
    title: "FOB Bissau / CIF",
    text: "Condições adaptadas ao destino.",
  },
  {
    icon: FileText,
    title: "Documentação",
    text: "Preparação dos requisitos de expedição.",
  },
  { icon: Truck, title: "Logística", text: "Transporte aéreo ou marítimo." },
  {
    icon: Handshake,
    title: "Parceria comercial",
    text: "Propostas ajustadas a cada pedido.",
  },
];
export default function Export() {
  return (
    <div className="container page-content">
      <Breadcrumb label="Exportação" />
      <section className="split-intro">
        <div>
          <p className="eyebrow">MERCADOS INTERNACIONAIS</p>
          <h1>
            Ligamos a Guiné-Bissau
            <br />
            ao mundo.
          </h1>
          <p>
            Trabalhamos com importadores, redes de distribuição, hotéis e
            cadeias de retalho em África e na Europa.
          </p>
          <p>
            Da selecção dos produtos à preparação da expedição, ajustamos
            quantidades, embalagens e condições de entrega às necessidades de
            cada parceiro.
          </p>
          <Button href="/contactos">Pedir uma proposta</Button>
        </div>
        <Photo
          src="armazem.jpg"
          alt="Caixas de fruta acondicionadas no armazém"
          priority
        />
      </section>
      <div className="quality-features export-features">
        {items.map((i) => (
          <article key={i.title}>
            <i.icon size={31} />
            <h2>{i.title}</h2>
            <p>{i.text}</p>
          </article>
        ))}
      </div>
      <section className="export-banner">
        <Photo
          src="mangas-camara.jpg"
          alt="Mangas acondicionadas para transporte"
        />
        <div>
          <p className="eyebrow">PRODUÇÃO E COMERCIALIZAÇÃO</p>
          <h2>
            Produtos com valor.
            <br />
            Oportunidades para o mundo.
          </h2>
          <Button href="/produtos" secondary>
            Conheça a nossa oferta
          </Button>
        </div>
      </section>
      <div className="text-section">
        <h2>Uma proposta à medida do seu mercado.</h2>
        <p>
          Indique os produtos, a quantidade estimada e o destino. Preparamos o
          contacto comercial para definir disponibilidade, transporte e
          condições de fornecimento, com preferência de cotação em XOF ou EUR.
        </p>
      </div>
      <ContactBanner />
    </div>
  );
}
