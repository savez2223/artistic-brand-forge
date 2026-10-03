export type Product = {
  id: number;
  name: string;
  sku: string;
  image: string;
  price: number;
  category: string;
  bestseller: boolean;
  relatedProducts: number[];
};