"use client";

import Layout from "@/components/layout/Layout";
import { FeaturedProductsSection } from "@/components/sections/FeaturedProductsSection";
import { motion } from "motion/react";

interface CategoryPageProps {
	title: string;
	description: string;
	category: string;
}

export default function CategoryPage({
	title,
	description,
}: CategoryPageProps) {
	return (
		<Layout>
			<div className="min-h-screen">
				<div className="container mx-auto px-4 py-20 text-center max-w-4xl">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<h1 className="text-5xl font-bold tracking-tight mb-6 capitalize">
							{title}
						</h1>
						<p className="text-muted-foreground text-xl leading-relaxed">
							{description}
						</p>
					</motion.div>
				</div>

				<FeaturedProductsSection />
			</div>
		</Layout>
	);
}
