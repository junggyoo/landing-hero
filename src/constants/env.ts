import { z } from "zod";

const clientEnvSchema = z.object({
	NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
	NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().min(1),
	NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
});

const _clientEnv = clientEnvSchema.safeParse({
	NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
	NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	NEXT_PUBLIC_SITE_URL:
		process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
});

export type ClientEnv = z.infer<typeof clientEnvSchema>;

if (!_clientEnv.success) {
	console.error("환경 변수 검증 실패:", _clientEnv.error.flatten().fieldErrors);
	throw new Error(
		"필수 환경 변수가 누락되었습니다. Vercel 배포라면 Settings > Environment Variables에서 NEXT_PUBLIC_SUPABASE_URL와 NEXT_PUBLIC_SUPABASE_ANON_KEY를 설정해주세요."
	);
}

export const env: ClientEnv = _clientEnv.data;
