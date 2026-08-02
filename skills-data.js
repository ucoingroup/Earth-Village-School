// ============================================
// Earth Village Business School - 30 Standardized SKILLs
// 3 Categories x 10 Skills each
// ============================================

const SKILL_CATEGORIES = [
  { id: 'core', icon: '🌍', color: '#64ffda', priority: 1 },
  { id: 'cosmic', icon: '🚀', color: '#bd93ff', priority: 2 },
  { id: 'backup', icon: '🔧', color: '#ff79c6', priority: 3 }
];

const SKILLS = {
  zh: [
    // ===== 第一类：地球村商学院核心课程 SKILL =====
    { id: 'skill-carbon-silicon-symbiosis', cat: 'core', name: '碳硅共生', short: 'Carbon-Silicon Symbiosis', desc: '碳硅共生文明框架搭建，区分人类决策主导权与AI执行边界，人机协同工作流落地' },
    { id: 'skill-cross-border-new-energy-trade', cat: 'core', name: '跨境新能源贸易', short: 'Cross-border New Energy Trade', desc: '光伏储能、绿电设备跨境全链路实操，CBAM碳关税、绿色贸易合规管控' },
    { id: 'skill-global-supply-chain-resilience', cat: 'core', name: '全球供应链韧性', short: 'Global Supply Chain Resilience', desc: '全球供应链重构、陆海通道规划、厂商协同与断供风险应对体系搭建' },
    { id: 'skill-civilization-business-philosophy', cat: 'core', name: '文明商道哲学', short: 'Civilization Business Philosophy', desc: '儒商墨家义利伦理、东西方商业价值对比、长期主义文明级经营战略' },
    { id: 'skill-cross-cultural-organizational-governance', cat: 'core', name: '跨文化组织治理', short: 'Cross-cultural Org Governance', desc: '跨国多文化团队管理、DAO分布式社群自治、家族企业代际传承机制' },
    { id: 'skill-carbon-neutral-commercial-model', cat: 'core', name: '碳中和商业模型', short: 'Carbon-neutral Commercial Model', desc: '光储EMC、零碳园区、循环经济、自愿碳市场ESG实业落地运营' },
    { id: 'skill-cross-border-finance-risk-control', cat: 'core', name: '跨境金融风控', short: 'Cross-border Finance & Risk', desc: '跨境投融资架构、汇率对冲、多国税务筹划、海外项目尽调与现金流风控' },
    { id: 'skill-ai-business-prompt-engineering', cat: 'core', name: 'AI商业提示工程', short: 'AI Business Prompt Engineering', desc: '商用提示词工程、AI输出偏见甄别、大数据贸易市场预测工具落地' },
    { id: 'skill-overseas-brand-localization', cat: 'core', name: '海外品牌本地化', short: 'Overseas Brand Localization', desc: '中国品牌出海本地化传播、海外劳资管理、商会华人社群资源整合' },
    { id: 'skill-international-dispute-negotiation', cat: 'core', name: '国际争端谈判', short: 'International Dispute Negotiation', desc: '非暴力跨文明谈判、涉外合同风控、国际工程FIDIC条款纠纷化解' },
    // ===== 第二类：宇宙星际文明草根商学院 SKILL =====
    { id: 'skill-interstellar-resource-trade-layout', cat: 'cosmic', name: '星际资源贸易布局', short: 'Interstellar Resource Trade', desc: '星际能源、矿产、生态资源跨星系贸易逻辑，低稀缺共生商业思维搭建' },
    { id: 'skill-civilization-first-contact-business', cat: 'cosmic', name: '文明初接触商业', short: 'Civilization First-contact Business', desc: '跨星际文明初次商业对接、多维文明价值差规避、星际通用商业共识构建' },
    { id: 'skill-interstellar-long-cycle-investment', cat: 'cosmic', name: '星际长线投资', short: 'Interstellar Long-cycle Investment', desc: '千年级星际长线资产配置，跳出短期利润泡沫，星际基建估值测算逻辑' },
    { id: 'skill-zero-scarcity-circular-economy', cat: 'cosmic', name: '零稀缺循环经济', short: 'Zero-scarcity Circular Economy', desc: '星际无限资源循环商业模式，脱离地球稀缺竞争内卷，共创型分配机制' },
    { id: 'skill-interstellar-decentralized-community', cat: 'cosmic', name: '星际分布式社群', short: 'Interstellar Decentralized Community', desc: '跨星球分布式星际DAO自治、星际数字资产区块链治理、文明知识开源共享' },
    { id: 'skill-space-green-energy-investment', cat: 'cosmic', name: '太空绿色能源投资', short: 'Space Green Energy Investment', desc: '太空光伏、轨道储能、外星微离网电站商业研判，星际零碳基建方案设计' },
    { id: 'skill-interstellar-human-machine-symbiosis', cat: 'cosmic', name: '星际人机共生', short: 'Interstellar Human-Machine Symbiosis', desc: '星际级碳硅协同体系，外星AI算力合规、跨星球数据隐私法规管理' },
    { id: 'skill-star-civilization-survival-commerce', cat: 'cosmic', name: '星际文明生存商业', short: 'Star Civilization Survival Commerce', desc: '星际草根创业者低成本落地、外星本土社群融合、极端环境商业风控预案' },
    { id: 'skill-multidimensional-time-line-strategy', cat: 'cosmic', name: '多维时间线战略', short: 'Multidimensional Timeline Strategy', desc: '突破线性时间认知，多平行文明线商业推演，远期文明自愈商业使命规划' },
    { id: 'skill-interstellar-open-source-knowledge-co-build', cat: 'cosmic', name: '星际开源知识共建', short: 'Interstellar Open-source Knowledge Co-build', desc: '跨星际文明知识库共建、人类经验档案+星际AI知识库融合运营' },
    // ===== 第三类：备用商学院通用拓展 SKILL =====
    { id: 'skill-enterprise-knowledge-precipitation', cat: 'backup', name: '企业知识沉淀', short: 'Enterprise Knowledge Precipitation', desc: '企业内部经验档案搭建、文明知识库标准化沉淀、内部培训复用体系' },
    { id: 'skill-climate-risk-enterprise-resilience', cat: 'backup', name: '气候风险韧性', short: 'Climate Risk Enterprise Resilience', desc: '全球气候风险应对、企业低碳韧性改造、极端环境经营止损机制' },
    { id: 'skill-metaverse-digital-business-community', cat: 'backup', name: '元宇宙数字商业社群', short: 'Metaverse Digital Business Community', desc: '元宇宙虚实融合商业社群、数字孪生能源项目线上线下联动运营' },
    { id: 'skill-family-community-symbiosis-operation', cat: 'backup', name: '家族社群共生运营', short: 'Family-Community Symbiosis Operation', desc: '非营利社群与实业共生模式、混合业态收益分配、公益商业平衡设计' },
    { id: 'skill-information-independent-judgment', cat: 'backup', name: '信息独立判断', short: 'Information Independent Judgment', desc: '舆论迷雾数据甄别、虚假市场信息过滤、复杂混沌市场系统决策' },
    { id: 'skill-low-carbon-green-material-globalization', cat: 'backup', name: '低碳绿色材料全球化', short: 'Low-carbon Green Material Globalization', desc: '低碳建材、垂直农业生态产品跨境商业化、生态价值文旅转化模型' },
    { id: 'skill-crisis-team-stability-management', cat: 'backup', name: '危机团队稳定管理', short: 'Crisis Team Stability Management', desc: '经济衰退、地缘冲突下团队人心维稳、危机多维激励体系搭建' },
    { id: 'skill-blockchain-cross-border-value-distribution', cat: 'backup', name: '区块链跨境价值分配', short: 'Blockchain Cross-border Value Distribution', desc: '跨境数字资产公允分配、组织贫富分化调和、智能合约价值分成机制' },
    { id: 'skill-ai-technology-independence-defense', cat: 'backup', name: 'AI技术独立防御', short: 'AI Technology Independence Defense', desc: '规避AI技术依赖、离线独立经营体系、算法垄断风险防范方案' },
    { id: 'skill-centennial-civilization-roadmap-planning', cat: 'backup', name: '百年文明路线图', short: 'Centennial Civilization Roadmap', desc: '企业百年永续发展蓝图、地球村商业文明千年可持续路线图设计' }
  ],
  en: [
    // Core
    { id: 'skill-carbon-silicon-symbiosis', cat: 'core', name: 'Carbon-Silicon Symbiosis', short: 'Carbon-Silicon Symbiosis', desc: 'Build carbon-silicon symbiosis civilization framework, distinguish human decision authority from AI execution boundaries, implement human-AI collaborative workflows' },
    { id: 'skill-cross-border-new-energy-trade', cat: 'core', name: 'Cross-border New Energy Trade', short: 'Cross-border New Energy Trade', desc: 'PV-storage, green power equipment cross-border full-chain operations, CBAM carbon tariffs, green trade compliance management' },
    { id: 'skill-global-supply-chain-resilience', cat: 'core', name: 'Global Supply Chain Resilience', short: 'Global Supply Chain Resilience', desc: 'Global supply chain reconstruction, land-sea corridor planning, vendor coordination and supply disruption risk response system' },
    { id: 'skill-civilization-business-philosophy', cat: 'core', name: 'Civilization Business Philosophy', short: 'Civilization Business Philosophy', desc: 'Confucian-Mohist business ethics, East-West business value comparison, long-term civilization-level business strategy' },
    { id: 'skill-cross-cultural-organizational-governance', cat: 'core', name: 'Cross-cultural Org Governance', short: 'Cross-cultural Org Governance', desc: 'Cross-border multicultural team management, DAO decentralized community autonomy, family business intergenerational succession' },
    { id: 'skill-carbon-neutral-commercial-model', cat: 'core', name: 'Carbon-neutral Commercial Model', short: 'Carbon-neutral Commercial Model', desc: 'PV-storage EMC, zero-carbon parks, circular economy, voluntary carbon market ESG industrial operations' },
    { id: 'skill-cross-border-finance-risk-control', cat: 'core', name: 'Cross-border Finance & Risk', short: 'Cross-border Finance & Risk', desc: 'Cross-border investment structure, FX hedging, multi-country tax planning, overseas project due diligence and cash flow risk control' },
    { id: 'skill-ai-business-prompt-engineering', cat: 'core', name: 'AI Business Prompt Engineering', short: 'AI Business Prompt Engineering', desc: 'Commercial prompt engineering, AI output bias identification, big data trade market prediction tools deployment' },
    { id: 'skill-overseas-brand-localization', cat: 'core', name: 'Overseas Brand Localization', short: 'Overseas Brand Localization', desc: 'Chinese brand overseas localized communication, overseas labor management, chamber of commerce Chinese community resource integration' },
    { id: 'skill-international-dispute-negotiation', cat: 'core', name: 'International Dispute Negotiation', short: 'International Dispute Negotiation', desc: 'Non-violent cross-civilization negotiation, foreign contract risk control, international engineering FIDIC clause dispute resolution' },
    // Cosmic
    { id: 'skill-interstellar-resource-trade-layout', cat: 'cosmic', name: 'Interstellar Resource Trade', short: 'Interstellar Resource Trade', desc: 'Interstellar energy, mineral, ecological resources cross-galaxy trade logic, low-scarcity symbiosis business thinking' },
    { id: 'skill-civilization-first-contact-business', cat: 'cosmic', name: 'Civilization First-contact', short: 'Civilization First-contact Business', desc: 'Cross-civilization first commercial contact, multi-dimensional civilization value gap avoidance, interstellar universal business consensus' },
    { id: 'skill-interstellar-long-cycle-investment', cat: 'cosmic', name: 'Interstellar Long-cycle Investment', short: 'Interstellar Long-cycle Investment', desc: 'Millennial interstellar long-term asset allocation, escape short-term profit bubbles, interstellar infrastructure valuation logic' },
    { id: 'skill-zero-scarcity-circular-economy', cat: 'cosmic', name: 'Zero-scarcity Circular Economy', short: 'Zero-scarcity Circular Economy', desc: 'Interstellar infinite resource circular business model, escape Earth scarcity competition, co-creation distribution mechanism' },
    { id: 'skill-interstellar-decentralized-community', cat: 'cosmic', name: 'Interstellar Decentralized Community', short: 'Interstellar Decentralized Community', desc: 'Cross-planet interstellar DAO autonomy, interstellar digital asset blockchain governance, civilization knowledge open-source sharing' },
    { id: 'skill-space-green-energy-investment', cat: 'cosmic', name: 'Space Green Energy Investment', short: 'Space Green Energy Investment', desc: 'Space PV, orbital energy storage, alien micro off-grid station business assessment, interstellar zero-carbon infrastructure design' },
    { id: 'skill-interstellar-human-machine-symbiosis', cat: 'cosmic', name: 'Interstellar Human-Machine Symbiosis', short: 'Interstellar Human-Machine Symbiosis', desc: 'Interstellar carbon-silicon collaboration, alien AI computing compliance, cross-planet data privacy regulation management' },
    { id: 'skill-star-civilization-survival-commerce', cat: 'cosmic', name: 'Star Civilization Survival Commerce', short: 'Star Civilization Survival Commerce', desc: 'Interstellar grassroots entrepreneur low-cost landing, alien local community integration, extreme environment business risk预案' },
    { id: 'skill-multidimensional-time-line-strategy', cat: 'cosmic', name: 'Multidimensional Timeline Strategy', short: 'Multidimensional Timeline Strategy', desc: 'Break linear time cognition, multi-parallel civilization business deduction, long-term civilization self-healing business mission planning' },
    { id: 'skill-interstellar-open-source-knowledge-co-build', cat: 'cosmic', name: 'Interstellar Open-source Knowledge', short: 'Interstellar Open-source Knowledge Co-build', desc: 'Cross-civilization knowledge base co-construction, human experience archive + interstellar AI knowledge base fusion operations' },
    // Backup
    { id: 'skill-enterprise-knowledge-precipitation', cat: 'backup', name: 'Enterprise Knowledge Archive', short: 'Enterprise Knowledge Precipitation', desc: 'Internal experience archive construction, civilization knowledge base standardization, internal training reuse system' },
    { id: 'skill-climate-risk-enterprise-resilience', cat: 'backup', name: 'Climate Risk Resilience', short: 'Climate Risk Enterprise Resilience', desc: 'Global climate risk response, enterprise low-carbon resilience transformation, extreme environment business loss mitigation' },
    { id: 'skill-metaverse-digital-business-community', cat: 'backup', name: 'Metaverse Digital Community', short: 'Metaverse Digital Business Community', desc: 'Metaverse virtual-real business community, digital twin energy project online-offline linkage operations' },
    { id: 'skill-family-community-symbiosis-operation', cat: 'backup', name: 'Family-Community Symbiosis', short: 'Family-Community Symbiosis Operation', desc: 'Non-profit community-industry symbiosis model, mixed business revenue distribution, public welfare-business balance design' },
    { id: 'skill-information-independent-judgment', cat: 'backup', name: 'Info Independent Judgment', short: 'Information Independent Judgment', desc: 'Public opinion fog data discrimination, false market information filtering, complex chaotic market system decision-making' },
    { id: 'skill-low-carbon-green-material-globalization', cat: 'backup', name: 'Low-carbon Material Globalization', short: 'Low-carbon Green Material Globalization', desc: 'Low-carbon building materials, vertical agriculture eco-products cross-border commercialization, eco-value cultural tourism model' },
    { id: 'skill-crisis-team-stability-management', cat: 'backup', name: 'Crisis Team Stability', short: 'Crisis Team Stability Management', desc: 'Economic recession, geopolitical conflict team morale stabilization, crisis multi-dimensional incentive system' },
    { id: 'skill-blockchain-cross-border-value-distribution', cat: 'backup', name: 'Blockchain Value Distribution', short: 'Blockchain Cross-border Value Distribution', desc: 'Cross-border digital asset fair distribution, organization wealth gap reconciliation, smart contract value sharing mechanism' },
    { id: 'skill-ai-technology-independence-defense', cat: 'backup', name: 'AI Tech Independence', short: 'AI Technology Independence Defense', desc: 'Avoid AI technology dependency, offline independent operation system, algorithm monopoly risk prevention' },
    { id: 'skill-centennial-civilization-roadmap-planning', cat: 'backup', name: 'Centennial Civilization Roadmap', short: 'Centennial Civilization Roadmap', desc: 'Enterprise centennial sustainable development blueprint, Earth Village business civilization millennial sustainable roadmap design' }
  ]
};

// Category labels per language
const SKILL_CAT_LABELS = {
  zh: { core: '🌍 地球村商学院核心课程', cosmic: '🚀 宇宙星际文明草根商学院', backup: '🔧 备用商学院通用拓展' },
  en: { core: '🌍 Earth Village Core Skills', cosmic: '🚀 Cosmic Grassroots B-School', backup: '🔧 Backup General Skills' }
};

// Update rules text per language
const SKILL_UPDATE_RULES = {
  zh: {
    syncSource: '同步源：',
    syncUrl: 'https://ucoingroup.github.io/Earth-Village-School/',
    syncDesc: '100门公开课原文库',
    trigger: '更新触发：每周一凌晨自动抓取课程新增/调整板块，替换、增补对应SKILL释义',
    expandRule: '标签扩容规则：备用SKILL池预留扩容位，当主课程新增细分赛道时，优先启用21-30备用SKILL轮换；年度新增超10门课时自动扩充备用SKILL数量',
    searchAdapter: '检索适配：全部skill短标识符统一小写+连字符格式，适配网页检索、学员技能标签筛选、AI课程匹配接口调用'
  },
  en: {
    syncSource: 'Sync Source: ',
    syncUrl: 'https://ucoingroup.github.io/Earth-Village-School/',
    syncDesc: '100 Open Courses Library',
    trigger: 'Update Trigger: Auto-crawl course additions/adjustments every Monday at midnight, replace and supplement corresponding SKILL definitions',
    expandRule: 'Tag Expansion: Backup SKILL pool reserved for expansion. When main courses add sub-tracks,优先启用backup SKILLS 21-30轮换；annual additions >10 courses auto-expand backup SKILL count',
    searchAdapter: 'Search Adapter: All skill short identifiers use lowercase + hyphen format, compatible with web search, student skill tag filtering, AI course matching API calls'
  }
};
