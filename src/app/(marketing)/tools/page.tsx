import { ToolCard } from "@/components/tools/tool-card";
import { SearchBar } from "@/components/tools/search-bar";
import {
  tools,
  categories,
  scenes,
  getToolsByCategory,
  getToolsByScene,
  searchTools,
} from "@/data/tools";
import Link from "next/link";

export default async function ToolsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string; scene?: string }>;
}) {
  const params = await searchParams;
  const { q, category, scene } = params;

  let filtered = tools;
  let title = "全部工具";
  let subtitle = `共收录 ${tools.length} 个AI工具`;

  if (q) {
    filtered = searchTools(q);
    title = `搜索: ${q}`;
    subtitle = `找到 ${filtered.length} 个相关工具`;
  } else if (category) {
    filtered = getToolsByCategory(category);
    const cat = categories.find((c) => c.id === category);
    title = cat ? `${cat.icon} ${cat.name}` : "分类";
    subtitle = `${filtered.length} 个工具`;
  } else if (scene) {
    filtered = getToolsByScene(scene);
    const s = scenes.find((sc) => sc.id === scene);
    title = s ? `${s.icon} ${s.name}` : "场景";
    subtitle = s ? s.description : `${filtered.length} 个工具`;
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="mt-2 text-muted-foreground">{subtitle}</p>
        <div className="mt-6 flex justify-center">
          <SearchBar />
        </div>
      </div>

      {/* Filter chips */}
      <div className="mb-8 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            分类：
          </span>
          <Link
            href="/tools"
            className={`rounded-full px-3 py-1 text-xs transition-colors ${
              !category && !scene
                ? "bg-violet-600 text-white"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            全部
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/tools?category=${cat.id}`}
              className={`rounded-full px-3 py-1 text-xs transition-colors ${
                category === cat.id
                  ? "bg-violet-600 text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-medium text-muted-foreground">
            场景：
          </span>
          {scenes.map((s) => (
            <Link
              key={s.id}
              href={`/tools?scene=${s.id}`}
              className={`rounded-full px-3 py-1 text-xs transition-colors ${
                scene === s.id
                  ? "bg-violet-600 text-white"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {s.icon} {s.name}
            </Link>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="flex h-40 items-center justify-center text-muted-foreground">
          没有找到匹配的工具，试试其他关键词
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
