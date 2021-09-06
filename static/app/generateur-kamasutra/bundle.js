var app=function(){"use strict";function e(){}const n=e=>e;function t(e){return e()}function s(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function i(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}const a="undefined"!=typeof window;let u=a?()=>window.performance.now():()=>Date.now(),l=a?e=>requestAnimationFrame(e):e;const c=new Set;function p(e){c.forEach((n=>{n.c(e)||(c.delete(n),n.f())})),0!==c.size&&l(p)}function d(e){let n;return 0===c.size&&l(p),{promise:new Promise((t=>{c.add(n={c:e,f:t})})),abort(){c.delete(n)}}}function m(e,n){e.appendChild(n)}function f(e){if(!e)return document;const n=e.getRootNode?e.getRootNode():e.ownerDocument;return n.host?n:document}function h(e){const n=b("style");return function(e,n){m(e.head||e,n)}(f(e),n),n}function v(e,n,t){e.insertBefore(n,t||null)}function g(e){e.parentNode.removeChild(e)}function b(e){return document.createElement(e)}function q(e){return document.createTextNode(e)}function y(){return q(" ")}function $(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}const x=new Set;let L,_=0;function j(e,n,t,s,o,r,i,a=0){const u=16.666/s;let l="{\n";for(let e=0;e<=1;e+=u){const s=n+(t-n)*r(e);l+=100*e+`%{${i(s,1-s)}}\n`}const c=l+`100% {${i(t,1-t)}}\n}`,p=`__svelte_${function(e){let n=5381,t=e.length;for(;t--;)n=(n<<5)-n^e.charCodeAt(t);return n>>>0}(c)}_${a}`,d=f(e);x.add(d);const m=d.__svelte_stylesheet||(d.__svelte_stylesheet=h(e).sheet),v=d.__svelte_rules||(d.__svelte_rules={});v[p]||(v[p]=!0,m.insertRule(`@keyframes ${p} ${c}`,m.cssRules.length));const g=e.style.animation||"";return e.style.animation=`${g?`${g}, `:""}${p} ${s}ms linear ${o}ms 1 both`,_+=1,p}function C(e,n){const t=(e.style.animation||"").split(", "),s=t.filter(n?e=>e.indexOf(n)<0:e=>-1===e.indexOf("__svelte")),o=t.length-s.length;o&&(e.style.animation=s.join(", "),_-=o,_||l((()=>{_||(x.forEach((e=>{const n=e.__svelte_stylesheet;let t=n.cssRules.length;for(;t--;)n.deleteRule(t);e.__svelte_rules={}})),x.clear())})))}function E(e){L=e}const k=[],w=[],A=[],P=[],z=Promise.resolve();let M=!1;function S(e){A.push(e)}let T=!1;const U=new Set;function N(){if(!T){T=!0;do{for(let e=0;e<k.length;e+=1){const n=k[e];E(n),O(n.$$)}for(E(null),k.length=0;w.length;)w.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];U.has(n)||(U.add(n),n())}A.length=0}while(k.length);for(;P.length;)P.pop()();M=!1,T=!1,U.clear()}}function O(e){if(null!==e.fragment){e.update(),o(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(S)}}let R;function D(){return R||(R=Promise.resolve(),R.then((()=>{R=null}))),R}function H(e,n,t){e.dispatchEvent(function(e,n,t=!1){const s=document.createEvent("CustomEvent");return s.initCustomEvent(e,t,!1,n),s}(`${n?"intro":"outro"}${t}`))}const V=new Set;let F;function B(e,n){e&&e.i&&(V.delete(e),e.i(n))}function Q(e,n,t,s){if(e&&e.o){if(V.has(e))return;V.add(e),F.c.push((()=>{V.delete(e),s&&(t&&e.d(1),s())})),e.o(n)}}const G={duration:0};function I(t,s,o){let i,a,l=s(t,o),c=!1,p=0;function m(){i&&C(t,i)}function f(){const{delay:s=0,duration:o=300,easing:r=n,tick:f=e,css:h}=l||G;h&&(i=j(t,0,1,o,s,r,h,p++)),f(0,1);const v=u()+s,g=v+o;a&&a.abort(),c=!0,S((()=>H(t,!0,"start"))),a=d((e=>{if(c){if(e>=g)return f(1,0),H(t,!0,"end"),m(),c=!1;if(e>=v){const n=r((e-v)/o);f(n,1-n)}}return c}))}let h=!1;return{start(){h||(h=!0,C(t),r(l)?(l=l(),D().then(f)):f())},invalidate(){h=!1},end(){c&&(m(),c=!1)}}}function Y(t,s,i){let a,l=s(t,i),c=!0;const p=F;function m(){const{delay:s=0,duration:r=300,easing:i=n,tick:m=e,css:f}=l||G;f&&(a=j(t,1,0,r,s,i,f));const h=u()+s,v=h+r;S((()=>H(t,!1,"start"))),d((e=>{if(c){if(e>=v)return m(0,1),H(t,!1,"end"),--p.r||o(p.c),!1;if(e>=h){const n=i((e-h)/r);m(1-n,n)}}return c}))}return p.r+=1,r(l)?D().then((()=>{l=l(),m()})):m(),{end(e){e&&l.tick&&l.tick(1,0),c&&(a&&C(t,a),c=!1)}}}function J(e,n){-1===e.$$.dirty[0]&&(k.push(e),M||(M=!0,z.then(N)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function K(n,i,a,u,l,c,p,d=[-1]){const m=L;E(n);const f=n.$$={fragment:null,ctx:null,props:c,update:e,not_equal:l,bound:s(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:i.context||[]),callbacks:s(),dirty:d,skip_bound:!1,root:i.target||m.$$.root};p&&p(f.root);let h=!1;if(f.ctx=a?a(n,i.props||{},((e,t,...s)=>{const o=s.length?s[0]:t;return f.ctx&&l(f.ctx[e],f.ctx[e]=o)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](o),h&&J(n,e)),t})):[],f.update(),h=!0,o(f.before_update),f.fragment=!!u&&u(f.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);f.fragment&&f.fragment.l(e),e.forEach(g)}else f.fragment&&f.fragment.c();i.intro&&B(n.$$.fragment),function(e,n,s,i){const{fragment:a,on_mount:u,on_destroy:l,after_update:c}=e.$$;a&&a.m(n,s),i||S((()=>{const n=u.map(t).filter(r);l?l.push(...n):o(n),e.$$.on_mount=[]})),c.forEach(S)}(n,i.target,i.anchor,i.customElement),N()}E(m)}function W(e,{delay:t=0,duration:s=400,easing:o=n}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:s,easing:o,css:e=>"opacity: "+e*r}}const X=[{name:"La levrette",feminine:!0,description:"[La position préférée des Français·es !](https://lepointq.com/articles/20-10/la-levrette-la-position-preferee-des-francais.e.s/) Une personne à quatre pattes, l’autre derrière..."},{name:"Le missionnaire",description:"La classique des classiques ! L’un·e sur le dos, l’autre au-dessus, les yeux dans les yeux..."},{name:"Le 69",description:"L’un·e sur l’autre (ou l’inverse), la tête vers vos sexes respectifs..."},{name:"L’andromaque",feminine:!0,description:"Les femmes prennent le pouvoir ! Rendez-vous au-dessus de votre partenaire, allongé·e sur le dos..."},{name:"Le latéral",description:"Place à la géométrie ! Angle droit, aigu ou obtus, peut importe, tant que l’un·e est sur le côté, et l’autre face à ellui..."},{name:"Les ciseaux",plural:!0,description:"Les jambes se croisent, comme des paires de ciseaux emboîtées..."},{name:"Le Y",description:"Comme l’expression bien connue ! Sur le bord du lit, l’un·e penché·e vers le bas, l’autre vers le haut..."},{name:"Le cheval infernal",description:"Comme l’andromaque, mais les fesses tournées vers la personne en dessous. Préparez-vous pour une course de l’enfer..."},{name:"Le facesitting",description:"Le sexe sur le visage de l’autre, pour tout contrôler..."},{name:"La brouette",feminine:!0,description:"Pour une fois, le nom est imagé ! Allez, on part à la récolte..."},{name:"L’ondulation",feminine:!0,description:"Cette position pourrait rappeler un étrange film : vous êtes à quatre pattes, la tête vers les fesses de votre partenaire..."},{name:"Le Nirvana",description:"Comme le missionnaire, sauf que la personne en dessous a les jambes serrées. On monte au 7e ciel..."},{name:"L’amazone",feminine:!0,description:"Une position de reine ! L’un·e au-dessus de l’autre, assis sur une chaise..."},{name:"L’union de\nl’éléphante",feminine:!0,description:"Les partenaires à genoux, face à face et le corps tendu..."},{name:"La pieuvre",feminine:!0,description:"On fait travailler sa souplesse ! Comme un missionnaire, avec une jambe sur l'épaule..."},{name:"Le cocktail",description:"Debout, face à face, tout simplement..."},{name:"Le petit pont",description:"Vous vous souvenez des cours d'accrosport ? Et bien c'est la même chose : l’un·e fait un pont en arrière, et l'autre se met au-dessus..."},{name:"La cuillère",feminine:!0,description:"Comme un câlin, l’un·e dans les bras de l’autre, allongé·e·s sur le côté..."},{name:"Le cadenas",description:"Comme un missionnaire, sauf qu’une personne est assise sur un meuble (il paraît que c’est encore mieux sur une machine à laver en marche)..."},{name:"Le cunnilingus",description:"Vous le connaissez sûrement bien ! Réservé aux personnes de goût..."},{name:"L’union\nde l’aigle",feminine:!0,description:"Ne vous en faites pas, il ne s’agit pas d’apprendre à voler ! Vous êtes simplement allongé·e·s face à face, sur le côté de votre corps..."},{name:"L’équilibriste",description:"C’est parti pour un spectacle de cirque ! L’un·e soulève les jambes et la taille de l’autre, qui s’appuie sur un bras..."},{name:"La fellation",feminine:!0,description:"Ah, le sexe oral, c’est quand même pas mal... [Et vous êtes assez d’accord !](https://lepointq.com/articles/20-11/et-toi-le-sexe-oral/) Mais pour pimper un peu tout ça, on vous propose une fellation..."},{name:"L’étoile de mer",feminine:!0,description:"Accroché·e·s sur votre rocher, le but est de ne pas bouger..."},{name:"Le président\nvigoureux",description:"Toujours plus haut ! L’un·e les pieds sur un meuble, dos à son ou sa partenaire qui le ou la soulève par les fesses..."},{name:"La liane",feminine:!0,description:"Tout est dans l’échauffement ! Debout face à face, l’un·e lève la jambe pour la poser sur l’épaule de l’autre..."},{name:"La montagne\nmagique",feminine:!0,description:"Comme la levrette, en s’appuyant sur une pile de coussins pour pouvoir s’allonger l’un·e sur l’autre..."},{name:"Le nœud coulant",description:"Face à face, assis·e·s sur les fesses, les jambes entremêlées..."},{name:"L’anulingus",description:"[Un plaisir tabou](https://lepointq.com/articles/20-11/anulingus-vous-avez-dit-tabou/) que tout le monde peut pratiquer..."}],Z=[{name:"aquatique",description:"mais dans l’eau (ou sous l’eau, si vous êtes bon·ne·s en apnée...) ! [Attention à l’effet ventouse !](https://lepointq.com/articles/21-07/l-amour-au-creux-des-vagues-est-ce-une-bonne-idee/)"},{name:"fruité",feminine:"fruitée",plural:"fruités",description:"mais façon salade de fruits : banane, fraise, mangue, ou carrément pastèque ? Vous allez vous régaler, [bande de gourmand·e·s !](https://lepointq.com/articles/21-05/plaisirs-gourmands/)"},{name:"chocolaté",feminine:"chocolatée",plural:"chocolatés",description:"mais on y ajoute une touche de cacao : en carrés ou fondu, comment le dégusterez-vous ?"},{name:"à trois ou plus",description:"mais avec des copain·ine·s, ou de parfait·e·s inconnu·e·s ! À vous de voir comment vous vous organisez. [Et pour vous, c’est un fantasme ?](https://lepointq.com/articles/21-03/le-plan-a-trois-a-t-il-vraiment-la-cote/)"},{name:"contre un mur",description:"mais on y introduit un peu de verticalité. Vos jambes (ou vos bras) pourront-ils vous porter ?"},{name:"les yeux bandés",description:"mais sans pouvoir utiliser ses yeux. Si ce n’est pas sensuel ça..."},{name:"suspendu",feminine:"suspendue",plural:"suspendus",description:"mais au-dessus du sol. De quoi se faire tourner la tête !"},{name:"attaché",feminine:"attachée",plural:"attachés",description:'mais pieds et poings liés, à la merci de votre partenaire. [Les quatre lettres "BDSM" vous intriguent ?](https://lepointq.com/articles/21-04/tout-sur-le-bdsm-avec-la-sexologue-claire-alquier/)'},{name:"déguisé",feminine:"déguisée",plural:"déguisés",description:"mais avec des costumes ! Infirmière, pompier, [héros·ïne de jeu vidéo](https://lepointq.com/articles/21-02/du-sexe-dans-les-jeux-video/) ou de dessin animé, à vous d’imaginer de nouvelles aventures !"},{name:"claqué",feminine:"claquée",plural:"claqués",description:"mais on se permet des gestes un peu plus marquants ! Attention, on pose ses limites respectives avant de commencer !"},{name:"en musique",description:"mais avec [une playlist dédiée](https://lepointq.com/articles/21-02/du-love-dans-tes-oreilles/) ! Alors, on part sur du classique, du rock, ou de la variété française pour danser sous la couette ?"},{name:"à la cire chaude",description:"mais avec des gouttes de cire chaude qui tombent sur vos corps. Ambiance extra caliente garantie !"},{name:"on the rocks",description:"mais avec des glaçons, pour frissonner toujours plus de plaisir… Attention aux brûlures !"},{name:"dirty talké",feminine:"dirty talkée",plural:"dirty talkés",description:"mais avec des mots crus, qui l’eût cru ?"},{name:"à la va-vite",description:"mais en coup de vent, parce que vous êtes pressé·e·s. Ne vous faites pas attraper !"},{name:"avec un sextoy",description:"mais on rajoute Gégé dans l’équation, pour [toujours plus de possibilités](https://lepointq.com/articles/20-11/tous-ces-beaux-joujoux-que-je-vois-en-reve/) !"},{name:"porté",feminine:"portée",plural:"portés",description:"mais on fait travailler les muscles ! N’hésitez pas à vous servir d’un meuble pour rendre la tâche plus facile."},{name:"non pénétratif",feminine:"non pénétrative",plural:"non pénétratifs",description:"mais sans pénétration ! Pas forcément facile, n’est-ce pas ? Allez, faites marcher vos méninges ! [Besoin de quelques conseils ?](https://lepointq.com/articles/20-11/un-rapport-sexuel-se-termine-forcement-par-une-penetration/)"},{name:"avec Rocco",description:"mais devant une vidéo porno ou [du porno audio](https://lepointq.com/articles/20-10/le-porno-audio-je-crie-ouuuui/) ! Peut-être l’occasion de faire passer un message ?"},{name:"silencieux",feminine:"silencieuse",description:"mais sans un bruit ! Saurez-vous résister au son du plaisir qui monte ?"},{name:"sextapé",feminine:"sextapée",plural:"sextapés",description:"mais vous êtes filmé·e·s ! Attention, la vidéo reste entre vous : en France, [le revenge porn est puni par la loi](https://lepointq.com/articles/20-12/le-revenge-porn-en-france-comment-s-en-proteger/)..."}],ee=["Une autre ?","Une autre ?","Une autre ?","Une autre ?","Une autre ?","Pas convaincu·e·s ?","Pas convaincu·e·s ?","Pas convaincu·e·s ?","Quelque chose de différent ?","Quelque chose de différent ?","Trop compliqué ?","Trop compliqué ?","Pas à votre goût ?","Pas à votre goût ?","Un peu trop technique ?","Un peu trop technique ?","Peur du claquage ?"],ne=e=>{let n=e;const t=n.match(/"[^\"]*"/g);t&&t.forEach((e=>{n=n.replace(e,`&laquo;&nbsp;${e.slice(1,-1)}&nbsp;&raquo;`)}));const s=n.match(/\*[^\*]*\*/g);s&&s.forEach((e=>{n=n.replace(e,`<b>${e.slice(1,-1)}</b>`)}));const o=n.match(/_[^_]*_/g);o&&o.forEach((e=>{n=n.replace(e,`<i>${e.slice(1,-1)}</i>`)}));const r=n.match(/\[[^\[\]]*\]\(\S+\)/g);return r&&r.forEach((e=>{const t=e.match(/\(\S+\)/)[0].slice(1,-1),s=e.match(/\[.+\]/)[0].slice(1,-1);n=n.replace(e,`<a href=${t} target=_blank>${s}</a>`)})),n=n.replace(/  /g," ").replace(/'/g,"’").replace(/ :/g,"&nbsp;:").replace(/ ;/g,"&nbsp;;").replace(/ !/g,"&nbsp;!").replace(/ \?/g,"&nbsp;?").replace(/ - /g,"&nbsp;&mdash;&nbsp;").replace(/ \%/g,"&nbsp;%"),n};function te(e,n,t){const s=e.slice();return s[5]=n[t],s}function se(n){let t,s,o,r,i=ne(n[5])+"";return{c(){t=b("span"),o=y(),r=b("br"),$(t,"class","svelte-1wdsx58")},m(e,n){v(e,t,n),t.innerHTML=i,v(e,o,n),v(e,r,n)},p(e,n){1&n&&i!==(i=ne(e[5])+"")&&(t.innerHTML=i)},i(e){s||S((()=>{s=I(t,n[4],{delay:500}),s.start()}))},o:e,d(e){e&&g(t),e&&g(o),e&&g(r)}}}function oe(e){let n,t,s,o,r,i,a,u,l,c,p,d,f,h,x,L,_,j=e[3](e[0],e[1])+"",C=ne(`${e[0].description} ${e[1].description}`)+"",E=ne(ee.random())+"",k=e[0].name.split("\n"),w=[];for(let n=0;n<k.length;n+=1)w[n]=se(te(e,k,n));return{c(){n=b("h3");for(let e=0;e<w.length;e+=1)w[e].c();t=y(),s=b("span"),o=q(j),a=y(),u=b("p"),p=y(),d=b("button"),$(s,"class","svelte-1wdsx58"),$(n,"class","svelte-1wdsx58"),$(u,"class","svelte-1wdsx58"),$(d,"class","svelte-1wdsx58")},m(r,i){v(r,n,i);for(let e=0;e<w.length;e+=1)w[e].m(n,null);var l,c,f,h;m(n,t),m(n,s),m(s,o),v(r,a,i),v(r,u,i),u.innerHTML=C,v(r,p,i),v(r,d,i),d.innerHTML=E,x=!0,L||(l=d,c="click",f=e[2],l.addEventListener(c,f,h),_=()=>l.removeEventListener(c,f,h),L=!0)},p(e,s){if(1&s){let o;for(k=e[0].name.split("\n"),o=0;o<k.length;o+=1){const r=te(e,k,o);w[o]?(w[o].p(r,s),B(w[o],1)):(w[o]=se(r),w[o].c(),B(w[o],1),w[o].m(n,t))}for(;o<w.length;o+=1)w[o].d(1);w.length=k.length}(!x||3&s)&&j!==(j=e[3](e[0],e[1])+"")&&function(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}(o,j),(!x||3&s)&&C!==(C=ne(`${e[0].description} ${e[1].description}`)+"")&&(u.innerHTML=C)},i(n){if(!x){for(let e=0;e<k.length;e+=1)B(w[e]);r||S((()=>{r=I(s,e[4],{delay:500}),r.start()})),i&&i.end(1),S((()=>{c&&c.end(1),l=I(u,W,{delay:1500}),l.start()})),S((()=>{h&&h.end(1),f=I(d,W,{delay:1500}),f.start()})),x=!0}},o(e){i=Y(n,W,{duration:400}),l&&l.invalidate(),c=Y(u,W,{duration:400}),f&&f.invalidate(),h=Y(d,W,{duration:400}),x=!1},d(e){e&&g(n),function(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}(w,e),e&&i&&i.end(),e&&g(a),e&&g(u),e&&c&&c.end(),e&&g(p),e&&g(d),e&&h&&h.end(),L=!1,_()}}}function re(n){let t,s,r,a,u,l=(n[0],n[1]),c=oe(n);return{c(){t=b("article"),s=b("h1"),s.textContent="Envie de tenter autre chose au lit ? Pourquoi ne pas essayer...",r=y(),a=b("div"),c.c(),$(a,"class","card svelte-1wdsx58")},m(e,n){v(e,t,n),m(t,s),m(t,r),m(t,a),c.m(a,null),u=!0},p(n,[t]){3&t&&i(l,(n[0],l=n[1]))?(F={r:0,c:[],p:F},Q(c,1,1,e),F.r||o(F.c),F=F.p,c=oe(n),c.c(),B(c),c.m(a,null)):c.p(n,t)},i(e){u||(B(c),u=!0)},o(e){Q(c),u=!1},d(e){e&&g(t),c.d(e)}}}function ie(e,n,t){let s,o;Object.defineProperty(Array.prototype,"shuffle",{value(){return this.sort(((e,n)=>.5-Math.random()))}}),Object.defineProperty(Array.prototype,"random",{value(){return this[~~(Math.random()*this.length)]}});const r=()=>{t(0,s=X.random()),t(1,o=Z.random())};return r(),[s,o,r,(e,n)=>e.feminine&&n.feminine?n.feminine:e.plural&&n.plural?n.plural:n.name,(e,{duration:n=1e3,delay:t})=>{const s="ABCDEFGHIJKLMNOPQRSTUVWXYZ&#*+%?£@§$ ",o=e.textContent;let r=0;return{duration:n,delay:t,tick:n=>{if(n<.5){r=Math.min(Math.ceil(2.1*n*o.length),o.length);const t=Array.from({length:r},(()=>s.split("").random())).join("");e.textContent=t}else if(n<1){const n=e.textContent,t=Array.from({length:n.length},((e,n)=>n)).filter((e=>n[e]!==o[e])).shuffle().slice(0,2);e.textContent=e.textContent.split("").map(((e,n)=>e===o[n]||t.includes(n)?o[n]:s.split("").random())).join("")}else e.textContent=o}}}]}return new class extends class{$destroy(){!function(e,n){const t=e.$$;null!==t.fragment&&(o(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),K(this,e,ie,re,i,{})}}({target:document.querySelector("main")})}();
//# sourceMappingURL=bundle.js.map