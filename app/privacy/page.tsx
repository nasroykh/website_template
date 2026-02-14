import Layout from "@/components/layout/Layout";

export const metadata = {
	title: "Privacy Policy | Fashion Oasis",
	description: "Our commitment to protecting your personal information.",
};

export default function PrivacyPage() {
	return (
		<Layout>
			<div className="container mx-auto px-4 py-16 max-w-3xl leading-relaxed">
				<h1 className="text-4xl font-bold tracking-tight mb-8">
					Privacy Policy
				</h1>

				<div className="space-y-8 text-muted-foreground">
					<section>
						<p>Last updated: February 14, 2026</p>
						<p className="mt-4">
							Fashion Oasis (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
							operates fashionoasis.com. This page informs you of our policies
							regarding the collection, use, and disclosure of personal data
							when you use our Service.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-semibold text-foreground">
							Information Collection and Use
						</h2>
						<p>
							We collect several different types of information for various
							purposes to provide and improve our Service to you.
						</p>
						<ul className="list-disc pl-5 mt-2 space-y-2">
							<li>Email address</li>
							<li>First name and last name</li>
							<li>Phone number</li>
							<li>Address, State, Province, ZIP/Postal code, City</li>
						</ul>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-semibold text-foreground">
							Cookies and Tracking
						</h2>
						<p>
							We use cookies and similar tracking technologies to track the
							activity on our Service and hold certain information.
						</p>
					</section>
				</div>
			</div>
		</Layout>
	);
}
