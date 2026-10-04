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

export default function CategoryAccessories() {
  const dispatch = useAppDispatch();
  const productsList = useAppSelector(getProducts);
  const [paramsSeries, setParamsSeries] = useState<ParamsSeriesType>({
    category: "Accessories",
  });

  useEffect(() => {
    dispatch(fetchProducts({ params: paramsSeries }));
  }, [paramsSeries]);

  const onChangeProductSeries = (key: string) => {
    if (key === "All") setParamsSeries({ category: "Accessories" });
    else setParamsSeries({ category: "Accessories", name: key });
  };

  return (
    <main className="h-fit w-full">
      <div className="h-fit w-full">
        <div className="mx-auto h-fit w-11/12 pb-10 pt-10 text-3xl lg:w-3/4 lg:pb-16">
          <CategoryVideoPlayer
            extraClass="rounded-xl"
            urlVideo="/assets/videos/accessories.mp4"
          />
          <CategoryProducts
            title="Accessories"
            productsList={productsList}
            productSeries={[
              { key: "All", label: "All" },
              { key: "airpods-3", label: "AirPods 3" },
              { key: "airpods-pro", label: "AirPods Pro" },
              { key: "airpods-max", label: "AirPods Max" },
            ]}
            onChangeProductSeries={onChangeProductSeries}
            exploreMore={false}
          />

          <CategoryFeatureGrid
            title="A magical connection to your devices."
            subtitle="Setup, sound, and switching — designed to feel effortless."
            features={[
              {
                title: "One-tap setup",
                description:
                  "Bring AirPods close to your iPhone and connect in seconds — no complicated pairing.",
                image: "/assets/img/category/accessories/pro-hero.jpg",
              },
              {
                title: "Active Noise Cancellation",
                description:
                  "Tune out the world when you need focus, then switch to Transparency when you need awareness.",
                image: "/assets/img/category/accessories/anc.jpg",
              },
              {
                title: "Hearing health",
                description:
                  "Thoughtful features help protect your hearing and make everyday listening clearer.",
                image: "/assets/img/category/accessories/hearing.jpg",
              },
              {
                title: "Immersive music",
                description:
                  "Spatial Audio and dynamic head tracking place sound all around you.",
                image: "/assets/img/category/accessories/music.jpg",
              },
              {
                title: "Made for movement",
                description:
                  "Stay locked in through workouts, commutes, and long days with a fit that stays put.",
                image: "/assets/img/category/accessories/fitness.png",
              },
              {
                title: "All-day listening",
                description:
                  "Powerful sound in a design that disappears into your day — from calls to playlists.",
                image: "/assets/img/category/accessories/hero.jpg",
              },
            ]}
          />
        </div>

        <div className="h-fit w-full bg-neutral-50">
          <div className="mx-auto h-fit w-11/12 lg:w-3/4">
            <CategoryHighlightRows
              title="Works beautifully with"
              items={[
                {
                  title: "iPhone",
                  description:
                    "Automatic switching, Siri, and Personalized Spatial Audio across your Apple devices.",
                  image: "/assets/img/category/iphone/design.jpg",
                  href: "/iphone",
                },
                {
                  title: "Mac",
                  description:
                    "Jump between calls, music, and meetings without re-pairing every time.",
                  image: "/assets/img/category/mac/design.png",
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
