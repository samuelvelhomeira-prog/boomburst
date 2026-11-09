var B=document.body,rail=document.getElementById('rail'),links=[].slice.call(document.querySelectorAll('#side nav a')),
pages=['inicio','jogos','como-funciona','contato'],cur='inicio',first=true;
document.getElementById('mb').onclick=function(){B.classList.toggle('open')};
function moveBub(p){
 var a=links.filter(function(l){return l.dataset.p===p})[0],r=a.getBoundingClientRect(),rr=rail.getBoundingClientRect();
 rail.style.setProperty('--y',(r.top+r.height/2-rr.top)+'px');
 var bub=document.getElementById('bub');document.getElementById('bu').setAttribute('href','#i-'+p);
 bub.classList.remove('pop');void bub.offsetWidth;bub.classList.add('pop');
}
function route(){
 var h=location.hash.slice(1),sv=h==='servicos',p=sv?'inicio':(pages.indexOf(h)<0?'inicio':h);
 pages.forEach(function(x){document.getElementById('v-'+x).classList.toggle('on',x===p)});
 var key=sv?'servicos':p;
 links.forEach(function(l){l.classList.toggle('on',l.dataset.p===key)});
 rail.classList.toggle('has',key!=='inicio');moveBub(key);B.classList.remove('open');cur=p;
 if(sv){var e=document.getElementById('servicos');setTimeout(function(){e.scrollIntoView()},60)}else if(!first||h){window.scrollTo(0,0)}
 first=false;
}
window.addEventListener('hashchange',route);window.addEventListener('resize',function(){moveBub(links.filter(function(l){return l.classList.contains('on')})[0].dataset.p)});
document.fonts&&document.fonts.ready.then(function(){route()});route();
/* services tabs */
var S=[{t:'Jogadores',h:'Carreira de jogadores',p:'Planejamento de carreira, perfil profissional, portfólio de resultados e preparo para testes e entrevistas.',l:['Perfil e portfólio','Preparo para seletivas','Exposição a times'],g:'#ff2a00,#ff6a00 60%,#ffb000'},
{t:'Marcas e times',h:'Marcas e times',p:'Aproximamos jogadores de patrocinadores e organizações grandes, com apresentação clara e contato direto.',l:['Jogadores avaliados','Contato direto','Parcerias sob medida'],g:'#ff6a00,#ffb000'},
{t:'Campeonatos',h:'Campeonatos',p:'Organizamos torneios que dão palco para novos talentos e visibilidade para quem apoia o cenário.',l:['Inscrições pelo Discord','Chaveamento e resultados','Visibilidade para patrocinadores'],g:'#c91a00,#ff4a00 60%,#ff8a00'}];
var tb=document.getElementById('tabs'),pn=document.getElementById('panel');
function tab(i){[].forEach.call(tb.children,function(b,j){b.setAttribute('aria-selected',j===i)});var s=S[i];
  pn.innerHTML='<div><h3></h3><p style="margin:0;font-weight:500"></p></div><ul></ul>';
 pn.querySelector('h3').textContent=s.h;pn.querySelector('p').textContent=s.p;
 s.l.forEach(function(x){var li=document.createElement('li');li.textContent=x;pn.querySelector('ul').appendChild(li)})}
S.forEach(function(s,i){var b=document.createElement('button');b.setAttribute('role','tab');b.textContent=s.t;b.onclick=function(){tab(i)};tb.appendChild(b)});tab(0);
/* games */
document.querySelectorAll('.game button').forEach(function(b){b.onclick=function(){var g=b.parentNode,o=g.classList.contains('open');
 document.querySelectorAll('.game').forEach(function(x){x.classList.remove('open');x.firstChild.setAttribute('aria-expanded','false')});
 if(!o){g.classList.add('open');b.setAttribute('aria-expanded','true')}}});
document.getElementById('f').addEventListener('submit',function(e){e.preventDefault();this.reset();document.getElementById('ok').style.display='block'});
(function(){var d=document.documentElement,t,a=document.getElementById('bgA'),w=document.getElementById('wv');function u(){var h=d.scrollHeight-innerHeight;var p=h>0?Math.min(1,Math.max(0,scrollY/h)):0;a.style.opacity=1-p;w.style.transform='translate3d(0,'+(-70*p)+'px,0)'}
addEventListener('scroll',function(){cancelAnimationFrame(t);t=requestAnimationFrame(u)},{passive:true});addEventListener('resize',u);addEventListener('hashchange',function(){setTimeout(u,80)});u()})();
(function(){var g=document.querySelector('#wv g'),o='';for(var i=0;i<20;i++){var k=i/19,d='';for(var x=-40;x<=1480;x+=20){var y=300+Math.sin(x/240+k*2.4)*80+Math.sin(x/120+k*3.2)*20+(k-.5)*90*Math.sin(x/420+1.2);d+=(d?'L':'M')+x+' '+y.toFixed(1)}
o+='<path d="'+d+'"/>'}
g.innerHTML=o})();
