import Link from "next/link";
import { ArrowRight, Wrench, Zap, GitCompare, Target } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ToolCard } from "@/components/tools/tool-card";
import { ScenarioCard } from "@/components/scenarios/scenario-card";
import { SearchBar } from "@/components/tools/search-bar";
import {
  getFeaturedTools,
  getNewTools,
  categories,
} from "@/data/tools";
import { allScenarios, scenarioCategories } from "@/data/scenarios";

export default function LandingPage() {
  const featured = getFeaturedTools();
  const newTools = getNewTools();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,oklch(0.75_0.15_280/0.25),transparent)]" />
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-20 text-center md:pt-28">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-1.5 text-sm text-violet-700 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300">
            <Wrench className="h-3.5 w-3.5" />
            不只是导航，是你的AI工具智能顾问
          </div>
          <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            从1000+工具中
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent dark:from-violet-400 dark:to-blue-400">
              找到最适合你的AI
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            场景化智能推荐、横向PK对比、实时雷达追踪 —
            告别盲目试用，精准匹配你的需求。
          </p>
          <div className="mt-8 flex justify-center">
            <SearchBar />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>热门：</span>
            {["ChatGPT", "Claude", "Midjourney", "Cursor", "Suno"].map((t) => (
              <Link
                key={t}
                href={`/tools/${t.toLowerCase()}`}
                className="rounded-md bg-muted px-2 py-1 transition-colors hover:bg-muted/80"
              >
                {t}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Target,
              title: "场景化推荐",
              desc: '按"自媒体/电商/开发者"找工具，不再漫无目的翻分类',
            },
            {
              icon: GitCompare,
              title: "工具PK对比",
              desc: "ChatGPT vs Claude 全维度横向对比，帮你做选择",
            },
            {
              icon: Zap,
              title: "实时雷达",
              desc: "每日追踪新工具上线和价格变动，第一时间推送",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border/60 bg-card p-5 text-center"
            >
              <item.icon className="mx-auto h-8 w-8 text-violet-500" />
              <h3 className="mt-3 font-semibold">{item.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Scenarios */}
      <section id="scenarios" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wide text-violet-600 dark:text-violet-400">
              场景推荐
            </p>
            <h2 className="mt-1 text-2xl font-bold tracking-tight md:text-3xl">
              {allScenarios.length}+ 真实场景，直接给可执行方案
            </h2>
            <p className="mt-2 text-muted-foreground">
              每个场景含完整步骤、提示语样例、操作注意和可选工具
            </p>
          </div>
          <Link
            href="/scenarios"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            查看全部
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="mb-6 flex flex-wrap gap-2">
          {scenarioCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/scenarios#${cat.id}`}
              className="rounded-full border border-border/60 bg-card px-3 py-1.5 text-xs font-medium transition-all hover:border-violet-300 hover:shadow-sm dark:hover:border-violet-700"
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allScenarios.slice(0, 6).map((scenario) => (
            <ScenarioCard key={scenario.id} scenario={scenario} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="mb-6 text-center text-2xl font-bold tracking-tight md:text-3xl">
          按类型浏览
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/tools?category=${cat.id}`}
              className="rounded-full border border-border/60 bg-card px-4 py-2 text-sm transition-all hover:border-violet-300 hover:shadow-sm dark:hover:border-violet-700"
            >
              <span className="mr-1.5">{cat.icon}</span>
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Tools */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">精选推荐</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              编辑部严选，最值得关注的AI工具
            </p>
          </div>
          <Link
            href="/tools"
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            查看全部
            <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* New Tools */}
      {newTools.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-20">
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight">
              <Zap className="mr-2 inline h-5 w-5 text-amber-500" />
              最新上线
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              最近发现的值得关注的新工具
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {newTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}
