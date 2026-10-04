import { ProductsType } from "@/models/productModel";

/** Homepage banner links hardcode these two product IDs. */
export const IPHONE_15_PRO_MAX_ID = "65ad32cd673347ff096529d6";
export const IPHONE_15_PLUS_ID = "65b340160954165b4225d87d";

/** @deprecated aliases kept for residual imports */
export const IPHONE_17_PRO_MAX_ID = IPHONE_15_PRO_MAX_ID;
export const IPHONE_17_PRO_ID = IPHONE_15_PLUS_ID;

const img = (path: string) => `/assets/products/${path}`;

export const mockProducts: ProductsType[] = [
  {
    _id: IPHONE_15_PRO_MAX_ID,
    name: "iPhone 15 Pro Max",
    key: "iphone-15-pro-max",
    description: "Titanium. So strong. So light. So Pro. A17 Pro chip.",
    lowest_price: 1199,
    image: img("iphone/15-pro-max.jpg"),
    category: "iPhone",
  },
  {
    _id: "prod-iphone-15-pro",
    name: "iPhone 15 Pro",
    key: "iphone-15-pro",
    description: "A17 Pro. Pro camera system. Titanium design.",
    lowest_price: 999,
    image: img("iphone/15-pro.jpg"),
    category: "iPhone",
  },
  {
    _id: IPHONE_15_PLUS_ID,
    name: "iPhone 15 Plus",
    key: "iphone-15-plus",
    description: "A huge leap in battery life. Dynamic Island. USB-C.",
    lowest_price: 899,
    image: img("iphone/15-plus-blue.jpg"),
    category: "iPhone",
  },
  {
    _id: "prod-iphone-15",
    name: "iPhone 15",
    key: "iphone-15",
    description: "Dynamic Island. 48MP Main camera. USB-C.",
    lowest_price: 799,
    image: img("iphone/15-blue.jpg"),
    category: "iPhone",
  },
  {
    _id: "prod-macbook-air-13-m3",
    name: "MacBook Air 13-inch M3",
    key: "macbook-air-13-m3",
    description: "Supercharged by M3. Thin, light, and ready for anything.",
    lowest_price: 1099,
    image: img("mac/air-13.jpg"),
    category: "Mac",
  },
  {
    _id: "prod-macbook-air-15-m3",
    name: "MacBook Air 15-inch M3",
    key: "macbook-air-15-m3",
    description: "A spacious Liquid Retina display with M3 performance.",
    lowest_price: 1299,
    image: img("mac/air-15.jpg"),
    category: "Mac",
  },
  {
    _id: "prod-macbook-pro-14-m3",
    name: "MacBook Pro 14-inch M3",
    key: "macbook-pro-14-m3",
    description: "Pro performance with the M3 chip and Liquid Retina XDR.",
    lowest_price: 1599,
    image: img("mac/pro-14.jpg"),
    category: "Mac",
  },
  {
    _id: "prod-macbook-pro-14-m3-pro",
    name: "MacBook Pro 14-inch M3 Pro",
    key: "macbook-pro-14-m3-pro",
    description: "M3 Pro power for demanding creative and developer workflows.",
    lowest_price: 1999,
    image: img("mac/pro-gallery.jpg"),
    category: "Mac",
  },
  {
    _id: "prod-mac-mini-m2-pro",
    name: "Mac mini M2 Pro",
    key: "mac-mini-m2-pro",
    description: "Desktop power in an ultracompact design, powered by M2 Pro.",
    lowest_price: 1299,
    image: img("mac/mini.jpg"),
    category: "Mac",
  },
  {
    _id: "prod-airpods-3",
    name: "AirPods (3rd generation)",
    key: "airpods-3",
    description: "Personalized Spatial Audio with Adaptive EQ and MagSafe case.",
    lowest_price: 169,
    image: img("airpods/pods-3.jpg"),
    category: "Accessories",
  },
  {
    _id: "prod-airpods-3-lightning",
    name: "AirPods (3rd generation) with Lightning Charging Case",
    key: "airpods-3-lightning",
    description: "Spatial Audio and longer battery life with a Lightning case.",
    lowest_price: 149,
    image: img("airpods/pods-3-case.jpg"),
    category: "Accessories",
  },
  {
    _id: "prod-airpods-pro-2",
    name: "AirPods Pro (2nd generation)",
    key: "airpods-pro-2",
    description: "Up to 2x more Active Noise Cancellation. Adaptive Audio.",
    lowest_price: 249,
    image: img("airpods/pro-2.jpg"),
    category: "Accessories",
  },
  {
    _id: "prod-airpods-max",
    name: "AirPods Max",
    key: "airpods-max",
    description: "Over-ear immersion with computational audio and H1 chip.",
    lowest_price: 549,
    image: img("airpods/max.jpg"),
    category: "Accessories",
  },
];
