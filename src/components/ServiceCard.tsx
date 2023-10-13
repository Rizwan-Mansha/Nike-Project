import Image, { StaticImageData } from "next/image";

interface ServiceCardType {
  label: string;
  subText: string;
  imgURL: StaticImageData;
}

const ServiceCard = ({ label, subText, imgURL }: ServiceCardType) => {
  return (
    <div
      className="flex-1 sm:w-[350px] sm:min-w-[350px]
     w-full founded-[20px] shadow-3xl px-10 py-16">
      <div className="w-11 h-11 justify-center items-center bg-coral-red rounded-full">
        <Image src={imgURL} alt={label} />
      </div>
      <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">{subText}</p>
    </div>
  );
};

export default ServiceCard;
