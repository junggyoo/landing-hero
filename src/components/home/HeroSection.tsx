import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SIGNUP_PATH } from "@/constants/auth";

export const HeroSection = () => {
	return (
		<section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
			<div className="flex max-w-[980px] flex-col items-start gap-2">
				<h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
					단 몇 분 만에 완성하는 <br className="hidden sm:inline" />
					AI 히어로 섹션
				</h1>
				<p className="max-w-[700px] text-lg text-muted-foreground">
					스타트업 마케터와 1인 창업자를 위한 최고의 솔루션. <br />
					복잡한 코딩 없이 프롬프트 한 줄로 완벽한 히어로 섹션을 만드세요.
				</p>
			</div>
			<div className="flex w-full max-w-sm items-center space-x-2">
				<Input type="email" placeholder="이메일을 입력하세요" />
				<Button type="submit" asChild>
					<Link href={SIGNUP_PATH}>지금 바로 시작하기</Link>
				</Button>
			</div>
		</section>
	);
};
