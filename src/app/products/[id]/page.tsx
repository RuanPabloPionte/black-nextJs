"use client";
import { useEffect, useState } from "react";
import ProductDetails from "@/components/ProductDetails";
import { getProduct } from "@/services/product";
import Header from "@/components/Header";

export default function Product({
  params,
}: {
  params: { id: string | number };
}) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProduct = await getProduct(params.id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [params.id]);

  return (
    <>
      <Header />
      <div className="container m-4">
        {product && <ProductDetails product={product} />}
      </div>
    </>
  );
}
