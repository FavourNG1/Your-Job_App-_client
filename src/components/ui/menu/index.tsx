"use client";

import React, { useState } from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Link from "next/link";

const onChange = (key: string) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "Board",
    link: "/home",
  },
  {
    key: "2",
    label: "Applications",
    link: "/home/application",
  },
  {
    key: "3",
    label: "Settings",
    link: "/home/setting",
  },
];

const Menu: React.FC = () => {
  const [menuSelected, setMenuSelected] = useState<number>(0);
  return (
    <div className="hidden sm:flex  gap-6 ">
      {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}
      {items.map((elt, index) => {
        return (
          <Link
            className={`${
              index == menuSelected ? " text-primary " : ""
            } hover:text-primary h-full font-bold transition-all`}
            href={elt.link}
            key={index}
            onClick={() => {
              setMenuSelected(index);
            }}
          >
            {elt.label}
          </Link>
        );
      })}
    </div>
  );
};

export default Menu;
