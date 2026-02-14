import Layout from "@/components/layout/Layout";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";

export default function ProductsPage() {
	return (
		<Layout>
			<div className="min-h-screen">
				<div className="container mx-auto px-4 py-12">
					<h1 className="text-4xl font-bold tracking-tight mb-8">
						Our Collection
					</h1>
					<p className="text-muted-foreground text-lg mb-12 max-w-2xl">
						Explore our full range of premium fashion pieces, from daily
						essentials to statement luxury wear.
					</p>
				</div>
				<FeaturedProductsSection />
			</div>
		</Layout>
	);
}
