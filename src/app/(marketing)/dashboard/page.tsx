"use client";

import { Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { ToolCard } from "@/components/tools/tool-card";
import { useFavorites } from "@/hooks/use-favorites";
import { tools } from "@/data/tools";

export default function DashboardPage() {
  const { favorites } = useFavorites();

  const favoriteTools = tools.filter((t) => favorites.includes(t.slug));

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">我的工具箱</h1>
        <p className="mt-2 text-muted-foreground">
          收藏的工具都在这里，随时查看和管理。
        </p>
      </div>

      {favoriteTools.length > 0 ? (
        <>
          <div className="mb-6 flex items-center gap-2 text-sm text-muted-foreground">
            <Heart className="h-4 w-4 text-red-400" />
            <span>已收藏 {favoriteTools.length} 个工具</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {favoriteTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border py-20 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-muted">
            <Heart className="h-7 w-7 text-muted-foreground" />
          </div>
          <h2 className="text-lg font-semibold">还没有收藏任何工具</h2>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            浏览工具库，点击 ❤️ 收藏你感兴趣的 AI 工具，它们会出现在这里。
          </p>
          <Link
            href="/tools"
            className={`mt-6 ${buttonVariants({ variant: "outline" })}`}
          >
            去逛逛工具库
            <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
