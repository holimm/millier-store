"use client";

import { useAuthen } from "@/hooks/useAuthen";
import { isEmpty } from "lodash";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AuthGate = ({ children }: { children: any }) => {
  const router = useRouter();
  const authenAccount = useAuthen();

  useEffect(() => {
    isEmpty(authenAccount) && router.push("/");
  }, [authenAccount, router]);

  return <>{children(authenAccount)}</>;
};

export default AuthGate;
