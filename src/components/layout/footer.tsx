import Link from "next/link";
import { Wrench } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 md:flex-row md:justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Wrench className="h-4 w-4 text-violet-500" />
          <span>AI-Toolbox — 发现最好用的AI工具</span>
        </div>
        <nav className="flex gap-6 text-sm text-muted-foreground">
          <Link href="/submit" className="hover:text-foreground">
            提交工具
          </Link>
          <Link href="/about" className="hover:text-foreground">
            关于我们
          </Link>
          <Link
            href="mailto:jack.vet1999@gmail.com"
            className="hover:text-foreground"
          >
            联系
          </Link>
        </nav>
      </div>
    </footer>
  );
}
