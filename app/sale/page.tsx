import CategoryPage from "@/components/templates/CategoryPage";

export const metadata = {
	title: "Sale | Fashion Oasis",
	description:
		"Shop our exclusive offers and seasonal discounts on premium fashion.",
};

export default function SalePage() {
	return (
		<CategoryPage
			title="Seasonal Sale"
			description="Luxury fashion at exceptional value. Discover your favorite pieces with exclusive limited-time offers."
			category="sale"
		/>
	);
}
