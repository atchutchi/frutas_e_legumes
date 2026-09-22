import { Breadcrumb } from "@/components/site";
import { company } from "@/lib/content";
export const metadata = { title: "Privacidade" };
export default function Privacy() {
  return (
    <article className="container page-content legal">
      <Breadcrumb label="Privacidade" />
      <h1>Privacidade</h1>
      <p>
        Esta versão do site apresenta informações sobre a Frutas e Legumes
        Guiné-Bissau, SARL e permite preparar pedidos de informação ou cotação.
      </p>
      <h2>Formulário de contacto</h2>
      <p>
        Os dados introduzidos no formulário são usados no seu navegador para
        preparar uma mensagem. O formulário não guarda esses dados numa base de
        dados do site nem os envia automaticamente.
      </p>
      <p>
        Ao escolher email ou WhatsApp, a mensagem é encaminhada para a aplicação
        seleccionada. Reveja o conteúdo antes de confirmar o envio. O tratamento
        nessa aplicação está sujeito às condições do respectivo serviço.
      </p>
      <h2>Funcionamento do site</h2>
      <p>
        Esta versão não inclui ferramentas de publicidade ou análise de
        audiência. O serviço de alojamento pode tratar dados técnicos
        necessários à disponibilização e segurança do site.
      </p>
      <h2>Contactos</h2>
      <p>
        Para esclarecimentos relacionados com as informações que envie à
        empresa, contacte{" "}
        <a href={"mailto:" + company.email}>{company.email}</a>.
      </p>
    </article>
  );
}
