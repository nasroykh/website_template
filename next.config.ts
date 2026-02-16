import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
			},
		],
	},
	// Enable standalone output for Docker optimization
	// This reduces the production image size significantly
	output: "standalone",
};

export default nextConfig;
