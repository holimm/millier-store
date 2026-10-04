"use client";

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchProducts } from "@/redux/entities/products";
import { getProducts } from "@/redux/selectors/products";
import { CategoryProducts } from "@/components/products/categoryProducts";
import { CategoryVideoPlayer } from "@/components/videoPlayer";
import {
  CategoryFeatureGrid,
  CategoryHighlightRows,
} from "@/components/category/categoryFeatures";

interface ParamsSeriesType {
  category?: string;
  name?: string;
}

export default function CategoryMac() {
  const dispatch = useAppDispatch();
  const productsList = useAppSelector(getProducts);
  const [paramsSeries, setParamsSeries] = useState<ParamsSeriesType>({
    category: "Mac",
  });

  useEffect(() => {
    dispatch(fetchProducts({ params: paramsSeries }));
  }, [paramsSeries]);

  const onChangeProductSeries = (key: string) => {
    if (key === "All") setParamsSeries({ category: "Mac" });
    else setParamsSeries({ category: "Mac", name: key });
  };

  return (
    <main className="h-fit w-full">
      <div className="h-fit w-full">
        <div className="mx-auto h-fit w-11/12 pb-10 pt-10 text-3xl lg:w-3/4 lg:pb-16">
          <CategoryVideoPlayer
            extraClass="rounded-xl"
            urlVideo="/assets/videos/mac.mp4"
          />
          <CategoryProducts
            title="Mac"
            productsList={productsList}
            productSeries={[
              { key: "All", label: "All" },
              { key: "macbook-air", label: "MacBook Air M3" },
              { key: "macbook-pro", label: "MacBook Pro M3" },
              { key: "mac-mini", label: "Mac mini M2" },
            ]}
            onChangeProductSeries={onChangeProductSeries}
            exploreMore={false}
          />

          <CategoryFeatureGrid
            title="Get to know Mac."
            subtitle="Thin, powerful, and ready for whatever you do next."
            features={[
              {
                title: "Strikingly thin design",
                description:
                  "A portable aluminum design that feels effortless to carry — and beautiful on any desk.",
                image: "/assets/img/category/mac/design.png",
              },
              {
                title: "Brilliant display",
                description:
                  "Liquid Retina visuals with sharp text, vivid color, and room to create.",
                image: "/assets/img/category/mac/display.jpg",
              },
              {
                title: "Performance that lasts",
                description:
                  "Apple silicon delivers speed for multitasking, editing, and all-day battery life.",
                image: "/assets/img/category/mac/performance.jpg",
              },
              {
                title: "Mac and iPhone",
                description:
                  "Answer calls, mirror your iPhone, and move work between devices without friction.",
                image: "/assets/img/category/mac/continuity.jpg",
              },
              {
                title: "Stay connected",
                description:
                  "Messages and calls flow across your devices so you never miss what matters.",
                image: "/assets/img/category/mac/calls.jpg",
              },
              {
                title: "Expand your setup",
                description:
                  "Drive external displays and build a workspace that matches how you work.",
                image: "/assets/img/category/mac/displays.jpg",
              },
            ]}
          />
        </div>

        <div className="h-fit w-full bg-neutral-50">
          <div className="mx-auto h-fit w-11/12 lg:w-3/4">
            <CategoryHighlightRows
              title="Complete your Mac"
              items={[
                {
                  title: "MagSafe charging",
                  description:
                    "Snap on for power with a magnetic connection designed for everyday use.",
                  image: "/assets/img/category/mac/magsafe.jpg",
                },
                {
                  title: "Shop AirPods",
                  description:
                    "Instant pairing, Spatial Audio, and automatic switching with your Mac.",
                  image: "/assets/img/category/accessories/hero.jpg",
                  href: "/accessories",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
