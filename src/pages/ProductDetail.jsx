import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  useEffect(() => {
    axios
      .get(
        `https://fakestoreapi.com/products/${id}`
      )
      .then((res) =>
        setProduct(res.data)
      );
  }, [id]);

  if (!product)
    return (
      <div className="text-center">
        <div className="animate-pulse">
          <div className="h-64 bg-gray-200 rounded-xl">Loading...</div>
        </div>
      </div>
    );

  return (
    <div
      className="
        max-w-7xl
        mx-auto
        p-6
        grid
        md:grid-cols-2
        gap-10
      "
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="
            h-full
            w-full
            object-contain
            transition-all
            duration-500
            group-hover:scale-110
          "
        />
      </div>

      <div>
        <h1 className="text-3xl font-bold">
          {product.title}
        </h1>

        <p className="mt-3">
          {product.category}
        </p>

        <p className="mt-4 text-3xl font-bold">
          ${product.price}
        </p>

        <div className="mt-4 inline-flex items-center bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg">
          ⭐ {product.rating.rate}
        </div>

        <p className="mt-6 text-gray-600 leading-8">
          {product.description}
        </p>
      </div>
    </div>
  );
}