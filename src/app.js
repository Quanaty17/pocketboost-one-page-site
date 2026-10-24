var $=function(s){return document.querySelector(s)},cat="All",grid=$("#grid"),toast=$("#toast"),tt;
function say(m){toast.textContent=m;toast.classList.add("on");clearTimeout(tt);tt=setTimeout(function(){toast.classList.remove("on")},2200)}
function esc(s){var d=document.createElement("div");d.textContent=s;return d.innerHTML}
function render(){
  var q=$("#q").value.trim().toLowerCase(),n=0;grid.innerHTML="";
  var G=[],ix={};OFFERS.forEach(function(o,i){var k=o.label||o.title;if(ix[k]===undefined){ix[k]=G.length;G.push({o:o,ix:[i]})}else{var g=G[ix[k]];g.ix.push(i);if(o.pct<g.o.pct)g.o=o}});G.sort(function(a,b){return b.ix.length-a.ix.length});
  G.forEach(function(g){var o=g.o;
    if(cat!=="All"&&o.cat!==cat)return;
    if(q&&(o.store+" "+o.title+" "+o.cat).toLowerCase().indexOf(q)<0)return;
    n++;var el=document.createElement("article");el.className="ticket";
    el.innerHTML='<div class="stub"><div class="mono" style="background:'+o.color+'">'+esc(o.store[0])+'</div><b>'+esc(o.store)+'</b></div>'+
    '<div class="info"><span class="tag'+(o.code?'':' deal')+'">'+esc(o.tag)+'</span><h3>'+esc(o.title)+'</h3><p>'+esc(o.desc)+'</p>'+
    g.ix.map(function(i){var c=OFFERS[i];return c.code?'<div class="crow"><code>'+esc(c.code)+'</code><button data-i="'+i+'">Copy</button></div>':'<div class="btn"><a href="'+c.url+'" target="_blank" rel="noopener sponsored">Get deal</a></div>'}).join('')+'</div>';
    grid.appendChild(el);
  });
  $("#empty").hidden=n>0;
}
grid.addEventListener("click",function(e){
  var b=e.target.closest("button[data-i]");if(!b)return;
  var o=OFFERS[b.dataset.i];
  function done(){b.textContent="Copied!";setTimeout(function(){b.textContent="Copy"},1800);say("Code copied. Paste it at checkout.")}
  function fail(){say("Couldn’t copy. Select the code and copy it by hand.")}
  try{navigator.clipboard.writeText(o.code).then(done,fail)}catch(x){fail()}
});
var cats=["All"],seen={};OFFERS.forEach(function(o){if(!seen[o.cat]){seen[o.cat]=1;cats.push(o.cat)}});
cats.forEach(function(c){var b=document.createElement("button");b.className="chip";b.textContent=c;b.setAttribute("aria-pressed",c==="All");
  b.onclick=function(){cat=c;document.querySelectorAll(".chip").forEach(function(x){x.setAttribute("aria-pressed",x===b)});render()};$("#chips").appendChild(b)});
$("#q").addEventListener("input",render);
$("#yr").textContent=new Date().getFullYear();
render();
