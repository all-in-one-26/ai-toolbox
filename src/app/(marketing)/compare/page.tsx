"use client";

import { useState, useMemo } from "react";
import {
  Star,
  ExternalLink,
  GitCompare,
  ThumbsUp,
  ThumbsDown,
  Check,
  X,
  Plus,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { tools } from "@/data/tools";
import type { Tool } from "@/data/tools";

const pricingLabels: Record<string, string> = {
  free: "免费",
  freemium: "免费增值",
  paid: "付费",
  "open-source": "开源",
};

const chineseSupportLabels: Record<string, string> = {
  native: "原生中文",
  good: "中文良好",
  partial: "部分中文",
  none: "不支持中文",
};

const chineseSupportColors: Record<string, string> = {
  native: "text-emerald-600 dark:text-emerald-400",
  good: "text-blue-600 dark:text-blue-400",
  partial: "text-amber-600 dark:text-amber-400",
  none: "text-red-500",
};

const sceneLabels: Record<string, string> = {
  creator: "内容创作者",
  ecommerce: "电商运营",
  developer: "开发者",
  designer: "设计师",
  marketer: "营销人",
  student: "学生/研究者",
  freelancer: "自由职业者",
};

function ToolSelect({
  value,
  onChange,
  excludeSlugs,
}: {
  value: string;
  onChange: (slug: string) => void;
  excludeSlugs: string[];
}) {
  const options = tools.filter((t) => !excludeSlugs.includes(t.slug));
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
  cells,
}: {
  label: string;
  cells: React.ReactNode[];
}) {
  return (
    <div
      className="grid border-b border-border/40 last:border-0"
      style={{
        gridTemplateColumns: `minmax(100px, 1fr) repeat(${cells.length}, minmax(0, 2fr))`,
      }}
    >
      <div className="p-3 text-sm font-medium text-muted-foreground">
        {label}
      </div>
      {cells.map((cell, i) => (
        <div key={i} className="border-l border-border/40 p-3 text-sm">
          {cell}
        </div>
      ))}
    </div>
  );
}

export default function ComparePage() {
  const [slugs, setSlugs] = useState(["chatgpt", "claude"]);

  const selectedTools = useMemo(
    () =>
      slugs
        .map((s) => tools.find((t) => t.slug === s))
        .filter(Boolean) as Tool[],
    [slugs],
  );

  function updateSlug(index: number, newSlug: string) {
    setSlugs((prev) => {
      const next = [...prev];
      next[index] = newSlug;
      return next;
    });
  }

  function addSlot() {
    if (slugs.length < 4) {
      setSlugs((prev) => [...prev, ""]);
    }
  }

  function removeSlot(index: number) {
    if (slugs.length > 2) {
      setSlugs((prev) => prev.filter((_, i) => i !== index));
    }
  }

  function renderRating(tool: Tool) {
    return (
      <div className="flex items-center gap-1">
        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
        <span className="font-medium">{tool.rating}</span>
        <span className="text-muted-foreground text-xs">({tool.reviews})</span>
      </div>
    );
  }

  const allFeatureNames = useMemo(() => {
    const names = new Set<string>();
    for (const t of selectedTools) {
      for (const f of t.features ?? []) {
        names.add(f.name);
      }
    }
    return Array.from(names);
  }, [selectedTools]);

  const hasAnyPros = selectedTools.some((t) => t.pros && t.pros.length > 0);
  const hasAnyCons = selectedTools.some((t) => t.cons && t.cons.length > 0);
  const hasAnyFeatures = allFeatureNames.length > 0;

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="mb-8 text-center">
        <GitCompare className="mx-auto mb-3 h-8 w-8 text-violet-500" />
        <h1 className="text-3xl font-bold">工具PK对比</h1>
        <p className="mt-2 text-muted-foreground">
          全维度横向对比，帮你做出最佳选择
        </p>
      </div>

      {/* Selectors */}
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
        {slugs.map((slug, i) => (
          <div key={i} className="relative flex-1">
            <ToolSelect
              value={slug}
              onChange={(s) => updateSlug(i, s)}
              excludeSlugs={slugs.filter((_, j) => j !== i)}
            />
            {slugs.length > 2 && (
              <button
                type="button"
                onClick={() => removeSlot(i)}
                className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-500 text-xs hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-900/50"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            )}
          </div>
        ))}
        {slugs.length < 4 && (
          <Button
            variant="outline"
            size="sm"
            onClick={addSlot}
            className="shrink-0"
          >
            <Plus className="mr-1 h-3.5 w-3.5" />
            加工具
          </Button>
        )}
      </div>

      {selectedTools.length >= 2 ? (
        <div className="space-y-8">
          {/* Basic Comparison Table */}
          <div className="overflow-x-auto rounded-xl border border-border">
            <div
              className="grid bg-muted/50"
              style={{
                gridTemplateColumns: `minmax(100px, 1fr) repeat(${selectedTools.length}, minmax(0, 2fr))`,
              }}
            >
              <div className="p-4 text-sm font-semibold text-muted-foreground">
                对比维度
              </div>
              {selectedTools.map((t) => (
                <div key={t.id} className="border-l border-border/40 p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{t.icon}</span>
                    <span className="font-semibold">{t.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <CompareRow
              label="定位"
              cells={selectedTools.map((t) => t.tagline)}
            />
            <CompareRow
              label="评分"
              cells={selectedTools.map((t) => renderRating(t))}
            />
            <CompareRow
              label="定价"
              cells={selectedTools.map((t) => pricingLabels[t.pricing])}
            />
            <CompareRow
              label="价格详情"
              cells={selectedTools.map((t) => t.priceNote ?? "-")}
            />
            <CompareRow
              label="分类"
              cells={selectedTools.map((t) => t.tags.join("、"))}
            />
            <CompareRow
              label="适用场景"
              cells={selectedTools.map((t) => t.scenes.length + " 个场景")}
            />
            {selectedTools.some((t) => t.chineseSupport) && (
              <CompareRow
                label="中文支持"
                cells={selectedTools.map((t) =>
                  t.chineseSupport ? (
                    <span className={chineseSupportColors[t.chineseSupport]}>
                      {chineseSupportLabels[t.chineseSupport]}
                    </span>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  ),
                )}
              />
            )}
            <CompareRow
              label="官网"
              cells={selectedTools.map((t) => (
                <a
                  key={t.id}
                  href={t.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-violet-600 hover:underline dark:text-violet-400"
                >
                  访问 <ExternalLink className="h-3 w-3" />
                </a>
              ))}
            />
          </div>

          {/* Feature Comparison */}
          {hasAnyFeatures && (
            <div className="overflow-x-auto rounded-xl border border-border">
              <div className="bg-muted/50 px-4 py-3 text-sm font-semibold">
                功能对比
              </div>
              {allFeatureNames.map((name) => (
                <CompareRow
                  key={name}
                  label={name}
                  cells={selectedTools.map((t) => {
                    const f = t.features?.find((feat) => feat.name === name);
                    if (!f)
                      return (
                        <span className="text-muted-foreground/40">-</span>
                      );
                    return f.supported ? (
                      <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                        <Check className="h-4 w-4" />
                        {f.note ?? "支持"}
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-muted-foreground/50">
                        <X className="h-4 w-4" />
                        {f.note ?? "不支持"}
                      </span>
                    );
                  })}
                />
              ))}
            </div>
          )}

          {/* Pros & Cons */}
          {(hasAnyPros || hasAnyCons) && (
            <div
              className="grid gap-4"
              style={{
                gridTemplateColumns: `repeat(${selectedTools.length}, minmax(200px, 1fr))`,
              }}
            >
              {selectedTools.map((t) => (
                <div
                  key={t.id}
                  className="rounded-xl border border-border/60 p-5"
                >
                  <div className="mb-4 flex items-center gap-2">
                    <span className="text-xl">{t.icon}</span>
                    <h3 className="font-semibold">{t.name}</h3>
                  </div>
                  {t.pros && t.pros.length > 0 && (
                    <div className="mb-4">
                      <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                        <ThumbsUp className="h-3.5 w-3.5" />
                        优点
                      </h4>
                      <ul className="space-y-1.5">
                        {t.pros.map((p) => (
                          <li
                            key={p}
                            className="flex items-start gap-1.5 text-xs text-muted-foreground"
                          >
                            <Check className="mt-0.5 h-3 w-3 shrink-0 text-emerald-500" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {t.cons && t.cons.length > 0 && (
                    <div>
                      <h4 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-red-500">
                        <ThumbsDown className="h-3.5 w-3.5" />
                        缺点
                      </h4>
                      <ul className="space-y-1.5">
                        {t.cons.map((c) => (
                          <li
                            key={c}
                            className="flex items-start gap-1.5 text-xs text-muted-foreground"
                          >
                            <X className="mt-0.5 h-3 w-3 shrink-0 text-red-400" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {!t.pros && !t.cons && (
                    <p className="text-xs text-muted-foreground/60">
                      暂无优缺点数据
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Verdict */}
          {selectedTools.length >= 2 && (
            <div className="rounded-xl border border-violet-200 bg-violet-50/50 p-6 dark:border-violet-800/50 dark:bg-violet-950/20">
              <h3 className="mb-3 font-semibold">💡 选择建议</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                {selectedTools.map((t) => (
                  <p key={t.id}>
                    <strong className="text-foreground">{t.name}</strong>
                    {" 更适合："}
                    {t.scenes
                      .slice(0, 3)
                      .map((s) => sceneLabels[s] ?? s)
                      .join("、")}
                    {"。"}
                    {t.pricing === "free"
                      ? "完全免费，适合预算有限的用户。"
                      : t.pricing === "open-source"
                        ? "开源免费，技术用户的最佳选择。"
                        : t.pricing === "freemium"
                          ? `提供免费版本${t.priceNote ? `（${t.priceNote}）` : ""}。`
                          : `付费工具${t.priceNote ? `（${t.priceNote}）` : ""}。`}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="flex h-40 items-center justify-center rounded-xl border border-dashed border-border text-muted-foreground">
          请在上方选择两个或更多工具进行对比
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
            ["chatgpt", "claude", "deepseek"],
          ].map((pair) => {
            const names = pair
              .map((s) => tools.find((t) => t.slug === s)?.name)
              .filter(Boolean);
            if (names.length < 2) return null;
            return (
              <Button
                key={pair.join("-")}
                variant="outline"
                size="sm"
                onClick={() => setSlugs(pair)}
                className="text-xs"
              >
                {names.join(" vs ")}
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
