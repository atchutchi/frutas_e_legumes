import { readFile, writeFile, access, mkdir, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { products, categories } from '../products.mjs';
const root = new URL('../', import.meta.url);
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const arrow = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>';
for (const p of products) await access(new URL(`assets/${p.image}.webp`, root));
const cards = products.map((p,i) => `<article class="product-card" data-product="${p.id}" data-category="${escape(p.category)}" data-search="${escape(`${p.name} ${p.aliases || ''} ${p.category}`)}">
  <a class="product-visual ${p.illustration ? 'illustration' : 'photograph'}" href="#produto/${p.id}" aria-label="Conhecer ${escape(p.name)}"><img src="assets/${p.image}.webp" alt="${p.illustration ? 'Ilustração: ' : ''}${escape(p.name)}" width="600" height="680" loading="lazy">${p.illustration ? '<span class="image-label">Ilustração</span>' : ''}<span class="product-index">${String(i+1).padStart(2,'0')}</span></a>
  <div class="product-info"><p class="product-category">${escape(p.category)}</p><h3><a href="#produto/${p.id}">${escape(p.name)}</a></h3><p>${escape(p.note)}</p><div class="product-actions"><a href="#produto/${p.id}" class="text-link">Conhecer ${arrow}</a><button class="add-product icon-button" data-add="${p.id}" aria-label="Adicionar ${escape(p.name)} ao pedido"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg></button></div></div>
  <noscript><p>${escape(p.description)}</p><a href="https://wa.me/245955304558?text=${encodeURIComponent(`Olá! Gostaria de informações sobre ${p.name}.`)}" rel="noopener" target="_blank">Pedir informações por WhatsApp</a></noscript>
</article>`).join('\n');
const filters = categories.map((c,i) => `<button class="filter${i===0?' active':''}" type="button" data-filter="${escape(c)}" aria-pressed="${i===0}">${escape(c)}<span>${i===0 ? products.length : products.filter(p=>p.category===c).length}</span></button>`).join('');
const template = await readFile(new URL('src/index.html', root),'utf8');
const html = template.replace('<!-- CATALOG -->',cards).replace('<!-- FILTERS -->',filters).replaceAll('{{PRODUCT_COUNT}}',String(products.length));
await writeFile(new URL('index.html',root), html);
await mkdir(new URL('dist/assets/',root),{recursive:true});
for(const file of ['index.html','styles.css','app.js','products.mjs','privacidade.html','robots.txt','sitemap.xml']) {
  await copyFile(new URL(file,root),new URL(`dist/${file}`,root));
}
const assets=new Set([...products.map(p=>`${p.image}.webp`),'logo-aprovado.webp','fundadora.webp','producao.webp']);
for(const file of assets) await copyFile(new URL(`assets/${file}`,root),new URL(`dist/assets/${file}`,root));
console.log(`Catálogo gerado: ${products.length} produtos em ${fileURLToPath(root)}`);
