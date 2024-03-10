import { userState } from "@/recoil/atoms";
import { IJob } from "@/types/global";
import { Modal } from "antd";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useRecoilValue } from "recoil";
// import "./job.css";

const ModalComp = ({
  openModal,
  setOpenModal,
  currentJob,
}: {
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  currentJob: IJob | undefined;
}) => {
  const user = useRecoilValue(userState);
  const router = useRouter();
  return (
    <Modal
      title={currentJob?.title}
      centered
      onCancel={() => setOpenModal(false)}
      open={openModal}
      width={1000}
      okType="primary"
      okText="Apply"
      onOk={() => {
        user.f_name == ""
          ? router.push("/auth")
          : router.push(currentJob?.applicationLink as string);
      }}
    >
      <h1 className="py-5 text-2xl ">
        <span className=" font-bold text-primary">Job title : </span>
        {currentJob?.title}
      </h1>
      <div
        dangerouslySetInnerHTML={{
          __html: currentJob?.description as string,
        }}
      ></div>
    </Modal>
  );
};

export default ModalComp;
