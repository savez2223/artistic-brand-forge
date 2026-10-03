import heroImage from "../assets/show-gredi-hero.jpg";
import editorialImage from "../assets/show-gredi-editorial.jpg";
import a517 from "../assets/Pod-salt/517.webp";
import a529 from "../assets/Pod-salt/529.webp";
import a531 from "../assets/Pod-salt/531.webp";
import a38 from "../assets/Uwell/38.webp";

export type Product = {
  id: number;
  sku: string;
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
    sku: "517",
    name: "BANANA ICE – POD SALT NICOTINE SALT",
    slug: "BANANA ICE – POD SALT NICOTINE SALT",
    price: 1400.0,
    oldPrice: 15999,
    description:
      "A structured travel companion crafted for polished arrivals and effortless weekends.",
    shortDescription: "Structured black travel bag with refined gold hardware.",
    category: "Pod Salt",
    brand: "Pod Salt",
    image: a517,
    gallery: [a517, editorialImage],
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
    sku: "529",
    name: "Blueberry Mist POD SALT Nicotine Salt",
    slug: "Blueberry Mist POD SALT Nicotine Salt",
    price: 1400,
    description:
      "A precise black-dial chronograph with a confident profile and considered detailing.",
    shortDescription: "Black chronograph with polished gold accents.",
    category: "Pod Salt",
    brand: "Pod Salt",
    image: a529,
    gallery: [a529, editorialImage],
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
    sku: "531",
    name: "Blueberry Pomegranate POD SALT Nicotine Salt",
    slug: "blueberry-pomegranate-pod-salt-nicotine-salt",
    price: 1400.0,
    oldPrice: 5799,
    description:
      "A warm, enigmatic fragrance layered with amber, woods and a quiet trace of spice.",
    shortDescription: "An elegant amber and dark-woods fragrance.",
    category: "Pod Salt",
    brand: "Pod Salt",
    image: a531,
    gallery: [a531, editorialImage],
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
    sku: "38",
    name: "Caliburn G2 Pod System Kit",
    slug: "caliburn-g2-pod-system-kit",
    price: 1149,
    description:
      "Architectural aviators with deep charcoal lenses and a lightweight gold-tone frame.",
    shortDescription: "Dark-lens aviators with a refined gold frame.",
    category: "Uwell",
    brand: "Uwell",
    image: a38,
    gallery: [a38, editorialImage],
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
    sku: "SG-ELF-005",
    name: "Sovereign Loafers",
    slug: "sovereign-loafers",
    price: 7499,
    oldPrice: 8999,
    description:
      "Hand-finished black loafers with a softly structured upper and signature hardware.",
    shortDescription: "Polished black loafers made for formal ease.",
    category: "Elf Bar",
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
    sku: "SG-UWL-006",
    name: "Midnight Clutch",
    slug: "midnight-clutch",
    price: 5999,
    description:
      "A sharp evening silhouette finished with a discreet magnetic closure and satin lining.",
    shortDescription: "Minimal evening clutch with satin lining.",
    category: "Uwell",
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
    sku: "SG-PSL-007",
    name: "Imperial Link",
    slug: "imperial-link",
    price: 2799,
    description: "A sculptural chain bracelet with bold proportions and a softly brushed finish.",
    shortDescription: "Sculptural brushed-gold chain bracelet.",
    category: "Pod Salt",
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
    sku: "SG-IGT-008",
    name: "Élan Handbag",
    slug: "elan-handbag",
    price: 10999,
    description:
      "An impeccably proportioned top-handle bag with a quiet, enduring sense of luxury.",
    shortDescription: "Structured top-handle bag with timeless proportions.",
    category: "IGET",
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
