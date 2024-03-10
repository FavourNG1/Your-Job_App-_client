import { IJob, IUser } from "@/types/global";
import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: <IUser>{
    createdAt: "",
    email: "",
    f_name: "",
    l_name: "",
    password: "",
    telephone: "",
    token: "",
    updatedAt: "",
    user_id: "",
  },
});

export const jobsState = atom({
  key: "jobsState",
  default: <IJob[]>[],
});
