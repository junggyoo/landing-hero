import { Button } from "@/components/ui/button";

export const CtaSection = () => {
	return (
		<section className="container py-8 md:py-12 lg:py-24">
			<div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
				<h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
					지금 바로 시작하세요
				</h2>
				<p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
					더 이상 히어로 섹션 제작에 시간을 낭비하지 마세요. <br />
					LandingHero와 함께 비즈니스 성장에만 집중하세요.
				</p>
				<div className="flex flex-col w-full max-w-sm gap-2 mt-4 sm:flex-row justify-center">
					<Button size="lg" className="w-full sm:w-auto">
						무료로 시작하기
					</Button>
				</div>
			</div>
		</section>
	);
};
