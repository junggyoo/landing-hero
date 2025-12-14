import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { FeatureGrid } from "@/components/home/FeatureGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { Pricing } from "@/components/home/Pricing";
import { CtaSection } from "@/components/home/CtaSection";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col">
			<Header />
			<main className="flex-1">
				<HeroSection />
				<FeatureGrid />
				<Testimonials />
				<Pricing />
				<CtaSection />
			</main>
			<Footer />
		</div>
	);
}
