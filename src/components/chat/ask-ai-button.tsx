"use client";

import { Sparkles } from "lucide-react";

export function AskAiButton({ question }: { question: string }) {
  function handleClick() {
    const event = new CustomEvent("ai-chat-open", { detail: { question } });
    window.dispatchEvent(event);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-xl border border-violet-200 bg-violet-50/80 px-5 py-3 text-sm font-medium text-violet-700 transition-all hover:bg-violet-100 hover:shadow-md dark:border-violet-800 dark:bg-violet-950/30 dark:text-violet-300 dark:hover:bg-violet-950/50"
    >
      <Sparkles className="h-4 w-4" />
      对这个方案有疑问？问问 AI 顾问
    </button>
  );
}
