"use client";
import { ProductsType } from "@/services/product";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Card, CardBody, CardSubtitle } from "reactstrap";
import SuccessToast from "./SuccessToast";

type ProductCardProps = {
  product: ProductsType;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const { id, name, imageUrl, price } = product;

  return (
    <Card>
      <Link href={`product/${id}`}>
        <Image
          className="card-img-top"
          src={imageUrl}
          alt="Product"
          height={500}
          width={600}
        />
      </Link>
      <CardBody>
        <Link href={`/products/${id}`}>
          <h5 className="card-title" style={{ cursor: "pointer" }}>
            {name}
          </h5>
        </Link>

        <CardSubtitle className="mb-3 text-muted" tag="h6">
          R$ {price}
        </CardSubtitle>

        <Button
          color="dark"
          className="pb-2"
          block
          onClick={() => {
            setToastIsOpen(true);
            setTimeout(() => setToastIsOpen(false), 1000 * 3);
          }}
        >
          Adicionar ao Carrinho
        </Button>
      </CardBody>
      <SuccessToast toastIsOpen={toastIsOpen} setToastIsOpen={setToastIsOpen} />
    </Card>
  );
};

export default ProductCard;