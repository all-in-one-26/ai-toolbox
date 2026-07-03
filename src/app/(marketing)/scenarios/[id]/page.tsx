import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  allScenarios,
  getScenarioById,
  scenarioCategories,
} from "@/data/scenarios";
import { StepCard } from "@/components/scenarios/step-card";
import { AskAiButton } from "@/components/chat/ask-ai-button";
import { buttonVariants } from "@/components/ui/button";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
  return allScenarios.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const scenario = getScenarioById(id);
  if (!scenario) return {};
  return {
    title: `${scenario.title} — AI 场景方案 | AI-Toolbox`,
    description: scenario.description,
  };
}

const difficultyMap: Record<string, { label: string; cls: string }> = {
  beginner: {
    label: "入门",
    cls: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400",
  },
  intermediate: {
    label: "进阶",
    cls: "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400",
  },
  advanced: {
    label: "高级",
    cls: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400",
  },
};

export default async function ScenarioDetailPage({ params }: Props) {
  const { id } = await params;
  const scenario = getScenarioById(id);
  if (!scenario) notFound();

  const category = scenarioCategories.find((c) => c.id === scenario.categoryId);
  const diff = difficultyMap[scenario.difficulty] ?? difficultyMap.beginner;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <Link
        href="/scenarios"
        className={buttonVariants({ variant: "ghost", size: "sm" })}
      >
        <ArrowLeft className="mr-1 h-3.5 w-3.5" />
        返回场景列表
      </Link>

      <div className="mt-6">
        {category && (
          <p className="text-sm text-muted-foreground">
            {category.icon} {category.name}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          {scenario.title}
        </h1>
        <p className="mt-2 text-muted-foreground">{scenario.description}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span
            className={`rounded-md px-2.5 py-1 text-xs font-medium ${diff.cls}`}
          >
            {diff.label}
          </span>
          <span className="text-sm text-muted-foreground">
            ⏱ {scenario.timeEstimate}
          </span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {scenario.tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700 transition-colors hover:bg-violet-100 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300 dark:hover:bg-violet-900/50"
            >
              {tool.name} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 space-y-6">
        <h2 className="text-xl font-bold">执行步骤</h2>
        {scenario.steps.map((step, i) => (
          <StepCard key={i} step={step} index={i} />
        ))}
      </div>

      {scenario.tags.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-2">
          {scenario.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {/* AI Advisor CTA */}
      <div className="mt-12 flex justify-center">
        <AskAiButton
          question={`我想了解"${scenario.title}"这个方案的更多细节，有什么建议？`}
        />
      </div>
    </div>
  );
}
