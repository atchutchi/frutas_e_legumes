import { products } from './products.mjs';

const $ = s => document.querySelector(s);
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
let filter = 'Todos';
let detailReturnFocus;
let previousHash = '#produtos';
const menu = $('#menu-toggle');
const navigation = $('#navigation');
function closeMenu(){ navigation.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menu'); }
menu.addEventListener('click',()=>{ const open=menu.getAttribute('aria-expanded')!=='true'; navigation.classList.toggle('open',open);menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu'); });
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
document.addEventListener('click',e=>{if(!e.target.closest('.header')) closeMenu();});
window.matchMedia('(min-width:801px)').addEventListener('change',closeMenu);
$('#year').textContent=new Date().getFullYear();

function applyFilters(){
  const query=normalize($('#search').value);let shown=0;
  document.querySelectorAll('[data-product]').forEach(card=>{const matches=(filter==='Todos'||card.dataset.category===filter)&&normalize(card.dataset.search).includes(query);card.hidden=!matches;if(matches)shown++;});
  $('#results-count').textContent=`${shown} ${shown===1?'produto':'produtos'}${filter==='Todos'?'':` · ${filter}`}`;
  $('#no-results').hidden=shown>0;
  document.querySelectorAll('[data-filter]').forEach(button=>{const active=button.dataset.filter===filter;button.classList.toggle('active',active);button.setAttribute('aria-pressed',String(active));});
}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{filter=button.dataset.filter;applyFilters();}));
$('#search').addEventListener('input',applyFilters);
$('#clear-search').addEventListener('click',()=>{filter='Todos';$('#search').value='';applyFilters();$('#search').focus();});

function syncScrollLock(){document.body.classList.toggle('dialog-open',Boolean(document.querySelector('dialog[open]')));}
function openDialog(dialog){closeMenu();if(!dialog.open)dialog.showModal();syncScrollLock();}
document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>document.getElementById(button.dataset.close).close()));
document.querySelectorAll('dialog').forEach(dialog=>{dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});dialog.addEventListener('close',syncScrollLock);});
function productFromHash(){return products.find(p=>`#produto/${p.id}`===location.hash);}
function openProduct(p){
  const dialog=$('#product-dialog');
  if(!dialog.open) detailReturnFocus=document.activeElement;
  $('#product-detail').innerHTML=`<div class="detail-layout"><div class="detail-photo ${p.illustration?'illustration':''}"><img src="assets/${p.image}.webp" alt="${p.illustration?'Ilustração: ':''}${escape(p.name)}">${p.illustration?'<span class="image-label">Ilustração do produto</span>':''}</div><div class="detail-copy"><p class="eyebrow">${escape(p.category)}</p><h2 id="product-title" tabindex="-1">${escape(p.name)}</h2><p>${escape(p.description)}</p>${p.ingredients||p.allergen?`<dl>${p.ingredients?`<dt>Ingredientes</dt><dd>${escape(p.ingredients)}</dd>`:''}${p.allergen?`<dt>Alergénios</dt><dd>${escape(p.allergen)}</dd>`:''}</dl>`:''}<p class="detail-note">Para conhecer a composição completa e atualizada, consulte a etiqueta do produto e a produtora.</p></div></div>`;
  openDialog(dialog);$('#product-title').focus({preventScroll:true});
}
document.addEventListener('click',e=>{const link=e.target.closest('a[href^="#produto/"]');if(link){const p=products.find(p=>`#produto/${p.id}`===link.getAttribute('href'));if(p){e.preventDefault();previousHash=location.hash.startsWith('#produto/')?'#produtos':location.hash||'#produtos';history.pushState({product:true},'',`#produto/${p.id}`);openProduct(p);}}});
function syncHash(){const p=productFromHash();if(p)openProduct(p);else if($('#product-dialog').open)$('#product-dialog').close();}
window.addEventListener('hashchange',syncHash);
window.addEventListener('popstate',syncHash);
$('#product-dialog').addEventListener('close',()=>{if(location.hash.startsWith('#produto/'))history.replaceState(null,'',previousHash);if(detailReturnFocus?.isConnected)detailReturnFocus.focus({preventScroll:true});});

syncHash();
