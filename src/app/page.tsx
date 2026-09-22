import Link from "next/link";
import { HomeHero } from "@/components/home-hero";
import {
  Advantages,
  Photo,
  Button,
  ContactBanner,
  ArrowRight,
  Plant,
} from "@/components/site";
import { ProductCard } from "@/components/catalog";
import { products } from "@/lib/content";
export default function Home() {
  return (
    <>
      <HomeHero />
      <section className="container home-advantages">
        <Advantages compact />
      </section>
      <section className="container home-story">
        <Photo src="campo-papaia.jpg" alt="Papaieiras no campo" />
        <div className="story-copy">
          <span className="origin-seal">
            <Plant size={30} />
            <span>
              GUINÉ-BISSAU
              <br />
              PRODUÇÃO LOCAL
            </span>
          </span>
          <p className="eyebrow">A NOSSA ORIGEM</p>
          <h2>
            Cultivamos{" "}
            <br />o futuro da{" "}
            <br />
            Guiné-Bissau.
          </h2>
          <p>
            Valorizamos a terra, as pessoas e os seus frutos, ligando a produção
            local aos mercados globais.
          </p>
          <Link href="/quem-somos" className="text-link">
            Conheça a nossa história <ArrowRight size={18} />
          </Link>
        </div>
        <Photo
          src="triagem-melhorada.png"
          alt="Trabalho na linha de triagem"
          className="story-detail"
        />
      </section>
      <section className="section soft-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OS NOSSOS PRODUTOS</p>
              <h2>
                Sabores autênticos.
                <br />
                Qualidade para o seu negócio.
              </h2>
            </div>
            <Link href="/produtos" className="text-link">
              Ver todos os produtos <ArrowRight size={18} />
            </Link>
          </div>
          <div className="product-grid featured-products">
            {products.slice(0, 3).map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
      <section className="container section">
        <div className="infrastructure-band">
          <Photo
            src="camara-fria-melhorada.png"
            alt="Câmara frigorífica com caixas de fruta"
          />
          <div>
            <p className="eyebrow">DO CAMPO AO MERCADO</p>
            <h2>
              Frescura preservada.
              <br />
              Em cada etapa.
            </h2>
            <p>
              Triagem, embalamento e conservação em frio. Uma cadeia que
              valoriza a qualidade dos nossos produtos.
            </p>
            <Button href="/qualidade" secondary>
              Conheça as instalações
            </Button>
          </div>
        </div>
        <ContactBanner />
      </section>
    </>
  );
}
