"use client";

import { motion } from "framer-motion";
import { CustomText } from "@/components/homePage/common";
import {
  productDescriptionImageVariants,
  productDescriptionVariants,
} from "@/models/productDetailModel";
import { renderTitle } from "../common";

export default function DescriptionTabItem({
  type,
  title,
  content,
}: {
  type:
    | "text"
    | "dual-images"
    | "contain-image"
    | "dual-contain-image"
    | "contain-image-bottom-white"
    | "contain-image-white"
    | "dual-contain-image-white"
    | "contain-image-grey"
    | "dual-contain-image-grey";
  title: string;
  content: {
    text: string;
    image: string;
  }[];
}) {
  const sectionTitle =
    title && title !== "null"
      ? title.charAt(0).toUpperCase() + title.slice(1)
      : title;

  const renderItem = () => {
    if (type === "text")
      return (
        <motion.div
          viewport={{ once: true }}
          initial="offscreen"
          whileInView="onscreen"
          variants={productDescriptionVariants}
        >
          {renderTitle({
            title: sectionTitle,
            topClass: "!text-center mt-10",
          })}
          {content.map((item: any, index: any) => (
            <div key={index}>
              {item.image === "null" && (
                <CustomText
                  type="paragraph"
                  extraClass="!text-black !text-lg !font-sf_pro_text_light"
                  topClass="!text-center"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.text,
                    }}
                  ></div>
                </CustomText>
              )}
            </div>
          ))}
        </motion.div>
      );
    if (type === "dual-images")
      return (
        <motion.div
          viewport={{ once: true }}
          initial="offscreen"
          whileInView="onscreen"
          variants={productDescriptionVariants}
        >
          {renderTitle({
            title: sectionTitle,
            topClass: "!text-center mt-10",
          })}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {content.map((item: any, index: number) => (
              <div key={index} className="h-fit w-full">
                <motion.div
                  className="bg-neutral-100 h-[22em] lg:h-[28em] w-full my-8 bg-contain bg-center bg-no-repeat rounded-xl border border-neutral-100"
                  style={{
                    backgroundImage: `url(${item.image})`,
                  }}
                  viewport={{ once: true }}
                  initial="offscreen"
                  whileInView="onscreen"
                  variants={productDescriptionImageVariants}
                ></motion.div>
                <CustomText
                  type="paragraph"
                  extraClass="!text-black !text-base lg:!text-lg"
                  topClass="w-full"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: item.text,
                    }}
                  ></div>
                </CustomText>
              </div>
            ))}
          </div>
        </motion.div>
      );
    if (type === "contain-image")
      return (
        <motion.div
          viewport={{ once: true }}
          initial="offscreen"
          whileInView="onscreen"
          variants={productDescriptionVariants}
        >
          {renderTitle({
            title: sectionTitle,
            topClass: "!text-center mt-10",
          })}
          {content.map((item: any, index: number) => (
            <div key={index} className="h-fit w-full">
              <motion.div className="bg-neutral-50 h-fit w-full my-8 py-6 lg:py-8 relative rounded-2xl border border-neutral-100">
                <div className="h-fit w-full px-4 lg:px-10">
                  <div className="h-fit w-full">
                    <CustomText
                      type="paragraph"
                      extraClass="!text-black !text-lg lg:!text-2xl"
                      topClass="w-full text-center"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.text,
                        }}
                      ></div>
                    </CustomText>
                  </div>
                  <img
                    className="object-contain mx-auto mt-8 max-h-[28rem] w-auto max-w-full"
                    src={`${item.image}`}
                    alt=""
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      );
    if (type === "dual-contain-image")
      return (
        <motion.div
          viewport={{ once: true }}
          initial="offscreen"
          whileInView="onscreen"
          variants={productDescriptionVariants}
        >
          {renderTitle({
            title: sectionTitle,
            topClass: "!text-center mt-10",
          })}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {content.map((item: any, index: number) => (
              <div key={index} className="h-fit w-full">
                <motion.div className="bg-neutral-50 h-fit w-full py-4 relative rounded-2xl border border-neutral-100">
                  <div className="h-fit w-full my-8">
                    <div className="h-fit w-full">
                      <CustomText
                        type="paragraph"
                        extraClass="!text-black !text-lg lg:!text-2xl"
                        topClass="w-full text-center"
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.text,
                          }}
                        ></div>
                      </CustomText>
                    </div>
                    <img
                      className="object-contain mx-auto mt-10"
                      src={`${item.image}`}
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      );
    if (type === "contain-image-white")
      return (
        <motion.div
          viewport={{ once: true }}
          initial="offscreen"
          whileInView="onscreen"
          variants={productDescriptionVariants}
        >
          {renderTitle({ title: sectionTitle, topClass: "!text-center mt-10" })}
          {content.map((item: any, index: number) => (
            <div key={index} className="h-fit w-full">
              <motion.div className="bg-neutral-100 h-fit w-full my-10 py-4 relative rounded-xl">
                <div className="h-fit w-full my-8">
                  <div className="h-fit w-full">
                    <CustomText
                      type="paragraph"
                      extraClass="!text-black !text-2xl"
                      topClass="w-full text-center"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.text,
                        }}
                      ></div>
                    </CustomText>
                  </div>
                  <img
                    className="object-contain mx-auto mt-10"
                    src={`${item.image}`}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      );
    if (type === "contain-image-bottom-white")
      return (
        <motion.div
          viewport={{ once: true }}
          initial="offscreen"
          whileInView="onscreen"
          variants={productDescriptionVariants}
        >
          {renderTitle({ title: sectionTitle, topClass: "!text-center mt-10" })}
          {content.map((item: any, index: number) => (
            <div key={index} className="h-fit w-full">
              <motion.div className="bg-neutral-100 h-fit w-full my-10 pt-4 relative rounded-xl">
                <div className="h-fit w-full my-8">
                  <div className="h-fit w-full">
                    <CustomText
                      type="paragraph"
                      extraClass="!text-black !text-2xl"
                      topClass="w-full text-center"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.text,
                        }}
                      ></div>
                    </CustomText>
                  </div>
                  <img
                    className="object-contain mx-auto mt-10"
                    src={`${item.image}`}
                  />
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      );
    if (type === "dual-contain-image-white")
      return (
        <motion.div
          viewport={{ once: true }}
          initial="offscreen"
          whileInView="onscreen"
          variants={productDescriptionVariants}
        >
          {renderTitle({ title: sectionTitle, topClass: "!text-center mt-10" })}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {content.map((item: any, index: number) => (
              <div key={index} className="h-fit w-full">
                <motion.div className="bg-neutral-100 h-fit w-full py-4 relative rounded-xl">
                  <div className="h-fit w-full my-8">
                    <div className="h-fit w-full">
                      <CustomText
                        type="paragraph"
                        extraClass="!text-black !text-2xl"
                        topClass="w-full text-center"
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.text,
                          }}
                        ></div>
                      </CustomText>
                    </div>
                    <img
                      className="object-contain mx-auto mt-10"
                      src={`${item.image}`}
                    />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      );
    if (type === "contain-image-grey")
      return (
        <motion.div
          viewport={{ once: true }}
          initial="offscreen"
          whileInView="onscreen"
          variants={productDescriptionVariants}
        >
          {renderTitle({ title: sectionTitle, topClass: "!text-center mt-10" })}
          {content.map((item: any, index: number) => (
            <div key={index} className="h-fit w-full">
              <motion.div className="bg-neutral-100 h-fit w-full my-10 py-4 relative rounded-xl">
                <div className="h-fit w-full my-8">
                  <div className="h-fit w-full">
                    <img
                      className="object-contain mx-auto"
                      src={`${item.image}`}
                    />
                    <CustomText
                      type="paragraph"
                      extraClass="!text-black !text-xl !font-sf_pro_text_light"
                      topClass="w-2/3 mx-auto text-center mt-10"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.text,
                        }}
                      ></div>
                    </CustomText>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
      );
    if (type === "dual-contain-image-grey")
      return (
        <motion.div
          viewport={{ once: true }}
          initial="offscreen"
          whileInView="onscreen"
          variants={productDescriptionVariants}
        >
          {renderTitle({ title: sectionTitle, topClass: "!text-center mt-10" })}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 mb-2 lg:mt-10 lg:mb-10">
            {content.map((item: any, index: number) => (
              <div key={index} className="h-fit w-full">
                <motion.div className="bg-neutral-100 h-fit w-full mt-4 lg:mt-0 py-4 relative rounded-xl">
                  <div className="h-fit w-full my-8">
                    <img
                      className="object-contain mx-auto"
                      src={`${item.image}`}
                    />
                    <div className="h-fit w-full">
                      <CustomText
                        type="paragraph"
                        extraClass="!text-black !text-xl !font-sf_pro_text_light"
                        topClass="w-2/3 mx-auto text-center mt-10"
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: item.text,
                          }}
                        ></div>
                      </CustomText>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      );
  };
  return renderItem();
}
