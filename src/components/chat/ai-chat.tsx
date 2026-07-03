"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { TextStreamChatTransport } from "ai";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils";

function getMessageText(message: {
  parts?: Array<{ type: string; text?: string }>;
}): string {
  if (!message.parts) return "";
  return message.parts
    .filter((p) => p.type === "text")
    .map((p) => p.text ?? "")
    .join("");
}

export function AiChat({ initialMessage }: { initialMessage?: string }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { messages, sendMessage, status } = useChat({
    transport: new TextStreamChatTransport({ api: "/api/chat" }),
  });

  const isLoading = status === "streaming" || status === "submitted";

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    function onAiChatOpen(e: Event) {
      const detail = (e as CustomEvent).detail;
      if (detail?.question) {
        setInput(detail.question);
      }
      setOpen(true);
    }
    window.addEventListener("ai-chat-open", onAiChatOpen);
    return () => window.removeEventListener("ai-chat-open", onAiChatOpen);
  }, []);

  function handleOpen(prefill?: string) {
    setOpen(true);
    if (prefill) {
      setInput(prefill);
    }
  }

  function handleSend(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    setInput("");
    sendMessage({ text });
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => handleOpen(initialMessage)}
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-lg shadow-violet-500/30 transition-transform hover:scale-105 hover:bg-violet-700 active:scale-95"
          aria-label="AI 顾问"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 flex h-[500px] w-[380px] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl shadow-black/10">
          <div className="flex items-center justify-between border-b border-border/60 bg-violet-600 px-4 py-3 text-white">
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">AI 工具顾问</span>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded-md p-1 hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <Sparkles className="mb-3 h-8 w-8 text-violet-400" />
                <p className="text-sm font-medium">你好！我是 AI 工具顾问</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  描述你的需求，我帮你推荐最合适的 AI 工具
                </p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {[
                    "我想做短视频，用什么工具？",
                    "写代码用哪个 AI 最好？",
                    "免费的 AI 绘画工具有哪些？",
                  ].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => {
                        setInput(q);
                        inputRef.current?.focus();
                      }}
                      className="rounded-full border border-border/60 bg-muted/50 px-3 py-1.5 text-[11px] text-muted-foreground transition-colors hover:bg-muted"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m) => {
              const text = getMessageText(m);
              if (!text) return null;
              return (
                <div
                  key={m.id}
                  className={cn(
                    "flex",
                    m.role === "user" ? "justify-end" : "justify-start",
                  )}
                >
                  <div
                    className={cn(
                      "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                      m.role === "user"
                        ? "bg-violet-600 text-white"
                        : "bg-muted text-foreground",
                    )}
                  >
                    {m.role === "assistant" ? (
                      <div className="prose prose-sm dark:prose-invert max-w-none prose-p:my-1 prose-ul:my-1 prose-ol:my-1 prose-li:my-0.5 prose-headings:my-2 prose-a:text-violet-600 dark:prose-a:text-violet-400">
                        <Markdown>{text}</Markdown>
                      </div>
                    ) : (
                      <div className="whitespace-pre-wrap">{text}</div>
                    )}
                  </div>
                </div>
              );
            })}
            {isLoading &&
              messages.length > 0 &&
              messages[messages.length - 1]?.role === "user" && (
                <div className="flex justify-start">
                  <div className="rounded-2xl bg-muted px-3.5 py-2.5">
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  </div>
                </div>
              )}
          </div>

          <form
            onSubmit={handleSend}
            className="flex items-center gap-2 border-t border-border/60 px-3 py-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="描述你的需求..."
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white transition-colors hover:bg-violet-700 disabled:opacity-40"
            >
              <Send className="h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
