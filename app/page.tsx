import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function Home() {
	const featuredProducts = [
		{
			id: 1,
			name: "Classic White Tee",
			price: "$29.99",
			description: "Premium cotton t-shirt",
		},
		{
			id: 2,
			name: "Denim Jacket",
			price: "$79.99",
			description: "Vintage style denim",
		},
		{
			id: 3,
			name: "Summer Dress",
			price: "$49.99",
			description: "Light and comfortable",
		},
		{
			id: 4,
			name: "Slim Fit Jeans",
			price: "$59.99",
			description: "Perfect fit, premium quality",
		},
	];

	const categories = [
		{ name: "Men", href: "/men" },
		{ name: "Women", href: "/women" },
		{ name: "Accessories", href: "/accessories" },
		{ name: "Sale", href: "/sale" },
	];

	return (
		<Layout>
			<div className="min-h-screen">
				{/* Hero Section */}
				<section className="bg-muted py-20 px-4">
					<div className="container mx-auto max-w-4xl text-center">
						<h1 className="text-4xl font-bold tracking-tight mb-4 md:text-5xl">
							New Collection
						</h1>
						<p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
							Discover our latest fashion pieces designed for modern living
						</p>
						<Button size="lg">Shop Now</Button>
					</div>
				</section>

				{/* Categories Section */}
				<section className="py-12 px-4">
					<div className="container mx-auto max-w-6xl">
						<h2 className="text-2xl font-semibold mb-6 text-center">
							Shop by Category
						</h2>
						<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
							{categories.map((category) => (
								<Card
									key={category.name}
									className="cursor-pointer hover:shadow-md transition-shadow"
								>
									<CardContent className="pt-6">
										<div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
											<span className="text-muted-foreground text-sm">
												{category.name}
											</span>
										</div>
										<h3 className="font-medium text-center">{category.name}</h3>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</section>

				{/* Featured Products Section */}
				<section className="py-12 px-4 bg-muted/30">
					<div className="container mx-auto max-w-6xl">
						<h2 className="text-2xl font-semibold mb-6 text-center">
							Featured Products
						</h2>
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
							{featuredProducts.map((product) => (
								<Card key={product.id} className="overflow-hidden">
									<div className="aspect-square bg-muted" />
									<CardHeader>
										<CardTitle className="text-lg">{product.name}</CardTitle>
										<CardDescription>{product.description}</CardDescription>
									</CardHeader>
									<CardFooter className="flex justify-between items-center">
										<span className="font-semibold">{product.price}</span>
										<Button size="sm">Add to Cart</Button>
									</CardFooter>
								</Card>
							))}
						</div>
					</div>
				</section>
			</div>
		</Layout>
	);
}
