import type { Scenario } from "./types";

export const designScenarios: Scenario[] = [
  {
    id: "brand-logo-vi",
    categoryId: "design",
    title: "品牌 Logo 与 VI 设计",
    description: "用AI从零设计品牌视觉识别系统：Logo、配色、字体、应用规范。",
    difficulty: "intermediate",
    timeEstimate: "3-5小时",
    tools: [
      { name: "Midjourney", url: "https://midjourney.com" },
      { name: "Ideogram", url: "https://ideogram.ai" },
      { name: "Figma", url: "https://figma.com" },
    ],
    steps: [
      {
        title: "品牌视觉风格探索",
        description: "用AI生成大量Logo概念，确定视觉方向。",
        tool: { name: "Midjourney", url: "https://midjourney.com" },
        prompt:
          "Minimalist logo design for an AI tools navigation website called 'AI-Toolbox', featuring a toolbox or wrench symbol combined with circuit/neural network elements, flat design, vector style, professional tech brand aesthetic, clean lines --v 6 --style raw",
        tips: [
          "先生成20-30个概念，再从中筛选3-5个方向深化",
          "AI生成的Logo需要用Figma/Illustrator矢量化才能用于正式场景",
          "Logo要在16×16px的favicon尺寸下也能辨识",
        ],
        alternatives: [
          { name: "DALL-E 3", url: "https://chat.openai.com" },
          { name: "Ideogram", url: "https://ideogram.ai" },
          { name: "Leonardo.ai", url: "https://leonardo.ai" },
        ],
      },
      {
        title: "配色方案生成",
        description: "AI辅助生成品牌配色系统。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "为AI工具导航网站设计3套配色方案，每套包含：1）主色（品牌色）；2）辅助色（2个）；3）中性色（背景/文字/边框）；4）语义色（成功/警告/错误）；5）渐变方案。要求：科技感但不冷冰冰、专业但有活力。给出HEX和HSL值，并说明每个颜色的使用场景。",
        tips: [
          "配色方案要同时考虑浅色和深色模式",
          "主色不超过2个，辅助色用于强调和区分",
          "用Coolors.co或Adobe Color验证色彩和谐度和无障碍对比度",
        ],
        alternatives: [
          { name: "Coolors", url: "https://coolors.co" },
          { name: "Adobe Color", url: "https://color.adobe.com" },
        ],
      },
      {
        title: "VI 应用规范",
        description: "生成品牌视觉规范文档。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请帮我撰写品牌VI规范文档大纲，包含：1）Logo使用规范（最小尺寸、安全区域、禁止用法）；2）配色规范（主色/辅助色/使用比例）；3）字体规范（标题/正文/注释各用什么字体和字号）；4）图标风格规范；5）图片风格规范（照片/插画的风格指引）；6）社交媒体头像和封面尺寸模板。",
        tips: [
          "VI规范不要太复杂，初创阶段2-3页就够了",
          "重点是定义「禁止用法」，防止品牌形象被变形",
          "做一个Figma组件库比写文档更实用",
        ],
        alternatives: [{ name: "Canva Brand Kit", url: "https://canva.com" }],
      },
    ],
    tags: ["Logo", "VI", "品牌", "视觉"],
  },
  {
    id: "social-media-graphics",
    categoryId: "design",
    title: "社交媒体配图批量制作",
    description: "用AI和模板工具批量生成各平台配图，保持视觉统一。",
    difficulty: "beginner",
    timeEstimate: "1-2小时",
    tools: [
      { name: "Canva", url: "https://canva.com" },
      { name: "Ideogram", url: "https://ideogram.ai" },
      { name: "Remove.bg", url: "https://remove.bg" },
    ],
    steps: [
      {
        title: "模板体系设计",
        description: "建立可复用的社媒配图模板体系。",
        tool: { name: "Canva", url: "https://canva.com" },
        prompt:
          "在Canva中创建Brand Kit，设置品牌色、字体和Logo。然后设计5类可复用模板：1）知识卡片（图文型）；2）数据图表（信息型）；3）引用金句（观点型）；4）Before/After（对比型）；5）清单列表（合集型）。每类至少3个变体。",
        tips: [
          "模板的核心是约束，限定颜色、字体和布局，保证一致性",
          "留出可替换区域标注，团队任何人都能快速替换内容",
          "每个模板做成多尺寸版本（1:1 / 3:4 / 9:16 / 16:9）",
        ],
        alternatives: [
          { name: "Figma", url: "https://figma.com" },
          { name: "Adobe Express", url: "https://express.adobe.com" },
        ],
      },
      {
        title: "AI配图生成",
        description: "用AI生成独特的插图和背景素材。",
        tool: { name: "Ideogram", url: "https://ideogram.ai" },
        prompt:
          "Generate a set of 4 minimalist tech illustrations for social media posts about AI tools: 1) A robot hand and human hand high-fiving; 2) Abstract neural network visualization; 3) A clean workspace with floating AI interface; 4) Data visualization dashboard. Style: flat design, pastel purple and blue palette, white background, modern",
        tips: [
          "AI生成的插图比通用素材库更有辨识度和品牌感",
          "建立Prompt模板库，每次只改主体不改风格，保持系列感",
          "生成的图片分辨率不够时用Upscale工具放大",
        ],
        alternatives: [
          { name: "Midjourney", url: "https://midjourney.com" },
          { name: "DALL-E 3", url: "https://chat.openai.com" },
          { name: "Leonardo.ai", url: "https://leonardo.ai" },
        ],
      },
      {
        title: "批量产出与排期",
        description: "一次性批量产出一周的配图。",
        tool: { name: "Canva", url: "https://canva.com" },
        prompt:
          "在Canva中使用Bulk Create功能，上传CSV数据（标题、描述、日期），自动填充到模板中批量生成。导出后按平台分文件夹存放。",
        tips: [
          "每周日花2小时批量做完下周所有配图",
          "Canva的Content Planner可以直接安排发布",
          "保持70%模板+30%特殊设计的比例，不会太千篇一律",
        ],
        alternatives: [{ name: "Later", url: "https://later.com" }],
      },
    ],
    tags: ["配图", "批量", "社媒", "模板"],
  },
  {
    id: "ecommerce-product-image",
    categoryId: "design",
    title: "电商产品主图设计",
    description: "用AI生成产品展示图、场景图和白底图，提升点击率。",
    difficulty: "intermediate",
    timeEstimate: "1-3小时",
    tools: [
      { name: "Midjourney", url: "https://midjourney.com" },
      { name: "Remove.bg", url: "https://remove.bg" },
      { name: "Canva", url: "https://canva.com" },
    ],
    steps: [
      {
        title: "产品白底图处理",
        description: "快速生成干净的产品白底图。",
        tool: { name: "Remove.bg", url: "https://remove.bg" },
        prompt:
          "上传产品照片到Remove.bg，自动去除背景。下载PNG格式（保留透明背景）。在Canva中放到白色背景上，调整大小确保产品占画面85%以上。",
        tips: [
          "亚马逊主图必须是纯白背景（RGB 255,255,255），否则会被拒",
          "产品占比至少85%，不要留太多白边",
          "多角度拍摄（正面、侧面、45度、细节），每张都去背景",
        ],
        alternatives: [
          { name: "Photoroom", url: "https://photoroom.com" },
          { name: "Clipping Magic", url: "https://clippingmagic.com" },
        ],
      },
      {
        title: "场景图生成",
        description: "用AI生成产品使用场景图。",
        tool: { name: "Midjourney", url: "https://midjourney.com" },
        prompt:
          "Product photography of a portable neck massager being used by a young professional woman at her modern home office desk, natural window lighting, soft focus background, lifestyle photography style, warm tones, editorial quality --ar 1:1 --v 6",
        tips: [
          "场景图要展示产品在真实使用中的样子",
          "光线和色调要统一，不要一张暖色一张冷色",
          "如果产品需要精确还原外观，用真实照片+AI背景更好",
        ],
        alternatives: [
          { name: "Leonardo.ai", url: "https://leonardo.ai" },
          { name: "即梦AI", url: "https://jimeng.jianying.com" },
        ],
      },
      {
        title: "信息图与对比图",
        description: "制作包含卖点信息的产品展示图。",
        tool: { name: "Canva", url: "https://canva.com" },
        prompt:
          "在Canva中设计产品信息图：将白底产品图放在中心，用箭头指向4个核心卖点（每个卖点配图标+一句话），底部放尺寸参数。用品牌色强调关键信息。",
        tips: [
          "亚马逊副图（图2-图7）可以用信息图，但文字不要太多",
          "对比图（Before/After）和尺寸图是高转化图片",
          "图片文字要大到手机端也能看清",
        ],
        alternatives: [{ name: "Figma", url: "https://figma.com" }],
      },
    ],
    tags: ["电商", "产品图", "主图", "场景"],
  },
  {
    id: "poster-banner",
    categoryId: "design",
    title: "海报与 Banner 设计",
    description: "AI辅助快速设计营销海报、活动Banner和广告素材。",
    difficulty: "beginner",
    timeEstimate: "30-60分钟",
    tools: [
      { name: "Ideogram", url: "https://ideogram.ai" },
      { name: "Canva", url: "https://canva.com" },
    ],
    steps: [
      {
        title: "创意概念生成",
        description: "用AI探索海报的视觉创意方向。",
        tool: { name: "Ideogram", url: "https://ideogram.ai" },
        prompt:
          'Modern promotional poster for "AI Tools Summit 2024", featuring abstract geometric shapes forming a brain/network pattern, bold typography with event name, date "Dec 15", gradient from deep purple to electric blue, minimalist composition with lots of white space, print quality',
        tips: [
          "海报设计先确定主视觉，再在此基础上排版文字",
          "生成3-5个方向让客户/团队选择，不要只给一个方案",
          "注意AI生成的文字可能有错误，后期在设计工具中替换",
        ],
        alternatives: [
          { name: "Midjourney", url: "https://midjourney.com" },
          { name: "DALL-E 3", url: "https://chat.openai.com" },
        ],
      },
      {
        title: "排版与信息层级",
        description: "在设计工具中完成专业排版。",
        tool: { name: "Canva", url: "https://canva.com" },
        prompt:
          "将AI生成的主视觉作为背景，在Canva中添加：主标题（最大）、副标题（中号）、活动信息（日期/地点/时间，较小）、CTA按钮（报名/了解更多）、品牌Logo。确保信息层级清晰：3秒内能获取核心信息。",
        tips: [
          "文字层级不超过4级：主标题>副标题>正文>辅助信息",
          "海报要能在3秒内传达核心信息（什么事+什么时候+怎么参与）",
          "留出出血位（每边3mm），印刷不会被裁掉重要内容",
        ],
        alternatives: [
          { name: "Figma", url: "https://figma.com" },
          { name: "Adobe Express", url: "https://express.adobe.com" },
        ],
      },
      {
        title: "多尺寸适配",
        description: "将海报适配为不同投放渠道的尺寸。",
        tool: { name: "Canva", url: "https://canva.com" },
        prompt:
          "使用Canva的Resize功能，将海报一键适配为：Instagram Story(1080×1920)、微信朋友圈(1080×1080)、网站Banner(1920×600)、微博配图(900×500)、印刷海报(A3)。检查每个尺寸的裁切是否合理。",
        tips: [
          "不同尺寸可能需要微调布局，不能100%自动适配",
          "竖版强调视觉冲击，横版需要重新安排信息位置",
          "导出时注意：屏幕用RGB/72dpi，印刷用CMYK/300dpi",
        ],
        alternatives: [{ name: "Figma", url: "https://figma.com" }],
      },
    ],
    tags: ["海报", "Banner", "活动", "营销"],
  },
  {
    id: "ui-prototype",
    categoryId: "design",
    title: "UI/UX 原型快速设计",
    description: "用AI工具快速完成从线框图到高保真原型的设计流程。",
    difficulty: "intermediate",
    timeEstimate: "2-4小时",
    tools: [
      { name: "v0", url: "https://v0.dev" },
      { name: "Figma", url: "https://figma.com" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
    ],
    steps: [
      {
        title: "需求分析与信息架构",
        description: "用AI梳理产品需求和页面信息架构。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我要设计一个AI工具推荐App的首页，目标用户是25-35岁职场人。请帮我：1）梳理首页需要的功能模块（按用户使用优先级排序）；2）设计信息架构（页面层级和导航结构）；3）每个模块的核心交互（用户怎么操作）；4）竞品参考建议（类似产品的优秀设计）。",
        tips: [
          "先理清「用户要完成什么任务」再设计界面",
          "首页模块不要超过7个，信息过载会让用户迷失",
          "核心操作路径控制在3步以内",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "高保真原型生成",
        description: "用AI代码生成工具快速产出可交互的原型。",
        tool: { name: "v0", url: "https://v0.dev" },
        prompt:
          "Design a mobile-first homepage for an AI tools recommendation app. Include: search bar at top, category filter chips, trending tools carousel, personalized recommendations grid (card with tool icon, name, rating, one-line description, category tag), bottom navigation bar (Home, Explore, Favorites, Profile). Modern design with subtle gradients, rounded corners, clean typography.",
        tips: [
          "v0生成的原型可以直接部署预览，方便给团队看效果",
          "生成后重点调整间距、字号和颜色，这些AI容易不够精细",
          "用真实数据替换placeholder，演示效果更有说服力",
        ],
        alternatives: [
          { name: "Cursor", url: "https://cursor.sh" },
          { name: "Galileo AI", url: "https://usegalileo.ai" },
        ],
      },
      {
        title: "可用性优化",
        description: "基于设计原则检查并优化原型。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请用Nielsen的10大可用性原则评估以下App首页设计，对每条原则给出：1）当前设计的表现（好/需改进/差）；2）具体改进建议。特别关注：可学习性、效率、错误预防、无障碍性。\n\n[描述或截图当前设计]",
        tips: [
          "重点测试「首次使用体验」：新用户能否5秒内理解这是什么App",
          "触控目标最小44×44pt，间距至少8pt",
          "文字对比度要达到WCAG AA标准（4.5:1）",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
    ],
    tags: ["UI", "UX", "原型", "设计"],
  },
  {
    id: "video-thumbnail",
    categoryId: "design",
    title: "短视频封面设计",
    description: "批量设计高点击率的视频封面和缩略图。",
    difficulty: "beginner",
    timeEstimate: "20-30分钟",
    tools: [
      { name: "Ideogram", url: "https://ideogram.ai" },
      { name: "Canva", url: "https://canva.com" },
    ],
    steps: [
      {
        title: "封面风格确定",
        description: "确定系列化的封面设计风格。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "我是一个AI工具测评博主，请帮我设计3种系列化的视频封面风格：1）测评类（产品截图+评分+一句话结论）；2）教程类（步骤数字+效果展示）；3）对比类（VS分屏布局）。每种风格描述：配色方案、字体选择、布局结构、品牌元素位置。",
        tips: [
          "系列化封面建立视觉一致性，粉丝看到封面就知道是你的内容",
          "封面文字不超过7个字，手机端要能看清",
          "人脸+情绪表情的封面点击率通常更高",
        ],
        alternatives: [{ name: "Claude", url: "https://claude.ai" }],
      },
      {
        title: "封面批量生产",
        description: "用模板快速批量生产封面。",
        tool: { name: "Canva", url: "https://canva.com" },
        prompt:
          "在Canva中为上述3种风格各创建一个Master Template，设置好品牌色、字体、布局。标注可替换的元素：标题文字、产品截图/人物照片、评分/数字。之后每次只需替换内容即可。",
        tips: [
          "建立封面模板库后，每个封面只需2-3分钟完成",
          "保持系列一致但每期有微变化（颜色变体/布局变体）",
          "A/B测试不同封面风格，找到自己账号点击率最高的风格",
        ],
        alternatives: [
          { name: "Figma", url: "https://figma.com" },
          { name: "美图秀秀", url: "https://xiuxiu.meitu.com" },
        ],
      },
    ],
    tags: ["封面", "缩略图", "视频", "模板"],
  },
];
