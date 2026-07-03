import type { Scenario } from "./types";

export const ecommerceScenarios: Scenario[] = [
  {
    id: "amazon-listing",
    categoryId: "ecommerce",
    title: "亚马逊 Listing 优化",
    description: "AI辅助撰写高转化的亚马逊产品标题、五点描述和A+页面。",
    difficulty: "intermediate",
    timeEstimate: "1-2小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Helium 10", url: "https://helium10.com" },
    ],
    steps: [
      {
        title: "关键词研究",
        description: "挖掘产品相关的高搜索量关键词。",
        tool: { name: "Helium 10", url: "https://helium10.com" },
        prompt:
          "使用Helium 10的Cerebro工具，输入竞品ASIN，提取排名前50的关键词。按搜索量和竞争度筛选，标注核心词和长尾词。",
        tips: [
          "核心关键词放在标题前半部分，权重最高",
          "后台Search Terms不要重复标题中已有的关键词",
          "定期用Brand Analytics检查关键词排名变化",
        ],
        alternatives: [
          { name: "Jungle Scout", url: "https://junglescout.com" },
          { name: "Viral Launch", url: "https://viral-launch.com" },
        ],
      },
      {
        title: "标题与五点撰写",
        description: "撰写包含关键词且有吸引力的Listing文案。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我在亚马逊卖一款便携式颈椎按摩仪，价格$39.99，核心卖点是：无线便携、4种按摩模式、USB-C充电、静音设计。核心关键词：neck massager, portable neck massager, cervical massage device。请撰写：1）200字符以内的标题（自然融入关键词）；2）5条Bullet Points（每条150字符，突出benefits而非features）；3）500字的Product Description（故事化描述使用场景）。",
        tips: [
          "标题格式：品牌名 + 核心关键词 + 核心卖点 + 规格",
          "Bullet Points用「Benefit + Feature + Proof」结构",
          "避免使用主观形容词如best/amazing，亚马逊可能标记",
        ],
        alternatives: [
          { name: "Claude", url: "https://claude.ai" },
          { name: "Jasper", url: "https://jasper.ai" },
        ],
      },
      {
        title: "A+ Content设计",
        description: "规划A+ Premium内容的模块和文案。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请为这款颈椎按摩仪设计A+ Content的模块布局：1）品牌故事Banner（一句话品牌理念）；2）产品特点图文模块（4个核心特点，每个配图+标题+描述）；3）使用场景模块（办公室/家庭/旅行3个场景）；4）对比表格（vs竞品的5个维度对比）；5）FAQ模块。为每个模块写好文案。",
        tips: [
          "A+页面可以提升转化率5-10%，值得投入时间",
          "图片比文字重要，但文案要补充图片传达不了的信息",
          "对比表格不要直接写竞品品牌名，用Generic/Others代替",
        ],
        alternatives: [{ name: "Canva", url: "https://canva.com" }],
      },
    ],
    tags: ["亚马逊", "Listing", "电商", "转化"],
  },
  {
    id: "shopify-product-page",
    categoryId: "ecommerce",
    title: "独立站产品页文案",
    description: "为Shopify/独立站撰写故事化的产品描述和销售页文案。",
    difficulty: "intermediate",
    timeEstimate: "1-2小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Claude", url: "https://claude.ai" },
    ],
    steps: [
      {
        title: "品牌故事撰写",
        description: "为品牌创建有温度的故事，建立情感连接。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '请为一个DTC护肤品牌撰写品牌故事，核心理念是"科学成分+东方草本"。创始人背景：华裔化学博士，在美国实验室研发，用奶奶的草药配方启发。要求：1）200字的品牌简介（About Us页面）；2）50字的一句话品牌理念（Hero区用）；3）品牌价值观（3条，每条一句话）。语气：专业但温暖，不冷冰冰。',
        tips: [
          "品牌故事要有具体的人和细节，不要写空洞的使命愿景",
          "「为什么做」比「做什么」更能打动消费者",
          "品牌故事要在所有渠道保持一致",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "产品描述撰写",
        description: "撰写以转化为导向的产品页文案。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请为一款"玻尿酸精华液"撰写Shopify产品页文案：1）产品标题（简洁有力）；2）副标题（一句话卖点）；3）产品描述（300字，按Problem → Solution → Benefits → How to Use结构）；4）成分亮点（3个核心成分，每个一句话解释）；5）使用方法（3步骤）；6）Social Proof区域文案（引导留评价）。',
        tips: [
          "产品描述第一段要直击用户痛点，不要从成分开始",
          "用「你」而不是「我们的产品」，以用户为中心",
          "加入感官描述（质地、气味、触感），提升购买欲",
        ],
        alternatives: [
          { name: "Claude", url: "https://claude.ai" },
          { name: "Copy.ai", url: "https://copy.ai" },
        ],
      },
      {
        title: "转化元素优化",
        description: "优化产品页的信任元素和紧迫感。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请为这个产品页设计以下转化元素的文案：1）3条Trust Badges下的文字（如Free Shipping/Money Back/Secure Checkout）；2）倒计时活动文案；3）库存紧迫感文案（不要太假）；4）Add to Cart按钮周围的微文案；5）交叉销售区域标题（配套产品推荐）。",
        tips: [
          "Trust Badges放在价格附近可以降低购买焦虑",
          "紧迫感要真实，虚假的倒计时会损害品牌信任",
          "Buy Now按钮附近加「30-Day Money Back Guarantee」",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
    ],
    tags: ["独立站", "Shopify", "DTC", "文案"],
  },
  {
    id: "ad-copy-batch",
    categoryId: "ecommerce",
    title: "广告文案批量生成",
    description: "批量生成Facebook/Google/TikTok广告文案，提高测试效率。",
    difficulty: "intermediate",
    timeEstimate: "1-2小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Claude", url: "https://claude.ai" },
    ],
    steps: [
      {
        title: "广告角度策划",
        description: "为产品设计多个不同的广告切入角度。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我要为一款$49的AI写作助手投放Facebook广告，目标人群是freelance writers和content marketers。请帮我设计8个不同的广告角度：1）痛点型（写作耗时长）；2）数据型（效率提升X倍）；3）testimonial型；4）对比型（有vs没有）；5）FOMO型；6）故事型；7）反常识型；8）直接效益型。每个角度写一句核心hook。",
        tips: [
          "广告测试的关键是角度，同一产品可以有10+种切入方式",
          "每个角度至少准备3个版本的文案进行A/B测试",
          "新账号先小预算测试角度，找到赢家再加预算",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "各平台文案生成",
        description: "按不同平台规格批量生成广告文案。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '基于"痛点型"广告角度，请批量生成以下格式的广告文案：\n\nFacebook Ad（3版）：\n- Primary Text（125字以内）\n- Headline（40字以内）\n- Description（30字以内）\n\nGoogle Search Ad（3版）：\n- Headline 1/2/3（30字符以内）\n- Description 1/2（90字符以内）\n\nTikTok Ad Script（2版）：\n- Hook（3秒）\n- Body（15秒）\n- CTA（3秒）',
        tips: [
          "Facebook主文案第一句话是hook，决定用户是否展开阅读",
          "Google广告要包含关键词，越精准质量分越高",
          "TikTok广告要像原生内容，不要像传统广告",
        ],
        alternatives: [
          { name: "Claude", url: "https://claude.ai" },
          { name: "Jasper", url: "https://jasper.ai" },
        ],
      },
      {
        title: "广告创意脚本",
        description: "为视频广告生成创意脚本和分镜。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请为Facebook视频广告设计一个30秒的创意脚本，产品是AI写作助手。结构：1）0-3秒：Pain Hook（切入痛点的画面）；2）3-10秒：Agitate（放大痛点带来的后果）；3）10-20秒：Solution（产品演示/使用画面）；4）20-27秒：Proof（数据/testimonial）；5）27-30秒：CTA。每段标注画面描述和字幕文案。",
        tips: [
          "视频广告前3秒必须让人停下滑动，用视觉冲突或文字钩子",
          "产品演示用真实的屏幕录制比动画效果好",
          "竖版视频（9:16）在移动端Feed中表现最好",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
    ],
    tags: ["广告", "文案", "Facebook", "Google"],
  },
  {
    id: "customer-service-ai",
    categoryId: "ecommerce",
    title: "AI 客服话术与 FAQ",
    description: "构建AI辅助的客服知识库和标准话术体系。",
    difficulty: "beginner",
    timeEstimate: "2-3小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Notion AI", url: "https://notion.so" },
    ],
    steps: [
      {
        title: "FAQ知识库搭建",
        description: "整理客户常见问题并生成标准答案。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我运营一家跨境电商独立站，卖家居收纳产品。请帮我整理50个客户最可能问的问题，分以下类别：1）发货与物流（10个）；2）退换货政策（8个）；3）产品使用（12个）；4）支付问题（8个）；5）产品质量（7个）；6）优惠与折扣（5个）。每个问题配上专业友好的标准回答。",
        tips: [
          "FAQ的回答要简洁直接，先回答问题再补充细节",
          "对于退换货问题要明确给出政策而不是打太极",
          "定期根据新增的客户咨询更新FAQ库",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "多语言客服模板",
        description: "生成多语言版本的客服回复模板。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请将以下10条最常用的客服回复模板翻译成英文、日文、德文三个版本，保持同样的友好专业语气：\n1. 感谢您的咨询，很高兴为您服务...\n2. 您的包裹已发出，预计X天到达...\n[其他模板]",
        tips: [
          "不同文化对客服语气的期待不同，日语要更礼貌、德语要更直接",
          "模板中留出[变量]位置，方便客服填入具体信息",
          "每个模板配一个使用场景说明，新员工也能快速上手",
        ],
        alternatives: [
          { name: "DeepL", url: "https://deepl.com" },
          { name: "Claude", url: "https://claude.ai" },
        ],
      },
      {
        title: "客诉处理流程",
        description: "设计投诉处理的标准流程和话术。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请帮我设计一套客诉处理SOP，包含5个等级：1）普通咨询（当日回复）；2）产品问题（提供解决方案）；3）物流延迟（安抚+追踪）；4）退换货要求（流程指引）；5）严重投诉（升级处理）。每个等级配3套回复模板（初次回复/跟进/结案），语气从温和到严肃递进。",
        tips: [
          "客诉处理第一步永远是道歉和共情，不要急着解释",
          "给客服明确的权限范围（可以直接退款/重发的金额上限）",
          "严重投诉24小时内回复，普通问题48小时内",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
    ],
    tags: ["客服", "FAQ", "话术", "多语言"],
  },
  {
    id: "product-research",
    categoryId: "ecommerce",
    title: "选品与趋势分析",
    description: "用AI和数据工具系统性分析产品趋势，降低选品风险。",
    difficulty: "intermediate",
    timeEstimate: "2-4小时",
    tools: [
      { name: "Perplexity", url: "https://perplexity.ai" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Google Trends", url: "https://trends.google.com" },
    ],
    steps: [
      {
        title: "趋势发现与验证",
        description: "发现潜在爆品趋势并用数据验证。",
        tool: { name: "Perplexity", url: "https://perplexity.ai" },
        prompt:
          "请帮我调研2024年家居类产品的消费趋势，重点关注：1）TikTok Made Me Buy It 类爆品有哪些特征；2）近3个月增长最快的家居子品类；3）季节性产品的最佳入场时机；4）已经过热可能走下坡路的品类。请附信息来源。",
        tips: [
          "趋势产品要看增长斜率，已经平稳的不算趋势",
          "在Google Trends中对比验证，看搜索量是上升还是见顶",
          "TikTok/小红书上的爆品通常领先亚马逊3-6个月",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "竞品与市场分析",
        description: "分析目标品类的竞争格局和利润空间。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我想做一款便携式桌面收纳架，请帮我分析：1）亚马逊上该品类的价格带分布（低/中/高各多少卖家）；2）Top 10卖家的共同特征（价格/评价数/评分/上架时间）；3）差评中最高频的3个问题（产品改进方向）；4）预估利润空间（按$25售价计算FBA成本）。",
        tips: [
          "看差评是选品的金矿，这些就是产品改进的方向",
          "新卖家避开大品牌垄断的品类，选择碎片化市场",
          "利润空间至少30%以上才值得做，否则没有容错空间",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "选品决策报告",
        description: "生成结构化的选品分析报告辅助决策。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请将以上选品分析整合成一份报告，包含：1）机会评分（1-10分，从市场规模、竞争度、利润空间、进入难度4个维度）；2）Go/No-Go决策建议；3）如果Go，建议的差异化方向和首批订货量；4）风险清单（可能失败的3个原因和应对方案）；5）3个月里程碑计划。",
        tips: [
          "选品决策要理性，不要因为某个产品「感觉不错」就下单",
          "首批订货量不要超过500件，先验证市场再加量",
          "记录每次选品的判断依据，复盘时看哪些判断准确哪些不准确",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
    ],
    tags: ["选品", "趋势", "分析", "决策"],
  },
  {
    id: "cross-border-translation",
    categoryId: "ecommerce",
    title: "跨境电商多语言翻译",
    description: "AI辅助将产品信息翻译为多语言版本，适配目标市场。",
    difficulty: "beginner",
    timeEstimate: "1-2小时",
    tools: [
      { name: "DeepL", url: "https://deepl.com" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
    ],
    steps: [
      {
        title: "营销翻译而非直译",
        description: "将产品文案进行本地化营销翻译。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请将以下产品标题和描述翻译为日语和德语，要求：1）不是直译，是营销翻译（transcreation）；2）适配目标市场的表达习惯；3）保留SEO关键词；4）日语版要更含蓄委婉，德语版要更直接务实。\n\n标题：Ultra-Slim Portable Neck Massager - 4 Modes, USB-C, Silent Design\n描述：[粘贴英文描述]",
        tips: [
          "营销翻译（transcreation）比直译效果好10倍",
          "不同市场的卖点侧重不同：日本重品质/德国重功能/美国重体验",
          "让目标市场的native speaker审核最终版本",
        ],
        alternatives: [
          { name: "DeepL", url: "https://deepl.com" },
          { name: "Claude", url: "https://claude.ai" },
        ],
      },
      {
        title: "本地化关键词研究",
        description: "为目标语言市场研究本地关键词。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我的产品是便携式颈椎按摩仪，要在日本亚马逊上架。请帮我：1）列出20个日语搜索关键词（按搜索意图分类）；2）标注哪些是日本消费者特有的搜索习惯（如用片假名搜索英文品牌名）；3）建议日语标题的结构和字数限制。",
        tips: [
          "日本亚马逊标题字数限制和美国不同，通常更短",
          "日语关键词包含汉字、平假名、片假名、英文多种形式",
          "日本市场非常重视包装和礼品属性",
        ],
        alternatives: [{ name: "Perplexity", url: "https://perplexity.ai" }],
      },
    ],
    tags: ["多语言", "翻译", "本地化", "跨境"],
  },
];
