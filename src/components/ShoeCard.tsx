import Image, { StaticImageData } from "next/image";
import { SetStateAction } from "react";

interface ShoesCardType {
  index: number;
  imgURL: StaticImageData;
  imgThum: StaticImageData;
  changeBigShoeImage: any;
  bigShoeImg: StaticImageData;
}

const ShoeCard = ({
  imgURL,
  imgThum,
  changeBigShoeImage,
  bigShoeImg,
}: ShoesCardType) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL) {
      changeBigShoeImage(imgURL);
    }
  };
  return (
    <div
      className={`border-2 rounded-xl
    ${bigShoeImg === imgURL ? "border-coral-red " : "border-transparent"}
    cursor-pointer max-sm:flex-1 `}
      onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-36 sm:w-36 rounded-xl max-sm:p-4">
        <Image src={imgThum} alt="shoes collection" width={127} height={103} className="object-contain" />
      </div>
    </div>
  );
};

export default ShoeCard;
