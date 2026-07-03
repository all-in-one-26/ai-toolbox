import type { Scenario } from "./types";

export const productivityScenarios: Scenario[] = [
  {
    id: "meeting-minutes",
    categoryId: "productivity",
    title: "会议纪要自动化",
    description: "AI录制会议、生成纪要、拆解待办、追踪执行闭环。",
    difficulty: "beginner",
    timeEstimate: "15-30分钟",
    tools: [
      { name: "飞书妙记", url: "https://www.feishu.cn" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Notion AI", url: "https://notion.so" },
    ],
    steps: [
      {
        title: "会议录制与转录",
        description: "用AI工具自动录制会议并生成逐字稿。",
        tool: { name: "飞书妙记", url: "https://www.feishu.cn" },
        prompt:
          "在飞书妙记中开启会议录制，AI会自动识别发言人并生成逐字稿。会后立刻可以查看带时间戳的完整转录和自动摘要。",
        tips: [
          "提前测试麦克风和网络，避免录制质量问题",
          "线下会议可以用手机端飞书妙记录制",
          "如果是英文会议，Otter.ai的转录质量更好",
        ],
        alternatives: [
          { name: "Otter.ai", url: "https://otter.ai" },
          { name: "Fireflies.ai", url: "https://fireflies.ai" },
          { name: "Notta", url: "https://notta.ai" },
        ],
      },
      {
        title: "纪要结构化整理",
        description: "将AI转录稿整理为结构化的会议纪要。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请将以下会议转录整理为结构化纪要：\n[粘贴转录文字]\n\n格式要求：\n1）会议主题和参与者\n2）关键讨论点（3-5个，每个100字以内）\n3）决议事项（明确结论）\n4）待办事项表格（任务/负责人/截止日期）\n5）遗留问题（需后续跟进的）\n6）下次会议安排",
        tips: [
          "待办事项必须有负责人和截止日期，否则没人跟进",
          "纪要在会后1小时内发出，时效性很重要",
          "对敏感讨论内容做脱敏处理后再给AI",
        ],
        alternatives: [
          { name: "Claude", url: "https://claude.ai" },
          { name: "Kimi", url: "https://kimi.moonshot.cn" },
        ],
      },
      {
        title: "待办同步与追踪",
        description: "将待办事项同步到项目管理工具并设置提醒。",
        tool: { name: "Notion AI", url: "https://notion.so" },
        prompt:
          "在Notion中创建会议纪要数据库，将待办事项自动关联到任务看板。为每个待办设置截止日期提醒，在每周周报中自动汇总未完成项。",
        tips: [
          "用Notion的Relation功能将会议纪要和任务数据库关联",
          "每周一自动生成上周未关闭的待办清单",
          "连续2周未关闭的待办要升级处理（邮件提醒负责人leader）",
        ],
        alternatives: [
          { name: "飞书多维表格", url: "https://www.feishu.cn" },
          { name: "Linear", url: "https://linear.app" },
        ],
      },
    ],
    tags: ["会议", "纪要", "自动化", "效率"],
  },
  {
    id: "email-management",
    categoryId: "productivity",
    title: "邮件处理与高效回复",
    description: "用AI快速分类邮件、生成回复、管理邮件时间。",
    difficulty: "beginner",
    timeEstimate: "20-30分钟/天",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Gemini", url: "https://gemini.google.com" },
    ],
    steps: [
      {
        title: "邮件分类与优先级",
        description: "AI辅助快速分类和判断邮件优先级。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "以下是我今天收到的15封邮件的主题和发件人列表，请帮我：1）按紧急程度分为4类：立即处理/今日处理/本周处理/可忽略；2）标注哪些需要我亲自回复，哪些可以用模板回复；3）建议处理顺序。\n\n[粘贴邮件列表]",
        tips: [
          "每天固定2-3个时段处理邮件，不要随时查看",
          "能2分钟内回复的邮件立刻回复，不要标记「稍后」",
          "对于CC的邮件，除非被直接@否则不需要回复",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "邮件回复生成",
        description: "AI生成专业得体的邮件回复。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请帮我回复以下邮件，要求：语气专业友好，控制在100字以内，明确回答对方的问题并给出下一步行动。\n\n原始邮件：\n[粘贴邮件内容]\n\n我的立场/决定：[简要说明]",
        tips: [
          "AI生成的邮件要检查语气是否合适，太formal或太casual都不行",
          "重要邮件先让AI写初稿，自己修改后发送",
          "建立常用邮件模板库：请假/拒绝/推迟/确认/感谢",
        ],
        alternatives: [
          { name: "Claude", url: "https://claude.ai" },
          { name: "Gemini", url: "https://gemini.google.com" },
        ],
      },
    ],
    tags: ["邮件", "回复", "分类", "效率"],
  },
  {
    id: "data-report",
    categoryId: "productivity",
    title: "数据分析报告生成",
    description: "用AI快速分析数据、生成可视化图表和分析报告。",
    difficulty: "intermediate",
    timeEstimate: "1-2小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Claude", url: "https://claude.ai" },
    ],
    steps: [
      {
        title: "数据清洗与分析",
        description: "用AI辅助快速清洗和分析数据。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请分析以下销售数据（CSV格式）：\n[粘贴数据]\n\n请完成：1）数据质量检查（缺失值、异常值）；2）基本统计描述（总量/均值/增长率）；3）维度分析（按产品/渠道/地区分别统计）；4）趋势分析（月度环比、同比）；5）发现3个值得关注的数据洞察。用表格展示关键数据。",
        tips: [
          "上传数据前检查是否包含敏感信息（姓名、手机号等）",
          "ChatGPT的Code Interpreter可以直接处理Excel/CSV文件",
          "让AI解释分析逻辑，不要只要结果",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "可视化图表生成",
        description: "AI生成图表代码或直接绘制可视化图表。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "基于以上分析结果，请生成以下图表（用Python matplotlib）：1）月度销售趋势折线图；2）产品类别占比饼图；3）渠道贡献条形图；4）地区热力图。要求：标题清晰、配色专业、标注关键数据点。",
        tips: [
          "ChatGPT的Code Interpreter可以直接生成并下载图表",
          "图表配色要和公司PPT模板一致",
          "每张图表只传达一个核心信息，不要堆砌数据",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "报告撰写",
        description: "将分析结果整合为完整的报告。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          "请将以上数据分析整合为一份周报/月报，格式：\n1）核心数据看板（5个关键指标+环比变化箭头）\n2）本期亮点（2-3个做得好的）\n3）问题与风险（2-3个需关注的）\n4）原因分析（每个问题的可能原因）\n5）行动计划（下期重点做什么）\n6）附录（详细数据表格）\n\n语气简洁务实，管理层5分钟能看完核心信息。",
        tips: [
          "报告结构：结论先行→数据支撑→行动建议",
          "管理层看第1-2部分，执行层看第3-5部分",
          "同一份报告的图表风格要统一",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
    ],
    tags: ["数据", "报告", "图表", "分析"],
  },
  {
    id: "ppt-presentation",
    categoryId: "productivity",
    title: "PPT 演示文稿制作",
    description: "AI辅助快速制作专业级演示文稿。",
    difficulty: "beginner",
    timeEstimate: "1-2小时",
    tools: [
      { name: "Gamma", url: "https://gamma.app" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Canva", url: "https://canva.com" },
    ],
    steps: [
      {
        title: "内容大纲生成",
        description: "AI生成PPT的结构大纲和每页核心信息。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请为一个15分钟的公司季度汇报PPT生成大纲，主题是"Q3业务回顾与Q4计划"。要求：1）15-20页；2）每页一个核心信息，标注标题和内容要点；3）开头用成果总结激励士气；4）中间用数据说明业绩；5）结尾用明确的Q4目标收束；6）标注需要图表/数据/截图的页面。',
        tips: [
          "PPT的核心原则：每页只讲一件事",
          "先定结论再找数据支撑，不要堆砌数据让观众自己找结论",
          "演示时间=页数×1分钟，15分钟就做15页",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "AI一键生成PPT",
        description: "用AI演示工具直接生成高质量PPT。",
        tool: { name: "Gamma", url: "https://gamma.app" },
        prompt:
          "将大纲粘贴到Gamma中，选择专业商务主题，Gamma会自动生成带设计的完整PPT。根据品牌色调整配色方案。",
        tips: [
          "Gamma生成的PPT质量通常就能直接用，微调即可",
          "如果需要更多控制，用Canva手动排版",
          "PPT导出为PDF分享更安全，避免格式错乱",
        ],
        alternatives: [
          { name: "Beautiful.ai", url: "https://beautiful.ai" },
          { name: "Canva", url: "https://canva.com" },
        ],
      },
      {
        title: "演讲稿与备注",
        description: "为每页PPT生成演讲备注。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请为以下PPT的每一页生成演讲备注（Speaker Notes），要求：1）每页150字以内；2）包含需要强调的关键数据；3）标注过渡语（从这页到下一页的衔接）；4）提示可能的观众提问和应对；5）语气自信但不傲慢。\n\n[粘贴PPT大纲]",
        tips: [
          "演讲备注是提词器，不是阅读稿，写关键词和数据就够",
          "过渡语很重要，让演讲有流畅感",
          "准备5个可能的Q&A，提前想好回答",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
    ],
    tags: ["PPT", "演示", "汇报", "幻灯片"],
  },
  {
    id: "project-management",
    categoryId: "productivity",
    title: "项目管理与任务拆解",
    description: "AI辅助将大项目拆解为可执行任务，管理进度和风险。",
    difficulty: "intermediate",
    timeEstimate: "1-2小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Notion AI", url: "https://notion.so" },
      { name: "Linear", url: "https://linear.app" },
    ],
    steps: [
      {
        title: "项目拆解与排期",
        description: "将大项目拆解为可执行的任务清单。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请帮我拆解一个项目："在2个月内上线AI工具导航网站V2.0"。要求：1）分为4个Sprint（每2周一个），每个Sprint有明确交付物；2）每个Sprint拆解为具体任务（粒度到1-2天）；3）标注任务间的依赖关系；4）标注关键里程碑和风险点；5）估算每个任务的工时。',
        tips: [
          "任务粒度：能在1-2天内完成的才是好粒度",
          "标注依赖关系才能并行执行，不标注就只能串行",
          "预留20%的buffer给计划外的工作",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "风险管理计划",
        description: "识别项目风险并制定应对策略。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "基于以上项目计划，请帮我做风险管理：1）列出8个可能的风险（技术/人员/时间/需求变更各2个）；2）每个风险评估发生概率和影响程度（高/中/低）；3）制定预防措施和应急方案；4）设置风险监控指标（什么时候触发应急方案）。",
        tips: [
          "最大的风险往往是需求变更，提前和stakeholder对齐范围",
          "技术风险在项目前期用Spike验证，不要拖到后期",
          "每周站会花5分钟review风险清单的状态",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "进度看板搭建",
        description: "在项目管理工具中建立可视化看板。",
        tool: { name: "Notion AI", url: "https://notion.so" },
        prompt:
          "在Notion中创建项目看板：列（Backlog/Todo/In Progress/Review/Done），每个任务卡包含：任务名/负责人/截止日期/优先级/Sprint标签/估时。添加多种视图：看板视图/时间线视图/按人员分组视图。",
        tips: [
          "每天更新任务状态，看板只有实时更新才有价值",
          "In Progress列的任务不超过每人2个，避免上下文切换",
          "每周五做Sprint回顾，调整下周计划",
        ],
        alternatives: [
          { name: "Linear", url: "https://linear.app" },
          { name: "Jira", url: "https://atlassian.com/jira" },
        ],
      },
    ],
    tags: ["项目管理", "任务", "排期", "进度"],
  },
  {
    id: "knowledge-base",
    categoryId: "productivity",
    title: "知识库搭建与管理",
    description: "用AI辅助搭建团队知识库，沉淀和检索组织知识。",
    difficulty: "intermediate",
    timeEstimate: "3-5小时（初始搭建）",
    tools: [
      { name: "Notion AI", url: "https://notion.so" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
    ],
    steps: [
      {
        title: "知识库架构设计",
        description: "设计知识库的分类体系和信息架构。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请帮我设计一个10人创业团队的知识库架构：1）一级分类（不超过8个）；2）每个一级分类下的二级分类；3）命名规范（文档标题格式）；4）必须包含的基础文档清单（如新人入职手册、产品FAQ、技术规范等）；5）标签体系设计（方便跨分类检索）。",
        tips: [
          "分类不超过2层，太深的层级没人愿意翻找",
          "知识库的核心问题是「更新」，建立更新责任人制度",
          "用标签而非文件夹做跨主题关联",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "基础文档生成",
        description: "AI辅助快速生成知识库的基础文档。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请帮我撰写以下知识库基础文档的模板：1）新人入职手册（公司介绍/工具清单/常用链接/第一周todo）；2）产品FAQ（20个常见问题）；3）技术规范文档（代码规范/Git流程/部署流程）；4）会议模板（周会/月报/复盘会各一个）；5）SOP模板（标准操作流程的空白模板）。",
        tips: [
          "模板比文档更有价值，因为模板能被反复使用",
          "新人入职手册的质量直接影响新人融入效率",
          "SOP文档要配截图和示例，纯文字没人看得懂",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "知识沉淀机制",
        description: "建立知识沉淀的日常机制。",
        tool: { name: "Notion AI", url: "https://notion.so" },
        prompt:
          "在Notion中设置知识沉淀工作流：1）项目复盘模板（自动关联项目数据库）；2）TIL（Today I Learned）日志模板；3）知识分享排期（每周一人分享15分钟）；4）文档更新提醒（超过3个月未更新的文档自动标记）。",
        tips: [
          "知识库最大的敌人是过时内容，自动标记未更新文档很重要",
          "TIL日志是最低成本的知识沉淀方式",
          "每次项目复盘后立刻更新相关知识文档",
        ],
        alternatives: [
          { name: "Confluence", url: "https://atlassian.com/confluence" },
          { name: "飞书知识库", url: "https://www.feishu.cn" },
        ],
      },
    ],
    tags: ["知识库", "文档", "管理", "沉淀"],
  },
  {
    id: "weekly-report",
    categoryId: "productivity",
    title: "周报月报自动生成",
    description: "AI辅助将工作记录自动整合为结构化周报/月报。",
    difficulty: "beginner",
    timeEstimate: "15-20分钟",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Notion AI", url: "https://notion.so" },
    ],
    steps: [
      {
        title: "工作记录汇总",
        description: "将散落在各处的工作记录汇总整理。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "以下是我本周的工作碎片记录（日志/消息/TODO/Git commits），请帮我：1）按项目/主题分类整理；2）标注每项工作的完成状态（已完成/进行中/延期）；3）计算各项工作的时间占比；4）识别本周的3个主要产出。\n\n[粘贴工作记录]",
        tips: [
          "养成每天花3分钟记录工作流水的习惯，周报就不痛苦了",
          "用TODO工具或日历来跟踪工作，而非写周报时回忆",
          "Git commit记录是开发人员最好的工作日志",
        ],
        alternatives: [{ name: "Kimi", url: "https://kimi.moonshot.cn" }],
      },
      {
        title: "周报结构化撰写",
        description: "将汇总内容转化为结构化周报。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请将以上工作汇总整理为周报格式：\n\n1）本周成果（3-5条，突出价值和影响，而非罗列任务）\n2）关键数据（本周核心指标及变化）\n3）进行中的工作（2-3条，标注进度%和预计完成时间）\n4）遇到的问题与需要的支持（如果有）\n5）下周计划（3-5条，按优先级排序）\n\n语气简洁务实，控制在500字以内。",
        tips: [
          "周报写「成果」而非「任务」：不是「写了5篇文章」而是「5篇文章带来了XXX流量」",
          "问题和支持需求要提前写明，不要等会上才说",
          "下周计划和本周成果要有逻辑连续性",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
    ],
    tags: ["周报", "月报", "汇报", "总结"],
  },
];
