import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const button = cva("button", {
  variants: {
    intent: {
      primary: [
        "bg-primary",
        "text-white",
        "border-transparent",
        "hover:bg-secondary",
        "hover:scale-105",
        "rounded-lg",
        "transition-all",
        "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
        "cursor-pointer",
        "flex",
        "items-center",
        "justify-center",
        "gap-2",
      ],
      secondary: [
        "bg-primary",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-secondary",
        "hover:scale-3",
        "rounded-lg",
        "transition-all",
        "cursor-pointer",
      ],
      link: [
        "text-primary",
        "underline",
        "hover:text-secondary",
        "transition-all",
        "p-0",
        "cursor-pointer",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  label: string;
  loading?: boolean;
  action?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  label,
  loading,
  action,
}: ButtonProps) => (
  <button
    onClick={action}
    disabled={loading}
    className={button({ intent, size, className })}
  >
    <span>{label}</span>
    {loading && <AiOutlineLoading3Quarters className=" animate-spin " />}
  </button>
);
