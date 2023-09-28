export type ProductsType = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  inStock: number;
};

export const getProducts = async () => {
  const data = await fetch("http://localhost:3000/api/products");
  const products: ProductsType[] = await data.json();
  return products;
};

export const getProduct = async (id: number | string) => {
  const data = await fetch(`http://localhost:3000/api/products/${id}`);
  const product: ProductsType = await data.json();
  return product;
};
