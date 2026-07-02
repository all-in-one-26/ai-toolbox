import Link from "next/link";
import { Star, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Tool } from "@/data/tools";

const pricingColors: Record<string, string> = {
  free: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  freemium: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  paid: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "open-source":
    "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
};

const pricingLabels: Record<string, string> = {
  free: "免费",
  freemium: "免费增值",
  paid: "付费",
  "open-source": "开源",
};

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="group relative rounded-xl border border-border/60 bg-card transition-all hover:border-border hover:shadow-lg hover:shadow-violet-500/5">
      <Link href={`/tools/${tool.slug}`} className="block p-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{tool.icon}</span>
            <div>
              <h3 className="font-semibold leading-tight">{tool.name}</h3>
              <p className="text-xs text-muted-foreground">{tool.tagline}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {tool.isNew && (
              <Badge
                variant="secondary"
                className="text-[10px] bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400"
              >
                NEW
              </Badge>
            )}
          </div>
        </div>

        <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {tool.description}
        </p>

        <div className="mt-3 flex flex-wrap gap-1.5">
          {tool.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-0.5 text-[11px] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${pricingColors[tool.pricing]}`}
            >
              {pricingLabels[tool.pricing]}
            </span>
            {tool.priceNote && (
              <span className="text-muted-foreground">{tool.priceNote}</span>
            )}
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            <span>{tool.rating}</span>
            <span className="text-muted-foreground/50">({tool.reviews})</span>
          </div>
        </div>
      </Link>

      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-3 top-3 rounded-md p-1.5 text-muted-foreground/0 transition-all group-hover:text-muted-foreground hover:bg-muted"
      >
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  );
}
