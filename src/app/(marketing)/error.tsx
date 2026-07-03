"use client";

import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <AlertCircle className="h-12 w-12 text-red-400" />
      <h2 className="text-xl font-bold">出了点问题</h2>
      <p className="max-w-md text-sm text-muted-foreground">
        页面加载时遇到了错误，请稍后重试。
      </p>
      <Button variant="outline" onClick={reset}>
        重试
      </Button>
    </div>
  );
}
