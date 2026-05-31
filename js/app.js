
const ICONS = {
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
};


let currentLang = localStorage.getItem("resume.lang") || "ua";
let currentTheme = localStorage.getItem("resume.theme") || "dark";


function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("resume.lang", lang);
  const dict = I18N[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });

  document.querySelectorAll(".lang-btn").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang));

  renderQualities();
  renderExperience();
  renderEducation();
}


function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("resume.theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  const btn = document.getElementById("themeToggle");
  if (btn) btn.innerHTML = theme === "dark" ? ICONS.sun : ICONS.moon;
  // crossfade hero images handled purely via CSS using [data-theme]
}


function renderQualities() {
  const wrap = document.getElementById("qualitiesList");
  if (!wrap) return;
  wrap.innerHTML = LISTS.qualities[currentLang]
    .map(q => `<li class="quality">${ICONS.arrow}<span>${q}</span></li>`).join("");
}

function renderSkills() {
  const wrap = document.getElementById("skillsGrid");
  if (!wrap) return;
  wrap.innerHTML = LISTS.skills
    .map(s => `<div class="skill glass-sm"><span class="skill-dot"></span>${s}</div>`).join("");
}

function renderExperience() {
  const wrap = document.getElementById("experienceList");
  if (!wrap) return;
  wrap.innerHTML = LISTS.experience[currentLang].map(job => `
    <article class="job glass">
      <div class="job-head">
        <div>
          <h3 class="job-org">${job.org}</h3>
          <p class="job-role">${job.role}</p>
        </div>
        <span class="job-period mono">${job.period}</span>
      </div>
      <span class="job-tag mono">${job.tag}</span>
      <ul class="job-points">
        ${job.points.map(p => `<li>${p}</li>`).join("")}
      </ul>
    </article>`).join("");
}

function renderEducation() {
  const wrap = document.getElementById("educationList");
  if (!wrap) return;
  wrap.innerHTML = LISTS.education[currentLang].map(ed => `
    <article class="edu glass">
      <span class="edu-period mono">${ed.period}</span>
      <h3 class="edu-org">${ed.org}</h3>
      <p class="edu-field">${ed.field}</p>
    </article>`).join("");
}

function renderContacts() {
  const wrap = document.getElementById("contactList");
  if (!wrap) return;
  wrap.innerHTML = CONTACTS.map(c => `
    <a class="contact-item glass-sm" href="${c.href}" target="_blank" rel="noopener">
      <span class="contact-icon">${ICONS[c.id]}</span>
      <span class="contact-text">
        <span class="contact-label mono">${c.label}</span>
        <span class="contact-value">${c.value}</span>
      </span>
    </a>`).join("");

  // social row in footer + nav
  const socialMarkup = CONTACTS.map(c => `
      <a href="${c.href}" target="_blank" rel="noopener" aria-label="${c.label}">
        ${ICONS[c.id]}
      </a>`).join("");
  const social = document.getElementById("socialRow");
  if (social) social.innerHTML = CONTACTS.map(c => `
      <a class="social-btn" href="${c.href}" target="_blank" rel="noopener" aria-label="${c.label}">
        ${ICONS[c.id]}
      </a>`).join("");
  const navSocial = document.getElementById("navSocial");
  if (navSocial) navSocial.innerHTML = socialMarkup;
}


function initCanvas() {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let w, h, dpr, t = 0;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  const LINES = 26;
  function draw() {
    ctx.clearRect(0, 0, w, h);
    const light = currentTheme === "light";
    // line colour from theme
    const baseHue = 38;
    for (let i = 0; i < LINES; i++) {
      const p = i / LINES;
      const yBase = h * (0.08 + p * 0.9);
      const amp = 26 + 60 * Math.sin(p * Math.PI);
      const speed = 0.00035 * (0.6 + p);
      const phase = t * speed + p * 6;

      ctx.beginPath();
      for (let x = -40; x <= w + 40; x += 14) {
        const y = yBase
          + Math.sin(x * 0.0045 + phase) * amp
          + Math.sin(x * 0.0011 - phase * 1.5) * amp * 0.5;
        x === -40 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      // amber lines fade by depth
      const warm = Math.max(0, 1 - Math.abs(p - 0.5) * 1.4);
      const alpha = (light ? 0.05 : 0.07) + warm * (light ? 0.05 : 0.10);
      const sat = light ? 60 : 80;
      const lum = light ? 45 : 62;
      ctx.strokeStyle = `hsla(${baseHue}, ${sat}%, ${lum}%, ${alpha})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
    if (!reduced) t += 16;
    requestAnimationFrame(draw);
  }
  draw();
}


function initReveal() {
  const items = [...document.querySelectorAll(".reveal")];
  if (!("IntersectionObserver" in window)) {
    items.forEach(el => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: "0px 0px -6% 0px" });
  items.forEach(el => io.observe(el));
  // Safety fallback: reveal anything still hidden after a short delay
  // (covers headless capture / flaky IO so content never gets stuck invisible).
  setTimeout(() => items.forEach(el => el.classList.add("in")), 1400);
}


function initNavSpy() {
  const links = [...document.querySelectorAll(".nav-link")];
  const map = new Map(links.map(l => [l.getAttribute("href").slice(1), l]));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.remove("active"));
        map.get(e.target.id)?.classList.add("active");
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll("section[id]").forEach(s => io.observe(s));
}


function initFluidCursor() {
  const canvas = document.getElementById("fluidCursor");
  if (!canvas) return;
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");

  /* ---- tweakable config ---- */
  const CFG = {
    color: "214, 179, 106",  // #D6B36A — warm muted yellow, single hue
    points: 18,              // vertices around the blob outline
    baseRadius: 24,          // resting radius (px)
    hoverScale: 1.28,        // grow ~28% over interactive elements
    follow: 0.135,           // center lerp toward cursor (lag)
    scaleEase: 0.12,         // hover-scale lerp
    wobble: 0.20,            // organic deformation amount
    wobbleSpeed: 1.7,        // deformation speed
    stretchK: 0.026,         // velocity → stretch
    maxStretch: 0.6,         // cap on directional elongation
    haloAlpha: 0.16,         // outer soft layer
    coreAlpha: 0.40,         // inner denser layer
    blur: 10,                // soft-edge blur (px)
  };

  let dpr, W, H;
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener("resize", resize);

  let tx = W / 2, ty = H / 2, x = tx, y = ty, px = x, py = y;
  let svx = 0, svy = 0;                 // smoothed velocity
  let scale = 1, targetScale = 1;
  let appear = 0, targetAppear = 0;     // fade in/out on enter/leave
  let lastMove = 0, started = false, t = 0;

  // per-vertex random phases/frequencies for organic motion
  const phase = [], fA = [], fB = [];
  for (let i = 0; i < CFG.points; i++) {
    phase.push(Math.random() * Math.PI * 2);
    fA.push(2 + Math.floor(Math.random() * 2));
    fB.push(3 + Math.floor(Math.random() * 3));
  }

  window.addEventListener("mousemove", (e) => {
    tx = e.clientX; ty = e.clientY;
    targetAppear = 1; lastMove = performance.now();
    if (!started) { x = tx; y = ty; px = tx; py = ty; started = true; }
  }, { passive: true });
  window.addEventListener("mouseleave", () => { targetAppear = 0; });

  const interactive = "a, button, .skill, .contact-item, .social-btn, .lang-btn, .icon-btn, input, textarea";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest && e.target.closest(interactive)) targetScale = CFG.hoverScale;
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest && e.target.closest(interactive)) targetScale = 1;
  });

  const lerp = (a, b, k) => a + (b - a) * k;

  function buildPath(pts) {
    const n = pts.length;
    ctx.beginPath();
    let mx = (pts[n - 1][0] + pts[0][0]) / 2;
    let my = (pts[n - 1][1] + pts[0][1]) / 2;
    ctx.moveTo(mx, my);
    for (let i = 0; i < n; i++) {
      const cur = pts[i], nxt = pts[(i + 1) % n];
      const midx = (cur[0] + nxt[0]) / 2, midy = (cur[1] + nxt[1]) / 2;
      ctx.quadraticCurveTo(cur[0], cur[1], midx, midy); // smooth closed outline
    }
    ctx.closePath();
  }

  function frame() {
    t += 0.016;

    px = x; py = y;
    x = lerp(x, tx, CFG.follow);
    y = lerp(y, ty, CFG.follow);
    svx = lerp(svx, x - px, 0.2);
    svy = lerp(svy, y - py, 0.2);
    const speed = Math.hypot(svx, svy);
    const timeSinceMove = performance.now() - lastMove;
    const moving = timeSinceMove < 130;

    if (timeSinceMove > 500) {
      targetAppear = 0;
    }

    scale = lerp(scale, targetScale, CFG.scaleEase);
    appear = lerp(appear, targetAppear, 0.08);

    const stretch = Math.min(speed * CFG.stretchK, CFG.maxStretch);
    const ang = Math.atan2(svy, svx);
    const R = CFG.baseRadius * scale;
    const wob = CFG.wobble * (moving ? 1.0 : 0.5); // calms toward rest when idle

    // rotation matrices: into velocity frame and back
    const cIn = Math.cos(-ang), sIn = Math.sin(-ang);
    const cOut = Math.cos(ang), sOut = Math.sin(ang);

    const pts = [];
    for (let i = 0; i < CFG.points; i++) {
      const a = (i / CFG.points) * Math.PI * 2;
      const n = Math.sin(fA[i] * a + t * CFG.wobbleSpeed + phase[i]) * 0.6
              + Math.sin(fB[i] * a - t * CFG.wobbleSpeed * 0.8 + phase[i]) * 0.4;
      const r = R * (1 + wob * n);
      let dx = Math.cos(a) * r, dy = Math.sin(a) * r;
      // stretch along motion: rotate to velocity frame, scale, rotate back
      const rx = dx * cIn - dy * sIn;
      const ry = dx * sIn + dy * cIn;
      const ex = rx * (1 + stretch);
      const ey = ry * (1 - stretch * 0.45);
      dx = ex * cOut - ey * sOut;
      dy = ex * sOut + ey * cOut;
      pts.push([x + dx, y + dy]);
    }

    ctx.clearRect(0, 0, W, H);
    if (appear > 0.01) {
      const themeFactor = (typeof currentTheme !== "undefined" && currentTheme === "light") ? 0.55 : 1;
      // soft outer halo
      ctx.save();
      ctx.filter = `blur(${CFG.blur}px)`;
      buildPath(pts);
      ctx.fillStyle = `rgba(${CFG.color}, ${(CFG.haloAlpha * appear * themeFactor).toFixed(3)})`;
      ctx.fill();
      ctx.restore();
      // denser core
      ctx.save();
      ctx.filter = `blur(${(CFG.blur * 0.5).toFixed(1)}px)`;
      buildPath(pts);
      ctx.fillStyle = `rgba(${CFG.color}, ${(CFG.coreAlpha * appear * themeFactor).toFixed(3)})`;
      ctx.fill();
      ctx.restore();
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}


document.addEventListener("DOMContentLoaded", () => {
  renderSkills();
  renderContacts();
  applyTheme(currentTheme);
  applyLang(currentLang);

  document.getElementById("themeToggle").addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
  document.querySelectorAll(".lang-btn").forEach(b =>
    b.addEventListener("click", () => applyLang(b.dataset.lang)));

  initCanvas();
  initReveal();
  initNavSpy();
  initFluidCursor();

  // header glass + hero fade on scroll
  const header = document.getElementById("siteHeader");
  const hero = document.getElementById("hero");
  const onScroll = () => {
    const vh = window.innerHeight || 1;
    const y = window.scrollY;
    const fade = Math.max(0, 1 - y / (vh * 0.62));
    if (hero) hero.style.setProperty("--hero-fade", fade.toFixed(3));
    header.classList.toggle("scrolled", y > vh * 0.6);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });
});
