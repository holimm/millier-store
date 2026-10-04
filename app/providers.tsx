"use client";

import DefaultLayout from "@/layouts/default";
import { store } from "@/redux/store";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from "antd";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Provider } from "react-redux";

export default function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const onlyContent =
    pathname === "/verify-email" || pathname === "/reset-password";

  return (
    <AntdRegistry hashPriority="high">
      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              headerPadding: 0,
              contentPadding: 0,
            },
          },
        }}
      >
        <App>
          <Provider store={store}>
            <DefaultLayout onlyContent={onlyContent}>{children}</DefaultLayout>
          </Provider>
        </App>
      </ConfigProvider>
    </AntdRegistry>
  );
}
