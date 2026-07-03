import {
  allScenarios,
  scenarioCategories,
  getScenariosByCategory,
} from "@/data/scenarios";
import { ScenarioCard } from "@/components/scenarios/scenario-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "场景推荐 — 50+ AI 应用场景的可执行方案 | AI-Toolbox",
  description:
    "按场景浏览 AI 工具使用方案：自媒体运营、联盟营销、SEO站群、电商运营、产品经理、设计师等，每个场景提供完整步骤、提示语样例和工具推荐。",
};

export default function ScenariosPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold tracking-wide text-violet-600 dark:text-violet-400">
          场景推荐
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          {allScenarios.length}+ 真实场景，每个都有可执行方案
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
          不只是列工具，而是告诉你在具体场景下该用哪些工具、按什么顺序操作、提示语怎么写。
        </p>
      </div>

      {scenarioCategories.map((cat) => {
        const scenarios = getScenariosByCategory(cat.id);
        if (scenarios.length === 0) return null;

        return (
          <section key={cat.id} id={cat.id} className="mb-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="text-2xl">{cat.icon}</span>
              <div>
                <h2 className="text-xl font-bold">{cat.name}</h2>
                <p className="text-sm text-muted-foreground">
                  {cat.description}
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {scenarios.map((scenario) => (
                <ScenarioCard key={scenario.id} scenario={scenario} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
