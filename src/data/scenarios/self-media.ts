import type { Scenario } from "./types";

export const selfMediaScenarios: Scenario[] = [
  {
    id: "xiaohongshu-note",
    categoryId: "self-media",
    title: "小红书图文笔记创作",
    description: "从选题到封面到正文，1小时内产出一篇高互动笔记。",
    difficulty: "beginner",
    timeEstimate: "45-60分钟",
    tools: [
      { name: "Kimi", url: "https://kimi.moonshot.cn" },
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Ideogram", url: "https://ideogram.ai" },
      { name: "Canva", url: "https://canva.com" },
    ],
    steps: [
      {
        title: "热门选题挖掘",
        description: "用 AI 分析近 7 天小红书热门内容，找到高互动选题角度。",
        tool: { name: "Kimi", url: "https://kimi.moonshot.cn" },
        prompt:
          '请帮我分析小红书"家居收纳"赛道近期热门内容趋势，列出10个高互动选题角度，每个包含：标题方向、预估互动原因、适合的内容形式（图文/视频）。',
        tips: [
          "选题要有情绪价值或实用价值，避免纯信息罗列",
          "关注评论区高频问题，这些是真实需求",
          "用「数字+结果」式标题提升点击率，如「3步搞定」「省了2000块」",
        ],
        alternatives: [
          { name: "ChatGPT", url: "https://chat.openai.com" },
          { name: "豆包", url: "https://www.doubao.com" },
          { name: "通义千问", url: "https://tongyi.aliyun.com" },
        ],
      },
      {
        title: "笔记正文撰写",
        description:
          "按小红书爆款结构生成正文，包含开头钩子、正文干货、结尾引导互动。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请用小红书爆款笔记结构，写一篇关于"租房改造：500元打造ins风卧室"的图文笔记。要求：1）开头用反差/痛点钩子；2）正文分3-5个步骤，每步配emoji；3）结尾引导收藏和评论；4）语气真实亲切，像朋友分享；5）控制在500字以内。',
        tips: [
          "第一句话决定用户是否继续看，必须有钩子",
          "每段不超过3行，多用emoji分隔视觉",
          "结尾用提问句引导评论，如「你们觉得哪个方案更好？」",
        ],
        alternatives: [
          { name: "Claude", url: "https://claude.ai" },
          { name: "Kimi", url: "https://kimi.moonshot.cn" },
        ],
      },
      {
        title: "封面图设计",
        description: "生成带文字的高点击率封面图，适配小红书 3:4 比例。",
        tool: { name: "Ideogram", url: "https://ideogram.ai" },
        prompt:
          'A clean minimalist interior design photo for Xiaohongshu cover, cozy bedroom with warm lighting, 3:4 aspect ratio, with large Chinese text overlay "500元改造出租屋" in modern sans-serif font, soft beige and white color palette',
        tips: [
          "封面图必须有大字标题，纯图片点击率低50%",
          "用对比色让文字突出，避免文字和背景色相近",
          "人物出镜的封面比纯物品封面互动率高30%",
        ],
        alternatives: [
          { name: "Canva", url: "https://canva.com" },
          { name: "即梦AI", url: "https://jimeng.jianying.com" },
          { name: "美图秀秀", url: "https://xiuxiu.meitu.com" },
        ],
      },
      {
        title: "标签与发布优化",
        description: "生成精准标签组合，选择最佳发布时间。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '我要发布一篇关于"500元租房改造"的小红书笔记，请帮我：1）生成20个相关标签，包含大流量词和精准长尾词；2）建议最佳发布时间段；3）写3个不同风格的标题供我选择。',
        tips: [
          "标签混搭：5个大词（10w+笔记）+ 10个中词 + 5个精准长尾词",
          "最佳发布时间：工作日晚7-9点，周末上午10-12点",
          "发布后1小时内积极回复每条评论，触发推荐算法",
        ],
        alternatives: [{ name: "Kimi", url: "https://kimi.moonshot.cn" }],
      },
    ],
    tags: ["小红书", "图文", "种草", "生活方式"],
  },
  {
    id: "douyin-script",
    categoryId: "self-media",
    title: "抖音短视频脚本制作",
    description: "从热门话题到完整口播脚本，适配抖音节奏的短视频内容生产。",
    difficulty: "beginner",
    timeEstimate: "30-45分钟",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "剪映", url: "https://www.capcut.cn" },
      { name: "ElevenLabs", url: "https://elevenlabs.io" },
    ],
    steps: [
      {
        title: "热点话题捕捉",
        description: "分析抖音热榜和同类账号，找到可以蹭的热点和常青选题。",
        tool: { name: "Kimi", url: "https://kimi.moonshot.cn" },
        prompt:
          '请分析抖音"职场干货"赛道最近的热门视频类型，列出8个适合口播的选题，每个标注：预估完播率高的原因、适合的视频时长（15秒/60秒/3分钟）、开头钩子建议。',
        tips: [
          "抖音前3秒决定生死，必须有强钩子",
          "15-30秒视频更容易获得完播率加权",
          "追热点要在24小时内发布，否则流量衰减严重",
        ],
        alternatives: [
          { name: "ChatGPT", url: "https://chat.openai.com" },
          { name: "豆包", url: "https://www.doubao.com" },
        ],
      },
      {
        title: "脚本结构编写",
        description: "按抖音黄金结构（钩子-痛点-方案-行动）生成完整口播脚本。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请用抖音爆款口播结构，写一个60秒的短视频脚本，主题是"为什么你的简历总是石沉大海"。要求：1）前3秒用反问/冲突钩子；2）中间讲3个具体问题和解决方法；3）结尾引导关注；4）标注每段的预估时长；5）语气口语化，像跟朋友聊天。',
        tips: [
          "每句话不超过15个字，方便口播节奏",
          "脚本写完自己读一遍，超过60秒就要删减",
          "在关键转折处标注「停顿」「语气加重」等表演提示",
        ],
        alternatives: [
          { name: "Claude", url: "https://claude.ai" },
          { name: "通义千问", url: "https://tongyi.aliyun.com" },
        ],
      },
      {
        title: "AI配音生成",
        description: "用AI生成自然的口播配音，或用于混剪视频的旁白。",
        tool: { name: "ElevenLabs", url: "https://elevenlabs.io" },
        prompt:
          "将脚本粘贴到 ElevenLabs，选择中文语音，调节语速为1.1倍，情感设为conversational。",
        tips: [
          "AI配音适合知识类/混剪类，真人出镜建议自己录",
          "语速稍快比正常说话更适合短视频节奏",
          "生成后在剪映里微调停顿和重音",
        ],
        alternatives: [
          { name: "剪映AI配音", url: "https://www.capcut.cn" },
          { name: "讯飞配音", url: "https://peiyin.xunfei.cn" },
        ],
      },
      {
        title: "剪辑包装与发布",
        description: "在剪映中完成字幕、BGM、节奏包装，并导出发布。",
        tool: { name: "剪映", url: "https://www.capcut.cn" },
        prompt:
          "使用剪映的AI字幕功能自动识别语音生成字幕，选择「抖音热门」字幕模板，添加BGM选择「轻松-叙事」类型。",
        tips: [
          "字幕字号要大，手机端至少24号以上",
          "BGM音量控制在原声的20-30%，不要喧宾夺主",
          "每3-5秒切一次画面或加一个动效维持注意力",
        ],
        alternatives: [
          { name: "CapCut国际版", url: "https://www.capcut.com" },
          { name: "必剪", url: "https://bcut.bilibili.cn" },
        ],
      },
    ],
    tags: ["抖音", "短视频", "口播", "脚本"],
  },
  {
    id: "bilibili-video",
    categoryId: "self-media",
    title: "B站长视频选题策划",
    description: "制作10-20分钟的深度内容视频，从选题研究到脚本大纲全流程。",
    difficulty: "intermediate",
    timeEstimate: "2-3小时",
    tools: [
      { name: "Perplexity", url: "https://perplexity.ai" },
      { name: "Claude", url: "https://claude.ai" },
      { name: "Gamma", url: "https://gamma.app" },
    ],
    steps: [
      {
        title: "深度选题研究",
        description: "用AI搜索引擎做深度调研，找到有信息增量的选题角度。",
        tool: { name: "Perplexity", url: "https://perplexity.ai" },
        prompt:
          '请深度调研"AI对自由职业者的影响"这个话题，包括：1）最新的行业数据和报告；2）真实案例（国内外各3个）；3）争议性观点；4）普通人最关心的5个问题。请附上信息来源。',
        tips: [
          "B站用户偏好有深度有考据的内容，数据和来源很重要",
          "找到主流观点后要有自己的独特视角",
          "留意弹幕和评论区的高频讨论方向",
        ],
        alternatives: [
          { name: "ChatGPT联网", url: "https://chat.openai.com" },
          { name: "Kimi", url: "https://kimi.moonshot.cn" },
        ],
      },
      {
        title: "视频脚本大纲",
        description: "生成符合B站风格的长视频脚本结构。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '请为一个15分钟的B站视频撰写详细脚本大纲，主题是"AI时代，哪些自由职业正在消失，哪些正在崛起"。要求：1）开头用震撼数据或故事钩子（30秒）；2）正文分4-5个章节，每章3分钟左右；3）每章有转场过渡语；4）结尾有思考性总结和互动引导；5）标注需要配图/B-roll的位置。',
        tips: [
          "B站视频前30秒至关重要，用数据或故事抓人",
          "每个章节之间要有逻辑连接词，不能跳跃",
          "标注「此处插入图表/动画」的位置，方便后期制作",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "可视化素材准备",
        description: "快速生成数据图表和演示幻灯片作为视频素材。",
        tool: { name: "Gamma", url: "https://gamma.app" },
        prompt:
          "根据脚本中的数据点，在Gamma中创建演示文稿，每页一个核心观点，使用深色主题，大字号标题配简洁图表。",
        tips: [
          "视频中的图表要极简，手机端也能看清",
          "每页只放一个核心数字或观点",
          "导出为PNG序列，在剪辑软件中使用",
        ],
        alternatives: [
          { name: "Canva", url: "https://canva.com" },
          { name: "Beautiful.ai", url: "https://beautiful.ai" },
        ],
      },
      {
        title: "封面与标题优化",
        description: "制作高点击率的视频封面和标题。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '我做了一个关于"AI时代自由职业变化"的B站视频，请帮我：1）写5个不同风格的标题（信息型/悬念型/反差型/数据型/观点型）；2）为每个标题建议对应的封面构图和文案；3）推荐合适的视频标签（20个）。',
        tips: [
          "B站标题可以比抖音更长，但核心信息要在前20字",
          "封面要有人物表情或冲击力画面",
          "加入「【深度】」「【万字】」等标签暗示内容质量",
        ],
        alternatives: [
          { name: "Ideogram", url: "https://ideogram.ai" },
          { name: "Canva", url: "https://canva.com" },
        ],
      },
    ],
    tags: ["B站", "长视频", "深度内容", "知识区"],
  },
  {
    id: "wechat-article",
    categoryId: "self-media",
    title: "微信公众号长文写作",
    description: "产出3000-5000字深度长文，适配公众号阅读场景与传播逻辑。",
    difficulty: "intermediate",
    timeEstimate: "1.5-2小时",
    tools: [
      { name: "Claude", url: "https://claude.ai" },
      { name: "Perplexity", url: "https://perplexity.ai" },
      { name: "Kimi", url: "https://kimi.moonshot.cn" },
    ],
    steps: [
      {
        title: "选题与素材收集",
        description: "确定选题角度并收集支撑素材、案例和数据。",
        tool: { name: "Perplexity", url: "https://perplexity.ai" },
        prompt:
          '我要写一篇公众号文章，主题是"普通人如何用AI工具月入过万的副业路径"。请帮我：1）收集3-5个真实案例（含具体数据）；2）整理相关行业数据；3）列出可能的争议点和读者疑问。',
        tips: [
          "公众号文章需要有深度和独家观点，避免信息搬运",
          "案例要具体到人、数字、时间线，增加可信度",
          "提前想好读者可能的反驳点，在文中预先回应",
        ],
        alternatives: [
          { name: "Kimi", url: "https://kimi.moonshot.cn" },
          { name: "ChatGPT", url: "https://chat.openai.com" },
        ],
      },
      {
        title: "文章结构与初稿",
        description: "按公众号爆文结构生成完整初稿。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '请撰写一篇4000字的公众号文章，主题是"普通人如何用AI工具月入过万"。结构要求：1）标题党但不失真，能引发转发；2）开头用个人故事或数据钩子（200字）；3）正文分5个部分，每部分讲一条具体路径（AI写作/AI设计/AI视频/AI编程/AI咨询）；4）每条路径包含：适合人群、入门门槛、变现方式、月收入范围、真实案例；5）结尾回归理性，给出行动建议；6）语气务实不画饼。',
        tips: [
          "每段不超过5行，段间空行，适配手机阅读",
          "每500字左右要有一个小标题或金句，维持阅读节奏",
          "在关键位置插入「加粗文字」作为扫读锚点",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "标题与摘要优化",
        description: "生成多版本标题并优化文章摘要。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '为这篇关于"AI副业"的公众号文章生成：1）8个不同风格的标题（数据型、故事型、反常识型、清单型各2个）；2）120字以内的文章摘要（显示在分享卡片上）；3）朋友圈转发时的3句推荐语。',
        tips: [
          "公众号标题决定打开率，摘要决定朋友圈转发率",
          "标题含数字的打开率比纯文字高26%",
          "避免标题过度党，否则取关率会上升",
        ],
        alternatives: [{ name: "Kimi", url: "https://kimi.moonshot.cn" }],
      },
      {
        title: "排版与配图",
        description: "使用工具完成公众号文章排版和配图选择。",
        tool: { name: "Canva", url: "https://canva.com" },
        prompt:
          "在Canva中选择公众号文章配图模板，按照文章中5个路径分别制作信息图卡片，统一使用品牌色系。",
        tips: [
          "推荐使用「秀米」或「135编辑器」做公众号排版",
          "配图风格要统一，建议用同一套模板",
          "头图尺寸900×383px，次图尺寸200×200px",
        ],
        alternatives: [
          { name: "Midjourney", url: "https://midjourney.com" },
          { name: "秀米", url: "https://xiumi.us" },
        ],
      },
    ],
    tags: ["公众号", "长文", "深度", "传播"],
  },
  {
    id: "youtube-channel",
    categoryId: "self-media",
    title: "YouTube 频道内容运营",
    description: "面向海外观众的 YouTube 频道从选题到SEO优化全流程。",
    difficulty: "intermediate",
    timeEstimate: "2-4小时",
    tools: [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Perplexity", url: "https://perplexity.ai" },
      { name: "Descript", url: "https://descript.com" },
      { name: "Canva", url: "https://canva.com" },
    ],
    steps: [
      {
        title: "关键词与选题研究",
        description: "用AI分析YouTube搜索趋势，找到搜索量高但竞争低的选题。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          'I want to create YouTube content about "AI tools for small businesses". Please: 1) Suggest 10 video topics with estimated search volume potential; 2) For each topic, identify the content gap (what existing videos miss); 3) Recommend ideal video length; 4) Suggest thumbnail concepts.',
        tips: [
          "用YouTube自动补全来验证AI建议的关键词是否有搜索量",
          "查看竞争视频的评论区，找到观众未被满足的需求",
          "优先做「how to」和「vs对比」类视频，搜索流量稳定",
        ],
        alternatives: [
          { name: "Perplexity", url: "https://perplexity.ai" },
          { name: "vidIQ", url: "https://vidiq.com" },
        ],
      },
      {
        title: "英文脚本撰写",
        description: "生成地道的英文视频脚本，适配YouTube观看习惯。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          'Write a 10-minute YouTube script about "5 AI Tools That Replaced My Marketing Team". Structure: 1) Hook with a bold claim (15 sec); 2) Quick personal story (30 sec); 3) Tool #1-5, each with demo description, pricing, pros/cons (90 sec each); 4) Comparison summary (30 sec); 5) CTA for subscribe. Tone: conversational, enthusiastic but not salesy.',
        tips: [
          "YouTube前15秒留存率决定是否被推荐",
          "每2-3分钟设置一个「retention bump」（悬念、提问、转折）",
          "脚本中标注B-roll和屏幕录制的位置",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "视频剪辑与字幕",
        description: "用AI辅助剪辑工具完成粗剪、字幕和音频优化。",
        tool: { name: "Descript", url: "https://descript.com" },
        prompt:
          "在Descript中导入录制素材，使用AI移除填充词（um, uh），自动生成字幕，使用Studio Sound提升音质。",
        tips: [
          "Descript可以像编辑文档一样编辑视频，删文字=删视频",
          "开启Eye Contact功能可以修正不看镜头的问题",
          "导出时选择1080p，字幕嵌入视频而非单独SRT",
        ],
        alternatives: [
          { name: "CapCut", url: "https://www.capcut.com" },
          { name: "Opus Clip", url: "https://opus.pro" },
        ],
      },
      {
        title: "SEO优化与发布",
        description: "优化标题、描述、标签和缩略图以获取最大曝光。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          'For my YouTube video "5 AI Tools That Replaced My Marketing Team", write: 1) 3 SEO-optimized title variations; 2) A 2000-character description with timestamps, links, and keywords; 3) 30 relevant tags; 4) 5 end screen CTA phrases. Target keywords: AI marketing tools, AI for business, marketing automation.',
        tips: [
          "YouTube描述前2行最重要，会显示在搜索结果中",
          "在描述中加时间戳（chapters）提升SEO和用户体验",
          "发布后24小时内的互动数据决定是否获得推荐流量",
        ],
        alternatives: [
          { name: "vidIQ", url: "https://vidiq.com" },
          { name: "TubeBuddy", url: "https://tubebuddy.com" },
        ],
      },
    ],
    tags: ["YouTube", "英文", "海外", "视频SEO"],
  },
  {
    id: "podcast-production",
    categoryId: "self-media",
    title: "播客节目制作",
    description: "从选题大纲到音频后期到上架分发的播客全流程。",
    difficulty: "intermediate",
    timeEstimate: "2-3小时",
    tools: [
      { name: "Claude", url: "https://claude.ai" },
      { name: "Descript", url: "https://descript.com" },
      { name: "ElevenLabs", url: "https://elevenlabs.io" },
    ],
    steps: [
      {
        title: "节目大纲与提问清单",
        description: "为播客对话生成结构化大纲和深度提问清单。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '我要录制一期播客，主题是"从大厂裸辞到AI创业的第一年"，嘉宾是一位前阿里产品经理。请帮我生成：1）60分钟的节目时间线（含每段时长）；2）15个由浅入深的采访问题；3）3个可能引发争议的追问；4）开场白和结束语模板。',
        tips: [
          "问题按「经历→感受→观点→建议」的顺序排列",
          "准备3个「如果嘉宾聊嗨了」的延伸话题",
          "录制前把大纲发给嘉宾，但不要发具体问题",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "音频剪辑与降噪",
        description: "AI辅助去除口头禅、长停顿和背景噪音。",
        tool: { name: "Descript", url: "https://descript.com" },
        prompt:
          "导入录音文件，使用Descript的Filler Word Removal移除「嗯」「那个」等口头禅，用Studio Sound降噪，调整音量均衡。",
        tips: [
          "不要过度去除口头禅，保留一些让对话更自然",
          "两人音量差距大时，分轨单独调整",
          "背景音乐音量控制在说话声的10-15%",
        ],
        alternatives: [
          { name: "Adobe Podcast", url: "https://podcast.adobe.com" },
          { name: "Riverside.fm", url: "https://riverside.fm" },
        ],
      },
      {
        title: "Show Notes 与时间戳",
        description: "自动生成节目摘要、时间戳和关键要点。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          "请根据以下播客转录文字生成：1）200字的节目简介；2）带时间戳的内容大纲（格式：00:00 - 话题名）；3）本期提到的资源链接清单；4）3条适合发社交媒体的金句摘录。[粘贴转录文字]",
        tips: [
          "时间戳可以用 Descript 的章节功能自动生成",
          "Show Notes 中的关键词有助于播客平台SEO",
          "摘录的金句可以做成图片发社交媒体引流",
        ],
        alternatives: [
          { name: "ChatGPT", url: "https://chat.openai.com" },
          { name: "Kimi", url: "https://kimi.moonshot.cn" },
        ],
      },
    ],
    tags: ["播客", "音频", "访谈", "内容"],
  },
  {
    id: "zhihu-column",
    categoryId: "self-media",
    title: "知乎专栏深度回答",
    description: "产出高赞知乎回答，通过专业深度获取精准流量。",
    difficulty: "intermediate",
    timeEstimate: "1-1.5小时",
    tools: [
      { name: "Perplexity", url: "https://perplexity.ai" },
      { name: "Claude", url: "https://claude.ai" },
    ],
    steps: [
      {
        title: "高潜力问题筛选",
        description: "找到关注量高但优质回答少的问题。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          '请帮我分析知乎"AI工具"相关问题的特征，列出10个适合写深度回答的问题类型，每个类型举例说明。筛选标准：1）关注人数>500；2）现有回答质量一般；3）有长尾搜索流量。',
        tips: [
          "优先回答「关注多、回答少」的问题，竞争低",
          "新问题的前5个回答获得的曝光最多",
          "带「如何」「为什么」「推荐」的问题搜索流量最大",
        ],
        alternatives: [{ name: "Kimi", url: "https://kimi.moonshot.cn" }],
      },
      {
        title: "深度回答撰写",
        description: "产出有数据支撑、结构清晰的专业回答。",
        tool: { name: "Claude", url: "https://claude.ai" },
        prompt:
          '请为知乎问题"2024年有哪些真正好用的AI工具？"写一个3000字的深度回答。要求：1）开头用个人使用经验切入，建立可信度；2）按使用场景分类（写作/设计/编程/效率），每类推荐2-3个工具；3）每个工具写：核心亮点、实际使用体验、定价对比、适合人群；4）结尾做总结对比表格；5）语气专业但不装。',
        tips: [
          "知乎高赞回答的共同特征：有亲身经历、有数据、有对比",
          "在开头用「先说结论」的方式可以提高完读率",
          "每500字插入一个分割线或小标题",
        ],
        alternatives: [{ name: "ChatGPT", url: "https://chat.openai.com" }],
      },
      {
        title: "引流布局",
        description: "在回答中自然地植入个人品牌和引流入口。",
        tool: { name: "ChatGPT", url: "https://chat.openai.com" },
        prompt:
          "请帮我在这篇知乎回答中设计3个自然的引流触点：1）个人公众号引导（提供更多工具测评）；2）知乎专栏关注引导；3）评论区互动话术。要求植入自然，不像广告。",
        tips: [
          "引流要提供额外价值，如「关注领取工具对比表」",
          "知乎对营销内容管控严格，避免直接放链接",
          "在评论区自己追评补充内容，增加互动权重",
        ],
        alternatives: [{ name: "Kimi", url: "https://kimi.moonshot.cn" }],
      },
    ],
    tags: ["知乎", "深度回答", "引流", "专业内容"],
  },
];
