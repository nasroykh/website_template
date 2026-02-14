"use client";

import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
	cartItemsAtom,
	isCartOpenAtom,
	cartTotalPriceAtom,
	removeItemAtom,
	updateQuantityAtom,
} from "@/lib/store/cartStore";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetFooter,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
	IconTrash,
	IconMinus,
	IconPlus,
	IconShoppingBag,
} from "@tabler/icons-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsHydrated } from "@/lib/hooks/useIsHydrated";

export function CartSidebar() {
	const items = useAtomValue(cartItemsAtom);
	const [isOpen, setIsOpen] = useAtom(isCartOpenAtom);
	const totalPrice = useAtomValue(cartTotalPriceAtom);
	const removeItem = useSetAtom(removeItemAtom);
	const updateQuantity = useSetAtom(updateQuantityAtom);

	const isHydrated = useIsHydrated();

	if (!isHydrated) return null;

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetContent className="w-full sm:max-w-md flex flex-col p-0">
				<SheetHeader className="p-6 border-b">
					<SheetTitle className="flex items-center gap-2">
						<IconShoppingBag className="h-5 w-5" />
						Your Cart
					</SheetTitle>
				</SheetHeader>

				<div className="flex-1 overflow-hidden">
					{items.length === 0 ? (
						<div className="h-full flex flex-col items-center justify-center text-center p-8">
							<div className="bg-muted p-4 rounded-full mb-4">
								<IconShoppingBag className="h-8 w-8 text-muted-foreground" />
							</div>
							<h3 className="font-semibold text-lg">Your cart is empty</h3>
							<p className="text-muted-foreground mt-1">
								Add some items to your cart to see them here.
							</p>
							<Button
								variant="outline"
								className="mt-6 rounded-full"
								onClick={() => setIsOpen(false)}
							>
								Continue Shopping
							</Button>
						</div>
					) : (
						<ScrollArea className="h-full">
							<div className="p-6 space-y-6">
								{items.map((item) => (
									<div key={item.id} className="flex gap-4">
										<div className="h-20 w-20 relative bg-muted rounded-lg overflow-hidden shrink-0">
											<Image
												src={item.image}
												alt={item.name}
												fill
												className="object-cover"
											/>
										</div>
										<div className="flex-1 flex flex-col justify-between">
											<div>
												<div className="flex justify-between items-start gap-2">
													<h4 className="font-medium text-sm line-clamp-1">
														{item.name}
													</h4>
													<button
														onClick={() => removeItem(item.id)}
														className="text-muted-foreground hover:text-destructive transition-colors"
													>
														<IconTrash className="h-4 w-4" />
													</button>
												</div>
												<p className="text-primary font-semibold text-sm mt-1">
													{item.price}
												</p>
											</div>
											<div className="flex justify-between items-center mt-2">
												<div className="flex items-center border rounded-md">
													<button
														onClick={() =>
															updateQuantity({
																id: item.id,
																quantity: item.quantity - 1,
															})
														}
														className="p-1 hover:bg-muted transition-colors"
													>
														<IconMinus className="h-3 w-3" />
													</button>
													<span className="w-8 text-center text-xs font-medium">
														{item.quantity}
													</span>
													<button
														onClick={() =>
															updateQuantity({
																id: item.id,
																quantity: item.quantity + 1,
															})
														}
														className="p-1 hover:bg-muted transition-colors"
													>
														<IconPlus className="h-3 w-3" />
													</button>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</ScrollArea>
					)}
				</div>

				{items.length > 0 && (
					<SheetFooter className="p-6 border-t bg-muted/30 mt-0">
						<div className="w-full space-y-4">
							<div className="flex justify-between text-base font-semibold">
								<span>Subtotal</span>
								<span>${totalPrice.toFixed(2)}</span>
							</div>
							<p className="text-xs text-muted-foreground">
								Shipping and taxes calculated at checkout.
							</p>
							<Button className="w-full h-12 text-base rounded-full shadow-lg hover:shadow-xl transition-all">
								Checkout
							</Button>
						</div>
					</SheetFooter>
				)}
			</SheetContent>
		</Sheet>
	);
}
