"use client";

import { useState } from "react";
import Link from "next/link";
import { Wrench, Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { buttonVariants } from "@/components/ui/button";

const navLinks = [
  { href: "/tools", label: "工具库" },
  { href: "/compare", label: "PK对比" },
  { href: "/scenarios", label: "场景推荐" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

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
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            href="/auth/login"
            className={buttonVariants({ variant: "ghost", size: "sm" })}
          >
            登录
          </Link>
          <Link
            href="/auth/signup"
            className={`hidden sm:inline-flex ${buttonVariants({ size: "sm" })}`}
          >
            免费使用
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="ml-1 inline-flex h-9 w-9 items-center justify-center rounded-md text-muted-foreground hover:bg-muted md:hidden"
            aria-label="菜单"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border/40 bg-background px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/auth/signup"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-md bg-violet-600 px-3 py-2.5 text-center text-sm font-medium text-white hover:bg-violet-700 sm:hidden"
            >
              免费使用
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
