import { Dispatch, SetStateAction } from "react";

interface InputProps {
  type: "text" | "password" | "email" | "radio" | "checkbox" | "tel";
  label?: string;
  placeholder?: string;
  className?: string;
  setState?: Dispatch<SetStateAction<string>>;
}

const Input = ({
  label,
  type,
  placeholder,
  className,
  setState,
}: InputProps) => {
  return (
    <label className="block">
      <span className="text-gray-700 text-sm dark:text-white ">
        {label} {label && ":"}
      </span>
      <input
        required
        type={type}
        placeholder={placeholder}
        onChange={(e) => {
          if (setState) {
            setState(e.target.value);
          }
        }}
        className={
          "text-sm block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " +
          className
        }
      />
    </label>
  );
};
export default Input;
