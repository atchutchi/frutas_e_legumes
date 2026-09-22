import test from "node:test";
import assert from "node:assert/strict";
import { composeInquiry } from "../src/lib/inquiry.mjs";
test("requer nome e pelo menos um contacto", () => {
  assert.throws(() => composeInquiry({ name: "Ana" }));
  assert.throws(() => composeInquiry({ email: "ana@example.com" }));
  assert.throws(() => composeInquiry({ name: "  ", phone: "123" }));
});
test("aceita pedidos flexíveis sem produto nem quantidade", () => {
  const result = composeInquiry({ name: "Ana", email: "ana@example.com" });
  assert.match(result, /Produto: A definir/);
  assert.match(result, /ana@example.com/);
  assert.doesNotMatch(result, /undefined|Quantidade/);
});
test("conserva o produto, destino e mensagem sem inventar preço", () => {
  const result = composeInquiry({
    name: "Cliente",
    phone: "+245 123",
    product: "Manga Kent / Keitt",
    quantity: "20",
    unit: "caixas",
    currency: "EUR",
    destination: "Bissau",
    message: "Gostaria de saber a disponibilidade.",
  });
  assert.match(result, /20 caixas/);
  assert.match(result, /Destino: Bissau/);
  assert.match(result, /Moeda preferida: EUR/);
  assert.doesNotMatch(result, /Preço|recebido/);
});
