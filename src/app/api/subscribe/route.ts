import { NextResponse } from "next/server";
import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  const { email } = await request.json();
  const resend = new Resend(process.env.RESEND_API_KEY);
  const audienceId = process.env.RESEND_AUDIENCE_ID ?? "";

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "无效的邮箱地址" }, { status: 400 });
  }

  const results = { supabase: false, resend: false };

  // 1. Save to Supabase as backup
  try {
    const supabase = await createClient();
    await supabase
      .from("subscribers")
      .upsert(
        { email, subscribed_at: new Date().toISOString() },
        { onConflict: "email" },
      );
    results.supabase = true;
  } catch {
    // Supabase save failed — continue with Resend
  }

  // 2. Add to Resend Audience
  try {
    await resend.contacts.create({
      audienceId,
      email,
    });
    results.resend = true;
  } catch {
    // Resend failed — check if already exists
  }

  if (!results.supabase && !results.resend) {
    return NextResponse.json(
      { error: "订阅失败，请稍后重试" },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
