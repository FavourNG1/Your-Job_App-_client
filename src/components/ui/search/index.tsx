"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "../global/button";
import Input from "../global/input";
import { IJob, IapiResponseProps } from "@/types/global";

const SearchBar = ({
  jobs,
  setDisplayJobs,
  displayJobs,
  setJobs,
}: {
  jobs: IJob[];
  displayJobs: IJob[];
  setDisplayJobs: Dispatch<SetStateAction<IJob[]>>;
  setJobs: Dispatch<SetStateAction<IJob[]>>;
}) => {
  const [searchKey, setSearchKey] = useState<string>("");

  const search = () => {
    setDisplayJobs(
      jobs.filter(
        (job) =>
          job.description
            .toLocaleLowerCase()
            .includes(searchKey.toLocaleLowerCase()) ||
          job.title.toLocaleLowerCase().includes(searchKey.toLocaleLowerCase())
      )
    );
  };

  return (
    <div className=" focus:ring-indigo-300 dark:border-white/40 focus:border-[2px] flex justify-center items-center gap-2 border-[1px] border-black/20 w-[90%] sm:w-[50%] p-3 rounded-lg ">
      <input
        type="text"
        className={
          "border-none focus:ring-0 shadow-none bg-inherit w-full rounded-md "
        }
        placeholder="Search for your dream job ..."
        onChange={(e) => {
          setSearchKey(e.target.value);
          search();
        }}
      />
      <Button action={search} label="Search" intent={"primary"} />
    </div>
  );
};

export default SearchBar;
