import Header from "@/components/Header";
import { NextPage } from "next";
import Head from "next/head";

const Cart: NextPage = () => {
  return (
    <>
    <Head>
      <title>Carrinho</title>
      <meta name="description" content="Meu carrinho de compras" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main>
      <div className="container mb-5">
        <h1 className="my-5">
          Carrinho
        </h1>

      </div>
    </main>
  </>
  );
};

export default Cart;
