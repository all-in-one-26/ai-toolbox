import Link from "next/link";
import { Wrench } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold tracking-tight"
        >
          <Wrench className="h-5 w-5 text-violet-500" />
          <span>
            AI-<span className="text-violet-500">Toolbox</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/tools"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            工具库
          </Link>
          <Link
            href="/compare"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            PK对比
          </Link>
          <Link
            href="/workflows"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            工作流
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/auth/login"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            登录
          </Link>
          <Link href="/auth/signup" className={buttonVariants({ size: "sm" })}>
            免费使用
          </Link>
        </div>
      </div>
    </header>
  );
}
