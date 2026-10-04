"use client";

import { VideoPlayer } from "@/components/videoPlayer";
import { debounce } from "lodash";
import { CustomButton, CustomText } from "@/components/homePage/common";
import { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { getCategory, getProducts } from "@/redux/selectors/products";
import { fetchCategory, fetchProducts } from "@/redux/entities/products";
import { fetchBlogs } from "@/redux/entities/blogs/asyncThunk";
import { getBlogs } from "@/redux/selectors/blogs";
import { HomepageNewArrival } from "@/components/homePage/newArrival";
import { HomepageFeaturedProducts } from "@/components/homePage/featuredProducts";
import { HomepageExploreCategory } from "@/components/homePage/exploreCategory";
import { PickUs } from "@/components/homePage/pickUs";
import { HomepageBlogs } from "@/components/homePage/homepageBlogs";
import { ProductHomepageBanner } from "@/components/homePage/productHomepageBanner";
import {
  IPHONE_15_PLUS_ID,
  IPHONE_15_PRO_MAX_ID,
} from "@/mocks/data/products";
import Iphone15ProCutout from "@/assets/img/homepage/iphone15_cutout.png";
import Iphone15ProCutoutFront from "@/assets/img/homepage/iphone15_cutout_front.png";
import Iphone15Cutout from "@/assets/img/homepage/iphone15_2_cutout.png";
import Iphone15CutoutFront from "@/assets/img/homepage/iphone15_2_cutout_front.png";

const productHomepageData = [
  {
    text_1: "iPhone 15",
    text_2: "PRO MAX",
    src_1: Iphone15ProCutout.src,
    src_2: Iphone15ProCutoutFront.src,
    description: `The iPhone 15 Pro Max sets a new standard in smartphone
innovation. With its titanium design, powerful A17 Pro chip, and
advanced Pro camera system, it delivers a seamless user
experience. The device also offers impressive battery life and
USB-C connectivity, making it perfect for work or play.`,
    linkHref: `/products/${IPHONE_15_PRO_MAX_ID}`,
  },
  {
    text_1: "iPhone 15",
    text_2: "PLUS",
    src_1: Iphone15Cutout.src,
    src_2: Iphone15CutoutFront.src,
    description: `The iPhone 15 Plus offers cutting-edge technology and sleek design. With Dynamic Island, a 48MP Main camera, and powerful A16 Bionic performance, it's the perfect companion for your daily tasks and entertainment needs.`,
    linkHref: `/products/${IPHONE_15_PLUS_ID}`,
  },
];

export default function Home() {
  const dispatch = useAppDispatch();
  const [productHomepageImageIndex, setProductHomepageImageIndex] = useState(0);
  const [productHomepageImageIsFirst, setProductHomepageImageIsFirst] =
    useState(true);
  const productsList = useAppSelector(getProducts);
  const categoryList = useAppSelector(getCategory);
  const blogsList = useAppSelector(getBlogs);

  const debounceChangeHomepageBanner = useCallback(
    debounce((type: "prev" | "next") => {
      if (type === "prev") {
        if (productHomepageImageIndex !== 0)
          setProductHomepageImageIndex(productHomepageImageIndex - 1);
        else setProductHomepageImageIndex(productHomepageData.length - 1);
      }
      if (type === "next") {
        if (productHomepageImageIndex !== productHomepageData.length - 1)
          setProductHomepageImageIndex(productHomepageImageIndex + 1);
        else setProductHomepageImageIndex(0);
      }
      setProductHomepageImageIsFirst(false);
    }, 200),
    [productHomepageImageIndex]
  );

  const onChangeHomepageBanner = (type: "prev" | "next") => {
    debounceChangeHomepageBanner(type);
  };

  useEffect(() => {
    dispatch(fetchProducts({}));
    dispatch(fetchCategory());
    dispatch(fetchBlogs({}));
  }, [dispatch]);

  return (
    <main className={`h-fit w-full`}>
      <div className="h-fit w-full relative overflow-hidden">
        <ProductHomepageBanner
          productData={productHomepageData[productHomepageImageIndex]}
          isFirstTime={productHomepageImageIsFirst}
          onChangeHomepageBanner={onChangeHomepageBanner}
        />
        <div className="homepage-curtain" aria-hidden />
      </div>
      <div className="h-fit w-full">
        <div className="h-fit w-11/12 lg:w-3/4 mx-auto pt-10 lg:pt-24">
          <PickUs />
        </div>
        <div className="h-fit w-11/12 lg:w-3/4 mx-auto pt-10 lg:pt-0">
          <HomepageExploreCategory categoryList={categoryList} />
        </div>
        <div className="h-fit w-11/12 lg:w-3/4 mx-auto py-5 lg:py-20">
          <HomepageFeaturedProducts productsList={productsList} />
        </div>
        <div className="relative h-[20em] w-full overflow-hidden bg-black">
          <div className="absolute inset-0">
            <VideoPlayer urlVideo="/assets/videos/mac_advertise.mp4" />
          </div>
          <div className="absolute inset-0 z-10 bg-black/20 backdrop-blur-sm" />
          <div className="absolute inset-0 z-20 flex items-center justify-center p-2 lg:p-20">
            <div className="h-fit w-fit">
              <CustomText
                type="paragraph"
                extraClass="!text-xl lg:!text-3xl !font-sf_pro_rounded !text-white"
                topClass="text-center"
              >
                24/7 phone support, expert assistance for seamless
                resolutions.
              </CustomText>
              <CustomText
                type="paragraph"
                extraClass="!text-xl lg:!text-3xl !font-sf_pro_rounded !text-white"
                topClass="text-center"
              >
                Your satisfaction, our priority.
              </CustomText>
              <CustomButton extraClass="!mt-6">Contact Support</CustomButton>
            </div>
          </div>
        </div>
        <div className="h-fit w-11/12 lg:w-3/4 mx-auto pt-20 pb-0 lg:pb-10">
          <HomepageNewArrival productsList={productsList} />
        </div>
        <div className="h-fit w-11/12 lg:w-3/4 mx-auto pb-10">
          <HomepageBlogs blogsList={blogsList} />
        </div>
      </div>
    </main>
  );
}
