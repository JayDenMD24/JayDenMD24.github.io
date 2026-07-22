const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const projects = [
  // Externos
  {
    category: "external", id: "mdw", title: "Montería Design Week", wip: false,
    repo: "https://github.com/AuvirLab/MonteriaDesignWeek",
    site: "https://www.monteriadesignweek.com",
    siteIcon: "assets/icons/monteriadesignweek.png",
    desc: "Sitio web del evento de diseño y creatividad que impulsa el talento joven de Montería.",
    stack: [
      { name: "HTML", icon: `${CDN}/html5/html5-original.svg` },
      { name: "CSS", icon: `${CDN}/css3/css3-original.svg` },
      { name: "JavaScript", icon: "assets/icons/javascript.png" },
    ],
    imgs: ["mdw1.png", "mdw2.png", "mdw3.png"],
  },
  // Académicos
  {
    category: "academic", id: "house", title: "HouseCrab", wip: true,
    repo: "https://github.com/JayDenMD24/HouseCrab",
    desc: "App para registro y búsqueda de pensiones estudiantiles en Montería, Córdoba.",
    stack: [
      { name: "React Native", icon: `${CDN}/react/react-original.svg` },
      { name: "Node.js", icon: `${CDN}/nodejs/nodejs-original.svg` },
      { name: "PostgreSQL", icon: `${CDN}/postgresql/postgresql-original.svg` },
    ],
    imgs: ["house1.png", "house2.png", "house3.png", "house4.jpeg"],
  },
  {
    category: "academic", id: "alpr", title: "ALPR Colombia", wip: false,
    repo: "https://github.com/JayDenMD24/ALPR-Colombia",
    desc: "Sistema de reconocimiento de placas colombianas que automatiza la consulta de registros en el SIMIT.",
    stack: [
      { name: "Python", icon: `${CDN}/python/python-original.svg` },
      { name: "Roboflow", icon: "assets/icons/roboflow.png" },
      { name: "Google Colab", icon: "assets/icons/colab.png" },
    ],
    imgs: ["alpr1.png", "alpr2.png"],
  },
  {
    category: "academic", id: "fire", title: "Sistema de Detección de Incendios", wip: false, repo: null,
    desc: "Sistema embebido de monitoreo que detecta incendios y envía alertas en tiempo real.",
    stack: [
      { name: "Arduino", icon: `${CDN}/arduino/arduino-original.svg` },
      { name: "ESP32", icon: "assets/icons/esp32.png" },
      { name: "Firebase", icon: `${CDN}/firebase/firebase-plain.svg` },
    ],
    imgs: ["fire1.png", "fire2.png", "fire3.png"],
  },
  {
    category: "academic", id: "bib", title: "Biblioteca B12", wip: false, repo: null,
    desc: "App web para registro y administración de libros con operaciones CRUD.",
    stack: [
      { name: "HTML", icon: `${CDN}/html5/html5-original.svg` },
      { name: "CSS", icon: `${CDN}/css3/css3-original.svg` },
      { name: "PHP", icon: `${CDN}/php/php-original.svg` },
      { name: "SQL Server", icon: `${CDN}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
    ],
    imgs: ["bib1.png", "bib2.png", "bib3.png", "bib4.png", "bib5.png"],
  },
  {
    category: "academic", id: "pomo", title: "POMOFOCUS", wip: false, repo: null,
    desc: "App de escritorio para gestión del tiempo basada en la técnica Pomodoro.",
    stack: [
      { name: "Java", icon: `${CDN}/java/java-original.svg` },
      { name: "MySQL", icon: `${CDN}/mysql/mysql-original.svg` },
    ],
    imgs: ["pomo1.png", "pomo2.png", "pomo3.png"],
  },
  // Personales
  {
    category: "personal", id: "vi", title: "Violet", wip: false,
    repo: "https://github.com/JayDenMD24/Violet",
    desc: "Aplicación de escritorio que permite subir videos a Google Drive y compartirlos en Discord de forma automática.",
    stack: [
      { name: "Python", icon: `${CDN}/python/python-original.svg` },
      { name: "Google Drive API", icon: "assets/icons/google_drive.png" },
    ],
    imgs: ["vi1.png", "vi2.png", "vi3.png"],
  },
  {
    category: "personal", id: "mono", title: "Mono", wip: false,
    repo: "https://github.com/JayDenMD24/Mono",
    desc: "Aplicación para el registro de sesiones de monitorias académicas en la Universidad del Sinú.",
    stack: [
      { name: "HTML", icon: `${CDN}/html5/html5-original.svg` },
      { name: "CSS", icon: `${CDN}/css3/css3-original.svg` },
      { name: "Android Studio", icon: "assets/icons/androidstudio.png" },
      { name: "Capacitor", icon: "assets/icons/capacitor.png" },
    ],
    imgs: ["mono1.png", "mono2.png", "mono3.png", "mono4.png"],
  },
  {
    category: "personal", id: "archie", title: "Archie", wip: false,
    repo: "https://github.com/JayDenMD24/Archie",
    desc: "Bot de Discord que notifica automáticamente los logros de Steam de los usuarios.",
    stack: [
      { name: "Python", icon: `${CDN}/python/python-original.svg` },
      { name: "SQLite", icon: `${CDN}/sqlite/sqlite-original.svg` },
      { name: "Discord API", icon: "assets/icons/discord.png" },
      { name: "Steam API", icon: "assets/icons/steam.png" },
    ],
    imgs: ["archie1.png", "archie2.png"],
  },
  {
    category: "personal", id: "srv", title: "Home Server", wip: false, repo: null,
    desc: "Portátil reutilizado como servidor doméstico con acceso remoto vía Tailscale.",
    stack: [
      { name: "Linux", icon: `${CDN}/linux/linux-original.svg` },
      { name: "Ubuntu", icon: `${CDN}/ubuntu/ubuntu-plain.svg` },
      { name: "Tailscale", icon: "assets/icons/tailscale.png" },
    ],
    imgs: ["srv1.png", "srv2.png", "srv3.png"],
  },
];

const grid = document.getElementById("projects-grid");
const state = {};
const timers = {};

function buildCard(p) {
  state[p.id] = 0;
  const card = document.createElement("div");
  card.className = "card fade-in";

  const slides = p.imgs.map(img => `
    <div class="card-carousel-slide">
      <img src="assets/img/${img}" alt="${p.title}" loading="lazy"
        onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
      <div class="fallback">${img}</div>
    </div>`).join("");

  const stackHtml = p.stack.map(t =>
    `<span class="stack-tag">${t.icon ? `<img src="${t.icon}" alt="" onerror="this.style.display='none'">` : ""}${t.name}</span>`
  ).join("");

  const ghBtn = p.repo
    ? `<a href="${p.repo}" target="_blank" rel="noopener" class="link-btn" title="GitHub" onclick="event.stopPropagation()"><img src="assets/icons/github.png" alt="GitHub"></a>`
    : "";

  const siteBtn = p.site
    ? `<a href="${p.site}" target="_blank" rel="noopener" class="link-btn" title="Sitio web" onclick="event.stopPropagation()"><img src="${p.siteIcon}" alt="Sitio web"></a>`
    : "";

  const badge = p.wip
    ? '<span class="status-dot wip"></span>'
    : '<span class="status-dot done"></span>';

  card.innerHTML = `
    <div class="card-carousel" data-id="${p.id}">
      <div class="card-carousel-track" id="track-${p.id}">${slides}</div>
    </div>
    <div class="card-body">
      <div class="card-top">
        <div class="card-title-row">
          <span class="card-title">${p.title}</span>
          ${badge}
        </div>
        <div class="card-btns">${ghBtn}${siteBtn}</div>
      </div>
      <p class="card-desc">${p.desc}</p>
      <div class="card-stack">${stackHtml}</div>
    </div>`;

  return card;
}

function goTo(id, idx) {
  const p = projects.find(x => x.id === id);
  idx = ((idx % p.imgs.length) + p.imgs.length) % p.imgs.length;
  state[id] = idx;
  const track = document.getElementById(`track-${id}`);
  if (track) {
    const slideWidth = track.parentElement.clientWidth;
    track.style.transform = `translateX(-${idx * slideWidth}px)`;
  }
}

function startAuto(id) {
  clearInterval(timers[id]);
  timers[id] = setInterval(() => goTo(id, state[id] + 1), 3500);
}

function renderCards(items) {
  items.forEach(p => {
    const c = buildCard(p);
    c.dataset.category = p.category;
    grid.appendChild(c);
  });
}

renderCards(projects.filter(p => p.category === "external"));
renderCards(projects.filter(p => p.category === "academic"));
renderCards(projects.filter(p => p.category === "personal"));

// ── Filters ──
const filterBtns = document.querySelectorAll(".filter-btn");
let activeFilter = null;

function applyFilter(cat) {
  const sameFilter = cat === activeFilter;
  activeFilter = cat;
  filterBtns.forEach(b => b.classList.toggle("active", b.dataset.cat === cat));
  Object.keys(timers).forEach(id => clearInterval(timers[id]));
  if (sameFilter) return;
  grid.querySelectorAll(".card").forEach(card => { card.style.display = "none"; });
  let showIdx = 0;
  grid.querySelectorAll(".card").forEach(card => {
    const show = cat === "all" || card.dataset.category === cat;
    if (show) {
      card.style.display = "";
      card.classList.remove("visible");
      const i = showIdx++;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        setTimeout(() => card.classList.add("visible"), i * 60);
      }));
    }
  });
  projects.forEach(p => {
    if (p.imgs.length > 1 && (cat === "all" || p.category === cat)) startAuto(p.id);
  });
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => applyFilter(btn.dataset.cat));
});

applyFilter("academic");

// ── Lightbox ──
const lightbox = document.getElementById("lightbox");
const lbTrack = document.getElementById("lb-track");
const lbDots = document.getElementById("lb-dots");
const lbPrev = document.getElementById("lb-prev");
const lbNext = document.getElementById("lb-next");
let lbProject = null;
let lbIndex = 0;

function openLightbox(p, idx) {
  lbProject = p;
  lbIndex = idx;
  lbTrack.innerHTML = p.imgs.map(img => `
    <div class="lb-slide">
      <img src="assets/img/${img}" alt="${p.title}">
    </div>`).join("");
  lbDots.innerHTML = p.imgs.length > 1 ? p.imgs.map((_, i) =>
    `<button class="lb-dot${i === 0 ? " active" : ""}" data-idx="${i}" aria-label="Imagen ${i + 1}"></button>`
  ).join("") : "";
  updateLBPosition(false);
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
  lbProject = null;
}

function updateLBPosition(animate) {
  if (!lbProject) return;
  lbTrack.style.transition = animate !== false
    ? "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)" : "none";
  lbTrack.style.transform = `translateX(-${lbIndex * 100}%)`;
  lbPrev.style.display = lbProject.imgs.length > 1 ? "" : "none";
  lbNext.style.display = lbProject.imgs.length > 1 ? "" : "none";
  lbDots.querySelectorAll(".lb-dot").forEach((d, i) => d.classList.toggle("active", i === lbIndex));
}

function lbGo(dir) {
  if (!lbProject) return;
  lbIndex = ((lbIndex + dir) % lbProject.imgs.length + lbProject.imgs.length) % lbProject.imgs.length;
  updateLBPosition(true);
}

grid.addEventListener("click", e => {
  if (e.target.closest(".link-btn")) return;
  const card = e.target.closest(".card");
  if (!card) return;
  const carousel = card.querySelector(".card-carousel");
  if (!carousel) return;
  const p = projects.find(x => x.id === carousel.dataset.id);
  openLightbox(p, 0);
});

lbPrev.addEventListener("click", () => lbGo(-1));
lbNext.addEventListener("click", () => lbGo(1));

lightbox.addEventListener("click", e => {
  if (!e.target.closest(".lb-slide img") && !e.target.closest(".lb-btn") && !e.target.closest(".lb-dot")) closeLightbox();
});

document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") lbGo(-1);
  if (e.key === "ArrowRight") lbGo(1);
});

// ── Lightbox dots click ──
lbDots.addEventListener("click", e => {
  const btn = e.target.closest(".lb-dot");
  if (!btn) return;
  e.stopPropagation();
  lbGoTo(parseInt(btn.dataset.idx));
});

function lbGoTo(idx) {
  if (!lbProject) return;
  lbIndex = ((idx % lbProject.imgs.length) + lbProject.imgs.length) % lbProject.imgs.length;
  updateLBPosition(true);
}

// ── Lightbox swipe ──
let lbStartX = 0, lbDx = 0, lbSwiping = false;

lightbox.addEventListener("touchstart", e => {
  if (!lbProject || lbProject.imgs.length < 2) return;
  lbStartX = e.touches[0].clientX;
  lbDx = 0;
  lbSwiping = true;
  lbTrack.style.transition = "none";
}, { passive: true });

lightbox.addEventListener("touchmove", e => {
  if (!lbSwiping) return;
  lbDx = e.touches[0].clientX - lbStartX;
  lbTrack.style.transform = `translateX(calc(-${lbIndex * 100}% + ${lbDx}px))`;
}, { passive: true });

lightbox.addEventListener("touchend", () => {
  if (!lbSwiping) return;
  lbSwiping = false;
  lbTrack.style.transition = "";
  const threshold = lightbox.clientWidth * 0.2;
  if (Math.abs(lbDx) > threshold) {
    lbGoTo(lbIndex + (lbDx < 0 ? 1 : -1));
  } else {
    updateLBPosition(true);
  }
});

// ── Fade in ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
