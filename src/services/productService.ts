import { products } from "@/data/products";

export const getProductBySlug = (slug: string) => products.find((product) => product.slug === slug);
export const getFeaturedProducts = () => products.filter((product) => product.featured);
export const getBestsellers = () => products.filter((product) => product.bestseller);
export const getRelatedProducts = (ids: number[]) => products.filter((product) => ids.includes(product.id));