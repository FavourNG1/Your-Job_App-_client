import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import Header from "@/components/ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobberYou | App",
  description: "Get your dream job through you ! Easy and fast!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <main className="flex max-w-[1500px] bg-[#f0f0f0] dark:bg-black m-auto justify-center items-center min-h-screen ">
            {children}
          </main>{" "}
          <div className=" m-auto w-fit p-5 ">@Copywrite JobberYou</div>
        </Provider>
      </body>
    </html>
  );
}
