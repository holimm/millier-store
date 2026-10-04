"use client";

import {
  Drawer,
  Input,
  Space,
  Button,
  Row,
  Col,
  Image,
  Flex,
  List,
  Divider,
  Form,
  Checkbox,
  Typography,
  DrawerProps,
} from "antd";
import {
  DeleteOutlined,
  FacebookOutlined,
  GoogleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { ReactNode, useMemo } from "react";
import { NumberToDollarFormat } from "@/helpers/commonHelpers";
import {
  DescriptionItemModel,
  NavDrawerModel,
  NavigationDrawerProps,
} from "@/models/navModel";

export const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  children,
  ...props
}) => {
  const numericSize =
    typeof props.width === "number"
      ? props.width
      : typeof props.height === "number"
        ? props.height
        : undefined;

  return (
    <Drawer
      className={props.className}
      size={numericSize ?? "default"}
      title={props.title}
      placement={props.placement}
      open={props.open}
      onClose={props.onClose}
      closable={props.closable}
      styles={
        props.width || props.height
          ? {
              wrapper: {
                width: props.width,
                height: props.height,
              },
            }
          : undefined
      }
    >
      {children}
    </Drawer>
  );
};

export const CartDrawer = (props: NavDrawerModel) => {
  return (
    <Drawer
      placement={props.placement}
      open={props.showDrawer}
      onClose={props.handleShowDrawer}
      title={"My Cart"}
      size="default"
      closable={true}
      styles={{ wrapper: { width: "min(30vw, 420px)" } }}
    ></Drawer>
  );
};
