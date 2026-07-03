"use client";

import { useCallback, useSyncExternalStore } from "react";

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

export function useFavorites() {
  const favorites = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const toggle = useCallback((toolSlug: string) => {
    const current = getSnapshot();
    const next = current.includes(toolSlug)
      ? current.filter((s) => s !== toolSlug)
      : [...current, toolSlug];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    emitChange();
  }, []);

  const isFavorite = useCallback(
    (toolSlug: string) => favorites.includes(toolSlug),
    [favorites],
  );

  return { favorites, toggle, isFavorite, count: favorites.length };
}
