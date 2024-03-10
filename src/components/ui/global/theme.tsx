"use client";

import { useTheme } from "next-themes";
import { MdWbSunny } from "react-icons/md";
import { IoMdMoon } from "react-icons/io";

const Theme = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="dark:text-white">
      <button
        className={`flex justify-center items-center w-10 h-10  rounded-full text-xs ${
          theme == "dark" ? " text-white" : " text-black "
        }`}
        onClick={() => {
          setTheme(theme == "dark" ? "light" : "dark");
        }}
      >
        {theme == "dark" ? <MdWbSunny size={20} /> : <IoMdMoon size={20} />}
      </button>
    </div>
  );
};

export default Theme;
