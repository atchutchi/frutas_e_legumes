import type { Metadata } from "next";
import { company, products } from "@/lib/content";
import {
  Breadcrumb,
  Phone,
  EnvelopeSimple,
  MapPin,
  Clock,
} from "@/components/site";
import { InquiryForm } from "@/components/inquiry-form";
export const metadata: Metadata = { title: "Contactos e Cotação" };
export default async function Contacts({
  searchParams,
}: {
  searchParams: Promise<{ produto?: string }>;
}) {
  const { produto } = await searchParams;
  const initial = products.some((p) => p.name === produto) ? produto : "";
  return (
    <div className="container page-content">
      <Breadcrumb label="Contactos" />
      <div className="contact-layout">
        <section className="contact-copy">
          <p className="eyebrow">CONTACTOS</p>
          <h1>Fale connosco.</h1>
          <p>
            A nossa equipa está disponível para responder às suas questões e
            preparar uma proposta à sua medida.
          </p>
          <div className="contact-item">
            <span>
              <Phone size={23} />
            </span>
            <div>
              <h2>Telefone / WhatsApp</h2>
              <a href="tel:+245955882000">{company.phone}</a>
              <a href="tel:+245966401229">{company.phone2}</a>
            </div>
          </div>
          <div className="contact-item">
            <span>
              <EnvelopeSimple size={23} />
            </span>
            <div>
              <h2>Email</h2>
              <a href={"mailto:" + company.email}>{company.email}</a>
              <a href={"mailto:" + company.direction}>{company.direction}</a>
            </div>
          </div>
          <div className="contact-item">
            <span>
              <MapPin size={23} />
            </span>
            <div>
              <h2>Sede da exploração</h2>
              <p>
                {company.address}
                <br />
                {company.region}
              </p>
              <small>Delegação comercial em Bissau</small>
            </div>
          </div>
          <div className="hours">
            <Clock size={26} />
            <div>
              <h2>Atendimento comercial</h2>
              <p>Segunda a sábado</p>
            </div>
          </div>
        </section>
        <InquiryForm initialProduct={initial} />
      </div>
    </div>
  );
}
