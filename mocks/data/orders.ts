import { CheckoutInformationType } from "@/models/orderModel";
import { IPHONE_15_PRO_MAX_ID } from "./products";

export const seedOrders: CheckoutInformationType[] = [
  {
    _id: "order-1001",
    accountID: "user-demo",
    name: "Demo Customer",
    email: "demo@millier.store",
    method: "Credit Card",
    status: "Delivering",
    note: "Please leave with the concierge.",
    total: 1299,
    address: {
      type: "Home",
      phone: "+1 415 555 0134",
      street: "128 Market Street",
      district: "Financial District",
      ward: "Suite 400",
      city: "San Francisco",
    },
    product: [
      {
        name: "iPhone 15 Pro Max",
        quantity: 1,
        price: 1299,
        storage: { capacity: 256, unit: "GB", price: 100 },
        color: {
          label: "Natural Titanium",
          lowercase: "natural",
          color: "#C2BCB2",
          image: "/assets/products/iphone/15-pro-max.jpg",
        },
      },
    ],
    date: [
      { id: "dateOrder", dateString: "2024-09-20T10:15:00.000Z" },
      { id: "dateDelivering", dateString: "2024-09-21T08:00:00.000Z" },
    ],
  },
  {
    _id: "order-1002",
    accountID: "user-demo",
    name: "Demo Customer",
    email: "demo@millier.store",
    method: "Cash on Delivery",
    status: "Delivered",
    note: "",
    total: 249,
    address: {
      type: "Office",
      phone: "+1 415 555 0199",
      street: "500 Howard Street",
      district: "SOMA",
      ward: "Floor 8",
      city: "San Francisco",
    },
    product: [
      {
        name: "AirPods Pro (2nd generation)",
        quantity: 1,
        price: 249,
        color: {
          label: "White",
          lowercase: "white",
          color: "#FFFFFF",
          image: "/assets/products/airpods/pro-2.jpg",
        },
      },
    ],
    date: [
      { id: "dateOrder", dateString: "2024-07-12T14:20:00.000Z" },
      { id: "dateDelivering", dateString: "2024-07-13T09:00:00.000Z" },
      { id: "dateDelivered", dateString: "2024-07-15T16:45:00.000Z" },
    ],
  },
  {
    _id: "order-1003",
    accountID: "user-jane",
    name: "Jane Mitchell",
    email: "jane.mitchell@example.com",
    method: "Credit Card",
    status: "Ordered",
    note: "Gift wrap if available.",
    total: 1299,
    address: {
      type: "Home",
      phone: "+1 646 555 0172",
      street: "88 Lexington Avenue",
      district: "Gramercy",
      ward: "Apt 12B",
      city: "New York",
    },
    product: [
      {
        name: "MacBook Air 13-inch M3",
        quantity: 1,
        price: 1299,
        storage: { capacity: 512, unit: "GB", price: 200 },
        memory: { capacity: 16, unit: "GB", price: 200 },
        color: {
          label: "Midnight",
          lowercase: "midnight",
          color: "#2C2C2E",
          image: "/assets/products/mac/air-midnight.jpg",
        },
      },
    ],
    date: [{ id: "dateOrder", dateString: "2024-10-01T11:05:00.000Z" }],
  },
];

/** Keep a named export for product id references used when seeding cart examples. */
export const featuredOrderProductId = IPHONE_15_PRO_MAX_ID;
