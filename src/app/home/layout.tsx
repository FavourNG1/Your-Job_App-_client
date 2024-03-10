import type { Metadata } from "next";
import Header from "@/components/ui/header";

export const metadata: Metadata = {
  title: "JobberYou | Home",
  description: "Get your dream job through you ! Easy and fast!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className=" w-full ">
      <Header />
      <div className=" mt-20 ">{children}</div>
    </section>
  );
}
