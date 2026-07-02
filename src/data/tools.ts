export type Tool = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  url: string;
  icon: string;
  categories: string[];
  scenes: string[];
  pricing: "free" | "freemium" | "paid" | "open-source";
  priceNote?: string;
  tags: string[];
  rating: number;
  reviews: number;
  featured?: boolean;
  isNew?: boolean;
};

export type Scene = {
  id: string;
  name: string;
  icon: string;
  description: string;
  toolCount: number;
};

export type Category = {
  id: string;
  name: string;
  icon: string;
};

export const categories: Category[] = [
  { id: "chat", name: "AI 对话", icon: "💬" },
  { id: "writing", name: "AI 写作", icon: "✍️" },
  { id: "image", name: "AI 绘画", icon: "🎨" },
  { id: "video", name: "AI 视频", icon: "🎬" },
  { id: "audio", name: "AI 音频", icon: "🎵" },
  { id: "code", name: "AI 编程", icon: "💻" },
  { id: "search", name: "AI 搜索", icon: "🔍" },
  { id: "office", name: "AI 办公", icon: "📊" },
  { id: "design", name: "AI 设计", icon: "🎯" },
  { id: "agent", name: "AI Agent", icon: "🤖" },
];

export const scenes: Scene[] = [
  {
    id: "creator",
    name: "自媒体创作者",
    icon: "📱",
    description: "短视频、公众号、小红书内容创作",
    toolCount: 24,
  },
  {
    id: "ecommerce",
    name: "电商运营",
    icon: "🛒",
    description: "商品描述、主图设计、客服自动化",
    toolCount: 18,
  },
  {
    id: "developer",
    name: "开发者",
    icon: "⌨️",
    description: "代码生成、Debug、文档撰写",
    toolCount: 21,
  },
  {
    id: "designer",
    name: "设计师",
    icon: "🎨",
    description: "UI设计、插画生成、品牌素材",
    toolCount: 16,
  },
  {
    id: "marketer",
    name: "营销人",
    icon: "📈",
    description: "广告文案、SEO优化、数据分析",
    toolCount: 15,
  },
  {
    id: "student",
    name: "学生/研究者",
    icon: "🎓",
    description: "论文写作、文献翻译、知识整理",
    toolCount: 19,
  },
  {
    id: "freelancer",
    name: "自由职业者",
    icon: "🏠",
    description: "提案撰写、项目管理、客户沟通",
    toolCount: 12,
  },
  {
    id: "hr",
    name: "HR/招聘",
    icon: "👥",
    description: "简历筛选、面试问题、培训材料",
    toolCount: 9,
  },
];

export const tools: Tool[] = [
  {
    id: "1",
    name: "ChatGPT",
    slug: "chatgpt",
    tagline: "OpenAI 旗舰对话模型",
    description:
      "全球最流行的AI对话助手，支持文本生成、代码编写、数据分析、图片理解等多种能力。GPT-4o 支持多模态输入输出。",
    url: "https://chat.openai.com",
    icon: "🟢",
    categories: ["chat", "writing", "code"],
    scenes: ["creator", "developer", "student", "marketer"],
    pricing: "freemium",
    priceNote: "免费版GPT-4o-mini / Plus $20/月",
    tags: ["对话", "多模态", "代码", "写作"],
    rating: 4.7,
    reviews: 2840,
    featured: true,
  },
  {
    id: "2",
    name: "Claude",
    slug: "claude",
    tagline: "Anthropic 最强推理模型",
    description:
      "以深度推理和长文本处理著称，支持200K上下文窗口。Opus系列在复杂任务中表现出色，代码能力极强。",
    url: "https://claude.ai",
    icon: "🟠",
    categories: ["chat", "writing", "code"],
    scenes: ["developer", "student", "freelancer"],
    pricing: "freemium",
    priceNote: "免费有限额 / Pro $20/月",
    tags: ["长文本", "推理", "代码", "安全"],
    rating: 4.8,
    reviews: 1920,
    featured: true,
  },
  {
    id: "3",
    name: "Midjourney",
    slug: "midjourney",
    tagline: "顶级AI绘画工具",
    description:
      "通过文字描述生成高质量艺术图片，风格多样，适合设计师和创意工作者。V6版本支持文字渲染。",
    url: "https://midjourney.com",
    icon: "🎨",
    categories: ["image", "design"],
    scenes: ["designer", "creator", "ecommerce"],
    pricing: "paid",
    priceNote: "基础版 $10/月起",
    tags: ["绘画", "设计", "艺术", "创意"],
    rating: 4.6,
    reviews: 2100,
    featured: true,
  },
  {
    id: "4",
    name: "Cursor",
    slug: "cursor",
    tagline: "AI原生代码编辑器",
    description:
      "基于VS Code的AI代码编辑器，集成GPT-4和Claude，支持代码补全、重构、对话式编程。开发者效率提升10倍。",
    url: "https://cursor.com",
    icon: "💻",
    categories: ["code"],
    scenes: ["developer"],
    pricing: "freemium",
    priceNote: "免费2000次补全 / Pro $20/月",
    tags: ["IDE", "代码补全", "重构"],
    rating: 4.9,
    reviews: 1560,
    featured: true,
  },
  {
    id: "5",
    name: "Perplexity",
    slug: "perplexity",
    tagline: "AI搜索引擎",
    description:
      "结合搜索引擎和AI的问答工具，实时联网检索，提供带来源引用的准确回答。替代传统搜索的新方式。",
    url: "https://perplexity.ai",
    icon: "🔍",
    categories: ["search", "chat"],
    scenes: ["student", "marketer", "developer"],
    pricing: "freemium",
    priceNote: "免费使用 / Pro $20/月",
    tags: ["搜索", "联网", "引用", "研究"],
    rating: 4.5,
    reviews: 980,
  },
  {
    id: "6",
    name: "Stable Diffusion",
    slug: "stable-diffusion",
    tagline: "开源AI绘画引擎",
    description:
      "最流行的开源图像生成模型，可本地部署。通过ComfyUI/WebUI等界面使用，完全免费且可商用。",
    url: "https://stability.ai",
    icon: "🖼️",
    categories: ["image", "design"],
    scenes: ["designer", "developer", "creator"],
    pricing: "open-source",
    priceNote: "完全免费，需自行部署",
    tags: ["开源", "本地部署", "可商用"],
    rating: 4.4,
    reviews: 1680,
  },
  {
    id: "7",
    name: "通义千问",
    slug: "tongyi-qianwen",
    tagline: "阿里巴巴大语言模型",
    description:
      "阿里云推出的大语言模型，中文能力出色，支持长文本、多模态、代码生成。API价格极具竞争力。",
    url: "https://tongyi.aliyun.com",
    icon: "🔵",
    categories: ["chat", "writing", "code"],
    scenes: ["developer", "ecommerce", "creator"],
    pricing: "freemium",
    priceNote: "个人免费 / API按量计费",
    tags: ["中文优化", "多模态", "阿里云"],
    rating: 4.3,
    reviews: 720,
  },
  {
    id: "8",
    name: "Runway",
    slug: "runway",
    tagline: "AI视频生成平台",
    description:
      "领先的AI视频生成和编辑工具，Gen-3支持文生视频、图生视频、视频编辑等多种能力。",
    url: "https://runway.ml",
    icon: "🎬",
    categories: ["video"],
    scenes: ["creator", "designer", "marketer"],
    pricing: "freemium",
    priceNote: "免费试用 / Standard $15/月",
    tags: ["视频生成", "视频编辑", "特效"],
    rating: 4.3,
    reviews: 890,
    isNew: true,
  },
  {
    id: "9",
    name: "Notion AI",
    slug: "notion-ai",
    tagline: "集成在Notion中的AI助手",
    description:
      "直接在Notion文档中使用AI写作、总结、翻译、改写。无缝融入已有工作流，团队协作利器。",
    url: "https://notion.so",
    icon: "📝",
    categories: ["writing", "office"],
    scenes: ["freelancer", "marketer", "student"],
    pricing: "paid",
    priceNote: "AI附加 $10/月/人",
    tags: ["笔记", "协作", "写作", "总结"],
    rating: 4.4,
    reviews: 1100,
  },
  {
    id: "10",
    name: "Canva AI",
    slug: "canva-ai",
    tagline: "AI驱动的设计平台",
    description:
      "Canva集成的AI功能，包括AI图片生成、魔法擦除、文案生成、视频剪辑等。非设计师也能做出专业设计。",
    url: "https://canva.com",
    icon: "🎯",
    categories: ["design", "image"],
    scenes: ["creator", "ecommerce", "marketer"],
    pricing: "freemium",
    priceNote: "免费版可用 / Pro $13/月",
    tags: ["设计", "模板", "社交媒体"],
    rating: 4.5,
    reviews: 1340,
  },
  {
    id: "11",
    name: "v0",
    slug: "v0",
    tagline: "AI前端代码生成",
    description:
      "Vercel出品，通过自然语言描述生成React/Next.js前端代码和UI组件。支持shadcn/ui，一键部署。",
    url: "https://v0.dev",
    icon: "⚡",
    categories: ["code", "design"],
    scenes: ["developer", "freelancer"],
    pricing: "freemium",
    priceNote: "免费额度 / Premium $20/月",
    tags: ["前端", "React", "UI生成"],
    rating: 4.6,
    reviews: 680,
    isNew: true,
  },
  {
    id: "12",
    name: "剪映",
    slug: "jianying",
    tagline: "字节跳动AI视频编辑",
    description:
      "国内最流行的视频编辑工具，AI字幕、智能剪辑、数字人、图文成片等功能，短视频创作者必备。",
    url: "https://jianying.com",
    icon: "✂️",
    categories: ["video", "audio"],
    scenes: ["creator", "ecommerce"],
    pricing: "freemium",
    priceNote: "基础免费 / 会员¥30/月",
    tags: ["视频剪辑", "字幕", "数字人"],
    rating: 4.5,
    reviews: 2300,
  },
  {
    id: "13",
    name: "Suno",
    slug: "suno",
    tagline: "AI音乐生成",
    description:
      "输入歌词或描述即可生成完整歌曲（含人声），支持多种音乐风格。音乐创作零门槛。",
    url: "https://suno.com",
    icon: "🎵",
    categories: ["audio"],
    scenes: ["creator", "freelancer"],
    pricing: "freemium",
    priceNote: "每日免费额度 / Pro $10/月",
    tags: ["音乐", "歌曲", "作曲"],
    rating: 4.4,
    reviews: 560,
    isNew: true,
  },
  {
    id: "14",
    name: "Claude Code",
    slug: "claude-code",
    tagline: "Anthropic终端编程助手",
    description:
      "命令行中的AI编程助手，直接在终端中理解代码库、编写代码、运行测试。支持多文件编辑和Git操作。",
    url: "https://claude.ai/code",
    icon: "⌨️",
    categories: ["code"],
    scenes: ["developer"],
    pricing: "paid",
    priceNote: "Max $100/月 或 API按量",
    tags: ["CLI", "全栈", "代码库理解"],
    rating: 4.8,
    reviews: 420,
    isNew: true,
  },
  {
    id: "15",
    name: "Kimi",
    slug: "kimi",
    tagline: "月之暗面长文本AI",
    description:
      "支持200万字超长上下文的AI助手，擅长文档分析、网页解读、学术研究。国内免费长文本首选。",
    url: "https://kimi.moonshot.cn",
    icon: "🌙",
    categories: ["chat", "search"],
    scenes: ["student", "freelancer", "marketer"],
    pricing: "free",
    priceNote: "完全免费",
    tags: ["长文本", "文档分析", "联网"],
    rating: 4.3,
    reviews: 890,
  },
  {
    id: "16",
    name: "Copilot",
    slug: "github-copilot",
    tagline: "GitHub AI编程助手",
    description:
      "GitHub与OpenAI合作的代码补全工具，支持几乎所有编程语言和IDE，开发者生产力倍增器。",
    url: "https://github.com/features/copilot",
    icon: "🐙",
    categories: ["code"],
    scenes: ["developer"],
    pricing: "freemium",
    priceNote: "个人免费额度 / Pro $10/月",
    tags: ["代码补全", "IDE", "GitHub"],
    rating: 4.5,
    reviews: 1800,
  },
  {
    id: "17",
    name: "Dify",
    slug: "dify",
    tagline: "开源LLM应用开发平台",
    description:
      "可视化构建AI应用的开源平台，支持RAG、Agent、工作流编排。低代码搭建定制AI应用。",
    url: "https://dify.ai",
    icon: "🔧",
    categories: ["agent", "code"],
    scenes: ["developer", "freelancer"],
    pricing: "open-source",
    priceNote: "开源免费 / 云版有免费额度",
    tags: ["开源", "RAG", "Agent", "低代码"],
    rating: 4.6,
    reviews: 640,
    isNew: true,
  },
  {
    id: "18",
    name: "文心一言",
    slug: "wenxin-yiyan",
    tagline: "百度大语言模型",
    description:
      "百度推出的AI对话助手，中文理解能力强，支持文本、图像生成，深度整合百度生态。",
    url: "https://yiyan.baidu.com",
    icon: "🟡",
    categories: ["chat", "writing", "image"],
    scenes: ["creator", "student", "ecommerce"],
    pricing: "free",
    priceNote: "免费使用",
    tags: ["中文", "百度生态", "多模态"],
    rating: 4.1,
    reviews: 1200,
  },
];

export function getToolsByScene(sceneId: string): Tool[] {
  return tools.filter((t) => t.scenes.includes(sceneId));
}

export function getToolsByCategory(categoryId: string): Tool[] {
  return tools.filter((t) => t.categories.includes(categoryId));
}

export function getFeaturedTools(): Tool[] {
  return tools.filter((t) => t.featured);
}

export function getNewTools(): Tool[] {
  return tools.filter((t) => t.isNew);
}

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((t) => t.slug === slug);
}

export function searchTools(query: string): Tool[] {
  const q = query.toLowerCase();
  return tools.filter(
    (t) =>
      t.name.toLowerCase().includes(q) ||
      t.tagline.toLowerCase().includes(q) ||
      t.tags.some((tag) => tag.includes(q)) ||
      t.description.includes(q),
  );
}
