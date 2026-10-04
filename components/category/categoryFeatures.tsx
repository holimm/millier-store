"use client";

import { CustomText } from "@/components/homePage/common";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export type CategoryFeature = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

function SliderArrows({
  canPrev,
  canNext,
  onPrev,
  onNext,
}: {
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="mt-6 flex justify-end gap-3">
      <button
        type="button"
        aria-label="Previous"
        disabled={!canPrev}
        onClick={onPrev}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e8ed] text-[#1d1d1f] transition-opacity hover:bg-[#d2d2d7] disabled:cursor-default disabled:opacity-30"
      >
        <LeftOutlined className="text-sm" />
      </button>
      <button
        type="button"
        aria-label="Next"
        disabled={!canNext}
        onClick={onNext}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e8e8ed] text-[#1d1d1f] transition-opacity hover:bg-[#d2d2d7] disabled:cursor-default disabled:opacity-30"
      >
        <RightOutlined className="text-sm" />
      </button>
    </div>
  );
}

function useFeatureSlider(itemCount: number) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(itemCount > 1);

  const updateArrows = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < maxScroll - 4);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener("scroll", updateArrows, { passive: true });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      window.removeEventListener("resize", updateArrows);
    };
  }, [itemCount]);

  const scrollByCard = (direction: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-feature-card]");
    const gap = 20;
    const amount = (card?.offsetWidth || el.clientWidth * 0.7) + gap;
    el.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return {
    scrollerRef,
    canPrev,
    canNext,
    scrollPrev: () => scrollByCard("prev"),
    scrollNext: () => scrollByCard("next"),
  };
}

export function CategoryFeatureGrid({
  title,
  subtitle,
  features,
}: {
  title: string;
  subtitle?: string;
  features: CategoryFeature[];
}) {
  const { scrollerRef, canPrev, canNext, scrollPrev, scrollNext } =
    useFeatureSlider(features.length);

  return (
    <section className="mx-auto w-full pt-12 lg:pt-20">
      <div className="mb-8 text-left lg:mb-10">
        <CustomText
          type="paragraph"
          extraClass="!text-black !text-3xl lg:!text-4xl !font-semibold"
        >
          {title}
        </CustomText>
        {subtitle && (
          <CustomText
            type="paragraph"
            extraClass="!text-neutral-500 !text-base lg:!text-lg !font-sf_pro_text_light"
            topClass="mt-3 max-w-2xl"
          >
            {subtitle}
          </CustomText>
        )}
      </div>

      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature) => {
          const body = (
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-neutral-100">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-200">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col px-6 py-6 lg:px-7 lg:py-7">
                <CustomText
                  type="paragraph"
                  extraClass="!text-black !text-xl lg:!text-2xl !font-semibold"
                >
                  {feature.title}
                </CustomText>
                <CustomText
                  type="paragraph"
                  extraClass="!text-neutral-600 !text-base lg:!text-lg !font-sf_pro_text_light !leading-snug"
                  topClass="mt-2 !leading-snug"
                >
                  {feature.description}
                </CustomText>
              </div>
            </article>
          );

          return (
            <div
              key={feature.title}
              data-feature-card
              className="w-[78%] shrink-0 snap-start sm:w-[55%] md:w-[42%] lg:w-[34%] xl:w-[30%]"
            >
              {feature.href ? (
                <Link href={feature.href} className="block h-full">
                  {body}
                </Link>
              ) : (
                body
              )}
            </div>
          );
        })}
      </div>

      <SliderArrows
        canPrev={canPrev}
        canNext={canNext}
        onPrev={scrollPrev}
        onNext={scrollNext}
      />
    </section>
  );
}

export function CategoryHighlightRows({
  title,
  items,
}: {
  title: string;
  items: CategoryFeature[];
}) {
  return (
    <section className="mx-auto w-full py-12 lg:py-20">
      <div className="mb-10 text-center lg:mb-14">
        <CustomText
          type="paragraph"
          extraClass="!text-black !text-3xl lg:!text-4xl !font-semibold"
        >
          {title}
        </CustomText>
      </div>

      <div className="space-y-5 lg:space-y-6">
        {items.map((item, index) => {
          const reversed = index % 2 === 1;
          const content = (
            <article className="grid grid-cols-1 overflow-hidden rounded-2xl bg-neutral-100 lg:grid-cols-2">
              <div
                className={`flex flex-col justify-center px-7 py-10 lg:px-12 lg:py-16 ${
                  reversed ? "lg:order-2" : ""
                }`}
              >
                <CustomText
                  type="paragraph"
                  extraClass="!text-black !text-2xl lg:!text-3xl !font-semibold"
                >
                  {item.title}
                </CustomText>
                <CustomText
                  type="paragraph"
                  extraClass="!text-neutral-600 !text-base lg:!text-lg !font-sf_pro_text_light !leading-snug"
                  topClass="mt-3 max-w-md !leading-snug"
                >
                  {item.description}
                </CustomText>
              </div>
              <div
                className={`relative min-h-[16rem] bg-white lg:min-h-[22rem] ${
                  reversed ? "lg:order-1" : ""
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </article>
          );

          return item.href ? (
            <Link key={item.title} href={item.href} className="block">
              {content}
            </Link>
          ) : (
            <div key={item.title}>{content}</div>
          );
        })}
      </div>
    </section>
  );
}
