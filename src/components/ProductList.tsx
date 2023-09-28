// src/components/ProductsList.tsx

import React from "react";
import { Col, Row } from "reactstrap";
import { ProductsType } from "../services/product";
import ProductCard from "./ProductCard";

type ProductListProps = {
  products: ProductsType[];
};

const ProductsList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <>
      <div className=" row g-5">
        {products.map((product) => (
          <div className="col md-6 lg-4 xl-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
