import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  containerStyles?: string;
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}
