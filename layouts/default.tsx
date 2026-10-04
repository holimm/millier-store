"use client";

import HeaderNavigation from "@/components/headerComponents/header";
import PageFooter from "@/components/const/footer";
import { ReactNode } from "react";

const DefaultLayout = ({
  children,
  onlyContent,
}: {
  children: ReactNode;
  onlyContent?: boolean;
}) => {
  return (
    <>
      {!onlyContent && <HeaderNavigation />}
      {children}
      {!onlyContent && <PageFooter />}
    </>
  );
};

export default DefaultLayout;
