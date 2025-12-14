import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";

export async function POST(request: Request) {
	const requestUrl = new URL(request.url);
	const supabase = await createSupabaseServerClient();
	await supabase.auth.signOut();

	return NextResponse.redirect(`${requestUrl.origin}/login`, {
		status: 301,
	});
}
