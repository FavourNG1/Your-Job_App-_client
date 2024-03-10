"use client";
import { Button } from "@/components/ui/global/button";
import JobCard from "@/components/ui/job";
import SearchBar from "@/components/ui/search";
import PostLoader from "@/components/ui/skeleton/post-loader";
import { ApiClient } from "@/helpers/axios/helper";
import { IJob, IapiResponseProps } from "@/types/global";
import { Modal } from "antd";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ModalComp from "@/components/ui/global/modal";
import { useRecoilState, useRecoilValue } from "recoil";
import { jobsState, userState } from "@/recoil/atoms";

const options = {
  method: "GET",
  url: "https://himalayas.app/jobs/api?limit=50&offset=10",
};

export default function Home() {
  const [page, setPage] = useState<"login" | "signup">("login");
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [displayJobs, setDisplayJobs] = useState<IJob[]>([]);
  const [currentJob, setCurrentJob] = useState<IJob>();
  const [loading, setLoading] = useState<boolean>(true);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const user = useRecoilValue(userState);
  const [jobsReco, setJobsReco] = useRecoilState(jobsState);

  const router = useRouter();

  const getExternalData = async () => {
    setLoading(true);

    try {
      const response: { data: IapiResponseProps } = await axios.request(
        options
      );
      console.log(response.data);
      setJobs(response.data.jobs);
      setDisplayJobs(response.data.jobs);
      setJobsReco(response.data.jobs);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getExternalData();
  }, []);

  return (
    // shadow-[0_8px_30px_rgb(0,0,0,0.12)]
    <main className=" md:p-8  w-full p-2 flex m-auto gap-8 sm:gap-16 h-fit justify-around  items-center flex-col ">
      <h1 className=" text-center w-[95%] sm:w-[70%]  font-extrabold  text-5xl ">
        Find everything you need for{" "}
        <span className=" text-secondary ">your dream job</span> here.
      </h1>
      <SearchBar
        setDisplayJobs={setDisplayJobs}
        displayJobs={displayJobs}
        jobs={jobs}
        setJobs={setJobs}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {loading ? (
          <div className="flex w-full justify-between items-center gap-3">
            <PostLoader />
            <PostLoader />
            <PostLoader />
            <PostLoader />
          </div>
        ) : (
          displayJobs.map((elt, index) => {
            return (
              <div
                className="dark:bg-black/50 dark:border-white/20 border-black/20 border-[1px] flex flex-col box-border w-[98%]  sm:w-[25em]  gap-3 max-h-[13rem] p-4 justify-between rounded-xl dark:bg-my_gray bg-white "
                key={index}
              >
                <div className="flex gap-2 justify-start items-center">
                  <Image
                    src={elt.companyLogo}
                    width={20}
                    height={20}
                    alt="Logo"
                    className=" w-[2rem] h-[2rem] rounded-md"
                  />
                  <div className=" overflow-ellipsis overflow-hidden w-full ">
                    <p className="font-bold overflow-ellipsis overflow-hidden whitespace-nowrap">
                      {elt.title}
                    </p>
                    <div className=" flex text-sm gap-3 ">
                      <h1 className=" text-sm ">{elt.companyName}</h1>
                    </div>
                  </div>
                </div>

                <div className=" flex gap-2 text-sm flex-col ">
                  <p>Location : Remote</p>
                  <h1 className="text-sm">
                    {elt.excerpt.substring(0, 80)} ...
                  </h1>
                </div>
                <div className=" flex w-full  ">
                  <Button
                    action={() => {
                      user.f_name == ""
                        ? router.push("/auth")
                        : router.push(elt.applicationLink);
                    }}
                    intent={"primary"}
                    label="Apply"
                  ></Button>
                  <Button
                    label="View"
                    action={() => {
                      setCurrentJob(elt);
                      setOpenModal(true);
                      // router.push("/home/" + index);
                    }}
                    intent={"link"}
                  ></Button>
                </div>
              </div>
            );
          })
        )}
      </div>
      <ModalComp
        currentJob={currentJob}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </main>
  );
}

// export async function generateStaticParams() {
//   const response: { data: IapiResponseProps } = await axios.request(options);

//   return response.data.jobs.map((elt, key) => ({
//     job: elt,
//   }));
// }
