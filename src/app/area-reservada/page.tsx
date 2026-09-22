import type { Metadata } from "next";
import Link from "next/link";
import { Photo, Brand, LockKey, ArrowRight } from "@/components/site";
import { company } from "@/lib/content";
export const metadata: Metadata = {
  title: "Área Reservada",
  robots: { index: false, follow: false },
};
export default function Access() {
  return (
    <section className="access-page">
      <Photo src="mangas-closeup.png" alt="Mangas frescas" priority />
      <div className="access-shade" />
      <div className="access-card">
        <Brand />
        <span className="access-symbol">
          <LockKey size={30} />
        </span>
        <h1>Área Reservada</h1>
        <p>
          Um espaço para produtores,
          <br />
          parceiros e equipa.
        </p>
        <div className="access-notice">
          <h2>Acesso em preparação</h2>
          <p>
            Nesta fase, as informações sobre produtos e os pedidos comerciais
            estão disponíveis no site público.
          </p>
        </div>
        <a
          className="button"
          href={
            "mailto:" +
            company.email +
            "?subject=Pedido%20de%20acesso%20%C3%A0%20%C3%A1rea%20reservada"
          }
        >
          Solicitar informações <ArrowRight size={18} />
        </a>
        <Link className="text-link" href="/contactos">
          Contactar a equipa
        </Link>
        <small>
          O acesso autenticado será disponibilizado quando estiver activo.
        </small>
      </div>
    </section>
  );
}
