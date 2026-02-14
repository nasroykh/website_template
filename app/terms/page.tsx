import Layout from "@/components/layout/Layout";

export const metadata = {
	title: "Terms of Service | Fashion Oasis",
	description: "Legal terms and conditions for using our website.",
};

export default function TermsPage() {
	return (
		<Layout>
			<div className="container mx-auto px-4 py-16 max-w-3xl leading-relaxed">
				<h1 className="text-4xl font-bold tracking-tight mb-8">
					Terms of Service
				</h1>

				<div className="space-y-8 text-muted-foreground">
					<section>
						<p>Last updated: February 14, 2026</p>
						<p className="mt-4">
							By accessing this website, we assume you accept these terms and
							conditions. Do not continue to use Fashion Oasis if you do not
							agree to take all of the terms and conditions stated on this page.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-semibold text-foreground">
							Usage License
						</h2>
						<p>
							Permission is granted to temporarily download one copy of the
							materials (information or software) on Fashion Oasis&apos;s
							website for personal, non-commercial transitory viewing only.
						</p>
					</section>

					<section className="space-y-4">
						<h2 className="text-2xl font-semibold text-foreground">
							Disclaimer
						</h2>
						<p>
							The materials on our website are provided on an &apos;as is&apos;
							basis. We make no warranties, expressed or implied, and hereby
							disclaims and negates all other warranties including, without
							limitation, implied warranties or conditions of merchantability.
						</p>
					</section>
				</div>
			</div>
		</Layout>
	);
}
