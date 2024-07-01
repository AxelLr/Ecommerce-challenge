import React from "react";
import clsx from "clsx";

interface TextProps {
  type?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
  className?: string;
  children: React.ReactNode;
}

const baseStyles: { [key in keyof JSX.IntrinsicElements]?: string } = {
  h4: "text-2xl font-bold",
  h5: "text-xl font-bold",
  h6: "font-bold text-gray-500",
  span: "font-medium text-gray-500 text-xs",
  p: "text-base font-medium text-slate",
};

const Text: React.FC<TextProps> = ({ type = "p", className, children }) => {
  const defaultClasses = `text-center ${baseStyles[type]}` || "";

  const combinedClasses = clsx(defaultClasses, className);

  return React.createElement(type, { className: combinedClasses }, children);
};

export default Text;
