"use client";
import { ProductsType } from "@/services/product";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type CartContextType = {
  cart: ProductsType[];
  addProduct: (product: ProductsType) => void;
  removeProduct: (productId: number) => void;
};

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartContextProvider = (props: { children: ReactNode }) => {
  const [cart, setCart] = useState<ProductsType[]>(
    JSON.parse(localStorage.getItem("shopping-cart") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cart));
  }, [cart]);

  const addProduct = (product: ProductsType) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
  };

  const removeProduct = (productId: number) => {
    const removedProduct = cart.find(
      (product) => productId === Number(product.id)
    );
    if (
      confirm(`Tem certeza que quer remover o itme ${removedProduct?.name}`)
    ) {
      const updatedCart = cart.filter(
        (product) => productId !== Number(product.id)
      );
      setCart(updatedCart);
    }
  };
  return (
    <CartContext.Provider value={{ cart, addProduct, removeProduct }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
