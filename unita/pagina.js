/* LA PAGINA
   Costruisce tutto a partire da testi.js (le parole) e disegni.js (i tratti).
   Parametri di servizio nell'indirizzo:
     ?modifica   i testi si correggono sulla pagina e si scarica testi.js aggiornato
     ?fermo      ferma i movimenti e traccia subito tutti i segni (stampa, catture)
     &da=N       parte da N pixel dall'alto      &a=3-2  apre l'approfondimento 2 della fermata 3
     &viste=1,2  segna come già viste le fermate indicate */
const QS = location.search;
const STILL = /[?&]fermo/.test(QS), EDIT = /[?&]modifica/.test(QS);
const html = document.documentElement;
if(STILL){ html.classList.add("still"); html.style.scrollBehavior = "auto"; }
{ const da = /[?&]da=(\d+)/.exec(QS); if(da) html.style.marginTop = "-" + da[1] + "px"; }
const IMG = "img/";
const DOC = null;   /* cartella dei documenti di progetto; null nella copia pubblica */
/* misure dei ritagli: riservano lo spazio prima che l'immagine arrivi */
const DIM = {"glossario-owner.jpg":[1054,410],"reference.jpg":[716,678],"reference-schema.jpg":[716,504],"glossario-elenco.jpg":[1056,444],"catalogo-albero.jpg":[376,544],"lineage.jpg":[780,564],"glossario-termine.jpg":[1054,674],"profiling.jpg":[708,302],"tabelle-owner.jpg":[716,504],"tabella-vendite.jpg":[716,678],"gold-schema.jpg":[716,616],"casi.jpg":[716,678]};
const F = TESTI.fermate, I = TESTI.interfaccia, ROLES = ["cdm","bdo","dto","dgl"];
const $ = id => document.getElementById(id);
const calm = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const rem = () => parseFloat(getComputedStyle(html).fontSize);
document.title = TESTI.pagina.titolo;

/* ---------- pezzi che tornano ---------- */
const bx = (inner, cls = "", i = 0) => `<div class="bx a ${cls}" style="--i:${i}">${FR}${inner}</div>`;
const tagc = (path, rot = 0) => `<span class="tagc" style="rotate:${rot}deg">${FR}${t("span", path)}</span>`;
const stamp = path => `<span class="stamp">${FR}${t("span", path)}</span>`;
const crumb = k => `<div class="crumb a" style="--i:0">${t("span", "interfaccia.ridisegno", "rd hand")}${TESTI.tavole[k].percorso.map((_, i) => (i ? SEP : "") + t("span", `tavole.${k}.percorso.${i}`)).join("")}<svg class="mk stretch ul" viewBox="0 0 1000 20" preserveAspectRatio="none" aria-hidden="true"><path d="M0 10 C250 7 520 13 760 9 C860 8 940 12 1000 10"/></svg></div>`;
const img = (a, lazy) => `<img src="${IMG + a.immagine}" alt="${esc(a.alt)}" width="${DIM[a.immagine][0]}" height="${DIM[a.immagine][1]}"${lazy ? ` loading="lazy"` : ""}>${a.evidenzia ? hilite(a.evidenzia) : ""}`;

/* i sette domini come sette binari, in piccolo: usati nella tavola della fermata 2 */
function lines7(){
  const pos = [10, 33, 56, 79], P = TESTI.percorso;
  return `<div class="l7"><div class="hd4"><span></span><div>${pos.map((x, i) => `<span style="left:${x}%">${i + 1}</span>`).join("")}</div></div>` + P.domini.map((d, k) => {
    const reach = d.gradino, part = !!d.in_corso; let tr = "";
    for(let s = 0; s < 3; s++){
      const st = `left:${pos[s]}%;width:23%`;
      if(s + 1 < reach) tr += seg(part ? "red" : "", st, part ? 5 : 3.5);
      else if(part && s + 1 === reach) tr += seg("red march", st, 4, "10 12");
      else tr += seg("", st + ";opacity:.4", 2.5);
    }
    for(let s = 0; s < 4; s++) tr += node((s < reach ? "full " : "open ") + (part ? "red" : ""), `left:${pos[s]}%` + (s < reach || (part && s === reach) ? "" : ";opacity:.5"));
    return `<div class="rw${part ? " v" : ""}">${t("span", `percorso.domini.${k}.nome`, "nm")}<span class="trk">${tr}</span></div>`;
  }).join("") + `</div><p class="leg">${P.gradini_brevi.map((_, i) => `<b>${i + 1}</b> ${t("span", `percorso.gradini_brevi.${i}`)}`).join(", ")}</p>`;
}

/* ---------- le schermate della piattaforma ridisegnate, una per fermata ---------- */
const FIG = {
 1: () => { const p = "tavole.1", T = TESTI.tavole[1]; return `<div class="t1">
    ${bx(`${t("h3", p + ".t_priorita")}<ol class="six">${T.priorita.map((_, i) => `<li>${num(i + 1)}${t("span", `${p}.priorita.${i}`)}</li>`).join("")}</ol>`, "", 0)}
    ${bx(`${t("h3", p + ".t_indicatori")}<div class="d17">${Array.from({length: 17}, (_, i) => node([0, 1, 2, 6].includes(i) ? "red on" : "")).join("")}</div>${t("p", p + ".nota", "note")}<ul class="mn">${T.indicatori.map((_, i) => `<li>${DASH}${t("span", `${p}.indicatori.${i}`)}</li>`).join("")}</ul>`, "", 1)}
  </div>`; },
 2: () => { const p = "tavole.2", T = TESTI.tavole[2]; return `${crumb(2)}<div class="t2">
    ${bx(`${t("h3", p + ".t_domini")}${t("p", p + ".s_domini", "sb")}${lines7()}`, "", 1)}
    ${bx(`${t("h3", p + ".t_arrivi")}${t("p", p + ".s_arrivi", "sb")}<ul class="crates">${T.sistemi.map((_, i) => `<li><svg class="mk cr" viewBox="0 0 40 34" aria-hidden="true"><path d="M5 9 L35 8 L35 29 L5 30 Z"/><path class="red" stroke-width="4" d="M12 19 L28 19"/></svg><span>${t("b", `${p}.sistemi.${i}.0`)}${t("i", `${p}.sistemi.${i}.1`, "tech")}</span></li>`).join("")}</ul>${t("p", p + ".nota", "note", ` style="margin-top:.7rem"`)}`, "", 2)}
  </div>`; },
 3: () => { const p = "tavole.3", T = TESTI.tavole[3]; return `${crumb(3)}<div class="t3">
    ${bx(`${t("h3", p + ".titolo")}${t("p", p + ".tecnico", "tech")}${t("p", p + ".descrizione", "desc")}<div class="stamps">${T.etichette.map((_, i) => stamp(`${p}.etichette.${i}`)).join("")}</div>`, "", 1)}
    ${bx(`${t("h3", p + ".t_colonne")}<ul class="colz">${T.colonne.map((_, i) => `<li><span>${t("b", `${p}.colonne.${i}.0`)}${t("span", `${p}.colonne.${i}.1`, "tech")}</span>${t("span", `${p}.colonne.${i}.2`, "mean")}</li>`).join("")}</ul>`, "", 2)}
    <div class="notes a" style="--i:3">${T.note.map((_, i) => t("p", `${p}.note.${i}`, "note")).join("")}</div>
  </div>`; },
 4: () => { const p = "tavole.4", T = TESTI.tavole[4]; return `${crumb(4)}<div class="t4">
    <ul class="codes a" style="--i:0">${T.codici.map((_, i) => `<li>${FR}${t("b", `${p}.codici.${i}.0`)}${t("span", `${p}.codici.${i}.1`)}</li>`).join("")}</ul>
    <div class="flowar a" style="--i:1">${AR()}</div>
    <ul class="bins a" style="--i:2">${T.categorie.map((_, i) => `<li>${FR}${t("span", `${p}.categorie.${i}`)}</li>`).join("")}</ul>
    <div class="t4f a" style="--i:3">${t("span", p + ".sotto_codici", "sb")}${AR()}${t("span", p + ".sotto_categorie", "sb")}</div>
    <div class="t4f a" style="--i:4">${t("span", p + ".nota", "note")}<span style="display:flex;gap:.7rem;flex:none">${stamp(p + ".timbri.0")}${stamp(p + ".timbri.1")}</span></div>
    <svg class="mk red conn a" style="--i:2" aria-hidden="true"></svg>
  </div>`; },
 5: () => { const p = "tavole.5", T = TESTI.tavole[5]; return `${crumb(5)}<div class="t5">
    <div class="srcs">${T.origini.map((_, i) => bx(`${t("b", `${p}.origini.${i}.0`)}${t("span", `${p}.origini.${i}.1`, "tech")}`, "", i)).join("")}</div>
    <div class="pk a" style="--i:4">${AR()}<i>${node("full red")}</i></div>
    ${bx(`${t("h3", p + ".t_gold")}${t("p", p + ".s_gold", "sb")}<div class="meas">${[-2, 1.5, -1].map((r, i) => tagc(`${p}.misure.${i}`, r)).join("")}</div>`, "gold", 5)}
    <div class="pk a" style="--i:6">${AR()}<i>${node("full red")}</i></div>
    ${bx(`${t("b", p + ".t_report")}${t("p", p + ".nota_report", "note")}`, "dsh rep", 7)}
    <div class="strata a" style="--i:8">${t("p", p + ".nota_livelli", "note")}${T.livelli.map((_, i) => `<div>${t("b", `${p}.livelli.${i}.0`)}${t("span", `${p}.livelli.${i}.1`)}</div>`).join(AR())}</div>
  </div>`; },
 6: () => { const p = "tavole.6", T = TESTI.tavole[6]; return `${crumb(6)}<div class="t6">
    ${bx(`${t("h3", p + ".t_termini")}${t("p", p + ".s_termini", "sb")}<div class="terms">${T.termini.map((_, i) => i === T.cerchiato ? `<span class="on circled">${t("span", `${p}.termini.${i}`)}<svg class="mk red stretch" viewBox="0 0 300 100" preserveAspectRatio="none" aria-hidden="true"><path d="M14 56 C6 24 68 7 150 8 C232 9 297 26 290 55 C284 84 214 96 140 93 C68 90 12 80 13 50 C14 34 34 22 58 16"/></svg></span>` : t("span", `${p}.termini.${i}`)).join("")}</div>`, "", 0)}
    <div>
    ${bx(`${t("h3", p + ".t_voce")}${t("p", p + ".definizione", "defn")}<dl class="kv">${T.campi.map((_, i) => `${t("dt", `${p}.campi.${i}.0`)}${t("dd", `${p}.campi.${i}.1`)}`).join("")}</dl>`, "", 1)}
    ${t("p", p + ".nota", "note a", ` style="--i:2;margin-top:1rem"`)}
    </div>
  </div>`; },
 7: () => { const p = "tavole.7", T = TESTI.tavole[7]; return `${crumb(7)}<div class="t7">
    ${bx(`${t("h3", p + ".t_misura")}${t("p", p + ".s_misura", "sb")}<div class="days">${T.giorni.map((_, i) => `<div>${t("b", `${p}.giorni.${i}`)}<small>${T.mese}</small><span class="tks">${Array.from({length: 5}, (_, k) => TICK.replace("<svg ", `<svg style="animation-delay:${(i * 5 + k) * .18}s" `)).join("")}</span></div>`).join("")}</div>`, "", 0)}
    ${bx(`${t("h3", p + ".t_casi")}${t("p", p + ".s_casi", "sb")}<div class="states">${tagc(p + ".stati.0", -2)}${AR()}${tagc(p + ".stati.1", 1)}${AR()}${tagc(p + ".stati.2", -1)}<span class="brk"></span>${t("span", p + ".oppure", "sb")}${tagc(p + ".accettato", 2)}${t("span", p + ".dal", "sb")}</div>${t("p", p + ".nota", "note", ` style="margin-top:.8rem"`)}`, "", 1)}
    <div class="case a" style="--i:2">${T.esempio.map((_, i) => `<div class="bx">${FR}${t("b", `${p}.esempio.${i}.0`)}${t("span", `${p}.esempio.${i}.1`)}</div>`).join(AR())}</div>
  </div>`; },
 8: () => { const p = "tavole.8", T = TESTI.tavole[8]; return `${crumb(8)}<div class="t8">
    <ul class="trio a" style="--i:0">${T.funzioni.map(([k], i) => `<li>${PPL1}<span>${t("b", `funzioni.${k}.nome`)}${t("span", `${p}.funzioni.${i}.1`)}</span></li>`).join("")}</ul>
    ${bx(`<div class="mxw"><table class="mx"><caption class="vh">${TESTI.capitoli.chi.didascalia}</caption><thead><tr><th scope="col"><span class="vh">${I.funzione}</span></th>${F.map((_, i) => `<th scope="col">${num(i + 1)}</th>`).join("")}</tr></thead><tbody>${ROLES.map(k => `<tr><th scope="row">${t("span", `funzioni.${k}.nome`)}</th>${F.map(f => `<td>${f.funzioni.includes(k) ? TICK + `<span class="vh">${I.si}</span>` : ""}</td>`).join("")}</tr>`).join("")}</tbody></table></div>${t("p", p + ".nota", "note", ` style="margin-top:.5rem"`)}`, "", 1)}
  </div>`; }
};

/* ---------- testata ---------- */
function buildTop(){
  $("top").innerHTML = `<div class="in">
    <img class="logo" src="${IMG}tper-logo.png" alt="TPER, cambia il movimento" width="640" height="232">
    ${t("span", "pagina.sottotitolo", "ttl")}
    <ol class="dots" id="dots">${F.map((f, i) => `<li data-d="${i + 1}"><a href="#d${i + 1}" title="${i + 1}. ${esc(f.domanda)}">${node("red")}<span class="vh">${I.fermata} ${i + 1}: ${esc(f.domanda)}<span class="st"></span></span></a></li>`).join("")}</ol>
    ${t("a", "pagina.indice", "idx hand", ` href="#indice"`)}
  </div>`;
  $("foot").innerHTML = `<div class="wrap">${t("span", "pagina.piede.0")}${t("span", "pagina.piede.1")}</div>`;
}

/* ---------- apertura: la strada a tornanti che fa da indice ---------- */
const lot = id => { const p = `fermate.${id - 1}`; return `<li><a class="lot" href="#d${id}" data-q="${id}">
  ${dw(id)}
  <span class="lt"><span class="stage">${t("b", p + ".luogo")}${t("i", p + ".glossa")}</span>${t("span", p + ".breve", "qq")}</span>
  <span class="lane">${num(id)}<span class="done">${TICK}</span>${id === 1 ? `<span class="nx hand" aria-hidden="true">${ARD}${t("span", "apertura.inizio")}</span>` : ""}</span>
  <span class="vh st"></span></a></li>`; };
const strip = id => `<a class="strip" href="#d${id}" data-q="${id}">${FR}${id === 7 ? PPL7 : PPL8}${num(id)}${t("span", `fermate.${id - 1}.breve`, "qq")}<span class="done">${TICK}</span><span class="vh st"></span></a>`;
const chapHead = key => `<svg class="mk red cmark" viewBox="0 0 40 20" aria-hidden="true"><path stroke-width="5" d="M4 11 C14 7 26 13 36 9"/></svg><h2><span class="under">${t("span", `capitoli.${key}.titolo`)}${UNDER}</span></h2>${t("p", `capitoli.${key}.testo`, "intro")}`;

/* ---------- una fermata: il testo, il luogo, i fogli da aprire ---------- */
function sheet(id, j){
  const f = F[id - 1], a = f.approfondimenti[j], p = `fermate.${id - 1}.approfondimenti.${j}`, n = f.approfondimenti.length;
  const cls = (j === 0 ? "main" : n === 2 ? "solo" : "") + (a.immagine && DIM[a.immagine][1] > DIM[a.immagine][0] ? " tall" : "");
  const pic = a.tipo === "ridisegno" ? `<div class="mini" aria-hidden="true"><div class="figin" inert>${FIG[id]()}</div></div>`
    : a.tipo === "schermata" ? `<span class="pic">${img(a, true)}</span>`
    : `<span class="qt">${get(p + ".citazione")}</span>`;
  return `<figure class="sheet ${cls}" data-reveal>${j ? tape() : ""}<div class="shot">${FR}${pic}<button type="button" class="opn" data-open="${id}-${j + 1}" aria-label="${esc(I.apri)}: ${esc(a.titolo)}"></button></div><figcaption>${t("span", p + ".titolo", "ti")}<span class="zcue hand" aria-hidden="true">${LENS}${I.apri}</span></figcaption></figure>`;
}
function stop(id){
  const p = `fermate.${id - 1}`, f = F[id - 1];
  const roles = f.funzioni.map(r => t("span", `funzioni.${r}.nome`)).join(f.funzioni.length > 2 ? ", " : " e ");
  const docs = f.documenti.map(k => { const d = TESTI.documenti[k]; return `<li>${DOC && d.file ? `<a href="${DOC + encodeURI(d.file)}" target="_blank" rel="noopener" data-t="documenti.${k}.titolo">${d.titolo}</a>` : `${t("span", `documenti.${k}.titolo`)} ${t("span", "interfaccia.doc_progetto", "off")}`}</li>`; }).join("");
  return `<article class="stop" id="d${id}" data-stop="${id}" data-reveal>
    <div class="rail">${num(id)}</div>
    <div class="txt">
      ${t("h3", p + ".domanda")}${t("p", p + ".risposta", "ans")}
      <p class="who">${BOXR}${t("b", f.funzioni.length > 1 ? "funzioni.ne_rispondono" : "funzioni.ne_risponde")}<span>${roles}</span></p>
      <div class="exp">${f.spiegazione.map((_, i) => t("p", `${p}.spiegazione.${i}`)).join("")}</div>
      <ul class="docs">${t("li", "interfaccia.approfondire", "lbl")}${docs}</ul>
    </div>
    <div class="deep">
      <div class="site" aria-hidden="true">${site(id)}<span class="sl hand">${t("b", p + ".luogo")}: ${t("span", p + ".glossa")}</span></div>
      <p class="hand scrawl pop">${t("span", p + ".nota")}${ARDR}</p>
      <div class="sheets">${f.approfondimenti.map((_, j) => sheet(id, j)).join("")}</div>
      ${f.manca ? `<p class="hole hand">${FR}${t("span", p + ".manca")}</p>` : ""}
    </div>
  </article>`;
}

/* ---------- il percorso: sette linee ---------- */
function lines(){
  const P = TESTI.percorso, pos = [12.5, 37.5, 62.5, 87.5];
  return `<div class="lhead"><div></div>${P.gradini.map((_, i) => t("div", `percorso.gradini.${i}`)).join("")}</div>` + P.domini.map((d, k) => {
    const v = k === 0, part = !!d.in_corso; let tr = "";
    for(let s = 0; s < 3; s++){
      const st = `left:${pos[s]}%;width:25%`;
      if(s + 1 < d.gradino) tr += seg((v ? "red " : "") + "draw", st, v ? 5 : 3.5);
      else if(part && s + 1 === d.gradino) tr += seg("red draw march", st, 4.5, "14 16");
      else tr += seg("", st + ";opacity:.4", 2.5);
    }
    for(let s = 0; s < 4; s++){ const reached = s < d.gradino, next = part && s === d.gradino; tr += node((reached ? "full " : "open ") + (v ? "red" : ""), `left:${pos[s]}%` + (reached || next ? "" : ";opacity:.5")); }
    if(v) tr += `<span class="hand here pop">${ARDR}${t("span", "percorso.siamo_qui")}</span>${t("span", "percorso.in_corso", "hand todo pop")}`;
    const where = `${I.fermata.toLowerCase()} ${d.gradino} ${I.di} 4: ${P.gradini[d.gradino - 1].toLowerCase()}` + (part ? `; ${I.successiva}` : "");
    return `<div class="lrow${v ? " v" : ""}" data-reveal><div class="nm">${t("span", `percorso.domini.${k}.nome`)}<span class="mst">${where}</span></div><div class="trk">${tr}</div></div>`;
  }).join("") + `<div class="legend"><span>${seg("red", "", 5)}${t("span", "percorso.legenda.0")}</span><span>${seg("red", "", 4.5, "14 16")}${t("span", "percorso.legenda.1")}</span><span>${seg("", "opacity:.4", 2.5)}${t("span", "percorso.legenda.2")}</span></div>`;
}
const matrix = () => `<table class="matrix" data-reveal><caption class="vh">${TESTI.capitoli.chi.didascalia}</caption>
  <thead><tr><th scope="col"><span class="vh">${I.funzione}</span></th>${F.map((f, i) => `<th scope="col"><a href="#d${i + 1}" aria-label="${I.fermata} ${i + 1}: ${esc(f.domanda)}">${num(i + 1)}${t("span", `fermate.${i}.etichetta`, "t")}</a></th>`).join("")}</tr></thead>
  <tbody>${ROLES.map(k => `<tr><th scope="row">${t("span", `funzioni.${k}.nome`)}${t("small", `funzioni.${k}.compito`)}</th>${F.map(f => `<td>${f.funzioni.includes(k) ? `<span class="pop" style="display:inline-block">${TICK}</span><span class="vh">${I.si}</span>` : `<span class="no" aria-hidden="true"></span>`}</td>`).join("")}</tr>`).join("")}</tbody></table>`;

function buildMain(){
  const C = TESTI.capolinea;
  $("main").innerHTML = `
  <div class="spinebox" id="spinebox" aria-hidden="true"><svg id="spine" class="mk red stretch" viewBox="0 0 20 1000" preserveAspectRatio="none"><path stroke-width="4.5" d="M10 0 C6 120 14 260 9 400 C5 540 14 700 10 820 C8 900 11 960 10 1000"/></svg></div>
  <section class="hero" id="domanda" data-chap><div class="wrap">
    <h1>${t("span", "apertura.prima")} <span class="circled">${t("span", "apertura.cerchiata")}${CIRC}</span>${t("span", "apertura.dopo")}</h1>
    <div class="row">${t("p", "apertura.testo", "lead")}<a class="go" href="#d1">${FR}${t("span", "apertura.pulsante")}${ARDN}</a></div>
    <nav class="map" id="indice" aria-label="Indice illustrato: le otto fermate e il capolinea">
      <svg class="mk roadsvg" id="roadsvg" aria-hidden="true"></svg><i class="spx" id="spx"></i>
      <div class="mbus a" aria-hidden="true">${BUS()}</div><div class="mbus b" aria-hidden="true">${BUS()}</div>
      <ol class="tor">${[1, 2, 3, 4, 5, 6].map(lot).join("")}</ol>
      <div class="lungo">${t("p", "apertura.lungo", "lbl hand")}${strip(7)}${strip(8)}<a class="cap9" href="#capolinea">${dw(9)}<span class="stage">${t("b", "apertura.capolinea")}${t("i", "apertura.capolinea_glossa")}</span></a></div>
      <span class="down hand" aria-hidden="true">${ARD}${t("span", "apertura.scendi")}</span>
    </nav>
  </div></section>
  <section id="partenza" data-chap><div class="wrap chap">${chapHead("partenza")}</div><div class="wrap">${stop(1)}${stop(2)}</div></section>
  <section class="grey" id="percorso" data-chap><div class="wrap chap">${chapHead("percorso")}</div><div class="wrap"><div class="lines">${lines()}</div></div></section>
  <section id="flusso" data-chap><div class="wrap chap">${chapHead("flusso")}</div><div class="wrap">${[3, 4, 5, 6].map(stop).join("")}</div></section>
  <section id="lungo" data-chap><div class="wrap chap">${chapHead("lungo")}</div><div class="wrap">${stop(7)}${stop(8)}</div></section>
  <section class="grey" id="chi" data-chap><div class="wrap chap" style="padding-bottom:4.5rem">${chapHead("chi")}${matrix()}</div></section>
  <section class="end" id="capolinea" data-chap><div class="wrap">
    <h2>${t("span", "capolinea.prima")}<br>${t("span", "capolinea.riga")} <span class="circled">${t("span", "capolinea.cerchiata")}${CIRC}</span>.</h2>
    <div>
      <ul class="know">${C.sappiamo.map((_, i) => `<li>${TICK}${t("span", `capolinea.sappiamo.${i}`)}</li>`).join("")}</ul>
      ${t("p", "capolinea.testo.0", "lead")}${t("p", "capolinea.testo.1", "lead")}
      <a class="go up" href="#indice">${FR}${t("span", "capolinea.pulsante")}${ARDN}</a>
    </div>
    <div class="endr">
      <div class="mini7" aria-hidden="true">${[1, 2, 3, 4, 5, 6].map(k => `<span>${dw(k)}${TICK}</span>`).join("")}<span>${PPL7}${TICK}</span><span>${PPL8}${TICK}</span><span>${dw(9)}</span>${seg("red", "", 4)}</div>
      ${t("span", "capolinea.strada", "m7n hand")}
      <div class="busbox">${BUS()}<div class="palina" aria-hidden="true"><span class="num">${RING}<b>${TICK}</b></span>${t("span", "capolinea.palina", "hand lb")}<svg class="mk stretch pole" viewBox="0 0 20 200" preserveAspectRatio="none"><path d="M10 2 C7 60 13 130 10 198"/></svg></div></div>
    </div>
    <svg class="mk red stretch eroad" viewBox="0 0 1200 20" preserveAspectRatio="none" aria-hidden="true"><path stroke-width="4.5" d="M0 10 C220 15 430 4 650 11 C860 17 1010 6 1240 10"/></svg>
    <svg class="mk red bend" id="bend-b" viewBox="0 0 40 40" aria-hidden="true"><path stroke-width="5.3" d="M6 0 C5 22 16 34 40 34"/></svg>
  </div></section>`;
  document.querySelectorAll(".sheet img").forEach(im => im.addEventListener("error", () => { const s = im.closest(".sheet"); const m = document.createElement("p"); m.className = "missing"; m.textContent = I.mancante; s.replaceWith(m); }));
}

/* ---------- la strada dell'indice: due tornanti, poi la linea scende verso le fermate ---------- */
function road(){
  const map = $("indice"), s = $("roadsvg"), W = map.offsetWidth, H = map.offsetHeight; if(!W) return;
  const r = map.getBoundingClientRect(), u = rem(), xs = $("spx").offsetLeft;
  s.setAttribute("viewBox", `0 0 ${W} ${H}`);
  if(matchMedia("(max-width:980px)").matches){ s.innerHTML = `<path class="red line" d="M${xs} 0 V${H}"/>`; return; }
  const lanes = [...map.querySelectorAll(".tor .lane")], lots = [...map.querySelectorAll(".tor .lot")];
  const cy = l => { const b = l.getBoundingClientRect(); return b.top + b.height / 2 - r.top; };
  const yA = cy(lanes[0]), yB = cy(lanes[3]), rr = 2.2 * u, w = 1.05 * u, xR = W - 1.3 * u, x0 = xs - .2 * u;
  /* o = scostamento dal centro della strada: 0 la linea rossa, +w e -w i due bordi */
  const U = o => `M${x0} ${yA - o} H${xR - rr} A${rr + o} ${rr + o} 0 0 1 ${xR + o} ${yA + rr} V${yB - rr} A${rr + o} ${rr + o} 0 0 1 ${xR - rr} ${yB + o} H${xs + rr} A${rr - o} ${rr - o} 0 0 0 ${xs + o} ${yB + rr}`;
  const gap = i => { const a = lots[i].getBoundingClientRect(); return a.right - r.left + .6 * u; };
  const chev = (x, y, d) => `<path class="red chev" d="M${x - 6 * d} ${y - 8} L${x + 4 * d} ${y} L${x - 6 * d} ${y + 8}"/>`;
  s.innerHTML = `<path class="edge" d="${U(w)} v${1.3 * u}"/><path class="edge" d="${U(-w)} v${1.3 * u}"/><path class="red line" d="${U(0)} V${H}"/>${chev(gap(0), yA, 1)}${chev(gap(1), yA, 1)}${chev(gap(4), yB, -1)}${chev(gap(5), yB, -1)}`;
  map.style.setProperty("--ya", yA + "px"); map.style.setProperty("--yb", yB + "px");
}
/* le miniature dei ridisegni: la tavola intera, rimpicciolita quanto il foglio */
function fit(root = document){
  root.querySelectorAll(".mini").forEach(m => { const f = m.firstElementChild, k = m.clientWidth / f.offsetWidth; m.style.setProperty("--k", k); m.style.height = (f.offsetHeight * k) + "px"; });
  connect(root);
}
/* tavola della fermata 4: un tratto da ogni codice alla sua categoria */
function connect(root = document){
  const MAP = TESTI.tavole[4].abbinamenti;
  root.querySelectorAll(".t4").forEach(box => {
    const s = box.querySelector("svg.conn"), r = box.getBoundingClientRect(); if(!s || !r.width) return;
    const k = r.width / box.offsetWidth || 1;
    const cs = [...box.querySelectorAll(".codes li")], bs = [...box.querySelectorAll(".bins li")];
    s.setAttribute("viewBox", `0 0 ${box.offsetWidth} ${box.offsetHeight}`);
    s.innerHTML = cs.map((c, i) => {
      const a = c.getBoundingClientRect(), b = bs[MAP[i]].getBoundingClientRect();
      const x1 = (a.right - r.left) / k + 4, y1 = (a.top + a.height / 2 - r.top) / k, x2 = (b.left - r.left) / k - 5, y2 = (b.top + b.height / 2 - r.top) / k + (i % 2 ? 4 : -4), m = (x1 + x2) / 2;
      return `<path d="M${x1} ${y1} C${m} ${y1} ${m} ${y2} ${x2} ${y2}"/>`;
    }).join("");
  });
}

/* ---------- le fermate viste: la spunta sull'indice e i punti in alto ---------- */
let seen = new Set();
try { seen = new Set(JSON.parse(sessionStorage.getItem("tper-unita-viste") || "[]")); } catch(e){}
{ const qv = QS.match(/[?&]viste=([\d,]+)/); if(qv) seen = new Set(qv[1].split(",").map(Number)); }
function mark(){
  document.querySelectorAll("[data-q]").forEach(b => { const on = seen.has(+b.dataset.q); b.classList.toggle("seen", on); const s = b.querySelector(".st"); if(s) s.textContent = on ? ", " + I.vista : ""; });
  document.querySelectorAll("#dots li").forEach(li => { const on = seen.has(+li.dataset.d); li.classList.toggle("on", on); li.querySelector(".st").textContent = ", " + (on ? I.vista : I.da_vedere); });
  $("indice").classList.toggle("started", seen.size > 0);
}
function see(id){ if(seen.has(id)) return; seen.add(id); try { sessionStorage.setItem("tper-unita-viste", JSON.stringify([...seen])); } catch(e){} mark(); }

/* ---------- l'approfondimento a tutta pagina ---------- */
const ALL = []; F.forEach((f, i) => f.approfondimenti.forEach((_, j) => ALL.push([i + 1, j + 1])));
let cur = null, opener = null, pushed = false, pendingFrom = null, after = null;
function render(id, j){
  const f = F[id - 1], a = f.approfondimenti[j - 1], p = `fermate.${id - 1}.approfondimenti.${j - 1}`;
  const k = ALL.findIndex(x => x[0] === id && x[1] === j), prev = ALL[k - 1], next = ALL[k + 1];
  const fig = a.tipo === "ridisegno" ? `<div class="fig">${FR}<span class="cap hand">${t("span", `fermate.${id - 1}.luogo`)}, ${t("span", `fermate.${id - 1}.glossa`)}</span>${FIG[id]()}</div>`
    : a.tipo === "schermata" ? `<figure class="fig real">${FR}${t("span", "interfaccia.vera", "cap hand")}<span class="pic a" style="--i:0">${img(a)}</span></figure>`
    : `<div class="fig say">${FR}${t("span", "interfaccia.citazione", "cap hand")}<blockquote class="a" style="--i:0;margin:0">${t("p", p + ".citazione", "quote")}${t("small", p + ".fonte")}</blockquote></div>`;
  $("plate").innerHTML = `<div class="pl">
    <div class="pl-bar">
      <button class="nb bk" type="button" ${prev ? `data-go="${prev[0]}-${prev[1]}"` : "disabled"}>${FR}${ARB}${t("span", "interfaccia.indietro")}</button>
      ${next ? `<button class="nb fw" type="button" data-go="${next[0]}-${next[1]}">${FR}${t("span", "interfaccia.avanti")}${AR()}</button>` : `<button class="nb fw" type="button" data-end>${FR}${t("span", "interfaccia.al_capolinea")}${AR()}</button>`}
      <button class="x" id="pl-close" type="button">${t("span", "interfaccia.chiudi")}${CROSS}</button>
    </div>
    <aside class="pl-txt">
      <div class="pl-top">${num(id, "big")}${site(id)}</div>
      ${t("h2", p + ".titolo", "", ` id="pl-q" tabindex="-1"`)}
      <div class="ptxt">${a.testo.map((_, i) => t("p", `${p}.testo.${i}`)).join("")}</div>
      <p class="from hand">${t("b", "interfaccia.parte_di")} ${id}: ${t("span", `fermate.${id - 1}.domanda`)}</p>
      ${f.approfondimenti.length > 1 ? `<ol class="sib" aria-label="${esc(I.in_questa)}">${f.approfondimenti.map((s, i) => `<li><button type="button" data-go="${id}-${i + 1}"${i === j - 1 ? ` aria-current="true"` : ""}>${FR}${node("")}<span>${s.titolo}</span></button></li>`).join("")}</ol>` : ""}
    </aside>
    ${fig}
  </div>`;
}
function open(id, j, from){
  const p = $("plate"), was = cur !== null;
  if(from){ const r = from.getBoundingClientRect(); p.style.setProperty("--ox", (r.left + r.width / 2) + "px"); p.style.setProperty("--oy", (r.top + r.height / 2) + "px"); opener = from; }
  if(!was && !from){ const st = $("d" + id); if(st) st.scrollIntoView({behavior: "instant", block: "start"}); }
  cur = [id, j]; render(id, j);
  p.scrollTop = 0; p.inert = false; p.classList.add("open");
  html.style.overflow = "hidden";
  ["top", "main", "foot"].forEach(x => $(x).inert = true);
  requestAnimationFrame(() => connect(p)); setTimeout(() => connect(p), 1500);
  see(id);
  setTimeout(() => { const h = $("pl-q"); if(h && !EDIT) h.focus({preventScroll: true}); }, was ? 0 : 120);
}
function close(){
  if(cur === null) return;
  const p = $("plate"), id = cur[0], j = cur[1]; cur = null;
  p.classList.remove("open"); p.inert = true;
  html.style.overflow = "";
  ["top", "main", "foot"].forEach(x => $(x).inert = false);
  const back = document.querySelector(`[data-open="${id}-${j}"]`) || opener;
  const tgt = after ? $(after) : (back && back.closest(".stop") !== (opener && opener.closest(".stop")) ? $("d" + id) : null);
  if(tgt) tgt.scrollIntoView({behavior: "instant", block: "start"});
  if(back && !after) back.focus({preventScroll: true});
  after = null; opener = null;
}
/* l'indirizzo è la sola fonte di verità: il tasto Indietro richiude l'approfondimento */
const parse = () => { const m = location.hash.match(/^#a([1-9])-(\d)$/); if(!m) return null; const f = F[+m[1] - 1]; return f && f.approfondimenti[+m[2] - 1] ? [+m[1], +m[2]] : null; };
function apply(){ const a = parse(); if(a) open(a[0], a[1], pendingFrom); else close(); pendingFrom = null; }
function go(a, from, replace){
  if(a){
    const h = `#a${a[0]}-${a[1]}`; pendingFrom = from || null;
    if(replace){ history.replaceState(null, "", h); apply(); }
    else if(location.hash === h) apply();
    else { pushed = true; location.hash = h; }
  } else if(cur){
    if(pushed){ pushed = false; history.back(); }
    else { history.replaceState(null, "", location.pathname + location.search + "#" + (after || "d" + cur[0])); apply(); }
  }
}
addEventListener("hashchange", apply);
if("scrollRestoration" in history) history.scrollRestoration = "manual";

document.addEventListener("click", e => {
  if(EDIT && e.target.closest("[data-t]")){ e.preventDefault(); return; }
  const o = e.target.closest("[data-open]"); if(o){ go(o.dataset.open.split("-").map(Number), o); return; }
  if(e.target.closest("#pl-close")){ go(null); return; }
  if(e.target.closest("[data-end]")){ after = "capolinea"; go(null); return; }
  const g = e.target.closest("[data-go]"); if(g){ go(g.dataset.go.split("-").map(Number), null, true); return; }
});
document.addEventListener("keydown", e => {
  if(e.metaKey || e.ctrlKey || e.altKey || cur === null) return;
  if(EDIT && e.target.closest && e.target.closest("[data-t]")) return;
  const k = ALL.findIndex(x => x[0] === cur[0] && x[1] === cur[1]);
  if(e.key === "Escape") go(null);
  else if((e.key === "ArrowRight" || e.key === "PageDown") && ALL[k + 1]){ go(ALL[k + 1], null, true); e.preventDefault(); }
  else if((e.key === "ArrowLeft" || e.key === "PageUp") && ALL[k - 1]){ go(ALL[k - 1], null, true); e.preventDefault(); }
});

/* ---------- il segno si traccia, la linea si allunga, la fermata si spunta ---------- */
function watch(){
  const motion = !calm() && !STILL && "IntersectionObserver" in window;
  if(motion){
    const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.remove("wait"); io.unobserve(e.target); } }), {rootMargin: "0px 0px -12% 0px"});
    document.querySelectorAll("[data-reveal], .chap, .end .wrap").forEach(it => { if(it.getBoundingClientRect().top > innerHeight * .9){ it.classList.add("wait"); io.observe(it); } });
  }
  const stops = [...document.querySelectorAll(".stop")];
  if("IntersectionObserver" in window && !STILL){
    const so = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting) see(+e.target.dataset.stop); }), {rootMargin: "-45% 0px -45% 0px"});
    stops.forEach(s => so.observe(s));
  }
  const box = $("spinebox"), sp = $("spine"), main = $("main");
  let drawn = 0, lenTot = 0, topAbs = 0;
  const place = () => {
    road(); fit();
    const mt = main.getBoundingClientRect().top;
    const a = $("indice").getBoundingClientRect().bottom - mt, b = $("bend-b").getBoundingClientRect().top - mt;
    lenTot = Math.max(0, b - a + 2); topAbs = a + mt + scrollY;
    box.style.top = (a - 1) + "px"; sp.style.height = lenTot + "px";
  };
  const grow = () => {
    const atEnd = scrollY + innerHeight >= html.scrollHeight - 8;   /* in fondo alla pagina la linea è sempre completa */
    drawn = (!motion || atEnd) ? lenTot : Math.min(lenTot, Math.max(drawn, scrollY + innerHeight * .72 - topAbs));
    box.style.height = Math.max(0, drawn) + "px";
  };
  place(); grow();
  addEventListener("load", () => { place(); grow(); });
  if("ResizeObserver" in window) new ResizeObserver(() => { place(); grow(); }).observe(main);
  if(document.fonts) document.fonts.ready.then(() => { place(); grow(); });
  const dots = [...document.querySelectorAll("#dots li")];
  let tick = false;
  const upd = () => {
    tick = false; grow();
    let c = 0; stops.forEach(s => { if(s.getBoundingClientRect().top < innerHeight * .5) c = +s.dataset.stop; });
    if($("capolinea").getBoundingClientRect().top < innerHeight * .5 || $("chi").getBoundingClientRect().top < innerHeight * .5) c = 0;
    dots.forEach(li => { const on = +li.dataset.d === c; li.classList.toggle("cur", on); const a = li.firstElementChild; if(on) a.setAttribute("aria-current", "true"); else a.removeAttribute("aria-current"); });
  };
  addEventListener("scroll", () => { if(!tick){ tick = true; requestAnimationFrame(upd); } }, {passive: true});
  addEventListener("resize", () => { place(); upd(); });
  upd();
}

/* ---------- ?modifica: i testi si correggono sulla pagina, poi si scarica testi.js ---------- */
const HEAD = `/* TESTI DELLA PRESENTAZIONE
   Tutte le parole che compaiono sulla pagina stanno in questo file.
   Per correggere un testo si cambia quello che sta fra le virgolette, a destra dei due punti.
   I nomi a sinistra dei due punti non si toccano: servono alla pagina per trovare il testo.
   Non togliere virgolette, virgole e parentesi. Dentro un testo, al posto delle virgolette dritte, usare « ».
   <b>parola</b> evidenzia una parola.
   Il modo più comodo: aprire la pagina aggiungendo ?modifica in fondo all'indirizzo, correggere i testi
   direttamente sulla pagina e scaricare questo file già aggiornato. */
`;
function editMode(){
  html.classList.add("edit");
  const changed = new Set();
  const put = (path, val) => { const ks = path.split("."); let o = TESTI; for(let i = 0; i < ks.length - 1; i++) o = o[ks[i]]; o[ks[ks.length - 1]] = val; };
  const clean = e => e.innerHTML.replace(/<br\s*\/?>/gi, " ").replace(/<(?!\/?b>)[^>]*>/gi, "").replace(/&nbsp;/g, " ").replace(/\s+/g, " ").trim();
  const arm = root => root.querySelectorAll("[data-t]").forEach(e => { if(e.closest(".mini") || e instanceof SVGElement) return; e.contentEditable = "true"; e.spellcheck = true; });
  const bar = document.createElement("div"); bar.className = "editbar";
  bar.innerHTML = `<span><b>Revisione dei testi.</b> Clicca un testo tratteggiato e correggilo; le scritte rosse dentro i disegni si cambiano con un clic. Alla fine scarica il file e mettilo al posto di <b>testi.js</b> nella cartella della pagina.</span><span id="ed-n" style="margin-right:0">nessuna modifica</span><button type="button" id="ed-dl">Scarica testi.js</button>`;
  document.body.appendChild(bar);
  const count = () => { $("ed-n").textContent = changed.size === 1 ? "1 testo modificato" : changed.size + " testi modificati"; };
  const record = (x, val) => { put(x.dataset.t, val); changed.add(x.dataset.t); x.classList.add("chg"); count(); document.querySelectorAll(`[data-t="${x.dataset.t}"]`).forEach(o => { if(o !== x) o.innerHTML = val; }); };
  arm(document);
  new MutationObserver(() => arm($("plate"))).observe($("plate"), {childList: true});
  document.addEventListener("input", e => { const x = e.target.closest && e.target.closest("[data-t]"); if(x) record(x, clean(x)); });
  document.addEventListener("keydown", e => { const x = e.target.closest && e.target.closest("[data-t]"); if(x && e.key === "Enter"){ e.preventDefault(); x.blur(); } }, true);
  document.addEventListener("keyup", e => { if(e.key === " " && e.target.closest && e.target.closest("[data-t]")) e.preventDefault(); }, true);
  document.addEventListener("click", e => { const x = e.target.closest && e.target.closest("svg text[data-t]"); if(!x) return; const v = prompt("Scritta nel disegno:", x.textContent); if(v !== null && v.trim()){ x.textContent = v.trim(); record(x, esc(v.trim())); } }, true);
  $("ed-dl").addEventListener("click", () => {
    const blob = new Blob([HEAD + "const TESTI = " + JSON.stringify(TESTI, null, 2) + ";\n"], {type: "text/javascript;charset=utf-8"});
    const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = "testi.js"; document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 2000); changed.clear(); $("ed-n").textContent = "file scaricato";
  });
  addEventListener("beforeunload", e => { if(changed.size){ e.preventDefault(); e.returnValue = ""; } });
}

buildTop(); buildMain(); mark(); watch();
{ const qa = QS.match(/[?&]a=([1-9])-(\d)/); if(qa && !location.hash) history.replaceState(null, "", location.pathname + QS + `#a${qa[1]}-${qa[2]}`); }
apply();
if(EDIT) editMode();
