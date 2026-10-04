import { CheckoutInformationType } from "@/models/orderModel";
import { ResponseBEType } from "@/models/common";
import { createId, getMockDb, updateMockDb } from "@/mocks/db";
import { mockDelay } from "@/mocks/delay";

const asAxios = <T>(data: T) => ({ data });

const orderService = {
  async fetchOrderByCode(args: {
    params: { code: string; email: string };
  }): Promise<ResponseBEType<CheckoutInformationType>> {
    await mockDelay();
    const query = args.params;
    const order = getMockDb().orders.find(
      (item) => item._id === query.code && item.email === query.email
    );
    if (!order) {
      return asAxios("No order existed in database") as any;
    }
    return asAxios(order) as any;
  },

  async createOrder(values): Promise<ResponseBEType<CheckoutInformationType>> {
    await mockDelay();
    const order: CheckoutInformationType = {
      ...values,
      _id: createId("order"),
      status: values.status || "Ordered",
      date: values.date?.length
        ? values.date
        : [{ id: "dateOrder", dateString: new Date().toISOString() }],
    };
    updateMockDb((db) => {
      db.orders.unshift(order);
    });
    return asAxios({
      status: "success",
      data: "Order created successfully",
    }) as any;
  },

  async fetchOrdersByAccountId(
    accountID: string
  ): Promise<ResponseBEType<CheckoutInformationType[]>> {
    await mockDelay();
    const orders = getMockDb().orders.filter(
      (item) => item.accountID === accountID
    );
    return asAxios(orders) as any;
  },

  async cancelOrderById(id: string): Promise<ResponseBEType<string>> {
    await mockDelay();
    let message = "";
    let status: "success" | "error" = "error";

    updateMockDb((db) => {
      const order = db.orders.find((item) => item._id === id);
      if (!order) {
        message = "Order not found";
        return;
      }
      order.status = "Cancelled";
      order.date = [
        ...(order.date || []),
        { id: "dateCancelled", dateString: new Date().toISOString() },
      ];
      message = "Order cancelled";
      status = "success";
    });

    return { status, data: message };
  },
};

export default orderService;
