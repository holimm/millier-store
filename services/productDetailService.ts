import { ResponseBEType } from "@/models/common";
import { ProductDetailType } from "@/models/productDetailModel";
import { mockProductDetailsById } from "@/mocks/data/productDetails";
import { mockDelay } from "@/mocks/delay";

const productDetailService = {
  async getOne(code: string): Promise<ResponseBEType<ProductDetailType>> {
    await mockDelay();
    const detail = mockProductDetailsById[code];
    if (!detail) {
      return {
        data: {
          status: "Unable to find matching document",
          data: null,
        },
      } as any;
    }
    // Prior shape: axios response whose `.data` is `{ status, data }`
    return {
      data: {
        status: "success",
        data: detail,
      },
    } as any;
  },
};

export default productDetailService;
