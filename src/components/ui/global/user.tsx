"use client";
import Image from "next/image";
import { Button } from "./button";
import { useState } from "react";
import { Dropdown } from "antd";

export interface UserInterface {
  name: string;
}

const items = [
  {
    label: "Logout",
    key: "0",
  },
];

const User = ({ name }: UserInterface) => {
  return (
    <Dropdown menu={{ items }} trigger={["click"]}>
      <div className="bg-primary cursor-pointer text-white flex items-center justify-center font-bold rounded-full w-10 h-10 overflow-hidden">
        {/* <Image src={src} alt={alt} width={width} height={height} /> */}
        {name[0]}
      </div>
    </Dropdown>
  );
};

export default User;
