import type { Scenario } from "./types";

export const productScenarios: Scenario[] = [
  {
    id: "prd-writing",
    categoryId: "product",
    title: "PRD 文档撰写",
    description: "用AI快速产出结构完整的产品需求文档。",
    difficulty: "intermediate",
    timeEstimate: "1-2小时",
    tools: [
      { name: "Claude", url: "https://claude.ai" },
      { name: "Notion AI", url: "https://notion.so" },
    ],
    steps: [
      {
        title: "需求梳理与结构化",
        description: "将模糊需求转化为结构化的PRD框架。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '我要做一个"AI工具推荐"功能，用户输入使用场景后推荐最合适的工具。请帮我撰写PRD，包含：1）背景与目标（为什么做、成功指标）；2）用户故事（3个核心场景，用As a/I want/So that格式）；3）功能需求（按P0/P1/P2优先级排列）；4）非功能需求（性能/安全/兼容性）；5）数据需求（需要什么数据、来源）；6）交互流程（主流程+异常流程）；7）上线计划（分几期、每期范围）。',
        tips: [
          "PRD最重要的是「为什么做」和「成功指标」，不是功能列表",
          "每个功能点要标注优先级，不然开发会什么都做什么都做不好",
          "异常流程和边界情况是PRD最容易遗漏的地方",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "用户流程图",
        description: "生成用户操作的完整流程图。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请用Mermaid语法画出"AI工具推荐"功能的用户流程图，包含：1）用户输入场景描述；2）系统理解意图并分类；3）匹配推荐算法；4）展示推荐结果（列表+理由）；5）用户反馈（有用/没用）；6）异常流程（输入无法识别/无匹配结果）。',
        tips: [
          "流程图先画主路径（Happy Path），再补充分支和异常",
          "每个决策节点要标注判断条件",
          "流程图发给开发和设计review，确保理解一致",
        ],
        alternatives: [
          { name: "Claude", url: "https://claude.ai" },
          { name: "Whimsical", url: "https://whimsical.com" },
        ],
      },
      {
        title: "验收标准定义",
        description: "为每个功能点生成可验证的验收标准。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          "请为以下P0功能点生成验收标准（Acceptance Criteria），用Given/When/Then格式：\n1. 用户输入场景描述\n2. 系统推荐工具列表\n3. 用户反馈推荐质量\n\n每个功能点至少5条AC，包含正常情况和边界情况。",
        tips: [
          "验收标准要具体到可以写成自动化测试用例",
          "边界情况：空输入、超长输入、特殊字符、并发请求",
          "和QA一起review AC，他们能发现PM忽略的场景",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
    ],
    tags: ["PRD", "需求", "文档", "产品"],
  },
  {
    id: "user-research",
    categoryId: "product",
    title: "用户调研与分析",
    description: "AI辅助设计调研方案、分析调研数据、产出洞察报告。",
    difficulty: "intermediate",
    timeEstimate: "3-5小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Claude", url: "https://claude.ai" },
    ],
    steps: [
      {
        title: "调研方案设计",
        description: "设计完整的用户调研方案和问卷。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我想了解用户在选择AI工具时的决策过程和痛点。请帮我设计：1）调研目标（要回答的3个核心问题）；2）调研方法选择（问卷/访谈/可用性测试，为什么选这个方法）；3）样本量和筛选标准；4）20题的调研问卷（单选/多选/开放题混合，按漏斗逻辑排列）；5）1小时深度访谈的提纲。",
        tips: [
          "问卷先放简单的筛选题，确保被访者是目标用户",
          "避免引导性问题，如「你是否同意XX很好用？」",
          "开放题放在问卷后面，填到这里的人更认真",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "访谈记录分析",
        description: "用AI快速分析大量访谈记录，提取关键洞察。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          "请分析以下5份用户访谈记录，提取：1）用户决策过程中的共性模式（至少3个）；2）高频提及的痛点（按频次排序）；3）用户对现有工具的评价总结；4）未被满足的需求（潜在机会点）；5）出现分歧的观点（不同类型用户的差异）；6）可直接引用的原话（Verbatim）5条。\n\n[粘贴访谈记录]",
        tips: [
          "AI分析是辅助不是替代，重要发现要回原文验证",
          "关注用户的行为而非态度，「他们做了什么」比「他们说了什么」重要",
          "不同用户类型的差异发现往往是最有价值的洞察",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "洞察报告输出",
        description: "将调研发现转化为可操作的洞察报告。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请将以上调研分析整合为一份洞察报告，格式：1）Executive Summary（3句话概括核心发现）；2）关键发现（5个，每个配数据+原话+影响）；3）用户画像更新（基于调研发现调整）；4）机会点排序（Impact vs Effort矩阵）；5）行动建议（近期/中期/远期各2条）；6）附录（方法论和数据统计表）。",
        tips: [
          "报告给老板看Executive Summary，给团队看关键发现，给自己看附录",
          "每个发现要配「So What」——这对产品意味着什么",
          "行动建议要具体到谁做什么什么时候完成",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
    ],
    tags: ["调研", "用户", "洞察", "访谈"],
  },
  {
    id: "mvp-prototype",
    categoryId: "product",
    title: "MVP 快速原型验证",
    description: "用AI工具48小时内从idea到可演示的MVP原型。",
    difficulty: "advanced",
    timeEstimate: "1-2天",
    tools: [
      { name: "v0", url: "https://v0.dev" },
      { name: "Cursor", url: "https://cursor.sh" },
      { name: "Vercel", url: "https://vercel.com" },
      { name: "Claude", url: "https://claude.ai" },
    ],
    steps: [
      {
        title: "精简需求到最小可行",
        description: "砍掉所有非核心功能，只保留验证假设必需的最小集。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '我的产品idea是"基于场景的AI工具推荐引擎"。请帮我做MVP范围定义：1）核心假设是什么（我们要验证什么）；2）验证这个假设最少需要哪些功能；3）明确列出MVP不包含的功能（No-Go list）；4）成功标准（什么数据证明假设成立）；5）48小时的开发计划（按小时排期）。',
        tips: [
          "MVP的核心是验证一个假设，不是做一个小产品",
          "如果一个功能删掉后还能验证假设，那它就不该在MVP里",
          "MVP的质量标准是「能用」而非「好用」",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "前端快速实现",
        description: "用AI代码生成工具快速搭建前端。",
        tool: { name: "v0", url: "https://v0.dev" },
        prompt:
          "Build a single-page AI tool recommendation app: 1) Text input where users describe their scenario (e.g., 'I need to create social media content'); 2) Submit button; 3) Results section showing 3-5 recommended tools as cards (tool name, category badge, one-line reason, link to tool, match score percentage); 4) Simple dark/light theme toggle. Clean, modern UI with good mobile responsiveness.",
        tips: [
          "v0生成的代码可以直接在Cursor中继续开发",
          "前端先用mock数据，验证UI和交互是否合理",
          "不要在UI细节上花太多时间，MVP阶段80分就够",
        ],
        alternatives: [
          { name: "Cursor", url: "https://cursor.sh" },
          { name: "Bolt", url: "https://bolt.new" },
        ],
      },
      {
        title: "后端逻辑实现",
        description: "用AI辅助快速实现推荐逻辑。",
        tool: { name: "Cursor", url: "https://cursor.sh" },
        prompt:
          "在Cursor中实现推荐API：接收用户场景描述，用OpenAI API做意图分类，匹配预设的工具数据库（JSON），返回Top 5推荐结果。用Next.js API Routes实现，不需要数据库。",
        tips: [
          "MVP阶段用JSON文件当数据库完全够用",
          "推荐算法先用规则匹配（关键词→分类→工具），别一上来就搞ML",
          "加简单的错误处理和loading状态，提升演示体验",
        ],
        alternatives: [
          { name: "Claude", url: "https://claude.ai" },
          { name: "Replit", url: "https://replit.com" },
        ],
      },
      {
        title: "部署与收集反馈",
        description: "一键部署并收集早期用户反馈。",
        tool: { name: "Vercel", url: "https://vercel.com" },
        prompt:
          "将项目推送到GitHub，通过Vercel自动部署。分享链接给10-20个目标用户，在页面底部加一个简单的反馈表单（NPS评分+一句话反馈）。",
        tips: [
          "Vercel部署后立刻就有https链接，可以直接分享",
          "第一批用户找朋友或社群成员，不要找完全陌生人",
          "重点观察用户的行为（停留时间、点击位置），而非只听他们说什么",
        ],
        alternatives: [
          { name: "Netlify", url: "https://netlify.com" },
          { name: "Railway", url: "https://railway.app" },
        ],
      },
    ],
    tags: ["MVP", "原型", "验证", "快速"],
  },
  {
    id: "business-plan",
    categoryId: "product",
    title: "商业计划书撰写",
    description: "AI辅助撰写面向投资人或合伙人的商业计划书。",
    difficulty: "advanced",
    timeEstimate: "4-6小时",
    tools: [
      { name: "Claude", url: "https://claude.ai" },
      { name: "Perplexity", url: "https://perplexity.ai" },
      { name: "Gamma", url: "https://gamma.app" },
    ],
    steps: [
      {
        title: "市场调研与数据",
        description: "收集商业计划需要的市场数据和行业分析。",
        tool: { name: "Perplexity", url: "https://perplexity.ai" },
        prompt:
          '请帮我调研"AI工具导航/推荐"市场：1）全球AI工具市场规模和增长率（2022-2027）；2）AI工具导航赛道的主要玩家和融资情况；3）目标用户群体的规模估算；4）行业趋势和驱动因素；5）类似模式在其他领域的验证案例（如导航/推荐在旅游、电商等领域的成功案例）。请附信息来源。',
        tips: [
          "投资人最看重市场规模（TAM/SAM/SOM）和增长率",
          "数据来源要可靠，标注出处，不要用AI编造的数据",
          "如果找不到直接的市场数据，可以用底层逻辑推算",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "商业计划撰写",
        description: "基于调研数据撰写完整的商业计划书。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '请撰写一份BP（商业计划书），项目是"AI-Toolbox AI工具导航与推荐平台"。章节：1）Executive Summary（1页）；2）问题与机会；3）解决方案与产品；4）市场分析（TAM/SAM/SOM）；5）商业模式（怎么赚钱，3条收入线）；6）竞争分析（差异化优势）；7）Go-to-Market策略；8）团队介绍框架；9）财务预测（3年，含假设条件）；10）融资需求与资金用途。',
        tips: [
          "BP的核心是讲一个逻辑自洽的故事：问题大→方案对→你能做",
          "财务预测要列出假设条件，投资人看的是假设是否合理",
          "每个章节的要素：核心观点→数据支撑→推导逻辑",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "演示PPT制作",
        description: "将BP转化为10-15页的Pitch Deck。",
        tool: { name: "Gamma", url: "https://gamma.app" },
        prompt:
          "在Gamma中创建Pitch Deck，将BP内容精简为12页：封面→问题→解决方案→产品演示→市场规模→商业模式→竞争格局→GTM策略→里程碑→团队→财务→Ask。每页只放一个核心信息，大字号标题配简洁图表。",
        tips: [
          "Pitch Deck每页只传达一个核心信息",
          "投资人平均看每页PPT的时间是30秒",
          "产品演示页用截图或GIF比文字描述效果好10倍",
        ],
        alternatives: [
          { name: "Canva", url: "https://canva.com" },
          { name: "Beautiful.ai", url: "https://beautiful.ai" },
        ],
      },
    ],
    tags: ["BP", "商业计划", "融资", "创业"],
  },
  {
    id: "competitor-analysis",
    categoryId: "product",
    title: "竞品分析报告",
    description: "系统性分析竞品的产品策略、功能差异和市场定位。",
    difficulty: "intermediate",
    timeEstimate: "2-3小时",
    tools: [
      { name: "Perplexity", url: "https://perplexity.ai" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
    ],
    steps: [
      {
        title: "竞品信息采集",
        description: "系统收集竞品的产品信息和公开数据。",
        tool: { name: "Perplexity", url: "https://perplexity.ai" },
        prompt:
          "请帮我收集以下3个竞品的详细信息：[竞品A/B/C]。每个竞品需要：1）产品定位和核心功能；2）定价策略；3）融资历史和公司规模；4）用户评价（G2/ProductHunt评分）；5）最近半年的重大更新；6）市场策略（目标用户/获客方式）。",
        tips: [
          "公开信息来源：ProductHunt、G2、Crunchbase、官网Blog",
          "注册竞品的免费版亲自体验比看评测更有价值",
          "关注竞品的招聘信息可以推测他们的战略方向",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "功能对比与差距分析",
        description: "制作详细的功能对比矩阵。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          "基于以上竞品信息，请制作：1）功能对比矩阵表格（30个功能点，标注✅❌🟡）；2）定价对比表格；3）SWOT分析（每个竞品一个）；4）我们的差异化机会点（竞品都没做好的3个方向）；5）竞品可能的下一步动作预测。",
        tips: [
          "功能对比不要追求全面，聚焦用户最在意的10个功能",
          "差异化不一定是做竞品没有的功能，可以是把某个功能做到极致",
          "预测竞品动作有助于提前布局防御",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "策略建议输出",
        description: "基于竞品分析给出产品策略建议。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "基于以上竞品分析，请给出产品策略建议：1）短期（1-3个月）应该做什么来建立差异化；2）中期（3-6个月）如何扩大护城河；3）哪些竞品功能我们应该跟进，哪些应该忽略；4）定价策略建议（对标谁、怎么定位）；5）一句话定位语（我们是什么，不是什么）。",
        tips: [
          "竞品分析的目的不是模仿，是找到自己的差异化路径",
          "不要试图在所有维度上超越竞品，选2-3个维度做到最好",
          "竞品分析每季度更新一次，市场变化很快",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
    ],
    tags: ["竞品", "分析", "策略", "差异化"],
  },
  {
    id: "data-analysis-product",
    categoryId: "product",
    title: "产品数据分析与决策",
    description: "用AI辅助分析产品数据，驱动产品迭代决策。",
    difficulty: "intermediate",
    timeEstimate: "1-2小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Claude", url: "https://claude.ai" },
    ],
    steps: [
      {
        title: "数据指标体系设计",
        description: "为产品建立核心数据指标体系。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请为AI工具导航网站设计数据指标体系，按北极星指标框架：1）北极星指标是什么（1个，代表产品核心价值）；2）输入指标（驱动北极星的5-8个可操作指标）；3）健康指标（确保不以牺牲长期为代价的3个指标）；4）每个指标的定义、计算公式、数据来源、监控频率。",
        tips: [
          "北极星指标要能同时反映用户价值和商业价值",
          "不要追踪太多指标，核心指标5-8个足够",
          "每个指标要有明确的owner和行动触发条件",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "数据分析与洞察",
        description: "用AI快速分析数据并发现洞察。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          "以下是我们产品上周的数据：\n[粘贴数据表格]\n\n请帮我：1）发现数据中的异常点（同比/环比变化超过20%的指标）；2）分析可能的原因（至少2个假设）；3）交叉分析（不同渠道/用户群/功能的表现差异）；4）给出3个基于数据的行动建议（按优先级排序）。",
        tips: [
          "先看数据趋势，再看绝对值，趋势比单点数据更重要",
          "相关性不等于因果性，分析时要注意区分",
          "每次分析后记录假设和验证结果，积累数据直觉",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
    ],
    tags: ["数据", "分析", "指标", "决策"],
  },
];
