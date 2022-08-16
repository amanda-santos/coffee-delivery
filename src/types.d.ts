export type Coffee = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  labels: string[];
};

export type CartItem = Pick<Coffee, "id" | "image" | "name" | "price"> & {
  quantity: number;
  onRemove: (id: Coffee["id"]) => void;
};
