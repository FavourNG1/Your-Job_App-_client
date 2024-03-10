"use client";

import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    redirect("/home");
  }, []);
  return (
    <main className=" md:p-8 p-2 flex  m-auto w-[90%] md:w-[35%] max-w-[500px] h-fit justify-center items-center flex-col ">
      Loading ...
    </main>
  );
}
