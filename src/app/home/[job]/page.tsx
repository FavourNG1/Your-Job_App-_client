"use client";
// import "./job.css";

import { jobsState } from "@/recoil/atoms";
import { useRecoilValue } from "recoil";

export default function Page({ params }: { params: { job: string } }) {
  const jobsReco = useRecoilValue(jobsState);
  return (
    <div className=" w-[90%] m-auto ">
      <h1 className=" text-primary ">{jobsReco[parseInt(params.job)].title}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html: jobsReco[parseInt(params.job)].description,
        }}
      ></div>
    </div>
  );
}
