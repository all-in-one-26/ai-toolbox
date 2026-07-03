"use client";

import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SubmitToolPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [form, setForm] = useState({
    toolName: "",
    toolUrl: "",
    description: "",
    submitterEmail: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/submit-tool", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "提交失败，请稍后重试");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("网络错误，请检查网络后重试");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <CheckCircle className="mx-auto h-12 w-12 text-emerald-500" />
          <h1 className="mt-4 text-2xl font-bold">感谢提交！</h1>
          <p className="mt-2 text-muted-foreground">
            我们会尽快审核你推荐的工具，审核通过后会在站内上线。
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => {
              setStatus("idle");
              setForm({
                toolName: "",
                toolUrl: "",
                description: "",
                submitterEmail: "",
              });
            }}
          >
            继续提交
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-16">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight">提交 AI 工具</h1>
        <p className="mt-2 text-muted-foreground">
          发现了好用的 AI 工具？推荐给我们，让更多人受益。
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-10 space-y-5">
        <div className="space-y-2">
          <label htmlFor="toolName" className="text-sm font-medium">
            工具名称 *
          </label>
          <Input
            id="toolName"
            value={form.toolName}
            onChange={(e) => setForm({ ...form, toolName: e.target.value })}
            placeholder="例如：Claude"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="toolUrl" className="text-sm font-medium">
            工具网址 *
          </label>
          <Input
            id="toolUrl"
            type="url"
            value={form.toolUrl}
            onChange={(e) => setForm({ ...form, toolUrl: e.target.value })}
            placeholder="https://..."
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium">
            简要介绍
          </label>
          <textarea
            id="description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="这个工具能做什么？你觉得它哪里好用？"
            rows={3}
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            你的邮箱（选填）
          </label>
          <Input
            id="email"
            type="email"
            value={form.submitterEmail}
            onChange={(e) =>
              setForm({ ...form, submitterEmail: e.target.value })
            }
            placeholder="方便我们通知你审核结果"
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-500">{errorMsg}</p>
        )}

        <Button type="submit" className="w-full gap-2" disabled={status === "loading"}>
          {status === "loading" ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {status === "loading" ? "提交中..." : "提交推荐"}
        </Button>
      </form>
    </div>
  );
}
