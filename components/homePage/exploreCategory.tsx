"use client";

import { CategoryType } from "@/models/productModel";
import { Carousel, Spin, Typography } from "antd";
import { CategoryCard } from "./common";

export const HomepageExploreCategory = ({
  categoryList,
}: {
  categoryList: {
    data: CategoryType[];
    loading: any;
  };
}) => {
  return (
    <>
      <Typography.Paragraph className="text-center" style={{ marginBottom: 0 }}>
        <span className="!font-sf_pro !text-3xl lg:!text-4xl !font-semibold !text-black">
          Explore Categories
        </span>
      </Typography.Paragraph>
      <Typography.Paragraph
        className="text-center"
        style={{ marginBottom: 0, marginTop: 16 }}
      >
        <span className="!font-sf_pro_text_light !text-lg lg:!text-xl !text-neutral-600">
          Discover diverse categories for a personalized shopping experience
        </span>
      </Typography.Paragraph>
      <Spin spinning={categoryList.loading}>
        <div className="my-10 block h-fit w-full lg:hidden">
          <Carousel draggable>
            {categoryList.data.map((item: CategoryType, index) => (
              <div key={index} className="px-1">
                <CategoryCard label={item.name} src={`${item.image}`} />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="hidden h-fit w-full lg:block">
          <div className="mx-auto mt-10 grid h-fit w-full grid-cols-3 gap-6 xl:gap-10">
            {categoryList.data.map((item: CategoryType, index) => (
              <CategoryCard
                key={index}
                label={item.name}
                src={`${item.image}`}
              />
            ))}
          </div>
        </div>
      </Spin>
    </>
  );
};
