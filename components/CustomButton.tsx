"use client";
import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  containerStyles,
  title,
  handleClick,
  btnType,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles} `}
      onClick={handleClick}
    >
      <span className={`flex-1 hover:font-semibold transition-all ease-out duration-300 `}>{title}</span>
    </button>
  );
};

export default CustomButton;
