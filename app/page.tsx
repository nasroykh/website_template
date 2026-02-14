import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/sections/HeroSection";
import { CategoriesSection } from "@/components/sections/CategoriesSection";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";

export default function Home() {
	return (
		<Layout>
			<div className="min-h-screen flex flex-col">
				<HeroSection />
				<CategoriesSection />
				<FeaturedProductsSection />
			</div>
		</Layout>
	);
}
