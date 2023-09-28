import { NextPage } from "next";
import Head from "next/head";
import { getProducts } from "@/services/product";
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
      {products &&
        products.map((product) => <p key={product.id}>{product.name}</p>)}
    </>
  );
};

export default Products;
