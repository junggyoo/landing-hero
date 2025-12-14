import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Eye, Copy } from "lucide-react";

export const FeatureGrid = () => {
	const features = [
		{
			title: "AI 생성",
			description:
				"간단한 프롬프트만으로 전문적인 디자인의 히어로 섹션을 생성합니다.",
			icon: Bot,
		},
		{
			title: "실시간 미리보기",
			description:
				"데스크톱, 태블릿, 모바일 환경에서의 모습을 실시간으로 확인하세요.",
			icon: Eye,
		},
		{
			title: "원클릭 코드 복사",
			description:
				"생성된 HTML/CSS 코드를 클릭 한 번으로 복사하여 바로 사용하세요.",
			icon: Copy,
		},
	];

	return (
		<section className="container py-8 md:py-12 lg:py-24">
			<div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
				{features.map((feature, index) => (
					<Card key={index} className="flex flex-col items-center text-center">
						<CardHeader>
							<div className="p-2 bg-primary/10 rounded-full">
								<feature.icon className="h-6 w-6 text-primary" />
							</div>
						</CardHeader>
						<CardContent>
							<CardTitle className="mb-2">{feature.title}</CardTitle>
							<p className="text-muted-foreground">{feature.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};
