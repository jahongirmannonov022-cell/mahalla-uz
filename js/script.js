const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
let seed=11;const rnd=()=>(seed=seed*16807%2147483647)/2147483647,pk=a=>a[rnd()*a.length|0];
const ST={r:['Hal qilinmagan','var(--red)'],y:['Jarayonda','var(--yel)'],g:['Hal qilingan','var(--grn)']};
const C={
chiroq:{e:'💡',n:'Chiroq',t:'Ko‘cha chirog‘i muammosi',o:'Hududiy elektr tarmoqlari',col:'#F2B01E',d:['Ko‘cha chirog‘i bir haftadan beri yonmayapti, kechqurun qorong‘i.','Chiroq ustuni qiyshaygan, simlari ochilib qolgan.']},
chiqindi:{e:'🗑️',n:'Chiqindi',t:'Chiqindi muammosi',o:'Mahalla kommunal xizmatlari',col:'#0B6B4F',d:['Chiqindi konteynerlari 3 kundan beri tozalanmagan.','Uylar orqasida chiqindi uyumi to‘planib qolgan.']},
yol:{e:'🛣️',n:'Yo‘l',t:'Yo‘l muammosi',o:'Yo‘l-qurilish boshqarmasi',col:'#2563EB',d:['Yo‘l qoplamasida chuqur paydo bo‘lgan, mashinalar sekinlashmoqda.','Chorrahadagi asfalt yorilib, suv to‘planmoqda.']},
suv:{e:'💧',n:'Suv',t:'Suv muammosi',o:'Suv ta‘minoti korxonasi',col:'#06B6D4',d:['Quvur yorilib, ko‘chaga suv oqmoqda.','Ikki kundan beri uylarga ichimlik suvi kelmayapti.']},
daraxt:{e:'🌳',n:'Daraxt',t:'Daraxt muammosi',o:'Ko‘kalamzorlashtirish boshqarmasi',col:'#84CC16',d:['Quruq daraxt shoxlari yo‘lakka qulab tushish xavfi bor.','Bolalar maydonchasi yonidagi daraxt kesilishi kerak.']},
infra:{e:'♿',n:'Infratuzilma',t:'Infratuzilma muammosi',o:'Obodonlashtirish boshqarmasi',col:'#8B5CF6',d:['Maktab oldidagi yo‘lakda aravacha uchun pandus yo‘q.','Avtobus bekatidagi skameyka sinib qolgan.']},
boshqa:{e:'➕',n:'Boshqa',t:'Boshqa muammo',o:'Mahalla fuqarolar yig‘ini',col:'#94A3B8',d:['Mahalla hududida muammo aniqlandi.']}};
const D=[['Chilonzor',190,390],['Yunusobod',640,130],['Yakkasaroy',460,385],['Shayxontohur',310,170],['Mirzo Ulug‘bek',745,355],['Sergeli',520,520]];
const near=(x,y)=>D.reduce((a,b)=>Math.hypot(a[1]-x,a[2]-y)<Math.hypot(b[1]-x,b[2]-y)?a:b);
const dt=d=>{const x=new Date(2026,9,8-d);return String(x.getDate()).padStart(2,'0')+'.'+String(x.getMonth()+1).padStart(2,'0')+'.2026'};

/* demo data: 13 / 7 / 42 */
const P=[];(()=>{
 const fill=(l)=>{const a=[];l.forEach(([k,n])=>{for(let i=0;i<n;i++)a.push(k)});return a};
 const sh=a=>{for(let i=a.length-1;i>0;i--){const j=rnd()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a};
 const cs=['chiqindi','chiqindi','chiroq','yol','chiroq'].concat(sh(fill([['chiqindi',15],['yol',14],['chiroq',9],['suv',9],['daraxt',6],['infra',4]])));
 const ss=['r','y','g','y','g'].concat(sh(fill([['r',12],['y',5],['g',40]])));
 const fd=['Chilonzor','Chilonzor','Chilonzor','Yunusobod','Yakkasaroy'],fy=[0,1,3,0,1];
 cs.forEach((c,i)=>{const dn=i<5?D.find(d=>d[0]==fd[i]):pk(D);let x=dn[1]+(rnd()-.5)*130,y=dn[2]+(rnd()-.5)*90;x=Math.max(30,Math.min(870,x));y=Math.max(30,Math.min(570,y));if(i==0){x=215;y=372}
  P.push({id:i+1,c,d:dn[0],x,y,s:ss[i],v:i==0?12:rnd()*22|0,ds:i==0?C.chiqindi.d[0]:pk(C[c].d),day:i<5?fy[i]:2+(rnd()*22|0),mine:i==1||i==2,pr:i==1?65:20+(rnd()*60|0)})});
})();
let N=[{t:'Muammoingiz yangilandi',m:'Chilonzordagi chiqindi muammosi jarayonga o‘tkazildi.',w:'2 daqiqa oldin',u:1},{t:'Yangi ovoz',m:'Chiroq murojaatingiz hal qilindi deb belgilandi.',w:'3 kun oldin',u:1}];
const W=[12,18,15,24,21,29,17],WL=['Dush','Sesh','Chor','Pay','Juma','Shan','Yak'],CB={chiroq:18,chiqindi:28,yol:24,suv:14,daraxt:9,infra:7},CN={};let NT=0,TS=0,U=0;

/* map */
function base(){if(base.s)return base.s;let q=3;const r=()=>(q=q*16807%2147483647)/2147483647;let s='<rect width="900" height="600" fill="var(--m0)"/>';
 for(let x=0;x<900;x+=58)for(let y=0;y<600;y+=46)s+=`<rect x="${x+9}" y="${y+8}" width="${38+r()*12|0}" height="${28+r()*10|0}" rx="5" fill="var(--m1)"/>`;
 s+='<path d="M-10 292C160 250 300 305 440 252S720 212 910 252" fill="none" stroke="var(--m3)" stroke-width="22"/>';
 [[560,440,54,36],[130,190,44,30],[810,170,40,52],[330,470,36,28]].forEach(([x,y,a,b])=>s+=`<ellipse cx="${x}" cy="${y}" rx="${a}" ry="${b}" fill="var(--m2)" stroke="var(--m0)" stroke-width="5"/>`);
 ['M120 90H780Q840 90 840 150V450Q840 510 780 510H120Q60 510 60 450V150Q60 90 120 90Z','M-10 580L910 30','M450-10V610','M-10 340H910','M-10 120L910 500'].forEach(d=>s+=`<path d="${d}" fill="none" stroke="var(--rc)" stroke-width="14" stroke-linecap="round"/><path d="${d}" fill="none" stroke="var(--rd)" stroke-width="10" stroke-linecap="round"/>`);
 D.forEach(([n,x,y])=>s+=`<text class="ml" x="${x}" y="${y-62}">${n}</text>`);
 return base.s=s+'<text class="ml" x="110" y="272" style="font-size:12px;font-style:italic;fill:#4A8DC7">Anhor kanali</text>'}
const mk=p=>{const c=ST[p.s][1];return `<g class="mk ${p.s} ${p.nw?'nw':''}" data-id="${p.id}" transform="translate(${p.x.toFixed(0)} ${p.y.toFixed(0)})"><circle class="pl" r="13" fill="${c}"/><g class="bd"><circle r="13" fill="${c}" stroke="#fff" stroke-width="3"/><text text-anchor="middle" dy=".35em" font-size="13" style="pointer-events:none">${C[p.c].e}</text></g></g>`};
const drawMap=(el,l)=>el.innerHTML=base()+l.map(mk).join('');

/* helpers */
const pill=s=>`<span class="pill" style="--c:${ST[s][1]}"><i></i>${ST[s][0]}</span>`;
const tl=p=>{const n={r:3,y:3,g:5}[p.s],L=['Murojaat yuborildi','AI tomonidan tasniflandi','Mas‘ul tashkilotga yuborildi','Ishlar davom etmoqda','Muammo hal qilindi'];return '<ol class="tl">'+L.map((t,i)=>`<li class="${i<n?'d':i==3&&p.s=='y'?'c':''}">${i<n?'✓ ':i==3&&p.s=='y'?'● ':'○ '}${t}</li>`).join('')+'</ol>'};
const prg=p=>p.s=='g'?100:p.s=='y'?p.pr:8;
const card=p=>`<article class="card pc lift" tabindex="0" onclick="detail(${p.id})" onkeydown="if(event.key=='Enter')detail(${p.id})"><div class="pt"><span class="tile">${C[p.c].e}</span><div><b>${C[p.c].t}</b><br><small class="mut">📍 ${p.d}, Toshkent</small></div></div><p>${esc(p.ds)}</p><div class="ft">${pill(p.s)}<span>👍 ${p.v} · ${dt(p.day)}</span></div></article>`;
function toast(m,i='✓'){const t=document.createElement('div');t.className='toast';t.innerHTML=`<b>${i}</b>${m}`;$('#toasts').append(t);setTimeout(()=>t.classList.add('out'),3000);setTimeout(()=>t.remove(),3400)}
function cnt(el,v){const f=+el.dataset.v||0;el.dataset.v=v;const t0=performance.now();(function s(t){const k=Math.min(1,(t-t0)/800);el.textContent=Math.round(f+(v-f)*(1-Math.pow(1-k,3)));k<1&&requestAnimationFrame(s)})(t0)}
function upd(){const c={r:0,y:0,g:0};P.forEach(p=>c[p.s]++);c.t=P.length;c.td=8+TS;$$('[data-n]').forEach(e=>cnt(e,c[e.dataset.n]));const u=N.filter(n=>n.u).length;$('#bc').textContent=u;$('#bc').hidden=!u;const cu=Object.values(CH).reduce((a,c)=>a+(c.u||0),0);$('#cc').textContent=cu;$('#cc').hidden=!cu}
const nHTML=()=>N.map(n=>`<div class="ni ${n.u?'u':''}"><span class="tile">🔔</span><div><b>${n.t}</b><p>${n.m}</p><small>${n.w}</small></div></div>`).join('');
function toggleN(){const o=$('#npop');o.innerHTML=nHTML();o.classList.toggle('on');N.forEach(n=>n.u=0);setTimeout(upd,0)}
const closeN=()=>$('#npop').classList.remove('on');
const closeM=()=>$('#modal').classList.remove('on');
document.addEventListener('keydown',e=>{if(e.key=='Escape'){closeM();closePop();closeN()}});

/* navigation */
const NAV=[['home','Bosh sahifa'],['report','Muammo yuborish'],['map','Xarita'],['list','Muammolar'],['stats','Statistika'],['masters','Ustalar']];
$('#links').innerHTML=NAV.map(([k,t])=>`<a data-go="${k}" onclick="go('${k}')">${t}</a>`).join('');
$('#bn').innerHTML=[['home','<i class="fa-solid fa-house"></i>','Bosh sahifa'],['map','<i class="fa-solid fa-map-location-dot"></i>','Xarita'],['report','<i class="fa-solid fa-plus"></i>','Yuborish','plus'],['mine','<i class="fa-solid fa-clipboard-list"></i>','Murojaatlar'],['profile','<i class="fa-solid fa-user"></i>','Profil']].map(([k,i,t,c])=>`<a class="${c||''}" data-go="${k}" onclick="go('${k}')"><span>${i}</span>${t}</a>`).join('');
function go(p){$$('.pg').forEach(x=>x.classList.toggle('on',x.id=='p-'+p));$$('[data-go]').forEach(a=>a.classList.toggle('act',a.dataset.go==p));scrollTo({top:0});closeN();closePop();
 ({home:drawHome,masters:drawMasters,map:drawMain,list:drawList,stats:drawStats,mine:drawMine,admin:drawAdmin,profile:drawProfile,chat:drawChat,report:()=>showStep(R.step)}[p]||0)();upd()}

/* main map */
const FS=new Set(['r','y','g']),FC=new Set();let sel=0;
function allS(v){$$('.fs').forEach(c=>{c.checked=v;v?FS.add(c.value):FS.delete(c.value)});drawMain()}
function fS(){FS.clear();$$('.fs').forEach(c=>c.checked&&FS.add(c.value));$('#fa').checked=FS.size==3;drawMain()}
const match=(p,q)=>!q||(C[p.c].t+' '+C[p.c].n+' '+p.d+' '+p.ds).toLowerCase().includes(q.toLowerCase());
function drawMain(){$('#catf').innerHTML=Object.keys(C).filter(k=>k!='boshqa').map(k=>`<button class="${FC.has(k)?'on':''}" onclick="tc('${k}')">${C[k].e} ${C[k].n}</button>`).join('');
 const l=P.filter(p=>FS.has(p.s)&&(!FC.size||FC.has(p.c))&&match(p,$('#mq').value));drawMap($('#mainMap'),l);$('#mcount').textContent=l.length+' ta muammo ko‘rsatilmoqda';
 $$('#mainMap .mk').forEach(g=>{g.onclick=e=>{e.stopPropagation();openPop(+g.dataset.id)};g.dataset.id==sel&&g.classList.add('sel')});if(sel&&!l.find(p=>p.id==sel))closePop()}
function tc(k){FC.has(k)?FC.delete(k):FC.add(k);drawMain()}
function openPop(id){sel=id;const p=P.find(x=>x.id==id);$$('#mainMap .mk').forEach(g=>g.classList.toggle('sel',g.dataset.id==id));
 $('#pop').innerHTML=`<button class="x" onclick="closePop()" aria-label="Yopish"><i class="fa-solid fa-xmark"></i></button><div class="ph"><span class="tile">${C[p.c].e}</span><div><b>${C[p.c].t}</b></div></div><div>📍 ${p.d}, Toshkent</div><p class="mut" style="margin:8px 0 12px;font-size:15px">“${esc(p.ds)}”</p><div>${pill(p.s)}</div><div class="vt"><b>${p.v} ta ovoz</b><span style="display:flex;gap:8px"><button class="btn ghost sm" onclick="vote(${p.id})">👍 ${p.voted?'Qaytarish':'Ovoz'}</button><button class="btn sm" onclick="detail(${p.id})">Batafsil</button></span></div>`;$('#pop').classList.add('on')}
function closePop(){sel=0;$('#pop').classList.remove('on');$$('#mainMap .mk.sel').forEach(g=>g.classList.remove('sel'))}
function vote(id){const p=P.find(x=>x.id==id);p.voted=!p.voted;p.v+=p.voted?1:-1;toast(p.voted?'Ovozingiz qo‘shildi':'Ovoz qaytarib olindi','👍');$('#pop').classList.contains('on')&&openPop(id);if($('#modal').classList.contains('on'))detail(id)}
function detail(id){const p=P.find(x=>x.id==id);$('#modal').innerHTML=`<div class="mbox"><button class="x" onclick="closeM()" aria-label="Yopish"><i class="fa-solid fa-xmark"></i></button><div class="ph"><span class="tile">${C[p.c].e}</span><div><b style="font-size:20px">${C[p.c].t}</b><br><small>📍 ${p.d}, Toshkent</small></div></div><p>“${esc(p.ds)}”</p><div class="meta"><span>Status</span><div>${pill(p.s)}</div><span>Mas‘ul</span><b>${C[p.c].o}</b><span>Sana</span><b>${dt(p.day)}</b><span>Ovozlar</span><b>${p.v} ta</b></div>${mrow(masterFor(p),p)}${tl(p)}<div class="nav2"><button class="btn ghost" onclick="vote(${p.id})">👍 ${p.voted?'Ovozni qaytarish':'Ovoz berish'}</button><button class="btn" onclick="closeM();go('map');setTimeout(()=>openPop(${p.id}),60)">Xaritada ko‘rish</button></div></div>`;$('#modal').classList.add('on')}

/* masters */
const ROLE={chiroq:'Elektrik',chiqindi:'Chiqindi tozalash brigadasi',yol:'Yo‘l-qurilish ustasi',suv:'Santexnik',daraxt:'Bog‘bon-arborist',infra:'Qurilish ustasi'};
const M=[
{n:'Akmal Rahimov',c:'chiroq',d:'Chilonzor',ph:'+998 90 123 45 67',tg:'akmal_elektrik',r:4.9,j:132,av:1},
{n:'Bobur Ismoilov',c:'chiqindi',d:'Chilonzor',ph:'+998 91 234 56 78',tg:'bobur_tozalik',r:4.8,j:96,av:1},
{n:'Jasur Tursunov',c:'yol',d:'Yunusobod',ph:'+998 93 345 67 89',tg:'jasur_yol',r:4.7,j:74,av:0},
{n:'Sardor Nazarov',c:'suv',d:'Yakkasaroy',ph:'+998 94 456 78 90',tg:'sardor_santexnik',r:4.9,j:158,av:1},
{n:'Dilnoza Yusupova',c:'daraxt',d:'Shayxontohur',ph:'+998 97 567 89 01',tg:'dilnoza_bogbon',r:4.8,j:41,av:1},
{n:'Otabek Karimov',c:'infra',d:'Mirzo Ulug‘bek',ph:'+998 88 678 90 12',tg:'otabek_usta',r:4.6,j:63,av:0},
{n:'Farhod Ergashev',c:'chiroq',d:'Yunusobod',ph:'+998 99 789 01 23',tg:'farhod_elektrik',r:4.7,j:88,av:1},
{n:'Sherzod Aliyev',c:'yol',d:'Sergeli',ph:'+998 95 890 12 34',tg:'sherzod_asfalt',r:4.8,j:57,av:1}];
const ini=n=>n.split(' ').map(w=>w[0]).join('');
const macts=(m,pid)=>{const i=M.indexOf(m);return `<div class="mact"><button class="btn sm" onclick="contact(${i},${pid||0})"><i class="fa-solid fa-comment-dots"></i> ${CH[i]&&CH[i].msgs.length?'Suhbatni davom ettirish':'Aloqaga chiqish'}</button><a class="btn ghost sm icon" href="tel:${m.ph.replace(/\s+/g,'')}" aria-label="Qo‘ng‘iroq qilish" title="Qo‘ng‘iroq qilish"><i class="fa-solid fa-phone"></i></a><a class="btn ghost sm icon" href="https://t.me/${m.tg}" target="_blank" rel="noopener" aria-label="Telegram" title="Telegram"><i class="fa-brands fa-telegram"></i></a><button class="btn ghost sm icon" onclick="copyPhone('${m.ph}',this)" aria-label="Raqamni nusxalash" title="Raqamni nusxalash"><i class="fa-regular fa-copy"></i></button></div>`};
const mc=m=>`<article class="card mcd lift"><div class="mh"><div class="av">${ini(m.n)}<i>${C[m.c].e}</i></div><div><b>${m.n}</b><br><small class="mut">${ROLE[m.c]} · ${m.d}</small></div></div><div class="ft2"><span>⭐ ${m.r} · ${m.j} ta ish</span><span class="pill" style="--c:${m.av?'var(--grn)':'var(--yel)'}"><i></i>${m.av?'Hozir bo‘sh':'Band'}</span></div>${macts(m)}</article>`;
const masterFor=p=>M.find(m=>m.c==p.c&&m.d==p.d)||M.find(m=>m.c==p.c)||null;
const mrow=(m,p)=>m?`<h4>Usta bilan bog‘lanish</h4><div class="mr"><div class="mh"><div class="av">${ini(m.n)}<i>${C[m.c].e}</i></div><div><b>${m.n}</b><br><small class="mut">${ROLE[m.c]} · ${m.d}</small></div></div>${macts(m,p&&p.id)}</div>`:'';
let MF='all';
function drawMasters(){$('#mp').innerHTML=[['all','Barchasi']].concat(Object.keys(C).filter(k=>k!='boshqa').map(k=>[k,C[k].e+' '+C[k].n])).map(([k,t])=>`<button class="${MF==k?'on':''}" onclick="MF='${k}';drawMasters()">${t}</button>`).join('');$('#mg').innerHTML=M.filter(m=>MF=='all'||m.c==MF).map(mc).join('')}
function drawHome(){drawMap($('#heroMap'),P);$('#hm').innerHTML=M.slice(0,3).map(mc).join('')}

/* auth + chat */
const LS={g:k=>{try{return JSON.parse(localStorage.getItem(k))}catch(e){return null}},s:(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}};
const hs=s=>{let h=5381;for(const c of s)h=((h*33)^c.charCodeAt(0))>>>0;return h};
let USR=null,ACC=null,CH={},cur=null,AM='reg',AFTER=null,DRAFT='';
const hm=t=>{const d=new Date(t);return String(d.getHours()).padStart(2,'0')+':'+String(d.getMinutes()).padStart(2,'0')};
const fmtPh=d=>{d=d.slice(-9);return `+998 ${d.slice(0,2)} ${d.slice(2,5)} ${d.slice(5,7)} ${d.slice(7)}`};
function initAuth(){ACC=LS.g('yr_acc');USR=LS.g('yr_user');loadChats();authUI()}
function loadChats(){CH=(USR&&LS.g('yr_chats_'+USR.phone))||{}}
function saveChats(){USR&&LS.s('yr_chats_'+USR.phone,CH)}
function authUI(){$('#login').innerHTML=USR?'👤<span class="ln"> '+esc(USR.name.split(' ')[0])+'</span>':'Kirish'}
function login(){USR?go('profile'):authModal()}
function authModal(after){AFTER=after||null;renderAuth()}
function setAM(m){AM=m;renderAuth()}
function renderAuth(){const r=AM=='reg';
 $('#modal').innerHTML=`<div class="mbox auth"><button class="x" onclick="closeM()" aria-label="Yopish"><i class="fa-solid fa-xmark"></i></button><h2 style="font-size:26px">${r?'Ro‘yxatdan o‘tish':'Kirish'}</h2><p class="mut" style="margin:6px 0 14px">Murojaat yuborish va ustalar bilan yozishish uchun hisob kerak.</p>
 <div class="pills" style="margin-bottom:12px"><button class="${r?'on':''}" onclick="setAM('reg')">Ro‘yxatdan o‘tish</button><button class="${r?'':'on'}" onclick="setAM('in')">Kirish</button></div>
 ${r?`<label class="lab" for="an">Ismingiz</label><input class="fi" id="an" autocomplete="name" placeholder="Masalan, Dilshod Karimov">`:''}
 <label class="lab" for="ap">Telefon raqamingiz</label><input class="fi" id="ap" type="tel" autocomplete="tel" placeholder="+998 90 123 45 67">
 <label class="lab" for="aw">Parol</label><input class="fi" id="aw" type="password" autocomplete="${r?'new-password':'current-password'}" placeholder="Kamida 6 ta belgi" onkeydown="if(event.key=='Enter')doAuth()">
 <div class="aerr" id="ae"></div><button class="btn" style="width:100%" onclick="doAuth()">${r?'Ro‘yxatdan o‘tish':'Kirish'}</button></div>`;
 $('#modal').classList.add('on');setTimeout(()=>($('#an')||$('#ap')).focus(),60)}
function doAuth(){const r=AM=='reg',n=r?$('#an').value.trim():'',d=$('#ap').value.replace(/\D/g,''),w=$('#aw').value,e=t=>{$('#ae').textContent=t};
 if(r&&n.length<2)return e('Ismingizni kiriting.');
 if(d.length!=9&&d.length!=12)return e('Telefon raqamini to‘liq kiriting (masalan, 90 123 45 67).');
 if(w.length<6)return e('Parol kamida 6 ta belgidan iborat bo‘lsin.');
 const ph=fmtPh(d);
 if(r){ACC={name:n,phone:ph,h:hs(w)};LS.s('yr_acc',ACC)}
 else{if(!ACC||ACC.phone!=ph)return e('Bunday hisob topilmadi. Avval ro‘yxatdan o‘ting.');if(ACC.h!=hs(w))return e('Parol noto‘g‘ri.')}
 USR={name:ACC.name,phone:ACC.phone};LS.s('yr_user',USR);loadChats();authUI();closeM();toast(`Xush kelibsiz, ${ACC.name.split(' ')[0]}!`,'👋');upd();const a=AFTER;AFTER=null;a&&a()}
function logout(){USR=null;LS.s('yr_user',null);CH={};cur=null;authUI();upd();go('home');toast('Hisobdan chiqdingiz','👋')}
function drawProfile(){$('#pcard').innerHTML=USR?`<div style="display:flex;gap:18px;align-items:center;flex-wrap:wrap"><div class="tile" style="width:64px;height:64px;font-size:24px;border-radius:20px;font-weight:800;color:var(--em)">${esc(ini(USR.name))}</div><div style="flex:1"><h3>${esc(USR.name)}</h3><span class="mut">${USR.phone}</span></div><button class="btn ghost sm" onclick="logout()">Chiqish</button></div>`:`<h3>Hisobingiz yo‘q</h3><p class="mut" style="margin:6px 0 16px">Ro‘yxatdan o‘ting: murojaat yuboring va ustalar bilan yozishing.</p><button class="btn" onclick="authModal()">Ro‘yxatdan o‘tish</button>`;$('#pn').innerHTML=nHTML()}

/* theme */
const curTheme=()=>document.documentElement.dataset.theme||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light');
function themeIcon(){const d=curTheme()=='dark';$('#tg').innerHTML=`<i class="fa-solid fa-${d?'sun':'moon'}" aria-hidden="true"></i>`;$('#tg').title=d?'Kunduzgi rejim':'Tungi rejim'}
function toggleTheme(){const t=curTheme()=='dark'?'light':'dark';document.documentElement.dataset.theme=t;LS.s('yr_theme',t);themeIcon();toast(t=='dark'?'Tungi rejim yoqildi':'Kunduzgi rejim yoqildi',t=='dark'?'🌙':'☀️')}
function initTheme(){const t=LS.g('yr_theme');if(t)document.documentElement.dataset.theme=t;themeIcon();try{matchMedia('(prefers-color-scheme:dark)').addEventListener('change',themeIcon)}catch(e){}}

/* chat */
const lastTs=k=>CH[k].msgs.length?CH[k].msgs[CH[k].msgs.length-1].ts:Date.now();
const chatKeys=()=>Object.keys(CH).filter(k=>CH[k].msgs.length||k==cur).sort((a,b)=>lastTs(b)-lastTs(a));
function contact(i,pid){if(!USR)return authModal(()=>contact(i,pid));closeM();const p=pid&&P.find(x=>x.id==pid);CH[i]=CH[i]||{msgs:[],u:0};
 DRAFT=!CH[i].msgs.length&&p?`Salom! ${p.d}dagi “${C[p.c].t}” bo‘yicha yordam kerak: ${p.ds}`:'';cur=i;go('chat')}
function openThread(k){cur=k;CH[k].u=0;saveChats();drawChat();upd()}
function drawChat(){const ks=chatKeys();if(cur==null&&innerWidth>=900&&ks.length)cur=ks[0];if(cur!=null&&CH[cur])CH[cur].u=0;paintList();paintThread();$('.chatgrid').classList.toggle('th',cur!=null)}
function paintList(){const ks=chatKeys();$('#cl').innerHTML=ks.length?ks.map(k=>{const m=M[k],c=CH[k],l=c.msgs[c.msgs.length-1];return `<div class="ci ${k==cur?'on':''}" onclick="openThread(${k})"><div class="av">${ini(m.n)}<i>${C[m.c].e}</i></div><div class="cib"><b>${m.n}</b><small>${l?(l.f=='me'?'Siz: ':'')+esc(l.t):'Yangi suhbat'}</small></div><span class="cit">${l?hm(l.ts):''}${c.u?`<i class="ub">${c.u}</i>`:''}</span></div>`}).join(''):`<div class="empty" style="padding:40px 20px">${USR?'Hali suhbat yo‘q.':'Suhbatlarni ko‘rish uchun hisobga kiring.'}<br><br><button class="btn sm" onclick="${USR?"go('masters')":'authModal()'}">${USR?'Ustalarni ko‘rish':'Kirish'}</button></div>`}
function paintThread(){const t=$('#ct');if(cur==null||!CH[cur]){t.innerHTML='<div class="mut" style="margin:auto;padding:24px;text-align:center">Suhbatni tanlang yoki<br>“Ustalar” bo‘limidan yangisini boshlang.</div>';return}
 const m=M[cur];t.innerHTML=`<div class="cth"><button class="back" onclick="cur=null;drawChat()" aria-label="Orqaga">←</button><div class="av">${ini(m.n)}<i>${C[m.c].e}</i></div><div><b>${m.n}</b><br><small class="mut"><span class="dot" style="--c:${m.av?'var(--grn)':'var(--yel)'}"></span> ${m.av?'Onlayn':'Band'} · ${ROLE[m.c]}</small></div></div><div class="msgs" id="msgs"></div><div class="cin"><input class="fi" id="ci" placeholder="Xabar yozing..." value="${esc(DRAFT)}" onkeydown="if(event.key=='Enter')sendMsg()" aria-label="Xabar"><button class="btn" onclick="sendMsg()">Yuborish</button></div>`;DRAFT='';paintMsgs()}
function paintMsgs(){const e=$('#msgs'),c=CH[cur];if(!e||!c)return;e.innerHTML=(c.msgs.length?'':`<div class="mut" style="margin:auto;text-align:center">${M[cur].n} bilan suhbatni boshlang.<br>Xabaringiz ustaga shu yerning o‘zida yetkaziladi.</div>`)+c.msgs.map(x=>`<div class="b ${x.f}">${esc(x.t)}<small>${hm(x.ts)}</small></div>`).join('')+(c.typing?'<div class="b m typ"><span></span><span></span><span></span></div>':'');e.scrollTop=e.scrollHeight}
function sendMsg(){const i=$('#ci'),t=i.value.trim();if(!t||cur==null)return;const c=CH[cur];c.msgs.push({f:'me',t,ts:Date.now()});i.value='';saveChats();paintMsgs();paintList();reply(cur,t)}
function rtext(k,c,msg){const m=M[k],n=c.msgs.filter(x=>x.f=='m').length,s=msg.toLowerCase();
 if(/rahmat|raxmat|sag.?bo/.test(s))return 'Arzimaydi, doim tayyorman!';
 if(/qachon|soat|vaqt/.test(s))return 'Bugun soat 16:00 dan keyin yetib boraman, mos kelsa?';
 if(/narx|qancha|pul|to.?lov/.test(s))return 'Avval joyida ko‘rib chiqaman, tekshiruv bepul. Narxni ishdan oldin aytaman.';
 if(/manzil|qayer|adres/.test(s))return `${m.d} tumani bo‘yicha ishlayman, aniq manzilni yozib yuboring.`;
 return ['Salom, '+USR.name.split(' ')[0]+'! Xabaringizni oldim. Muammo haqida batafsilroq yozib bera olasizmi?','Tushundim. Surat yoki aniq manzilni yuborsangiz, tezroq yetib boraman.','Kelishdik, ishni bugunoq boshlashga harakat qilaman.','Yaxshi, yo‘lga chiqsam yozaman.'][n%4]}
function reply(k,msg){const c=CH[k];c.typing=1;paintMsgs();setTimeout(()=>{c.typing=0;const t=rtext(k,c,msg);c.msgs.push({f:'m',t,ts:Date.now()});
 if(!(cur==k&&$('#p-chat').classList.contains('on'))){c.u=(c.u||0)+1;N.unshift({t:'Usta javob berdi',m:`${M[k].n}: “${t}”`,w:'hozir',u:1});toast(`${M[k].n} javob berdi`,'💬')}
 saveChats();paintList();paintMsgs();upd()},1500+rnd()*1200)}

/* list */
let LF='all';
function drawList(){$('#lp').innerHTML=[['all','Barchasi'],['r','Hal qilinmagan'],['y','Jarayonda'],['g','Hal qilingan']].map(([k,t])=>`<button class="${LF==k?'on':''}" onclick="LF='${k}';drawList()">${t}</button>`).join('');
 const l=P.filter(p=>(LF=='all'||p.s==LF)&&match(p,$('#lq').value));$('#lg').innerHTML=l.length?l.slice(0,60).map(card).join(''):'<div class="empty">Hech narsa topilmadi. Boshqa so‘z bilan qidirib ko‘ring.</div>'}

/* stats */
function drawStats(){const tot=100+NT,ks=Object.keys(CB).concat(CN.boshqa?['boshqa']:[]),v=k=>(CB[k]||0)+(CN[k]||0),R2=70,Cc=2*Math.PI*R2;let off=0;
 const seg=ks.map(k=>{const f=v(k)/tot,s=`<circle cx="100" cy="100" r="${R2}" fill="none" stroke="${C[k].col}" stroke-width="26" stroke-dasharray="${Math.max(0,f*Cc-3)} ${Cc}" stroke-dashoffset="${-off*Cc}"/>`;off+=f;return s}).join('');
 $('#donut').innerHTML=`<svg viewBox="0 0 200 200"><g class="dn" transform="rotate(-90 100 100)">${seg}</g><text x="100" y="98" text-anchor="middle" font-size="30" font-weight="800" fill="var(--tx)">${P.length}</text><text x="100" y="118" text-anchor="middle" font-size="12" fill="var(--mut)">muammo</text></svg><ul class="lg">${ks.map(k=>`<li><span class="dot" style="--c:${C[k].col}"></span>${C[k].e} ${C[k].n}<b>${Math.round(v(k)/tot*100)}%</b></li>`).join('')}</ul>`;
 const mx=Math.max(...W);$('#bars').className='bars';$('#bars').innerHTML=W.map((n,i)=>`<div class="${n==mx?'mx':''}"><b>${n}</b><i style="--h:${n/mx*78}%"></i>${WL[i]}</div>`).join('');setTimeout(()=>$('#bars').classList.add('go'),60)}

/* mine */
function drawMine(){const l=P.filter(p=>p.mine);$('#mine').innerHTML=l.length?l.map(p=>`<div class="card mc lift"><div class="ph"><span class="tile">${C[p.c].e}</span><div><b style="font-size:19px">${C[p.c].t}</b><br><small>📍 ${p.d} · ${dt(p.day)}</small></div><span style="margin-left:auto">${pill(p.s)}</span></div><div class="pb" style="--c:${ST[p.s][1]}"><i data-w="${prg(p)}"></i></div><small class="mut">${prg(p)}% bajarildi</small>${tl(p)}</div>`).join(''):'<div class="card pad empty">Hali murojaat yo‘q. Birinchi muammoni yuboring.</div>';
 setTimeout(()=>$$('#mine .pb i').forEach(i=>i.style.width=i.dataset.w+'%'),80)}

/* admin */
function drawAdmin(){const l=[...P].sort((a,b)=>a.day-b.day).slice(0,12);$('#atb').innerHTML=l.map(p=>`<tr><td>${C[p.c].e} ${C[p.c].n}</td><td>${p.d}</td><td>${dt(p.day)}</td><td>${pill(p.s)}</td><td><select class="fi" aria-label="Statusni o‘zgartirish" onchange="setS(${p.id},this.value)">${Object.keys(ST).map(k=>`<option value="${k}" ${k==p.s?'selected':''}>${k=='r'?'Yangi':ST[k][0]}</option>`).join('')}</select></td></tr>`).join('')}
function setS(id,v){const p=P.find(x=>x.id==id),o=p.s;if(o==v)return;p.s=v;if(v=='g'){p.pr=100;TS++}else if(o=='g'){TS=Math.max(0,TS-1);p.pr=40}
 if(p.mine||p.nw)N.unshift({t:'Muammoingiz yangilandi',m:`${p.d}dagi ${C[p.c].n.toLowerCase()} muammosi: ${ST[v][0].toLowerCase()}.`,w:'hozir',u:1});
 toast(`Status yangilandi: ${ST[v][0]}`);upd();drawAdmin()}

/* report flow */
const SAMPLE='data:image/svg+xml,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><rect width="640" height="360" fill="#cfe3ee"/><rect y="230" width="640" height="130" fill="#7b8590"/><rect x="40" y="70" width="150" height="170" fill="#d8c8a8"/><rect x="430" y="40" width="170" height="200" fill="#c4b393"/><rect x="250" y="170" width="70" height="90" rx="6" fill="#2f7d5b"/><rect x="340" y="180" width="60" height="80" rx="6" fill="#2f7d5b"/><g fill="#8a7a63"><circle cx="230" cy="270" r="26"/><circle cx="280" cy="280" r="22"/><circle cx="330" cy="276" r="30"/><circle cx="395" cy="282" r="24"/></g><g fill="#e9e4da"><circle cx="255" cy="263" r="9"/><circle cx="355" cy="268" r="10"/></g></svg>');
const R={step:1,img:0,cat:0,x:190,y:390};
$('#cats').innerHTML=Object.entries(C).map(([k,c])=>`<button class="cc" data-k="${k}" onclick="setCat('${k}')"><span>${c.e}</span>${k=='chiroq'?'Ko‘cha chirog‘i':c.n}</button>`).join('');
function setCat(k){R.cat=k;$$('.cc').forEach(b=>b.classList.toggle('on',b.dataset.k==k))}
function showStep(n){R.step=n;$$('.st').forEach((e,i)=>e.classList.toggle('on',i==n-1));$$('.stp li').forEach((e,i)=>e.className=i<n-1?'done':i==n-1?'cur':'');if(n==2)drawPick();if(n==3)sumUp();scrollTo({top:0})}
function next(n){if(n==1&&!R.cat)return toast('Muammo turini tanlang yoki rasm yuklang','!');showStep(n+1)}
function pick(f){if(!f)return;if(f.size>10485760)return toast('Fayl 10 MB dan katta','!');const fr=new FileReader();fr.onload=e=>setImg(e.target.result,0);fr.readAsDataURL(f)}
function setImg(src,smp){R.img=src;$('#dz').hidden=true;$('#pvbox').hidden=false;$('#pv').src=src;$('#upbar').style.width='0';requestAnimationFrame(()=>requestAnimationFrame(()=>$('#upbar').style.width='100%'));setTimeout(()=>analyze(smp),950)}
function resetImg(){R.img=0;$('#dz').hidden=false;$('#pvbox').hidden=true;$('#ai').hidden=true;$('#file').value=''}
function analyze(smp){const ai=$('#ai');ai.hidden=false;$('#airs').hidden=true;$('#aist').textContent='Rasm tahlil qilinmoqda...';$('#sc').classList.add('on');$('#aicb').style.width='0';
 setTimeout(()=>{const k=smp?'chiqindi':pk(['chiqindi','yol','chiroq','suv','daraxt','infra']),cf=88+(rnd()*10|0);setCat(k);$('#sc').classList.remove('on');$('#aist').textContent='Tahlil yakunlandi';$('#airs').hidden=false;
  $('#aik').textContent=C[k].e+' '+C[k].t;$('#aic').textContent=cf+'%';$('#aio').textContent=C[k].o;$('#aid').textContent='📍 '+near(R.x,R.y)[0]+' tumani, Toshkent';setTimeout(()=>$('#aicb').style.width=cf+'%',50)},2200)}
function drawPick(){$('#pickMap').innerHTML=base()+`<g transform="translate(${R.x} ${R.y})"><circle class="pl" r="14" fill="var(--red)" style="opacity:.3"/><path d="M0 0c-12-14-16-22-16-30a16 16 0 0 1 32 0c0 8-4 16-16 30Z" transform="translate(0 4)" fill="var(--em)" stroke="#fff" stroke-width="3"/><circle cy="-26" r="6" fill="#fff"/></g>`;$('#locd').textContent='📍 '+near(R.x,R.y)[0]+' tumani, Toshkent'}
function place(e){const s=$('#pickMap'),pt=s.createSVGPoint();pt.x=e.clientX;pt.y=e.clientY;const q=pt.matrixTransform(s.getScreenCTM().inverse());R.x=Math.max(20,Math.min(880,q.x));R.y=Math.max(40,Math.min(580,q.y));drawPick()}
function geo(){R.x=200+(rnd()*40|0);R.y=380+(rnd()*30|0);drawPick();toast('Joylashuv aniqlandi: Chilonzor','📍')}
function sumUp(){const c=C[R.cat];$('#sum').innerHTML=(R.img?`<img src="${R.img}" alt="">`:`<span class="tile" style="width:62px;height:62px">${c.e}</span>`)+`<div><b>${c.e} ${c.t}</b><span class="mut">📍 ${near(R.x,R.y)[0]} tumani · ${c.o}</span></div>`;if(!$('#desc').value)$('#desc').value=pk(c.d)}
function submit(){if(!USR)return authModal(submit);const d=near(R.x,R.y),c=R.cat,p={id:1000+P.length,c,d:d[0],x:R.x,y:R.y,s:'r',v:0,ds:$('#desc').value.trim()||C[c].d[0],day:0,mine:1,pr:8,nw:1};P.unshift(p);W[3]++;CN[c]=(CN[c]||0)+1;NT++;
 N.unshift({t:'Murojaat qabul qilindi',m:`${d[0]}dagi ${C[c].n.toLowerCase()} muammosi mas‘ul tashkilotga yuborildi.`,w:'hozir',u:1});
 $('#modal').innerHTML=`<div class="mbox" style="text-align:center"><svg class="ok" viewBox="0 0 92 92"><circle cx="46" cy="46" r="41"/><path d="M28 47l12 12 25-27"/></svg><h2 style="font-size:26px">Murojaatingiz yuborildi!</h2><p class="mut" style="margin:8px 0 22px">Raqam: #YR-2026-${p.id}. Holatini “Murojaatlar” bo‘limida kuzating.</p><div class="nav2" style="justify-content:center"><button class="btn ghost" onclick="closeM();go('mine')">Murojaatlarim</button><button class="btn" onclick="closeM();go('map');setTimeout(()=>openPop(${p.id}),80)">Xaritada ko‘rish</button></div></div>`;$('#modal').classList.add('on');
 toast('Muammo xaritaga qo‘shildi','🗺️');confetti();R.cat=0;R.step=1;$$('.cc').forEach(b=>b.classList.remove('on'));$('#desc').value='';resetImg();R.x=190;R.y=390;showStep(1);upd()}

/* ===== copy to clipboard ===== */
function copyPhone(ph,btn){const done=()=>{const ic=btn.querySelector('i');ic.className='fa-solid fa-check';btn.classList.add('copied');toast('Raqam nusxalandi: '+ph,'📋');setTimeout(()=>{ic.className='fa-regular fa-copy';btn.classList.remove('copied')},1600)};
 if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(ph).then(done,done);else done()}

/* ===== button ripple ===== */
document.addEventListener('click',e=>{const b=e.target.closest('.btn');if(!b)return;const rect=b.getBoundingClientRect(),s=Math.max(rect.width,rect.height),r=document.createElement('span');
 r.className='ripple';r.style.width=r.style.height=s+'px';r.style.left=(e.clientX-rect.left-s/2)+'px';r.style.top=(e.clientY-rect.top-s/2)+'px';b.append(r);r.addEventListener('animationend',()=>r.remove())});

/* ===== scroll reveal ===== */
function initReveal(){if(!('IntersectionObserver' in window))return;const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('vis');obs.unobserve(e.target)}}),{threshold:.15});
 $$('.sec,.band').forEach(el=>{el.classList.add('reveal');obs.observe(el)})}

/* ===== back to top ===== */
function initBackTop(){const b=document.createElement('button');b.className='totop';b.setAttribute('aria-label','Yuqoriga ko‘tarilish');b.innerHTML='<i class="fa-solid fa-arrow-up"></i>';
 b.onclick=()=>scrollTo({top:0,behavior:'smooth'});document.body.append(b);window.addEventListener('scroll',()=>b.classList.toggle('show',scrollY>420),{passive:true})}

/* ===== confetti burst ===== */
function confetti(){if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;const c=document.createElement('canvas');c.className='confetti-canvas';document.body.append(c);
 const ctx=c.getContext('2d'),dpr=devicePixelRatio||1;c.width=innerWidth*dpr;c.height=innerHeight*dpr;c.style.width=innerWidth+'px';c.style.height=innerHeight+'px';ctx.scale(dpr,dpr);
 const cols=['#0B6B4F','#2563EB','#F2B01E','#E5484D','#16A34A'],parts=Array.from({length:90},()=>({x:innerWidth/2,y:innerHeight*.35,vx:(rnd()-.5)*14,vy:-rnd()*9-4,g:.28+rnd()*.12,s:4+rnd()*4,r:rnd()*Math.PI,vr:(rnd()-.5)*.3,col:cols[rnd()*cols.length|0]}));
 let t=0;(function fr(){t++;ctx.clearRect(0,0,innerWidth,innerHeight);parts.forEach(p=>{p.vy+=p.g;p.x+=p.vx;p.y+=p.vy;p.r+=p.vr;ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.r);ctx.fillStyle=p.col;ctx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);ctx.restore()});
  t<110?requestAnimationFrame(fr):c.remove()})()}

initTheme();initAuth();initReveal();initBackTop();go('home');
