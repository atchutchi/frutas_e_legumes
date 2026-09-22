"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  List,
  X,
  Plant,
  Leaf,
  Snowflake,
  GlobeHemisphereWest,
  UsersThree,
  ShieldCheck,
  FileText,
  MagnifyingGlass,
  Truck,
  Handshake,
  EnvelopeSimple,
  Phone,
  MapPin,
  Play,
  ArrowLeft,
  Check,
  DownloadSimple,
  LockKey,
  Clock,
} from "@phosphor-icons/react";
import { navigation, company } from "@/lib/content";
export {
  ArrowRight,
  ArrowUpRight,
  Plant,
  Leaf,
  Snowflake,
  GlobeHemisphereWest,
  UsersThree,
  ShieldCheck,
  FileText,
  MagnifyingGlass,
  Truck,
  Handshake,
  EnvelopeSimple,
  Phone,
  MapPin,
  Play,
  ArrowLeft,
  Check,
  DownloadSimple,
  LockKey,
  Clock,
};
export function Brand() {
  return (
    <Link href="/" className="brand" aria-label="Frutas e Legumes SARL, início">
      <Plant size={36} weight="duotone" />
      <span>
        Frutas e Legumes<small>GUINÉ-BISSAU · SARL</small>
      </span>
    </Link>
  );
}
export function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="nav-wrap">
        <Brand />
        <nav
          aria-label="Navegação principal"
          className={open ? "nav open" : "nav"}
        >
          {navigation.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={path === n.href ? "active" : ""}
              aria-current={path === n.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {n.label}
            </Link>
          ))}
          <Link
            className="mobile-access"
            href="/area-reservada"
            onClick={() => setOpen(false)}
          >
            Área Reservada
          </Link>
        </nav>
        <div className="nav-actions">
          <Link
            href="/area-reservada"
            className="access"
            aria-label="Área reservada"
          >
            <LockKey size={20} />
          </Link>
          <Link className="button small" href="/contactos">
            Pedir Cotação <ArrowUpRight size={15} />
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer>
      <div className="container footer-grid">
        <div>
          <Brand />
          <p>
            Da produção à comercialização.
            <br />
            Frutas tropicais e hortícolas com valor.
          </p>
        </div>
        <div>
          <h3>Conheça-nos</h3>
          <Link href="/quem-somos">Quem Somos</Link>
          <Link href="/qualidade">Qualidade e Infraestruturas</Link>
          <Link href="/galeria">Galeria</Link>
        </div>
        <div>
          <h3>Trabalhe connosco</h3>
          <Link href="/produtos">Os nossos produtos</Link>
          <Link href="/exportacao">Exportação</Link>
          <Link href="/contactos">Informações e cotações</Link>
        </div>
        <div>
          <h3>Fale connosco</h3>
          <a href={"mailto:" + company.email}>{company.email}</a>
          <a href={"tel:" + company.phone.replaceAll(" ", "")}>
            {company.phone}
          </a>
          <p>{company.region}</p>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Frutas e Legumes Guiné-Bissau, SARL
        </span>
        <div>
          <Link href="/privacidade">Privacidade</Link>
          <Link href="/area-reservada">
            Área Reservada <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
export function Button({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link className={"button" + (secondary ? " secondary" : "")} href={href}>
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}
export function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(max-width: 700px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={"photo " + className}>
      <Image
        src={"/images/" + src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}
export function Breadcrumb({ label }: { label: string }) {
  return (
    <div className="breadcrumb">
      <Link href="/">Início</Link>
      <span>/</span>
      <span>{label}</span>
    </div>
  );
}
export function Intro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="intro">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
      </div>
      {description && <p className="intro-description">{description}</p>}
    </div>
  );
}
const advantages = [
  {
    icon: Leaf,
    title: "Produção sustentável",
    description: "Valorização da terra e dos produtos locais.",
  },
  {
    icon: Snowflake,
    title: "Conservação em frio",
    description: "Cuidado com a frescura após a colheita.",
  },
  {
    icon: GlobeHemisphereWest,
    title: "Exportação internacional",
    description: "Ligação aos mercados e aos seus parceiros.",
  },
  {
    icon: UsersThree,
    title: "Impacto nas comunidades",
    description: "Pessoas no centro da nossa actividade.",
  },
];
export function Advantages({ compact = false }: { compact?: boolean }) {
  return (
    <div className={"advantages" + (compact ? " compact" : "")}>
      {advantages.map((a) => (
        <div key={a.title}>
          <a.icon size={30} weight="light" />
          <h3>{a.title}</h3>
          {!compact && <p>{a.description}</p>}
        </div>
      ))}
    </div>
  );
}
export function ContactBanner() {
  return (
    <aside className="contact-banner">
      <div>
        <span className="banner-icon">
          <Handshake size={28} />
        </span>
        <div>
          <h3>Procura um produto específico?</h3>
          <p>Fale connosco para uma proposta à sua medida.</p>
        </div>
      </div>
      <Button href="/contactos">Pedir Cotação</Button>
    </aside>
  );
}
