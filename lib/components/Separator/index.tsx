import clsx from "clsx";
import React from "react";

const Separator = ({ className }: { className?: string }) => {
  return (
    <hr
      className={clsx("border border-lightText h-[1px] w-full my-6", className)}
    />
  );
};

export default Separator;
