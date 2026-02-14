import CategoryPage from "@/components/templates/CategoryPage";

export const metadata = {
	title: "Accessories | Fashion Oasis",
	description:
		"Complete your look with our premium range of luxury accessories.",
};

export default function AccessoriesPage() {
	return (
		<CategoryPage
			title="Accessories"
			description="The finishing touches that make all the difference. Explore our selection of high-end accessories."
			category="accessories"
		/>
	);
}
