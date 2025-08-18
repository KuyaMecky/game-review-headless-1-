import { NextResponse } from "next/server";

const AFFILIATE_URL = "https://www.fairplay.ph/?inviteCode=b59beb16&redirect=register";

export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.redirect(AFFILIATE_URL);
}
