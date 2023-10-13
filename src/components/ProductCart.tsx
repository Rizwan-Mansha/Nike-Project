import Image, { StaticImageData } from "next/image";
import React from "react";
import Link from "next/link";

interface ProductTypes {
  productImage: StaticImageData;
  // productImage={item.image[0].url[0]]}
  alt: string;
  productName: string;
  productPrice: number;
  category: string;
  id: number;
  tagline: string;
}

const ProductCart = (props: ProductTypes) => {
  return (
    <>
      <Link href={`/products/${props.id}`}>
        <div className="w-72 font-bold text-lg  my-8">
          <Image src={props.productImage} alt={props.alt} className="h-96  object-fill" />
          <h3 className="mt-3">{props.productName}</h3>
          <h4 className="text-base text-gray-400 mb-2 mt-1">{props.tagline}</h4>
          <p className="text-xl">${props.productPrice}</p>
        </div>
      </Link>
    </>
  );
};

export default ProductCart;
