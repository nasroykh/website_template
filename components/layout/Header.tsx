import Link from "next/link";
import { IconShoppingBag, IconSearch, IconMenu } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
			<div className="container mx-auto px-4">
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<Link
						href="/"
						className="flex items-center space-x-2 font-bold text-xl"
					>
						<span>Fashion</span>
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-6">
						<Link
							href="/"
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							Home
						</Link>
						<Link
							href="/men"
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							Men
						</Link>
						<Link
							href="/women"
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							Women
						</Link>
						<Link
							href="/accessories"
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							Accessories
						</Link>
						<Link
							href="/sale"
							className="text-sm font-medium transition-colors hover:text-primary"
						>
							Sale
						</Link>
					</nav>

					{/* Right Side Actions */}
					<div className="flex items-center gap-4">
						<Button variant="ghost" size="icon" className="hidden sm:flex">
							<IconSearch className="h-5 w-5" />
							<span className="sr-only">Search</span>
						</Button>
						<Button variant="ghost" size="icon" className="relative">
							<IconShoppingBag className="h-5 w-5" />
							<span className="sr-only">Shopping cart</span>
							<span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
						</Button>
						<Button variant="ghost" size="icon" className="md:hidden">
							<IconMenu className="h-5 w-5" />
							<span className="sr-only">Menu</span>
						</Button>
					</div>
				</div>
			</div>
			<Separator />
		</header>
	);
}
