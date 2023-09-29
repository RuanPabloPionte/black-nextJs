import Head from "next/head";
import { getProducts } from "@/services/product";
import ProductsList from "@/components/ProductList";
import Header from "@/components/Header";
const Products = async () => {
  const products = await getProducts();
  return (
    <>
      <Head>
        <title>Nossos Produtos</title>
        <meta name="description" content="Conheça todos os nossos produtos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1>Nossos Produtos</h1>
      <div className="container">
        {products && <ProductsList products={products} />}
      </div>
    </>
  );
};

export default Products;
