import elfBarImage from "@/assets/elf.webp";
import iGetImage from "@/assets/iget.webp";
import podSaltImage from "@/assets/Pod-salt.webp";
import uwellImage from "@/assets/uwell.webp";
import type { Product } from "@/data/productTypes";

export const replacementPods: Product[] = [
  { id: 101, name: "Caliburn Replacement Pod", sku: "SG-RP-101", image: uwellImage, price: 899, category: "Uwell", bestseller: false, relatedProducts: [4] },
  { id: 102, name: "Elf Bar Refillable Pod", sku: "SG-RP-102", image: elfBarImage, price: 749, category: "Elf Bar", bestseller: false, relatedProducts: [] },
  { id: 103, name: "Pod Salt Replacement Cartridge", sku: "SG-RP-103", image: podSaltImage, price: 699, category: "Pod Salt", bestseller: false, relatedProducts: [1, 2, 3] },
  { id: 104, name: "IGET Replacement Pod", sku: "SG-RP-104", image: iGetImage, price: 799, category: "IGET", bestseller: false, relatedProducts: [] },
];