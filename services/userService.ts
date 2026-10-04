import {
  FieldProfilePasswordType,
  FieldProfileInformationType,
  ResponseBEType,
} from "@/models/common";
import {
  UserType,
  UserAddressType,
  RegisterAccountType,
  ForgotPasswordAccountType,
} from "@/models/userModel";
import { createId, getMockDb, updateMockDb } from "@/mocks/db";
import { mockDelay } from "@/mocks/delay";

const ok = <T>(data: T): ResponseBEType<T> => ({ status: "success", data });
const err = <T>(data: T): ResponseBEType<T> => ({ status: "error", data });

const userService = {
  async signIn(values: UserType): Promise<ResponseBEType<UserType>> {
    await mockDelay();
    const user = getMockDb().users.find(
      (item) =>
        item.username === values.username && item.password === values.password
    );
    if (!user) return err("Username or password is incorrect" as any);
    if (!user.statusVerify)
      return err("Please verify your email before signing in" as any);
    return ok({ ...user, remember: values.remember, password: undefined });
  },

  async sessionSignIn(token: string): Promise<ResponseBEType<UserType>> {
    await mockDelay();
    const user = getMockDb().users.find((item) => item.token === token);
    if (!user) return err(null as any);
    return ok({ ...user, password: undefined });
  },

  async verifyUserAccount(values: {
    emailVerifyToken: string;
  }): Promise<ResponseBEType<RegisterAccountType>> {
    await mockDelay();
    let message = "";
    let status: "success" | "error" = "error";

    updateMockDb((db) => {
      const user = db.users.find(
        (item) => item.emailVerifyToken === values.emailVerifyToken
      );
      if (!user) {
        message = "Verification token is invalid";
        return;
      }
      if (
        user.verifyTokenExpireDate &&
        new Date(user.verifyTokenExpireDate).getTime() < Date.now()
      ) {
        message = "Verification token has expired";
        return;
      }
      user.statusVerify = true;
      user.emailVerifyToken = undefined;
      user.verifyTokenExpireDate = undefined;
      message = "Your account has been verified";
      status = "success";
    });

    return { status, data: message as any };
  },

  async sendEmailResetPassword(
    values: ForgotPasswordAccountType
  ): Promise<ResponseBEType<ForgotPasswordAccountType>> {
    await mockDelay();
    let message = "";
    let status: "success" | "error" = "error";

    updateMockDb((db) => {
      const user = db.users.find((item) => item.email === values.email);
      if (!user) {
        message = "No account found with this email";
        return;
      }
      if (!user.statusVerify) {
        message = "Please verify your account first";
        return;
      }
      user.emailVerifyToken = `reset-${createId("tok")}`;
      user.verifyTokenExpireDate = new Date(
        Date.now() + 60 * 60 * 1000
      ).toISOString();
      message = `Password reset ready. Use token: ${user.emailVerifyToken}`;
      status = "success";
    });

    return { status, data: message as any };
  },

  async resetPassword(
    values: ForgotPasswordAccountType
  ): Promise<ResponseBEType<ForgotPasswordAccountType>> {
    await mockDelay();
    let message = "";
    let status: "success" | "error" = "error";

    updateMockDb((db) => {
      const user = db.users.find(
        (item) => item.emailVerifyToken === values.emailVerifyToken
      );
      if (!user) {
        message = "Reset token is invalid";
        return;
      }
      if (
        user.verifyTokenExpireDate &&
        new Date(user.verifyTokenExpireDate).getTime() < Date.now()
      ) {
        message = "Reset token has expired";
        return;
      }
      user.password = values.password;
      user.emailVerifyToken = undefined;
      user.verifyTokenExpireDate = undefined;
      message = "Password updated successfully";
      status = "success";
    });

    return { status, data: message as any };
  },

  async createUserAccount(
    values: RegisterAccountType
  ): Promise<ResponseBEType<RegisterAccountType>> {
    await mockDelay();
    const db = getMockDb();
    const exists = db.users.some(
      (item) =>
        item.username === values.username || item.email === values.email
    );
    if (exists) return err("Username or email already exists" as any);

    const verifyToken = `verify-${createId("tok")}`;
    updateMockDb((state) => {
      state.users.push({
        _id: createId("user"),
        username: values.username,
        password: values.password,
        email: values.email,
        name: values.name,
        phone: values.phone,
        address: [],
        token: createId("token"),
        statusVerify: false,
        emailVerifyToken: verifyToken,
        verifyTokenExpireDate: new Date(
          Date.now() + 60 * 60 * 1000
        ).toISOString(),
      });
    });

    return ok(
      `Account created. Verify with token: ${verifyToken}` as any
    );
  },

  async updateInformation(
    values: FieldProfileInformationType
  ): Promise<ResponseBEType<string>> {
    await mockDelay();
    let message = "";
    let status: "success" | "error" = "error";

    updateMockDb((db) => {
      const user = db.users.find((item) => item._id === values._id);
      if (!user) {
        message = "User not found";
        return;
      }
      user.name = values.name ?? user.name;
      user.username = values.username ?? user.username;
      user.phone = values.phone ?? user.phone;
      message = "Information updated";
      status = "success";
    });

    return { status, data: message };
  },

  async updatePassword(
    values: FieldProfilePasswordType
  ): Promise<ResponseBEType<string>> {
    await mockDelay();
    let message = "";
    let status: "success" | "error" = "error";

    updateMockDb((db) => {
      const user = db.users.find((item) => item._id === values._id);
      if (!user) {
        message = "User not found";
        return;
      }
      if (user.password !== values.old_password) {
        message = "Old password is incorrect";
        return;
      }
      if (values.password !== values.password_confirm) {
        message = "Password confirmation does not match";
        return;
      }
      user.password = values.password;
      message = "Password updated";
      status = "success";
    });

    return { status, data: message };
  },

  async createAddress(
    values: UserAddressType
  ): Promise<ResponseBEType<string>> {
    await mockDelay();
    let message = "";
    let status: "success" | "error" = "error";

    updateMockDb((db) => {
      const user = db.users.find((item) => item._id === values._id);
      if (!user) {
        message = "User not found";
        return;
      }
      const { _id, index, ...address } = values;
      user.address = [...(user.address || []), address];
      message = "Address created";
      status = "success";
    });

    return { status, data: message };
  },

  async updateAddress(
    values: UserAddressType
  ): Promise<ResponseBEType<string>> {
    await mockDelay();
    let message = "";
    let status: "success" | "error" = "error";

    updateMockDb((db) => {
      const user = db.users.find((item) => item._id === values._id);
      if (!user || values.index === undefined || !user.address?.[values.index]) {
        message = "Address not found";
        return;
      }
      const { _id, index, ...address } = values;
      user.address[index] = { ...user.address[index], ...address };
      message = "Address updated";
      status = "success";
    });

    return { status, data: message };
  },

  async deleteAddress(
    values: UserAddressType
  ): Promise<ResponseBEType<string>> {
    await mockDelay();
    let message = "";
    let status: "success" | "error" = "error";

    updateMockDb((db) => {
      const user = db.users.find((item) => item._id === values._id);
      if (!user || values.index === undefined || !user.address?.[values.index]) {
        message = "Address not found";
        return;
      }
      user.address.splice(values.index, 1);
      message = "Address deleted";
      status = "success";
    });

    return { status, data: message };
  },
};

export default userService;
