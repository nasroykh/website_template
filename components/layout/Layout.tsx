import Header from "./Header";
import Footer from "./Footer";
import { CartSidebar } from "@/components/cart/CartSidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
			<CartSidebar />
		</>
	);
}
