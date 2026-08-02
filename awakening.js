// ============================================
// Earth Village Human Civilization Awakening
// What changes will happen when human civilization awakens?
// ============================================

const AWAKENING = {
  intro: {
    cn: "地球村人类文明觉醒，是指全球人类从分裂、掠夺、短视的旧文明模式，转向共生、协作、长远的文明新阶段。这不是乌托邦幻想，而是在科技、经济、生态和精神多个层面已经发生的深层变革。当文明觉醒发生，人类社会将经历以下十二个维度的根本性变化。",
    en: "Earth Village human civilization awakening refers to the global shift from a fragmented, exploitative, short-sighted old civilization model to a symbiotic, collaborative, long-term new civilization stage. This is not utopian fantasy but a deep transformation already occurring across technology, economy, ecology, and spiritual dimensions. When civilization awakening happens, human society will undergo fundamental changes in twelve dimensions."
  },

  dimensions: [
    {
      icon: "🌍",
      title_cn: "从零和博弈到正和共生",
      title_en: "From Zero-Sum to Positive-Sum Symbiosis",
      desc_cn: "觉醒后的文明不再以'你赢我输'为基本假设。国与国、企业与企业的关系从竞争掠夺转向生态共建。贸易不再是零和博弈，而是价值共创。资源分配从'抢蛋糕'转向'做大蛋糕并公平分享'。碳硅共生框架下，人类定方向、AI做执行，协作效率大幅提升。",
      desc_en: "Awakened civilization no longer assumes 'your gain is my loss.' Relationships between nations and enterprises shift from competitive exploitation to ecological co-creation. Trade becomes value co-creation rather than zero-sum games. Resource allocation shifts from 'fighting for the pie' to 'growing and sharing the pie fairly.'"
    },
    {
      icon: "🌱",
      title_cn: "从无限增长到可持续循环",
      title_en: "From Infinite Growth to Sustainable Circulation",
      desc_cn: "文明觉醒终结了'GDP崇拜'。经济目标从无限增长转向可持续繁荣。循环经济成为主流——废弃物即资源，碳排放即资产。零碳园区、垂直农业和绿色建材从边缘走向中心。企业价值不再仅以利润衡量，ESG成为核心评价标准。",
      desc_en: "Civilization awakening ends 'GDP worship.' Economic goals shift from infinite growth to sustainable prosperity. Circular economy becomes mainstream — waste is resource, carbon emissions are assets. Zero-carbon parks and vertical farming move from margin to center."
    },
    {
      icon: "🧠",
      title_cn: "从信息碎片到系统认知",
      title_en: "From Information Fragments to Systems Cognition",
      desc_cn: "觉醒后的人类不再被算法喂养碎片信息。系统思维成为基础素养——人们理解复杂系统的反馈回路、延迟效应和杠杆点。教育从知识灌输转向思维模型构建。批判性思维、数据素养和跨学科整合成为每个人的核心能力。",
      desc_en: "Awakened humans are no longer fed fragmented information by algorithms. Systems thinking becomes basic literacy — people understand feedback loops, delay effects, and leverage points of complex systems. Education shifts from knowledge灌输 to mental model construction."
    },
    {
      icon: "🤝",
      title_cn: "从文化冲突到文明对话",
      title_en: "From Cultural Conflict to Civilizational Dialogue",
      desc_cn: "文明觉醒消解了'文明冲突论'。不同文化不再被视为威胁而是财富。跨文化沟通能力成为基本素养。非暴力沟通(NVC)从个人技巧上升为国际协商的基础框架。差序格局与团体格局的差异被理解而非被批判，人类共同体的共识在多元中涌现。",
      desc_en: "Civilization awakening dissolves the 'clash of civilizations' narrative. Different cultures are seen as wealth rather than threats. Cross-cultural communication becomes basic literacy. Nonviolent communication scales from personal skill to international negotiation framework."
    },
    {
      icon: "⚡",
      title_cn: "从化石能源到清洁永续",
      title_en: "From Fossil Fuels to Clean Eternal Energy",
      desc_cn: "能源转型是文明觉醒的物理基础。太阳能、风能、氢能和储能技术使能源从稀缺走向充裕。微电网和分布式能源赋予社区能源自主权。太空太阳能和核聚变从科幻走向工程。能源民主化重塑地缘政治格局——能源不再是国家权力的筹码。",
      desc_en: "Energy transition is the physical foundation of civilization awakening. Solar, wind, hydrogen and storage technologies move energy from scarcity to abundance. Microgrids give communities energy autonomy. Space-based solar and fusion move from sci-fi to engineering."
    },
    {
      icon: "🤖",
      title_cn: "从技术恐惧到碳硅共生",
      title_en: "From Tech Fear to Carbon-Silicon Symbiosis",
      desc_cn: "觉醒后的文明不再在'拥抱技术'和'恐惧技术'之间摇摆。碳硅共生框架明确了边界：碳基人类定方向、做决策、担责任；硅基AI做执行、提效率、扩能力。人类保留脱离AI的独立经营能力，防范技术依赖。AI伦理写入法律，算法垄断被防范。",
      desc_en: "Awakened civilization no longer oscillates between 'embracing technology' and 'fearing it.' The carbon-silicon symbiosis framework clarifies boundaries: carbon-based humans set direction, make decisions, bear responsibility; silicon-based AI executes, improves efficiency, expands capabilities."
    },
    {
      icon: "💰",
      title_cn: "从贫富分化到价值公平分配",
      title_en: "From Wealth Gap to Fair Value Distribution",
      desc_cn: "文明觉醒直面贫富分化的文明级风险。价值分配机制从'资本优先'转向'贡献导向'。区块链和智能合约使透明分配成为可能。DAO(分布式自治组织)重塑组织治理。基本收入(UBI)从辩论走向试点。财富不再等同于货币，多维价值衡量体系建立。",
      desc_en: "Civilization awakening confronts the civilizational risk of wealth polarization. Value distribution mechanisms shift from 'capital first' to 'contribution-oriented.' Blockchain and smart contracts enable transparent distribution. DAOs reshape organizational governance."
    },
    {
      icon: "🏛️",
      title_cn: "从短期民主到代际治理",
      title_en: "From Short-term Democracy to Intergenerational Governance",
      desc_cn: "觉醒后的政治制度不再被选举周期绑架。长期主义写入治理架构——七代原则(每个决策考虑七代后人的影响)成为制度规范。公民素养从投票扩展到参与式预算和审议式民主。DAO的链上治理实验为全球治理提供新范式。",
      desc_en: "Awakened political institutions are no longer held hostage by election cycles. Long-termism is written into governance architecture — the Seven Generations Principle becomes institutional norm. Citizen literacy expands from voting to participatory budgeting and deliberative democracy."
    },
    {
      icon: "🌌",
      title_cn: "从地球封闭到星际开放",
      title_en: "From Earth-Closed to Interstellar-Open",
      desc_cn: "文明觉醒打开星际视野。航天商业化降低太空进入成本。太空经济从通信卫星扩展到太空制造、轨道能源和小行星采矿。星际文明不再是科幻而是工程规划。人类文明从地球封闭系统走向星际开放系统，'多行星物种'成为文明目标。",
      desc_en: "Civilization awakening opens interstellar horizons. Space commercialization lowers space access costs. Space economy expands from communication satellites to space manufacturing, orbital energy, and asteroid mining. 'Multi-planetary species' becomes a civilizational goal."
    },
    {
      icon: "🧘",
      title_cn: "从物质追逐到意义觉醒",
      title_en: "From Material Pursuit to Meaning Awakening",
      desc_cn: "最深层的觉醒发生在个体内心。人类从物质消费的无限追逐中觉醒，转向意义和目的的探寻。心流体验、内在动机和自我关怀成为主流价值观。工作不再是谋生手段而是自我实现的途径。'人类文明自愈'从理念上升为文明使命。",
      desc_en: "The deepest awakening occurs within individuals. Humans awaken from the endless pursuit of material consumption, turning to the search for meaning and purpose. Flow experiences, intrinsic motivation, and self-compassion become mainstream values."
    },
    {
      icon: "🌐",
      title_cn: "从知识垄断到开源共享",
      title_en: "From Knowledge Monopoly to Open Source Sharing",
      desc_cn: "文明觉醒打破知识壁垒。全球开源知识共建成为常态——教育、科研和技术不再被少数机构垄断。认知盈余被释放，全球数十亿人的空闲时间转化为创造力。地球村商学院本身就是这一趋势的体现——100门公开课向全人类免费开放。",
      desc_en: "Civilization awakening breaks knowledge barriers. Global open source knowledge co-creation becomes the norm — education, research, and technology are no longer monopolized by a few institutions. Cognitive surplus is released, transforming billions of people's free time into creativity."
    },
    {
      icon: "🕊️",
      title_cn: "从战争逻辑到和平生态",
      title_en: "From War Logic to Peace Ecology",
      desc_cn: "最终，文明觉醒终结了战争作为解决争端的手段。这并非天真理想，而是理性演进——在核武器、网络战和AI武器时代，战争的代价已超出任何可能的收益。和平不再是停火状态而是积极生态——通过贸易互依、文化交流和制度性对话维持。人类将战争资源转向文明建设。",
      desc_en: "Ultimately, civilization awakening ends war as a means of dispute resolution. This is not naive idealism but rational evolution — in the era of nuclear weapons, cyber warfare, and AI weapons, the cost of war exceeds any possible benefit. Peace becomes an active ecology maintained through trade interdependence, cultural exchange, and institutional dialogue."
    }
  ],

  stages: [
    {
      phase_cn: "第一阶段：认知觉醒",
      phase_en: "Phase 1: Cognitive Awakening",
      desc_cn: "个体层面——人们开始意识到旧模式的不可持续。阅读、学习和反思成为风潮。系统思维和批判性思维普及。",
      desc_en: "Individual level — people begin to realize the unsustainability of old patterns. Reading, learning, and reflection become trends. Systems thinking and critical thinking spread."
    },
    {
      phase_cn: "第二阶段：技术赋能",
      phase_en: "Phase 2: Technological Empowerment",
      desc_cn: "工具层面——清洁能源、AI协作和区块链等技术为新模式提供基础设施。技术不再是控制工具而是解放工具。",
      desc_en: "Tool level — clean energy, AI collaboration, and blockchain technologies provide infrastructure for new patterns. Technology shifts from control tool to liberation tool."
    },
    {
      phase_cn: "第三阶段：制度重构",
      phase_en: "Phase 3: Institutional Reconstruction",
      desc_cn: "制度层面——新的治理模式、分配机制和组织形式从边缘走向主流。DAO、ESG和循环经济从实验走向常态。",
      desc_en: "Institutional level — new governance models, distribution mechanisms, and organizational forms move from margin to mainstream. DAOs, ESG, and circular economy move from experiment to norm."
    },
    {
      phase_cn: "第四阶段：文明跃迁",
      phase_en: "Phase 4: Civilizational Leap",
      desc_cn: "整体层面——人类文明完成从'掠夺-增长-崩溃'循环到'共生-可持续-进化'模式的跃迁。星际文明时代正式开启。",
      desc_en: "Holistic level — human civilization completes the transition from the 'exploit-grow-collapse' cycle to the 'symbiosis-sustainability-evolution' model. The interstellar civilization era officially begins."
    }
  ],

  conclusion: {
    cn: "文明觉醒不是一蹴而就的事件，而是跨越数代人的持续过程。每个人都是觉醒的参与者——通过学习、实践和传播，我们共同推动文明从旧模式向新范式转变。地球村商学院的100门公开课、全球十大商学院的300门精选课程、60本人类智慧经典书籍，都是这场觉醒的知识基础设施。碳基定方向，硅基做执行，碳硅共生，服务文明自愈。这就是地球村人类文明觉醒的核心。",
    en: "Civilization awakening is not an overnight event but a continuous process spanning generations. Everyone is a participant — through learning, practice, and sharing, we collectively push civilization from old patterns to new paradigms. The 100 open courses, 300 selected business school courses, and 60 wisdom books of Earth Village Business School are the knowledge infrastructure of this awakening. Carbon sets direction, silicon executes, carbon-silicon symbiosis serves civilizational self-healing."
  }
};
