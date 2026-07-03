"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function SubmitToolPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    toolName: "",
    toolUrl: "",
    description: "",
    submitterEmail: "",
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`工具提交: ${form.toolName}`);
    const body = encodeURIComponent(
      `工具名称: ${form.toolName}\n网址: ${form.toolUrl}\n简介: ${form.description}\n提交者邮箱: ${form.submitterEmail}`,
    );
    window.open(
      `mailto:jack.vet1999@gmail.com?subject=${subject}&body=${body}`,
      "_blank",
    );
    setSubmitted(true);
  }

  if (submitted) {
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
              setSubmitted(false);
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

        <Button type="submit" className="w-full gap-2">
          <Send className="h-4 w-4" />
          提交推荐
        </Button>
      </form>
    </div>
  );
}
