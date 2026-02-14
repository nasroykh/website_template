"use client";

import { Button } from "@/components/ui/button";
import { useSetAtom } from "jotai";
import { addToCartAtom } from "@/lib/store/cartStore";
import { toast } from "sonner";

interface ProductActionsProps {
	product: {
		id: string | number;
		name: string;
		price: string;
		image: string;
	};
}

export function ProductActions({ product }: ProductActionsProps) {
	const addToCart = useSetAtom(addToCartAtom);

	const handleAddToCart = () => {
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
		<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
			<Button
				size="lg"
				className="w-full h-14 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
				onClick={handleAddToCart}
			>
				Add to Cart
			</Button>
			<Button
				size="lg"
				variant="outline"
				className="w-full h-14 text-lg rounded-full"
			>
				Buy Now
			</Button>
		</div>
	);
}
