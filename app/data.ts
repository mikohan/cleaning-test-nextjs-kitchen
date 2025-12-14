import ProblemImage1 from "@/public/images/couch/problem1.jpg";
import ProblemImage2 from "@/public/images/couch/problem2.jpg";
import ProblemImage3 from "@/public/images/couch/problem3.jpg";

import SmalCouchImage from "@/public/images/couch/prices/sofa.png";
import SmalLShapedImage from "@/public/images/couch/prices/smallLShaped.png";
import LargeSectionalImage from "@/public/images/couch/prices/largeSecional.png";
import ArmChairImage from "@/public/images/couch/prices/armchair.png";
import MattressImage from "@/public/images/couch/prices/mattress.png";
import BedImage from "@/public/images/couch/prices/bed.png";
import RugImage from "@/public/images/couch/prices/rug.png";
import CarpetImage from "@/public/images/couch/prices/carpet.png";
import { StaticImageData } from "next/image";
// Prices for couch and carpet cleaning
export interface IItem {
  item: string;
  priceBefore: number;
  priceAfter: number;
}
export interface IPrice {
  img: StaticImageData;
  category: string;
  items: IItem[];
}
export const prices: IPrice[] = [
  {
    img: SmalCouchImage,
    category: "Sofas",
    items: [
      {
        item: "Love Seat",
        priceBefore: 180,
        priceAfter: 145,
      },
      {
        item: "3 seat Sofa",
        priceBefore: 210,
        priceAfter: 165,
      },
    ],
  },
  {
    img: SmalLShapedImage,
    category: "L-Shaped Couch",
    items: [
      {
        item: "3-4 Seater",
        priceBefore: 230,
        priceAfter: 195,
      },
      {
        item: "5-6 seater",
        priceBefore: 310,
        priceAfter: 245,
      },
    ],
  },
  {
    img: LargeSectionalImage,
    category: "Large Sectional",
    items: [
      {
        item: "7-8 Seater",
        priceBefore: 380,
        priceAfter: 295,
      },
      {
        item: "9+ Seater",
        priceBefore: 430,
        priceAfter: 395,
      },
    ],
  },
  {
    img: ArmChairImage,
    category: "Chairs",
    items: [
      {
        item: "Armchair",
        priceBefore: 110,
        priceAfter: 85,
      },
      {
        item: "Dinint Chair",
        priceBefore: 35,
        priceAfter: 25,
      },
    ],
  },
  {
    img: MattressImage,
    category: "Mattresses",
    items: [
      {
        item: "Queen",
        priceBefore: 155,
        priceAfter: 115,
      },
      {
        item: "King",
        priceBefore: 179,
        priceAfter: 135,
      },
    ],
  },
  {
    img: BedImage,
    category: "Bed",
    items: [
      {
        item: "Head Board",
        priceBefore: 110,
        priceAfter: 85,
      },
      {
        item: "Bed Frame",
        priceBefore: 165,
        priceAfter: 120,
      },
    ],
  },
  {
    img: CarpetImage,
    category: "Carpets",
    items: [
      {
        item: "1 room carpet",
        priceBefore: 120,
        priceAfter: 90,
      },
      {
        item: "3 rooms carpet",
        priceBefore: 290,
        priceAfter: 240,
      },
    ],
  },
  {
    img: RugImage,
    category: "Area Rugs",
    items: [
      {
        item: "10x10 Area Rug",
        priceBefore: 110,
        priceAfter: 90,
      },
      {
        item: "5x5 Area Rug",
        priceBefore: 90,
        priceAfter: 60,
      },
    ],
  },
];

export const problems = [
  {
    text: "Got a dirty, smelly couch? We make it look new—saving you money and giving it years more life.",
    img: ProblemImage1,
  },
  {
    text: "Spills and stains on your couch? We clean it right—removing mess and smells fast, so it lasts longer.",
    img: ProblemImage2,
  },
  {
    text: "Pet mess on the couch? We remove stains and odors fast—restoring freshness and protecting it for years.",
    img: ProblemImage3,
  },
];
