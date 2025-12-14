import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server-client";

export async function GET(request: Request) {
	const origin = new URL(request.url).origin;
	const redirectTo = `${origin}/api/auth/callback`;
	const supabase = await createSupabaseServerClient();

	const { data, error } = await supabase.auth.signInWithOAuth({
		provider: "google",
		options: {
			redirectTo,
			queryParams: {
				access_type: "offline",
				prompt: "consent",
			},
		},
	});

	if (error) {
		return NextResponse.redirect(`${origin}/login?error=oauth_init_failed`);
	}

	if (data.url) {
		return NextResponse.redirect(data.url);
	}

	return NextResponse.redirect(`${origin}/login?error=unknown`);
}
