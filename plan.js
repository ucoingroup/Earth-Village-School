// ============================================
// 100-Day Self-Study Plan
// 10 Phases x 10 Days each
// ============================================

const STUDY_PLAN = [
  // Phase 1: Foundations (Day 1-10)
  { phase:1, phase_cn:"基础筑基", phase_en:"Foundations", days:"1-10",
    items:[
      {day:"Day 1-2", cn:"宏观经济学基础：GDP、通胀、利率概念，阅读《经济学原理》曼昆著 第1-5章", en:"Macroeconomics basics: GDP, inflation, interest rates. Read Mankiw's Economics Principles Ch.1-5"},
      {day:"Day 3-4", cn:"微观经济学入门：供需理论、弹性、市场结构，阅读曼昆 第6-10章", en:"Microeconomics: supply/demand, elasticity, market structures. Read Mankiw Ch.6-10"},
      {day:"Day 5-6", cn:"会计基础：资产负债表、利润表、现金流量表的结构与解读", en:"Accounting fundamentals: balance sheet, income statement, cash flow statement"},
      {day:"Day 7-8", cn:"统计学基础：描述性统计、概率分布、假设检验", en:"Statistics fundamentals: descriptive stats, probability distributions, hypothesis testing"},
      {day:"Day 9-10", cn:"商业写作与沟通：商业计划书框架、演示文稿设计原则", en:"Business writing: business plan framework, presentation design principles"}
    ]
  },
  // Phase 2: Business Core (Day 11-20)
  { phase:2, phase_cn:"商业核心", phase_en:"Business Core", days:"11-20",
    items:[
      {day:"Day 11-12", cn:"战略管理：波特五力模型、SWOT分析、竞争优势来源", en:"Strategic management: Porter's Five Forces, SWOT, competitive advantage"},
      {day:"Day 13-14", cn:"市场营销：4P理论、STP模型、数字营销基础", en:"Marketing: 4P, STP model, digital marketing fundamentals"},
      {day:"Day 15-16", cn:"财务管理：DCF估值、WACC、财务比率分析", en:"Financial management: DCF valuation, WACC, financial ratios"},
      {day:"Day 17-18", cn:"运营管理：精益生产、六西格玛、流程优化", en:"Operations: lean production, Six Sigma, process optimization"},
      {day:"Day 19-20", cn:"组织行为学：动机理论、团队动力学、领导力模型", en:"Organizational behavior: motivation, team dynamics, leadership models"}
    ]
  },
  // Phase 3: Energy Fundamentals (Day 21-30)
  { phase:3, phase_cn:"能源基础", phase_en:"Energy Fundamentals", days:"21-30",
    items:[
      {day:"Day 21-22", cn:"能源概论：全球能源格局、一次能源与二次能源、能源单位换算", en:"Energy overview: global energy landscape, primary/secondary energy, unit conversion"},
      {day:"Day 23-24", cn:"石油天然气工业：上游勘探开发、中游储运、下游炼化全产业链", en:"Oil & gas industry: upstream, midstream, downstream value chain"},
      {day:"Day 25-26", cn:"电力系统基础：发电、输电、配电、电力市场基本概念", en:"Power systems: generation, transmission, distribution, electricity market basics"},
      {day:"Day 27-28", cn:"可再生能源：太阳能光伏/光热、风能、水力发电技术原理", en:"Renewable energy: solar PV/CSP, wind, hydropower principles"},
      {day:"Day 29-30", cn:"核能基础：裂变反应堆原理、核燃料循环、核安全基本概念", en:"Nuclear energy: fission reactor principles, fuel cycle, nuclear safety basics"}
    ]
  },
  // Phase 4: Energy Transition (Day 31-40)
  { phase:4, phase_cn:"能源转型", phase_en:"Energy Transition", days:"31-40",
    items:[
      {day:"Day 31-32", cn:"储能技术：锂电池原理、储能系统集成、其他储能路线", en:"Energy storage: Li-ion batteries, storage systems, alternative storage"},
      {day:"Day 33-34", cn:"氢能全产业链：制氢（绿/蓝/灰氢）、储运、燃料电池应用", en:"Hydrogen value chain: production (green/blue/grey), storage, fuel cells"},
      {day:"Day 35-36", cn:"智能电网：微电网、需求响应、虚拟电厂概念", en:"Smart grid: microgrids, demand response, virtual power plants"},
      {day:"Day 37-38", cn:"碳市场与CCUS：碳排放交易体系、碳捕集利用与封存技术", en:"Carbon markets & CCUS: ETS, carbon capture, utilization, storage"},
      {day:"Day 39-40", cn:"能源政策与碳中和：巴黎协定、中国3060、欧盟Fit for 55", en:"Energy policy & carbon neutrality: Paris Agreement, China 3060, EU Fit for 55"}
    ]
  },
  // Phase 5: Digital & Tech (Day 41-50)
  { phase:5, phase_cn:"数字科技", phase_en:"Digital & Technology", days:"41-50",
    items:[
      {day:"Day 41-42", cn:"人工智能基础：机器学习、深度学习、Transformer架构概念", en:"AI fundamentals: ML, deep learning, Transformer architecture"},
      {day:"Day 43-44", cn:"大数据分析：数据可视化、预测分析、商业智能工具", en:"Big data analytics: visualization, predictive analytics, BI tools"},
      {day:"Day 45-46", cn:"区块链与Web3：分布式账本、智能合约、DeFi概念", en:"Blockchain & Web3: distributed ledger, smart contracts, DeFi"},
      {day:"Day 47-48", cn:"物联网与5G：传感器网络、工业互联网、边缘计算", en:"IoT & 5G: sensor networks, industrial internet, edge computing"},
      {day:"Day 49-50", cn:"云计算与网络安全：云服务模型、零信任架构、安全运营", en:"Cloud & cybersecurity: service models, zero trust, security operations"}
    ]
  },
  // Phase 6: Aerospace & Space Economy (Day 51-60)
  { phase:6, phase_cn:"航天与太空经济", phase_en:"Aerospace & Space Economy", days:"51-60",
    items:[
      {day:"Day 51-52", cn:"航天工程基础：轨道力学、火箭推进、航天器设计概述", en:"Aerospace basics: orbital mechanics, rocket propulsion, spacecraft design"},
      {day:"Day 53-54", cn:"商业航天产业：发射服务、卫星互联网、太空旅游市场", en:"Commercial space: launch services, satellite internet, space tourism"},
      {day:"Day 55-56", cn:"太空经济分析：发射成本演变、卫星商业模式、太空采矿经济学", en:"Space economics: launch cost evolution, satellite business, space mining"},
      {day:"Day 57-58", cn:"太空法与治理：外层空间条约、太空资源权、轨道管理", en:"Space law: Outer Space Treaty, resource rights, orbital management"},
      {day:"Day 59-60", cn:"卫星技术与遥感：通信卫星、遥感应用、导航定位", en:"Satellite tech: communications, remote sensing, navigation"}
    ]
  },
  // Phase 7: Interstellar Civilization (Day 61-70)
  { phase:7, phase_cn:"星际文明", phase_en:"Interstellar Civilization", days:"61-70",
    items:[
      {day:"Day 61-62", cn:"宇宙学基础：大爆炸理论、暗物质、暗能量、宇宙演化", en:"Cosmology: Big Bang, dark matter/energy, cosmic evolution"},
      {day:"Day 63-64", cn:"系外行星与宜居带：探测方法、生命搜索、生物标志物", en:"Exoplanets: detection methods, habitable zones, biosignatures"},
      {day:"Day 65-66", cn:"费米悖论与SETI：德雷克方程、大过滤器、技术签名", en:"Fermi Paradox & SETI: Drake Equation, Great Filter, technosignatures"},
      {day:"Day 67-68", cn:"星际航行理论：聚变推进、光帆、代际飞船概念", en:"Interstellar travel: fusion propulsion, light sails, generation ships"},
      {day:"Day 69-70", cn:"卡尔达舍夫等级：文明能量等级、戴森球、巨结构工程", en:"Kardashev Scale: civilization energy levels, Dyson spheres, megastructures"}
    ]
  },
  // Phase 8: Innovation & Entrepreneurship (Day 71-80)
  { phase:8, phase_cn:"创新创业", phase_en:"Innovation & Entrepreneurship", days:"71-80",
    items:[
      {day:"Day 71-72", cn:"精益创业：MVP、客户开发、快速迭代方法论", en:"Lean startup: MVP, customer development, rapid iteration"},
      {day:"Day 73-74", cn:"商业模式设计：商业模式画布、价值主张、收入模式", en:"Business model design: canvas, value proposition, revenue models"},
      {day:"Day 75-76", cn:"创业融资：天使投资、VC/PE、估值方法、Term Sheet", en:"Venture financing: angel, VC/PE, valuation, Term Sheet"},
      {day:"Day 77-78", cn:"颠覆式创新：创新者窘境、蓝海战略、技术S曲线", en:"Disruptive innovation: Innovator's Dilemma, Blue Ocean, S-curves"},
      {day:"Day 79-80", cn:"项目管理：PMBOK、敏捷开发、Scrum框架实践", en:"Project management: PMBOK, agile, Scrum framework"}
    ]
  },
  // Phase 9: Global Business & Strategy (Day 81-90)
  { phase:9, phase_cn:"全球商务", phase_en:"Global Business", days:"81-90",
    items:[
      {day:"Day 81-82", cn:"国际贸易：比较优势、贸易政策、WTO与区域贸易协定", en:"International trade: comparative advantage, trade policy, WTO"},
      {day:"Day 83-84", cn:"跨文化管理：霍夫斯泰德文化维度、跨国团队管理", en:"Cross-cultural management: Hofstede dimensions, multinational teams"},
      {day:"Day 85-86", cn:"能源地缘政治：石油地缘、能源武器化、关键矿产供应链", en:"Energy geopolitics: oil geopolitics, weaponization, critical minerals"},
      {day:"Day 87-88", cn:"供应链管理：全球物流、韧性供应链、近岸外包趋势", en:"Supply chain: global logistics, resilience, nearshoring"},
      {day:"Day 89-90", cn:"ESG与可持续发展：ESG评级体系、绿色金融、碳中和战略", en:"ESG & sustainability: ESG ratings, green finance, carbon neutrality"}
    ]
  },
  // Phase 10: Future & Integration (Day 91-100)
  { phase:10, phase_cn:"未来与整合", phase_en:"Future & Integration", days:"91-100",
    items:[
      {day:"Day 91-92", cn:"未来学方法论：技术预测、情景规划、库兹韦尔奇点理论", en:"Futurology: tech forecasting, scenario planning, singularity theory"},
      {day:"Day 93-94", cn:"太空太阳能与核聚变：SBSP概念、聚变商业化前景", en:"Space solar power & fusion: SBSP concepts, fusion commercialization"},
      {day:"Day 95-96", cn:"行星地球化与太空殖民：火星殖民规划、月球基地设计", en:"Terraforming & space colonization: Mars planning, lunar base design"},
      {day:"Day 97-98", cn:"存在性风险与文明韧性：小行星防御、AI风险、多行星文明", en:"Existential risk: asteroid defense, AI risk, multi-planetary civilization"},
      {day:"Day 99-100", cn:"综合复习与知识体系构建：整理学习笔记、撰写研究论文、制定持续学习计划", en:"Integration & review: organize notes, write research paper, plan continuous learning"}
    ]
  }
];
