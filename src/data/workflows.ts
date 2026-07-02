export type Workflow = {
  id: string;
  scene: string;
  title: string;
  description: string;
  tools: string[];
  steps: string[];
  color: string;
};

export const workflows: Workflow[] = [
  {
    id: "xiaohongshu",
    scene: "自媒体 / 运营",
    title: "小红书起号工作流",
    description: "从选题到封面到口播文案，1 小时内做出一条完整内容。",
    tools: ["ChatGPT", "Kimi", "Ideogram", "剪映"],
    steps: [
      "用 Kimi 找近 7 天热门选题，抽取 10 个高互动角度。",
      "用 ChatGPT 把选题改写成 3 套脚本结构：种草、反差、清单。",
      "用 Ideogram 或 即梦 AI 生成封面图和带字海报。",
      "用 剪映 完成字幕、配音、节奏包装并导出。",
    ],
    color: "orange",
  },
  {
    id: "amazon-content",
    scene: "跨境电商",
    title: "亚马逊商品内容工作流",
    description: "更快完成商品图、卖点文案、详情页素材和广告视频。",
    tools: ["Perplexity", "ChatGPT", "可灵 AI", "Shopify Magic"],
    steps: [
      "用 Perplexity 调研竞品评论，抽取用户高频痛点。",
      "用 ChatGPT 生成标题、Bullet Points 和广告文案版本。",
      "用 可灵 AI 或 Runway 生成商品演示视频素材。",
      "用 Shopify Magic 补充店铺内容、FAQ 与客服话术。",
    ],
    color: "blue",
  },
  {
    id: "prd-to-demo",
    scene: "产品经理 / 创业者",
    title: "产品经理从 PRD 到 Demo",
    description: "把想法快速做成可讲、可演示、可测试的 MVP。",
    tools: ["Claude", "Gamma", "Bolt.new", "Cursor"],
    steps: [
      "用 Claude 输出用户画像、核心流程图和 PRD 第一稿。",
      "用 Gamma 做方案汇报与需求对齐。",
      "用 Bolt.new 生成首版落地页或功能原型。",
      "用 Cursor 编写核心逻辑代码，快速上线可测试版本。",
    ],
    color: "violet",
  },
  {
    id: "research-flow",
    scene: "学生研究 / 知识创作者",
    title: "研究学习资料流",
    description: "把分散网页、PDF 和笔记沉淀成可复用知识库。",
    tools: ["Perplexity", "Kimi", "NotebookLM", "Notion AI"],
    steps: [
      "用 Perplexity 快速搜集带来源的网页与论文线索。",
      "用 Kimi 对中文长材料进行提炼和摘要。",
      "把核心 PDF 与网页导入 NotebookLM 建立专属知识库。",
      "用 Notion AI 将碎片信息整理为结构化笔记和大纲。",
    ],
    color: "emerald",
  },
  {
    id: "affiliate-matrix",
    scene: "联盟营销 / SEO",
    title: "联盟营销内容矩阵",
    description: "批量产出高质量评测、对比和教程内容，提升自然流量。",
    tools: ["Perplexity", "ChatGPT", "Surfer SEO", "Jasper"],
    steps: [
      "用 Perplexity 调研目标关键词和竞品内容结构。",
      "用 ChatGPT 批量生成产品评测、对比表和 FAQ 初稿。",
      "用 Surfer SEO 优化关键词密度、标题和内链结构。",
      "用 Jasper 生成社交媒体引流短文和邮件序列。",
    ],
    color: "amber",
  },
  {
    id: "indie-hacker",
    scene: "独立开发者",
    title: "从想法到上线 MVP",
    description: "一个人搞定产品设计、全栈开发、部署和推广。",
    tools: ["Claude", "Cursor", "v0", "Vercel"],
    steps: [
      "用 Claude 梳理需求、数据模型和技术选型。",
      "用 v0 快速生成 UI 组件和页面布局。",
      "用 Cursor 进行全栈开发，AI 辅助写代码和 Debug。",
      "用 Vercel 一键部署上线，绑定域名即可推广。",
    ],
    color: "sky",
  },
  {
    id: "brand-design",
    scene: "设计师 / 品牌",
    title: "品牌视觉快速出稿",
    description: "从品牌灵感到完整视觉物料，设计效率提升 5 倍。",
    tools: ["Midjourney", "Figma AI", "Ideogram", "Remove.bg"],
    steps: [
      "用 Midjourney 生成品牌风格 Moodboard 和配色参考。",
      "用 Ideogram 生成带文字的 Logo 和海报初稿。",
      "用 Figma AI 快速排版 UI 组件和社交媒体模板。",
      "用 Remove.bg 批量处理商品图和素材抠图。",
    ],
    color: "pink",
  },
  {
    id: "meeting-efficiency",
    scene: "职场效率",
    title: "会议纪要到执行闭环",
    description: "开完会自动生成纪要、拆解任务、追踪进度。",
    tools: ["飞书妙记", "ChatGPT", "Notion AI", "Zapier"],
    steps: [
      "用 飞书妙记 录制会议并自动生成逐字稿和摘要。",
      "用 ChatGPT 提取会议决策、待办事项和负责人。",
      "用 Notion AI 将待办同步到项目看板并分配截止日。",
      "用 Zapier 设置自动提醒，到期未完成自动推送通知。",
    ],
    color: "indigo",
  },
];
