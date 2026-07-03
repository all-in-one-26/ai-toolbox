import type { MetadataRoute } from "next";
import { tools } from "@/data/tools";
import { allScenarios } from "@/data/scenarios";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-toolbox.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "daily", priority: 1 },
    { url: `${BASE_URL}/tools`, changeFrequency: "daily", priority: 0.9 },
    { url: `${BASE_URL}/scenarios`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/compare`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.4 },
    { url: `${BASE_URL}/submit`, changeFrequency: "monthly", priority: 0.3 },
  ];

  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${BASE_URL}/tools/${tool.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const scenarioPages: MetadataRoute.Sitemap = allScenarios.map((s) => ({
    url: `${BASE_URL}/scenarios/${s.id}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...toolPages, ...scenarioPages];
}
