import { podSaltProducts } from "@/data/podSaltProducts";
import type { Product } from "@/data/productTypes";
import { uwellProducts } from "@/data/uwellProducts";

export type { Product } from "@/data/productTypes";

export const products: Product[] = [...podSaltProducts, ...uwellProducts];
