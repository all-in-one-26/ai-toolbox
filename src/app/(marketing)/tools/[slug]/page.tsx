import { notFound } from "next/navigation";
import Link from "next/link";
import { Star, ExternalLink, ArrowLeft, GitCompare } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ToolCard } from "@/components/tools/tool-card";
import { getToolBySlug, tools, categories, scenes } from "@/data/tools";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return { title: "未找到" };
  return {
    title: `${tool.name} — ${tool.tagline} | AIRadar`,
    description: tool.description,
  };
}

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) notFound();

  const related = tools
    .filter(
      (t) =>
        t.id !== tool.id &&
        t.categories.some((c) => tool.categories.includes(c)),
    )
    .slice(0, 3);

  const toolCategories = categories.filter((c) =>
    tool.categories.includes(c.id),
  );
  const toolScenes = scenes.filter((s) => tool.scenes.includes(s.id));

  const pricingLabels: Record<string, string> = {
    free: "免费",
    freemium: "免费增值",
    paid: "付费",
    "open-source": "开源",
  };

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <Link
        href="/tools"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        返回工具库
      </Link>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <span className="text-5xl">{tool.icon}</span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-3xl font-bold">{tool.name}</h1>
              {tool.isNew && (
                <Badge className="bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                  NEW
                </Badge>
              )}
            </div>
            <p className="mt-1 text-lg text-muted-foreground">{tool.tagline}</p>
            <div className="mt-2 flex items-center gap-3 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                <span className="font-medium">{tool.rating}</span>
                <span className="text-muted-foreground">
                  ({tool.reviews} 评价)
                </span>
              </div>
              <Badge variant="secondary">{pricingLabels[tool.pricing]}</Badge>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Link
            href={`/compare?a=${tool.slug}`}
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            <GitCompare className="mr-1.5 h-3.5 w-3.5" />
            对比
          </Link>
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants({ size: "sm" })}
          >
            访问官网
            <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <Separator className="my-8" />

      {/* Description */}
      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <h2 className="mb-3 text-lg font-semibold">详细介绍</h2>
          <p className="text-muted-foreground leading-relaxed">
            {tool.description}
          </p>

          {tool.priceNote && (
            <div className="mt-6">
              <h3 className="mb-2 text-sm font-semibold">定价</h3>
              <p className="text-sm text-muted-foreground">{tool.priceNote}</p>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="mb-2 text-sm font-semibold">分类</h3>
            <div className="flex flex-wrap gap-1.5">
              {toolCategories.map((c) => (
                <Link
                  key={c.id}
                  href={`/tools?category=${c.id}`}
                  className="rounded-full bg-muted px-3 py-1 text-xs hover:bg-muted/80"
                >
                  {c.icon} {c.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold">适用场景</h3>
            <div className="flex flex-wrap gap-1.5">
              {toolScenes.map((s) => (
                <Link
                  key={s.id}
                  href={`/tools?scene=${s.id}`}
                  className="rounded-full bg-muted px-3 py-1 text-xs hover:bg-muted/80"
                >
                  {s.icon} {s.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold">标签</h3>
            <div className="flex flex-wrap gap-1.5">
              {tool.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <>
          <Separator className="my-10" />
          <div>
            <h2 className="mb-4 text-lg font-semibold">相关工具</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((t) => (
                <ToolCard key={t.id} tool={t} />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
