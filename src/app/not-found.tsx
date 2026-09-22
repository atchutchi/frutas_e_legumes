import { Button } from "@/components/site";
export default function NotFound() {
  return (
    <section className="container page-content not-found">
      <p className="eyebrow">404</p>
      <h1>Esta página não existe.</h1>
      <p>
        Continue a explorar os nossos produtos ou regresse à página inicial.
      </p>
      <Button href="/">Voltar ao início</Button>
    </section>
  );
}
