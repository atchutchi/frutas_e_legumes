# Frutas e Legumes Guiné-Bissau, SARL

Site institucional em Next.js 16, TypeScript e React 19, baseado na referência visual e nos materiais fornecidos. Catálogo sem preços, galeria com fotografias e vídeos, informação de exportação e pedidos comerciais flexíveis.

## Desenvolvimento

```sh
npm ci
npm run dev
```

## Verificação

```sh
npm test
npm run typecheck
npm run build
npm start
```

## Estrutura

- `src/app`: páginas e estilos responsivos.
- `src/lib/content.ts`: produtos, contactos e galeria.
- `src/components`: navegação, filtros, galeria, formulário e apresentação Remotion.
- `public/images`: fotografias fornecidas e derivados melhorados.
- `public/videos`: dois vídeos originais.
- `public/catalogos`: catálogos originais em francês e inglês.
- `docs/fontes-e-validacao.md`: proveniência, divergências e decisões editoriais.
- `design-qa.md`: verificação visual e funcional.

## Pedidos comerciais

O formulário não utiliza base de dados nem simula envio. Prepara a mensagem no navegador. O visitante revê os dados e abre o seu email ou WhatsApp para confirmar o envio. O nome e pelo menos um contacto são obrigatórios. Quantidade, destino e requisitos são opcionais.

## Área reservada

Página informativa com acesso em preparação. Não existe autenticação activa nem são copiados dados internos da aplicação de referência. Para activar autenticação no futuro, definir perfis, permissões, fornecedor e armazenamento antes de implementar.

## Publicação

Vercel com preset Next.js, instalação `npm ci` e compilação `npm run build`. Não são necessárias variáveis de ambiente para esta versão informativa. Não guardar credenciais no repositório.

## Fotografia e design

Os originais foram preservados. As versões com image_gen são derivados visuais, não documentos de prova. A galeria mantém fotografias originais. A identidade visual segue a maquete fornecida. O símbolo vegetal usa a biblioteca Phosphor, sem alegar reprodução de um logótipo oficial vectorial.

A apresentação Remotion é iniciada pelo utilizador e não reproduz automaticamente. Consultar os termos oficiais de Remotion para o contexto empresarial aplicável antes de ampliar o seu uso.
