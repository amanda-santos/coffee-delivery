import { createContext, ReactNode, useContext } from "react";

import { useLocalStorage } from "hooks/useLocalStorage";
import { Coffee, StoredCartItem } from "types";
import { coffeeData } from "data/coffeeData";

export type CartContextType = {
  cartItems: StoredCartItem[];
  setCartItems: (cartItems: StoredCartItem[]) => void;
  addToCart: (newItem: StoredCartItem) => void;
  removeAllItemsFromCart: () => void;
  getCoffeesData: (showOnlyAddedCoffees?: boolean) => Coffee[];
  createOrder: (newOrder: Order) => void;
  getLatestOrder: () => Order | undefined;
};

export const CartContext = createContext({} as CartContextType);

type Order = {
  id: number;
  items: StoredCartItem[];
  totalPrice: number;
  deliveryPrice: number;
  paymentMethod: "creditCard" | "debitCard" | "money";
  address: {
    cep: string;
    street: string;
    number: number;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
  };
};

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<StoredCartItem[]>(
    "@coffee-delivery:cart-items-state-1.0.0",
    []
  );
  const [orders, setOrders] = useLocalStorage<Order[]>(
    "@coffee-delivery:orders-state-1.0.0",
    []
  );

  const addToCart = (newItem: StoredCartItem): void => {
    const cartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === newItem.id
    );

    if (cartItemIndex === -1) {
      setCartItems([...cartItems, newItem]);
    } else {
      const newCartItems = cartItems.map((cartItem) => {
        if (cartItem.id === newItem.id) {
          return {
            ...newItem,
          };
        }

        return cartItem;
      });

      setCartItems(newCartItems);
    }
  };

  const removeAllItemsFromCart = (): void => {
    setCartItems([]);
  };

  const createOrder = (newOrder: Order): void => {
    setOrders([...orders, newOrder]);
  };

  const getLatestOrder = (): Order | undefined => {
    return orders[orders.length - 1];
  };

  const getCoffeesData = (showOnlyAddedCoffees: boolean = false): Coffee[] => {
    const dataWithAmount = coffeeData.map((coffee) => ({
      ...coffee,
      amount: cartItems.find((item) => item.id === coffee.id)?.amount ?? 0,
    }));

    if (showOnlyAddedCoffees) {
      return dataWithAmount.filter((cartItem) => cartItem.amount > 0);
    }

    return dataWithAmount;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeAllItemsFromCart,
        getCoffeesData,
        createOrder,
        getLatestOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }

  return context;
};
