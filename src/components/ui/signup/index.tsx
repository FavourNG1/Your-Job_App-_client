"use client";

import Input from "../global/input";
import { Button } from "../global/button";
import { Modal, Radio } from "antd";
import { FormEvent, useState } from "react";
import { ApiClient } from "@/helpers/axios/helper";
import { AxiosError, AxiosResponse, isAxiosError } from "axios";

const Signup = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [skills, setSkills] = useState<string[]>([
    "javascript",
    "sql",
    "python",
  ]);
  const [role, setRole] = useState<("job_seeker" | "job_poster")[]>([
    "job_seeker",
  ]);

  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const Response: AxiosResponse<any, any> = await ApiClient.post({
        url: "/api/user/auth/signup",
        data: {
          f_name: firstName,
          l_name: lastName,
          telephone: phone,
          email,
          password,
          skills,
          roles: role,
        },
      });
      console.log(Response);
      Modal.success({
        title: "Success",
        content: Response?.data.message,
        okType: "default",
        centered: true,
        onOk: () => {
          window.location.reload();
        },
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      if (isAxiosError(error)) {
        Modal.error({
          title: "Erreur",
          content: error?.response?.data.message,
          okType: "default",
          centered: true,
        });
      }
    }
  };

  return (
    <form
      onSubmit={async (e) => {
        await handleSubmit(e);
      }}
      className="w-full flex flex-col gap-3"
    >
      <div className=" flex gap-4 ">
        <Input
          setState={setFirstName}
          label="First name"
          type="text"
          placeholder="Enter your first name "
        />
        <Input
          setState={setLastName}
          label="Last name"
          type="text"
          placeholder="Enter yout last name"
        />
      </div>
      <Input
        setState={setPhone}
        label="Telephone"
        type="tel"
        placeholder="Enter your phone number "
      />
      <Input
        setState={setEmail}
        label="Email"
        type="email"
        placeholder="exemple@exemple.exemple"
      />
      <Input
        setState={setPassword}
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <Radio.Group
        onChange={(e) => {
          setRole(e.target.value.split(" "));
        }}
        className=" flex flex-col gap-3 "
      >
        <span className="text-gray-700 text-sm dark:text-white ">
          What fit you best :
        </span>
        <div className=" border border-black/25 p-3 rounded-lg">
          <Radio defaultChecked={true} className="text-xs" value={"job_seeker"}>
            Job Seeker
          </Radio>
          <Radio className="text-xs" value={"job_poster"}>
            Job Poster
          </Radio>
          <Radio className="text-xs" value={"job_poster job_seeker"}>
            Both
          </Radio>
        </div>
      </Radio.Group>
      <Button
        loading={loading}
        className="mt-3"
        label="Signup"
        size={"medium"}
      />
    </form>
  );
};

export default Signup;
