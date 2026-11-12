import { products } from './products.mjs';

const $ = s => document.querySelector(s);
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
const icons = { arrow:'<svg class="icon"><use href="#arrow"/></svg>', close:'<svg class="icon"><use href="#close"/></svg>', bag:'<svg class="icon"><use href="#bag"/></svg>' };
const selection = new Set();
let filter = 'Todos';
let toastTimer;
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

function notify(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),2800);}
function updateButtons(){
  $('#request-count').textContent=String(selection.size);
  $('#open-request').setAttribute('aria-label',`O meu pedido, ${selection.size} produtos`);
  document.querySelectorAll('[data-add]').forEach(button=>{const p=products.find(p=>p.id===button.dataset.add);const added=selection.has(p.id);button.classList.toggle('added',added);button.setAttribute('aria-label',added?`${p.name} já está no pedido`:`Adicionar ${p.name} ao pedido`);if(button.classList.contains('detail-add')) button.innerHTML=(added?'Adicionado ao pedido':'Adicionar ao pedido')+icons.bag;else button.innerHTML=added?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>';});
}
function addProduct(id){const product=products.find(p=>p.id===id);if(!product)return;if(selection.has(id)){notify('Este produto já está no seu pedido.');return;}selection.add(id);updateButtons();renderRequest();notify(`${product.name} adicionado ao pedido.`);}
document.addEventListener('click',e=>{const button=e.target.closest('[data-add]');if(button)addProduct(button.dataset.add);});

function syncScrollLock(){document.body.classList.toggle('dialog-open',Boolean(document.querySelector('dialog[open]')));}
function openDialog(dialog){closeMenu();if(!dialog.open)dialog.showModal();syncScrollLock();}
document.querySelectorAll('[data-close]').forEach(button=>button.addEventListener('click',()=>document.getElementById(button.dataset.close).close()));
document.querySelectorAll('dialog').forEach(dialog=>{dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});dialog.addEventListener('close',syncScrollLock);});
function productFromHash(){return products.find(p=>`#produto/${p.id}`===location.hash);}
function openProduct(p){
  const dialog=$('#product-dialog');
  if(!dialog.open) detailReturnFocus=document.activeElement;
  $('#product-detail').innerHTML=`<div class="detail-layout"><div class="detail-photo ${p.illustration?'illustration':''}"><img src="assets/${p.image}.webp" alt="${p.illustration?'Ilustração: ':''}${escape(p.name)}">${p.illustration?'<span class="image-label">Ilustração do produto</span>':''}</div><div class="detail-copy"><p class="eyebrow">${escape(p.category)}</p><h2 id="product-title" tabindex="-1">${escape(p.name)}</h2><p>${escape(p.description)}</p>${p.ingredients||p.allergen?`<dl>${p.ingredients?`<dt>Ingredientes</dt><dd>${escape(p.ingredients)}</dd>`:''}${p.allergen?`<dt>Alergénios</dt><dd>${escape(p.allergen)}</dd>`:''}</dl>`:''}<button class="button detail-add" data-add="${p.id}">Adicionar ao pedido ${icons.bag}</button><p class="detail-note">Confirme preços, formatos, disponibilidade e composição atual com a produtora.</p></div></div>`;
  updateButtons();openDialog(dialog);$('#product-title').focus({preventScroll:true});
}
document.addEventListener('click',e=>{const link=e.target.closest('a[href^="#produto/"]');if(link){const p=products.find(p=>`#produto/${p.id}`===link.getAttribute('href'));if(p){e.preventDefault();previousHash=location.hash.startsWith('#produto/')?'#produtos':location.hash||'#produtos';history.pushState({product:true},'',`#produto/${p.id}`);openProduct(p);}}});
function syncHash(){const p=productFromHash();if(p)openProduct(p);else if($('#product-dialog').open)$('#product-dialog').close();}
window.addEventListener('hashchange',syncHash);
window.addEventListener('popstate',syncHash);
$('#product-dialog').addEventListener('close',()=>{if(location.hash.startsWith('#produto/'))history.replaceState(null,'',previousHash);if(detailReturnFocus?.isConnected)detailReturnFocus.focus({preventScroll:true});});

function orderMessage(){
  const names=products.filter(p=>selection.has(p.id)).map(p=>`• ${p.name}`).join('\n');
  const note=$('#order-note').value.trim();
  return `Olá, Nha Guinendade! Gostaria de informações sobre os seguintes produtos:\n\n${names}${note?`\n\nInformações adicionais:\n${note}`:''}\n\nPodem confirmar preços, formatos, disponibilidade e condições de entrega?`;
}
function updateWhatsApp(){ $('#whatsapp-order').href=`https://wa.me/245955304558?text=${encodeURIComponent(orderMessage())}`; }
function renderRequest(){
  const list=products.filter(p=>selection.has(p.id));$('#request-checkout').hidden=list.length===0;
  $('#request-items').innerHTML=list.length?list.map(p=>`<article class="request-item"><img src="assets/${p.image}.webp" alt="" width="66" height="74"><div><h3>${escape(p.name)}</h3><p>${escape(p.category)}</p></div><button data-remove="${p.id}" aria-label="Remover ${escape(p.name)} do pedido">Retirar</button></article>`).join(''):`<div class="request-empty">${icons.bag}<h3>Que sabores vai escolher?</h3><p>Explore o catálogo e adicione os produtos que quer conhecer.</p><button class="button" id="explore-from-request">Explorar produtos ${icons.arrow}</button></div>`;
  updateWhatsApp();
}
$('#open-request').addEventListener('click',()=>{renderRequest();openDialog($('#request-dialog'));});
$('#request-items').addEventListener('click',e=>{const remove=e.target.closest('[data-remove]');if(remove){const buttons=[...document.querySelectorAll('[data-remove]')];const index=buttons.indexOf(remove);const p=products.find(p=>p.id===remove.dataset.remove);selection.delete(remove.dataset.remove);renderRequest();updateButtons();const next=document.querySelectorAll('[data-remove]');(next[Math.min(index,next.length-1)]||$('#explore-from-request'))?.focus();notify(`${p.name} retirado do pedido.`);}if(e.target.closest('#explore-from-request')){$('#request-dialog').close();location.hash='produtos';}});
$('#order-note').addEventListener('input',updateWhatsApp);
updateButtons();renderRequest();syncHash();
