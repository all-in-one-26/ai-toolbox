"use client";

import { useState } from "react";
import { Mail, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-emerald-200 bg-emerald-50/50 px-6 py-8 text-center dark:border-emerald-800/40 dark:bg-emerald-950/20">
        <CheckCircle className="h-8 w-8 text-emerald-500" />
        <p className="font-semibold">订阅成功！</p>
        <p className="text-sm text-muted-foreground">
          每周 AI 新工具速报将发送到 {email}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-violet-50/80 to-blue-50/80 px-6 py-8 text-center dark:from-violet-950/20 dark:to-blue-950/20">
      <Mail className="mx-auto mb-3 h-8 w-8 text-violet-500" />
      <h3 className="text-lg font-bold">每周 AI 工具速报</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        精选本周最值得关注的新 AI 工具和使用技巧，不错过任何好工具。
      </p>
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-5 flex max-w-sm gap-2"
      >
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="h-10"
        />
        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-10 shrink-0 bg-violet-600 hover:bg-violet-700"
        >
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            "订阅"
          )}
        </Button>
      </form>
      <p className="mt-3 text-[11px] text-muted-foreground/60">
        每周一封，随时退订。我们尊重你的隐私。
      </p>
    </div>
  );
}
