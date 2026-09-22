# Verificação visual e funcional

Data: 22/09/2026. Referência: maquete de oito páginas fornecida pelo utilizador. Implementação: Next.js, navegador integrado Codex, 1440 × 1000 e 390 × 844. Capturas locais em `qa/screenshots/`, incluindo comparação conjunta em `comparison.jpg` e grelha móvel em `mobile-board.jpg`.

## Resultado

final result: passed

Não foram encontrados bloqueios de navegação, formulário, filtros, visualização da galeria ou largura móvel nos percursos verificados. Este resultado respeita as adaptações de conteúdo e fotografia descritas abaixo. Não significa equivalência de píxeis com a maquete.

## Superfícies visuais

Tipografia: Barlow e Source Sans 3, hierarquia forte próxima da referência, títulos de duas linhas e texto de apoio legível. Verificados título inicial, catálogo, página da empresa e contactos.

Espaçamento: cabeçalho branco, hero com texto à esquerda, quatro vantagens, pares de texto e fotografia, grelha de produtos, bandas verdes e formulário em duas colunas. Em telemóvel as secções passam a uma coluna e o cabeçalho tem menu. Não foi detectado overflow horizontal nas oito páginas principais nem na ficha da manga.

Cores: verde profundo, branco, verde de acção, linhas discretas e banda verde clara. Foco visível em botões, links e campos. A combinação de cores preserva a referência.

Imagens: fotografias do utilizador prevalecem sobre os cenários ilustrativos da maquete. Foram verificados carregamento, enquadramento e proporção. A primeira recolha capturou algumas imagens antes do carregamento. A recolha foi repetida e confirmou imagens visíveis completas com dimensões naturais válidas. A galeria usa originais, enquanto fotografias de apresentação e quatro produtos usam derivados melhorados.

Texto: conteúdo baseado no site fornecido e catálogos. Alterações justificadas: capacidade de 35 t em vez de toneladas por semana, ausência de preços e de afirmações de certificação sem suporte documental, contactos do site principal e pedido flexível. Não foram inventados links sociais nem traduções para um selector de idioma vazio.

## Interacções verificadas

- Navegação entre as oito páginas e ficha de produto.
- Menu móvel abre e fecha ao escolher uma página.
- Filtro Hortícolas apresenta quatro produtos. Todos repõe nove.
- Link da ficha preenche o produto no formulário.
- Nome sem contacto apresenta erro. Nome e email permitem preparar a mensagem.
- Revisão conserva produto, moeda e mensagem. Links email e WhatsApp contêm a mensagem codificada. Nenhum teste enviou mensagens externas.
- Filtro Comunidade apresenta uma fotografia. Diálogo abre e fecha com Escape.
- Apresentação Remotion carrega, reproduz e pausa. Não começa automaticamente.
- Dois vídeos locais incluídos com controlos nativos.
- Não foram registados erros de execução no navegador. Remotion apresenta um aviso informativo sobre a sua licença comercial.

## Adaptações explícitas

A maquete mostra fotografias e um símbolo de marca que não existem como ficheiros oficiais separados. Usam-se as fotografias efectivamente fornecidas e o ícone vegetal da biblioteca Phosphor. A área reservada apresenta o estado real de preparação, sem formulário de login falso. A página de contactos prepara a mensagem e não simula recepção.

## Validação técnica

Compilação de produção Next.js concluída, verificação TypeScript concluída e três testes do construtor de pedidos aprovados. Ficheiros de investigação, configuração local Vercel e variáveis de ambiente excluídos do Git.
