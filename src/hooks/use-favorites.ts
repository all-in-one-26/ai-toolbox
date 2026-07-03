"use client";

import { useCallback, useEffect, useRef, useSyncExternalStore } from "react";
import { createClient } from "@/lib/supabase/client";

const STORAGE_KEY = "ai-toolbox-favorites";
const EMPTY: string[] = [];

let listeners: Array<() => void> = [];
let cachedValue: string[] = EMPTY;
let cachedRaw: string | null = null;

function emitChange() {
  cachedRaw = null;
  for (const listener of listeners) {
    listener();
  }
}

function getSnapshot(): string[] {
  if (typeof window === "undefined") return EMPTY;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === cachedRaw) return cachedValue;
    cachedRaw = raw;
    cachedValue = raw ? JSON.parse(raw) : EMPTY;
    return cachedValue;
  } catch {
    return EMPTY;
  }
}

function getServerSnapshot(): string[] {
  return EMPTY;
}

function subscribe(listener: () => void) {
  listeners = [...listeners, listener];
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function writeLocal(next: string[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  emitChange();
}

export function useFavorites() {
  const favorites = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const syncedRef = useRef(false);

  useEffect(() => {
    if (syncedRef.current) return;
    const supabase = createClient();

    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user || syncedRef.current) return;
      syncedRef.current = true;

      const localFavs = getSnapshot();

      fetch("/api/favorites")
        .then((r) => r.json())
        .then(({ favorites: remote }: { favorites: string[] }) => {
          const merged = Array.from(new Set([...remote, ...localFavs]));

          const toAdd = localFavs.filter((s) => !remote.includes(s));
          for (const slug of toAdd) {
            fetch("/api/favorites", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ slug }),
            });
          }

          writeLocal(merged);
        });
    });
  }, []);

  const toggle = useCallback((toolSlug: string) => {
    const current = getSnapshot();
    const adding = !current.includes(toolSlug);
    const next = adding
      ? [...current, toolSlug]
      : current.filter((s) => s !== toolSlug);

    writeLocal(next);

    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return;
      if (adding) {
        fetch("/api/favorites", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug: toolSlug }),
        });
      } else {
        fetch("/api/favorites", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug: toolSlug }),
        });
      }
    });
  }, []);

  const isFavorite = useCallback(
    (toolSlug: string) => favorites.includes(toolSlug),
    [favorites],
  );

  return { favorites, toggle, isFavorite, count: favorites.length };
}
