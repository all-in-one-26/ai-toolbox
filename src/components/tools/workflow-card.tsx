import Link from "next/link";
import type { Workflow } from "@/data/workflows";

const colorMap: Record<string, { border: string; label: string; dot: string }> =
  {
    orange: {
      border:
        "hover:border-orange-300 dark:hover:border-orange-700 hover:shadow-orange-500/5",
      label: "text-orange-600 dark:text-orange-400",
      dot: "bg-orange-500",
    },
    blue: {
      border:
        "hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-blue-500/5",
      label: "text-blue-600 dark:text-blue-400",
      dot: "bg-blue-500",
    },
    violet: {
      border:
        "hover:border-violet-300 dark:hover:border-violet-700 hover:shadow-violet-500/5",
      label: "text-violet-600 dark:text-violet-400",
      dot: "bg-violet-500",
    },
    emerald: {
      border:
        "hover:border-emerald-300 dark:hover:border-emerald-700 hover:shadow-emerald-500/5",
      label: "text-emerald-600 dark:text-emerald-400",
      dot: "bg-emerald-500",
    },
    amber: {
      border:
        "hover:border-amber-300 dark:hover:border-amber-700 hover:shadow-amber-500/5",
      label: "text-amber-600 dark:text-amber-400",
      dot: "bg-amber-500",
    },
    sky: {
      border:
        "hover:border-sky-300 dark:hover:border-sky-700 hover:shadow-sky-500/5",
      label: "text-sky-600 dark:text-sky-400",
      dot: "bg-sky-500",
    },
    pink: {
      border:
        "hover:border-pink-300 dark:hover:border-pink-700 hover:shadow-pink-500/5",
      label: "text-pink-600 dark:text-pink-400",
      dot: "bg-pink-500",
    },
    indigo: {
      border:
        "hover:border-indigo-300 dark:hover:border-indigo-700 hover:shadow-indigo-500/5",
      label: "text-indigo-600 dark:text-indigo-400",
      dot: "bg-indigo-500",
    },
  };

export function WorkflowCard({ workflow }: { workflow: Workflow }) {
  const colors = colorMap[workflow.color] ?? colorMap.violet;

  return (
    <div
      className={`group rounded-xl border border-border/60 bg-card p-6 transition-all hover:shadow-lg ${colors.border}`}
    >
      <p className={`text-xs font-semibold tracking-wide ${colors.label}`}>
        {workflow.scene}
      </p>

      <h3 className="mt-2 text-lg font-bold leading-snug">{workflow.title}</h3>

      <p className="mt-1.5 text-sm text-muted-foreground">
        {workflow.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {workflow.tools.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-border/80 bg-muted/50 px-3 py-1 text-xs font-medium"
          >
            {tool}
          </span>
        ))}
      </div>

      <ol className="mt-5 space-y-2.5">
        {workflow.steps.map((step, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <span
              className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`}
            />
            <span className="text-muted-foreground">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
