"use client";
import { ConfigProvider } from "antd";
import { ThemeProvider, useTheme } from "next-themes";
import { Inter } from "next/font/google";
import { RecoilRoot } from "recoil";

const inter = Inter({ subsets: ["latin"] });

export default function Provider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "rgb(3, 0, 94)",
          fontFamily: inter.style.fontFamily,
        },
      }}
    >
      <ThemeProvider attribute="class" defaultTheme="light">
        <RecoilRoot>{children}</RecoilRoot>
      </ThemeProvider>
    </ConfigProvider>
  );
}
