export type ToolRef = {
  name: string;
  url: string;
};

export type ScenarioStep = {
  title: string;
  description: string;
  tool: ToolRef;
  prompt?: string;
  tips: string[];
  alternatives: ToolRef[];
};

export type Scenario = {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  timeEstimate: string;
  tools: ToolRef[];
  steps: ScenarioStep[];
  tags: string[];
};

export type ScenarioCategory = {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
};
