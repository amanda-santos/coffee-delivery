export type Coffee = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  labels: string[];
  amount: number;
};

export type CartItem = Pick<
  Coffee,
  "id" | "image" | "name" | "price" | "amount"
>;

export type StoredCartItem = Pick<Coffee, "id" | "amount">;
