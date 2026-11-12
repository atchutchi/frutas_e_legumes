import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { products, categories } from '../products.mjs';
const root = new URL('../',import.meta.url);
test('Conserva as 19 referências identificadas sem duplicar o fónio ou a bolacha',()=>{
  const expected=['caju-natural','bolachas','pasta-caju','fonio','caju-malagueta','caju-tostado','caju-maracuja','caju-manga','caju-cacau','chips','pasta-chocolate','farinha-cabaceira','farinha-caju','farinha-mistura','farinha-polpa','kamoka','tchacri','arroz','moringa'];
  assert.deepEqual(products.map(p=>p.id).sort(),expected.sort());
  assert.equal(new Set(products.map(p=>p.id)).size,products.length);
  for(const p of products){assert.ok(categories.includes(p.category));assert.ok(p.name&&p.description&&p.note);}
});
test('Todas as referências e imagens estão disponíveis no HTML estático',async()=>{
  const html=await readFile(new URL('index.html',root),'utf8');
  for(const p of products){await access(new URL(`assets/${p.image}.webp`,root));assert.ok(html.includes(`data-product="${p.id}"`));assert.ok(html.includes(`href="#produto/${p.id}"`));}
  assert.equal((html.match(/data-product=/g)||[]).length,19);
  assert.ok(!html.includes('<!-- CATALOG -->'));
  assert.ok(!html.includes('{{PRODUCT_COUNT}}'));
});
test('Mantém ingredientes confirmados e contactos da marca correta',async()=>{
  assert.equal(products.find(p=>p.id==='caju-malagueta').ingredients,'Castanha de caju, malagueta, sal e óleo.');
  assert.equal(products.find(p=>p.id==='fonio').ingredients,undefined);
  const html=await readFile(new URL('index.html',root),'utf8');
  assert.ok(html.includes('245955304558'));assert.ok(html.includes('nhaguinendade@yahoo.com'));
  assert.ok(!html.includes('frutaslegumes-gb.com'));assert.ok(!html.includes('245955882000'));
});
