"use client";

import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { isEmpty } from "lodash";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductHomepageBannerType } from "@/models/homepage";
import { NavigateButton } from "@/components/homePage/common";

export const ProductHomepageBanner = ({
  productData,
  isFirstTime,
  onChangeHomepageBanner,
}: {
  productData: ProductHomepageBannerType;
  isFirstTime: boolean;
  onChangeHomepageBanner: (type: string) => void;
}) => {
  const [productImage, setProductImage] = useState(
    productData?.src_1 ?? ""
  );
  const [entered, setEntered] = useState(!isFirstTime);

  useEffect(() => {
    setProductImage(productData?.src_1 ?? "");
  }, [productData?.src_1]);

  useEffect(() => {
    if (!isFirstTime) {
      setEntered(true);
      return;
    }
    const id = window.setTimeout(() => setEntered(true), 50);
    return () => window.clearTimeout(id);
  }, [isFirstTime, productData?.src_1, productData?.text_2]);

  if (isEmpty(productData)) return null;

  return (
    <div
      className="h-fit w-full pt-20 pb-10 lg:pt-20 lg:pb-20 bg-cover bg-center bg-no-repeat inline-block"
      style={{
        backgroundImage:
          "linear-gradient(180deg, #f5f5f7 0%, #e8e8ed 45%, #f5f5f7 100%)",
      }}
    >
      <div className="h-[20em] lg:h-[32em] w-full flex justify-center items-center overflow-x-hidden">
        <NavigateButton
          buttonIcon={
            <LeftCircleOutlined
              style={{ fontSize: "2em", color: "#000000" }}
            />
          }
          buttonType="prev"
          onChangeHomepageBanner={onChangeHomepageBanner}
        />
        <div
          className="h-fit w-fit"
          style={{
            writingMode: "vertical-rl",
            transform: entered
              ? "rotate(180deg)"
              : "translateY(-100vh) rotate(180deg)",
            transition: "transform 1s ease-in-out",
          }}
        >
          <span className="text-4xl lg:text-7xl text-black font-sf_pro_rounded">
            {productData.text_1}
          </span>
        </div>
        <div
          className="h-fit w-fit"
          style={{
            writingMode: "vertical-rl",
            transform: entered
              ? "rotate(180deg)"
              : "translateY(-100vh) rotate(180deg)",
            transition: "transform 1.2s ease-in-out",
          }}
        >
          <span className="text-4xl lg:text-7xl text-black font-sf_pro_rounded">
            {productData.text_2}
          </span>
        </div>
        <img
          className="h-[20em] lg:h-[32em] shadow-xl"
          src={productImage}
          alt={`${productData.text_1 ?? ""} ${productData.text_2 ?? ""}`}
          style={{
            transform: entered ? "translateX(0)" : "translateX(100vw)",
            transition: "transform 1s ease-in-out",
          }}
          onMouseEnter={() => {
            if (productData.src_2) setProductImage(productData.src_2);
          }}
          onMouseLeave={() => {
            if (productData.src_1) setProductImage(productData.src_1);
          }}
        />
        <NavigateButton
          buttonIcon={
            <RightCircleOutlined
              style={{ fontSize: "2em", color: "#000000" }}
            />
          }
          buttonType="next"
          onChangeHomepageBanner={onChangeHomepageBanner}
        />
      </div>
      <div
        className="h-fit w-11/12 lg:w-2/5 mx-auto"
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 1s ease-in-out",
          transitionDelay: isFirstTime ? "0.2s" : "0s",
        }}
      >
        <p className="mt-10 text-black text-center font-sf_pro_text_light">
          {productData.description}
        </p>
      </div>
      <div
        className="h-20 w-fit mx-auto mt-10"
        style={{
          opacity: entered ? 1 : 0,
          transition: "opacity 1s ease-in-out",
          transitionDelay: isFirstTime ? "0.2s" : "0s",
        }}
      >
        <Link href={productData.linkHref ?? "/products"}>
          <button className="px-16 py-2 text-black border-[1px] border-black rounded-full hover:bg-white hover:border-white hover:shadow-xl transition-all duration-100">
            ORDER NOW
          </button>
        </Link>
      </div>
    </div>
  );
};
