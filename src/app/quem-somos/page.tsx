import type { Metadata } from "next";
import {
  Breadcrumb,
  Photo,
  Button,
  Leaf,
  UsersThree,
  GlobeHemisphereWest,
} from "@/components/site";
import { Film } from "@/components/film";
export const metadata: Metadata = { title: "Quem Somos" };
export default function About() {
  return (
    <div className="container page-content">
      <Breadcrumb label="Quem Somos" />
      <section className="split-intro">
        <div>
          <p className="eyebrow">A NOSSA HISTÓRIA</p>
          <h1>
            Raízes locais.
            <br />
            Horizonte global.
          </h1>
          <p>
            A Frutas e Legumes Guiné-Bissau, SARL é uma sociedade agroindustrial
            dedicada à produção, processamento e comercialização de frutas
            tropicais e hortícolas.
          </p>
          <p>
            Entre Biombo e Bissau, conjugamos o cultivo com a conservação em
            frio e a desidratação. O nosso propósito é valorizar o potencial
            agrícola da Guiné-Bissau e aproximar os seus produtos de novos
            mercados.
          </p>
          <Button href="/galeria">Conheça o nosso trabalho</Button>
        </div>
        <Photo
          src="triagem-melhorada.png"
          alt="Equipa de trabalho na linha de selecção de mangas"
          priority
        />
      </section>
      <section className="values">
        <article>
          <Leaf size={31} />
          <h2>A nossa missão</h2>
          <p>
            Gerar valor através da produção agrícola e da transformação dos
            produtos locais.
          </p>
        </article>
        <article>
          <GlobeHemisphereWest size={31} />
          <h2>A nossa visão</h2>
          <p>
            Ligar o potencial da terra guineense às oportunidades dos mercados
            locais e internacionais.
          </p>
        </article>
        <article>
          <UsersThree size={31} />
          <h2>O nosso compromisso</h2>
          <p>
            Qualidade, valorização das pessoas, rastreabilidade e práticas
            sustentáveis.
          </p>
        </article>
      </section>
      <Film />
      <section className="text-section">
        <h2>As pessoas fazem parte da nossa produção.</h2>
        <p>
          A actividade agrícola e as linhas de triagem e embalamento envolvem as
          comunidades rurais. A integração de mão-de-obra feminina e a
          valorização dos produtores locais fazem parte do compromisso
          apresentado pela empresa.
        </p>
      </section>
    </div>
  );
}
