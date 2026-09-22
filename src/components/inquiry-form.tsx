"use client";
import { useState } from "react";
import { products, company } from "@/lib/content";
import { composeInquiry } from "@/lib/inquiry.mjs";
import { ArrowRight, EnvelopeSimple, Check } from "./site";
export function InquiryForm({
  initialProduct = "",
}: {
  initialProduct?: string;
}) {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  return (
    <div className="form-card" id="pedido">
      <h2>Pedir informação ou cotação</h2>
      <p>Conte-nos o que procura. Quantidades e condições são flexíveis.</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const d = Object.fromEntries(new FormData(e.currentTarget));
          try {
            setMessage(composeInquiry(d));
            setError("");
            setCopied(false);
          } catch (err) {
            setError((err as Error).message);
          }
        }}
        onChange={() => {
          setMessage("");
          setCopied(false);
        }}
      >
        <div className="form-grid">
          <label>
            Nome *
            <input name="name" autoComplete="name" required maxLength={100} />
          </label>
          <label>
            Empresa
            <input name="company" autoComplete="organization" maxLength={150} />
          </label>
          <label>
            Email
            <input
              type="email"
              name="email"
              autoComplete="email"
              maxLength={254}
            />
          </label>
          <label>
            Telefone
            <input type="tel" name="phone" autoComplete="tel" maxLength={40} />
          </label>
          <p className="field-hint full">
            Indique pelo menos um contacto: email ou telefone.
          </p>
          <label className="full">
            Produto de interesse
            <select name="product" defaultValue={initialProduct}>
              <option value="">Ainda não decidi</option>
              {products.map((p) => (
                <option key={p.slug}>{p.name}</option>
              ))}
              <option>Lote misto personalizado</option>
              <option>Outro produto</option>
            </select>
          </label>
          <label>
            Quantidade estimada
            <input
              name="quantity"
              type="number"
              min="0.01"
              step="any"
              placeholder="Opcional"
            />
          </label>
          <label>
            Unidade
            <select name="unit">
              <option>kg</option>
              <option>toneladas</option>
              <option>caixas</option>
              <option>contentor</option>
              <option>A definir</option>
            </select>
          </label>
          <label>
            Destino / Porto
            <input
              name="destination"
              placeholder="Local de entrega"
              maxLength={150}
            />
          </label>
          <label>
            Moeda preferida
            <select name="currency">
              <option value="XOF">Franco CFA (XOF)</option>
              <option value="EUR">Euro (EUR)</option>
              <option>A definir</option>
            </select>
          </label>
          <label className="full">
            Mensagem
            <textarea
              name="message"
              rows={4}
              maxLength={2000}
              placeholder="Produtos, prazos ou outras informações que procura…"
            />
          </label>
        </div>
        {error && (
          <p role="alert" className="form-error">
            {error}
          </p>
        )}
        <button className="button form-submit" type="submit">
          Preparar pedido <ArrowRight size={18} />
        </button>
        <p className="form-note">
          Sem compromisso. Poderá rever a mensagem antes de a enviar.
        </p>
      </form>
      {message && (
        <div className="inquiry-review" role="status">
          <h3>O seu pedido está preparado</h3>
          <p>Escolha como enviar. A mensagem ainda não foi enviada.</p>
          <pre>{message}</pre>
          <a
            className="button"
            href={`mailto:${company.email}?subject=${encodeURIComponent("Pedido de informação / cotação")}&body=${encodeURIComponent(message)}`}
          >
            <EnvelopeSimple size={18} /> Abrir no email
          </a>
          <a
            className="button secondary"
            target="_blank"
            rel="noopener noreferrer"
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`}
          >
            Abrir no WhatsApp <ArrowRight size={18} />
          </a>
          <button
            className="text-link"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(message);
                setCopied(true);
              } catch {
                setError("Não foi possível copiar. Seleccione o texto acima.");
              }
            }}
          >
            {copied ? (
              <>
                <Check size={16} /> Copiado
              </>
            ) : (
              "Copiar mensagem"
            )}
          </button>
        </div>
      )}
    </div>
  );
}
