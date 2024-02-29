"use client";

import React from "react";
import { addToCard } from "@/redux/slices/cartSlice";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { BsCartPlus } from "react-icons/bs";
import ProductRate from "./product-rate";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

interface ProductProps {
  id: number;
  image: string;
  title: string;
  price: number;
  rating: ProductRating;
}

const Product = ({ product }: { product: ProductProps }) => {
  const dispatch = useDispatch();

  const addProduct = () => {
    toast.success(
      "The product has been successfully added to the shopping cart."
    );
    dispatch(addToCard(product));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="mx-auto">
          <Image
            src={product.image}
            alt={product.title}
            width={512}
            height={512}
            className="w-auto h-48"
            loading="lazy"
          />
        </CardTitle>
        <CardDescription className="text-center font-semibold">
          {product.title.length > 20
            ? product.title.substring(0, 20) + "..."
            : product.title}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex items-center justify-between">
        <div className="flex items-center">
          <ProductRate rate={product.rating.rate} />
          <span className="font-semibold text-rose-500 ml-1">
            {product.rating.rate}
          </span>
        </div>
        <span className="text-sm text-gray-500">
          &#040;{product.rating.count}&#041;
        </span>
      </CardContent>

      <CardFooter>
        <div className="flex justify-between items-center w-full">
          <div>{product.price}&euro;</div>
          <Button size="sm" onClick={addProduct}>
            <BsCartPlus className="w-5 h-5 mr-1" />
            Order now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Product;
