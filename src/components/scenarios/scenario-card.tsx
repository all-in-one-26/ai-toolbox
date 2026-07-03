import Link from "next/link";
import type { Scenario } from "@/data/scenarios";

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

export function ScenarioCard({ scenario }: { scenario: Scenario }) {
  const diff = difficultyMap[scenario.difficulty] ?? difficultyMap.beginner;

  return (
    <div className="group rounded-xl border border-border/60 bg-card p-5 transition-all hover:border-violet-300 hover:shadow-lg dark:hover:border-violet-700">
      <Link href={`/scenarios/${scenario.id}`} className="block">
        <div className="flex items-center gap-2">
          <span
            className={`rounded-md px-2 py-0.5 text-xs font-medium ${diff.cls}`}
          >
            {diff.label}
          </span>
          <span className="text-xs text-muted-foreground">
            {scenario.timeEstimate}
          </span>
        </div>

        <h3 className="mt-3 text-base font-bold leading-snug group-hover:text-violet-600 dark:group-hover:text-violet-400">
          {scenario.title}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {scenario.description}
        </p>
      </Link>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {scenario.tools.slice(0, 4).map((tool) => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-700 transition-colors hover:bg-violet-100 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-300 dark:hover:bg-violet-900/50"
          >
            {tool.name} ↗
          </a>
        ))}
        {scenario.tools.length > 4 && (
          <span className="rounded-full border border-border/80 bg-muted/50 px-2.5 py-0.5 text-xs text-muted-foreground">
            +{scenario.tools.length - 4}
          </span>
        )}
      </div>
    </div>
  );
}
