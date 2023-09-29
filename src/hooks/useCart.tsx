import { ProductsType } from "@/services/product";
import { ReactNode, createContext, useEffect, useState } from "react";

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
};

