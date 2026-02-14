import Layout from "@/components/layout/Layout";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata = {
	title: "Frequently Asked Questions | Fashion Oasis",
	description:
		"Find answers to common questions about our products and services.",
};

export default function FAQPage() {
	const faqs = [
		{
			question: "What is your return policy?",
			answer:
				"We offer a 30-day return policy for all unworn items in their original packaging with tags attached.",
		},
		{
			question: "How long does shipping take?",
			answer:
				"Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days within the domestic US.",
		},
		{
			question: "Do you ship internationally?",
			answer:
				"Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days.",
		},
		{
			question: "How can I track my order?",
			answer:
				"Once your order ships, you will receive an email with a tracking number and a link to track your package.",
		},
		{
			question: "Are your clothes true to size?",
			answer:
				"Most of our items are true to size. We provide detailed size guides on each product page to help you find the perfect fit.",
		},
	];

	return (
		<Layout>
			<div className="container mx-auto px-4 py-16 max-w-3xl">
				<h1 className="text-4xl font-bold tracking-tight mb-8 text-center">
					Frequently Asked Questions
				</h1>

				<Accordion className="w-full">
					{faqs.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger className="text-left font-medium py-6 px-4 hover:bg-muted/50 transition-colors rounded-lg">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent className="text-muted-foreground px-4 py-4 leading-relaxed">
								{faq.answer}
							</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>
		</Layout>
	);
}
