"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Filter } from "lucide-react";

const difficulties = [
  { value: "beginner", label: "入门" },
  { value: "intermediate", label: "进阶" },
  { value: "advanced", label: "高级" },
];

export function ScenarioFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentDifficulty = searchParams.get("difficulty") ?? "";

  function setFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/scenarios?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="mb-8 flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
        <Filter className="h-3.5 w-3.5" />
        难度：
      </div>
      <button
        type="button"
        onClick={() => setFilter("difficulty", "")}
        className={`rounded-full px-3 py-1 text-xs transition-colors ${
          !currentDifficulty
            ? "bg-violet-600 text-white"
            : "bg-muted text-muted-foreground hover:bg-muted/80"
        }`}
      >
        全部
      </button>
      {difficulties.map((d) => (
        <button
          key={d.value}
          type="button"
          onClick={() => setFilter("difficulty", d.value)}
          className={`rounded-full px-3 py-1 text-xs transition-colors ${
            currentDifficulty === d.value
              ? "bg-violet-600 text-white"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
        >
          {d.label}
        </button>
      ))}
    </div>
  );
}
