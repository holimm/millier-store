import { ResponseBEType } from "@/models/common";
import {
  GoogleLoginCodeResponseType,
  UserType,
} from "@/models/userModel";
import { createId, getMockDb, updateMockDb } from "@/mocks/db";
import { mockDelay } from "@/mocks/delay";

const MOCK_GOOGLE_PROFILE = {
  email: "google.user@millier.store",
  name: "Alex Rivera",
  given_name: "Alex",
  family_name: "Rivera",
  picture: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  verified_email: true,
  id: "mock-google-user-1",
};

const googleLoginService = {
  async fetchUserInfoLoginGoogle(
    _values: GoogleLoginCodeResponseType
  ): Promise<ResponseBEType<UserType>> {
    await mockDelay();
    const existing = getMockDb().users.find(
      (item) => item.email === MOCK_GOOGLE_PROFILE.email
    );

    if (existing) {
      return {
        status: "success",
        data: { ...existing, password: undefined },
      };
    }

    const user: UserType = {
      _id: createId("user"),
      email: MOCK_GOOGLE_PROFILE.email,
      name: MOCK_GOOGLE_PROFILE.name,
      username: "",
      phone: "",
      password: "",
      address: [],
      token: createId("token"),
      statusVerify: true,
    };

    updateMockDb((db) => {
      db.users.push(user);
    });

    return { status: "success", data: user };
  },
};

export default googleLoginService;
