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

export default function CategoryIphone() {
  const dispatch = useAppDispatch();
  const productsList = useAppSelector(getProducts);
  const [paramsSeries, setParamsSeries] = useState<ParamsSeriesType>({
    category: "iPhone",
  });

  useEffect(() => {
    dispatch(fetchProducts({ params: paramsSeries }));
  }, [paramsSeries]);

  const onChangeProductSeries = (key: string) => {
    if (key === "All") setParamsSeries({ category: "iPhone" });
    else setParamsSeries({ category: "iPhone", name: key });
  };

  return (
    <main className="h-fit w-full">
      <div className="h-fit w-full">
        <div className="mx-auto h-fit w-11/12 pb-10 pt-10 text-3xl lg:w-3/4 lg:pb-16">
          <CategoryVideoPlayer
            extraClass="rounded-xl"
            urlVideo="/assets/videos/iphone.mp4"
          />
          <CategoryProducts
            title="iPhone"
            productsList={productsList}
            productSeries={[
              { key: "All", label: "All" },
              { key: "iphone-15-pro", label: "iPhone 15 Pro" },
              { key: "iphone-15-plus", label: "iPhone 15 Plus" },
              { key: "iphone-15", label: "iPhone 15" },
            ]}
            onChangeProductSeries={onChangeProductSeries}
            exploreMore={false}
          />

          <CategoryFeatureGrid
            title="What makes an iPhone an iPhone?"
            subtitle="Design, camera, performance, and privacy — built to work together."
            features={[
              {
                title: "Beautiful design",
                description:
                  "A refined aluminum and glass design with color that feels personal from the first look.",
                image: "/assets/img/category/iphone/design.jpg",
              },
              {
                title: "Pro-level camera",
                description:
                  "Capture detail, color, and night shots with an advanced camera system ready for every moment.",
                image: "/assets/img/category/iphone/camera.jpg",
              },
              {
                title: "Serious performance",
                description:
                  "Apple silicon keeps everything fast — from everyday apps to immersive games and creative work.",
                image: "/assets/img/category/iphone/chip.jpg",
              },
              {
                title: "Privacy by design",
                description:
                  "Powerful controls help you decide what you share — and what stays on your iPhone.",
                image: "/assets/img/category/iphone/privacy.jpg",
              },
              {
                title: "Safety features",
                description:
                  "Emergency tools and helpful alerts are there when you need them most.",
                image: "/assets/img/category/iphone/safety.jpg",
              },
              {
                title: "Siri, always ready",
                description:
                  "Ask for directions, set reminders, or control your day — hands-free and right when you need it.",
                image: "/assets/img/category/iphone/siri.jpg",
              },
            ]}
          />
        </div>

        <div className="h-fit w-full bg-neutral-50">
          <div className="mx-auto h-fit w-11/12 lg:w-3/4">
            <CategoryHighlightRows
              title="Go further with iPhone"
              items={[
                {
                  title: "Pair with AirPods",
                  description:
                    "One-tap setup, Spatial Audio, and seamless switching across your Apple devices.",
                  image: "/assets/img/category/accessories/pro-hero.jpg",
                  href: "/accessories",
                },
                {
                  title: "Create on Mac",
                  description:
                    "Shoot on iPhone, finish on Mac. Continuity keeps your photos, files, and ideas flowing.",
                  image: "/assets/img/category/mac/continuity.jpg",
                  href: "/mac",
                },
              ]}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
