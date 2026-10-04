import { ResponseBEType } from "@/models/common";
import { ProductDetailType } from "@/models/productDetailModel";
import { CategoryType, ProductsType } from "@/models/productModel";
import { mockCategories } from "@/mocks/data/categories";
import { mockProducts } from "@/mocks/data/products";
import { mockDelay } from "@/mocks/delay";

/** Matches previous axios response shape: `{ data: body }`. */
const asAxios = <T>(data: T) => ({ data });

const productService = {
  async getAll(args: {
    params?: { name?: string; category?: string };
  }): Promise<ResponseBEType<ProductDetailType>> {
    await mockDelay();
    const name = args?.params?.name?.toLowerCase();
    const category = args?.params?.category;
    // Keys that should not expand to longer siblings (e.g. iphone-15 vs iphone-15-pro)
    const exactOnlyKeys = new Set(["iphone-15"]);
    const data = mockProducts.filter((product) => {
      const matchCategory = category ? product.category === category : true;
      if (!name) return matchCategory;
      const productKey = product.key?.toLowerCase() || "";
      const productName = product.name?.toLowerCase() || "";
      const matchName = exactOnlyKeys.has(name)
        ? productKey === name
        : productKey === name ||
          productKey.startsWith(`${name}-`) ||
          productName === name ||
          (name.includes(" ") && productName.includes(name));
      return matchCategory && matchName;
    });
    return asAxios(data) as any;
  },

  async getAllSearch(args: {
    params?: { name: string };
  }): Promise<ResponseBEType<ProductDetailType>> {
    await mockDelay();
    const name = args?.params?.name?.toLowerCase() || "";
    const data = mockProducts.filter(
      (product) =>
        product.name?.toLowerCase().includes(name) ||
        product.key?.toLowerCase().includes(name) ||
        product.description?.toLowerCase().includes(name)
    );
    return asAxios(data) as any;
  },

  async getAllCategory(): Promise<ResponseBEType<CategoryType>> {
    await mockDelay();
    return asAxios(mockCategories) as any;
  },
};

export default productService;
