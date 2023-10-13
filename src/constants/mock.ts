import { product } from "./types";
import P1 from "../../public/Product/Product1.jpg";
import P2 from "../../public/Product/Product2.jpg";
import P3 from "../../public/Product/Product3.jpg";
import P4 from "../../public/Product/Product4.jpg";
import P5 from "../../public/Product/Product5.jpg";
import P6 from "../../public/Product/Product6.jpg";
import P7 from "../../public/Product/Product7.jpg";
import P8 from "../../public/Product/Product8.jpg";
import P9 from "../../public/Product/Product9.jpg";
import P10 from "../../public/Product/Product10.jpg";
import P11 from "../../public/Product/Product11.jpg";
import P2_1 from "../../public/Product/P2_1.png";
import P2_2 from "../../public/Product/P2_2.png";
import P2_3 from "../../public/Product/P2_3.png";

export const Products: product[] = [
  {
    id: 1,
    name: "Brushed Raglan Sweatshirt",
    tagline: "Sweater",
    category: "female",
    price: 195,
    image: [{ id: 1, url: [P1] }],
  },
  {
    id: 2,
    name: "Cameryn Sash Tie Dress",
    tagline: "Dress",
    category: "female",
    price: 545,
    image: [{ id: 2, url: [P2, P2_1, P2_2, P2_3] }],
  },
  {
    id: 3,
    name: "Flex Sweatshirt",
    category: "kids",
    tagline: "Sweater",
    price: 175,
    image: [{ id: 3, url: [P3] }],
  },
  {
    id: 4,
    name: "Flex Sweatpants",
    tagline: "Pants",
    category: "female",
    price: 175,
    image: [{ id: 4, url: [P4] }],
  },
  {
    id: 5,
    name: "Pink Fleece Sweatpants",
    tagline: "Pants",
    category: "female",
    price: 195,
    image: [{ id: 5, url: [P5] }],
  },
  {
    id: 6,
    name: "Lite Sweatpants",
    tagline: "Pants",
    category: "female",
    price: 150,
    image: [{ id: 6, url: [P6] }],
  },
  {
    id: 7,
    name: "Imperial Alpaca Hoodie",
    tagline: "Jackets",
    category: "female",
    price: 525,
    image: [{ id: 7, url: [P7] }],
  },
  {
    id: 8,
    name: "Flex Push Button Bomber",
    tagline: "Jackets",
    category: "male",
    price: 225,
    image: [{ id: 8, url: [P8] }],
  },
  {
    id: 9,
    name: "Muscle Tank",
    tagline: "T Shirts",
    category: "female",
    price: 75,
    image: [{ id: 9, url: [P9] }],
  },
  {
    id: 10,
    name: "Brushed Bomber",
    tagline: "Jackets",
    category: "female",
    price: 225,
    image: [{ id: 10, url: [P10] }],
  },
  {
    id: 11,
    name: "Raglan Sweatshirt",
    tagline: "Sweater",
    category: "male",
    price: 150,
    image: [{ id: 11, url: [P11] }],
  },
];
