"use client";

import React from "react";
import { Button, Form } from "antd";
import { GoogleOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { fetchUserInfoLoginGoogle } from "@/redux/entities/googleLogin";
import { getLoginGoogleLoading } from "@/redux/selectors/googleLogin";

function GoogleLoginLayout() {
  const dispatch = useAppDispatch();
  const loadingGoogleLogin = useAppSelector(getLoginGoogleLoading);

  const loginGoogle = () => {
    dispatch(
      fetchUserInfoLoginGoogle({
        access_token: "mock-google-access-token",
      })
    );
  };

  return (
    <Form.Item>
      <Button
        type="text"
        className="h-[2.8rem] w-full bg-[#ea4236] text-white"
        onClick={loginGoogle}
        loading={loadingGoogleLogin.data}
        icon={<GoogleOutlined />}
      >
        Login with Google
      </Button>
    </Form.Item>
  );
}

export default GoogleLoginLayout;
