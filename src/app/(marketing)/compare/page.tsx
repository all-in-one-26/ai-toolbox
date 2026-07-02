"use client";

import { useState, useMemo } from "react";
import { Star, ExternalLink, GitCompare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tools } from "@/data/tools";
import type { Tool } from "@/data/tools";

const pricingLabels: Record<string, string> = {
  free: "免费",
  freemium: "免费增值",
  paid: "付费",
  "open-source": "开源",
};

function ToolSelect({
  value,
  onChange,
  exclude,
}: {
  value: string;
  onChange: (slug: string) => void;
  exclude?: string;
}) {
  const options = tools.filter((t) => t.slug !== exclude);
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="h-10 w-full rounded-lg border border-border bg-background px-3 text-sm"
    >
      <option value="">选择工具...</option>
      {options.map((t) => (
        <option key={t.slug} value={t.slug}>
          {t.icon} {t.name}
        </option>
      ))}
    </select>
  );
}

function CompareRow({
  label,
  a,
  b,
}: {
  label: string;
  a: React.ReactNode;
  b: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 border-b border-border/40 last:border-0">
      <div className="p-3 text-sm font-medium text-muted-foreground">
        {label}
      </div>
      <div className="border-x border-border/40 p-3 text-sm">{a}</div>
      <div className="p-3 text-sm">{b}</div>
    </div>
  );
}

export default function ComparePage() {
  const [slugA, setSlugA] = useState("chatgpt");
  const [slugB, setSlugB] = useState("claude");

  const toolA = useMemo(() => tools.find((t) => t.slug === slugA), [slugA]);
  const toolB = useMemo(() => tools.find((t) => t.slug === slugB), [slugB]);

  function renderRating(tool: Tool) {
    return (
      <div className="flex items-center gap-1">
        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        <span className="font-medium">{tool.rating}</span>
        <span className="text-muted-foreground text-xs">({tool.reviews})</span>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="mb-8 text-center">
        <GitCompare className="mx-auto mb-3 h-8 w-8 text-violet-500" />
        <h1 className="text-3xl font-bold">工具PK对比</h1>
        <p className="mt-2 text-muted-foreground">
          全维度横向对比，帮你做出最佳选择
        </p>
      </div>

      {/* Selectors */}
      <div className="mb-8 grid grid-cols-3 items-center gap-4">
        <ToolSelect value={slugA} onChange={setSlugA} exclude={slugB} />
        <div className="text-center text-2xl font-bold text-violet-500">VS</div>
        <ToolSelect value={slugB} onChange={setSlugB} exclude={slugA} />
      </div>

      {toolA && toolB ? (
        <div className="overflow-hidden rounded-xl border border-border">
          {/* Headers */}
          <div className="grid grid-cols-3 bg-muted/50">
            <div className="p-4 text-sm font-semibold text-muted-foreground">
              对比维度
            </div>
            <div className="border-x border-border/40 p-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">{toolA.icon}</span>
                <span className="font-semibold">{toolA.name}</span>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2">
                <span className="text-xl">{toolB.icon}</span>
                <span className="font-semibold">{toolB.name}</span>
              </div>
            </div>
          </div>

          <CompareRow label="定位" a={toolA.tagline} b={toolB.tagline} />
          <CompareRow
            label="评分"
            a={renderRating(toolA)}
            b={renderRating(toolB)}
          />
          <CompareRow
            label="定价"
            a={pricingLabels[toolA.pricing]}
            b={pricingLabels[toolB.pricing]}
          />
          <CompareRow
            label="价格详情"
            a={toolA.priceNote ?? "-"}
            b={toolB.priceNote ?? "-"}
          />
          <CompareRow
            label="分类"
            a={toolA.tags.join("、")}
            b={toolB.tags.join("、")}
          />
          <CompareRow
            label="适用场景"
            a={toolA.scenes.length + " 个场景"}
            b={toolB.scenes.length + " 个场景"}
          />
          <CompareRow
            label="官网"
            a={
              <a
                href={toolA.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-violet-600 hover:underline dark:text-violet-400"
              >
                访问 <ExternalLink className="h-3 w-3" />
              </a>
            }
            b={
              <a
                href={toolB.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-violet-600 hover:underline dark:text-violet-400"
              >
                访问 <ExternalLink className="h-3 w-3" />
              </a>
            }
          />
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-border text-muted-foreground">
          请在上方选择两个工具进行对比
        </div>
      )}

      {/* Quick Compare Suggestions */}
      <div className="mt-10">
        <h3 className="mb-4 text-sm font-semibold text-muted-foreground">
          热门对比
        </h3>
        <div className="flex flex-wrap gap-2">
          {[
            ["chatgpt", "claude"],
            ["midjourney", "stable-diffusion"],
            ["cursor", "github-copilot"],
            ["perplexity", "kimi"],
          ].map(([a, b]) => {
            const tA = tools.find((t) => t.slug === a);
            const tB = tools.find((t) => t.slug === b);
            if (!tA || !tB) return null;
            return (
              <Button
                key={`${a}-${b}`}
                variant="outline"
                size="sm"
                onClick={() => {
                  setSlugA(a);
                  setSlugB(b);
                }}
                className="text-xs"
              >
                {tA.name} vs {tB.name}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
