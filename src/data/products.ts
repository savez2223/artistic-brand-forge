import heroImage from "../assets/show-gredi-hero.jpg";
import editorialImage from "../assets/show-gredi-editorial.jpg";

export type Product = {
  id: number;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number;
  description: string;
  shortDescription: string;
  category: string;
  brand: string;
  image: string;
  gallery: string[];
  featured: boolean;
  bestseller: boolean;
  newProduct: boolean;
  sale: boolean;
  inStock: boolean;
  specifications: Record<string, string>;
  relatedProducts: number[];
};

export const products: Product[] = [
  {
    id: 1,
    name: "Noir Weekender",
    slug: "noir-weekender",
    price: 12999,
    oldPrice: 15999,
    description:
      "A structured travel companion crafted for polished arrivals and effortless weekends.",
    shortDescription: "Structured black travel bag with refined gold hardware.",
    category: "Elf Bar",
    brand: "Gredi Atelier",
    image: heroImage,
    gallery: [heroImage, editorialImage],
    featured: true,
    bestseller: true,
    newProduct: false,
    sale: true,
    inStock: true,
    specifications: {
      Material: "Premium vegan leather",
      Finish: "Matte black",
      Hardware: "Brushed gold",
      Warranty: "12 months",
    },
    relatedProducts: [2, 4, 8],
  },
  {
    id: 2,
    name: "Aureus Chronograph",
    slug: "aureus-chronograph",
    price: 8499,
    description:
      "A precise black-dial chronograph with a confident profile and considered detailing.",
    shortDescription: "Black chronograph with polished gold accents.",
    category: "Watches",
    brand: "Maison Gredi",
    image: heroImage,
    gallery: [heroImage, editorialImage],
    featured: true,
    bestseller: true,
    newProduct: true,
    sale: false,
    inStock: true,
    specifications: {
      Movement: "Quartz",
      Case: "42 mm",
      Strap: "Genuine leather",
      Resistance: "5 ATM",
    },
    relatedProducts: [1, 3, 7],
  },
  {
    id: 3,
    name: "Amber No. 07",
    slug: "amber-no-07",
    price: 4999,
    oldPrice: 5799,
    description:
      "A warm, enigmatic fragrance layered with amber, woods and a quiet trace of spice.",
    shortDescription: "An elegant amber and dark-woods fragrance.",
    category: "Fragrance",
    brand: "Gredi Parfums",
    image: editorialImage,
    gallery: [editorialImage, heroImage],
    featured: true,
    bestseller: false,
    newProduct: false,
    sale: true,
    inStock: true,
    specifications: {
      Volume: "80 ml",
      Profile: "Amber woody",
      Concentration: "Eau de parfum",
      Origin: "France",
    },
    relatedProducts: [2, 6, 8],
  },
  {
    id: 4,
    name: "Obsidian Aviator",
    slug: "obsidian-aviator",
    price: 3299,
    description:
      "Architectural aviators with deep charcoal lenses and a lightweight gold-tone frame.",
    shortDescription: "Dark-lens aviators with a refined gold frame.",
    category: "Eyewear",
    brand: "Noir House",
    image: heroImage,
    gallery: [heroImage, editorialImage],
    featured: false,
    bestseller: true,
    newProduct: false,
    sale: false,
    inStock: true,
    specifications: { Lens: "UV400", Frame: "Gold-tone alloy", Fit: "Universal", Case: "Included" },
    relatedProducts: [1, 2, 5],
  },
  {
    id: 5,
    name: "Sovereign Loafers",
    slug: "sovereign-loafers",
    price: 7499,
    oldPrice: 8999,
    description:
      "Hand-finished black loafers with a softly structured upper and signature hardware.",
    shortDescription: "Polished black loafers made for formal ease.",
    category: "Footwear",
    brand: "Gredi Atelier",
    image: editorialImage,
    gallery: [editorialImage, heroImage],
    featured: true,
    bestseller: true,
    newProduct: false,
    sale: true,
    inStock: true,
    specifications: {
      Upper: "Full-grain leather",
      Sole: "Cushioned rubber",
      Lining: "Leather",
      Fit: "True to size",
    },
    relatedProducts: [1, 4, 7],
  },
  {
    id: 6,
    name: "Midnight Clutch",
    slug: "midnight-clutch",
    price: 5999,
    description:
      "A sharp evening silhouette finished with a discreet magnetic closure and satin lining.",
    shortDescription: "Minimal evening clutch with satin lining.",
    category: "Bags",
    brand: "Noir House",
    image: editorialImage,
    gallery: [editorialImage, heroImage],
    featured: false,
    bestseller: false,
    newProduct: true,
    sale: false,
    inStock: true,
    specifications: {
      Material: "Textured leather",
      Lining: "Satin",
      Closure: "Magnetic",
      Strap: "Detachable",
    },
    relatedProducts: [1, 3, 8],
  },
  {
    id: 7,
    name: "Imperial Link",
    slug: "imperial-link",
    price: 2799,
    description: "A sculptural chain bracelet with bold proportions and a softly brushed finish.",
    shortDescription: "Sculptural brushed-gold chain bracelet.",
    category: "Jewellery",
    brand: "Maison Gredi",
    image: heroImage,
    gallery: [heroImage, editorialImage],
    featured: false,
    bestseller: true,
    newProduct: true,
    sale: false,
    inStock: true,
    specifications: {
      Material: "Gold-plated steel",
      Length: "21 cm",
      Closure: "Lobster clasp",
      Care: "Polish cloth included",
    },
    relatedProducts: [2, 4, 8],
  },
  {
    id: 8,
    name: "Élan Handbag",
    slug: "elan-handbag",
    price: 10999,
    description:
      "An impeccably proportioned top-handle bag with a quiet, enduring sense of luxury.",
    shortDescription: "Structured top-handle bag with timeless proportions.",
    category: "Bags",
    brand: "Gredi Atelier",
    image: editorialImage,
    gallery: [editorialImage, heroImage],
    featured: true,
    bestseller: false,
    newProduct: true,
    sale: false,
    inStock: true,
    specifications: {
      Material: "Saffiano leather",
      Interior: "Two compartments",
      Hardware: "Brushed gold",
      Strap: "Adjustable",
    },
    relatedProducts: [1, 5, 6],
  },
];
