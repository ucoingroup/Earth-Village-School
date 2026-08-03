// ============================================
// Earth Village Business School - Main App Logic V4
// 8 Sections: Courses, B-Schools, Energy, Books, Wisdom, Plan, Awakening, Contribute
// 7 Languages: zh, en, fr, es, ar, ru, my
// ============================================

// ===== State =====
let currentLang = 'zh';
let currentSection = 'courses';
let currentTheme = 'cosmic';

// ===== Use i18n.js I18N if available, otherwise fall back to built-in =====
if (typeof window.I18N !== 'undefined') {
  // i18n.js already defined window.I18N with all keys
  // Use it directly by reference
}

// ===== Language Labels =====
const LANG_LABELS = {
  zh: '🇨🇳 中文',
  en: '🇬🇧 English',
  fr: '🇫🇷 Français',
  es: '🇪🇸 Español',
  ar: '🇸🇦 العربية',
  ru: '🇷🇺 Русский',
  my: '🇲🇲 မြန်မာ'
};

const LANG_HTML_LANG = {
  zh: 'zh-CN', en: 'en', fr: 'fr', es: 'es', ar: 'ar', ru: 'ru', my: 'my'
};

// ===== I18n Strings =====
// If i18n.js is loaded, use its more complete I18N; otherwise use built-in fallback
const I18N = (typeof window.I18N !== 'undefined') ? window.I18N : {
  zh: {
    courses: "100门公开课", bschools: "全球商学院", energy: "能源学院",
    books: "100本能源书籍", wisdom: "智慧书库", plan: "100天计划",
    awakening: "文明觉醒", contribute: "共建共享", aiTools: "人工智能工具", skills: "商学院技能",
    coursesLabel: "公开课程", categoriesLabel: "课程板块", yearsLabel: "年视野", langLabel: "7种语言",
    bschoolsLabel: "商学院", bschoolCoursesLabel: "精选课程", bschoolCatsLabel: "课程领域",
    wisdomBooksLabel: "经典书籍", wisdomCatsLabel: "维度分类", wisdomLangsLabel: "多语言",
    awakeningDimsLabel: "维度变化", awakeningPhasesLabel: "觉醒阶段", awakeningFutureLabel: "未来可能",
    aiToolsCount: "人工智能系统", aiToolsFree: "免费额度", aiToolsLangs: "语言支持",
    allCats: "全部分类", allCats2: "全部领域", allCats3: "全部分类", allSchools: "全部学校",
    searchPlaceholder: "搜索课程名称、关键词...",
    bschoolSearchPlaceholder: "搜索学校或课程...",
    energySearchPlaceholder: "搜索能源课程...",
    bookSearchPlaceholder: "搜索书名、作者...",
    wisdomSearchPlaceholder: "搜索书名、作者...",
    heroTitle: "地球村商学院 · 100门公开课",
    heroDesc: "面向地球村人类文明的100门公开课程，融合高校经管课程资源，以商人视角重新设计。涵盖文明商道哲学、国际贸易跨境实业、人本组织社群治理、绿色可持续商业、全球金融风控与碳硅共生人机协同六大板块。碳基定方向，硅基做执行，碳硅共生，服务全球海外华商、新能源跨境从业者。",
    bschoolsTitle: "全球十大商学院 · 300门精选课程",
    bschoolsDesc: "整合全球顶尖10所商学院的300门精选课程，涵盖战略管理、金融投资、市场营销、领导力、创业创新、数据分析、全球化运营等领域。为地球村学员提供世界级商科教育资源，与地球村商学院100门课程互为补充。",
    energyTitle: "地球村能源学院",
    energyDesc: "面向全球人类自学推荐的能源公开课程，涵盖可再生能源、核能、氢能、储能、智能电网、碳管理、太空能源、石油天然气、能源地缘政治与气候变化等前沿领域。碳基文明的能源转型之路，也是通向星际文明的基石。",
    booksTitle: "100本能源行业书籍",
    booksDesc: "为海外华商精选的100本能源行业书籍，覆盖能源通史、石油天然气、可再生能源、核能、氢能、太空能源、能源投资与商业管理。",
    wisdomTitle: "🧠 地球村智慧书库 · 60本经典",
    wisdomDesc: "人类文明的智慧结晶，60本影响世界的经典著作，涵盖决策与判断、人际与社会、自我成长与心态、经济规律洞察、历史与文明、底层逻辑认知六大维度。每一本都是照亮前行之路的灯塔，为地球村公民提供深邃的思想资源。",
    planTitle: "100天自学计划表",
    planDesc: "精简版100天自学计划，10个阶段循序渐进，从经济学基础到星际文明，构建面向未来的知识体系。",
    awakeningTitle: "🌅 地球村人类文明觉醒",
    awakeningDesc: "当人类文明从沉睡中觉醒，会发生什么？从零和博弈到正和共生，从无限增长到可持续发展，从地球封闭到星际开放——文明觉醒不是一场革命，而是人类意识的一次集体跃迁。",
    contributeTitle: "🤝 共建共享公开课",
    contributeDesc: "地球村网友们，一起来共建共享公开课！这是一个开放的公益教育平台，每个人都可以贡献知识、分享课程、参与编辑。无论你是行业专家、学者、教师，还是热心的学习者，都欢迎加入我们的公益编辑团队，共同打造面向全球人类的公开课。",
    aiToolsTitle: "🤖 人工智能工具集成平台",
    aiToolsDesc: "集成全球前10大开源人工智能系统的免费额度接口，为地球村学员提供智能学习助手。无需付费即可使用深度求索、通义千问、Llama、Gemini等顶尖人工智能模型，辅助课程学习、知识问答、内容创作与多语言翻译。",
    contributeStats1: "公开课目标", contributeStats2: "共建者", contributeStats3: "全球开放",
    contributeCard1Title: "贡献课程内容", contributeCard1Desc: "撰写新课程、优化现有课程内容、翻译多语言版本。每一份贡献都会让地球村的学习资源更丰富。",
    contributeCard2Title: "审校与编辑", contributeCard2Desc: "审校课程内容的准确性、时效性，确保知识质量。我们相信群体智慧能打造最好的公开课。",
    contributeCard3Title: "推荐选题", contributeCard3Desc: "推荐你认为重要的课程主题，帮助地球村课程体系覆盖更多前沿领域和实用知识。",
    contributeCard4Title: "多语言翻译", contributeCard4Desc: "帮助将课程翻译成更多语言，让地球村的每一个角落都能无障碍学习。中文、英语、法语、西班牙语、阿拉伯语、俄语、缅甸语。",
    contributeBtnText: "🌐 访问共建共享公开课平台", contributeEmailBtnText: "✉️ 联系公益编辑邮箱",
    contributeEmailLabel: "公益编辑邮箱：",
    aiToolsBtnText: "🚀 进入人工智能工具平台", aiToolsNote: "支持文本对话、图像生成、语音转录等多种人工智能能力",
    footerTitle: "🔗 地球村生态链接", courseDetail: "课程详情",
    coreTopics: "核心知识点", learningGoals: "学习目标", detailContent: "课程详情",
    results: "条结果", noResults: "未找到匹配结果，请尝试其他关键词。",
    expand: "展开", collapse: "收起", brandSubtitle: "地球村商学院 · 100门公开课",
    readMore: "查看详情", awakeningIntro: "文明觉醒导言", awakeningPhasesTitle: "觉醒四阶段",
    awakeningConclusionTitle: "结语",
    cat_philosophy: "🧭 文明商道哲学",
    cat_trade: "🌍 国际贸易·跨境实业",
    cat_org: "👥 人本组织·社群治理",
    cat_green: "🌿 绿色可持续商业",
    cat_finance: "💰 全球金融·风控",
    cat_symbiosis: "🤝 碳硅共生·人机协同",
    cat_decision: "🧩 决策与判断",
    cat_interpersonal: "👥 人际与社会",
    cat_growth: "🌱 自我成长与心态",
    cat_economics2: "💰 经济规律洞察",
    cat_history: "📜 历史与文明",
    cat_cognition: "🔬 底层逻辑认知",
    booksCount: "书籍",
    booksCats: "分类",
    planDays: "天数",
    planPhases: "阶段",
    footerCopy: "© 2024-2026 地球村商学院",
    footerSub: "面向多行星文明的开放知识",
    themeCosmic: "星际深空",
    themeOasis: "地球绿洲",
    themeClassic: "经典商务",
    aiToolDesc1: "深度求索，每月500万字符免费额度",
    aiToolDesc2: "阿里云通义千问，100万字符新用户免费",
    aiToolDesc3: "Meta开源大模型，Groq平台每日14,400次请求",
    aiToolDesc4: "谷歌Gemini，Flash模型每日1500次免费",
    aiToolDesc5: "智谱人工智能，GLM-4-Flash完全免费",
    aiToolDesc6: "法国Mistral人工智能，每月50万字符免费",
    aiToolDesc7: "人工智能图像生成，每月15张免费+本地部署",
    aiToolDesc8: "OpenAI语音转录，Groq平台免费使用"
  },
  en: {
    courses: "100 Courses", bschools: "Global B-Schools", energy: "Energy Academy",
    books: "100 Energy Books", wisdom: "Wisdom Library", plan: "100-Day Plan",
    awakening: "Awakening", contribute: "Co-Build", aiTools: "AI Tools", skills: "B-School Skills",
    coursesLabel: "Open Courses", categoriesLabel: "Categories", yearsLabel: "Years Vision", langLabel: "7 Languages",
    bschoolsLabel: "B-Schools", bschoolCoursesLabel: "Courses", bschoolCatsLabel: "Fields",
    wisdomBooksLabel: "Classics", wisdomCatsLabel: "Dimensions", wisdomLangsLabel: "Multilingual",
    awakeningDimsLabel: "Dimensions", awakeningPhasesLabel: "Phases", awakeningFutureLabel: "Future",
    aiToolsCount: "AI Systems", aiToolsFree: "Free Tier", aiToolsLangs: "Languages",
    allCats: "All Categories", allCats2: "All Fields", allCats3: "All Categories", allSchools: "All Schools",
    searchPlaceholder: "Search course names, keywords...",
    bschoolSearchPlaceholder: "Search schools or courses...",
    energySearchPlaceholder: "Search energy courses...",
    bookSearchPlaceholder: "Search book titles, authors...",
    wisdomSearchPlaceholder: "Search book titles, authors...",
    heroTitle: "Earth Village Business School · 100 Open Courses",
    heroDesc: "100 open courses for Earth Village human civilization, integrating university business curriculum resources redesigned from a merchant perspective. Six categories: Civilization Philosophy, International Trade, Human-Centered Organization, Green Sustainable Business, Global Finance, and Carbon-Silicon Symbiosis.",
    bschoolsTitle: "Top 10 Global Business Schools · 300 Selected Courses",
    bschoolsDesc: "Integrating 300 selected courses from the world's top 10 business schools, covering strategic management, finance, marketing, leadership, entrepreneurship, analytics, and global operations.",
    energyTitle: "Earth Village Energy Academy",
    energyDesc: "Self-study energy courses for global citizens, covering renewable energy, nuclear, hydrogen, storage, smart grid, carbon management, space energy, oil & gas, energy geopolitics, and climate change.",
    booksTitle: "100 Energy Books for Overseas Chinese Business Leaders",
    booksDesc: "100 curated energy books covering energy history, oil & gas, renewables, nuclear, hydrogen, space energy, energy investment and business management.",
    wisdomTitle: "🧠 Earth Village Wisdom Library · 60 Classics",
    wisdomDesc: "The crystalline wisdom of human civilization - 60 classic works that shaped the world, covering Decision-Making, Interpersonal & Social, Self-Growth, Economic Insight, History & Civilization, and Cognitive Foundations.",
    planTitle: "100-Day Self-Study Plan",
    planDesc: "A streamlined 100-day study plan in 10 progressive phases, from economics fundamentals to interstellar civilization.",
    awakeningTitle: "🌅 Earth Village Human Civilization Awakening",
    awakeningDesc: "When human civilization awakens from slumber, what happens? From zero-sum to positive-sum, from infinite growth to sustainability, from Earth-bound to interstellar - awakening is not a revolution but a collective leap of consciousness.",
    contributeTitle: "🤝 Co-Build & Share Open Courses",
    contributeDesc: "Earth Village netizens, let's co-build and share open courses together! This is an open public education platform where everyone can contribute knowledge, share courses, and participate in editing.",
    aiToolsTitle: "🤖 AI Tools Integration Platform",
    aiToolsDesc: "Integrating free-tier APIs from the world's top 10 open-source AI systems, providing intelligent learning assistants for Earth Village students. Use DeepSeek, Qwen, Llama, Gemini and other top AI models at no cost for course learning, Q&A, content creation and multilingual translation.",
    contributeStats1: "Courses Goal", contributeStats2: "Contributors", contributeStats3: "Global Open",
    contributeCard1Title: "Contribute Course Content", contributeCard1Desc: "Write new courses, optimize existing content, translate multilingual versions. Every contribution enriches Earth Village's learning resources.",
    contributeCard2Title: "Review & Edit", contributeCard2Desc: "Review course content for accuracy and timeliness to ensure knowledge quality.",
    contributeCard3Title: "Suggest Topics", contributeCard3Desc: "Recommend course topics you think are important, helping Earth Village cover more frontier fields.",
    contributeCard4Title: "Multi-language Translation", contributeCard4Desc: "Help translate courses into more languages: Chinese, English, French, Spanish, Arabic, Russian, Burmese.",
    contributeBtnText: "🌐 Visit Co-Build Platform", contributeEmailBtnText: "✉️ Contact Public Editor Email",
    contributeEmailLabel: "Public Editor Email: ",
    aiToolsBtnText: "🚀 Enter AI Tools Platform", aiToolsNote: "Support text chat, image generation, voice transcription and more AI capabilities",
    footerTitle: "🔗 Earth Village Ecosystem Links", courseDetail: "Course Details",
    coreTopics: "Core Topics", learningGoals: "Learning Goals", detailContent: "Course Details",
    results: "results", noResults: "No matching results found. Try different keywords.",
    expand: "Expand", collapse: "Collapse", brandSubtitle: "Earth Village · 100 Open Courses",
    readMore: "Read More", awakeningIntro: "Awakening Introduction", awakeningPhasesTitle: "Four Phases of Awakening",
    awakeningConclusionTitle: "Conclusion",
    cat_philosophy: "🧭 Civilization Philosophy",
    cat_trade: "🌍 International Trade",
    cat_org: "👥 Human-Centered Organization",
    cat_green: "🌿 Green Sustainable Business",
    cat_finance: "💰 Global Finance & Risk",
    cat_symbiosis: "🤝 Carbon-Silicon Symbiosis",
    cat_decision: "🧩 Decision-Making",
    cat_interpersonal: "👥 Interpersonal & Social",
    cat_growth: "🌱 Self-Growth",
    cat_economics2: "💰 Economic Insight",
    cat_history: "📜 History & Civilization",
    cat_cognition: "🔬 Cognitive Foundations",
    booksCount: "Books",
    booksCats: "Categories",
    planDays: "Days",
    planPhases: "Phases",
    footerCopy: "© 2024-2026 Earth Village Business School",
    footerSub: "Open Knowledge for a Multi-Planetary Civilization",
    themeCosmic: "Cosmic",
    themeOasis: "Oasis",
    themeClassic: "Classic",
    aiToolDesc1: "DeepSeek, 5M tokens/month free",
    aiToolDesc2: "Alibaba Qwen, 1M tokens free for new users",
    aiToolDesc3: "Meta open-source LLM, 14,400 requests/day via Groq",
    aiToolDesc4: "Google Gemini, 1500 free requests/day",
    aiToolDesc5: "Zhipu AI, GLM-4-Flash completely free",
    aiToolDesc6: "Mistral AI (France), 500K tokens/month free",
    aiToolDesc7: "AI image generation, 15 free images/month + local deploy",
    aiToolDesc8: "OpenAI Whisper, free via Groq platform"
  },
  fr: {
    courses: "100 Cours", bschools: "Ecoles de Commerce", energy: "Académie de l'Énergie",
    books: "100 Livres sur l'Énergie", wisdom: "Bibliothèque de Sagesse", plan: "Plan de 100 Jours",
    awakening: "Éveil", contribute: "Co-Construire", aiTools: "Outils AI", skills: "Compétences B-School",
    coursesLabel: "Cours Ouverts", categoriesLabel: "Catégories", yearsLabel: "Ans de Vision", langLabel: "7 Langues",
    bschoolsLabel: "Ecoles", bschoolCoursesLabel: "Cours", bschoolCatsLabel: "Domaines",
    wisdomBooksLabel: "Classiques", wisdomCatsLabel: "Dimensions", wisdomLangsLabel: "Multilingue",
    awakeningDimsLabel: "Dimensions", awakeningPhasesLabel: "Phases", awakeningFutureLabel: "Futur",
    aiToolsCount: "Systèmes AI", aiToolsFree: "Gratuit", aiToolsLangs: "Langues",
    allCats: "Toutes les Catégories", allCats2: "Tous les Domaines", allCats3: "Toutes les Catégories", allSchools: "Toutes les Écoles",
    searchPlaceholder: "Rechercher des cours, mots-clés...",
    bschoolSearchPlaceholder: "Rechercher des écoles ou des cours...",
    energySearchPlaceholder: "Rechercher des cours sur l'énergie...",
    bookSearchPlaceholder: "Rechercher des titres, auteurs...",
    wisdomSearchPlaceholder: "Rechercher des titres, auteurs...",
    heroTitle: "École de Commerce du Village Terre · 100 Cours Ouverts",
    heroDesc: "100 cours ouverts pour la civilisation humaine du Village Terre, intégrant des ressources de programmes universitaires redessinées d'une perspective marchande. Six catégories: Philosophie de Civilisation, Commerce International, Organisation Humaniste, Commerce Vert Durable, Finance Mondiale, Symbiose Carbone-Silicium.",
    bschoolsTitle: "Top 10 Écoles de Commerce Mondiales · 300 Cours Sélectionnés",
    bschoolsDesc: "Intégration de 300 cours sélectionnés des 10 meilleures écoles de commerce du monde, couvrant la gestion stratégique, la finance, le marketing, le leadership, l'entrepreneuriat, l'analyse et les opérations mondiales.",
    energyTitle: "Académie de l'Énergie du Village Terre",
    energyDesc: "Cours d'auto-apprentissage sur l'énergie pour les citoyens du monde, couvrant les énergies renouvelables, le nucléaire, l'hydrogène, le stockage, les réseaux intelligents, la gestion du carbone, l'énergie spatiale et la géopolitique de l'énergie.",
    booksTitle: "100 Livres sur l'Énergie pour les Chefs d'Entreprise Chinois d'Outre-mer",
    booksDesc: "100 livres sélectionnés sur l'énergie couvrant l'histoire de l'énergie, le pétrole et le gaz, les renouvelables, le nucléaire, l'hydrogène, l'énergie spatiale et la gestion des investissements énergétiques.",
    wisdomTitle: "🧠 Bibliothèque de Sagesse du Village Terre · 60 Classiques",
    wisdomDesc: "La cristallisation de la sagesse de la civilisation humaine - 60 œuvres classiques qui ont façonné le monde, couvrant la Prise de Décision, les Relations Interpersonnelles, le Développement Personnel, l'Insight Économique, l'Histoire et la Civilisation, et les Fondations Cognitives.",
    planTitle: "Plan d'Auto-Apprentissage de 100 Jours",
    planDesc: "Un plan d'étude simplifié de 100 jours en 10 phases progressives, des fondamentaux économiques à la civilisation interstellaire.",
    awakeningTitle: "🌅 Éveil de la Civilisation Humaine du Village Terre",
    awakeningDesc: "Quand la civilisation humaine s'éveille du sommeil, que se passe-t-il? Du jeu à somme nulle à la symbiose à somme positive, de la croissance infinie à la durabilité, de la Terre à l'interstellaire - l'éveil est un saut collectif de conscience.",
    contributeTitle: "🤝 Co-Construire et Partager des Cours Ouverts",
    contributeDesc: "Netizens du Village Terre, co-construisons et partageons des cours ouverts ensemble! C'est une plateforme d'éducation publique ouverte où chacun peut contribuer.",
    aiToolsTitle: "🤖 Plateforme d'Intégration d'Outils AI",
    aiToolsDesc: "Intégration des API gratuites des 10 principaux systèmes AI open-source mondiaux, fournissant des assistants d'apprentissage intelligents pour les étudiants du Village Terre. Utilisez DeepSeek, Qwen, Llama, Gemini et d'autres modèles AI de premier plan gratuitement pour l'apprentissage des cours, les questions-réponses, la création de contenu et la traduction multilingue.",
    contributeStats1: "Objectif de Cours", contributeStats2: "Contributeurs", contributeStats3: "Ouvert Mondial",
    contributeCard1Title: "Contribuer au Contenu", contributeCard1Desc: "Rédiger de nouveaux cours, optimiser le contenu existant, traduire en versions multilingues.",
    contributeCard2Title: "Réviser et Éditer", contributeCard2Desc: "Réviser l'exactitude et la pertinence du contenu des cours pour assurer la qualité du savoir.",
    contributeCard3Title: "Suggérer des Sujets", contributeCard3Desc: "Recommander des thèmes de cours importants pour aider le Village Terre à couvrir plus de domaines.",
    contributeCard4Title: "Traduction Multilingue", contributeCard4Desc: "Aider à traduire les cours en plus de langues: chinois, anglais, français, espagnol, arabe, russe, birman.",
    contributeBtnText: "🌐 Visiter la Plateforme", contributeEmailBtnText: "✉️ Contacter l'Éditeur",
    contributeEmailLabel: "Email de l'Éditeur: ",
    aiToolsBtnText: "🚀 Entrer dans la Plateforme d'Outils AI", aiToolsNote: "Supporte chat texte, génération d'images, transcription vocale et autres capacités AI",
    footerTitle: "🔗 Liens de l'Écosystème du Village Terre", courseDetail: "Détails du Cours",
    coreTopics: "Sujets Centraux", learningGoals: "Objectifs d'Apprentissage", detailContent: "Détails",
    results: "résultats", noResults: "Aucun résultat trouvé. Essayez d'autres mots-clés.",
    expand: "Développer", collapse: "Réduire", brandSubtitle: "Village Terre · 100 Cours Ouverts",
    readMore: "Lire Plus", awakeningIntro: "Introduction à l'Éveil", awakeningPhasesTitle: "Quatre Phases d'Éveil",
    awakeningConclusionTitle: "Conclusion",
    cat_philosophy: "🧭 Civilization Philosophy",
    cat_trade: "🌍 International Trade",
    cat_org: "👥 Human-Centered Organization",
    cat_green: "🌿 Green Sustainable Business",
    cat_finance: "💰 Global Finance & Risk",
    cat_symbiosis: "🤝 Carbon-Silicon Symbiosis",
    cat_decision: "🧩 Decision-Making",
    cat_interpersonal: "👥 Interpersonal & Social",
    cat_growth: "🌱 Self-Growth",
    cat_economics2: "💰 Economic Insight",
    cat_history: "📜 History & Civilization",
    cat_cognition: "🔬 Cognitive Foundations",
    booksCount: "Books",
    booksCats: "Categories",
    planDays: "Days",
    planPhases: "Phases",
    footerCopy: "© 2024-2026 Earth Village Business School",
    footerSub: "Open Knowledge for a Multi-Planetary Civilization",
    themeCosmic: "Cosmic",
    themeOasis: "Oasis",
    themeClassic: "Classic",
    aiToolDesc1: "DeepSeek, 5M tokens/month free",
    aiToolDesc2: "Alibaba Qwen, 1M tokens free for new users",
    aiToolDesc3: "Meta open-source LLM, 14,400 requests/day via Groq",
    aiToolDesc4: "Google Gemini, 1500 free requests/day",
    aiToolDesc5: "Zhipu AI, GLM-4-Flash completely free",
    aiToolDesc6: "Mistral AI (France), 500K tokens/month free",
    aiToolDesc7: "AI image generation, 15 free images/month + local deploy",
    aiToolDesc8: "OpenAI Whisper, free via Groq platform"
  },
  es: {
    courses: "100 Cursos", bschools: "Escuelas de Negocios", energy: "Academia de Energía",
    books: "100 Libros de Energía", wisdom: "Biblioteca de Sabiduría", plan: "Plan de 100 Días",
    awakening: "Despertar", contribute: "Co-Construir", aiTools: "Herramientas AI", skills: "Habilidades B-School",
    coursesLabel: "Cursos Abiertos", categoriesLabel: "Categorías", yearsLabel: "Años de Visión", langLabel: "7 Idiomas",
    bschoolsLabel: "Escuelas", bschoolCoursesLabel: "Cursos", bschoolCatsLabel: "Campos",
    wisdomBooksLabel: "Clásicos", wisdomCatsLabel: "Dimensiones", wisdomLangsLabel: "Multilingüe",
    awakeningDimsLabel: "Dimensiones", awakeningPhasesLabel: "Fases", awakeningFutureLabel: "Futuro",
    aiToolsCount: "Sistemas AI", aiToolsFree: "Gratis", aiToolsLangs: "Idiomas",
    allCats: "Todas las Categorías", allCats2: "Todos los Campos", allCats3: "Todas las Categorías", allSchools: "Todas las Escuelas",
    searchPlaceholder: "Buscar cursos, palabras clave...",
    bschoolSearchPlaceholder: "Buscar escuelas o cursos...",
    energySearchPlaceholder: "Buscar cursos de energía...",
    bookSearchPlaceholder: "Buscar títulos, autores...",
    wisdomSearchPlaceholder: "Buscar títulos, autores...",
    heroTitle: "Escuela de Negocios del Pueblo Tierra · 100 Cursos Abiertos",
    heroDesc: "100 cursos abiertos para la civilización humana del Pueblo Tierra, integrando recursos de planes de estudio universitarios rediseñados desde una perspectiva mercantil. Seis categorías: Filosofía de Civilización, Comercio Internacional, Organización Humanista, Negocios Verdes Sostenibles, Finanzas Globales, Simbiosis Carbono-Silicio.",
    bschoolsTitle: "Top 10 Escuelas de Negocios Globales · 300 Cursos Seleccionados",
    bschoolsDesc: "Integrando 300 cursos seleccionados de las 10 mejores escuelas de negocios del mundo, cubriendo gestión estratégica, finanzas, marketing, liderazgo, emprendimiento, análisis y operaciones globales.",
    energyTitle: "Academia de Energía del Pueblo Tierra",
    energyDesc: "Cursos de autoestudio de energía para ciudadanos globales, cubriendo energías renovables, nuclear, hidrógeno, almacenamiento, redes inteligentes, gestión de carbono, energía espacial, petróleo y gas, geopolítica energética y cambio climático.",
    booksTitle: "100 Libros de Energía para Líderes de Negocios Chinos en el Extranjero",
    booksDesc: "100 libros seleccionados sobre energía cubriendo historia energética, petróleo y gas, renovables, nuclear, hidrógeno, energía espacial, inversión energética y gestión empresarial.",
    wisdomTitle: "🧠 Biblioteca de Sabiduría del Pueblo Tierra · 60 Clásicos",
    wisdomDesc: "La cristalización de la sabiduría de la civilización humana - 60 obras clásicas que dieron forma al mundo, cubriendo Toma de Decisiones, Relaciones Interpersonales, Crecimiento Personal, Perspicacia Económica, Historia y Civilización, y Fundamentos Cognitivos.",
    planTitle: "Plan de Autoestudio de 100 Días",
    planDesc: "Un plan de estudio simplificado de 100 días en 10 fases progresivas, desde fundamentos económicos hasta civilización interestelar.",
    awakeningTitle: "🌅 Despertar de la Civilización Humana del Pueblo Tierra",
    awakeningDesc: "Cuando la civilización humana despierta del letargo, ¿qué sucede? De suma cero a simbiosis de suma positiva, de crecimiento infinito a sostenibilidad, de la Tierra a lo interestelar - el despertar es un salto colectivo de conciencia.",
    contributeTitle: "🤝 Co-Construir y Compartir Cursos Abiertos",
    contributeDesc: "Netizens del Pueblo Tierra, ¡co-construyamos y compartamos cursos abiertos juntos! Esta es una plataforma de educación pública abierta donde todos pueden contribuir.",
    aiToolsTitle: "🤖 Plataforma de Integración de Herramientas AI",
    aiToolsDesc: "Integración de APIs gratuitas de los 10 principales sistemas AI de código abierto del mundo, proporcionando asistentes de aprendizaje inteligentes para los estudiantes del Pueblo Tierra. Use DeepSeek, Qwen, Llama, Gemini y otros modelos AI de primer nivel de forma gratuita para el aprendizaje de cursos, preguntas y respuestas, creación de contenido y traducción multilingüe.",
    contributeStats1: "Meta de Cursos", contributeStats2: "Colaboradores", contributeStats3: "Apertura Global",
    contributeCard1Title: "Contribuir Contenido", contributeCard1Desc: "Escribir nuevos cursos, optimizar contenido existente, traducir versiones multilingües.",
    contributeCard2Title: "Revisar y Editar", contributeCard2Desc: "Revisar la precisión y pertinencia del contenido para asegurar la calidad del conocimiento.",
    contributeCard3Title: "Sugerir Temas", contributeCard3Desc: "Recomendar temas de cursos importantes para ayudar a cubrir más áreas de frontera.",
    contributeCard4Title: "Traducción Multilingüe", contributeCard4Desc: "Ayudar a traducir cursos a más idiomas: chino, inglés, francés, español, árabe, ruso, birmano.",
    contributeBtnText: "🌐 Visitar Plataforma", contributeEmailBtnText: "✉️ Contactar Editor",
    contributeEmailLabel: "Email del Editor: ",
    aiToolsBtnText: "🚀 Entrar en la Plataforma de Herramientas AI", aiToolsNote: "Soporta chat de texto, generación de imágenes, transcripción de voz y más capacidades AI",
    footerTitle: "🔗 Enlaces del Ecosistema del Pueblo Tierra", courseDetail: "Detalles del Curso",
    coreTopics: "Temas Centrales", learningGoals: "Objetivos de Aprendizaje", detailContent: "Detalles",
    results: "resultados", noResults: "No se encontraron resultados. Pruebe otras palabras clave.",
    expand: "Expandir", collapse: "Contraer", brandSubtitle: "Pueblo Tierra · 100 Cursos Abiertos",
    readMore: "Leer Más", awakeningIntro: "Introducción al Despertar", awakeningPhasesTitle: "Cuatro Fases del Despertar",
    awakeningConclusionTitle: "Conclusión",
    cat_philosophy: "🧭 Civilization Philosophy",
    cat_trade: "🌍 International Trade",
    cat_org: "👥 Human-Centered Organization",
    cat_green: "🌿 Green Sustainable Business",
    cat_finance: "💰 Global Finance & Risk",
    cat_symbiosis: "🤝 Carbon-Silicon Symbiosis",
    cat_decision: "🧩 Decision-Making",
    cat_interpersonal: "👥 Interpersonal & Social",
    cat_growth: "🌱 Self-Growth",
    cat_economics2: "💰 Economic Insight",
    cat_history: "📜 History & Civilization",
    cat_cognition: "🔬 Cognitive Foundations",
    booksCount: "Books",
    booksCats: "Categories",
    planDays: "Days",
    planPhases: "Phases",
    footerCopy: "© 2024-2026 Earth Village Business School",
    footerSub: "Open Knowledge for a Multi-Planetary Civilization",
    themeCosmic: "Cosmic",
    themeOasis: "Oasis",
    themeClassic: "Classic",
    aiToolDesc1: "DeepSeek, 5M tokens/month free",
    aiToolDesc2: "Alibaba Qwen, 1M tokens free for new users",
    aiToolDesc3: "Meta open-source LLM, 14,400 requests/day via Groq",
    aiToolDesc4: "Google Gemini, 1500 free requests/day",
    aiToolDesc5: "Zhipu AI, GLM-4-Flash completely free",
    aiToolDesc6: "Mistral AI (France), 500K tokens/month free",
    aiToolDesc7: "AI image generation, 15 free images/month + local deploy",
    aiToolDesc8: "OpenAI Whisper, free via Groq platform"
  },
  ar: {
    courses: "100 دورة", bschools: "مدارس الأعمال", energy: "أكاديمية الطاقة",
    books: "100 كتاب طاقة", wisdom: "مكتبة الحكمة", plan: "خطة 100 يوم",
    awakening: "الصحوة", contribute: "بناء مشترك", aiTools: "أدوات الذكاء الاصطناعي", skills: "مهارات مدرسة الأعمال",
    coursesLabel: "دورات مفتوحة", categoriesLabel: "الفئات", yearsLabel: "رؤية سنوات", langLabel: "7 لغات",
    bschoolsLabel: "المدارس", bschoolCoursesLabel: "الدورات", bschoolCatsLabel: "المجالات",
    wisdomBooksLabel: "كلاسيكيات", wisdomCatsLabel: "الأبعاد", wisdomLangsLabel: "متعدد اللغات",
    awakeningDimsLabel: "الأبعاد", awakeningPhasesLabel: "المراحل", awakeningFutureLabel: "المستقبل",
    aiToolsCount: "أنظمة الذكاء الاصطناعي", aiToolsFree: "مجاني", aiToolsLangs: "اللغات",
    allCats: "جميع الفئات", allCats2: "جميع المجالات", allCats3: "جميع الفئات", allSchools: "جميع المدارس",
    searchPlaceholder: "ابحث عن الدورات، الكلمات الرئيسية...",
    bschoolSearchPlaceholder: "ابحث عن المدارس أو الدورات...",
    energySearchPlaceholder: "ابحث عن دورات الطاقة...",
    bookSearchPlaceholder: "ابحث عن العناوين، المؤلفين...",
    wisdomSearchPlaceholder: "ابحث عن العناوين، المؤلفين...",
    heroTitle: "مدرسة قرية الأرض للأعمال · 100 دورة مفتوحة",
    heroDesc: "100 دورة مفتوحة لحضارة قرية الأرض البشرية، تدمج موارد المناهج الجامعية معاد تصميمها من منظور تجاري. ست فئات: فلسفة الحضارة، التجارة الدولية، التنظيم الإنساني، الأعمال الخضراء المستدامة، التمويل العالمي، التكافل الكربون-السيليكون.",
    bschoolsTitle: "أفضل 10 مدارس أعمال عالمية · 300 دورة مختارة",
    bschoolsDesc: "دمج 300 دورة مختارة من أفضل 10 مدارس أعمال في العالم، تغطي الإدارة الاستراتيجية، التمويل، التسويق، القيادة، ريادة الأعمال، التحليلات والعمليات العالمية.",
    energyTitle: "أكاديمية طاقة قرية الأرض",
    energyDesc: "دورات طاقة للتعلم الذاتي للمواطنين العالميين، تغطي الطاقة المتجددة، النووية، الهيدروجين، التخزين، الشبكات الذكية، إدارة الكربون، طاقة الفضاء، النفط والغاز، الجيوسياسة الطاقية والتغير المناخي.",
    booksTitle: "100 كتاب طاقة لرواد الأعمال الصينيين في الخارج",
    booksDesc: "100 كتاب مختار عن الطاقة يغطي تاريخ الطاقة، النفط والغاز، المتجددة، النووية، الهيدروجين، طاقة الفضاء، الاستثمار الطاقي والإدارة.",
    wisdomTitle: "🧠 مكتبة حكمة قرية الأرض · 60 كتاب كلاسيكي",
    wisdomDesc: "تبلور حكمة الحضارة الإنسانية - 60 عملاً كلاسيكياً شكلت العالم، تغطي صنع القرار، العلاقات الاجتماعية، النمو الذاتي، البصيرة الاقتصادية، التاريخ والحضارة، والأسس المعرفية.",
    planTitle: "خطة دراسة ذاتية لـ 100 يوم",
    planDesc: "خطة دراسة مبسطة لـ 100 يوم في 10 مراحل تقدمية، من أساسيات الاقتصاد إلى الحضارة بين النجوم.",
    awakeningTitle: "🌅 صحوة حضارة قرية الأرض البشرية",
    awakeningDesc: "عندما تستيقظ الحضارة الإنسانية من السبات، ماذا يحدث؟ من لعبة المجموع الصفري إلى التكافل الإيجابي، من النمو اللانهائي إلى الاستدامة، من الأرض إلى بين النجوم - الصحوة قفزة جماعية في الوعي.",
    contributeTitle: "🤝 بناء ومشاركة الدورات المفتوحة",
    contributeDesc: "مواطنو قرية الأرض، دعونا نبني ونشارك الدورات المفتوحة معاً! هذه منصة تعليم عام مفتوحة يمكن للجميع المساهمة فيها.",
    aiToolsTitle: "🤖 منصة تكامل أدوات الذكاء الاصطناعي",
    aiToolsDesc: "تكامل واجهات برمجة التطبيقات المجانية من أفضل 10 أنظمة ذكاء اصطناعي مفتوحة المصدر في العالم، مما يوفر مساعدين ذكيين للتعلم لطلاب قرية الأرض. استخدم DeepSeek وQwen وLlama وGemini ونماذج AI الأخرى الرائدة مجاناً للتعلم والأسئلة والإجابات وإنشاء المحتوى والترجمة متعددة اللغات.",
    contributeStats1: "هدف الدورات", contributeStats2: "المساهمون", contributeStats3: "انفتاح عالمي",
    contributeCard1Title: "المساهمة بالمحتوى", contributeCard1Desc: "كتابة دورات جديدة، تحسين المحتوى الحالي، ترجمة نسخ متعددة اللغات.",
    contributeCard2Title: "المراجعة والتحرير", contributeCard2Desc: "مراجعة دقة وحداثة المحتوى لضمان جودة المعرفة.",
    contributeCard3Title: "اقتراح المواضيع", contributeCard3Desc: "اقتراح مواضيع دورات مهمة للمساعدة في تغطية المزيد من المجالات.",
    contributeCard4Title: "الترجمة متعددة اللغات", contributeCard4Desc: "المساعدة في ترجمة الدورات: الصينية، الإنجليزية، الفرنسية، الإسبانية، العربية، الروسية، البورمية.",
    contributeBtnText: "🌐 زيارة المنصة", contributeEmailBtnText: "✉️ اتصل بالمحرر",
    contributeEmailLabel: "بريد المحرر: ",
    aiToolsBtnText: "🚀 الدخول إلى منصة أدوات AI", aiToolsNote: "يدعم المحادثة النصية وإنشاء الصور والتسجيل الصوتي وقدرات AI متعددة",
    footerTitle: "🔗 روابط نظام قرية الأرض", courseDetail: "تفاصيل الدورة",
    coreTopics: "المواضيع الأساسية", learningGoals: "أهداف التعلم", detailContent: "التفاصيل",
    results: "نتائج", noResults: "لم يتم العثور على نتائج. جرب كلمات رئيسية أخرى.",
    expand: "توسيع", collapse: "طي", brandSubtitle: "قرية الأرض · 100 دورة مفتوحة",
    readMore: "اقرأ المزيد", awakeningIntro: "مقدمة الصحوة", awakeningPhasesTitle: "أربع مراحل الصحوة",
    awakeningConclusionTitle: "الخاتمة",
    cat_philosophy: "🧭 Civilization Philosophy",
    cat_trade: "🌍 International Trade",
    cat_org: "👥 Human-Centered Organization",
    cat_green: "🌿 Green Sustainable Business",
    cat_finance: "💰 Global Finance & Risk",
    cat_symbiosis: "🤝 Carbon-Silicon Symbiosis",
    cat_decision: "🧩 Decision-Making",
    cat_interpersonal: "👥 Interpersonal & Social",
    cat_growth: "🌱 Self-Growth",
    cat_economics2: "💰 Economic Insight",
    cat_history: "📜 History & Civilization",
    cat_cognition: "🔬 Cognitive Foundations",
    booksCount: "Books",
    booksCats: "Categories",
    planDays: "Days",
    planPhases: "Phases",
    footerCopy: "© 2024-2026 Earth Village Business School",
    footerSub: "Open Knowledge for a Multi-Planetary Civilization",
    themeCosmic: "Cosmic",
    themeOasis: "Oasis",
    themeClassic: "Classic",
    aiToolDesc1: "DeepSeek, 5M tokens/month free",
    aiToolDesc2: "Alibaba Qwen, 1M tokens free for new users",
    aiToolDesc3: "Meta open-source LLM, 14,400 requests/day via Groq",
    aiToolDesc4: "Google Gemini, 1500 free requests/day",
    aiToolDesc5: "Zhipu AI, GLM-4-Flash completely free",
    aiToolDesc6: "Mistral AI (France), 500K tokens/month free",
    aiToolDesc7: "AI image generation, 15 free images/month + local deploy",
    aiToolDesc8: "OpenAI Whisper, free via Groq platform"
  },
  ru: {
    courses: "100 курсов", bschools: "Бизнес-школы", energy: "Энергетическая Академия",
    books: "100 книг по энергии", wisdom: "Библиотека Мудрости", plan: "План на 100 дней",
    awakening: "Пробуждение", contribute: "Со-создание", aiTools: "Инструменты ИИ", skills: "Навыки B-Школы",
    coursesLabel: "Открытые курсы", categoriesLabel: "Категории", yearsLabel: "Лет Видения", langLabel: "7 языков",
    bschoolsLabel: "Школы", bschoolCoursesLabel: "Курсы", bschoolCatsLabel: "Области",
    wisdomBooksLabel: "Классика", wisdomCatsLabel: "Измерения", wisdomLangsLabel: "Многоязычность",
    awakeningDimsLabel: "Измерения", awakeningPhasesLabel: "Фазы", awakeningFutureLabel: "Будущее",
    aiToolsCount: "Системы ИИ", aiToolsFree: "Бесплатно", aiToolsLangs: "Языки",
    allCats: "Все категории", allCats2: "Все области", allCats3: "Все категории", allSchools: "Все школы",
    searchPlaceholder: "Поиск курсов, ключевых слов...",
    bschoolSearchPlaceholder: "Поиск школ или курсов...",
    energySearchPlaceholder: "Поиск курсов по энергии...",
    bookSearchPlaceholder: "Поиск названий, авторов...",
    wisdomSearchPlaceholder: "Поиск названий, авторов...",
    heroTitle: "Бизнес-школа Деревни Земли · 100 открытых курсов",
    heroDesc: "100 открытых курсов для человеческой цивилизации Деревни Земли, объединяющих ресурсы университетских программ, переработанных с торговой точки зрения. Шесть категорий: Философия Цивилизации, Международная Торговля, Гуманистическая Организация, Зелёный Бизнес, Глобальные Финансы, Симбиоз Углерод-Кремний.",
    bschoolsTitle: "Топ-10 мировых бизнес-школ · 300 избранных курсов",
    bschoolsDesc: "Интеграция 300 избранных курсов из 10 лучших бизнес-школ мира, охватывающих стратегический менеджмент, финансы, маркетинг, лидерство, предпринимательство, аналитику и глобальные операции.",
    energyTitle: "Энергетическая Академия Деревни Земли",
    energyDesc: "Курсы по энергии для самостоятельного изучения, охватывающие возобновляемую энергию, ядерную, водород, хранение, умные сети, управление углеродом, космическую энергию, нефть и газ, энергетическую геополитику и изменение климата.",
    booksTitle: "100 книг по энергии для зарубежных китайских бизнес-лидеров",
    booksDesc: "100 отобранных книг по энергии, охватывающих историю энергетики, нефть и газ, возобновляемые источники, ядерную энергию, водород, космическую энергию, инвестиции и управление.",
    wisdomTitle: "🧠 Библиотека Мудрости Деревни Земли · 60 классик",
    wisdomDesc: "Кристаллизация мудрости человеческой цивилизации - 60 классических произведений, сформировавших мир, охватывающих принятие решений, межличностные отношения, саморазвитие, экономическое чутьё, историю и цивилизацию, когнитивные основы.",
    planTitle: "План самостоятельного обучения на 100 дней",
    planDesc: "Упрощённый план обучения на 100 дней в 10 прогрессивных фазах, от основ экономики до межзвёздной цивилизации.",
    awakeningTitle: "🌅 Пробуждение человеческой цивилизации Деревни Земли",
    awakeningDesc: "Когда человеческая цивилизация пробуждается от сна, что происходит? От игры с нулевой суммой к симбиозу с положительной суммой, от бесконечного роста к устойчивости, от Земли к межзвёздному - пробуждение есть коллективный скачок сознания.",
    contributeTitle: "🤝 Со-создание и обмен открытыми курсами",
    contributeDesc: "Нетизены Деревни Земли, давайте со-создавать и делиться открытыми курсами вместе! Это открытая платформа общественного образования, где каждый может внести свой вклад.",
    aiToolsTitle: "🤖 Платформа Интеграции Инструментов ИИ",
    aiToolsDesc: "Интеграция бесплатных API от 10 ведущих систем ИИ с открытым исходным кодом в мире, предоставляющая интеллектуальных ассистентов для обучения студентам Деревни Земли. Используйте DeepSeek, Qwen, Llama, Gemini и другие ведущие модели ИИ бесплатно для обучения на курсах, вопросов и ответов, создания контента и многоязычного перевода.",
    contributeStats1: "Цель курсов", contributeStats2: "Участники", contributeStats3: "Глобальная открытость",
    contributeCard1Title: "Внести содержание", contributeCard1Desc: "Писать новые курсы, оптимизировать существующее содержание, переводить на разные языки.",
    contributeCard2Title: "Рецензирование и редактирование", contributeCard2Desc: "Проверять точность и актуальность содержания для обеспечения качества знаний.",
    contributeCard3Title: "Предложить темы", contributeCard3Desc: "Рекомендовать важные темы курсов для расширения охвата.",
    contributeCard4Title: "Многоязычный перевод", contributeCard4Desc: "Помочь перевести курсы: китайский, английский, французский, испанский, арабский, русский, бирманский.",
    contributeBtnText: "🌐 Посетить платформу", contributeEmailBtnText: "✉️ Связаться с редактором",
    contributeEmailLabel: "Email редактора: ",
    aiToolsBtnText: "🚀 Войти в Платформу Инструментов ИИ", aiToolsNote: "Поддерживает текстовый чат, генерацию изображений, голосовую транскрипцию и другие возможности ИИ",
    footerTitle: "🔗 Ссылки экосистемы Деревни Земли", courseDetail: "Детали курса",
    coreTopics: "Ключевые темы", learningGoals: "Цели обучения", detailContent: "Детали",
    results: "результатов", noResults: "Результаты не найдены. Попробуйте другие ключевые слова.",
    expand: "Развернуть", collapse: "Свернуть", brandSubtitle: "Деревня Земли · 100 открытых курсов",
    readMore: "Читать далее", awakeningIntro: "Введение в Пробуждение", awakeningPhasesTitle: "Четыре фазы пробуждения",
    awakeningConclusionTitle: "Заключение",
    cat_philosophy: "🧭 Civilization Philosophy",
    cat_trade: "🌍 International Trade",
    cat_org: "👥 Human-Centered Organization",
    cat_green: "🌿 Green Sustainable Business",
    cat_finance: "💰 Global Finance & Risk",
    cat_symbiosis: "🤝 Carbon-Silicon Symbiosis",
    cat_decision: "🧩 Decision-Making",
    cat_interpersonal: "👥 Interpersonal & Social",
    cat_growth: "🌱 Self-Growth",
    cat_economics2: "💰 Economic Insight",
    cat_history: "📜 History & Civilization",
    cat_cognition: "🔬 Cognitive Foundations",
    booksCount: "Books",
    booksCats: "Categories",
    planDays: "Days",
    planPhases: "Phases",
    footerCopy: "© 2024-2026 Earth Village Business School",
    footerSub: "Open Knowledge for a Multi-Planetary Civilization",
    themeCosmic: "Cosmic",
    themeOasis: "Oasis",
    themeClassic: "Classic",
    aiToolDesc1: "DeepSeek, 5M tokens/month free",
    aiToolDesc2: "Alibaba Qwen, 1M tokens free for new users",
    aiToolDesc3: "Meta open-source LLM, 14,400 requests/day via Groq",
    aiToolDesc4: "Google Gemini, 1500 free requests/day",
    aiToolDesc5: "Zhipu AI, GLM-4-Flash completely free",
    aiToolDesc6: "Mistral AI (France), 500K tokens/month free",
    aiToolDesc7: "AI image generation, 15 free images/month + local deploy",
    aiToolDesc8: "OpenAI Whisper, free via Groq platform"
  },
  my: {
    courses: "သင်ခန်းစာ ၁၀၀", bschools: "စီးပွားရေးကျောင်းများ", energy: "စွမ်းအင်အကယ်ဒမီ",
    books: "စွမ်းအင်စာအုပ် ၁၀၀", wisdom: "ပညာဗဟုသုတကျတတ်", plan: "၁၀၀ ရက်စာမတ်",
    awakening: "နိုးထခြင်း", contribute: "တွဲဖက်တည်ဆောက်", aiTools: "AI ကိရိယာများ", skills: "B-School ကျွမ်းကျင်မှုများ",
    coursesLabel: "ပွင့်လင်းသင်ခန်းစာများ", categoriesLabel: "အမျိုးအစားများ", yearsLabel: "နှစ်များရှုထောင့်", langLabel: "၇ ဘာသာစကား",
    bschoolsLabel: "ကျောင်းများ", bschoolCoursesLabel: "သင်ခန်းစာများ", bschoolCatsLabel: "နယ်ပယ်များ",
    wisdomBooksLabel: "အထွတ်အမြတ်", wisdomCatsLabel: "အချက်အလက်များ", wisdomLangsLabel: "ဘာသာစကားများ",
    awakeningDimsLabel: "အချက်အလက်များ", awakeningPhasesLabel: "အဆင့်များ", awakeningFutureLabel: "အနာဂတ်",
    aiToolsCount: "AI စနစ်များ", aiToolsFree: "အခမဲ့", aiToolsLangs: "ဘာသာစကားများ",
    allCats: "အမျိုးအစားအားလုံး", allCats2: "နယ်ပယ်အားလုံး", allCats3: "အမျိုးအစားအားလုံး", allSchools: "ကျောင်းအားလုံး",
    searchPlaceholder: "သင်ခန်းစာများရှာဖွေရန်...",
    bschoolSearchPlaceholder: "ကျောင်းများ သို့မဟုတ် သင်ခန်းစာများ ရှာဖွေရန်...",
    energySearchPlaceholder: "စွမ်းအင်သင်ခန်းစာများ ရှာဖွေရန်...",
    bookSearchPlaceholder: "စာအုပ်အမည်များ၊ စာရေးသူများ ရှာဖွေရန်...",
    wisdomSearchPlaceholder: "စာအုပ်အမည်များ၊ စာရေးသူများ ရှာဖွေရန်...",
    heroTitle: "ကမ္ဘာကြီးရွာစီးပွားရေးကျောင်း · ပွင့်လင်းသင်ခန်းစာ ၁၀၀",
    heroDesc: "ကမ္ဘာကြီးရွာလူသားယဉ်ကျေးမှုအတွက် ပွင့်လင်းသင်ခန်းစာ ၁၀၀၊ တက္ကသိုလ်စီးပွားရေးသင်ရိုးညွှန်းတမ်းများကို ကုန်သည်အမြင်ဖြင့် ပြန်လည်ဒီဇိုင်းဆွဲထားသည်။ ခြောက်မျိုးအုပ်စု: ယဉ်ကျေးမှုဒဿန၊ နိုင်ငံတကာကုန်သွယ်ရေး၊ လူ့ဗဟိုဖွဲ့စည်းမှု၊ စိမ်းလန်းတိုးတက်ရေးစီးပွားရေး၊ ကမ္ဘာ့ဘဏ္ဍာရေး၊ ကာဗွန်-ဆီလီကွန်အတူတက်ကြွီ။",
    bschoolsTitle: "ကမ္ဘာ့ထိပ်သီးစီးပွားရေးကျောင်း ၁၀ · ရွေးချယ်သင်ခန်းစာ ၃၀၀",
    bschoolsDesc: "ကမ္ဘာ့ထိပ်သီးစီးပွားရေးကျောင်း ၁၀ မှ ရွေးချယ်သင်ခန်းစာ ၃၀၀ ပေါင်းစပ်ထားခြင်း၊ မဟာဗျူဟာစီမံခန့်ခွဲမှု၊ ငွေကြေး၊ စျေးကွက်ပြုစုပျိုးထောင်မှု၊ ခေါင်းဆောင်မှု၊ စွန့်ဦးတီထွင်မှု၊ ဆန်းစစ်ခြင်းနှင့် ကမ္ဘာလုံးဆိုင်ရာလုပ်ငန်းဆောင်ရွက်မှုများကို လွှမ်းခြုံထားသည်။",
    energyTitle: "ကမ္ဘာကြီးရွာစွမ်းအင်အကယ်ဒမီ",
    energyDesc: "ကမ္ဘာ့နိုင်ငံသားများအတွက် မိမိဘာသာလေ့လာနိုင်သော စွမ်းအင်သင်ခန်းစာများ၊ ပြန်လည်ပြည့်ဝနိုင်သောစွမ်းအင်၊ နျူကလီးယား၊ ဟိုက်ဒရိုဂျင်၊ သိုလှောင်မှု၊ စမတ်ဂရစ်၊ ကာဗွန်စီမံခန့်ခွဲမှု၊ အာကာသစွမ်းအင်၊ ရေနံနှင့်သဘာဝဓာတ်ငွေ့၊ စွမ်းအင်ပထဝီနိုင်ငံရေးနှင့် ရာသီဥတုပြောင်းလဲမှုတို့ကို လွှမ်းခြုံထားသည်။",
    booksTitle: "နိုင်ငံခြားရှိတရုတ်စီးပွားရေးခေါင်းဆောင်များအတွက် စွမ်းအင်စာအုပ် ၁၀၀",
    booksDesc: "စွမ်းအင်သမိုင်း၊ ရေနံနှင့်သဘာဝဓာတ်ငွေ့၊ ပြန်လည်ပြည့်ဝနိုင်သောစွမ်းအင်၊ နျူကလီးယား၊ ဟိုက်ဒရိုဂျင်၊ အာကာသစွမ်းအင်၊ စွမ်းအင်ရင်းနှီးမြုပ်နှံမှုနှင့် စီးပွားရေးစီမံခန့်ခွဲမှုကို လွှမ်းခြုံသည့် စွမ်းအင်စာအုပ် ၁၀၀။",
    wisdomTitle: "🧠 ကမ္ဘာကြီးရွာပညာဗဟုသုတကျတတ် · အထွတ်အမြတ် ၆၀",
    wisdomDesc: "လူသားယဉ်ကျေးမှု၏ ပညာဗဟုသုတအနှစ်ချုပ် - ကမ္ဘာကိုပုံသွင်းခဲ့သော အထွတ်အမြတ် ၆၀၊ ဆုံးဖြတ်ချက်ခြင်း၊ လူမှုဆက်ဆံရေး၊ ကိုယ်ရေးကိုယ်တိုးတက်မှု၊ စီးပွားရေးအမြင်၊ သမိုင်းနှင့်ယဉ်ကျေးမှု၊ စိတ်ပိုင်းဆိုင်ရာအခြေခံများကို လွှမ်းခြုံထားသည်။",
    planTitle: "၁၀၀ ရက် မိမိဘာသာလေ့လာရေးစာမတ်",
    planDesc: "စီးပွားရေးအခြေခံများမှ အာကာသယဉ်ကျေးမှုအထိ ၁၀ အဆင့်တိုးတက်လာသော ၁၀၀ ရက်လေ့လာရေးအစီအစဉ်။",
    awakeningTitle: "🌅 ကမ္ဘာကြီးရွာလူသားယဉ်ကျေးမှု နိုးထခြင်း",
    awakeningDesc: "လူသားယဉ်ကျေးမှု အိပ်ပျော်ခြင်းမှ နိုးထလာသောအခါ ဘာဖြစ်လာမည်နည်း။ သုညပေါင်းခြင်းမှ အပြုသဘောအတူတက်ကြွီးသို့၊ အနန္တတိုးတက်မှုမှ တိုးတက်နိုင်စွမ်းသို့၊ ကမ္ဘာမြေမှ အာကာသသို့ - နိုးထခြင်းသည် ဝိညာဉ်အပြင်းအထန်ပြောင်းလဲမှုတစ်ခုဖြစ်သည်။",
    contributeTitle: "🤝 ပွင့်လင်းသင်ခန်းစာများ တွဲဖက်တည်ဆောက်ခြင်း",
    contributeDesc: "ကမ္ဘာကြီးရွာနီတာရှင်များ၊ ပွင့်လင်းသင်ခန်းစာများကို အတူတကွ တည်ဆောက်ကြမည်! ဤသည်မှာ လူတိုင်းပါဝင်နိုင်သော ပွင့်လင်းပညာရေးပလက်ဖောင်းတစ်ခုဖြစ်သည်။",
    aiToolsTitle: "🤖 AI ကိရိယာများ ပေါင်းစည်းပလက်ဖွန်",
    aiToolsDesc: "ကမ္ဘာ့ထိပ်ဆုံး ၁၀ ခု AI စနစ်များ၏ အခမဲ့ API များကို ပေါင်းစည်းထားပြီး၊ ကမ္ဘာကြီးရွာနီတာရှင်များအတွက် သက်မှတ်လေ့လာရေးအကူအညီများကို ပံ့ပိုးပေးသည်။ DeepSeek၊ Qwen၊ Llama၊ Gemini နှင့် အခြားထိပ်သီး AI မော်ဒယ်များကို အခမဲ့အသုံးပြုပြီး သင်ခန်းစာလေ့လာရေး၊ မေးခွန်းများဖြေကြားရေး၊ အကြောင်းအရာဖန်တီးရေးနှင့် ဘာသာစကားများပြောင်းလဲရေးများကို လုပ်ဆောင်နိုင်သည်။",
    contributeStats1: "သင်ခန်းစာပန်းတိုင်", contributeStats2: "ဆောင်ရွက်သူများ", contributeStats3: "ကမ္ဘာ့ပွင့်လင်း",
    contributeCard1Title: "အကြောင်းအရာထည့်သွင်း", contributeCard1Desc: "သင်ခန်းစာအသစ်များရေးသားခြင်း၊ လက်ရှိအကြောင်းအရာများကို တိုးတက်စေခြင်း၊ ဘာသာစကား متعدd သို့ ဘာသာပြန်ခြင်း။",
    contributeCard2Title: "ဆန်းစစ်တည်းဖြတ်", contributeCard2Desc: "သင်ခန်းစာအကြောင်းအရာများ၏ တိကျမှန်ကန်မှုကို စစ်ဆေးခြင်း။",
    contributeCard3Title: "အကြောင်းအရာအကြံပြု", contributeCard3Desc: "အရေးကြီးသော သင်ခန်းစာအကြောင်းအရာများကို အကြံပြုခြင်း။",
    contributeCard4Title: "ဘာသာစကား များပြားဘာသာပြန်", contributeCard4Desc: "တရုတ်၊ အင်္ဂလိပ်၊ ပြင်သစ်၊ စပိန်၊ အာရပ်၊ ရုရှ၊ မြန်မာဘာသာများသို့ ဘာသာပြန်ကူးခြင်း။",
    contributeBtnText: "🌐 ပလက်ဖောင်းသို့သွား", contributeEmailBtnText: "✉️ တည်းဖြတ်သူကိုဆက်သွယ်",
    contributeEmailLabel: "တည်းဖြတ်သူအီးမေးလ်: ",
    aiToolsBtnText: "🚀 AI ကိရိယာများပလက်ဖွန်၀င်ရန်", aiToolsNote: "စာသားစကားပြောဆိုခြင်း၊ ပုံရိပ်ဖန်တီးခြင်း၊ အသံဖန်တီးခြင်းနှင့် AI စွမ်းရည်များစွာကို ပံ့ပိုးပေးသည်",
    footerTitle: "🔗 ကမ္ဘာကြီးရွာဂေဟစနစ်လင့်ခ်များ", courseDetail: "သင်ခန်းစာအသေးစိတ်",
    coreTopics: "အဓိကအကြောင်းအရာများ", learningGoals: "လေ့လာရေးရည်မှန်းချက်များ", detailContent: "အသေးစိတ်",
    results: "ရလဒ်များ", noResults: "ရလဒ်မတွေ့ပါ။ အခြားစကားအသုံးအနှုန်းများစမ်းကြည့်ပါ။",
    expand: "ဖွင့်", collapse: "ပိတ်", brandSubtitle: "ကမ္ဘာကြီးရွာ · ပွင့်လင်းသင်ခန်းစာ ၁၀၀",
    readMore: "ထပ်မတင်ကြည့်", awakeningIntro: "နိုးထခြင်းဆိုင်ရာ", awakeningPhasesTitle: "နိုးထခြင်းအဆင့်လေးဆင့်",
    awakeningConclusionTitle: "နိဂုံး",
    cat_philosophy: "🧭 Civilization Philosophy",
    cat_trade: "🌍 International Trade",
    cat_org: "👥 Human-Centered Organization",
    cat_green: "🌿 Green Sustainable Business",
    cat_finance: "💰 Global Finance & Risk",
    cat_symbiosis: "🤝 Carbon-Silicon Symbiosis",
    cat_decision: "🧩 Decision-Making",
    cat_interpersonal: "👥 Interpersonal & Social",
    cat_growth: "🌱 Self-Growth",
    cat_economics2: "💰 Economic Insight",
    cat_history: "📜 History & Civilization",
    cat_cognition: "🔬 Cognitive Foundations",
    booksCount: "Books",
    booksCats: "Categories",
    planDays: "Days",
    planPhases: "Phases",
    footerCopy: "© 2024-2026 Earth Village Business School",
    footerSub: "Open Knowledge for a Multi-Planetary Civilization",
    themeCosmic: "Cosmic",
    themeOasis: "Oasis",
    themeClassic: "Classic",
    aiToolDesc1: "DeepSeek, 5M tokens/month free",
    aiToolDesc2: "Alibaba Qwen, 1M tokens free for new users",
    aiToolDesc3: "Meta open-source LLM, 14,400 requests/day via Groq",
    aiToolDesc4: "Google Gemini, 1500 free requests/day",
    aiToolDesc5: "Zhipu AI, GLM-4-Flash completely free",
    aiToolDesc6: "Mistral AI (France), 500K tokens/month free",
    aiToolDesc7: "AI image generation, 15 free images/month + local deploy",
    aiToolDesc8: "OpenAI Whisper, free via Groq platform"
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
  renderWisdom();
  renderAwakening();
  renderPlan();
  applyI18n();

  document.getElementById('courseSearch').addEventListener('input', filterCourses);
  document.getElementById('bschoolSearch').addEventListener('input', filterBSchools);
  document.getElementById('energySearch').addEventListener('input', filterEnergyCourses);
  document.getElementById('bookSearch').addEventListener('input', filterBooks);
  document.getElementById('wisdomSearch').addEventListener('input', filterWisdom);

  const savedTheme = localStorage.getItem('ev-theme');
  if (savedTheme) switchTheme(savedTheme);

  const savedLang = localStorage.getItem('ev-lang');
  if (savedLang && I18N[savedLang]) {
    currentLang = savedLang;
    updateLangUI();
    applyI18n();
    renderCourses();
    renderBSchools();
    renderEnergyCourses();
    renderBooks();
    renderWisdom();
    renderAwakening();
    renderPlan();
  }

  // Close lang menu on outside click
  document.addEventListener('click', function(e) {
    const dropdown = document.querySelector('.lang-dropdown');
    const menu = document.getElementById('langMenu');
    if (dropdown && menu && !dropdown.contains(e.target)) {
      menu.classList.remove('show');
    }
  });
});

// ===== Stars Background =====
function initStars() {
  const canvas = document.getElementById('starsCanvas');
  if (!canvas) return;
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

// ===== Language Switch =====
function toggleLangMenu() {
  document.getElementById('langMenu').classList.toggle('show');
}

function switchLang(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  localStorage.setItem('ev-lang', lang);
  updateLangUI();
  document.getElementById('langMenu').classList.remove('show');
  applyI18n();
  renderCourses();
  renderBSchools();
  renderEnergyCourses();
  renderBooks();
  renderWisdom();
  renderAwakening();
  renderPlan();
}

function updateLangUI() {
  document.getElementById('langLabel').textContent = LANG_LABELS[currentLang] || '🌐';
  document.querySelectorAll('.lang-option').forEach(opt => {
    opt.classList.toggle('active', opt.getAttribute('data-lang') === currentLang);
  });
  // Set RTL for Arabic
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
}

// ===== Apply I18n =====
function applyI18n() {
  const t = I18N[currentLang] || I18N.zh;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key]) el.placeholder = t[key];
  });

  const setText = (id, key) => { const el = document.getElementById(id); if (el && t[key]) el.textContent = t[key]; };
  setText('heroTitle', 'heroTitle');
  setText('heroDesc', 'heroDesc');
  setText('bschoolsTitle', 'bschoolsTitle');
  setText('bschoolsDesc', 'bschoolsDesc');
  setText('energyTitle', 'energyTitle');
  setText('energyDesc', 'energyDesc');
  setText('booksTitle', 'booksTitle');
  setText('booksDesc', 'booksDesc');
  setText('wisdomTitle', 'wisdomTitle');
  setText('wisdomDesc', 'wisdomDesc');
  setText('planTitle', 'planTitle');
  setText('planDesc', 'planDesc');
  setText('awakeningTitle', 'awakeningTitle');
  setText('awakeningDesc', 'awakeningDesc');
  setText('aiToolsTitle', 'aiToolsTitle');
  setText('aiToolsDesc', 'aiToolsDesc');
  setText('aiToolsBtnText', 'aiToolsBtnText');
  setText('aiToolsNote', 'aiToolsNote');
  setText('contributeTitle', 'contributeTitle');
  setText('contributeDesc', 'contributeDesc');
  setText('contributeCard1Title', 'contributeCard1Title');
  setText('contributeCard1Desc', 'contributeCard1Desc');
  setText('contributeCard2Title', 'contributeCard2Title');
  setText('contributeCard2Desc', 'contributeCard2Desc');
  setText('contributeCard3Title', 'contributeCard3Title');
  setText('contributeCard3Desc', 'contributeCard3Desc');
  setText('contributeCard4Title', 'contributeCard4Title');
  setText('contributeCard4Desc', 'contributeCard4Desc');
  setText('contributeBtnText', 'contributeBtnText');
  setText('contributeEmailBtnText', 'contributeEmailBtnText');
  setText('contributeEmailLabel', 'contributeEmailLabel');
  setText('footerTitle', 'footerTitle');
  setText('brandSubtitle', 'brandSubtitle');

  // Update theme dot titles
  document.querySelectorAll('.theme-dot').forEach(dot => {
    const theme = dot.getAttribute('data-theme');
    const titleKey = theme === 'cosmic' ? 'themeCosmic' : theme === 'oasis' ? 'themeOasis' : 'themeClassic';
    if (t[titleKey]) dot.title = t[titleKey];
  });

  // Update select option labels
  document.querySelectorAll('select option[data-i18n]').forEach(opt => {
    const key = opt.getAttribute('data-i18n');
    if (t[key]) opt.textContent = t[key];
  });

  // Update AI tool card descriptions
  document.querySelectorAll('.ai-tool-desc[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) el.textContent = t[key];
  });

  // Update footer copyright
  document.querySelectorAll('[data-i18n="footerCopy"]').forEach(el => { if (t.footerCopy) el.textContent = t.footerCopy; });
  document.querySelectorAll('[data-i18n="footerSub"]').forEach(el => { if (t.footerSub) el.textContent = t.footerSub; });

  // Update plan days/phases labels (rendered dynamically)
  document.querySelectorAll('.phase-days-label').forEach(el => {
    el.textContent = t.planDays || '天数';
  });
  document.querySelectorAll('.phase-phases-label').forEach(el => {
    el.textContent = t.planPhases || '阶段';
  });

  document.documentElement.lang = LANG_HTML_LANG[currentLang] || 'zh-CN';
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

// ===== Helper: get localized field =====
function getLocalized(item, field, lang) {
  const key = field + '_' + lang;
  if (item[key]) return item[key];
  // Fallback to zh then en
  if (item[field + '_zh']) return item[field + '_zh'];
  if (item[field + '_en']) return item[field + '_en'];
  return '';
}

// ===== Render Courses =====
function renderCourses(filterText, filterCat) {
  const grid = document.getElementById('courseGrid');
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

  document.getElementById('resultCount').textContent = courses.length + ' ' + (I18N[currentLang] || I18N.zh).results;

  if (courses.length === 0) {
    grid.innerHTML = '<div class="no-results">' + (I18N[currentLang] || I18N.zh).noResults + '</div>';
    return;
  }

  grid.innerHTML = courses.map(c => {
    const title = getLocalized(c, 'title', currentLang);
    const cat = getLocalized(c, 'cat', currentLang);
    const desc = getLocalized(c, 'desc', currentLang);
    const tags = currentLang === 'zh' ? (c.tags_cn || c.tags_en || []) : (c.tags_en || c.tags_cn || []);
    const altTitle = currentLang === 'zh' ? c.title_cn : (c.title_en || c.title_cn);
    return `
      <div class="course-card" data-cat="${c.cat}" onclick="showCourseDetail(${c.id})">
        <div class="course-num">${c.id}</div>
        <div class="course-cat">${cat}</div>
        <h3>${title}</h3>
        <div class="course-en">${altTitle}</div>
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
  const schoolFilter = document.getElementById('bschoolFilter');
  BSCHOOLS.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.school_short;
    opt.textContent = s.school_cn + ' / ' + s.school_en;
    schoolFilter.appendChild(opt);
  });
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

  document.getElementById('bschoolResultCount').textContent = allCourses.length + ' ' + (I18N[currentLang] || I18N.zh).results;

  if (allCourses.length === 0) {
    grid.innerHTML = '<div class="no-results">' + (I18N[currentLang] || I18N.zh).noResults + '</div>';
    return;
  }

  grid.innerHTML = allCourses.map(c => {
    const title = getLocalized(c, 'title', currentLang);
    const cat = getLocalized(c, 'cat', currentLang);
    const desc = getLocalized(c, 'desc', currentLang);
    const school = currentLang === 'zh' ? (c.school_cn || c.school_en) : (c.school_en || c.school_cn);
    const altTitle = currentLang === 'zh' ? c.title_cn : (c.title_en || c.title_cn);
    return `
      <div class="course-card bschool-card" data-cat="${c.cat}">
        <div class="course-num">${c.id}</div>
        <div class="course-cat">${cat}</div>
        <h3>${title}</h3>
        <div class="course-en">${altTitle}</div>
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
  let courses = COURSES.filter(c => c.cat === 'green');

  if (filterText) {
    const ft = filterText.toLowerCase();
    courses = courses.filter(c =>
      c.title_cn.toLowerCase().includes(ft) ||
      c.title_en.toLowerCase().includes(ft)
    );
  }

  document.getElementById('energyResultCount').textContent = courses.length + ' ' + (I18N[currentLang] || I18N.zh).results;

  if (courses.length === 0) {
    grid.innerHTML = '<div class="no-results">' + (I18N[currentLang] || I18N.zh).noResults + '</div>';
    return;
  }

  grid.innerHTML = courses.map(c => {
    const title = getLocalized(c, 'title', currentLang);
    const cat = getLocalized(c, 'cat', currentLang);
    const desc = getLocalized(c, 'desc', currentLang);
    const tags = currentLang === 'zh' ? (c.tags_cn || c.tags_en || []) : (c.tags_en || c.tags_cn || []);
    const altTitle = currentLang === 'zh' ? c.title_cn : (c.title_en || c.title_cn);
    return `
      <div class="course-card" data-cat="${c.cat}" onclick="showCourseDetail(${c.id})">
        <div class="course-num">${c.id}</div>
        <div class="course-cat">${cat}</div>
        <h3>${title}</h3>
        <div class="course-en">${altTitle}</div>
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
  const t = I18N[currentLang] || I18N.zh;
  const title = getLocalized(c, 'title', currentLang);
  const cat = getLocalized(c, 'cat', currentLang);
  const detail = getLocalized(c, 'detail', currentLang) || getLocalized(c, 'desc', currentLang);
  const desc = getLocalized(c, 'desc', currentLang);
  const tags = currentLang === 'zh' ? (c.tags_cn || c.tags_en || []) : (c.tags_en || c.tags_cn || []);
  const altTitle = currentLang === 'zh' ? c.title_cn : (c.title_en || c.title_cn);

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-cat">${cat}</div>
    <h2>${title}</h2>
    <div class="modal-en">${altTitle}</div>
    <div class="modal-body">
      <div class="course-tags" style="margin-bottom:1rem;">
        ${tags.map(tg => `<span class="course-tag">${tg}</span>`).join('')}
      </div>
      <h4>${t.coreTopics}</h4>
      <p>${desc}</p>
      <h4>${t.detailContent}</h4>
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
  let books = BOOKS;

  if (filterText) {
    const ft = filterText.toLowerCase();
    books = books.filter(b =>
      b.title_cn.toLowerCase().includes(ft) ||
      b.title_en.toLowerCase().includes(ft) ||
      b.author.toLowerCase().includes(ft)
    );
  }

  document.getElementById('bookResultCount').textContent = books.length + ' ' + (I18N[currentLang] || I18N.zh).results;

  if (books.length === 0) {
    grid.innerHTML = '<div class="no-results">' + (I18N[currentLang] || I18N.zh).noResults + '</div>';
    return;
  }

  grid.innerHTML = books.map(b => {
    const title = getLocalized(b, 'title', currentLang);
    const cat = getLocalized(b, 'cat', currentLang);
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

// ===== Render Wisdom Books =====
function renderWisdom(filterText, filterCat) {
  const grid = document.getElementById('wisdomGrid');
  let books = WISDOM_BOOKS || [];

  if (filterText) {
    const ft = filterText.toLowerCase();
    books = books.filter(b =>
      (b.title_cn || '').toLowerCase().includes(ft) ||
      (b.title_en || '').toLowerCase().includes(ft) ||
      (b.author_cn || '').toLowerCase().includes(ft) ||
      (b.author_en || '').toLowerCase().includes(ft)
    );
  }
  if (filterCat && filterCat !== 'all') {
    books = books.filter(b => b.cat === filterCat);
  }

  document.getElementById('wisdomResultCount').textContent = books.length + ' ' + (I18N[currentLang] || I18N.zh).results;

  if (books.length === 0) {
    grid.innerHTML = '<div class="no-results">' + (I18N[currentLang] || I18N.zh).noResults + '</div>';
    return;
  }

  grid.innerHTML = books.map(b => {
    const title = getLocalized(b, 'title', currentLang);
    const cat = getLocalized(b, 'cat', currentLang);
    const desc = getLocalized(b, 'desc', currentLang);
    const author = currentLang === 'en' ? (b.author_en || b.author_cn || '') : (b.author_cn || b.author_en || '');
    const altTitle = currentLang === 'zh' ? (b.title_cn || '') : (b.title_en || b.title_cn || '');
    const tags = currentLang === 'en' ? (b.tags_en || []) : (b.tags_cn || []);
    return `
      <div class="course-card wisdom-card" data-cat="${b.cat}" onclick="showWisdomDetail(${b.id})">
        <div class="course-num">${b.id}</div>
        <div class="course-cat">${cat}</div>
        <h3>${title}</h3>
        <div class="course-en">${altTitle}</div>
        <div class="wisdom-author">✍️ ${author}</div>
        <div class="course-desc">${desc}</div>
        <div class="course-tags">
          ${tags.map(tg => `<span class="course-tag">${tg}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function filterWisdom() {
  const text = document.getElementById('wisdomSearch').value;
  const cat = document.getElementById('wisdomFilter').value;
  renderWisdom(text, cat);
}

function showWisdomDetail(id) {
  const b = (WISDOM_BOOKS || []).find(b => b.id === id);
  if (!b) return;
  const t = I18N[currentLang] || I18N.zh;
  const title = getLocalized(b, 'title', currentLang);
  const cat = getLocalized(b, 'cat', currentLang);
  const desc = getLocalized(b, 'desc', currentLang);
  const detail = getLocalized(b, 'detail', currentLang) || desc;
  const author = currentLang === 'en' ? (b.author_en || b.author_cn || '') : (b.author_cn || b.author_en || '');
  const altTitle = currentLang === 'zh' ? (b.title_cn || '') : (b.title_en || b.title_cn || '');
  const tags = currentLang === 'en' ? (b.tags_en || []) : (b.tags_cn || []);

  document.getElementById('modalBody').innerHTML = `
    <div class="modal-cat">${cat}</div>
    <h2>${title}</h2>
    <div class="modal-en">${altTitle}</div>
    <div class="wisdom-author" style="margin-bottom:1rem;">✍️ ${author}</div>
    <div class="modal-body">
      <div class="course-tags" style="margin-bottom:1rem;">
        ${tags.map(tg => `<span class="course-tag">${tg}</span>`).join('')}
      </div>
      <h4>${t.coreTopics}</h4>
      <p>${desc}</p>
      <h4>${t.detailContent}</h4>
      <p>${detail}</p>
    </div>
  `;
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ===== Render Awakening =====
function renderAwakening() {
  if (typeof AWAKENING === 'undefined') return;
  const t = I18N[currentLang] || I18N.zh;
  const isEn = currentLang !== 'zh';

  // Intro
  const introEl = document.getElementById('awakeningIntro');
  if (introEl) {
    let introText = '';
    if (AWAKENING.intro) {
      if (typeof AWAKENING.intro === 'object') {
        introText = isEn ? (AWAKENING.intro.en || AWAKENING.intro.cn) : AWAKENING.intro.cn;
      } else {
        introText = AWAKENING.intro;
      }
    } else if (AWAKENING.intro_cn) {
      introText = isEn ? (AWAKENING.intro_en || AWAKENING.intro_cn) : AWAKENING.intro_cn;
    }
    introEl.innerHTML = `<div class="awakening-intro-text">${introText}</div>`;
  }

  // Dimensions grid
  const gridEl = document.getElementById('awakeningGrid');
  if (gridEl && AWAKENING.dimensions) {
    gridEl.innerHTML = AWAKENING.dimensions.map(d => {
      const title = isEn ? (d.title_en || d.title_cn) : d.title_cn;
      const desc = isEn ? (d.desc_en || d.desc_cn) : d.desc_cn;
      // Check if title contains "from X to Y" pattern for shift display
      const fromMatch = title.match(/^(.+?)\s*(?:→|到|to)\s*(.+)$/i);
      let shiftHtml = '';
      if (fromMatch && fromMatch[1] && fromMatch[2]) {
        shiftHtml = `<div class="awakening-shift"><span class="awakening-from">${fromMatch[1].trim()}</span><span class="awakening-arrow">→</span><span class="awakening-to">${fromMatch[2].trim()}</span></div>`;
      }
      return `
        <div class="awakening-card">
          <div class="awakening-icon">${d.icon || '🔄'}</div>
          <h3>${title}</h3>
          ${shiftHtml}
          <p>${desc}</p>
        </div>
      `;
    }).join('');
  }

  // Phases (stages in data)
  const phasesEl = document.getElementById('awakeningPhases');
  const stages = AWAKENING.stages || AWAKENING.phases;
  if (phasesEl && stages) {
    phasesEl.innerHTML = `
      <h2 class="awakening-section-title">${t.awakeningPhasesTitle}</h2>
      <div class="awakening-phases-grid">
        ${stages.map((p, idx) => {
          const title = isEn ? (p.phase_en || p.title_en || p.phase_cn || p.title_cn) : (p.phase_cn || p.title_cn);
          const desc = isEn ? (p.desc_en || p.desc_cn) : p.desc_cn;
          return `
            <div class="awakening-phase-card">
              <div class="phase-number">${idx + 1}</div>
              <h3>${title}</h3>
              <p>${desc}</p>
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // Conclusion
  const concEl = document.getElementById('awakeningConclusion');
  if (concEl) {
    let concText = '';
    if (AWAKENING.conclusion) {
      if (typeof AWAKENING.conclusion === 'object') {
        concText = isEn ? (AWAKENING.conclusion.en || AWAKENING.conclusion.cn) : AWAKENING.conclusion.cn;
      } else {
        concText = AWAKENING.conclusion;
      }
    } else if (AWAKENING.conclusion_cn) {
      concText = isEn ? (AWAKENING.conclusion_en || AWAKENING.conclusion_cn) : AWAKENING.conclusion_cn;
    }
    concEl.innerHTML = `
      <h2 class="awakening-section-title">${t.awakeningConclusionTitle}</h2>
      <div class="awakening-conclusion-text">${concText}</div>
    `;
  }
}

// ===== Render Study Plan =====
function renderPlan() {
  const container = document.getElementById('planContainer');
  const isEn = currentLang !== 'zh';
  const t = I18N[currentLang] || I18N.zh;

  container.innerHTML = STUDY_PLAN.map((p, idx) => {
    const phaseTitle = getLocalized(p, 'phase', currentLang);
    const items = p.items.map(item => {
      const content = getLocalized(item, '', currentLang);
      const itemContent = isEn ? item.en : item.cn;
      return `
        <div class="plan-day">
          <div class="day-num">${item.day}</div>
          <div class="day-content">${itemContent}</div>
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
              <div class="phase-days"><span class="phase-days-label">${t.planDays || '天数'}</span> ${p.days}</div>
            </div>
          </div>
          <span class="ctrl-btn">${t.expand}</span>
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
