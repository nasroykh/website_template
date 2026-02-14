"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { useSetAtom } from "jotai";
import { addToCartAtom } from "@/lib/store/cartStore";
import { toast } from "sonner";

const featuredProducts = [
	{
		id: 1,
		name: "Classic White Tee",
		price: "$29.99",
		description: "Premium cotton t-shirt",
		image: "https://placehold.co/600x600/png?text=T-Shirt",
	},
	{
		id: 2,
		name: "Denim Jacket",
		price: "$79.99",
		description: "Vintage style denim",
		image: "https://placehold.co/600x600/png?text=Jacket",
	},
	{
		id: 3,
		name: "Summer Dress",
		price: "$49.99",
		description: "Light and comfortable",
		image: "https://placehold.co/600x600/png?text=Dress",
	},
	{
		id: 4,
		name: "Slim Fit Jeans",
		price: "$59.99",
		description: "Perfect fit, premium quality",
		image: "https://placehold.co/600x600/png?text=Jeans",
	},
];

interface Product {
	id: number | string;
	name: string;
	price: string;
	description: string;
	image: string;
}

export function FeaturedProductsSection() {
	const addToCart = useSetAtom(addToCartAtom);

	const handleAddToCart = (e: React.MouseEvent, product: Product) => {
		e.preventDefault();
		addToCart({
			id: product.id,
			name: product.name,
			price: product.price,
			image: product.image,
		});
		toast.success("Added to cart", {
			description: `${product.name} has been added to your cart.`,
		});
	};

	return (
		<section className="py-16 px-4 bg-muted/30">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-3xl font-bold mb-8 text-center tracking-tight">
					Featured Products
				</h2>
				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
					{featuredProducts.map((product, index) => (
						<motion.div
							key={product.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<Link href={`/products/${product.id}`}>
								<Card className="group overflow-hidden flex flex-col h-full border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl cursor-pointer">
									<div className="aspect-square relative bg-muted overflow-hidden">
										<Image
											src={product.image}
											alt={product.name}
											fill
											className="object-cover transition-transform duration-500 group-hover:scale-105"
											sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
										/>
										<div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
									</div>
									<CardHeader>
										<CardTitle className="text-lg">{product.name}</CardTitle>
										<CardDescription>{product.description}</CardDescription>
									</CardHeader>
									<CardFooter className="mt-auto flex justify-between items-center">
										<span className="font-semibold text-lg text-primary">
											{product.price}
										</span>
										<Button
											size="sm"
											variant="secondary"
											nativeButton={false}
											className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
											render={
												<span onClick={(e) => handleAddToCart(e, product)}>
													Add to Cart
												</span>
											}
										/>
									</CardFooter>
								</Card>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
