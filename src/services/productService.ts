import { products } from "@/data/products";
import { replacementPods } from "@/data/replacementPods";

const allProducts = [...products, ...replacementPods];

export const getProductSlug = (name: string) =>
  name
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const getProductBySlug = (slug: string) =>
  allProducts.find((product) => getProductSlug(product.name) === slug);
export const getFeaturedProducts = () => products.slice(0, 4);
export const getBestsellers = () => products.filter((product) => product.bestseller);
export const getRelatedProducts = (productId: number, category: string, ids: number[]) =>
  allProducts.filter(
    (product) =>
      product.id !== productId && product.category === category && ids.includes(product.id),
  );