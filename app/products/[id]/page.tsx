import Layout from "@/components/layout/Layout";
import { ProductActions } from "@/components/products/ProductActions";
import Image from "next/image";
import {
	IconStar,
	IconTruckDelivery,
	IconArrowBackUp,
	IconShieldCheck,
} from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// Mock data fetching function
async function getProduct(id: string) {
	const products = [
		{
			id: 1,
			name: "Classic White Tee",
			price: "$29.99",
			description:
				"Our Classic White Tee is the foundation of any modern wardrobe. Crafted from 100% premium long-staple cotton, it offers unparalleled softness and durability. Featuring a relaxed yet tailored fit, this tee is perfect for layering or wearing on its own.",
			image: "https://placehold.co/800x1000/png?text=Classic+White+Tee",
			category: "Men",
			rating: 4.8,
			reviews: 124,
			details: [
				"100% Premium Cotton",
				"Pre-shrunk for a perfect fit",
				"Reinforced neck seam",
				"Ethically sourced materials",
			],
		},
		{
			id: 2,
			name: "Denim Jacket",
			price: "$79.99",
			description:
				"The Vintage Style Denim Jacket is a timeless classic that only gets better with age. Made from heavy-weight raw denim with authentic metal hardware, it features a structured silhouette that complements any outfit.",
			image: "https://placehold.co/800x1000/png?text=Denim+Jacket",
			category: "Unisex",
			rating: 4.9,
			reviews: 86,
			details: [
				"14oz Heavy-weight Denim",
				"Classic trucker silhouette",
				"Adjustable waist tabs",
				"Dual chest pockets",
			],
		},
		{
			id: 3,
			name: "Summer Dress",
			price: "$49.99",
			description:
				"Light, airy, and effortlessly chic. Our Summer Dress is designed for those sun-drenched days and warm evenings. Made from a breathable linen blend, it features a flattering A-line silhouette and delicate button details.",
			image: "https://placehold.co/800x1000/png?text=Summer+Dress",
			category: "Women",
			rating: 4.7,
			reviews: 215,
			details: [
				"Linen-Viscose Blend",
				"Adjustable spaghetti straps",
				"Hidden side zipper",
				"Lined for opacity",
			],
		},
		{
			id: 4,
			name: "Slim Fit Jeans",
			price: "$59.99",
			description:
				"The perfect everyday jean. Our Slim Fit Jeans combine the authentic look of denim with a touch of stretch for all-day comfort. Engineered for a modern fit that's slim through the leg but never restrictive.",
			image: "https://placehold.co/800x1000/png?text=Slim+Fit+Jeans",
			category: "Men",
			rating: 4.6,
			reviews: 153,
			details: [
				"Stretch Denim (98% Cotton, 2% Elastane)",
				"Slim-tapered cut",
				"Signature 5-pocket styling",
				"Hand-finished whiskering",
			],
		},
	];

	return products.find((p) => p.id === parseInt(id)) || products[0];
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const product = await getProduct(id);
	return {
		title: `${product.name} | Fashion Oasis`,
		description: product.description,
	};
}

export default async function ProductDetailPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const product = await getProduct(id);

	return (
		<Layout>
			<div className="container mx-auto px-4 py-8 md:py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
					{/* Product Image */}
					<div className="aspect-4/5 relative rounded-3xl overflow-hidden bg-muted shadow-xl">
						<Image
							src={product.image}
							alt={product.name}
							fill
							className="object-cover"
							priority
						/>
					</div>

					{/* Product Details */}
					<div className="flex flex-col">
						<div className="mb-6">
							<Badge variant="outline" className="mb-4">
								{product.category}
							</Badge>
							<h1 className="text-4xl font-bold tracking-tight mb-2">
								{product.name}
							</h1>
							<div className="flex items-center gap-4">
								<span className="text-3xl font-semibold text-primary">
									{product.price}
								</span>
								<div className="flex items-center text-yellow-500">
									<IconStar className="h-5 w-5 fill-current" />
									<span className="ml-1 text-sm font-medium text-foreground">
										{product.rating}
									</span>
									<span className="ml-1 text-sm text-muted-foreground">
										({product.reviews} reviews)
									</span>
								</div>
							</div>
						</div>

						<Separator className="my-6" />

						<div className="space-y-6 mb-8">
							<p className="text-muted-foreground leading-relaxed text-lg">
								{product.description}
							</p>

							<div className="space-y-4">
								<h3 className="font-semibold text-lg">Key Features</h3>
								<ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
									{product.details.map((detail, i) => (
										<li
											key={i}
											className="flex items-center text-sm text-muted-foreground"
										>
											<div className="h-1.5 w-1.5 rounded-full bg-primary mr-3" />
											{detail}
										</li>
									))}
								</ul>
							</div>
						</div>

						<ProductActions product={product} />

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 mt-auto border-t">
							<div className="flex flex-col items-center text-center space-y-2">
								<IconTruckDelivery className="h-6 w-6 text-primary" />
								<span className="text-xs font-medium">Free Shipping</span>
							</div>
							<div className="flex flex-col items-center text-center space-y-2">
								<IconArrowBackUp className="h-6 w-6 text-primary" />
								<span className="text-xs font-medium">30 Day Returns</span>
							</div>
							<div className="flex flex-col items-center text-center space-y-2">
								<IconShieldCheck className="h-6 w-6 text-primary" />
								<span className="text-xs font-medium">Secure Checkout</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
}
