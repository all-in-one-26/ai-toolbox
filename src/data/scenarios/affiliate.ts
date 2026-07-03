import type { Scenario } from "./types";

export const affiliateScenarios: Scenario[] = [
  {
    id: "affiliate-product-selection",
    categoryId: "affiliate",
    title: "联盟产品选品与分析",
    description: "用AI系统化筛选高佣金、高转化的联盟产品。",
    difficulty: "intermediate",
    timeEstimate: "2-3小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Ahrefs", url: "https://ahrefs.com" },
      { name: "Perplexity", url: "https://perplexity.ai" },
    ],
    steps: [
      {
        title: "赛道筛选与评估",
        description: "用AI分析不同联盟赛道的佣金率、竞争度和市场规模。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我做英文联盟营销，请帮我评估以下5个赛道的潜力：AI工具、VPN、Web Hosting、Online Course、Email Marketing。从以下维度打分（1-10）：1）平均佣金率；2）Cookie有效期；3）市场增长趋势；4）内容竞争度；5）用户复购率。并给出综合推荐排名和理由。",
        tips: [
          "高佣金不等于好赛道，要综合考虑转化率和流量获取难度",
          "Recurring Commission（持续佣金）比一次性佣金更有价值",
          "选择自己熟悉或感兴趣的赛道，写出的内容更有说服力",
        ],
        alternatives: [
          { name: "Claude", url: "https://claude.ai" },
          { name: "Perplexity", url: "https://perplexity.ai" },
        ],
      },
      {
        title: "具体产品筛选",
        description: "在目标赛道内筛选最值得推广的具体产品。",
        tool: { name: "Perplexity", url: "https://perplexity.ai" },
        prompt:
          "请帮我调研AI写作工具赛道的联盟计划，列出TOP10的产品，包含：1）产品名称和官网；2）联盟佣金比例和模式（一次性/持续）；3）Cookie有效期；4）最低起付金额；5）用户口碑评分。标注哪些支持中国地区联盟商。",
        tips: [
          "直接在产品官网搜「affiliate program」或「partner program」",
          "对比同类产品的landing page转化率，选转化好的推",
          "加入联盟经理的联系方式，好的affiliate manager会给你额外资源",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "竞品联盟策略分析",
        description: "分析成功的联盟营销者推了哪些产品、用了什么策略。",
        tool: { name: "Ahrefs", url: "https://ahrefs.com" },
        prompt:
          "在Ahrefs中搜索「best AI writing tools」，分析排名前5的联盟站点：他们推广了哪些产品、用了什么内容格式、外链来源是哪里、流量有多大。",
        tips: [
          "成功的联盟站点选品通常经过验证，可以参考但不要照搬",
          "关注他们的内容更新频率和新增产品的速度",
          "有些联盟站会在文章中暴露affiliate network，如CJ、ShareASale",
        ],
        alternatives: [{ name: "Semrush", url: "https://semrush.com" }],
      },
    ],
    tags: ["选品", "联盟计划", "佣金", "评估"],
  },
  {
    id: "product-review-article",
    categoryId: "affiliate",
    title: "产品评测文章撰写",
    description: "写出有真实体验感的产品评测文章，提升点击和转化。",
    difficulty: "intermediate",
    timeEstimate: "1.5-2小时",
    tools: [
      { name: "Claude", url: "https://claude.ai" },
      { name: "Surfer SEO", url: "https://surferseo.com" },
      { name: "Canva", url: "https://canva.com" },
    ],
    steps: [
      {
        title: "评测框架设计",
        description: "建立标准化的评测文章框架。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请为AI工具评测文章设计一个标准化框架，包含以下必备模块：1）Quick Verdict（一句话结论+评分）；2）Who is it for（适合人群）；3）Key Features（核心功能，3-5个）；4）Pricing（价格对比表）；5）Pros & Cons（优缺点）；6）Real Use Case（真实使用场景）；7）Alternatives（替代方案）；8）FAQ（5个）；9）Final Rating（细分评分）。",
        tips: [
          "评测文章第一段就要给结论，不要让读者翻到底部才知道推不推荐",
          "Pros & Cons要真实平衡，全是优点的评测没人信",
          "加入截图和GIF演示大幅提升可信度和停留时间",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "深度评测撰写",
        description: "基于框架撰写完整的评测文章。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '请撰写一篇2500字的Jasper AI深度评测文章，关键词"Jasper AI Review"。按照评测框架撰写，额外要求：1）融入第一人称使用经验（写了3个月，产出50+篇博客）；2）包含与ChatGPT和Copy.ai的简要对比；3）定价部分做成对比表格；4）在3个自然位置插入CTA（联盟链接位置标注）；5）语气像有经验的blogger分享，不像广告。',
        tips: [
          "CTA不要太多，3个就够：文章开头、功能介绍后、结尾",
          "用「我的真实数据」增强说服力，如「用Jasper写的文章平均排名提升了15位」",
          "在Cons部分诚实指出不足，反而增加整篇文章的可信度",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "评测配图制作",
        description: "制作评分卡片、对比表格等视觉化评测元素。",
        tool: { name: "Canva", url: "https://canva.com" },
        prompt:
          "在Canva中设计：1）产品评分雷达图（功能/易用性/性价比/客服/稳定性各几分）；2）价格对比表格（3个产品横向对比）；3）Pros & Cons卡片。统一品牌色系。",
        tips: [
          "自制的评分图表比文字列表更有专业感和分享价值",
          "图片中嵌入网站水印（网址），被引用时自动传播品牌",
          "对比表格用绿色打钩和红色叉号，一目了然",
        ],
        alternatives: [
          { name: "Figma", url: "https://figma.com" },
          { name: "Visme", url: "https://visme.co" },
        ],
      },
    ],
    tags: ["评测", "Review", "转化", "联盟"],
  },
  {
    id: "comparison-article",
    categoryId: "affiliate",
    title: "对比类文章制作",
    description: "制作「A vs B」对比文章，精准拦截购买决策流量。",
    difficulty: "intermediate",
    timeEstimate: "1.5-2小时",
    tools: [
      { name: "Claude", url: "https://claude.ai" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Canva", url: "https://canva.com" },
    ],
    steps: [
      {
        title: "对比维度设计",
        description: "确定全面且公正的对比维度。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '我要写一篇"ChatGPT vs Claude vs Gemini"的对比文章。请帮我设计对比维度：1）列出15个用户最关心的对比维度；2）按重要性排序；3）为每个维度建议评测方法（定量/定性）；4）设计评分体系（如何让评分看起来客观）。',
        tips: [
          "对比维度要覆盖用户决策的关键因素，不是越多越好",
          "定量维度（价格、速度）优先于定性维度（体验、感觉）",
          "加入「Winner by Use Case」部分，不同场景推荐不同产品",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "对比文章撰写",
        description: "撰写平衡公正的对比内容。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '请撰写一篇3000字的"ChatGPT vs Claude vs Gemini 2024"对比文章。结构：1）Quick Summary表格（一眼看出差异）；2）按维度逐项对比（每项300字）；3）真实测试案例（同一prompt的输出对比）；4）定价对比表；5）Who Should Choose What（按用户类型推荐）；6）FAQ；7）Final Verdict。每个产品的联盟链接位置标注。',
        tips: [
          "对比文章的关键是「公正感」，即使你想推某个产品也不能明显偏向",
          "用真实的同一prompt测试结果作为证据，截图展示",
          "在结论部分按场景推荐，而非简单说「X最好」",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "对比表格设计",
        description: "制作视觉化的对比表格和信息图。",
        tool: { name: "Canva", url: "https://canva.com" },
        prompt:
          "在Canva中设计一个3列对比表格信息图，对比ChatGPT/Claude/Gemini的：价格、核心优势、适合人群、上下文窗口大小、多模态能力。用品牌色区分各产品。",
        tips: [
          "对比表格是文章中被截图分享最多的元素",
          "每个产品用其品牌色标识，增加辨识度",
          "表格设计成竖版（手机友好）和横版（电脑友好）两个版本",
        ],
        alternatives: [{ name: "Figma", url: "https://figma.com" }],
      },
    ],
    tags: ["对比", "VS", "决策", "购买"],
  },
  {
    id: "email-sequence",
    categoryId: "affiliate",
    title: "联盟营销邮件序列",
    description: "设计自动化邮件序列，培育潜在用户并推广联盟产品。",
    difficulty: "advanced",
    timeEstimate: "3-4小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "ConvertKit", url: "https://convertkit.com" },
    ],
    steps: [
      {
        title: "邮件序列策略设计",
        description: "设计从订阅到转化的完整邮件漏斗。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请帮我设计一个7封邮件的自动化欢迎序列，目标是推广AI写作工具。时间线：Day 1/3/5/7/10/14/21。每封邮件的角色：1）欢迎+交付lead magnet；2）个人故事建立信任；3）痛点深挖+教育；4）案例展示；5）产品介绍（软推）；6）限时优惠（硬推）；7）最终提醒。每封标注：主题行、核心内容、CTA类型。",
        tips: [
          "邮件序列的关键是先提供价值再推产品，比例至少4:1",
          "前3封邮件建立信任，不要急着推销",
          "每封邮件只有一个CTA，不要让读者做多选题",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "邮件正文撰写",
        description: "撰写高打开率和点击率的邮件内容。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请撰写邮件序列中第4封「案例展示」邮件。主题行3个备选。正文要求：1）开头用一个真实案例故事（一个freelance writer用AI工具月收入翻倍）；2）拆解他具体怎么做的（3个步骤）；3）自然过渡到产品推荐；4）CTA是"免费试用"；5）控制在300字以内；6）PS部分加一个social proof。',
        tips: [
          "主题行决定打开率，A/B测试不同风格",
          "邮件长度控制在300字以内，移动端用户没耐心",
          "PS部分是邮件中阅读率第二高的区域（仅次于开头）",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "自动化设置",
        description: "在邮件平台中配置自动化触发和条件逻辑。",
        tool: { name: "ConvertKit", url: "https://convertkit.com" },
        prompt:
          "在ConvertKit中设置Visual Automation：新订阅者进入7封序列，如果在第5封之前已经点击了联盟链接，跳过后续销售邮件进入「已购买」标签的育成序列。",
        tips: [
          "设置条件分支：点击过联盟链接的和没点过的走不同路径",
          "已经购买的用户不要再收到推销邮件，否则取消订阅率会飙升",
          "定期清理不活跃订阅者（90天未打开），保持列表健康度",
        ],
        alternatives: [
          { name: "Mailchimp", url: "https://mailchimp.com" },
          { name: "ActiveCampaign", url: "https://activecampaign.com" },
        ],
      },
    ],
    tags: ["邮件", "自动化", "序列", "转化"],
  },
  {
    id: "landing-page-creation",
    categoryId: "affiliate",
    title: "联盟 Landing Page 制作",
    description: "快速搭建高转化的联盟产品推荐页面。",
    difficulty: "intermediate",
    timeEstimate: "2-3小时",
    tools: [
      { name: "v0", url: "https://v0.dev" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Vercel", url: "https://vercel.com" },
    ],
    steps: [
      {
        title: "页面结构设计",
        description: "设计高转化Landing Page的内容模块。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请为"2024年最佳AI写作工具推荐"这个联盟Landing Page设计页面结构：1）Hero区（大标题+副标题+立即查看CTA）；2）快速对比表格（TOP5工具一览）；3）每个工具的迷你评测卡片；4）用户评价testimonials；5）FAQ折叠面板；6）底部CTA。标注每个模块的高度和内容量。',
        tips: [
          "Landing Page的目标是让用户点击联盟链接，不是让用户看完整篇文章",
          "Above the fold要有核心结论和CTA",
          "减少导航和外链，降低跳出率",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "页面快速搭建",
        description: "用AI代码生成工具快速实现页面。",
        tool: { name: "v0", url: "https://v0.dev" },
        prompt:
          "Create a modern landing page for 'Best AI Writing Tools 2024'. Include: hero section with gradient background, comparison table with 5 products (columns: name, rating, price, best for, CTA button), individual product cards with pros/cons, FAQ accordion, and a sticky bottom CTA bar. Use clean typography, subtle animations, and a professional color scheme.",
        tips: [
          "v0生成的页面可以直接导出React/Next.js代码",
          "确保移动端适配良好，超过60%流量来自手机",
          "CTA按钮用对比色，在页面中最显眼",
        ],
        alternatives: [
          { name: "Cursor", url: "https://cursor.sh" },
          { name: "Framer", url: "https://framer.com" },
        ],
      },
      {
        title: "部署与追踪",
        description: "部署页面并设置转化追踪。",
        tool: { name: "Vercel", url: "https://vercel.com" },
        prompt:
          "将v0生成的代码部署到Vercel，绑定自定义域名。在每个联盟链接上添加UTM参数追踪，配置Google Analytics事件追踪联盟链接点击。",
        tips: [
          "每个联盟链接用不同的SubID追踪，知道哪个位置转化最高",
          "设置A/B测试：不同标题、不同CTA文案、不同产品排序",
          "定期检查联盟链接是否失效，失效链接=白白浪费流量",
        ],
        alternatives: [
          { name: "Netlify", url: "https://netlify.com" },
          { name: "Cloudflare Pages", url: "https://pages.cloudflare.com" },
        ],
      },
    ],
    tags: ["Landing Page", "转化", "搭建", "部署"],
  },
  {
    id: "pinterest-affiliate",
    categoryId: "affiliate",
    title: "Pinterest 联盟营销",
    description: "利用Pinterest的长尾流量特性做联盟营销，实现被动收入。",
    difficulty: "intermediate",
    timeEstimate: "1-2小时/天",
    tools: [
      { name: "Canva", url: "https://canva.com" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Tailwind", url: "https://tailwindapp.com" },
    ],
    steps: [
      {
        title: "Pinterest SEO关键词",
        description: "挖掘Pinterest平台内的高搜索量关键词。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我要在Pinterest上推广AI工具类联盟产品。请帮我：1）列出30个Pinterest上AI工具相关的高搜索量关键词；2）为每个关键词建议Pin的内容方向；3）设计10个Board名称（包含关键词）；4）每个Board的描述（500字以内，自然融入关键词）。",
        tips: [
          "Pinterest是视觉搜索引擎，关键词策略和Google SEO不同",
          "在Pinterest搜索框输入关键词看自动补全，这就是热门搜索",
          "Board名称和描述中的关键词直接影响排名",
        ],
        alternatives: [{ name: "Perplexity", url: "https://perplexity.ai" }],
      },
      {
        title: "Pin图批量设计",
        description: "用Canva批量设计Pinterest长图。",
        tool: { name: "Canva", url: "https://canva.com" },
        prompt:
          "在Canva中用Pinterest Pin模板（1000×1500px），设计5套不同风格的模板：1）清单型（10 Best AI Tools）；2）教程型（How to Use ChatGPT）；3）对比型（A vs B）；4）数据型（Statistics）；5）引用型（Quote/Tip）。每套批量生成10张。",
        tips: [
          "竖版长图（2:3比例）在Pinterest feed中占据更大面积",
          "标题字号要大，在缩略图状态也能看清",
          "每个Pin的品牌元素保持一致（颜色、字体、logo位置）",
        ],
        alternatives: [
          { name: "Figma", url: "https://figma.com" },
          { name: "Adobe Express", url: "https://express.adobe.com" },
        ],
      },
      {
        title: "定时发布与分析",
        description: "设置自动化发布排期并追踪效果。",
        tool: { name: "Tailwind", url: "https://tailwindapp.com" },
        prompt:
          "在Tailwind中设置发布计划：每天发布5-10个Pin，分布在不同时间段。加入相关的Tailwind Communities获取额外曝光。设置UTM追踪每个Pin的流量和转化。",
        tips: [
          "Pinterest的内容有长尾效应，一个Pin可以持续带流量几个月甚至几年",
          "新账号前3个月以原创内容为主，建立权威度",
          "定期分析哪类Pin表现最好，加大该类型的产出",
        ],
        alternatives: [
          { name: "Later", url: "https://later.com" },
          { name: "Buffer", url: "https://buffer.com" },
        ],
      },
    ],
    tags: ["Pinterest", "被动收入", "图片", "长尾"],
  },
  {
    id: "affiliate-content-matrix",
    categoryId: "affiliate",
    title: "联盟内容矩阵搭建",
    description:
      "系统性构建「评测+对比+教程+列表」的内容矩阵，最大化联盟收入。",
    difficulty: "advanced",
    timeEstimate: "持续性项目",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Ahrefs", url: "https://ahrefs.com" },
      { name: "Notion AI", url: "https://notion.so" },
    ],
    steps: [
      {
        title: "内容矩阵规划",
        description: "为每个联盟产品设计完整的内容矩阵。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我推广Jasper AI这个联盟产品，请帮我规划完整的内容矩阵：\n1）Review文章：Jasper AI Review 2024\n2）对比文章：Jasper vs ChatGPT / Jasper vs Copy.ai / Jasper vs Writesonic\n3）教程文章：How to Use Jasper AI / Jasper AI Templates Guide\n4）列表文章：Best AI Writing Tools (含Jasper)\n5）替代品文章：Best Jasper Alternatives\n\n为每种文章类型标注：目标关键词、搜索量预估、内容字数、内链关系。",
        tips: [
          "一个产品对应5-8篇文章，形成内容矩阵互相支撑",
          "「Best X Alternatives」这类文章的转化率通常最高",
          "内容矩阵的内链关系很重要，每篇文章都要链接到其他相关文章",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "批量内容生产",
        description: "高效批量生产矩阵中的所有内容。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          "请按以下模板批量生成5篇联盟文章的大纲和开头段落：\n[粘贴内容矩阵列表]\n\n每篇文章需要：1）SEO优化的大纲（H2/H3结构）；2）吸引人的开头段落（150字）；3）CTA位置标注；4）内链建议（链接到矩阵中的其他文章）。",
        tips: [
          "批量生产时保持每篇文章的独特价值，不是简单换关键词",
          "先写核心的Review文章，其他文章的内容和数据可以复用",
          "设置每周产出目标，持续产出比突击产出更有效",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "效果追踪与优化",
        description: "追踪内容矩阵的SEO排名和联盟收入。",
        tool: { name: "Ahrefs", url: "https://ahrefs.com" },
        prompt:
          "在Ahrefs中设置Rank Tracker追踪内容矩阵中所有目标关键词的排名。每周检查：排名变化、有机流量、联盟点击数和转化。标注需要优化的文章。",
        tips: [
          "排名在11-20位的文章最值得优化，提升到首页ROI最高",
          "更新发布日期和内容可以提升已有文章的排名",
          "追踪每篇文章的EPC（每次点击收入），低EPC的文章考虑换产品",
        ],
        alternatives: [
          { name: "Semrush", url: "https://semrush.com" },
          {
            name: "Google Search Console",
            url: "https://search.google.com/search-console",
          },
        ],
      },
    ],
    tags: ["内容矩阵", "系统化", "规模化", "追踪"],
  },
];
