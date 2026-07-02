import"./modulepreload-polyfill-B5Qt9EMX.js";const G=()=>{const g=window.innerHeight*.01;document.documentElement.style.setProperty("--vh",`${g}px`)};G();window.addEventListener("resize",G);const V=()=>{const g=document.getElementById("preloader"),w=document.getElementById("preloaderBar");if(g&&w){document.body.style.overflow="hidden";let e=0,n=document.readyState==="complete";const o=setInterval(()=>{if(e>=100){clearInterval(o),w.style.width="100%",setTimeout(()=>{g.classList.add("fade-out"),document.body.style.overflow="",setTimeout(()=>{g.remove()},800)},250);return}n?e+=5:e<85?e+=1.5:e+=.1,w.style.width=`${Math.min(e,100).toFixed(1)}%`},20);window.addEventListener("load",()=>{n=!0}),setTimeout(()=>{n=!0},3e3)}window.lucide&&window.lucide.createIcons();const I=document.getElementById("navbar");window.addEventListener("scroll",()=>{window.scrollY>40?I.classList.add("navbar-scrolled"):I.classList.remove("navbar-scrolled")});const q=document.getElementById("menuBtnOpen"),k=document.getElementById("menuBtnClose"),x=document.getElementById("menuPanel"),J=document.querySelectorAll(".menu-link-item");function U(){x.classList.add("active"),document.body.style.overflow="hidden"}function T(){x.classList.remove("active"),document.body.style.overflow=""}q&&k&&x&&(q.addEventListener("click",U),k.addEventListener("click",T),J.forEach(e=>{e.addEventListener("click",T)}));const X=document.querySelectorAll(".metric-num"),E=document.getElementById("hero-projects-count"),S=(e,n=1500)=>{const s=parseInt(e.getAttribute("data-target")||e.innerText,10);let o=0;const r=Math.max(Math.floor(n/s),15),i=setInterval(()=>{o+=Math.ceil(s/(n/r)),o>=s?(e.innerText=s,clearInterval(i)):e.innerText=o},r)};E&&(E.setAttribute("data-target","321"),setTimeout(()=>S(E,1200),200));const _={threshold:.2,rootMargin:"0px 0px -50px 0px"},K=new IntersectionObserver((e,n)=>{e.forEach(s=>{if(s.isIntersecting){const o=s.target;S(o,1500),n.unobserve(o)}})},_);X.forEach(e=>{K.observe(e)});const B=document.getElementById("pricingToggle"),M=document.getElementById("toggleMonthly"),H=document.getElementById("toggleAnnually"),h=document.getElementById("price-basic"),v=document.getElementById("price-premium"),f=document.getElementById("price-ultimate");function Z(){B.classList.toggle("annually")?(M.classList.remove("active"),H.classList.add("active"),d(h,h.getAttribute("data-annual")),d(v,v.getAttribute("data-annual")),d(f,f.getAttribute("data-annual"))):(H.classList.remove("active"),M.classList.add("active"),d(h,h.getAttribute("data-monthly")),d(v,v.getAttribute("data-monthly")),d(f,f.getAttribute("data-monthly")))}function d(e,n){e&&(e.style.opacity="0",e.style.transform="translateY(-5px)",setTimeout(()=>{e.innerText=n,e.style.opacity="1",e.style.transform="translateY(0)"},150))}B&&B.addEventListener("click",Z);const j=document.querySelectorAll(".faq-item");j.forEach(e=>{const n=e.querySelector(".faq-question-btn"),s=e.querySelector(".faq-answer");n.addEventListener("click",()=>{const o=e.classList.contains("active");j.forEach(r=>{r.classList.remove("active"),r.querySelector(".faq-answer").style.maxHeight="0"}),o||(e.classList.add("active"),s.style.maxHeight=s.scrollHeight+"px")})});const P=document.querySelectorAll(".scroll-fill-title");P.forEach(e=>{e.style.setProperty("--fill-pct","0%")});const b=new Set,ee=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting?b.add(n.target):n.target.getBoundingClientRect().top>0&&(b.delete(n.target),n.target.style.setProperty("--fill-pct","0%"))})},{threshold:0,rootMargin:"0px 0px -5% 0px"});P.forEach(e=>ee.observe(e));let L=null;function z(){const e=window.innerHeight;b.forEach(n=>{const s=n.getBoundingClientRect(),o=e*.82,r=e*.18,i=(o-s.top)/(o-r),c=Math.max(0,Math.min(1,i));n.style.setProperty("--fill-pct",`${(c*100).toFixed(1)}%`),c>=1&&b.delete(n)}),L=null}window.addEventListener("scroll",()=>{L||(L=requestAnimationFrame(()=>{z()}))},{passive:!0}),z();const C=document.querySelector(".realisations-section"),m=document.querySelector(".realisations-track"),F=document.querySelector(".realisations-track-container");if(C&&m&&F){let n=function(){if(window.innerWidth<=768){m.style.transform="";return}const s=C.getBoundingClientRect(),o=window.innerHeight,r=C.offsetHeight-o;if(r<=0)return;const i=-s.top,c=Math.max(0,Math.min(1,i/r)),l=m.scrollWidth-F.clientWidth;l>0?m.style.transform=`translateX(${-c*l}px)`:m.style.transform="",e=null},e=null;window.addEventListener("scroll",()=>{e||(e=requestAnimationFrame(n))},{passive:!0}),window.addEventListener("resize",()=>{e||(e=requestAnimationFrame(n))}),n()}const $=document.querySelector(".method-timeline-grid"),O=document.querySelectorAll(".method-timeline-step");$&&O.length>0&&new IntersectionObserver((n,s)=>{n.forEach(o=>{o.isIntersecting&&(O.forEach((r,i)=>{setTimeout(()=>{r.classList.add("reveal-visible")},i*300)}),s.unobserve(o.target))})},{threshold:.15}).observe($);const y=document.getElementById("hero");if(y){let s=function(){const o=window.scrollY,r=y.offsetHeight||600;if(o<=r){const i=o/r;e&&(e.style.opacity=Math.max(0,1-i*1.5).toFixed(2),e.style.transform=`translateY(${i*60}px)`),n&&(n.style.transform=`scale(${1.02-i*.02})`)}};const e=y.querySelector(".hero-content-wrapper"),n=y.querySelector(".hero-bg-layer");window.addEventListener("scroll",s,{passive:!0}),s()}(()=>{const e=window.location.pathname.includes("/cases/")||window.location.pathname.includes("/articles/")?"../":"";document.body.insertAdjacentHTML("beforeend",`
            <div id="arena-chat-widget">
                <div class="arena-chat-badge" id="arenaChatBadge"></div>
                <button class="arena-chat-trigger" id="arenaChatTrigger" aria-label="Ouvrir l'assistant">
                    <svg class="icon-chat" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    <svg class="icon-close" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                
                <div class="arena-chat-window" id="arenaChatWindow">
                    <div class="arena-chat-header">
                        <div class="arena-chat-header-profile">
                            <div class="arena-chat-avatar">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                <div class="arena-chat-avatar-status"></div>
                            </div>
                            <div class="arena-chat-meta">
                                <span class="arena-chat-name">Arena Assistant</span>
                                <span class="arena-chat-status">En ligne • Répond instantanément</span>
                            </div>
                        </div>
                        <button class="arena-chat-close" id="arenaChatClose" aria-label="Fermer l'assistant">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                    
                    <div class="arena-chat-body" id="arenaChatBody">
                        <div class="arena-chat-message bot">
                            <div class="arena-chat-msg-wrapper">
                                <div class="arena-chat-msg-bubble">
                                    Bonjour ! Je suis l'assistant de <strong>Strategy Arena</strong>.<br><br>
                                    Je peux vous renseigner sur nos services, notre méthodologie ou nos études de cas. Que puis-je faire pour vous aujourd'hui ?
                                </div>
                                <span class="arena-chat-msg-time">À l'instant</span>
                            </div>
                        </div>
                        
                        <div class="arena-chat-suggestions" id="arenaChatSuggestions">
                            <button class="arena-chat-suggestion-chip" data-question="Quels sont vos services ?">🔍 Quels sont vos services ?</button>
                            <button class="arena-chat-suggestion-chip" data-question="Voir des études de cas">📁 Voir vos études de cas</button>
                            <button class="arena-chat-suggestion-chip" data-question="Comment se déroule un audit ?">💡 Comment se déroule un audit ?</button>
                            <button class="arena-chat-suggestion-chip" data-question="Prendre rendez-vous / Nous contacter">📞 Nous contacter</button>
                        </div>
                    </div>
                    
                    <div class="arena-chat-footer">
                        <form class="arena-chat-form" id="arenaChatForm">
                            <input type="text" class="arena-chat-input" id="arenaChatInput" placeholder="Posez votre question..." autocomplete="off">
                            <button type="submit" class="arena-chat-send" aria-label="Envoyer">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        `);const s=document.getElementById("arenaChatTrigger"),o=document.getElementById("arenaChatWindow"),r=document.getElementById("arenaChatClose"),i=document.getElementById("arenaChatBadge"),c=document.getElementById("arenaChatForm"),l=document.getElementById("arenaChatInput"),u=document.getElementById("arenaChatBody");if(!s||!o||!r||!c||!l||!u)return;const A=()=>{const a=o.classList.toggle("open");s.classList.toggle("active"),a&&(i&&(i.style.display="none"),setTimeout(()=>l.focus(),300))};s.addEventListener("click",A),r.addEventListener("click",A);const D=document.querySelector(".navbar-chat-circle");D&&D.addEventListener("click",a=>{a.preventDefault(),o.classList.contains("open")||A()});const te=()=>{const a=new Date,t=String(a.getHours()).padStart(2,"0"),p=String(a.getMinutes()).padStart(2,"0");return`${t}:${p}`},N=()=>{u.scrollTop=u.scrollHeight},R=(a,t)=>{const p=te(),Y=`
                <div class="arena-chat-message ${a}">
                    <div class="arena-chat-msg-wrapper">
                        <div class="arena-chat-msg-bubble">${t}</div>
                        <span class="arena-chat-msg-time">${p}</span>
                    </div>
                </div>
            `,Q=document.getElementById("arenaChatSuggestions");Q?Q.insertAdjacentHTML("beforebegin",Y):u.insertAdjacentHTML("beforeend",Y),N()},ne=()=>{const a=`
                <div class="arena-chat-message bot" id="arenaChatTypingIndicator">
                    <div class="arena-chat-msg-wrapper">
                        <div class="arena-chat-msg-bubble">
                            <div class="arena-chat-typing">
                                <span class="arena-chat-dot"></span>
                                <span class="arena-chat-dot"></span>
                                <span class="arena-chat-dot"></span>
                            </div>
                        </div>
                    </div>
                </div>
            `,t=document.getElementById("arenaChatSuggestions");t?t.insertAdjacentHTML("beforebegin",a):u.insertAdjacentHTML("beforeend",a),N()},se=()=>{const a=document.getElementById("arenaChatTypingIndicator");a&&a.remove()},oe=a=>{const t=a.toLowerCase();return t.includes("service")||t.includes("offre")||t.includes("propos")||t.includes("niveau")||t.includes("fait")||t.includes("conseil")||t.includes("stratég")||t.includes("expertis")||t.includes("compétenc")?`Notre expertise s'articule autour de 4 piliers de services concrets :<br><br>
                        • <strong>Planification stratégique</strong> : Définition de feuilles de route claires, alignement des objectifs commerciaux avec les capacités opérationnelles, et priorisation des chantiers de croissance.<br>
                        • <strong>Gestion d'organisation</strong> : Audit et optimisation des processus internes, restructuration des flux de travail, et élimination des tâches manuelles répétitives.<br>
                        • <strong>Gestion du changement</strong> : Accompagnement humain et formation de vos équipes pour garantir une adoption fluide et durable des nouveaux outils.<br>
                        • <strong>Architecture des systèmes</strong> : Choix, conception et intégration de vos outils digitaux (CRM, ERP, automatisations sur mesure) pour relier vos flux d'opérations.<br><br>
                        Quel pilier vous intéresse le plus pour votre entreprise ?`:t.includes("cas")||t.includes("étude")||t.includes("réalisation")||t.includes("projet")||t.includes("exemple")||t.includes("client")||t.includes("bénin")||t.includes("sahel")||t.includes("atlantique")?`Découvrez l'impact de nos interventions à travers nos études de cas récentes :<br><br>
                        • <a href="${e}cases/benin-distribution.html"><strong>Bénin Distribution</strong></a> : Élimination de la double saisie manuelle et gain de 15 heures de travail par semaine.<br>
                        • <a href="${e}cases/sahel-foods.html"><strong>Sahel Foods</strong></a> : Pilotage précis des marges et des coûts opérationnels.<br>
                        • <a href="${e}cases/atlantique-logistique.html"><strong>Atlantique Logistique</strong></a> : Amélioration des temps de transit et de la traçabilité.<br><br>
                        Cliquez sur les liens pour découvrir leurs histoires de réussite.`:t.includes("audit")||t.includes("méthod")||t.includes("étape")||t.includes("comment")||t.includes("déroule")||t.includes("phase")?`Notre méthodologie, inspirée du Design Thinking, s'articule autour de 4 phases clés :<br><br>
                        1. <strong>Comprendre (Étape 01)</strong> : Diagnostic terrain et cartographie des frictions réelles.<br>
                        2. <strong>Concevoir (Étape 02)</strong> : Exploration de solutions sur mesure et feuille de route priorisée.<br>
                        3. <strong>Déployer (Étape 03)</strong> : Mise en œuvre progressive, formation et documentation.<br>
                        4. <strong>Piloter (Étape 04)</strong> : Suivi des indicateurs clés et ajustements réguliers.<br><br>
                        Nous refusons de prescrire une solution sans une immersion terrain préalable.`:t.includes("contact")||t.includes("rendez")||t.includes("rdv")||t.includes("whatsapp")||t.includes("téléphone")||t.includes("email")||t.includes("adresse")||t.includes("écrire")||t.includes("basé")?`Pour échanger sur vos problématiques ou planifier un diagnostic gratuit, voici comment nous contacter :<br><br>
                        • <strong>Email</strong> : <a href="mailto:strategyarenacontact@gmail.com">strategyarenacontact@gmail.com</a><br>
                        • <strong>Téléphone</strong> : <a href="tel:+22901407899">+229 01 40 78 99 21</a><br>
                        • <strong>WhatsApp</strong> : <a href="https://wa.me/22901407899" target="_blank">Discuter directement</a><br><br>
                        Notre cabinet est basé à Cotonou, Bénin, et nous intervenons sur toute la région.`:t.includes("bonjour")||t.includes("salut")||t.includes("hello")||t.includes("bonsoir")||t.includes("hey")?"Bonjour ! C'est un plaisir de vous accueillir sur Strategy Arena. Comment puis-je vous aider dans votre réflexion opérationnelle aujourd'hui ?":t.includes("merci")||t.includes("parfait")||t.includes("super")||t.includes("cool")?"Avec plaisir ! Si vous avez d'autres interrogations ou souhaitez que nous passions aux choses concrètes, n'hésitez pas.":`Je n'ai pas tous les détails pour cette demande, mais je peux vous guider vers :<br><br>
                    • Nos <strong>services</strong> (niveaux d'accompagnement)<br>
                    • Nos <strong>études de cas</strong> clients réels<br>
                    • Notre <strong>méthodologie d'audit</strong> terrain<br>
                    • Nos canaux de <strong>contact</strong> pour planifier un rendez-vous.<br><br>
                    Quelle option préférez-vous explorer ?`},W=a=>{a.trim()&&(R("user",a),l.value="",ne(),setTimeout(()=>{se();const t=oe(a);R("bot",t)},1e3+Math.random()*500))};u.addEventListener("click",a=>{const t=a.target.closest(".arena-chat-suggestion-chip");if(t){const p=t.getAttribute("data-question");W(p)}}),c.addEventListener("submit",a=>{a.preventDefault(),W(l.value)})})()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",V):V();
