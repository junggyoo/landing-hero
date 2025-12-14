import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Testimonials = () => {
	const testimonials = [
		{
			name: "김철수",
			role: "스타트업 CEO",
			content:
				"랜딩히어로 덕분에 개발자 없이도 하루 만에 랜딩페이지를 완성했습니다. 정말 놀라운 서비스에요!",
			avatar: "KC",
		},
		{
			name: "이영희",
			role: "마케터",
			content:
				"A/B 테스트를 위한 다양한 히어로 섹션이 필요했는데, 랜딩히어로가 완벽한 해결책이었습니다.",
			avatar: "LY",
		},
		{
			name: "박지민",
			role: "프리랜서 디자이너",
			content:
				"디자인 영감을 얻고 코드로 바로 변환할 수 있어서 작업 속도가 훨씬 빨라졌습니다.",
			avatar: "PJ",
		},
	];

	return (
		<section className="container py-8 md:py-12 lg:py-24 bg-muted/50">
			<div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center">
				<h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
					사용자들의 생생한 후기
				</h2>
				<p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
					이미 많은 창업자와 마케터들이 랜딩히어로를 통해 성공적인 랜딩페이지를
					만들고 있습니다.
				</p>
			</div>
			<div className="mx-auto grid justify-center gap-8 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 mt-8">
				{testimonials.map((t, i) => (
					<Card key={i} className="flex flex-col justify-between">
						<CardHeader>
							<div className="flex items-center gap-4">
								<Avatar>
									<AvatarFallback>{t.avatar}</AvatarFallback>
								</Avatar>
								<div>
									<p className="text-sm font-medium leading-none">{t.name}</p>
									<p className="text-xs text-muted-foreground">{t.role}</p>
								</div>
							</div>
						</CardHeader>
						<CardContent>
							<p className="text-muted-foreground">"{t.content}"</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
};
