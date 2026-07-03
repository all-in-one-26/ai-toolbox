import Link from "next/link";
import { FileQuestion } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <FileQuestion className="h-16 w-16 text-muted-foreground/40" />
      <h1 className="text-3xl font-bold">404</h1>
      <p className="max-w-md text-muted-foreground">
        你访问的页面不存在，可能已被移动或删除。
      </p>
      <div className="mt-2 flex gap-3">
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          返回首页
        </Link>
        <Link href="/tools" className={buttonVariants()}>
          浏览工具库
        </Link>
      </div>
    </div>
  );
}
