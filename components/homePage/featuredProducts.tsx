"use client";

import { RenderProductCard } from "@/components/common";
import {
  NumberToDollarFormat,
  getTotalCarouselSlide,
} from "@/helpers/commonHelpers";
import { ProductDetailType } from "@/models/productDetailModel";
import { ProductsType } from "@/models/productModel";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button, Carousel, Grid, Spin, Typography } from "antd";
import { CarouselRef } from "antd/es/carousel";
import { isEmpty } from "lodash";
import { useRef, useState } from "react";

const { useBreakpoint } = Grid;

export const HomepageFeaturedProducts = ({
  productsList,
}: {
  productsList: {
    data: ProductDetailType;
    loading: any;
  };
}) => {
  const carouselRef = useRef<CarouselRef>(null);
  const screenSize = useBreakpoint();
  const carouselSlideToShow = getTotalCarouselSlide(screenSize);
  const [currentCarouselSlide, setCurrentCarouselSlide] = useState<number>(0);
  const productListData: ProductsType[] = productsList.data["iPhone"];
  const checkProductsExist = !isEmpty(productListData);
  const checkDisableButton = () => {
    if (checkProductsExist) {
      if (carouselSlideToShow === productListData.length) return true;
      if (currentCarouselSlide === productListData.length - carouselSlideToShow)
        return true;
    }
  };

  return (
    <>
      <Typography.Paragraph className="text-center" style={{ marginBottom: 0 }}>
        <span className="!font-sf_pro !text-3xl lg:!text-4xl !font-semibold !text-black">
          Featured Products
        </span>
      </Typography.Paragraph>
      <Typography.Paragraph
        className="text-center"
        style={{ marginBottom: 0, marginTop: 16 }}
      >
        <span className="!font-sf_pro_text_light !text-lg lg:!text-xl !text-neutral-600">
          Discover our latest collection of high-quality products
        </span>
      </Typography.Paragraph>
      <Spin spinning={productsList.loading}>
        <div className="h-fit w-full my-10">
          <Carousel
            ref={carouselRef}
            slidesToShow={carouselSlideToShow || 2}
            afterChange={(currentSlide: number) =>
              setCurrentCarouselSlide(currentSlide)
            }
            infinite={false}
            waitForAnimate
          >
            {checkProductsExist &&
              productListData.map((item: ProductsType, index: number) => (
                <div key={item._id || index}>
                  <RenderProductCard
                    code={item._id}
                    name={item.name}
                    description={item.description}
                    price={`From ${NumberToDollarFormat(item.lowest_price)}`}
                    srcImage={item.image}
                  />
                </div>
              ))}
          </Carousel>
          <div className="flex gap-5 justify-end h-fit w-full">
            <Button
              type="text"
              size="large"
              onClick={() => {
                carouselRef.current.prev();
              }}
              disabled={currentCarouselSlide === 0 || currentCarouselSlide < 0}
              icon={<LeftOutlined />}
            ></Button>
            <Button
              type="text"
              size="large"
              onClick={() => {
                carouselRef.current.next();
              }}
              disabled={checkDisableButton()}
              icon={<RightOutlined />}
            ></Button>
          </div>
        </div>
      </Spin>
    </>
  );
};
