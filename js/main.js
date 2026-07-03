/* ============================================================
   RIVIERA METAIS — LÓGICA DO SITE
   Não é preciso editar este arquivo para mudar textos.
   Textos ficam em js/content.js
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Injeta textos simples via data-c="caminho.no.content" ---------- */
  function get(path) {
    return path.split(".").reduce(function (obj, key) {
      return obj ? obj[key] : undefined;
    }, CONTENT);
  }

  document.querySelectorAll("[data-c]").forEach(function (el) {
    var value = get(el.getAttribute("data-c"));
    if (value !== undefined) el.textContent = value;
  });

  /* ---------- Título da aba ---------- */
  document.title = CONTENT.empresa.nome + " — Ouro e Prata com Procedência";

  /* ---------- Nossos metais ---------- */
  var metaisGrid = document.getElementById("metaisGrid");
  CONTENT.metais.itens.forEach(function (m, i) {
    var div = document.createElement("div");
    div.className = "metal-card reveal" + (i === 0 ? " metal-card-ouro" : " metal-card-prata");
    div.style.setProperty("--d", 0.12 * i + "s");
    var selo = document.createElement("span");
    selo.className = "metal-selo";
    selo.textContent = m.selo;
    var h3 = document.createElement("h3");
    h3.textContent = m.nome;
    var ul = document.createElement("ul");
    m.caracteristicas.forEach(function (c) {
      var li = document.createElement("li");
      li.textContent = c;
      ul.appendChild(li);
    });
    div.append(selo, h3, ul);
    metaisGrid.appendChild(div);
  });

  /* ---------- Menu ---------- */
  var navLinks = document.getElementById("navLinks");
  CONTENT.menu.forEach(function (item) {
    var a = document.createElement("a");
    a.href = item.link;
    a.textContent = item.texto;
    navLinks.appendChild(a);
  });

  /* ---------- Parágrafos "O metal" ---------- */
  var metalWrap = document.getElementById("metalParagrafos");
  CONTENT.metal.paragrafos.forEach(function (texto, i) {
    var p = document.createElement("p");
    p.className = "reveal";
    p.style.setProperty("--d", 0.1 * (i + 1) + "s");
    p.textContent = texto;
    metalWrap.appendChild(p);
  });

  /* ---------- Destaques numéricos (com contador animado) ---------- */
  var statsWrap = document.getElementById("metalDestaques");
  CONTENT.metal.destaques.forEach(function (d, i) {
    var div = document.createElement("div");
    div.className = "stat reveal";
    div.style.setProperty("--d", 0.12 * (i + 1) + "s");
    div.innerHTML =
      '<span class="stat-num" data-target="' + d.numero + '">0</span>' +
      '<span class="stat-suf">' + d.sufixo + "</span>" +
      '<span class="stat-leg">' + d.legenda + "</span>";
    statsWrap.appendChild(div);
  });

  /* ---------- Cards de pureza ---------- */
  var cardsWrap = document.getElementById("purezaCards");
  CONTENT.pureza.cartoes.forEach(function (c, i) {
    var div = document.createElement("div");
    div.className = "card reveal";
    div.style.setProperty("--d", 0.1 * i + "s");
    var idx = document.createElement("span");
    idx.className = "card-index";
    idx.textContent = "0" + (i + 1);
    var h3 = document.createElement("h3");
    h3.textContent = c.titulo;
    var p = document.createElement("p");
    p.textContent = c.texto;
    div.append(idx, h3, p);
    cardsWrap.appendChild(div);
  });

  /* ---------- Onde entregamos ---------- */
  var entregaGrid = document.getElementById("entregaGrid");
  CONTENT.entrega.colunas.forEach(function (c, i) {
    var div = document.createElement("div");
    div.className = "entrega-card reveal";
    div.style.setProperty("--d", 0.12 * i + "s");
    var h3 = document.createElement("h3");
    h3.textContent = c.titulo + " ";
    var em = document.createElement("em");
    em.textContent = c.destaque;
    h3.appendChild(em);
    var p = document.createElement("p");
    p.textContent = c.texto;
    div.append(h3, p);
    entregaGrid.appendChild(div);
  });

  /* ---------- Setores ---------- */
  var setoresGrid = document.getElementById("setoresGrid");
  CONTENT.setores.itens.forEach(function (s, i) {
    var div = document.createElement("div");
    div.className = "setor reveal";
    div.style.setProperty("--d", 0.08 * i + "s");
    var h3 = document.createElement("h3");
    h3.textContent = s.nome;
    var p = document.createElement("p");
    p.textContent = s.texto;
    div.append(h3, p);
    setoresGrid.appendChild(div);
  });

  /* ---------- Passos (função reutilizável) ---------- */
  function renderPassos(lista, wrap) {
    lista.forEach(function (p, i) {
      var li = document.createElement("li");
      li.className = "passo reveal";
      li.style.setProperty("--d", 0.12 * i + "s");
      var h3 = document.createElement("h3");
      h3.textContent = p.titulo;
      var par = document.createElement("p");
      par.textContent = p.texto;
      li.append(h3, par);
      wrap.appendChild(li);
    });
  }
  renderPassos(CONTENT.processo.passos, document.getElementById("processoPassos"));
  renderPassos(CONTENT.vender.passos, document.getElementById("venderPassos"));

  /* ---------- Vender: blocos de informação ---------- */
  var venderInfos = document.getElementById("venderInfos");
  CONTENT.vender.infos.forEach(function (info, i) {
    var div = document.createElement("div");
    div.className = "vender-info reveal";
    div.style.setProperty("--d", 0.1 * i + "s");
    var h3 = document.createElement("h3");
    h3.textContent = info.titulo;
    var p = document.createElement("p");
    p.textContent = info.texto;
    div.append(h3, p);
    venderInfos.appendChild(div);
  });

  /* ---------- Vender: tabela de simulação ---------- */
  var simTabela = document.getElementById("simulacaoTabela");
  CONTENT.vender.simulacao.linhas.forEach(function (l) {
    var tr = document.createElement("tr");
    [l.quilate, l.teor, l.puro, l.calculo, l.percentual, l.liquido].forEach(function (valor, idx) {
      var td = document.createElement("td");
      td.textContent = valor;
      if (idx === 0) td.className = "sim-quilate";
      if (idx === 5) td.className = "sim-liquido";
      tr.appendChild(td);
    });
    simTabela.appendChild(tr);
  });
  var simAvisos = document.getElementById("simulacaoAvisos");
  CONTENT.vender.simulacao.avisos.forEach(function (aviso) {
    var p = document.createElement("p");
    p.textContent = "* " + aviso;
    simAvisos.appendChild(p);
  });

  /* ---------- WhatsApp (todos os botões) ---------- */
  var whatsHref =
    "https://wa.me/" +
    CONTENT.empresa.whatsappLink +
    "?text=" +
    encodeURIComponent("Olá! Gostaria de uma cotação de ouro/prata.");
  document.querySelectorAll("#whatsBtn, .js-whats").forEach(function (el) {
    el.href = whatsHref;
  });

  /* ---------- Ano do rodapé ---------- */
  document.getElementById("ano").textContent = new Date().getFullYear();

  /* ---------- Nav: fundo ao rolar + barra de progresso ---------- */
  var nav = document.getElementById("nav");
  var progress = document.querySelector(".scroll-progress");
  function onScroll() {
    nav.classList.toggle("scrolled", window.scrollY > 40);
    var h = document.documentElement;
    var pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    progress.style.width = pct + "%";
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Menu mobile ---------- */
  var burger = document.getElementById("navBurger");
  burger.addEventListener("click", function () {
    var open = navLinks.classList.toggle("open");
    burger.setAttribute("aria-expanded", open);
  });
  navLinks.addEventListener("click", function (e) {
    if (e.target.tagName === "A") navLinks.classList.remove("open");
  });

  /* ---------- Contador animado dos números ---------- */
  function animateNumber(el) {
    var raw = el.getAttribute("data-target"); // ex: "99,9" ou "1000"
    var target = parseFloat(raw.replace(",", "."));
    var decimals = raw.includes(",") ? raw.split(",")[1].length : 0;
    var duration = 1600;
    var start = null;
    function step(ts) {
      if (!start) start = ts;
      var t = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - t, 4);
      var current = target * eased;
      el.textContent = current
        .toFixed(decimals)
        .replace(".", ",");
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- Reveals no scroll ---------- */
  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        var num = entry.target.querySelector(".stat-num[data-target]");
        if (num && !num.dataset.done) {
          num.dataset.done = "1";
          animateNumber(num);
        }
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach(function (el) {
    observer.observe(el);
  });
})();
