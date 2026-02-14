import Layout from "@/components/layout/Layout";

export const metadata = {
	title: "Shipping Information | Fashion Oasis",
	description: "Learn about our shipping rates, methods, and delivery times.",
};

export default function ShippingPage() {
	return (
		<Layout>
			<div className="container mx-auto px-4 py-16 max-w-3xl">
				<h1 className="text-4xl font-bold tracking-tight mb-8">
					Shipping Information
				</h1>

				<div className="prose prose-stone dark:prose-invert max-w-none space-y-8">
					<section>
						<h2 className="text-2xl font-semibold mb-4 text-foreground">
							Fast & Reliable Delivery
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							We strive to process and ship all orders within 1-2 business days.
							Once your order has been shipped, you will receive a confirmation
							email with tracking information.
						</p>
					</section>

					<section>
						<h2 className="text-2xl font-semibold mb-4 text-foreground">
							Shipping Rates & Estimates
						</h2>
						<div className="overflow-x-auto">
							<table className="w-full text-sm text-left border-collapse">
								<thead>
									<tr className="border-b">
										<th className="py-3 font-semibold">Shipping Method</th>
										<th className="py-3 font-semibold">Estimated Delivery</th>
										<th className="py-3 font-semibold text-right">Cost</th>
									</tr>
								</thead>
								<tbody className="divide-y">
									<tr>
										<td className="py-4">Standard Shipping</td>
										<td className="py-4">3-5 Business Days</td>
										<td className="py-4 text-right">Free over $100 / $9.99</td>
									</tr>
									<tr>
										<td className="py-4">Express Shipping</td>
										<td className="py-4">1-2 Business Days</td>
										<td className="py-4 text-right">$19.99</td>
									</tr>
									<tr>
										<td className="py-4">International</td>
										<td className="py-4">7-14 Business Days</td>
										<td className="py-4 text-right">$35.00</td>
									</tr>
								</tbody>
							</table>
						</div>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-semibold text-foreground">
							Order Tracking
						</h2>
						<p className="text-muted-foreground leading-relaxed">
							You can track your order status directly through your account or
							by using the tracking link provided in your shipping confirmation
							email.
						</p>
					</section>
				</div>
			</div>
		</Layout>
	);
}
