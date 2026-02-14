"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { IconHome, IconArrowLeft } from "@tabler/icons-react";

export default function NotFound() {
	const router = useRouter();

	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center bg-background text-foreground overflow-hidden relative selection:bg-primary/30">
			{/* Animated Background Gradients */}
			<div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
				<motion.div
					animate={{
						scale: [1, 1.2, 1],
						opacity: [0.3, 0.5, 0.3],
						rotate: [0, 90, 0],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: "linear",
					}}
					className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-primary/10 blur-[120px] rounded-full mix-blend-screen"
				/>
				<motion.div
					animate={{
						scale: [1, 1.5, 1],
						opacity: [0.2, 0.4, 0.2],
						rotate: [0, -60, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "linear",
						delay: 2,
					}}
					className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-blue-500/10 blur-[120px] rounded-full mix-blend-screen"
				/>
			</div>

			<div className="z-10 text-center px-4 relative">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.8, type: "spring" }}
					className="relative"
				>
					<h1 className="text-[10rem] md:text-[14rem] font-black tracking-tighter leading-none select-none text-transparent bg-clip-text bg-linear-to-b from-foreground/80 to-foreground/20">
						404
					</h1>
					<motion.div
						animate={{
							x: [-2, 2, -2],
							y: [1, -1, 1],
						}}
						transition={{
							duration: 0.2,
							repeat: Infinity,
							repeatType: "mirror",
						}}
						className="absolute inset-0 flex items-center justify-center text-[10rem] md:text-[14rem] font-black tracking-tighter leading-none text-primary/30 mix-blend-overlay pointer-events-none"
					>
						404
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.4 }}
					className="space-y-4"
				>
					<h2 className="text-2xl md:text-4xl font-bold tracking-tight">
						Lost in the digital void?
					</h2>
					<p className="text-muted-foreground text-lg max-w-md mx-auto">
						The page you are looking for doesn&apos;t exist. It might have been
						moved, deleted, or perhaps it never existed at all.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
				>
					<Button
						render={<Link href="/" />}
						size="lg"
						className="rounded-full px-8 font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-shadow"
					>
						<IconHome className="mr-2 h-4 w-4" />
						Return Home
					</Button>
					<Button
						variant="outline"
						size="lg"
						className="rounded-full px-8"
						onClick={() => router.back()}
					>
						<IconArrowLeft className="mr-2 h-4 w-4" />
						Go Back
					</Button>
				</motion.div>
			</div>

			{/* Decorative floating elements */}
			<motion.div
				animate={{
					y: [-20, 20, -20],
					rotate: [0, 5, -5, 0],
				}}
				transition={{
					duration: 5,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute top-1/4 left-10 md:left-20 text-muted-foreground/20"
			>
				<div className="w-12 h-12 border-4 border-current rounded-full" />
			</motion.div>

			<motion.div
				animate={{
					y: [20, -20, 20],
					rotate: [0, -10, 10, 0],
				}}
				transition={{
					duration: 7,
					repeat: Infinity,
					ease: "easeInOut",
				}}
				className="absolute bottom-1/4 right-10 md:right-20 text-muted-foreground/20"
			>
				<div className="w-16 h-16 border-4 border-current rotate-45" />
			</motion.div>
		</div>
	);
}
