import Layout from "@/components/layout/Layout";

export const metadata = {
	title: "Returns & Exchanges | Fashion Oasis",
	description: "Learn about our returns and exchanges policy.",
};

export default function ReturnsPage() {
	return (
		<Layout>
			<div className="container mx-auto px-4 py-16 max-w-3xl">
				<h1 className="text-4xl font-bold tracking-tight mb-8">
					Returns & Exchanges
				</h1>

				<div className="prose prose-stone dark:prose-invert max-w-none space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4 text-foreground">
							Our Policy
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							We want you to be completely satisfied with your purchase. If for
							any reason you are not, you may return your items within 30 days
							of delivery for a full refund or exchange.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-semibold text-foreground">
							How to Start a Return
						</h2>
						<ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
							<li>Visit our returns portal online.</li>
							<li>Enter your order number and email address.</li>
							<li>Select the items you wish to return and the reason.</li>
							<li>
								Print your prepaid return shipping label and drop off at any
								authorized location.
							</li>
						</ol>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-semibold text-foreground">
							Conditions
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							Items must be in their original condition, unworn, unwashed, and
							with all tags attached. Footwear must be returned in the original
							box.
						</p>
					</section>
				</div>
			</div>
		</Layout>
	);
}
