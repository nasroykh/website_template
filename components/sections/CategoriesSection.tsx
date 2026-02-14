"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";

const categories = [
	{
		name: "Men",
		href: "/men",
		image: "https://placehold.co/400x400/png?text=Men",
	},
	{
		name: "Women",
		href: "/women",
		image: "https://placehold.co/400x400/png?text=Women",
	},
	{
		name: "Accessories",
		href: "/accessories",
		image: "https://placehold.co/400x400/png?text=Accessories",
	},
	{
		name: "Sale",
		href: "/sale",
		image: "https://placehold.co/400x400/png?text=Sale",
	},
];

export function CategoriesSection() {
	return (
		<section className="py-12 px-4">
			<div className="container mx-auto max-w-6xl">
				<h2 className="text-2xl font-semibold mb-6 text-center">
					Shop by Category
				</h2>
				<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
					{categories.map((category, index) => (
						<motion.div
							key={category.name}
							initial={{ opacity: 0, scale: 0.9 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
						>
							<Link href={category.href} className="block group">
								<Card className="cursor-pointer hover:shadow-lg transition-all duration-300 overflow-hidden border-border/50">
									<CardContent className="p-0">
										<div className="aspect-square relative overflow-hidden bg-muted">
											<Image
												src={category.image}
												alt={category.name}
												fill
												className="object-cover transition-transform duration-500 group-hover:scale-110"
												sizes="(max-width: 768px) 50vw, 25vw"
											/>
											<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
												<span className="text-white font-bold text-lg drop-shadow-md">
													{category.name}
												</span>
											</div>
										</div>
									</CardContent>
								</Card>
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
