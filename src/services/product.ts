export type productsType = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
};

export const getProducts = async () => {
  const data = await fetch("http://localhost:3000/api/products");
  const products: productsType[] = await data.json();
  return products;
};
