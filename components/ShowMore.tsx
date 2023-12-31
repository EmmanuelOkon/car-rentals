"use client";

import { ShowMoreProps } from "@/types";
import { CustomButton } from "@/components";

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 12;
    setLimit(newLimit);
  };
  
  return (
    <div className="w-full flex items-center justify-center gap-5 mt-10">
      {isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-md "
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
