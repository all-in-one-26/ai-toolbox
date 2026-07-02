import { streamText } from "ai";
import { openai } from "@ai-sdk/openai";
import { tools as allTools } from "@/data/tools";

const toolContext = allTools
  .map(
    (t) =>
      `- ${t.name}: ${t.tagline}. 分类:${t.categories.join(",")}. 场景:${t.scenes.join(",")}. 定价:${t.pricing}(${t.priceNote ?? ""})`,
  )
  .join("\n");

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o-mini"),
    system: `你是 AI-Toolbox 的AI工具推荐顾问。用户会描述他们的需求，你帮他们从以下工具库中推荐最合适的1-3个工具，并简要说明推荐理由。

工具库：
${toolContext}

回复规则：
1. 先理解用户需求场景
2. 推荐1-3个最匹配的工具
3. 每个推荐说明：为什么适合、优缺点、价格
4. 如果有替代方案也简要提及
5. 回复简洁，用中文`,
    messages,
  });

  return result.toTextStreamResponse();
}
