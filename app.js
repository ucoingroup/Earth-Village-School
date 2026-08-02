// ============================================
// Earth Village Business School - Main App Logic V3
// 6 Sections: Courses, Business Schools, Energy, Books, Plan, Contribute
// ============================================

// ===== State =====
let currentLang = 'zh';
let currentSection = 'courses';
let currentTheme = 'cosmic';

// ===== I18n Strings =====
const I18N = {
  zh: {
    courses: "100门公开课",
    bschools: "全球商学院",
    energy: "能源学院",
    books: "100本能源书籍",
    plan: "100天计划",
    contribute: "共建共享",
    coursesLabel: "公开课程",
    categoriesLabel: "课程板块",
    yearsLabel: "年视野",
    langLabel: "Languages",
    bschoolsLabel: "商学院",
    bschoolCoursesLabel: "精选课程",
    bschoolCatsLabel: "课程领域",
    allCats: "全部分类",
    allCats2: "全部领域",
    allSchools: "全部学校",
    searchPlaceholder: "搜索课程名称、关键词...",
    bschoolSearchPlaceholder: "搜索学校或课程...",
    energySearchPlaceholder: "搜索能源课程...",
    bookSearchPlaceholder: "搜索书名、作者...",
    heroTitle: "地球村商学院 · 100门公开课",
    heroDesc: "面向地球村人类文明的100门公开课程，融合高校经管课程资源，以商人视角重新设计。涵盖文明商道哲学、国际贸易跨境实业、人本组织社群治理、绿色可持续商业、全球金融风控与碳硅共生人机协同六大板块。碳基定方向，硅基做执行，碳硅共生，服务全球海外华商、新能源跨境从业者。",
    bschoolsTitle: "全球十大商学院 · 300门精选课程",
    bschoolsDesc: "整合全球顶尖10所商学院的300门精选课程，涵盖战略管理、金融投资、市场营销、领导力、创业创新、数据分析、全球化运营等领域。为地球村学员提供世界级商科教育资源，与地球村商学院100门课程互为补充。",
    energyTitle: "地球村能源学院",
    energyDesc: "面向全球人类自学推荐的能源公开课程，涵盖可再生能源、核能、氢能、储能、智能电网、碳管理、太空能源、石油天然气、能源地缘政治与气候变化等前沿领域。碳基文明的能源转型之路，也是通向星际文明的基石。",
    booksTitle: "100本能源行业书籍",
    booksDesc: "为海外华商精选的100本能源行业书籍，覆盖能源通史、石油天然气、可再生能源、核能、氢能、太空能源、能源投资与商业管理。",
    planTitle: "100天自学计划表",
    planDesc: "精简版100天自学计划，10个阶段循序渐进，从经济学基础到星际文明，构建面向未来的知识体系。",
    contributeTitle: "🤝 共建共享公开课",
    contributeDesc: "地球村网友们，一起来共建共享公开课！这是一个开放的公益教育平台，每个人都可以贡献知识、分享课程、参与编辑。无论你是行业专家、学者、教师，还是热心的学习者，都欢迎加入我们的公益编辑团队，共同打造面向全球人类的公开课。",
    contributeStats1: "公开课目标",
    contributeStats2: "共建者",
    contributeStats3: "全球开放",
    contributeCard1Title: "贡献课程内容",
    contributeCard1Desc: "撰写新课程、优化现有课程内容、翻译中英文双语版本。每一份贡献都会让地球村的学习资源更丰富。",
    contributeCard2Title: "审校与编辑",
    contributeCard2Desc: "审校课程内容的准确性、时效性，确保知识质量。我们相信群体智慧能打造最好的公开课。",
    contributeCard3Title: "推荐选题",
    contributeCard3Desc: "推荐你认为重要的课程主题，帮助地球村课程体系覆盖更多前沿领域和实用知识。",
    contributeCard4Title: "多语言翻译",
    contributeCard4Desc: "帮助将课程翻译成更多语言，让地球村的每一个角落都能无障碍学习。中文、英语及更多语言。",
    contributeBtnText: "🌐 访问共建共享公开课平台",
    contributeEmailBtnText: "✉️ 联系公益编辑邮箱",
    contributeEmailLabel: "公益编辑邮箱：",
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
    bschools: "Global B-Schools",
    energy: "Energy Academy",
    books: "100 Energy Books",
    plan: "100-Day Plan",
    contribute: "Co-Build",
    coursesLabel: "Open Courses",
    categoriesLabel: "Categories",
    yearsLabel: "Years Vision",
    langLabel: "语言",
    bschoolsLabel: "B-Schools",
    bschoolCoursesLabel: "Courses",
    bschoolCatsLabel: "Fields",
    allCats: "All Categories",
    allCats2: "All Fields",
    allSchools: "All Schools",
    searchPlaceholder: "Search course names, keywords...",
    bschoolSearchPlaceholder: "Search schools or courses...",
    energySearchPlaceholder: "Search energy courses...",
    bookSearchPlaceholder: "Search book titles, authors...",
    heroTitle: "Earth Village Business School · 100 Open Courses",
    heroDesc: "100 open courses for Earth Village human civilization, integrating university business curriculum resources redesigned from a merchant perspective. Six categories: Civilization Philosophy, International Trade, Human-Centered Organization, Green Sustainable Business, Global Finance, and Carbon-Silicon Symbiosis. Carbon sets direction, silicon executes, serving global overseas Chinese business leaders.",
    bschoolsTitle: "Top 10 Global Business Schools · 300 Selected Courses",
    bschoolsDesc: "Integrating 300 selected courses from the world's top 10 business schools, covering strategic management, finance, marketing, leadership, entrepreneurship, analytics, and global operations. Providing world-class business education resources to complement Earth Village's 100 courses.",
    energyTitle: "Earth Village Energy Academy",
    energyDesc: "Self-study energy courses for global citizens, covering renewable energy, nuclear, hydrogen, storage, smart grid, carbon management, space energy, oil & gas, energy geopolitics, and climate change. The energy transition path for carbon-based civilization is also the cornerstone of interstellar civilization.",
    booksTitle: "100 Energy Books for Overseas Chinese Business Leaders",
    booksDesc: "100 curated energy books covering energy history, oil & gas, renewables, nuclear, hydrogen, space energy, energy investment and business management.",
    planTitle: "100-Day Self-Study Plan",
    planDesc: "A streamlined 100-day study plan in 10 progressive phases, from economics fundamentals to interstellar civilization.",
    contributeTitle: "🤝 Co-Build & Share Open Courses",
    contributeDesc: "Earth Village netizens, let's co-build and share open courses together! This is an open public education platform where everyone can contribute knowledge, share courses, and participate in editing. Whether you are an industry expert, scholar, teacher, or an enthusiastic learner, you are welcome to join our public editorial team to collaboratively create open courses for global citizens.",
    contributeStats1: "Courses Goal",
    contributeStats2: "Contributors",
    contributeStats3: "Global Open",
    contributeCard1Title: "Contribute Course Content",
    contributeCard1Desc: "Write new courses, optimize existing content, translate bilingual versions. Every contribution enriches Earth Village's learning resources.",
    contributeCard2Title: "Review & Edit",
    contributeCard2Desc: "Review course content for accuracy and timeliness to ensure knowledge quality. We believe collective intelligence creates the best open courses.",
    contributeCard3Title: "Suggest Topics",
    contributeCard3Desc: "Recommend course topics you think are important, helping Earth Village cover more frontier fields and practical knowledge.",
    contributeCard4Title: "Multi-language Translation",
    contributeCard4Desc: "Help translate courses into more languages so every corner of Earth Village can learn without barriers. Chinese, English, and more.",
    contributeBtnText: "🌐 Visit Co-Build Platform",
    contributeEmailBtnText: "✉️ Contact Public Editor Email",
    contributeEmailLabel: "Public Editor Email: ",
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
  initBSchoolFilters();
  renderBSchools();
  renderEnergyCourses();
  renderBooks();
  renderPlan();
  applyI18n();

  document.getElementById('courseSearch').addEventListener('input', filterCourses);
  document.getElementById('bschoolSearch').addEventListener('input', filterBSchools);
  document.getElementById('energySearch').addEventListener('input', filterEnergyCourses);
  document.getElementById('bookSearch').addEventListener('input', filterBooks);

  const savedTheme = localStorage.getItem('ev-theme');
  if (savedTheme) switchTheme(savedTheme);

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
  renderBSchools();
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
  document.getElementById('heroTitle').textContent = t.heroTitle;
  document.getElementById('heroDesc').textContent = t.heroDesc;
  document.getElementById('bschoolsTitle').textContent = t.bschoolsTitle;
  document.getElementById('bschoolsDesc').textContent = t.bschoolsDesc;
  document.getElementById('energyTitle').textContent = t.energyTitle;
  document.getElementById('energyDesc').textContent = t.energyDesc;
  document.getElementById('booksTitle').textContent = t.booksTitle;
  document.getElementById('booksDesc').textContent = t.booksDesc;
  document.getElementById('planTitle').textContent = t.planTitle;
  document.getElementById('planDesc').textContent = t.planDesc;
  document.getElementById('contributeTitle').textContent = t.contributeTitle;
  document.getElementById('contributeDesc').textContent = t.contributeDesc;
  document.getElementById('contributeCard1Title').textContent = t.contributeCard1Title;
  document.getElementById('contributeCard1Desc').textContent = t.contributeCard1Desc;
  document.getElementById('contributeCard2Title').textContent = t.contributeCard2Title;
  document.getElementById('contributeCard2Desc').textContent = t.contributeCard2Desc;
  document.getElementById('contributeCard3Title').textContent = t.contributeCard3Title;
  document.getElementById('contributeCard3Desc').textContent = t.contributeCard3Desc;
  document.getElementById('contributeCard4Title').textContent = t.contributeCard4Title;
  document.getElementById('contributeCard4Desc').textContent = t.contributeCard4Desc;
  document.getElementById('contributeBtnText').textContent = t.contributeBtnText;
  document.getElementById('contributeEmailBtnText').textContent = t.contributeEmailBtnText;
  document.getElementById('contributeEmailLabel').textContent = t.contributeEmailLabel;
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

// ===== Business Schools =====
function initBSchoolFilters() {
  // Populate school filter
  const schoolFilter = document.getElementById('bschoolFilter');
  BSCHOOLS.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.school_short;
    opt.textContent = s.school_cn + ' / ' + s.school_en;
    schoolFilter.appendChild(opt);
  });
  // Populate category filter
  const catFilter = document.getElementById('bschoolCatFilter');
  Object.keys(BSCHOOL_CATS).forEach(key => {
    const opt = document.createElement('option');
    opt.value = key;
    opt.textContent = BSCHOOL_CATS[key].cn + ' / ' + BSCHOOL_CATS[key].en;
    catFilter.appendChild(opt);
  });
}

function renderBSchools(filterText, filterSchool, filterCat) {
  const grid = document.getElementById('bschoolGrid');
  const isEn = currentLang === 'en';
  let allCourses = [];

  BSCHOOLS.forEach(school => {
    school.courses.forEach(c => {
      allCourses.push({ ...c, school_cn: school.school_cn, school_en: school.school_en, school_short: school.school_short });
    });
  });

  if (filterText) {
    const ft = filterText.toLowerCase();
    allCourses = allCourses.filter(c =>
      c.title_cn.toLowerCase().includes(ft) ||
      c.title_en.toLowerCase().includes(ft) ||
      c.school_cn.toLowerCase().includes(ft) ||
      c.school_en.toLowerCase().includes(ft)
    );
  }
  if (filterSchool && filterSchool !== 'all') {
    allCourses = allCourses.filter(c => c.school_short === filterSchool);
  }
  if (filterCat && filterCat !== 'all') {
    allCourses = allCourses.filter(c => c.cat === filterCat);
  }

  document.getElementById('bschoolResultCount').textContent = allCourses.length + ' ' + I18N[currentLang].results;

  if (allCourses.length === 0) {
    grid.innerHTML = '<div class="no-results">' + I18N[currentLang].noResults + '</div>';
    return;
  }

  grid.innerHTML = allCourses.map(c => {
    const title = isEn ? c.title_en : c.title_cn;
    const cat = isEn ? c.cat_en : c.cat_cn;
    const desc = isEn ? c.desc_en : c.desc_cn;
    const school = isEn ? c.school_en : c.school_cn;
    return `
      <div class="course-card bschool-card" data-cat="${c.cat}">
        <div class="course-num">${c.id}</div>
        <div class="course-cat">${cat}</div>
        <h3>${title}</h3>
        <div class="course-en">${isEn ? c.title_cn : c.title_en}</div>
        <div class="bschool-name">🎓 ${school}</div>
        <div class="course-desc">${desc}</div>
      </div>
    `;
  }).join('');
}

function filterBSchools() {
  const text = document.getElementById('bschoolSearch').value;
  const school = document.getElementById('bschoolFilter').value;
  const cat = document.getElementById('bschoolCatFilter').value;
  renderBSchools(text, school, cat);
}

// ===== Render Energy Courses =====
function renderEnergyCourses(filterText) {
  const grid = document.getElementById('energyGrid');
  const isEn = currentLang === 'en';
  let courses = COURSES.filter(c => c.cat === 'green');

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
