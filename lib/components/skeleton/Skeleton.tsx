import clsx from "clsx";
import React from "react";

const Skeleton = ({ className }: { className: string }) => {
  return (
    <div
      role="status"
      className={clsx(
        "flex items-center justify-center max-w-sm  bg-gray-100 rounded-lg animate-pulse dark:bg-gray-200",
        className
      )}
    >
      <span className="sr-only">Cargando...</span>
    </div>
  );
};

export default Skeleton;
