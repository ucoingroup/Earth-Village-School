// ============================================
// Earth Village Business School - Main App Logic
// ============================================

// ===== State =====
let currentLang = 'zh'; // 'zh' or 'en'
let currentSection = 'courses';
let currentTheme = 'cosmic';

// ===== I18n Strings =====
const I18N = {
  zh: {
    courses: "100门公开课",
    energy: "能源学院",
    books: "100本能源书籍",
    plan: "100天计划",
    coursesLabel: "公开课程",
    categoriesLabel: "课程分类",
    yearsLabel: "年视野",
    langLabel: "Languages",
    allCats: "全部分类",
    trade: "地球村基石",
    econbiz: "经济与商业",
    aerospace: "航天与太空",
    energy: "能源与可持续发展",
    life: "生命与健康",
    symbiosis: "人机共生协创",
    silicon: "硅基文明",
    searchPlaceholder: "搜索课程名称、关键词...",
    energySearchPlaceholder: "搜索能源课程...",
    bookSearchPlaceholder: "搜索书名、作者...",
    heroTitle: "地球村商学院 · 100门公开课",
    heroDesc: "面向地球村人类文明的100门公开课程，涵盖国际贸易、经济商业、航天太空、能源可持续发展、生命健康等碳基文明核心领域，以及人机共生协创课程与硅基文明课程。碳基与硅基文明区别分类、协同发展，适合未来500年星际太空文明的学习需求。",
    energyTitle: "地球村能源学院",
    energyDesc: "面向全球人类自学推荐的能源公开课程，涵盖可再生能源、核能、氢能、储能、智能电网、碳管理、太空能源、石油天然气、能源地缘政治与气候变化等前沿领域。碳基文明的能源转型之路，也是通向星际文明的基石。",
    booksTitle: "100本能源行业书籍",
    booksDesc: "为海外华商精选的100本能源行业书籍，覆盖能源通史、石油天然气、可再生能源、核能、氢能、太空能源、能源投资与商业管理。",
    planTitle: "100天自学计划表",
    planDesc: "精简版100天自学计划，10个阶段循序渐进，从经济学基础到星际文明，构建面向未来的知识体系。",
    footerTitle: "🔗 地球村生态链接",
    courseDetail: "课程详情",
    coreTopics: "核心知识点",
    learningGoals: "学习目标",
    detailContent: "课程详情",
    results: "条结果",
    noResults: "未找到匹配结果，请尝试其他关键词。",
    expand: "展开",
    collapse: "收起",
    brandSubtitle: "地球村商学院 · 100门公开课"
  },
  en: {
    courses: "100 Courses",
    energy: "Energy Academy",
    books: "100 Energy Books",
    plan: "100-Day Plan",
    coursesLabel: "Open Courses",
    categoriesLabel: "Categories",
    yearsLabel: "Years Vision",
    langLabel: "语言",
    allCats: "All Categories",
    trade: "Global Foundations",
    econbiz: "Economics & Business",
    aerospace: "Aerospace & Space",
    energy: "Energy & Sustainability",
    life: "Life & Health",
    symbiosis: "Human-AI Symbiosis",
    silicon: "Silicon Civilization",
    searchPlaceholder: "Search course names, keywords...",
    energySearchPlaceholder: "Search energy courses...",
    bookSearchPlaceholder: "Search book titles, authors...",
    heroTitle: "Earth Village Business School · 100 Open Courses",
    heroDesc: "100 open courses for Earth Village human civilization, covering international trade, economics, aerospace, energy, life sciences (carbon-based), plus human-AI symbiosis and silicon civilization courses. Carbon and silicon civilizations are categorized separately yet designed for collaborative development, suited for 500 years of interstellar civilization.",
    energyTitle: "Earth Village Energy Academy",
    energyDesc: "Self-study energy courses for global citizens, covering renewable energy, nuclear, hydrogen, storage, smart grid, carbon management, space energy, oil & gas, energy geopolitics, and climate change. The energy transition path for carbon-based civilization is also the cornerstone of interstellar civilization.",
    booksTitle: "100 Energy Books for Overseas Chinese Business Leaders",
    booksDesc: "100 curated energy books covering energy history, oil & gas, renewables, nuclear, hydrogen, space energy, energy investment and business management.",
    planTitle: "100-Day Self-Study Plan",
    planDesc: "A streamlined 100-day study plan in 10 progressive phases, from economics fundamentals to interstellar civilization.",
    footerTitle: "🔗 Earth Village Ecosystem Links",
    courseDetail: "Course Details",
    coreTopics: "Core Topics",
    learningGoals: "Learning Goals",
    detailContent: "Course Details",
    results: "results",
    noResults: "No matching results found. Try different keywords.",
    expand: "Expand",
    collapse: "Collapse",
    brandSubtitle: "Earth Village · 100 Open Courses"
  }
};

// ===== Footer Links =====
const FOOTER_LINKS = [
  { url: "https://ucoingroup.github.io/earths-best-coin/", text: "Earth's Best Coin" },
  { url: "https://ucoingroup.github.io/eaco50rate/", text: "EACO 50 Rate" },
  { url: "https://ucoingroup.github.io/100WaysToWealth/", text: "100 Ways To Wealth" },
  { url: "https://ucoingroup.github.io/earth-100-friends/", text: "Earth 100 Friends" },
  { url: "https://ucoingroup.github.io/eacoSWAP/", text: "EACO SWAP" },
  { url: "https://ucoingroup.github.io/good-books/", text: "Good Books" },
  { url: "https://ucoingroup.github.io/eur-eaco/", text: "EUR-EACO" },
  { url: "https://ucoingroup.github.io/au-trade/", text: "AU Trade" },
  { url: "https://ucoingroup.github.io/Mohist-Tech/", text: "Mohist Tech" },
  { url: "https://eaco-build-world.base44.app/", text: "EACO Build World" }
];

// ===== Init =====
document.addEventListener('DOMContentLoaded', function() {
  initStars();
  renderFooter();
  renderCourses();
  renderEnergyCourses();
  renderBooks();
  renderPlan();
  applyI18n();

  // Search listeners
  document.getElementById('courseSearch').addEventListener('input', filterCourses);
  document.getElementById('energySearch').addEventListener('input', filterEnergyCourses);
  document.getElementById('bookSearch').addEventListener('input', filterBooks);

  // Theme from localStorage
  const savedTheme = localStorage.getItem('ev-theme');
  if (savedTheme) switchTheme(savedTheme);

  // Lang from localStorage
  const savedLang = localStorage.getItem('ev-lang');
  if (savedLang && savedLang !== currentLang) toggleLang();
});

// ===== Stars Background =====
function initStars() {
  const canvas = document.getElementById('starsCanvas');
  const ctx = canvas.getContext('2d');
  let stars = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 8000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.2,
        opacity: Math.random() * 0.8 + 0.2,
        twinkle: Math.random() * 0.02
      });
    }
  }
  resize();
  window.addEventListener('resize', resize);

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const opacity = getComputedStyle(document.documentElement).getPropertyValue('--star-opacity').trim();
    if (parseFloat(opacity) === 0) {
      requestAnimationFrame(drawStars);
      return;
    }
    stars.forEach(s => {
      s.opacity += s.twinkle;
      if (s.opacity > 1 || s.opacity < 0.2) s.twinkle = -s.twinkle;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,' + s.opacity + ')';
      ctx.fill();
    });
    requestAnimationFrame(drawStars);
  }
  drawStars();
}

// ===== Language Toggle =====
function toggleLang() {
  currentLang = currentLang === 'zh' ? 'en' : 'zh';
  localStorage.setItem('ev-lang', currentLang);
  document.getElementById('langLabel').textContent = currentLang === 'zh' ? '中文' : 'EN';
  document.getElementById('langBtn').classList.toggle('active', currentLang === 'zh');
  applyI18n();
  renderCourses();
  renderEnergyCourses();
  renderBooks();
  renderPlan();
}

function applyI18n() {
  const t = I18N[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });
  document.querySelectorAll('[data-i18n-cat]').forEach(el => {
    const key = el.getAttribute('data-i18n-cat');
    if (t[key]) el.textContent = t[key];
  });
  document.getElementById('heroTitle').textContent = t.heroTitle;
  document.getElementById('heroDesc').textContent = t.heroDesc;
  document.getElementById('energyTitle').textContent = t.energyTitle;
  document.getElementById('energyDesc').textContent = t.energyDesc;
  document.getElementById('booksTitle').textContent = t.booksTitle;
  document.getElementById('booksDesc').textContent = t.booksDesc;
  document.getElementById('planTitle').textContent = t.planTitle;
  document.getElementById('planDesc').textContent = t.planDesc;
  document.getElementById('footerTitle').textContent = t.footerTitle;
  document.getElementById('brandSubtitle').textContent = t.brandSubtitle;
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
}

// ===== Theme Switch =====
function switchTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('ev-theme', theme);
  document.querySelectorAll('.theme-dot').forEach(d => {
    d.classList.toggle('active', d.getAttribute('data-theme') === theme);
  });
}

// ===== Section Switch =====
function switchSection(section) {
  currentSection = section;
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById('section-' + section).classList.add('active');
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  const tab = document.getElementById('tab-' + section);
  if (tab) tab.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== Render Courses =====
function renderCourses(filterText, filterCat) {
  const grid = document.getElementById('courseGrid');
  const isEn = currentLang === 'en';
  let courses = COURSES;

  if (filterText) {
    const ft = filterText.toLowerCase();
    courses = courses.filter(c =>
      c.title_cn.toLowerCase().includes(ft) ||
      c.title_en.toLowerCase().includes(ft) ||
      (c.tags_cn && c.tags_cn.some(t => t.toLowerCase().includes(ft))) ||
      (c.tags_en && c.tags_en.some(t => t.toLowerCase().includes(ft)))
    );
  }
  if (filterCat && filterCat !== 'all') {
    courses = courses.filter(c => c.cat === filterCat);
  }

  document.getElementById('resultCount').textContent = courses.length + ' ' + I18N[currentLang].results;

  if (courses.length === 0) {
    grid.innerHTML = '<div class="no-results">' + I18N[currentLang].noResults + '</div>';
    return;
  }

  grid.innerHTML = courses.map(c => {
    const title = isEn ? c.title_en : c.title_cn;
    const cat = isEn ? c.cat_en : c.cat_cn;
    const desc = isEn ? c.desc_en : c.desc_cn;
    const tags = isEn ? (c.tags_en || []) : (c.tags_cn || []);
    return `
      <div class="course-card" data-cat="${c.cat}" onclick="showCourseDetail(${c.id})">
        <div class="course-num">${c.id}</div>
        <div class="course-cat">${cat}</div>
        <h3>${title}</h3>
        <div class="course-en">${isEn ? c.title_cn : c.title_en}</div>
        <div class="course-desc">${desc}</div>
        <div class="course-tags">
          ${tags.map(t => `<span class="course-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function filterCourses() {
  const text = document.getElementById('courseSearch').value;
  const cat = document.getElementById('categoryFilter').value;
  renderCourses(text, cat);
}

// ===== Render Energy Courses =====
function renderEnergyCourses(filterText) {
  const grid = document.getElementById('energyGrid');
  const isEn = currentLang === 'en';
  // Energy section: show energy category courses + energy-related courses from other categories
  const energyRelatedIds = [46,47,48,49,50,51,52,53,54,55,32,54]; // energy courses + space economy + space solar power
  let courses = COURSES.filter(c => c.cat === 'energy' || (energyRelatedIds.includes(c.id) && c.cat !== 'energy'));
  // Deduplicate
  courses = courses.filter((c, idx, arr) => arr.findIndex(x => x.id === c.id) === idx);

  if (filterText) {
    const ft = filterText.toLowerCase();
    courses = courses.filter(c =>
      c.title_cn.toLowerCase().includes(ft) ||
      c.title_en.toLowerCase().includes(ft)
    );
  }

  document.getElementById('energyResultCount').textContent = courses.length + ' ' + I18N[currentLang].results;

  if (courses.length === 0) {
    grid.innerHTML = '<div class="no-results">' + I18N[currentLang].noResults + '</div>';
    return;
  }

  grid.innerHTML = courses.map(c => {
    const title = isEn ? c.title_en : c.title_cn;
    const cat = isEn ? c.cat_en : c.cat_cn;
    const desc = isEn ? c.desc_en : c.desc_cn;
    const tags = isEn ? (c.tags_en || []) : (c.tags_cn || []);
    return `
      <div class="course-card" data-cat="${c.cat}" onclick="showCourseDetail(${c.id})">
        <div class="course-num">${c.id}</div>
        <div class="course-cat">${cat}</div>
        <h3>${title}</h3>
        <div class="course-en">${isEn ? c.title_cn : c.title_en}</div>
        <div class="course-desc">${desc}</div>
        <div class="course-tags">
          ${tags.map(t => `<span class="course-tag">${t}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function filterEnergyCourses() {
  const text = document.getElementById('energySearch').value;
  renderEnergyCourses(text);
}

// ===== Course Detail Modal =====
function showCourseDetail(id) {
  const c = COURSES.find(c => c.id === id);
  if (!c) return;
  const isEn = currentLang === 'en';
  const title = isEn ? c.title_en : c.title_cn;
  const cat = isEn ? c.cat_en : c.cat_cn;
  const detail = isEn ? (c.detail_en || c.desc_en) : (c.detail_cn || c.desc_cn);
  const tags = isEn ? (c.tags_en || []) : (c.tags_cn || []);

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-cat">${cat}</div>
    <h2>${title}</h2>
    <div class="modal-en">${isEn ? c.title_cn : c.title_en}</div>
    <div class="modal-body">
      <div class="course-tags" style="margin-bottom:1rem;">
        ${tags.map(t => `<span class="course-tag">${t}</span>`).join('')}
      </div>
      <h4>${isEn ? 'Course Overview' : '课程概述'}</h4>
      <p>${isEn ? c.desc_en : c.desc_cn}</p>
      <h4>${isEn ? 'Detailed Content' : '详细内容'}</h4>
      <p>${detail}</p>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay') && e.type === 'click') return;
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

// ===== Render Books =====
function renderBooks(filterText) {
  const grid = document.getElementById('booksGrid');
  const isEn = currentLang === 'en';
  let books = BOOKS;

  if (filterText) {
    const ft = filterText.toLowerCase();
    books = books.filter(b =>
      b.title_cn.toLowerCase().includes(ft) ||
      b.title_en.toLowerCase().includes(ft) ||
      b.author.toLowerCase().includes(ft)
    );
  }

  document.getElementById('bookResultCount').textContent = books.length + ' ' + I18N[currentLang].results;

  if (books.length === 0) {
    grid.innerHTML = '<div class="no-results">' + I18N[currentLang].noResults + '</div>';
    return;
  }

  grid.innerHTML = books.map(b => {
    const title = isEn ? b.title_en : b.title_cn;
    const cat = isEn ? b.cat_en : b.cat_cn;
    return `
      <div class="book-card">
        <div class="book-num">${b.id}</div>
        <div class="book-info">
          <h4>${title}</h4>
          <div class="book-author">${b.author}</div>
          <div class="book-cat">${cat}</div>
        </div>
      </div>
    `;
  }).join('');
}

function filterBooks() {
  const text = document.getElementById('bookSearch').value;
  renderBooks(text);
}

// ===== Render Study Plan =====
function renderPlan() {
  const container = document.getElementById('planContainer');
  const isEn = currentLang === 'en';

  container.innerHTML = STUDY_PLAN.map((p, idx) => {
    const phaseTitle = isEn ? p.phase_en : p.phase_cn;
    const items = p.items.map(item => {
      const content = isEn ? item.en : item.cn;
      return `
        <div class="plan-day">
          <div class="day-num">${item.day}</div>
          <div class="day-content">${content}</div>
        </div>
      `;
    }).join('');

    return `
      <div class="plan-phase">
        <div class="plan-phase-header" onclick="togglePhase(${idx})">
          <div class="plan-phase-title">
            <div class="phase-num">${p.phase}</div>
            <div>
              <h3>${phaseTitle}</h3>
              <div class="phase-days">${isEn ? 'Days' : '天数'} ${p.days}</div>
            </div>
          </div>
          <span class="ctrl-btn">${isEn ? 'Expand' : '展开'}</span>
        </div>
        <div class="plan-phase-body" id="phaseBody-${idx}">
          ${items}
        </div>
      </div>
    `;
  }).join('');

  // Auto-expand first phase
  togglePhase(0);
}

function togglePhase(idx) {
  const body = document.getElementById('phaseBody-' + idx);
  if (body) {
    body.classList.toggle('expanded');
  }
}

// ===== Footer Links =====
function renderFooter() {
  document.getElementById('footerLinks').innerHTML = FOOTER_LINKS.map(l => `
    <a href="${l.url}" target="_blank" rel="noopener" class="footer-link">
      <span class="link-icon">🔗</span>
      <span class="link-text">${l.text}</span>
    </a>
  `).join('');
}

// ===== Keyboard: ESC to close modal =====
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeModal();
});
