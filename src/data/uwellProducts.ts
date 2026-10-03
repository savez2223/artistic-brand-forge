import caliburnImage from "@/assets/Uwell/38.webp";
import type { Product } from "@/data/productTypes";

export const uwellProducts: Product[] = [
  {
    id: 4,
    name: "Caliburn G2 Pod System Kit",
    sku: "38",
    image: caliburnImage,
    price: 1149,
    category: "Uwell",
    bestseller: true,
    relatedProducts: [101],
  },
];