"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export function HeroSection() {
	return (
		<section className="bg-muted py-20 px-4 overflow-hidden">
			<div className="container mx-auto max-w-4xl text-center">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h1 className="text-4xl font-bold tracking-tight mb-4 md:text-6xl text-foreground">
						Modern Luxury <br className="hidden md:block" />
						<span className="text-primary italic">Apparel Collection</span>
					</h1>
					<p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
						Discover our curated collection of premium fashion pieces. From
						daily essentials to statement luxury wear, find your signature style
						today.
					</p>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button
							size="lg"
							className="rounded-full px-8 text-base"
							nativeButton={false}
							render={<Link href="/products" />}
						>
							Explore Collection
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
