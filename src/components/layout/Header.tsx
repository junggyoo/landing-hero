import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 items-center justify-between">
				<div className="flex items-center gap-2 font-bold text-xl">
					<Link href="/">LandingHero</Link>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex items-center gap-6 text-sm font-medium">
					<Link
						href="#pricing"
						className="transition-colors hover:text-foreground/80 text-foreground/60"
					>
						요금제
					</Link>
					<Link
						href="#"
						className="transition-colors hover:text-foreground/80 text-foreground/60"
					>
						커뮤니티
					</Link>
				</nav>

				<div className="flex items-center gap-4">
					<div className="hidden md:block">
						<Button size="sm">히어로 생성하기</Button>
					</div>
					<button className="md:hidden">
						<Menu className="h-6 w-6" />
						<span className="sr-only">Toggle menu</span>
					</button>
				</div>
			</div>
		</header>
	);
};
