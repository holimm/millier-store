"use client";

import { CustomText } from "@/components/homePage/common";
import { ProductDetailType } from "@/models/productDetailModel";
import { isEmpty } from "lodash";

export default function SpecificationTab({
  checkProductExist,
  productDetail,
}: {
  checkProductExist: boolean;
  productDetail: ProductDetailType;
  productCode?: string;
}) {
  const specs = productDetail?.specs || [];

  if (!checkProductExist || isEmpty(specs)) {
    return (
      <div className="mx-auto max-w-3xl py-16 text-center">
        <CustomText
          type="paragraph"
          extraClass="!text-neutral-500 !text-base lg:!text-lg"
        >
          No specifications available for this product.
        </CustomText>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="mb-8 text-center lg:mb-10">
        <CustomText
          type="paragraph"
          extraClass="!text-black !text-2xl lg:!text-3xl !font-semibold"
        >
          Tech Specs
        </CustomText>
        {productDetail.name && (
          <CustomText
            type="paragraph"
            extraClass="!text-neutral-500 !text-base lg:!text-lg"
            topClass="mt-2"
          >
            {productDetail.name}
          </CustomText>
        )}
      </div>

      <dl className="divide-y divide-neutral-200 border-y border-neutral-200">
        {specs.map((item, index) => (
          <div
            key={item.key || index}
            className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-[11rem_1fr] sm:gap-8 sm:py-6 lg:grid-cols-[13rem_1fr]"
          >
            <dt>
              <CustomText
                type="paragraph"
                extraClass="!text-neutral-500 !text-sm lg:!text-base !font-medium !tracking-wide"
              >
                {item.label}
              </CustomText>
            </dt>
            <dd>
              <CustomText
                type="paragraph"
                extraClass="!text-black !text-base lg:!text-lg !font-sf_pro_text_light"
              >
                <div
                  dangerouslySetInnerHTML={{
                    __html: item.content,
                  }}
                />
              </CustomText>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
