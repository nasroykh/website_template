import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";

export const metadata = {
	title: "Contact Us | Fashion Oasis",
	description: "Get in touch with us for any inquiries or support.",
};

export default function ContactPage() {
	return (
		<Layout>
			<div className="container mx-auto px-4 py-16 max-w-6xl">
				<div className="text-center mb-16">
					<h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
					<p className="text-muted-foreground text-lg max-w-2xl mx-auto">
						Have a question or feedback? We&apos;d love to hear from you. Fill
						out the form below or use our contact details.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
					{/* Contact Information */}
					<div className="space-y-12">
						<div className="space-y-8">
							<div className="flex gap-4 items-start">
								<div className="bg-primary/10 p-3 rounded-full text-primary">
									<IconMail className="h-6 w-6" />
								</div>
								<div>
									<h3 className="font-semibold text-lg">Email Us</h3>
									<p className="text-muted-foreground">
										For general inquiries: hello@fashionoasis.com
									</p>
									<p className="text-muted-foreground">
										Support: support@fashionoasis.com
									</p>
								</div>
							</div>

							<div className="flex gap-4 items-start">
								<div className="bg-primary/10 p-3 rounded-full text-primary">
									<IconPhone className="h-6 w-6" />
								</div>
								<div>
									<h3 className="font-semibold text-lg">Call Us</h3>
									<p className="text-muted-foreground">
										Mon-Fri: 9am - 6pm EST
									</p>
									<p className="text-muted-foreground">+1 (555) 000-0000</p>
								</div>
							</div>

							<div className="flex gap-4 items-start">
								<div className="bg-primary/10 p-3 rounded-full text-primary">
									<IconMapPin className="h-6 w-6" />
								</div>
								<div>
									<h3 className="font-semibold text-lg">Visit Us</h3>
									<p className="text-muted-foreground">
										123 Fashion Street, Suite 100
									</p>
									<p className="text-muted-foreground">New York, NY 10001</p>
								</div>
							</div>
						</div>

						<div className="bg-muted rounded-2xl p-8">
							<h4 className="font-semibold mb-4">Store Hours</h4>
							<ul className="space-y-2 text-sm text-muted-foreground">
								<li className="flex justify-between">
									<span>Monday - Friday</span> <span>9:00 AM - 8:00 PM</span>
								</li>
								<li className="flex justify-between">
									<span>Saturday</span> <span>10:00 AM - 6:00 PM</span>
								</li>
								<li className="flex justify-between">
									<span>Sunday</span> <span>Closed</span>
								</li>
							</ul>
						</div>
					</div>

					{/* Contact Form */}
					<div className="bg-background border rounded-2xl p-8 shadow-sm">
						<form className="space-y-6">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div className="space-y-2">
									<label htmlFor="first-name" className="text-sm font-medium">
										First Name
									</label>
									<Input id="first-name" placeholder="John" required />
								</div>
								<div className="space-y-2">
									<label htmlFor="last-name" className="text-sm font-medium">
										Last Name
									</label>
									<Input id="last-name" placeholder="Doe" required />
								</div>
							</div>
							<div className="space-y-2">
								<label htmlFor="email" className="text-sm font-medium">
									Email
								</label>
								<Input
									id="email"
									type="email"
									placeholder="john@example.com"
									required
								/>
							</div>
							<div className="space-y-2">
								<label htmlFor="subject" className="text-sm font-medium">
									Subject
								</label>
								<Input id="subject" placeholder="How can we help?" required />
							</div>
							<div className="space-y-2">
								<label htmlFor="message" className="text-sm font-medium">
									Message
								</label>
								<Textarea
									id="message"
									placeholder="Your message here..."
									className="min-h-37.5"
									required
								/>
							</div>
							<Button type="submit" className="w-full h-12 text-base">
								Send Message
							</Button>
						</form>
					</div>
				</div>
			</div>
		</Layout>
	);
}
