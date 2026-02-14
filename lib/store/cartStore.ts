import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export interface CartItem {
	id: string | number;
	name: string;
	price: string;
	image: string;
	quantity: number;
}

// Atom for the cart items with persistence
export const cartItemsAtom = atomWithStorage<CartItem[]>("cart-items", []);

// Atom for high-level UI state
export const isCartOpenAtom = atom(false);

// Derived atoms for calculations
export const cartTotalItemsAtom = atom((get) =>
	get(cartItemsAtom).reduce((acc, item) => acc + item.quantity, 0),
);

export const cartTotalPriceAtom = atom((get) =>
	get(cartItemsAtom).reduce((acc, item) => {
		const price = parseFloat(item.price.replace(/[^0-9.-]+/g, ""));
		return acc + price * item.quantity;
	}, 0),
);

// Actions as a hook or write-only atoms (Standard Jotai pattern)
export const addToCartAtom = atom(
	null,
	(get, set, product: Omit<CartItem, "quantity">) => {
		const items = get(cartItemsAtom);
		const existingItem = items.find((item) => item.id === product.id);

		if (existingItem) {
			set(
				cartItemsAtom,
				items.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item,
				),
			);
		} else {
			set(cartItemsAtom, [...items, { ...product, quantity: 1 }]);
		}
		set(isCartOpenAtom, true);
	},
);

export const removeItemAtom = atom(null, (get, set, id: string | number) => {
	set(
		cartItemsAtom,
		get(cartItemsAtom).filter((item) => item.id !== id),
	);
});

export const updateQuantityAtom = atom(
	null,
	(get, set, { id, quantity }: { id: string | number; quantity: number }) => {
		if (quantity <= 0) {
			set(
				cartItemsAtom,
				get(cartItemsAtom).filter((item) => item.id !== id),
			);
			return;
		}
		set(
			cartItemsAtom,
			get(cartItemsAtom).map((item) =>
				item.id === id ? { ...item, quantity } : item,
			),
		);
	},
);

export const clearCartAtom = atom(null, (get, set) => {
	set(cartItemsAtom, []);
});
