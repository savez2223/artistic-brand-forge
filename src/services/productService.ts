import { products } from "@/data/products";
import { replacementPods } from "@/data/replacementPods";

const allProducts = [...products, ...replacementPods];

export const getProductBySlug = (slug: string) => allProducts.find((product) => product.slug === slug);
export const getFeaturedProducts = () => products.filter((product) => product.featured);
export const getBestsellers = () => products.filter((product) => product.bestseller);
export const getRelatedProducts = (ids: number[]) => allProducts.filter((product) => ids.includes(product.id));