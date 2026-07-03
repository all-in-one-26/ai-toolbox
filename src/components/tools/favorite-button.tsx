"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/hooks/use-favorites";
import { cn } from "@/lib/utils";

export function FavoriteButton({
  toolSlug,
  size = "sm",
}: {
  toolSlug: string;
  size?: "sm" | "md";
}) {
  const { toggle, isFavorite } = useFavorites();
  const active = isFavorite(toolSlug);

  const sizeClasses = size === "md" ? "h-9 w-9" : "h-7 w-7";
  const iconSize = size === "md" ? "h-4.5 w-4.5" : "h-3.5 w-3.5";

  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        toggle(toolSlug);
      }}
      className={cn(
        "inline-flex items-center justify-center rounded-full transition-all",
        sizeClasses,
        active
          ? "bg-red-50 text-red-500 hover:bg-red-100 dark:bg-red-950/30 dark:text-red-400 dark:hover:bg-red-950/50"
          : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-red-400",
      )}
      aria-label={active ? "取消收藏" : "收藏"}
    >
      <Heart className={cn(iconSize, active && "fill-current")} />
    </button>
  );
}
