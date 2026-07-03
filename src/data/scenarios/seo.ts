import type { Scenario } from "./types";

export const seoScenarios: Scenario[] = [
  {
    id: "keyword-research",
    categoryId: "seo",
    title: "关键词研究与内容规划",
    description: "系统性挖掘目标关键词，制定SEO内容生产计划。",
    difficulty: "intermediate",
    timeEstimate: "2-3小时",
    tools: [
      { name: "Ahrefs", url: "https://ahrefs.com" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Perplexity", url: "https://perplexity.ai" },
    ],
    steps: [
      {
        title: "种子关键词拓展",
        description: "从核心种子词出发，用AI拓展长尾关键词集群。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '我的网站是AI工具导航站，核心关键词是"AI工具"。请帮我：1）拓展50个长尾关键词，按搜索意图分类（信息型/导航型/交易型）；2）为每组关键词建议对应的内容类型（博客/列表/对比/教程）；3）按优先级排序（搜索量×可行性）。',
        tips: [
          "长尾词竞争低，新站应优先攻克长尾关键词",
          "搜索意图匹配比关键词密度更重要",
          "用Google Suggest和People Also Ask验证AI建议的关键词",
        ],
        alternatives: [
          { name: "Semrush", url: "https://semrush.com" },
          { name: "Ubersuggest", url: "https://neilpatel.com/ubersuggest" },
        ],
      },
      {
        title: "竞品关键词分析",
        description: "分析竞争对手的关键词布局，找到差距和机会。",
        tool: { name: "Ahrefs", url: "https://ahrefs.com" },
        prompt:
          "在Ahrefs的Content Gap功能中，输入3个竞品域名，找出他们排名但我没有覆盖的关键词。按月搜索量和关键词难度排序。",
        tips: [
          "重点关注竞品排名5-20位的关键词，这些最容易超越",
          "Content Gap中的关键词是最有价值的内容选题",
          "查看竞品的Top Pages了解哪些内容类型表现最好",
        ],
        alternatives: [
          { name: "Semrush", url: "https://semrush.com" },
          { name: "Similarweb", url: "https://similarweb.com" },
        ],
      },
      {
        title: "内容生产排期",
        description: "将关键词集群转化为可执行的内容生产计划。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "基于以下关键词研究结果，请帮我制定12周的SEO内容生产计划：\n[粘贴关键词列表]\n\n要求：1）每周2篇文章；2）按关键词难度从低到高排序；3）相关关键词集群安排在相邻周发布（形成内链支撑）；4）标注每篇的目标字数和内容类型。",
        tips: [
          "先发低难度关键词的文章建立Domain Authority",
          "同一主题集群的文章要互相内链",
          "每篇文章发布后2周检查排名，不好的及时优化",
        ],
        alternatives: [{ name: "Notion AI", url: "https://notion.so" }],
      },
    ],
    tags: ["关键词", "SEO", "内容规划", "竞品分析"],
  },
  {
    id: "seo-article-batch",
    categoryId: "seo",
    title: "SEO 文章批量生产",
    description: "高效产出符合SEO标准的深度文章，保持质量与速度平衡。",
    difficulty: "intermediate",
    timeEstimate: "1-2小时/篇",
    tools: [
      { name: "Claude", url: "https://claude.ai" },
      { name: "Surfer SEO", url: "https://surferseo.com" },
      { name: "Grammarly", url: "https://grammarly.com" },
    ],
    steps: [
      {
        title: "内容大纲生成",
        description: "分析搜索结果TOP10，生成超越竞品的内容大纲。",
        tool: { name: "Surfer SEO", url: "https://surferseo.com" },
        prompt:
          "在Surfer SEO中输入目标关键词，使用Content Editor功能生成建议大纲。重点关注：建议字数、必须包含的关键词、推荐的H2/H3结构。",
        tips: [
          "大纲要比TOP10的文章覆盖更多子话题",
          "加入竞品没有的独特视角（个人经验/原创数据/对比表格）",
          "H2标题尽量包含目标关键词的变体",
        ],
        alternatives: [
          { name: "Frase", url: "https://frase.io" },
          { name: "MarketMuse", url: "https://marketmuse.com" },
        ],
      },
      {
        title: "深度文章撰写",
        description: "基于大纲生成高质量SEO文章。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '请根据以下大纲撰写一篇2500字的SEO文章，目标关键词是"best AI writing tools 2024"。\n[粘贴大纲]\n\n要求：1）自然融入关键词，密度1-2%；2）每个H2下300-500字；3）包含要点列表、对比表格、FAQ section；4）写作风格：专业但易读，像一个用过所有工具的人在分享经验；5）结尾有clear CTA。',
        tips: [
          "AI初稿需要人工润色，特别是加入个人观点和真实体验",
          "每篇文章至少插入1个原创表格或对比图",
          "FAQ部分直接回答Google的People Also Ask问题",
        ],
        alternatives: [
          { name: "ChatGPT", url: "https://chat.openai.com" },
          { name: "Jasper", url: "https://jasper.ai" },
        ],
      },
      {
        title: "SEO 优化检查",
        description: "用工具检查文章的SEO得分并优化。",
        tool: { name: "Surfer SEO", url: "https://surferseo.com" },
        prompt:
          "将文章粘贴到Surfer Content Editor中，根据评分建议调整：关键词密度、NLP关键词覆盖、文章结构、内链建议。目标：Content Score 80+。",
        tips: [
          "不要为了分数堆砌关键词，可读性优先",
          "内链到站内相关文章，每篇至少3-5个内链",
          "meta title和description要包含关键词且有吸引力",
        ],
        alternatives: [
          { name: "Clearscope", url: "https://clearscope.io" },
          { name: "Yoast SEO", url: "https://yoast.com" },
        ],
      },
      {
        title: "英文语法校对",
        description: "AI检查语法、拼写和表达的自然度。",
        tool: { name: "Grammarly", url: "https://grammarly.com" },
        prompt:
          "将文章粘贴到Grammarly中，选择写作目标：Audience-General, Formality-Neutral, Domain-Business, Intent-Inform。修复所有Critical和Advanced建议。",
        tips: [
          "Grammarly的Tone建议很有价值，帮助统一文章语气",
          "AI写的文章容易句式单一，手动增加句式变化",
          "检查被动语态比例，控制在20%以内",
        ],
        alternatives: [
          { name: "DeepL Write", url: "https://deepl.com/write" },
          { name: "Hemingway Editor", url: "https://hemingwayapp.com" },
        ],
      },
    ],
    tags: ["SEO文章", "内容生产", "批量", "英文"],
  },
  {
    id: "site-network",
    categoryId: "seo",
    title: "站群内容矩阵搭建",
    description: "用AI辅助搭建多站点内容矩阵，覆盖不同关键词集群。",
    difficulty: "advanced",
    timeEstimate: "持续性项目",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "WordPress", url: "https://wordpress.org" },
    ],
    steps: [
      {
        title: "站群架构设计",
        description: "规划多站点的主题分布和内链关系。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我要搭建一个AI工具领域的站群矩阵（5个站点），请帮我规划：1）每个站点的细分主题和目标关键词集群；2）站点之间的逻辑关系和内链策略；3）每个站点的初始内容量（多少篇文章才能开始有流量）；4）6个月的里程碑计划。",
        tips: [
          "每个站点要有独立的品牌和风格，避免搜索引擎判定为垃圾站群",
          "站间链接要自然，不要互相交叉链接",
          "先把一个站做起来再扩展第二个，不要同时铺开",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "差异化内容生产",
        description: "为不同站点生成风格各异的内容。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '同一个话题"ChatGPT使用技巧"，请分别用3种不同风格写出大纲：\n1）站点A（面向初学者）：通俗易懂，步骤详细，多截图位置标注\n2）站点B（面向专业人士）：深度技术分析，API用法，效率对比数据\n3）站点C（面向企业用户）：ROI分析，团队协作场景，安全合规',
        tips: [
          "同一话题不同角度不是洗稿，是针对不同搜索意图的差异化内容",
          "每个站点要维持一致的写作风格和深度",
          "避免大段相同文字出现在不同站点上",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "自动化发布流程",
        description: "搭建内容从AI生成到WordPress发布的自动化流水线。",
        tool: { name: "Zapier", url: "https://zapier.com" },
        prompt:
          "设计一个自动化工作流：Google Sheet → 审核标记 → Zapier触发 → WordPress草稿 → 人工审核 → 发布。每步的触发条件和数据映射。",
        tips: [
          "自动化发布前必须有人工审核环节",
          "设置发布间隔，不要一天发20篇",
          "监控Google Search Console，出现索引问题立即暂停",
        ],
        alternatives: [
          { name: "Make", url: "https://make.com" },
          { name: "n8n", url: "https://n8n.io" },
        ],
      },
    ],
    tags: ["站群", "矩阵", "规模化", "WordPress"],
  },
  {
    id: "backlink-building",
    categoryId: "seo",
    title: "外链建设与推广",
    description: "AI辅助制定外链策略，撰写outreach邮件，提升域名权重。",
    difficulty: "advanced",
    timeEstimate: "持续性项目",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Ahrefs", url: "https://ahrefs.com" },
      { name: "Hunter.io", url: "https://hunter.io" },
    ],
    steps: [
      {
        title: "外链机会挖掘",
        description: "找到高质量的外链获取机会。",
        tool: { name: "Ahrefs", url: "https://ahrefs.com" },
        prompt:
          "在Ahrefs中分析竞品的外链来源，使用Link Intersect功能找到链接到多个竞品但没有链接到我的网站的域名列表。按Domain Rating排序。",
        tips: [
          "优先联系DR 30-60的网站，太高太低都不现实",
          "Resource Page和Best-of列表是最容易获得外链的页面类型",
          "Guest Post仍然有效，但质量和相关性越来越重要",
        ],
        alternatives: [
          { name: "Semrush", url: "https://semrush.com" },
          { name: "Moz", url: "https://moz.com" },
        ],
      },
      {
        title: "Outreach邮件撰写",
        description: "批量生成个性化的外链请求邮件。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请帮我写5个版本的外链outreach邮件模板，目标是让对方在他们的"Best AI Tools"列表中加入我的网站。要求：1）主题行简短有吸引力；2）开头提及对方具体的文章（个性化）；3）说明为什么加入我的网站对他们的读者有价值；4）不卑不亢，不要begging tone；5）每封控制在150字以内。',
        tips: [
          "邮件第一句话必须个性化，让对方知道你读过他们的内容",
          "提供具体的价值主张，不要只说「请加上我的链接」",
          "跟进邮件在3-5天后发送，最多跟进2次",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "Linkable Asset 创作",
        description: "制作容易获得外链的优质内容资产。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '请帮我构思3个"linkable asset"内容方案，主题与AI工具相关。类型选择：1）原创数据研究报告；2）免费工具/计算器；3）终极指南/年度报告。每个方案包含：标题、大纲、预估制作周期、推广渠道。',
        tips: [
          "原创数据和调研报告是获取外链最有效的内容类型",
          "免费工具和计算器一旦做好可以持续获得自然外链",
          "发布后主动推广比被动等待更重要",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
    ],
    tags: ["外链", "推广", "outreach", "权重"],
  },
  {
    id: "competitor-seo-analysis",
    categoryId: "seo",
    title: "竞品 SEO 全面分析",
    description: "深度分析竞品的SEO策略，找到可复制的成功模式。",
    difficulty: "intermediate",
    timeEstimate: "2-3小时",
    tools: [
      { name: "Ahrefs", url: "https://ahrefs.com" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Perplexity", url: "https://perplexity.ai" },
    ],
    steps: [
      {
        title: "竞品识别与数据采集",
        description: "确定SEO竞品并采集关键数据。",
        tool: { name: "Ahrefs", url: "https://ahrefs.com" },
        prompt:
          "在Ahrefs中搜索核心关键词「AI tools」「best AI tools」，记录排名TOP10的域名。对每个域名采集：Domain Rating、月度有机流量、排名关键词数量、Top Pages。",
        tips: [
          "SEO竞品不一定是商业竞品，重点看谁在抢你的关键词",
          "关注快速增长的新站，他们的策略可能更适合你复制",
          "记录竞品的内容更新频率和新页面增长速度",
        ],
        alternatives: [{ name: "Semrush", url: "https://semrush.com" }],
      },
      {
        title: "内容策略拆解",
        description: "分析竞品的内容类型、结构和分布。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "基于以下竞品数据，请帮我分析他们的SEO内容策略：\n[粘贴竞品Top Pages数据]\n\n分析维度：1）内容类型分布（博客/列表/工具/对比各占百分比）；2）高流量文章的共同特征；3）内容更新频率；4）他们忽略了哪些我可以切入的内容方向。",
        tips: [
          "不要只看流量最高的页面，也看流量增长最快的页面",
          "分析竞品的内部链接结构，了解他们如何传递权重",
          "注意竞品的内容空白区，这是你超越的机会",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "策略报告输出",
        description: "生成可执行的竞品分析报告。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请将以上竞品分析整合成一份报告，包含：1）竞争格局总览（表格）；2）各竞品优劣势对比；3）我的差距和机会点；4）具体行动计划（优先级排序）；5）3个月内可以快速见效的策略。格式：带编号的清单+表格。",
        tips: [
          "报告的核心价值在于「可执行性」，不是信息堆砌",
          "每个行动点要有明确的责任人、时间线和预期效果",
          "每月更新一次竞品数据，跟踪策略执行效果",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
    ],
    tags: ["竞品分析", "SEO策略", "数据分析", "报告"],
  },
  {
    id: "local-seo",
    categoryId: "seo",
    title: "本地 SEO 优化",
    description: "针对本地搜索优化Google Business Profile和本地排名。",
    difficulty: "intermediate",
    timeEstimate: "2-4小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Semrush", url: "https://semrush.com" },
    ],
    steps: [
      {
        title: "Google Business Profile 优化",
        description: "用AI优化GBP的每一个字段。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我经营一家[城市]的[行业]店，请帮我优化Google Business Profile：1）写一个750字的商家描述（自然融入本地关键词）；2）建议10个最相关的商家类别；3）写20条不同风格的Google Posts（优惠/活动/知识/产品各5条）；4）建议FAQ（10个本地客户常问的问题和回答）。",
        tips: [
          "商家描述前250字最重要，要包含核心业务和地区",
          "定期发布Google Posts保持Profile活跃",
          "鼓励满意客户留下Google评价，回复每一条评价",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "本地关键词优化",
        description: "挖掘和优化本地搜索关键词。",
        tool: { name: "Semrush", url: "https://semrush.com" },
        prompt:
          "在Semrush中搜索「[行业] + [城市]」相关关键词，分析本地搜索量、竞争度和SERP特征（Local Pack、Maps结果等）。",
        tips: [
          "本地关键词通常竞争低但转化率极高",
          "注意「near me」类关键词的搜索量趋势",
          "创建针对每个服务区域的Landing Page",
        ],
        alternatives: [{ name: "Ahrefs", url: "https://ahrefs.com" }],
      },
      {
        title: "本地内容生产",
        description: "创作与本地相关的SEO内容。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请为我的[城市][行业]生意撰写5篇本地SEO文章大纲：1）"[城市]最好的[服务]指南"；2）"[城市][行业]价格对比2024"；3）"为什么选择[城市]本地[行业]"；4）"[城市][行业]常见问题解答"；5）"[区域]居民的[服务]推荐"。每篇包含目标关键词、大纲和字数建议。',
        tips: [
          "本地内容要包含具体地名、路名、地标",
          "嵌入Google Maps和本地照片增加本地相关性",
          "与本地其他商家互相推荐和链接",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
    ],
    tags: ["本地SEO", "Google", "地图", "本地搜索"],
  },
  {
    id: "technical-seo",
    categoryId: "seo",
    title: "技术 SEO 审计与修复",
    description: "AI辅助进行网站技术SEO审计，发现并修复技术问题。",
    difficulty: "advanced",
    timeEstimate: "3-5小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Ahrefs", url: "https://ahrefs.com" },
      { name: "Screaming Frog", url: "https://screamingfrog.co.uk" },
    ],
    steps: [
      {
        title: "爬虫审计",
        description: "全站爬取发现技术问题。",
        tool: { name: "Screaming Frog", url: "https://screamingfrog.co.uk" },
        prompt:
          "使用Screaming Frog爬取全站，导出以下报告：404页面、重复Title/Description、缺失Alt标签的图片、重定向链、页面加载时间超过3秒的URL。",
        tips: [
          "大站先爬取1000页做采样，再决定全站爬取",
          "重点关注HTTP状态码5xx（服务器错误）和4xx（页面不存在）",
          "检查robots.txt和sitemap.xml是否配置正确",
        ],
        alternatives: [
          { name: "Ahrefs Site Audit", url: "https://ahrefs.com" },
          { name: "Sitebulb", url: "https://sitebulb.com" },
        ],
      },
      {
        title: "问题分析与修复方案",
        description: "用AI分析审计结果并生成修复方案。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "以下是网站技术SEO审计结果：\n[粘贴审计数据]\n\n请帮我：1）按严重程度排序这些问题（Critical/High/Medium/Low）；2）为每个问题提供具体修复方案和代码示例；3）评估每个修复的工作量（小时）；4）制定2周的修复计划。",
        tips: [
          "先修Critical问题，如索引阻止、服务器错误",
          "Core Web Vitals问题对排名影响越来越大",
          "修复后用Google Search Console的URL检查工具验证",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "Schema标记优化",
        description: "生成结构化数据标记提升搜索展示效果。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请为以下页面类型生成JSON-LD结构化数据：1）工具评测文章（Review schema）；2）工具列表页（ItemList schema）；3）FAQ页面（FAQPage schema）；4）网站首页（Organization + WebSite schema）。使用最新的Schema.org规范。",
        tips: [
          "Schema标记能让搜索结果显示星级、FAQ展开等富文本",
          "用Google Rich Results Test验证标记是否正确",
          "不要给所有页面加Review schema，Google会视为spam",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
    ],
    tags: ["技术SEO", "审计", "修复", "Schema"],
  },
];
