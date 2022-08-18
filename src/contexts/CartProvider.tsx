import { createContext, ReactNode, useContext } from "react";

import { useLocalStorage } from "hooks/useLocalStorage";
import { Coffee, StoredCartItem } from "types";
import { coffeeData } from "data/coffeeData";

export type CartContextType = {
  cartItems: StoredCartItem[];
  setCartItems: (cartItems: StoredCartItem[]) => void;
  addToCart: (newItem: StoredCartItem) => void;
  getCoffeesData: (showOnlyAddedCoffees?: boolean) => Coffee[];
};

export const CartContext = createContext({} as CartContextType);

type CartContextProviderProps = {
  children: ReactNode;
};

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useLocalStorage<StoredCartItem[]>(
    "@coffee-delivery:cart-items-state-1.0.0",
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
        getCoffeesData,
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
