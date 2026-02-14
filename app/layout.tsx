import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { Graph } from "schema-dts";
import { Toaster } from "@/components/ui/sonner";

const outfit = Outfit({
	subsets: ["latin"],
	variable: "--font-sans",
	display: "swap",
});

const pathUrl = `https://${process.env.NEXT_PUBLIC_DOMAIN_NAME}`;

export const metadata: Metadata = {
	metadataBase: new URL(pathUrl),
	title: {
		default: "Fashion Store | Modern Stylish Clothing",
		template: "%s | Fashion Store",
	},
	description:
		"Your destination for modern, stylish clothing. Quality fashion for every occasion, designed for modern living.",
	keywords: ["fashion", "clothing", "modern style", "ecommerce", "apparel"],
	authors: [{ name: "Fashion Store Team" }],
	creator: "Fashion Store",
	publisher: "Fashion Store",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	openGraph: {
		type: "website",
		locale: "en_US",
		url: pathUrl,
		siteName: "Fashion Store",
		title: "Fashion Store | Modern Stylish Clothing",
		description:
			"Your destination for modern, stylish clothing. Quality fashion for every occasion.",
		images: [
			{
				url: `/og-image.png`,
				width: 1200,
				height: 630,
				alt: "Fashion Store",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Fashion Store | Modern Stylish Clothing",
		description: "Your destination for modern, stylish clothing.",
		images: [`/og-image.png`],
		creator: "@fashionstore",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	alternates: {
		canonical: "/",
	},
};

const jsonLdContent: Graph = {
	"@context": "https://schema.org",
	"@graph": [
		{
			"@type": "WebSite",
			"@id": `${pathUrl}/#website`,
			url: pathUrl,
			name: "Fashion Store",
			description: "Modern stylish clothing store",
			publisher: { "@id": `${pathUrl}/#organization` },
		},
		{
			"@type": "Organization",
			"@id": `${pathUrl}/#organization`,
			name: "Fashion Store",
			url: pathUrl,
			logo: {
				"@type": "ImageObject",
				url: `${pathUrl}/logo.png`,
			},
			sameAs: [
				"https://facebook.com/fashionstore",
				"https://instagram.com/fashionstore",
				"https://twitter.com/fashionstore",
			],
		},
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={outfit.variable}>
			<head>
				<JsonLd content={jsonLdContent} />
			</head>
			<body className="antialiased">
				{children}
				<Toaster />
			</body>
		</html>
	);
}
