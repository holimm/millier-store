import {
  ProductColorType,
  ProductDetailType,
} from "@/models/productDetailModel";
import {
  IPHONE_15_PLUS_ID,
  IPHONE_15_PRO_MAX_ID,
  mockProducts,
} from "./products";

const local = (path: string) => `/assets/products/${path}`;

const phoneColorsPro = [
  { label: "Natural Titanium", lowercase: "natural", color: "#C2BCB2" },
  { label: "Blue Titanium", lowercase: "blue", color: "#3E4D5E" },
  { label: "White Titanium", lowercase: "white", color: "#F2F1ED" },
  { label: "Black Titanium", lowercase: "black", color: "#3C3C3D" },
];

const phoneColors15 = [
  { label: "Blue", lowercase: "blue", color: "#D4E0F1" },
  { label: "Pink", lowercase: "pink", color: "#EBD0D2" },
  { label: "Yellow", lowercase: "yellow", color: "#EDE6C7" },
  { label: "Green", lowercase: "green", color: "#D5E0D2" },
  { label: "Black", lowercase: "black", color: "#3C4042" },
];

const macColorsAir = [
  { label: "Midnight", lowercase: "midnight", color: "#2C2C2E" },
  { label: "Starlight", lowercase: "starlight", color: "#F0E4D0" },
  { label: "Space Gray", lowercase: "spacegray", color: "#7D7E80" },
  { label: "Silver", lowercase: "silver", color: "#E3E4E5" },
];

const macColorsPro = [
  { label: "Space Black", lowercase: "spaceblack", color: "#2C2C2E" },
  { label: "Silver", lowercase: "silver", color: "#E3E4E5" },
];

const accessoryColors = [
  { label: "White", lowercase: "white", color: "#FFFFFF" },
];

const maxColors = [
  { label: "Space Gray", lowercase: "spacegray", color: "#5C5C5E" },
  { label: "Silver", lowercase: "silver", color: "#E3E4E5" },
  { label: "Sky Blue", lowercase: "blue", color: "#3A6EA5" },
  { label: "Pink", lowercase: "pink", color: "#E8B4B8" },
  { label: "Green", lowercase: "green", color: "#5B7A6A" },
];

const phoneStorage = [
  { capacity: 128, unit: "GB", price: 0 },
  { capacity: 256, unit: "GB", price: 100 },
  { capacity: 512, unit: "GB", price: 300 },
];

const phoneStoragePro = [
  { capacity: 128, unit: "GB", price: 0 },
  { capacity: 256, unit: "GB", price: 100 },
  { capacity: 512, unit: "GB", price: 300 },
  { capacity: 1, unit: "TB", price: 500 },
];

const phoneStorageMax = [
  { capacity: 256, unit: "GB", price: 0 },
  { capacity: 512, unit: "GB", price: 200 },
  { capacity: 1, unit: "TB", price: 400 },
];

const macStorage = [
  { capacity: 256, unit: "GB", price: 0 },
  { capacity: 512, unit: "GB", price: 200 },
  { capacity: 1, unit: "TB", price: 400 },
  { capacity: 2, unit: "TB", price: 800 },
];

const macMemory = [
  { capacity: 8, unit: "GB", price: 0 },
  { capacity: 16, unit: "GB", price: 200 },
  { capacity: 24, unit: "GB", price: 400 },
];

function baseDescription(
  name: string,
  heroText: string,
  imagePath: string
): ProductDetailType["description"] {
  const image = local(imagePath);
  return [
    {
      label: "overview",
      type: "text",
      content: [
        {
          text: `<p>${heroText}</p><p>The ${name} brings Apple’s iPhone 15–era design, performance, and everyday features together in a refined experience.</p>`,
          image: "null",
        },
      ],
    },
    {
      label: "design",
      type: "contain-image",
      content: [
        {
          text: `<h3>Crafted to last</h3><p>Premium materials and precise engineering give the ${name} a confident presence without sacrificing comfort.</p>`,
          image,
        },
      ],
    },
    {
      label: "performance",
      type: "dual-images",
      content: [
        {
          text: "<h3>Speed when you need it</h3><p>Multitask, create, and stream with responsive performance that stays smooth under pressure.</p>",
          image,
        },
        {
          text: "<h3>Battery that keeps up</h3><p>All-day power for work sessions, travel days, and late-night scrolling.</p>",
          image,
        },
      ],
    },
  ];
}

function phoneSpecs(chip: string): ProductDetailType["specs"] {
  return [
    { label: "Chip", key: "chip", content: chip },
    { label: "Display", key: "display", content: "Super Retina XDR OLED" },
    { label: "Camera", key: "camera", content: "Advanced camera system" },
    { label: "Security", key: "security", content: "Face ID" },
    { label: "Charging", key: "charging", content: "USB-C, MagSafe, Qi" },
  ];
}

function macSpecs(chip: string): ProductDetailType["specs"] {
  return [
    { label: "Chip", key: "chip", content: chip },
    {
      label: "Display",
      key: "display",
      content: "Liquid Retina / Liquid Retina XDR",
    },
    { label: "Ports", key: "ports", content: "Thunderbolt / USB 4, MagSafe" },
    { label: "Camera", key: "camera", content: "1080p FaceTime HD camera" },
    {
      label: "Audio",
      key: "audio",
      content: "High-fidelity speaker system with Spatial Audio",
    },
  ];
}

function withColorImages(
  colors: { label: string; lowercase: string; color: string }[],
  imageMap: Record<string, string[]>,
  fallback: string
) {
  return colors.map((color) => ({
    ...color,
    image: imageMap[color.lowercase]?.[0] || fallback,
  }));
}

const detailOverrides: Record<string, Partial<ProductDetailType>> = {
  [IPHONE_15_PRO_MAX_ID]: {
    name: "iPhone 15 Pro Max",
    name_lower: "iphone 15 pro max",
    basePrice: 1199,
    colors: withColorImages(
      phoneColorsPro,
      {
        natural: [local("iphone/15-pro-max.jpg")],
        blue: [local("iphone/15-pro-max-blue.jpg")],
        white: [local("iphone/15-pro-max-white.jpg")],
        black: [local("iphone/15-pro-max-black.jpg")],
      },
      local("iphone/15-pro-max.jpg")
    ),
    storage: phoneStorageMax,
    images: {
      natural: [local("iphone/15-pro-max.jpg")],
      blue: [local("iphone/15-pro-max-blue.jpg")],
      white: [local("iphone/15-pro-max-white.jpg")],
      black: [local("iphone/15-pro-max-black.jpg")],
    },
    description: baseDescription(
      "iPhone 15 Pro Max",
      "Titanium design. A17 Pro chip. The ultimate iPhone camera system.",
      "iphone/15-pro-max.jpg"
    ),
    specs: phoneSpecs("A17 Pro"),
  },
  "prod-iphone-15-pro": {
    name: "iPhone 15 Pro",
    name_lower: "iphone 15 pro",
    basePrice: 999,
    colors: withColorImages(
      phoneColorsPro,
      {
        natural: [local("iphone/15-pro.jpg")],
        blue: [local("iphone/15-pro-blue.jpg")],
        white: [local("iphone/15-pro-white.jpg")],
        black: [local("iphone/15-pro-black.jpg")],
      },
      local("iphone/15-pro.jpg")
    ),
    storage: phoneStoragePro,
    images: {
      natural: [local("iphone/15-pro.jpg")],
      blue: [local("iphone/15-pro-blue.jpg")],
      white: [local("iphone/15-pro-white.jpg")],
      black: [local("iphone/15-pro-black.jpg")],
    },
    description: baseDescription(
      "iPhone 15 Pro",
      "Forged in titanium and powered by A17 Pro for pro workflows.",
      "iphone/15-pro.jpg"
    ),
    specs: phoneSpecs("A17 Pro"),
  },
  [IPHONE_15_PLUS_ID]: {
    name: "iPhone 15 Plus",
    name_lower: "iphone 15 plus",
    basePrice: 899,
    colors: withColorImages(
      phoneColors15,
      {
        blue: [local("iphone/15-plus-blue.jpg")],
        pink: [local("iphone/15-plus-pink.jpg")],
        yellow: [local("iphone/15-plus-yellow.jpg")],
        green: [local("iphone/15-plus-green.jpg")],
        black: [local("iphone/15-plus-black.jpg")],
      },
      local("iphone/15-plus-blue.jpg")
    ),
    storage: phoneStorage,
    images: {
      blue: [local("iphone/15-plus-blue.jpg")],
      pink: [local("iphone/15-plus-pink.jpg")],
      yellow: [local("iphone/15-plus-yellow.jpg")],
      green: [local("iphone/15-plus-green.jpg")],
      black: [local("iphone/15-plus-black.jpg")],
    },
    description: baseDescription(
      "iPhone 15 Plus",
      "A bigger canvas, longer battery life, and the beauty of Dynamic Island.",
      "iphone/15-plus-blue.jpg"
    ),
    specs: phoneSpecs("A16 Bionic"),
  },
  "prod-iphone-15": {
    name: "iPhone 15",
    name_lower: "iphone 15",
    basePrice: 799,
    colors: withColorImages(
      phoneColors15,
      {
        blue: [local("iphone/15-blue.jpg")],
        pink: [local("iphone/15-pink.jpg")],
        yellow: [local("iphone/15-yellow.jpg")],
        green: [local("iphone/15-green.jpg")],
        black: [local("iphone/15-black.jpg")],
      },
      local("iphone/15-blue.jpg")
    ),
    storage: phoneStorage,
    images: {
      blue: [local("iphone/15-blue.jpg")],
      pink: [local("iphone/15-pink.jpg")],
      yellow: [local("iphone/15-yellow.jpg")],
      green: [local("iphone/15-green.jpg")],
      black: [local("iphone/15-black.jpg")],
    },
    description: baseDescription(
      "iPhone 15",
      "Dynamic Island, a 48MP Main camera, and USB-C in five beautiful colors.",
      "iphone/15-blue.jpg"
    ),
    specs: phoneSpecs("A16 Bionic"),
  },
  "prod-macbook-air-13-m3": {
    name: "MacBook Air 13-inch M3",
    basePrice: 1099,
    colors: withColorImages(
      macColorsAir,
      {
        midnight: [local("mac/air-midnight.jpg")],
        starlight: [local("mac/air-starlight.jpg")],
        spacegray: [local("mac/air-spacegray.jpg")],
        silver: [local("mac/air-silver.jpg")],
      },
      local("mac/air-13.jpg")
    ),
    storage: macStorage.slice(0, 3),
    memory: macMemory,
    images: {
      midnight: [local("mac/air-midnight.jpg"), local("mac/air-13.jpg")],
      starlight: [local("mac/air-starlight.jpg"), local("mac/air-15.jpg")],
      spacegray: [local("mac/air-spacegray.jpg"), local("mac/air-13.jpg")],
      silver: [local("mac/air-silver.jpg"), local("mac/air-15.jpg")],
    },
    description: baseDescription(
      "MacBook Air 13-inch",
      "Exceptional performance with the M3 chip in a fanless design.",
      "mac/air-13.jpg"
    ),
    specs: macSpecs("Apple M3"),
  },
  "prod-macbook-air-15-m3": {
    name: "MacBook Air 15-inch M3",
    basePrice: 1299,
    colors: withColorImages(
      macColorsAir,
      {
        midnight: [local("mac/air-midnight.jpg")],
        starlight: [local("mac/air-starlight.jpg")],
        spacegray: [local("mac/air-spacegray.jpg")],
        silver: [local("mac/air-silver.jpg")],
      },
      local("mac/air-15.jpg")
    ),
    storage: macStorage.slice(0, 3),
    memory: macMemory,
    images: {
      midnight: [local("mac/air-midnight.jpg"), local("mac/air-15.jpg")],
      starlight: [local("mac/air-starlight.jpg"), local("mac/air-15.jpg")],
      spacegray: [local("mac/air-spacegray.jpg"), local("mac/air-15.jpg")],
      silver: [local("mac/air-silver.jpg"), local("mac/air-15.jpg")],
    },
    description: baseDescription(
      "MacBook Air 15-inch",
      "A bigger canvas with the speed and efficiency of M3.",
      "mac/air-15.jpg"
    ),
    specs: macSpecs("Apple M3"),
  },
  "prod-macbook-pro-14-m3": {
    name: "MacBook Pro 14-inch M3",
    basePrice: 1599,
    colors: withColorImages(
      macColorsPro,
      {
        spaceblack: [local("mac/pro-spaceblack.jpg")],
        silver: [local("mac/pro-silver.jpg")],
      },
      local("mac/pro-14.jpg")
    ),
    storage: macStorage,
    memory: [
      { capacity: 8, unit: "GB", price: 0 },
      { capacity: 16, unit: "GB", price: 200 },
      { capacity: 24, unit: "GB", price: 400 },
    ],
    images: {
      spaceblack: [local("mac/pro-spaceblack.jpg"), local("mac/pro-14.jpg")],
      silver: [local("mac/pro-silver.jpg"), local("mac/pro-gallery.jpg")],
    },
    description: baseDescription(
      "MacBook Pro 14-inch",
      "Pro workflows accelerated by the M3 chip and Liquid Retina XDR.",
      "mac/pro-14.jpg"
    ),
    specs: macSpecs("Apple M3"),
  },
  "prod-macbook-pro-14-m3-pro": {
    name: "MacBook Pro 14-inch M3 Pro",
    basePrice: 1999,
    colors: withColorImages(
      macColorsPro,
      {
        spaceblack: [local("mac/pro-spaceblack.jpg")],
        silver: [local("mac/pro-silver.jpg")],
      },
      local("mac/pro-gallery.jpg")
    ),
    storage: macStorage,
    memory: [
      { capacity: 18, unit: "GB", price: 0 },
      { capacity: 36, unit: "GB", price: 400 },
    ],
    images: {
      spaceblack: [local("mac/pro-spaceblack.jpg")],
      silver: [local("mac/pro-silver.jpg")],
    },
    description: baseDescription(
      "MacBook Pro 14-inch M3 Pro",
      "Mind-blowing performance for pros who push further.",
      "mac/pro-gallery.jpg"
    ),
    specs: macSpecs("Apple M3 Pro"),
  },
  "prod-mac-mini-m2-pro": {
    name: "Mac mini M2 Pro",
    basePrice: 1299,
    colors: withColorImages(
      [{ label: "Silver", lowercase: "silver", color: "#E3E4E5" }],
      { silver: [local("mac/mini.jpg")] },
      local("mac/mini.jpg")
    ),
    storage: macStorage.slice(0, 3),
    memory: [
      { capacity: 16, unit: "GB", price: 0 },
      { capacity: 32, unit: "GB", price: 400 },
    ],
    images: {
      silver: [local("mac/mini.jpg"), local("mac/mini-alt.jpg")],
    },
    description: baseDescription(
      "Mac mini",
      "Pro-level desktop power in an ultracompact footprint.",
      "mac/mini.jpg"
    ),
    specs: macSpecs("Apple M2 Pro"),
  },
  "prod-airpods-pro-2": {
    name: "AirPods Pro (2nd generation)",
    basePrice: 249,
    colors: withColorImages(
      accessoryColors,
      { white: [local("airpods/pro-2.jpg")] },
      local("airpods/pro-2.jpg")
    ),
    images: {
      white: [local("airpods/pro-2.jpg"), local("airpods/pro-2-usbc.jpg")],
    },
    description: baseDescription(
      "AirPods Pro (2nd generation)",
      "Immersive sound with Adaptive Audio and powerful Active Noise Cancellation.",
      "airpods/pro-2.jpg"
    ),
  },
  "prod-airpods-max": {
    name: "AirPods Max",
    basePrice: 549,
    colors: withColorImages(
      maxColors,
      {
        spacegray: [local("airpods/max-spacegray.jpg")],
        silver: [local("airpods/max-silver.jpg")],
        blue: [local("airpods/max-blue.jpg")],
        pink: [local("airpods/max-pink.jpg")],
        green: [local("airpods/max-green.jpg")],
      },
      local("airpods/max.jpg")
    ),
    images: {
      spacegray: [local("airpods/max-spacegray.jpg")],
      silver: [local("airpods/max-silver.jpg")],
      blue: [local("airpods/max-blue.jpg")],
      pink: [local("airpods/max-pink.jpg")],
      green: [local("airpods/max-green.jpg")],
    },
    description: baseDescription(
      "AirPods Max",
      "Over-ear computational audio and studio-quality immersion.",
      "airpods/max.jpg"
    ),
  },
};

function buildDetailFromProduct(
  product: (typeof mockProducts)[number]
): ProductDetailType {
  const override = detailOverrides[product._id!] || {};
  const isMac = product.category === "Mac";
  const isAccessory = product.category === "Accessories";
  const fallback = product.image!;

  const images: Record<string, string[]> = {
    natural: [fallback],
    blue: [fallback],
    white: [fallback],
    black: [fallback],
    silver: [fallback],
    pink: [fallback],
    yellow: [fallback],
    green: [fallback],
    midnight: [fallback],
    starlight: [fallback],
    spacegray: [fallback],
    spaceblack: [fallback],
  };

  const defaultColors = isAccessory
    ? accessoryColors
    : isMac
      ? macColorsPro
      : phoneColorsPro;

  const detail: ProductDetailType = {
    _id: product._id,
    name: product.name,
    name_lower: product.name?.toLowerCase(),
    basePrice: product.lowest_price,
    colors: withColorImages(defaultColors, images, fallback),
    storage: isAccessory
      ? undefined
      : isMac
        ? macStorage.slice(0, 2)
        : phoneStorage.slice(0, 2),
    memory: isMac ? macMemory.slice(0, 2) : undefined,
    images,
    description: baseDescription(
      product.name!,
      product.description!,
      product.image!.replace("/assets/products/", "")
    ),
    specs: isMac
      ? macSpecs("Apple M3")
      : isAccessory
        ? [
            {
              label: "Chip",
              key: "chip",
              content: "Apple H1 / H2",
            },
            {
              label: "Connectivity",
              key: "connectivity",
              content: "Bluetooth",
            },
            {
              label: "Warranty",
              key: "warranty",
              content: "1-year limited warranty",
            },
          ]
        : phoneSpecs("A16 Bionic"),
    ...override,
  };

  if (detail.colors) {
    detail.colors = detail.colors.map((color) => {
      const colorWithImage = color as ProductColorType;
      return {
        ...colorWithImage,
        image:
          colorWithImage.image ||
          detail.images?.[colorWithImage.lowercase!]?.[0] ||
          product.image,
      };
    }) as ProductDetailType["colors"];
  }

  return detail;
}

export const mockProductDetails: ProductDetailType[] = mockProducts.map(
  buildDetailFromProduct
);

export const mockProductDetailsById: Record<string, ProductDetailType> =
  Object.fromEntries(
    mockProductDetails.map((detail) => [detail._id!, detail])
  );
