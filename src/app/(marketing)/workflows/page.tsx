import { workflows } from "@/data/workflows";
import { WorkflowCard } from "@/components/tools/workflow-card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 工作流专区 — 不同场景的可执行方案 | AI-Toolbox",
  description:
    "按场景浏览 AI 工作流：自媒体运营、跨境电商、产品经理、联盟营销、独立开发者等，直接给你可执行的工具组合方案。",
};

export default function WorkflowsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10 text-center">
        <p className="text-sm font-semibold tracking-wide text-violet-600 dark:text-violet-400">
          工作流专区
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
          真正好用的导航，要直接给可执行方案
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          不只是列工具，而是告诉你在具体场景下该用哪些工具、按什么顺序操作。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {workflows.map((wf) => (
          <WorkflowCard key={wf.id} workflow={wf} />
        ))}
      </div>
    </div>
  );
}
