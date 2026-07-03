export type {
  Scenario,
  ScenarioCategory,
  ScenarioStep,
  ToolRef,
} from "./types";
export { scenarioCategories } from "./categories";

import { selfMediaScenarios } from "./self-media";
import { socialGrowthScenarios } from "./social-growth";
import { seoScenarios } from "./seo";
import { affiliateScenarios } from "./affiliate";
import { ecommerceScenarios } from "./ecommerce";
import { designScenarios } from "./design";
import { productScenarios } from "./product";
import { productivityScenarios } from "./productivity";

import type { Scenario } from "./types";

export const allScenarios: Scenario[] = [
  ...selfMediaScenarios,
  ...socialGrowthScenarios,
  ...seoScenarios,
  ...affiliateScenarios,
  ...ecommerceScenarios,
  ...designScenarios,
  ...productScenarios,
  ...productivityScenarios,
];

export function getScenarioById(id: string): Scenario | undefined {
  return allScenarios.find((s) => s.id === id);
}

export function getScenariosByCategory(categoryId: string): Scenario[] {
  return allScenarios.filter((s) => s.categoryId === categoryId);
}
