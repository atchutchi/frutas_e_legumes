import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/lib/content";
import { Photo, Breadcrumb, Button, Check, ArrowLeft } from "@/components/site";
export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return { title: products.find((p) => p.slug === slug)?.name ?? "Produto" };
}
export default async function Product({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = products.find((p) => p.slug === slug);
  if (!p) notFound();
  return (
    <div className="container page-content">
      <Breadcrumb label={p.name} />
      <section className="split-intro product-detail">
        <Photo src={p.image} alt={p.name} priority />
        <div>
          <p className="eyebrow">{p.category}</p>
          <h1>{p.name}</h1>
          <p>{p.description}</p>
          <ul className="detail-list">
            {p.details.map((d) => (
              <li key={d}>
                <Check size={18} />
                {d}
              </li>
            ))}
          </ul>
          <Button href={"/contactos?produto=" + encodeURIComponent(p.name)}>
            Pedir informação ou cotação
          </Button>
          <p className="small-note">
            Disponibilidade, quantidade e condições de entrega mediante
            consulta.
          </p>
          <Link href="/produtos" className="text-link">
            <ArrowLeft size={18} /> Voltar aos produtos
          </Link>
        </div>
      </section>
    </div>
  );
}
