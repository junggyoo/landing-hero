import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export const Pricing = () => {
	return (
		<section id="pricing" className="container py-8 md:py-12 lg:py-24">
			<div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
				<h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
					간단하고 투명한 요금제
				</h2>
				<p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
					프로젝트 규모에 맞는 최적의 플랜을 선택하세요.
				</p>
			</div>
			<div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px] lg:grid-cols-2 mt-8">
				<div className="grid gap-6">
					<h3 className="text-xl font-bold sm:text-2xl">LandingHero Free</h3>
					<ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
						<li className="flex items-center">
							<Check className="mr-2 h-4 w-4" /> 기본 프롬프트 생성
						</li>
						<li className="flex items-center">
							<Check className="mr-2 h-4 w-4" /> 코드 복사 기능
						</li>
						<li className="flex items-center">
							<Check className="mr-2 h-4 w-4" /> 커뮤니티 지원
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-4 text-center">
					<div>
						<h4 className="text-7xl font-bold">Free</h4>
						<p className="text-sm font-medium text-muted-foreground">
							영구 무료
						</p>
					</div>
					<Button size="lg">무료로 시작하기</Button>
				</div>
			</div>
			<div className="grid w-full items-start gap-10 rounded-lg border p-10 md:grid-cols-[1fr_200px] lg:grid-cols-2 mt-8 bg-muted/50">
				<div className="grid gap-6">
					<h3 className="text-xl font-bold sm:text-2xl">LandingHero Pro</h3>
					<ul className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
						<li className="flex items-center">
							<Check className="mr-2 h-4 w-4 text-primary" /> AI 프롬프트 자동
							보완
						</li>
						<li className="flex items-center">
							<Check className="mr-2 h-4 w-4 text-primary" /> 반응형 미리보기
							무제한
						</li>
						<li className="flex items-center">
							<Check className="mr-2 h-4 w-4 text-primary" /> 고급 애니메이션
							템플릿
						</li>
						<li className="flex items-center">
							<Check className="mr-2 h-4 w-4 text-primary" /> 우선 고객 지원
						</li>
					</ul>
				</div>
				<div className="flex flex-col gap-4 text-center">
					<div>
						<h4 className="text-7xl font-bold">$29</h4>
						<p className="text-sm font-medium text-muted-foreground">
							월 (연간 결제 시)
						</p>
					</div>
					<Button size="lg" variant="default">
						Pro 구독하기
					</Button>
				</div>
			</div>
		</section>
	);
};
