import Link from "next/link";
import { ArrowRight, Wrench, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ToolCard } from "@/components/tools/tool-card";
import { SearchBar } from "@/components/tools/search-bar";
import { NewsletterSignup } from "@/components/newsletter/newsletter-signup";
import { getToolBySlug } from "@/data/tools";

const useCases = [
  {
    icon: "✍️",
    title: "写小红书 / 公众号",
    desc: "爆款标题、封面、正文一条龙",
    href: "/scenarios/xiaohongshu-note",
  },
  {
    icon: "🎬",
    title: "做短视频",
    desc: "脚本、字幕、配音、剪辑全搞定",
    href: "/scenarios/douyin-script",
  },
  {
    icon: "💻",
    title: "写代码 / 建站",
    desc: "AI 辅助编程，效率翻倍",
    href: "/scenarios/ai-full-stack",
  },
  {
    icon: "🎨",
    title: "做设计 / 画图",
    desc: "Logo、海报、产品图一句话生成",
    href: "/scenarios/brand-logo-vi",
  },
  {
    icon: "🔍",
    title: "做调研 / 找资料",
    desc: "AI 搜索替代传统搜索引擎",
    href: "/scenarios/keyword-research",
  },
  {
    icon: "🛒",
    title: "电商运营",
    desc: "Listing 优化、客服话术、竞品分析",
    href: "/scenarios/amazon-listing",
  },
];

const topToolSlugs = [
  "chatgpt",
  "claude",
  "midjourney",
  "cursor",
  "deepseek",
  "suno",
];

export default function LandingPage() {
  const topTools = topToolSlugs
    .map((slug) => getToolBySlug(slug))
    .filter(Boolean);

  return (
    <>
      {/* Hero — 首屏 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,oklch(0.75_0.15_280/0.25),transparent)]" />
        <div className="mx-auto max-w-6xl px-4 pb-20 pt-20 text-center md:pt-28">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300">
            <Wrench className="h-3.5 w-3.5" />
            不只是导航，是你的 AI 工具智能顾问
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            告诉我你想做什么
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-blue-400">
              我帮你挑最好的 AI
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
            100+ 工具实测对比，50+ 场景可执行方案，不踩坑。
          </p>
          <div className="mt-8 flex justify-center">
            <SearchBar />
          </div>
        </div>
      </section>

      {/* 第二屏 — 你想用 AI 做什么？ */}
      <section className="mx-auto max-w-4xl px-4 pb-20">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight md:text-3xl">
          你想用 AI 做什么？
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((uc) => (
            <Link
              key={uc.href}
              href={uc.href}
              className="group flex items-start gap-3.5 rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-violet-300 hover:shadow-md dark:hover:border-violet-700"
            >
              <span className="mt-0.5 text-2xl">{uc.icon}</span>
              <div className="min-w-0">
                <h3 className="font-semibold leading-tight group-hover:text-violet-600 dark:group-hover:text-violet-400">
                  {uc.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{uc.desc}</p>
              </div>
              <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 text-muted-foreground/0 transition-all group-hover:text-violet-500" />
            </Link>
          ))}
        </div>
        <div className="mt-6 text-center">
          <Link
            href="/scenarios"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            查看全部 50+ 场景
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* 第三屏 — 最受欢迎的工具 */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <div className="mb-1 flex items-center gap-1.5">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <p className="text-sm font-semibold tracking-wide text-amber-600 dark:text-amber-400">
                最受欢迎
              </p>
            </div>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              大家都在用的 AI 工具
            </h2>
          </div>
          <Link
            href="/tools"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            全部工具
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topTools.map((tool) => (
            <ToolCard key={tool!.id} tool={tool!} />
          ))}
        </div>
      </section>

      {/* 订阅 */}
      <section className="mx-auto max-w-2xl px-4 pb-20">
        <NewsletterSignup />
      </section>
    </>
  );
}
