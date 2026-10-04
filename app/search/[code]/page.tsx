"use client";

import { Empty, Spin, Typography } from "antd";
import { isEmpty } from "lodash";
import { useEffect } from "react";
import { NumberToDollarFormat } from "@/helpers/commonHelpers";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProductsSearch } from "@/redux/entities/products";
import { getProductsSearch } from "@/redux/selectors/products";
import { useParams } from "next/navigation";
import { RenderProductCard } from "@/components/common";

export default function Search() {
  const dispatch = useAppDispatch();
  const params = useParams<{ code: string }>();
  const searchCode = params?.code?.toString();
  const productsList = useAppSelector(getProductsSearch);

  useEffect(() => {
    if (!isEmpty(searchCode)) {
      dispatch(fetchProductsSearch({ params: { name: searchCode } }));
    }
  }, [searchCode, dispatch]);

  const checkExist = !isEmpty(productsList.data);

  return (
    <main className={`h-fit w-full`}>
      <div className="h-fit w-full">
        <div className="h-fit w-3/4 mx-auto py-10 lg:py-20">
          <div className="my-20 first:my-0">
            <Typography.Title
              className="text-center"
              style={{ fontSize: "inherit" }}
            >
              <span className="!font-sf_pro !text-2xl lg:!text-3xl">
                {productsList.data.length} results found
              </span>
            </Typography.Title>
            <Spin spinning={productsList.loading}>
              {checkExist && (
                <>
                  <div className="h-full w-full lg:pb-6 grid grid-cols-1 lg:grid-cols-4 gap-10">
                    {productsList.data.map((item: any, index: number) => (
                      <div key={index}>
                        <RenderProductCard
                          code={item._id}
                          name={item.name}
                          description={item.description}
                          price={`From ${NumberToDollarFormat(
                            item.lowest_price
                          )}`}
                          srcImage={item.image}
                        />
                      </div>
                    ))}
                  </div>
                </>
              )}
              {!checkExist && <Empty className="mt-20" />}
            </Spin>
          </div>
        </div>
      </div>
    </main>
  );
}
