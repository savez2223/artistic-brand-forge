import bananaIceImage from "@/assets/Pod-salt/517.webp";
import blueberryMistImage from "@/assets/Pod-salt/529.webp";
import blueberryPomegranateImage from "@/assets/Pod-salt/531.webp";
import type { Product } from "@/data/productTypes";

export const podSaltProducts: Product[] = [
  {
    id: 1,
    name: "BANANA ICE – POD SALT NICOTINE SALT",
    sku: "517",
    image: bananaIceImage,
    price: 1400,
    category: "Pod Salt",
    bestseller: true,
    relatedProducts: [2, 3],
  },
  {
    id: 2,
    name: "Blueberry Mist POD SALT Nicotine Salt",
    sku: "529",
    image: blueberryMistImage,
    price: 1400,
    category: "Pod Salt",
    bestseller: true,
    relatedProducts: [1, 3],
  },
  {
    id: 3,
    name: "Blueberry Pomegranate POD SALT Nicotine Salt",
    sku: "531",
    image: blueberryPomegranateImage,
    price: 1400,
    category: "Pod Salt",
    bestseller: false,
    relatedProducts: [1, 2],
  },
];