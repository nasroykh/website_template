import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="border-t bg-muted/30">
			<div className="container mx-auto px-4 py-12">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-4">
					{/* Brand Section */}
					<div className="space-y-4">
						<h3 className="font-bold text-lg">Fashion</h3>
						<p className="text-sm text-muted-foreground">
							Your destination for modern, stylish clothing. Quality fashion for
							every occasion.
						</p>
						<div className="flex items-center gap-4">
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label="Facebook"
							>
								<Facebook className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label="Twitter"
							>
								<Twitter className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label="Instagram"
							>
								<Instagram className="h-5 w-5" />
							</a>
							<a
								href="#"
								className="text-muted-foreground hover:text-foreground transition-colors"
								aria-label="Email"
							>
								<Mail className="h-5 w-5" />
							</a>
						</div>
					</div>

					{/* Shop Section */}
					<div className="space-y-4">
						<h4 className="font-semibold">Shop</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/men"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Men
								</Link>
							</li>
							<li>
								<Link
									href="/women"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Women
								</Link>
							</li>
							<li>
								<Link
									href="/accessories"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Accessories
								</Link>
							</li>
							<li>
								<Link
									href="/sale"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Sale
								</Link>
							</li>
						</ul>
					</div>

					{/* Customer Service Section */}
					<div className="space-y-4">
						<h4 className="font-semibold">Customer Service</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/contact"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Contact Us
								</Link>
							</li>
							<li>
								<Link
									href="/shipping"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Shipping Info
								</Link>
							</li>
							<li>
								<Link
									href="/returns"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									Returns
								</Link>
							</li>
							<li>
								<Link
									href="/faq"
									className="text-muted-foreground hover:text-foreground transition-colors"
								>
									FAQ
								</Link>
							</li>
						</ul>
					</div>

					{/* Newsletter Section */}
					<div className="space-y-4">
						<h4 className="font-semibold">Newsletter</h4>
						<p className="text-sm text-muted-foreground">
							Subscribe to get updates on new arrivals and special offers.
						</p>
						<div className="flex gap-2">
							<input
								type="email"
								placeholder="Enter your email"
								className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
							/>
							<button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2">
								Subscribe
							</button>
						</div>
					</div>
				</div>

				<Separator className="my-8" />

				{/* Bottom Section */}
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<p className="text-sm text-muted-foreground">
						© {new Date().getFullYear()} Fashion. All rights reserved.
					</p>
					<div className="flex items-center gap-6 text-sm">
						<Link
							href="/privacy"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Privacy Policy
						</Link>
						<Link
							href="/terms"
							className="text-muted-foreground hover:text-foreground transition-colors"
						>
							Terms of Service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
