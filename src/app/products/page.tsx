import { NextPage } from "next";
import Head from "next/head";
import { getProducts } from "@/services/product";
// import ProductCard from "../../components/ProductCard";
import ProductsList from "@/components/ProductList";
const Products = async () => {
  const products = await getProducts();
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Nossos Produtos</h1>
      {products && <ProductsList products={products} />}
    </>
  );
};

export default Products;
