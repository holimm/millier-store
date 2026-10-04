"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Typography } from "antd";
import { isEmpty, toLower } from "lodash";
import Link from "next/link";

export const CustomText = ({
  children,
  type,
  level,
  extraClass,
  topClass,
}: {
  children: ReactNode;
  type: "paragraph" | "title";
  level?: number;
  extraClass?: string;
  topClass?: string;
}) => {
  const renderText = () => {
    // Size utilities must use !important (and live on the inner span) so they
    // win over antd Typography defaults when AntdRegistry hashPriority="high".
    if (type === "paragraph")
      return (
        <Typography.Paragraph
          className={topClass || undefined}
          style={{ marginBottom: 0, fontSize: "inherit" }}
        >
          <span
            className={`!font-sf_pro ${!isEmpty(extraClass) ? extraClass : ""}`}
          >
            {children}
          </span>
        </Typography.Paragraph>
      );
    if (type === "title")
      return (
        <Typography.Title
          level={(level as 1 | 2 | 3 | 4 | 5) || 2}
          className={topClass || undefined}
          style={{ fontSize: "inherit" }}
        >
          <span
            className={`!font-sf_pro ${!isEmpty(extraClass) ? extraClass : "!text-3xl"}`}
          >
            {children}
          </span>
        </Typography.Title>
      );
  };
  return renderText();
};

export const CustomButton = ({
  children,
  extraClass,
}: {
  children: ReactNode;
  extraClass?: string;
}) => {
  return (
    <div
      className={`h-full w-full flex justify-center items-center mt-2 ${
        !isEmpty(extraClass) && extraClass
      }`}
    >
      <button className="text-black !font-sf_pro bg-gradient-to-r from-slate-100 to-white px-5 py-2 mx-auto hover:text-black hover:scale-[1.025] transition-all duration-500 rounded-lg shadow">
        {children}
      </button>
    </div>
  );
};

export const CategoryCard = ({
  label,
  src,
}: {
  label: string;
  src: string;
}) => {
  return (
    <Link href={`/${toLower(label)}`} className="block w-full">
      <div className="group relative aspect-[3/4] w-full cursor-pointer overflow-hidden rounded-xl bg-neutral-900 shadow-lg">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage: `url(${src})`,
          }}
        />
        <div className="absolute inset-0 rounded-xl bg-black opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-45" />
        <div className="absolute inset-0 flex items-end justify-center pb-8 transition-all duration-500 ease-out group-hover:pb-10">
          <CustomText type="paragraph" extraClass="!text-3xl lg:!text-4xl !text-white">
            {label}
          </CustomText>
        </div>
      </div>
    </Link>
  );
};

export const NavigateButton = ({
  buttonIcon,
  buttonType,
  onChangeHomepageBanner,
}: {
  buttonIcon: ReactNode;
  buttonType: string;
  onChangeHomepageBanner: (type: string) => void;
}) => {
  return (
    <motion.div className="h-full w-fit mx-5 flex justify-center items-center">
      <motion.div
        className="h-fit w-fit cursor-pointer"
        initial={{ opacity: 0.2 }}
        whileHover={{ opacity: 0.5 }}
        onClick={() => onChangeHomepageBanner(buttonType)}
      >
        {buttonIcon}
      </motion.div>
    </motion.div>
  );
};
