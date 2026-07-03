import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Star,
  ExternalLink,
  ArrowLeft,
  GitCompare,
  ThumbsUp,
  ThumbsDown,
  Check,
  X,
  Globe,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ToolCard } from "@/components/tools/tool-card";
import { FavoriteButton } from "@/components/tools/favorite-button";
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
    title: `${tool.name} — ${tool.tagline} | AI-Toolbox`,
    description: tool.description,
  };
}

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

function buildJsonLd(tool: NonNullable<ReturnType<typeof getToolBySlug>>) {
  const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-toolbox.dev";
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: "AI Tool",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: tool.pricing === "free" || tool.pricing === "open-source" ? "0" : undefined,
      priceCurrency: "USD",
      description: tool.priceNote ?? undefined,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: tool.rating,
      reviewCount: tool.reviews,
      bestRating: 5,
      worstRating: 1,
    },
  };
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

  const jsonLd = buildJsonLd(tool);

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link
        href="/tools"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        返回工具库
      </Link>

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-4">
          <span className="text-5xl">{tool.icon}</span>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-bold sm:text-3xl">{tool.name}</h1>
              {tool.isNew && (
                <Badge className="bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400">
                  NEW
                </Badge>
              )}
            </div>
            <p className="mt-1 text-base text-muted-foreground sm:text-lg">{tool.tagline}</p>
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
        <div className="flex items-center gap-2">
          <FavoriteButton toolSlug={tool.slug} size="md" />
          <Link
            href={`/compare?a=${tool.slug}`}
            className={buttonVariants({ variant: "outline", size: "sm" })}
          >
            <GitCompare className="mr-1.5 h-3.5 w-3.5" />
            对比
          </Link>
          <a
            href={tool.affiliateUrl ?? tool.url}
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

          {tool.chineseSupport && (
            <div>
              <h3 className="mb-2 text-sm font-semibold">中文支持</h3>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  {{
                    native: "原生中文",
                    good: "中文良好",
                    partial: "部分中文",
                    none: "不支持中文",
                  }[tool.chineseSupport]}
                </span>
                <span
                  className={`h-2 w-2 rounded-full ${
                    {
                      native: "bg-emerald-500",
                      good: "bg-blue-500",
                      partial: "bg-amber-500",
                      none: "bg-red-500",
                    }[tool.chineseSupport]
                  }`}
                />
              </div>
            </div>
          )}

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

      {/* Pros & Cons */}
      {(tool.pros || tool.cons) && (
        <>
          <Separator className="my-8" />
          <div className="grid gap-6 md:grid-cols-2">
            {tool.pros && tool.pros.length > 0 && (
              <div>
                <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <ThumbsUp className="h-4.5 w-4.5 text-emerald-500" />
                  优点
                </h2>
                <ul className="space-y-2">
                  {tool.pros.map((pro) => (
                    <li
                      key={pro}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {tool.cons && tool.cons.length > 0 && (
              <div>
                <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
                  <ThumbsDown className="h-4.5 w-4.5 text-red-400" />
                  缺点
                </h2>
                <ul className="space-y-2">
                  {tool.cons.map((con) => (
                    <li
                      key={con}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      )}

      {/* Features */}
      {tool.features && tool.features.length > 0 && (
        <>
          <Separator className="my-8" />
          <div>
            <h2 className="mb-4 text-lg font-semibold">功能支持</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {tool.features.map((f) => (
                <div
                  key={f.name}
                  className="flex items-center gap-2 rounded-lg border border-border/60 px-3 py-2.5 text-sm"
                >
                  {f.supported ? (
                    <Check className="h-4 w-4 shrink-0 text-emerald-500" />
                  ) : (
                    <X className="h-4 w-4 shrink-0 text-muted-foreground/40" />
                  )}
                  <span
                    className={
                      f.supported ? "" : "text-muted-foreground/60"
                    }
                  >
                    {f.name}
                  </span>
                  {f.note && (
                    <span className="ml-auto text-[10px] text-muted-foreground">
                      {f.note}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Alternatives */}
      {tool.alternatives && tool.alternatives.length > 0 && (
        <>
          <Separator className="my-8" />
          <div>
            <h2 className="mb-4 text-lg font-semibold">
              觉得不合适？试试这些替代品
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {tool.alternatives
                .map((slug) => tools.find((t) => t.slug === slug))
                .filter(Boolean)
                .map((alt) => (
                  <div
                    key={alt!.id}
                    className="flex items-center justify-between rounded-xl border border-border/60 p-4"
                  >
                    <Link
                      href={`/tools/${alt!.slug}`}
                      className="flex items-center gap-3"
                    >
                      <span className="text-2xl">{alt!.icon}</span>
                      <div>
                        <h3 className="font-semibold">{alt!.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {alt!.tagline}
                        </p>
                      </div>
                    </Link>
                    <Link
                      href={`/compare?a=${tool.slug}&b=${alt!.slug}`}
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                      })}
                    >
                      <GitCompare className="mr-1 h-3 w-3" />
                      对比
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </>
      )}

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
