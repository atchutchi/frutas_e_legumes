export const company = {
  name: "Frutas e Legumes Guiné-Bissau, SARL",
  email: "comercial@frutaslegumes-gb.com",
  direction: "direcao@frutaslegumes-gb.com",
  phone: "+245 955 882 000",
  phone2: "+245 966 401 229",
  whatsapp: "245955882000",
  address: "Estrada de Biombo, Km 14",
  region: "Biombo, Guiné-Bissau",
};
export const navigation = [
  { href: "/", label: "Início" },
  { href: "/quem-somos", label: "Quem Somos" },
  { href: "/produtos", label: "Produtos" },
  { href: "/qualidade", label: "Qualidade" },
  { href: "/exportacao", label: "Exportação" },
  { href: "/galeria", label: "Galeria" },
  { href: "/contactos", label: "Contactos" },
];
export type Product = {
  slug: string;
  name: string;
  category: "Tropicais" | "Hortícolas" | "Produtos Processados";
  image: string;
  short: string;
  description: string;
  details: string[];
};
export const products: Product[] = [
  {
    slug: "manga",
    name: "Manga Kent / Keitt",
    category: "Tropicais",
    image: "mangas-closeup.png",
    short: "Fresca e preparada para exportação",
    description:
      "Mangas seleccionadas e calibradas para o mercado local e internacional. As variedades Kent e Keitt são complementadas pelas variedades Palmer e Osten apresentadas nos nossos catálogos.",
    details: [
      "Caixas de 4 kg e 6 kg",
      "Calibres 6 a 12",
      "Expedição aérea ou marítima",
      "Disponibilidade mediante consulta",
    ],
  },
  {
    slug: "caju",
    name: "Castanha de Caju",
    category: "Produtos Processados",
    image: "caju-melhorado.png",
    short: "Em casca e amêndoa seleccionada",
    description:
      "Castanha em casca e amêndoas de caju inteiras para distribuição, indústria e exportação. Diferentes calibres e formatos adaptados às necessidades de cada cliente.",
    details: [
      "Em casca (RCN) e amêndoas WW",
      "Calibres W180, W240 e W320",
      "Embalamento a vácuo",
      "Formatos mediante consulta",
    ],
  },
  {
    slug: "manga-desidratada",
    name: "Manga Desidratada",
    category: "Produtos Processados",
    image: "manga-seca.jpg",
    short: "Sem adição de açúcar",
    description:
      "Lamelas de manga obtidas por secagem solar e híbrida. Uma forma de valorizar a fruta, conservar o seu sabor e diversificar a oferta para os mercados.",
    details: [
      "Doypack 250 g, 500 g e 1 kg",
      "Formato a granel de 5 kg",
      "Embalagem hermética",
      "Condições de fornecimento a acordar",
    ],
  },
  {
    slug: "papaia",
    name: "Mamão Papaia",
    category: "Tropicais",
    image: "papaia.jpg",
    short: "Formosa e Solo, dos nossos pomares",
    description:
      "Papaia dos pomares de Biombo, seleccionada para o abastecimento de hotéis, restauração e distribuição. Fruta tropical colhida de acordo com a maturação pretendida.",
    details: [
      "Variedades Formosa e Solo",
      "Mercado local e regional",
      "Acondicionamento adaptado ao fruto",
    ],
  },
  {
    slug: "tomate",
    name: "Tomate Regional",
    category: "Hortícolas",
    image: "tomate-melhorado.png",
    short: "Produção local, sabor autêntico",
    description:
      "Tomate fresco de polpa firme para consumo e distribuição. Seleccionado para abastecer mercados, supermercados, hotéis e restauração.",
    details: [
      "Tomate de mesa",
      "Caixas plásticas de 20 kg",
      "Disponibilidade mediante consulta",
    ],
  },
  {
    slug: "pimento",
    name: "Pimento e Malagueta",
    category: "Hortícolas",
    image: "pimentos-melhorados.png",
    short: "Frescura, cor e aroma",
    description:
      "Pimentos verdes e malaguetas regionais. Uma produção diversificada para o mercado fresco e para diferentes utilizações na cozinha.",
    details: [
      "Pimento verde e malaguetas",
      "Caixas ou sacos",
      "Fornecimento a acordar",
    ],
  },
  {
    slug: "beringela",
    name: "Beringela Roxa",
    category: "Hortícolas",
    image: "beringelas.jpg",
    short: "Colheita cuidada, polpa firme",
    description:
      "Beringela cultivada nas hortas, colhida manualmente e seleccionada para o mercado local e regional.",
    details: [
      "Caixas arejadas de 10 kg ou 15 kg",
      "Colheita manual",
      "Mercado local e regional",
    ],
  },
  {
    slug: "quiabo",
    name: "Jiló e Quiabo",
    category: "Hortícolas",
    image: "quiabo.jpg",
    short: "Hortícolas da gastronomia local",
    description:
      "Hortícolas tradicionais apreciados na gastronomia regional. Jiló e quiabo provenientes de uma produção diversificada.",
    details: [
      "Jiló e quiabo",
      "Selecção de vegetais frescos",
      "Quantidade e embalagem flexíveis",
    ],
  },
  {
    slug: "carambola",
    name: "Carambola",
    category: "Tropicais",
    image: "carambola.jpg",
    short: "Fruta tropical dos nossos pomares",
    description:
      "Carambola para consumo fresco, hotelaria, sobremesas e restauração. Seleccionada no ponto de maturação adequado ao destino.",
    details: [
      "Fruta fresca",
      "Caixas com protecção",
      "Disponibilidade sazonal",
    ],
  },
];
export const gallery = [
  {
    image: "mangas-selecionadas.jpg",
    label: "Mangas seleccionadas",
    category: "Produtos",
  },
  {
    image: "campo-papaia.jpg",
    label: "Cultivo de papaia",
    category: "Produção",
  },
  {
    image: "triagem.jpg",
    label: "Trabalho na linha de triagem",
    category: "Infraestruturas",
  },
  {
    image: "camara-fria.jpg",
    label: "Armazenamento frigorífico",
    category: "Infraestruturas",
  },
  {
    image: "caju.jpg",
    label: "Amêndoas de castanha de caju",
    category: "Produtos",
  },
  {
    image: "colheita-horticolas.jpg",
    label: "Diversidade da colheita",
    category: "Produtos",
  },
  {
    image: "produtor.jpg",
    label: "Pessoas e produtos",
    category: "Comunidade",
  },
  {
    image: "beringela-campo.jpg",
    label: "Beringela no campo",
    category: "Produção",
  },
  {
    image: "linha-triagem.jpg",
    label: "Selecção e calibragem",
    category: "Infraestruturas",
  },
  {
    image: "pimentos-malagueta.jpg",
    label: "Pimentos e malaguetas",
    category: "Produtos",
  },
  {
    image: "armazem.jpg",
    label: "Caixas preparadas no armazém",
    category: "Infraestruturas",
  },
  {
    image: "carambola.jpg",
    label: "Carambolas após a colheita",
    category: "Produção",
  },
];
