"use client";

import Link from "next/link";
import { IconShoppingBag, IconSearch, IconMenu } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useAtomValue, useSetAtom } from "jotai";
import { isCartOpenAtom, cartTotalItemsAtom } from "@/lib/store/cartStore";
import { useState } from "react";
import { SearchMenu } from "./SearchMenu";
import { Badge } from "@/components/ui/badge";
import { useIsHydrated } from "@/lib/hooks/useIsHydrated";

export default function Header() {
	const setIsCartOpen = useSetAtom(isCartOpenAtom);
	const totalItems = useAtomValue(cartTotalItemsAtom);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const isHydrated = useIsHydrated();

	const count = isHydrated ? totalItems : 0;

	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center space-x-2 font-bold text-xl hover:opacity-80 transition-opacity"
					>
						<span className="tracking-tight italic text-primary">
							Fashion Oasis
						</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-8">
						{["Home", "Men", "Women", "Accessories", "Sale"].map((item) => (
							<Link
								key={item}
								href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
								className="text-sm font-medium transition-colors hover:text-primary relative group"
							>
								{item}
								<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
							</Link>
						))}
					</nav>

					{/* Right Side Actions */}
					<div className="flex items-center gap-2">
						<Button
							variant="ghost"
							size="icon"
							className="hidden sm:flex rounded-full hover:bg-muted"
							onClick={() => setIsSearchOpen(true)}
						>
							<IconSearch className="h-5 w-5" />
							<span className="sr-only">Search</span>
						</Button>

						<Button
							variant="ghost"
							size="icon"
							className="relative rounded-full hover:bg-muted"
							onClick={() => setIsCartOpen(true)}
						>
							<IconShoppingBag className="h-5 w-5" />
							<span className="sr-only">Shopping cart</span>
							{isHydrated && count > 0 && (
								<Badge
									className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-[10px] rounded-full animate-in zoom-in-50"
									variant="default"
								>
									{count}
								</Badge>
							)}
						</Button>

						<Button
							variant="ghost"
							size="icon"
							className="md:hidden rounded-full hover:bg-muted"
						>
							<IconMenu className="h-5 w-5" />
							<span className="sr-only">Menu</span>
						</Button>
					</div>
				</div>
			</div>
			<Separator />
			<SearchMenu open={isSearchOpen} onOpenChange={setIsSearchOpen} />
		</header>
	);
}
