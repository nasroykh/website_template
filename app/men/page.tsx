import CategoryPage from "@/components/templates/CategoryPage";

export const metadata = {
	title: "Men's Collection | Fashion Oasis",
	description:
		"Discover our curated collection of premium men's fashion pieces.",
};

export default function MenPage() {
	return (
		<CategoryPage
			title="Men's Collection"
			description="From tailored essentials to contemporary casuals, find everything a modern gentleman needs to define his style."
			category="men"
		/>
	);
}
