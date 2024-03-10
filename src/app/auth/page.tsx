"use client";
import { Button } from "@/components/ui/global/button";
import Login from "@/components/ui/login";
import Signup from "@/components/ui/signup";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [page, setPage] = useState<"login" | "signup">("login");
  return (
    // shadow-[0_8px_30px_rgb(0,0,0,0.12)]
    <main className=" md:p-8 p-2 flex  m-auto w-[90%] md:w-[35%] max-w-[500px] h-fit justify-center items-center flex-col ">
      <div className=" flex flex-col self-start">
        {/* <Image
          alt="Logo image"
          width={150}
          height={10}
          src="/assets/JobberYou Logo.png"
        />{" "} */}
        <h1 className=" font-bold md:text-5xl text-3xl text-start">
          <p className=" font-light ">Welcom to </p>JobberYou !
        </h1>
        {/* <p className=" text-gray-500  text-sm ">
          Please fill out your credentials to login into you account ...
        </p> */}
      </div>
      <div className=" flex w-full items-center ">
        <p className=" text-sm ">
          {page === "login" ? "Don't have an account ?" : "Have an account ?"}
        </p>
        <Button
          size={"medium"}
          intent={"link"}
          label={page === "login" ? "Signup" : "Login"}
          action={() => {
            console.log("Button clicked");
            setPage(page === "login" ? "signup" : "login");
          }}
        />
      </div>
      {page == "login" ? <Login redirect="/home" /> : <Signup />}
    </main>
  );
}
