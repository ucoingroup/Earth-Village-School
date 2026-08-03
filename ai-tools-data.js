// ============================================
// AI Tools Data - Global Top 10 Open Source AI Systems
// ============================================

const AI_TOOLS = [
  {
    id: 1,
    name: "DeepSeek",
    name_cn: "深度求索",
    icon: "🐋",
    provider: "DeepSeek AI",
    cat: "reasoning",
    cat_cn: "推理思考",
    cat_en: "Reasoning",
    desc_cn: "深度推理型大模型，擅长数学、代码和逻辑推理。R1系列在多项基准测试中达到GPT-4级别，完全开源。",
    desc_en: "Deep reasoning LLM excelling at math, code, and logical reasoning. R1 series matches GPT-4 level on many benchmarks, fully open source.",
    features_cn: ["深度推理", "数学解题", "代码生成", "中英双语", "长上下文"],
    features_en: ["Deep Reasoning", "Math Solving", "Code Generation", "Bilingual", "Long Context"],
    free_tier: "免费额度：每月500万Token（约250万中文字），无需信用卡",
    free_tier_en: "Free tier: 5M tokens/month (~2.5M Chinese chars), no credit card needed",
    api_url: "https://api.deepseek.com",
    docs_url: "https://platform.deepseek.com/api-docs",
    model: "deepseek-chat / deepseek-reasoner",
    pricing: "免费$0.27/百万Token起，新用户送500万Token"
  },
  {
    id: 2,
    name: "Qwen",
    name_cn: "通义千问",
    icon: "🌐",
    provider: "Alibaba Cloud",
    cat: "text",
    cat_cn: "文本生成",
    cat_en: "Text",
    desc_cn: "阿里巴巴开源大模型，支持中英双语、长文档理解、代码生成、工具调用。Qwen2.5系列全面开源。",
    desc_en: "Alibaba's open-source LLM supporting bilingual Chinese-English, long document understanding, code generation, and tool calling. Qwen2.5 series fully open.",
    features_cn: ["中英双语", "长文档", "代码生成", "工具调用", "多模态"],
    features_en: ["Bilingual", "Long Document", "Code Gen", "Tool Calling", "Multimodal"],
    free_tier: "免费额度：新用户100万Token，DashScope平台每月免费额度",
    free_tier_en: "Free tier: 1M tokens for new users, monthly free quota on DashScope",
    api_url: "https://dashscope.aliyuncs.com/compatible-mode/v1",
    docs_url: "https://help.aliyun.com/zh/dashscope/developer-reference/api-details",
    model: "qwen-plus / qwen-max / qwen-turbo",
    pricing: "qwen-turbo免费0.3/百万Token起，新用户免费额度"
  },
  {
    id: 3,
    name: "GLM",
    name_cn: "智谱GLM",
    icon: "🔮",
    provider: "Zhipu AI",
    cat: "text",
    cat_cn: "文本生成",
    cat_en: "Text",
    desc_cn: "智谱人工智能开源大模型，GLM-4系列支持多模态理解、代码生成、搜索增强。ChatGLM系列完全开源。",
    desc_en: "Zhipu AI's open-source LLM. GLM-4 series supports multimodal understanding, code generation, and search augmentation. ChatGLM series fully open.",
    features_cn: ["多模态", "搜索增强", "代码生成", "Agent", "中英双语"],
    features_en: ["Multimodal", "Search Augmented", "Code Gen", "Agent", "Bilingual"],
    free_tier: "免费额度：新用户赠送2000万Token，GLM-4-Flash模型完全免费",
    free_tier_en: "Free tier: 20M tokens for new users, GLM-4-Flash model is completely free",
    api_url: "https://open.bigmodel.cn/api/paas/v4",
    docs_url: "https://open.bigmodel.cn/dev/api",
    model: "glm-4-flash / glm-4 / glm-4-air",
    pricing: "GLM-4-Flash完全免费，其他模型低价"
  },
  {
    id: 4,
    name: "Llama",
    name_cn: "Llama",
    icon: "🦙",
    provider: "Meta AI",
    cat: "text",
    cat_cn: "文本生成",
    cat_en: "Text",
    desc_cn: "Meta开源的Llama系列大模型，Llama 3.1支持405B参数规模，多语言能力强大。通过Groq/Together等平台免费使用。",
    desc_en: "Meta's open-source Llama series. Llama 3.1 supports up to 405B parameters with strong multilingual capabilities. Free via Groq/Together platforms.",
    features_cn: ["多语言", "开源权重", "大参数", "工具调用", "推理"],
    features_en: ["Multilingual", "Open Weights", "Large Scale", "Tool Calling", "Reasoning"],
    free_tier: "Groq免费额度：每天14,400次请求；Together AI新用户送$5",
    free_tier_en: "Groq free tier: 14,400 requests/day; Together AI $5 credit for new users",
    api_url: "https://api.groq.com/openai/v1",
    docs_url: "https://console.groq.com/docs",
    model: "llama-3.3-70b-versatile / llama-3.1-8b-instant",
    pricing: "Groq平台免费使用，速率限制"
  },
  {
    id: 5,
    name: "Mistral",
    name_cn: "Mistral",
    icon: "🌬️",
    provider: "Mistral AI",
    cat: "text",
    cat_cn: "文本生成",
    cat_en: "Text",
    desc_cn: "法国Mistral人工智能开源大模型，擅长欧洲多语言。Mixtral 8x7B采用MoE架构，效率高、速度快。",
    desc_en: "French Mistral AI's open-source LLM, excelling at European languages. Mixtral 8x7B uses MoE architecture for high efficiency and speed.",
    features_cn: ["欧洲多语言", "MoE架构", "代码生成", "函数调用", "快速推理"],
    features_en: ["European Languages", "MoE Architecture", "Code Gen", "Function Calling", "Fast Inference"],
    free_tier: "La Plateforme免费额度：每月50万Token；也有free tier API",
    free_tier_en: "La Plateforme free tier: 500K tokens/month; also free tier API available",
    api_url: "https://api.mistral.ai/v1",
    docs_url: "https://docs.mistral.ai",
    model: "mistral-large-latest / mistral-small / open-mistral-7b",
    pricing: "open-mistral-7b免费，其他模型低价"
  },
  {
    id: 6,
    name: "Gemini",
    name_cn: "Gemini",
    icon: "♊",
    provider: "Google",
    cat: "multimodal",
    cat_cn: "多模态",
    cat_en: "Multimodal",
    desc_cn: "Google多模态大模型，支持文本、图像、视频、音频理解。Gemini 1.5 Flash免费层速度快、能力强。",
    desc_en: "Google's multimodal LLM supporting text, image, video, and audio understanding. Gemini 1.5 Flash free tier is fast and capable.",
    features_cn: ["多模态", "视觉理解", "视频理解", "音频理解", "超长上下文"],
    features_en: ["Multimodal", "Vision", "Video Understanding", "Audio Understanding", "Ultra-Long Context"],
    free_tier: "免费额度：Gemini 1.5 Flash每天1500次请求，1.5 Pro每天50次",
    free_tier_en: "Free tier: Gemini 1.5 Flash 1500 requests/day, 1.5 Pro 50 requests/day",
    api_url: "https://generativelanguage.googleapis.com/v1beta",
    docs_url: "https://ai.google.dev/gemini-api/docs",
    model: "gemini-1.5-flash / gemini-1.5-pro",
    pricing: "Flash完全免费（有速率限制），Pro每天50次免费"
  },
  {
    id: 7,
    name: "Claude",
    name_cn: "Claude",
    icon: "🎭",
    provider: "Anthropic",
    cat: "reasoning",
    cat_cn: "推理思考",
    cat_en: "Reasoning",
    desc_cn: "Anthropic的Claude系列，以安全性和长文本理解著称。Claude 3.5 Sonnet在代码和推理方面表现卓越。",
    desc_en: "Anthropic's Claude series, known for safety and long-text understanding. Claude 3.5 Sonnet excels at code and reasoning.",
    features_cn: ["长文本", "代码生成", "安全对齐", "推理", "创意写作"],
    features_en: ["Long Text", "Code Gen", "Safety Aligned", "Reasoning", "Creative Writing"],
    free_tier: "免费额度：claude.ai网页版免费使用；API新用户$5额度",
    free_tier_en: "Free tier: Free on claude.ai web; API $5 credit for new users",
    api_url: "https://api.anthropic.com/v1",
    docs_url: "https://docs.anthropic.com",
    model: "claude-3-5-sonnet-20241022 / claude-3-haiku-20240307",
    pricing: "Haiku低价$0.25/百万Token，网页版免费"
  },
  {
    id: 8,
    name: "DALL-E",
    name_cn: "DALL-E",
    icon: "🎨",
    provider: "OpenAI",
    cat: "image",
    cat_cn: "图像创作",
    cat_en: "Image",
    desc_cn: "OpenAI的图像生成模型，支持文生图、图生图、图像编辑。DALL-E 3与ChatGPT集成使用更便捷。",
    desc_en: "OpenAI's image generation model supporting text-to-image, image-to-image, and image editing. DALL-E 3 integrates with ChatGPT for easier use.",
    features_cn: ["文生图", "图生图", "图像编辑", "多种风格", "高质量"],
    features_en: ["Text-to-Image", "Image-to-Image", "Image Editing", "Multi-Style", "High Quality"],
    free_tier: "免费额度：ChatGPT Free用户每月可生成少量图片；API按量付费",
    free_tier_en: "Free tier: ChatGPT Free users can generate limited images/month; API pay-per-use",
    api_url: "https://api.openai.com/v1",
    docs_url: "https://platform.openai.com/docs/guides/dall-e",
    model: "dall-e-3 / dall-e-2",
    pricing: "DALL-E 2每月免费15张，DALL-E 3按量付费$0.04/张起"
  },
  {
    id: 9,
    name: "Stable Diffusion",
    name_cn: "稳定扩散",
    icon: "🖼️",
    provider: "Stability AI",
    cat: "image",
    cat_cn: "图像创作",
    cat_en: "Image",
    desc_cn: "Stability人工智能开源的图像生成模型，SDXL和SD3系列支持高分辨率图像生成。完全开源可本地部署。",
    desc_en: "Stability AI's open-source image generation model. SDXL and SD3 series support high-resolution image generation. Fully open source for local deployment.",
    features_cn: ["文生图", "图生图", "开源权重", "ControlNet", "本地部署"],
    features_en: ["Text-to-Image", "Image-to-Image", "Open Weights", "ControlNet", "Local Deploy"],
    free_tier: "免费额度：Stability API新用户25次免费生成；本地部署完全免费",
    free_tier_en: "Free tier: 25 free generations for new API users; local deployment completely free",
    api_url: "https://api.stability.ai/v1",
    docs_url: "https://platform.stability.ai/docs",
    model: "stable-diffusion-xl / stable-image-3",
    pricing: "API按量付费，本地部署完全免费"
  },
  {
    id: 10,
    name: "Whisper",
    name_cn: "Whisper",
    icon: "🔊",
    provider: "OpenAI",
    cat: "voice",
    cat_cn: "语音音频",
    cat_en: "Voice",
    desc_cn: "OpenAI开源的语音识别模型，支持99种语言转录。Whisper Large v3准确率极高，完全开源可本地部署。",
    desc_en: "OpenAI's open-source speech recognition model supporting 99 languages. Whisper Large v3 has extremely high accuracy, fully open source for local deployment.",
    features_cn: ["语音转文字", "99种语言", "翻译", "开源权重", "本地部署"],
    features_en: ["Speech-to-Text", "99 Languages", "Translation", "Open Weights", "Local Deploy"],
    free_tier: "免费额度：Groq平台免费使用Whisper Large v3；本地部署完全免费",
    free_tier_en: "Free tier: Free Whisper Large v3 on Groq platform; local deployment completely free",
    api_url: "https://api.groq.com/openai/v1",
    docs_url: "https://github.com/openai/whisper",
    model: "whisper-large-v3 / whisper-1",
    pricing: "Groq平台免费，OpenAI API$0.006/分钟，本地免费"
  }
];

// ===== 10 People Plan =====
const PEOPLE_PLAN = [
  {
    id: 1, avatar: "🎯", role: "院长 / 课程总监", title: "Curriculum Director",
    tasks_cn: ["制定课程体系框架与教学标准", "审核课程内容质量", "协调10人团队分工", "对接全球商学院资源"]
  },
  {
    id: 2, avatar: "✍️", role: "内容主笔 / 课程编写", title: "Content Writer",
    tasks_cn: ["编写100门公开课正文", "将高校课程改编为商人视角", "撰写书籍解读", "维护多语言文案"]
  },
  {
    id: 3, avatar: "💻", role: "全栈工程师", title: "Full-Stack Developer",
    tasks_cn: ["开发维护网站前端", "搭建后端接口服务", "集成人工智能工具接口", "部署网站到GitHub Pages"]
  },
  {
    id: 4, avatar: "🎨", role: "UI/UX设计师", title: "Designer",
    tasks_cn: ["设计3套主题视觉风格", "制作课程封面与配图", "优化移动端体验", "设计品牌视觉体系"]
  },
  {
    id: 5, avatar: "🌐", role: "多语言翻译", title: "Translator",
    tasks_cn: ["中英法西阿俄缅7语言翻译", "校对多语言文案", "维护翻译质量", "协助文化适配"]
  },
  {
    id: 6, avatar: "📊", role: "数据分析师", title: "Data Analyst",
    tasks_cn: ["分析课程学习数据", "追踪用户行为", "制作数据看板", "提供优化建议"]
  },
  {
    id: 7, avatar: "🚀", role: "航天/星际课程专家", title: "Space Course Expert",
    tasks_cn: ["编写航天太空经济课程", "追踪SpaceX/蓝色起源等前沿", "设计星际文明课程框架", "对接航天领域资源"]
  },
  {
    id: 8, avatar: "⚡", role: "能源课程专家", title: "Energy Course Expert",
    tasks_cn: ["编写能源学院课程", "追踪新能源技术前沿", "精选100本能源书籍", "设计能源投资课程"]
  },
  {
    id: 9, avatar: "🤖", role: "AI工具集成师", title: "AI Integration Engineer",
    tasks_cn: ["集成10大开源人工智能系统接口", "开发人工智能对话终端", "设计课程人工智能助手", "维护API密钥安全"]
  },
  {
    id: 10, avatar: "📣", role: "社群运营 / 推广", title: "Community Manager",
    tasks_cn: ["运营共建共享社群", "管理公益编辑邮箱", "推广地球村商学院", "收集用户反馈"]
  }
];

// ===== Course Tech Reference =====
const TECH_REFS = [
  {
    icon: "🌐", title: "前端技术栈", title_en: "Frontend Stack",
    desc_cn: "网站前端采用纯HTML/CSS/JavaScript，无需框架依赖，部署在GitHub Pages。",
    tools: ["HTML5", "CSS3", "Vanilla JS", "localStorage", "GitHub Pages"]
  },
  {
    icon: "🎨", title: "视觉设计", title_en: "Visual Design",
    desc_cn: "3套可切换主题（星际深空/地球绿洲/经典商务），响应式布局，支持RTL。",
    tools: ["CSS Variables", "Flexbox", "Grid", "Media Queries", "Canvas API"]
  },
  {
    icon: "🌍", title: "多语言系统", title_en: "i18n System",
    desc_cn: "7语言I18N系统，支持中文、英语、法语、西班牙语、阿拉伯语、俄语、缅甸语。",
    tools: ["JSON i18n", "data-i18n", "RTL Support", "localStorage"]
  },
  {
    icon: "🤖", title: "AI工具集成", title_en: "AI Integration",
    desc_cn: "集成10大开源人工智能系统接口，支持文本生成、代码、图像、语音、多模态。",
    tools: ["OpenAI Compatible API", "REST API", "Fetch API", "SSE Streaming"]
  },
  {
    icon: "📚", title: "课程数据管理", title_en: "Course Data",
    desc_cn: "460+课程数据以JS对象管理，支持搜索、过滤、分类、详情弹窗。",
    tools: ["JS Objects", "Array Filter", "Template Literals", "DOM Rendering"]
  },
  {
    icon: "🔗", title: "生态链接", title_en: "Ecosystem Links",
    desc_cn: "10个地球村生态项目链接，构建完整的地球村数字生态。",
    tools: ["GitHub Pages", "Base44", "Static Hosting"]
  },
  {
    icon: "🔄", title: "自动更新", title_en: "Auto Update",
    desc_cn: "每周自动更新课程内容，通过定时任务触发内容刷新。",
    tools: ["Cron Jobs", "GitHub Actions", "Webhook"]
  },
  {
    icon: "📊", title: "数据可视化", title_en: "Data Visualization",
    desc_cn: "100天计划表、课程分类统计、商学院数据看板。",
    tools: ["CSS Grid", "Progress Bars", "Charts", "Animations"]
  }
];

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
