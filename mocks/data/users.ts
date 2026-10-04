import { UserType } from "@/models/userModel";

/** Demo account: username `demo` / password `demo1234` */
export const seedUsers: UserType[] = [
  {
    _id: "user-demo",
    username: "demo",
    password: "demo1234",
    email: "demo@millier.store",
    name: "Demo Customer",
    phone: "+1 415 555 0134",
    token: "token-demo-customer",
    statusVerify: true,
    address: [
      {
        type: "Home",
        phone: "+1 415 555 0134",
        street: "128 Market Street",
        district: "Financial District",
        ward: "Suite 400",
        city: "San Francisco",
      },
      {
        type: "Office",
        phone: "+1 415 555 0199",
        street: "500 Howard Street",
        district: "SOMA",
        ward: "Floor 8",
        city: "San Francisco",
      },
    ],
  },
  {
    _id: "user-jane",
    username: "jane",
    password: "jane1234",
    email: "jane.mitchell@example.com",
    name: "Jane Mitchell",
    phone: "+1 646 555 0172",
    token: "token-jane-mitchell",
    statusVerify: true,
    address: [
      {
        type: "Home",
        phone: "+1 646 555 0172",
        street: "88 Lexington Avenue",
        district: "Gramercy",
        ward: "Apt 12B",
        city: "New York",
      },
    ],
  },
  {
    _id: "user-pending",
    username: "pending",
    password: "pending1234",
    email: "pending@millier.store",
    name: "Pending User",
    phone: "+1 312 555 0110",
    token: "token-pending-user",
    statusVerify: false,
    emailVerifyToken: "verify-token-pending",
    verifyTokenExpireDate: "2099-01-01T00:00:00.000Z",
    address: [],
  },
];
