export function composeInquiry(data) {
  const text = (value) =>
    String(value ?? "")
      .trim()
      .slice(0, 2000);
  const name = text(data.name),
    contact = text(data.email) || text(data.phone);
  if (!name || !contact)
    throw new Error("Indique o seu nome e pelo menos um contacto.");
  return [
    "Pedido de informação / cotação",
    `Nome: ${name}`,
    data.company && `Empresa: ${text(data.company)}`,
    data.email && `Email: ${text(data.email)}`,
    data.phone && `Telefone: ${text(data.phone)}`,
    `Produto: ${text(data.product) || "A definir"}`,
    data.quantity &&
      `Quantidade estimada: ${text(data.quantity)} ${text(data.unit)}`,
    data.destination && `Destino: ${text(data.destination)}`,
    `Moeda preferida: ${text(data.currency) || "XOF"}`,
    data.message && `Mensagem: ${text(data.message)}`,
  ]
    .filter(Boolean)
    .join("\n");
}
