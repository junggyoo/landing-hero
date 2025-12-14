import { Metadata } from "next";
import { PromptForm } from "@/features/generate/components/PromptForm";

export const metadata: Metadata = {
	title: "생성하기 | LandingHero",
	description: "AI 프롬프트로 랜딩페이지 히어로 섹션을 생성하세요.",
};

export default function GeneratePage() {
	return (
		<div className="container max-w-5xl mx-auto py-10 px-4 md:py-16">
			<div className="mb-10 text-center space-y-4">
				<h1 className="text-3xl md:text-4xl font-bold tracking-tight">
					어떤 랜딩페이지를 만들고 싶으신가요?
				</h1>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					AI가 여러분의 아이디어를 분석하여 최적의 디자인과 코드를
					생성해드립니다.
					<br className="hidden sm:block" />
					상상하는 모습을 구체적으로 설명할수록 더 좋은 결과물을 얻을 수
					있습니다.
				</p>
			</div>

			<PromptForm />
		</div>
	);
}
