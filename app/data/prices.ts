import { IPrice, IItem } from "./data";
import SmalCouchImage from "@/public/images/couch/prices/sofa.png";
import SmalLShapedImage from "@/public/images/couch/prices/smallLShaped.png";
import LargeSectionalImage from "@/public/images/couch/prices/largeSecional.png";
import ArmChairImage from "@/public/images/couch/prices/armchair.png";
import MattressImage from "@/public/images/couch/prices/mattress.png";
import BedImage from "@/public/images/couch/prices/bed.png";
import RugImage from "@/public/images/couch/prices/rug.png";
import CarpetImage from "@/public/images/couch/prices/carpet.png";

export const prices: IPrice[] = [
  {
    img: SmalCouchImage,
    url: "https://ik.imagekit.io/angara/Couch/prices/sofa.png",
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

    url: "https://ik.imagekit.io/angara/Couch/prices/smallLShaped.png",
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

    url: "https://ik.imagekit.io/angara/Couch/prices/largeSecional.png",
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
    url: "https://ik.imagekit.io/angara/Couch/prices/armchair.png",

    category: "Chairs",
    items: [
      {
        item: "Armchair",
        priceBefore: 110,
        priceAfter: 85,
      },
      {
        item: "Dining Chair",
        priceBefore: 35,
        priceAfter: 25,
      },
    ],
  },
  {
    img: MattressImage,
    url: "https://ik.imagekit.io/angara/Couch/prices/mattress.png",
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

    url: "https://ik.imagekit.io/angara/Couch/prices/bed.png",
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

    url: "https://ik.imagekit.io/angara/Couch/prices/carpet.png",
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

    url: "https://ik.imagekit.io/angara/Couch/prices/rug.png",
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
