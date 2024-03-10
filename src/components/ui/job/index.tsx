import Image from "next/image";
import Link from "next/link";
import { Button } from "../global/button";

const JobCard = () => {
  return (
    <div className=" flex border-[1px] dark:bg-black border-black/20 flex-col box-border 2xl:w-[25em] md:w-[22em] gap-3 max-h-[13rem] p-4 justify-between rounded-xl dark:bg-my_gray bg-white ">
      <div className="flex gap-2 justify-start items-center">
        <Image
          src={"/assets/JobberYou Logo.png"}
          width={20}
          height={20}
          alt="Logo"
          className=" w-[2rem] h-[2rem] rounded-md"
        />
        <div className=" overflow-ellipsis overflow-hidden w-full ">
          <p className="font-bold overflow-ellipsis overflow-hidden whitespace-nowrap">
            Job title
          </p>
          <div className=" flex text-sm gap-3 ">
            <h1 className=" text-sm ">Company Name</h1>
          </div>
        </div>
      </div>

      <div className=" flex gap-2 text-sm flex-col ">
        <p>Location : Remote</p>
        <h1 className="text-sm">
          Lorem lorem lorem lorem lorem lorem lorem lorem
        </h1>
      </div>
      <Button
        className="w-[30%] transition-all py-2 px-2 text-center text-sm font-medium tracking-wider text-white  duration-300 transform  focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80"
        label="Apply"
        intent={"primary"}
        size={"medium"}
      />
    </div>
  );
};

export default JobCard;
