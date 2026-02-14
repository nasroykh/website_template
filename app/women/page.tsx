import CategoryPage from "@/components/templates/CategoryPage";

export const metadata = {
	title: "Women's Collection | Fashion Oasis",
	description:
		"Explore our elegant collection of women's fashion and accessories.",
};

export default function WomenPage() {
	return (
		<CategoryPage
			title="Women's Collection"
			description="Experience the perfect blend of elegance and comfort with our meticulously crafted women's collection."
			category="women"
		/>
	);
}
