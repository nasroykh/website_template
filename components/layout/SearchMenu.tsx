"use client";

import { useEffect } from "react";
import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";
import { IconArrowRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";

// Mock searchable data - in a real app, this would come from an API or search index
const searchItems = [
	{
		id: 1,
		name: "Classic White Tee",
		category: "Products",
		href: "/products/1",
	},
	{ id: 2, name: "Denim Jacket", category: "Products", href: "/products/2" },
	{ id: 3, name: "Summer Dress", category: "Products", href: "/products/3" },
	{ id: 4, name: "Slim Fit Jeans", category: "Products", href: "/products/4" },
	{ id: 5, name: "Men's Collection", category: "Categories", href: "/men" },
	{ id: 6, name: "Women's Collection", category: "Categories", href: "/women" },
	{ id: 7, name: "Accessories", category: "Categories", href: "/accessories" },
	{ id: 8, name: "Sale Items", category: "Categories", href: "/sale" },
	{ id: 9, name: "Contact Us", category: "Pages", href: "/contact" },
	{
		id: 10,
		name: "Frequently Asked Questions",
		category: "Pages",
		href: "/faq",
	},
];

export function SearchMenu({
	open,
	onOpenChange,
}: {
	open: boolean;
	onOpenChange: (open: boolean) => void;
}) {
	const router = useRouter();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				onOpenChange(!open);
			}
		};
		document.addEventListener("keydown", down);
		return () => document.removeEventListener("keydown", down);
	}, [open, onOpenChange]);

	const handleSelect = (href: string) => {
		onOpenChange(false);
		router.push(href);
	};

	return (
		<CommandDialog open={open} onOpenChange={onOpenChange}>
			<CommandInput placeholder="Search products, categories..." />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>
				<CommandGroup heading="Suggestions">
					{searchItems.map((item) => (
						<CommandItem
							key={item.id}
							onSelect={() => handleSelect(item.href)}
							className="flex justify-between"
						>
							<div className="flex items-center gap-2">
								<span className="text-muted-foreground text-xs">
									{item.category}
								</span>
								<span>{item.name}</span>
							</div>
							<IconArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-data-selected:opacity-100 transition-opacity" />
						</CommandItem>
					))}
				</CommandGroup>
			</CommandList>
		</CommandDialog>
	);
}
