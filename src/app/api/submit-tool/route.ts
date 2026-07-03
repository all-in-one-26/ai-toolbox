import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { toolName, toolUrl, description, submitterEmail } = body;

  if (!toolName || typeof toolName !== "string" || toolName.trim().length === 0) {
    return NextResponse.json({ error: "工具名称为必填项" }, { status: 400 });
  }

  if (!toolUrl || typeof toolUrl !== "string") {
    return NextResponse.json({ error: "工具网址为必填项" }, { status: 400 });
  }

  try {
    new URL(toolUrl);
  } catch {
    return NextResponse.json({ error: "无效的网址格式" }, { status: 400 });
  }

  if (submitterEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submitterEmail)) {
    return NextResponse.json({ error: "无效的邮箱地址" }, { status: 400 });
  }

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("tool_submissions").insert({
      tool_name: toolName.trim(),
      tool_url: toolUrl.trim(),
      description: description?.trim() || null,
      submitter_email: submitterEmail?.trim() || null,
    });

    if (error) {
      return NextResponse.json({ error: "提交失败，请稍后重试" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "提交失败，请稍后重试" }, { status: 500 });
  }
}
