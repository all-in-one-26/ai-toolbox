import type { ScenarioStep } from "@/data/scenarios";

export function StepCard({
  step,
  index,
}: {
  step: ScenarioStep;
  index: number;
}) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-6">
      <div className="flex items-start gap-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-sm font-bold text-violet-700 dark:bg-violet-900/40 dark:text-violet-400">
          {index + 1}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg font-bold">{step.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {step.description}
          </p>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-xs text-muted-foreground">推荐工具：</span>
            <a
              href={step.tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-violet-100 px-3 py-0.5 text-xs font-semibold text-violet-700 transition-colors hover:bg-violet-200 dark:bg-violet-900/40 dark:text-violet-400 dark:hover:bg-violet-900/60"
            >
              {step.tool.name} ↗
            </a>
          </div>

          {step.prompt && (
            <div className="mt-4">
              <p className="mb-1.5 text-xs font-semibold text-muted-foreground">
                💬 提示语样例
              </p>
              <div className="rounded-lg border border-border/60 bg-muted/30 p-4 text-sm leading-relaxed">
                {step.prompt}
              </div>
            </div>
          )}

          {step.tips.length > 0 && (
            <div className="mt-4">
              <p className="mb-1.5 text-xs font-semibold text-muted-foreground">
                ⚠️ 操作注意
              </p>
              <ul className="space-y-1.5">
                {step.tips.map((tip, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {step.alternatives.length > 0 && (
            <div className="mt-4">
              <p className="mb-1.5 text-xs font-semibold text-muted-foreground">
                🔄 可选工具
              </p>
              <div className="flex flex-wrap gap-2">
                {step.alternatives.map((alt) => (
                  <a
                    key={alt.name}
                    href={alt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-border/80 bg-muted/50 px-3 py-1 text-xs font-medium transition-colors hover:bg-muted"
                  >
                    {alt.name} ↗
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
