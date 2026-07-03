import { Wrench, Mail, Target, Users, Lightbulb } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "关于我们 | AI-Toolbox",
  description:
    "AI-Toolbox 致力于帮助创业者、营销人和内容创作者高效发现和使用 AI 工具。",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <div className="text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 dark:bg-violet-900/40">
          <Wrench className="h-8 w-8 text-violet-600 dark:text-violet-400" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          关于 AI-Toolbox
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          不只是工具导航，而是帮你从 1000+ AI 工具中找到真正适合你的那几个。
        </p>
      </div>

      <div className="mt-16 space-y-12">
        <section className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-violet-100 dark:bg-violet-900/40">
            <Target className="h-5 w-5 text-violet-600 dark:text-violet-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold">为什么做这个？</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              AI
              工具爆炸式增长，每天都有新产品冒出来。作为创业者和内容创作者，我们自己也被"选择困难症"折磨过
              — 翻了 20 个导航站，看了 50 篇测评，最后还是不知道该用哪个。
              所以我们做了
              AI-Toolbox：不是再建一个冷冰冰的列表，而是按真实使用场景，直接告诉你该用什么、怎么用。
            </p>
          </div>
        </section>

        <section className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40">
            <Lightbulb className="h-5 w-5 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold">我们的特色</h2>
            <ul className="mt-2 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong className="text-foreground">场景化推荐</strong> — 53
                  个真实工作场景，每个都有完整步骤和提示语模板
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong className="text-foreground">横向 PK 对比</strong> —
                  不说"哪个好"，而是帮你看清差异自己做判断
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500" />
                <span>
                  <strong className="text-foreground">创业者视角</strong> —
                  团队来自一线创业，理解你真正需要什么
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
            <Users className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold">适合谁？</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              自媒体人、跨境电商卖家、独立开发者、产品经理、联盟营销人员、SEO
              从业者 — 所有想要借助 AI 提效的互联网从业者。
            </p>
          </div>
        </section>

        <section className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100 dark:bg-amber-900/40">
            <Mail className="h-5 w-5 text-amber-600 dark:text-amber-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold">联系我们</h2>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              有建议、反馈或合作意向？欢迎邮件联系：
              <a
                href="mailto:jack.vet1999@gmail.com"
                className="ml-1 text-violet-600 hover:underline dark:text-violet-400"
              >
                jack.vet1999@gmail.com
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
