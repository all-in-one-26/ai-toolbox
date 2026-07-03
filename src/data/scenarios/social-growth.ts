import type { Scenario } from "./types";

export const socialGrowthScenarios: Scenario[] = [
  {
    id: "multi-platform-distribute",
    categoryId: "social-growth",
    title: "多平台内容一键分发",
    description: "一份内容适配多个平台格式，实现矩阵化分发。",
    difficulty: "beginner",
    timeEstimate: "30-45分钟",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Kimi", url: "https://kimi.moonshot.cn" },
      { name: "Canva", url: "https://canva.com" },
    ],
    steps: [
      {
        title: "内容母版撰写",
        description: "先写一份完整的长内容作为母版，后续拆分适配各平台。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '请围绕"2024年最值得学的5个AI技能"写一份1500字的内容母版，包含完整论述、案例和数据。这份内容后续会改写为：小红书笔记、抖音脚本、公众号文章、知乎回答、Twitter线程。',
        tips: [
          "母版内容要包含足够的素材点，方便各平台裁剪",
          "提前标注哪些段落适合做短视频、哪些适合图文",
          "核心观点用金句形式表达，方便跨平台复用",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "多平台改写",
        description: "将母版内容改写为各平台的原生格式。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请将以下内容母版分别改写为5个版本：\n1）小红书笔记：500字以内，多emoji，口语化，带标签\n2）抖音口播脚本：60秒，前3秒钩子，口语化\n3）公众号摘要：200字，引导点击阅读全文\n4）知乎回答开头：300字，专业理性，引发好奇\n5）Twitter线程：5条推文，每条140字以内，英文\n\n[粘贴母版内容]",
        tips: [
          "各平台的「爆款密码」不同，不能简单复制粘贴",
          "小红书要亲切，知乎要专业，抖音要直接",
          "每个平台发布时间也不同，建议用日历排期",
        ],
        alternatives: [
          { name: "Claude", url: "https://claude.ai" },
          { name: "Kimi", url: "https://kimi.moonshot.cn" },
        ],
      },
      {
        title: "配图适配",
        description: "按各平台尺寸要求批量生成配图。",
        tool: { name: "Canva", url: "https://canva.com" },
        prompt:
          "在Canva中创建设计，选择「批量调整尺寸」功能，将核心配图一键适配为：小红书3:4、抖音9:16、公众号900×500、知乎题图等尺寸。",
        tips: [
          "Canva的Magic Resize功能可一键适配多平台尺寸",
          "不同平台的安全区域不同，注意文字不要被裁剪",
          "保持品牌视觉一致性，用同一套颜色和字体",
        ],
        alternatives: [
          { name: "Figma", url: "https://figma.com" },
          { name: "美图秀秀", url: "https://xiuxiu.meitu.com" },
        ],
      },
    ],
    tags: ["矩阵", "分发", "多平台", "效率"],
  },
  {
    id: "content-calendar",
    categoryId: "social-growth",
    title: "社媒内容日历排期",
    description: "用AI规划一个月的内容日历，保持稳定更新节奏。",
    difficulty: "beginner",
    timeEstimate: "1-2小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Notion AI", url: "https://notion.so" },
    ],
    steps: [
      {
        title: "月度内容规划",
        description: "根据账号定位和目标，生成一个月的内容主题排期。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '我运营一个"AI工具测评"的小红书账号，目标粉丝是25-35岁职场人。请帮我规划下个月（30天）的内容日历：1）每天1条内容的主题；2）内容类型（测评/教程/对比/合集/互动）的比例为3:2:2:2:1；3）标注重要节点（月初/月中/周末）的特殊选题；4）每周有1条「涨粉型」内容和1条「转化型」内容。',
        tips: [
          "内容类型要混搭，避免连续3天都是同类",
          "周末发轻松有趣的内容，工作日发干货",
          "预留2-3个空位给突发热点",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "批量标题生成",
        description: "为整月内容批量生成候选标题。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "根据以下30天的内容主题，为每个主题生成3个候选标题（分别用数据型、反差型、好奇型风格）。[粘贴月度主题列表]",
        tips: [
          "提前准备标题库，发布时从3选1即可",
          "标题A/B测试：同一内容用不同标题在不同平台发布",
          "收集高赞竞品标题作为参考模板",
        ],
        alternatives: [{ name: "Kimi", url: "https://kimi.moonshot.cn" }],
      },
      {
        title: "Notion看板管理",
        description: "将内容日历导入Notion，建立生产管理看板。",
        tool: { name: "Notion AI", url: "https://notion.so" },
        prompt:
          "在Notion中创建内容日历数据库，属性包括：发布日期、平台、内容类型、标题、状态（构思/撰写/设计/待发布/已发布）、互动数据。使用日历视图和看板视图。",
        tips: [
          "用Notion的数据库关联功能，将素材库和日历连接",
          "设置提醒：提前2天准备内容，提前1天完成设计",
          "每周回顾数据，调整下周内容方向",
        ],
        alternatives: [
          { name: "飞书多维表格", url: "https://www.feishu.cn" },
          { name: "Airtable", url: "https://airtable.com" },
        ],
      },
    ],
    tags: ["内容日历", "排期", "规划", "管理"],
  },
  {
    id: "comment-engagement",
    categoryId: "social-growth",
    title: "评论区互动与私信管理",
    description: "用AI辅助高效回复评论和私信，提升粉丝粘性和转化。",
    difficulty: "beginner",
    timeEstimate: "20-30分钟/天",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "豆包", url: "https://www.doubao.com" },
    ],
    steps: [
      {
        title: "评论回复模板库",
        description: "建立分类评论回复模板，覆盖常见互动场景。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我是一个AI工具测评博主，请帮我建立评论回复模板库，分以下类别各5条：1）感谢夸奖类（真诚但不做作）；2）回答问题类（简洁有料）；3）处理质疑类（理性不争吵）；4）引导互动类（鼓励更多讨论）；5）私信咨询类（专业但有温度）。语气要像朋友聊天。",
        tips: [
          "回复模板要人性化，避免千篇一律的机械感",
          "每条回复可以用模板框架但要针对具体评论微调",
          "置顶评论是引导互动的好工具，自己先评论一条提问",
        ],
        alternatives: [
          { name: "豆包", url: "https://www.doubao.com" },
          { name: "Kimi", url: "https://kimi.moonshot.cn" },
        ],
      },
      {
        title: "批量回复生成",
        description: "将待回复的评论批量输入AI，快速生成个性化回复。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "以下是我最新视频的10条评论，请为每条生成个性化回复（不超过50字），语气亲切幽默：\n1. 「这个工具太贵了吧」\n2. 「博主能出个ChatGPT教程吗」\n3. 「用了你推荐的工具，真的好用！」\n...",
        tips: [
          "发布后1小时内回复评论，算法会给更多推荐",
          "对优质评论给「置顶」或「作者喜欢」标记",
          "遇到负面评论先分辨是误解还是恶意，再决定回复策略",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
    ],
    tags: ["互动", "评论", "私信", "粉丝运营"],
  },
  {
    id: "trending-hijack",
    categoryId: "social-growth",
    title: "热点追踪与借势营销",
    description: "快速捕捉热点并产出借势内容，抢占流量窗口。",
    difficulty: "intermediate",
    timeEstimate: "30-60分钟",
    tools: [
      { name: "Perplexity", url: "https://perplexity.ai" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Canva", url: "https://canva.com" },
    ],
    steps: [
      {
        title: "热点实时监控",
        description: "用AI实时检索和分析当日热点话题。",
        tool: { name: "Perplexity", url: "https://perplexity.ai" },
        prompt:
          "请帮我检索今天中文互联网的热点话题TOP10，每个标注：1）热度来源（微博/抖音/知乎）；2）话题类型（社会/科技/娱乐）；3）我作为AI工具测评博主能否蹭这个热点；4）如果能蹭，给出切入角度。",
        tips: [
          "热点要在爆发后2-4小时内发布内容，超过就衰减",
          "不是所有热点都要蹭，只蹭和自己领域相关的",
          "负面热点和争议话题谨慎追，可能引火烧身",
        ],
        alternatives: [
          { name: "Kimi", url: "https://kimi.moonshot.cn" },
          { name: "ChatGPT", url: "https://chat.openai.com" },
        ],
      },
      {
        title: "借势内容快速产出",
        description: "在最短时间内产出与热点相关的原创内容。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "热点话题：[某AI公司发布新模型]。我是AI工具测评博主，请帮我在15分钟内产出：1）小红书笔记（500字+10个标签）；2）抖音口播脚本（30秒）；3）Twitter中英文各一条。角度：从用户实际使用体验出发，不是新闻搬运。",
        tips: [
          "追热点的关键是速度，内容80分就发，不要追求完美",
          "角度要差异化，避免和官方新闻稿相同的视角",
          "在内容中留下钩子：「我正在测试，关注我看后续测评」",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "热点图文设计",
        description: "快速制作热点相关的视觉内容。",
        tool: { name: "Canva", url: "https://canva.com" },
        prompt:
          "在Canva中用「快速创建」功能，选择热点相关模板，替换标题和核心数据，30秒内完成一张热点配图。",
        tips: [
          "热点配图用「红色+黑色」或「品牌色+对比色」最抓眼球",
          "核心数据/观点用超大字号突出",
          "保存3-5个热点配图模板，下次直接换文字",
        ],
        alternatives: [
          { name: "美图秀秀", url: "https://xiuxiu.meitu.com" },
          { name: "创客贴", url: "https://www.chuangkit.com" },
        ],
      },
    ],
    tags: ["热点", "借势", "速度", "流量"],
  },
  {
    id: "community-ops",
    categoryId: "social-growth",
    title: "社群运营与活动策划",
    description: "AI辅助管理微信群/知识星球/Discord社群，提升活跃度和转化。",
    difficulty: "intermediate",
    timeEstimate: "1-2小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Notion AI", url: "https://notion.so" },
    ],
    steps: [
      {
        title: "社群SOP设计",
        description: "建立社群运营的标准化流程和内容排期。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请帮我设计一个200人"AI工具学习群"的运营SOP：1）每周7天的内容安排（早报/干货/互动/答疑各几次）；2）新人入群的欢迎流程（3步）；3）月度活动方案（4种类型轮换）；4）群规模板；5）淘汰机制。',
        tips: [
          "社群运营的核心是「节奏感」，固定时间做固定的事",
          "每天早上发AI行业简报是维持活跃的最低成本方式",
          "设置「群精华」标签，新人可以快速了解社群价值",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "AI行业日报生成",
        description: "每日自动生成AI行业动态速报发送到社群。",
        tool: { name: "Perplexity", url: "https://perplexity.ai" },
        prompt:
          "请帮我整理今天AI领域的5条重要动态，格式：\n☀️ AI早报 | [日期]\n\n1. [标题] - [一句话摘要]\n2. ...\n\n💡 今日一句：[一句AI相关的有启发的话]\n\n每条100字以内，语气轻松专业。",
        tips: [
          "日报要在早上8-9点发出，培养群成员阅读习惯",
          "偶尔在日报中加入互动提问增加回复",
          "月底做一次月度精选合辑，提供额外价值",
        ],
        alternatives: [
          { name: "Kimi", url: "https://kimi.moonshot.cn" },
          { name: "ChatGPT", url: "https://chat.openai.com" },
        ],
      },
      {
        title: "活动策划与执行",
        description: "设计社群活动方案并生成执行清单。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请帮我策划一场社群线上活动："AI工具挑战赛——7天用AI完成一个副业项目"。需要：1）活动规则和评选标准；2）7天每天的任务设计；3）奖品设置建议；4）宣传文案（群公告+朋友圈）；5）活动结束后的复盘模板。',
        tips: [
          "活动持续3-7天最佳，太短没成就感，太长坚持不下来",
          "设置「参与奖」降低门槛，「优秀奖」激励深度参与",
          "活动期间每天在群里播报进度，营造紧迫感和仪式感",
        ],
        alternatives: [{ name: "Notion AI", url: "https://notion.so" }],
      },
    ],
    tags: ["社群", "微信群", "运营", "活动"],
  },
  {
    id: "user-persona-analysis",
    categoryId: "social-growth",
    title: "用户画像与粉丝分析",
    description: "用AI分析粉丝数据，优化内容策略和变现方向。",
    difficulty: "intermediate",
    timeEstimate: "1-2小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Claude", url: "https://claude.ai" },
    ],
    steps: [
      {
        title: "粉丝数据整理",
        description: "将平台后台数据导出并整理成分析框架。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请帮我设计一个粉丝画像分析框架，基于以下数据维度：1）年龄/性别/地域分布；2）活跃时段；3）互动内容偏好（哪类内容点赞/收藏/评论最多）；4）粉丝增长曲线（哪些内容带来涨粉）。给出Excel表格结构和分析公式。",
        tips: [
          "各平台后台数据维度不同，先确认能导出哪些数据",
          "关注「取关率」最高的内容类型，避免产出相似内容",
          "粉丝画像每月更新一次，因为粉丝构成会随内容变化",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "内容策略优化建议",
        description: "基于粉丝分析结果，生成内容优化建议。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          "基于以下粉丝数据分析结果，请给出具体的内容优化建议：\n[粘贴分析数据]\n\n请包含：1）应该增加的内容类型；2）应该减少的内容类型；3）最佳发布时间调整；4）变现方向建议（广告/带货/知识付费/咨询哪个最适合）；5）下个月的3个重点方向。",
        tips: [
          "数据只是参考，不要完全被数据驱动丢失个人风格",
          "高收藏率说明实用，高评论率说明有情绪共鸣",
          "粉丝画像决定变现方式：年轻=带货，职场=知识付费",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
    ],
    tags: ["用户画像", "数据分析", "策略", "增长"],
  },
  {
    id: "kol-collaboration",
    categoryId: "social-growth",
    title: "KOL/KOC 合作策划",
    description: "AI辅助筛选合作达人、撰写合作方案和沟通话术。",
    difficulty: "advanced",
    timeEstimate: "2-3小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Perplexity", url: "https://perplexity.ai" },
    ],
    steps: [
      {
        title: "达人筛选标准",
        description: "建立达人合作的量化筛选模型。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '我想为"AI工具导航网站"找小红书达人合作推广，预算每位500-2000元。请帮我：1）设计达人筛选评分表（粉丝量/互动率/内容质量/粉丝画像匹配度各占多少权重）；2）列出理想达人的画像特征；3）建议合作形式（图文/视频/直播各适合什么阶段）；4）给出10个可能的达人搜索关键词。',
        tips: [
          "互动率比粉丝量更重要，1万粉5%互动率 > 10万粉0.5%",
          "查看达人近10条内容的评论质量，水评论多说明有刷量",
          "小KOC（1000-1万粉）性价比最高，适合铺量",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "合作方案撰写",
        description: "撰写专业的达人合作brief和报价方案。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请帮我撰写一份小红书达人合作brief，产品是"AI-Toolbox AI工具导航网站"。包含：1）品牌/产品介绍（100字）；2）合作形式和要求；3）内容方向建议（3个角度）；4）时间节点和交付物；5）费用和结算方式。语气专业但友好。',
        tips: [
          "Brief要清晰但不死板，给达人留足创作空间",
          "明确禁止事项（竞品提及、敏感话题等）",
          "附上2-3个参考案例链接，比文字描述更直观",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "沟通话术与跟进",
        description: "生成达人沟通的各阶段话术模板。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请帮我生成达人合作沟通话术，分4个阶段：1）初次私信邀约（引起兴趣，不像广告）；2）详细沟通方案（回应对方疑问）；3）内容审核反馈（修改意见的表达方式）；4）合作结束感谢（维护长期关系）。每阶段3个版本。",
        tips: [
          "第一条私信控制在100字以内，不要一上来就贴Brief",
          "回复要及时，达人同时在和多个品牌谈",
          "合作结束后保持关系，节日问候，为下次合作铺路",
        ],
        alternatives: [{ name: "Kimi", url: "https://kimi.moonshot.cn" }],
      },
    ],
    tags: ["KOL", "合作", "达人", "推广"],
  },
];
