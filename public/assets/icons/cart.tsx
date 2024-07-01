import * as React from "react";

const CartIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    fill="currentColor"
    {...props}
  >
    <path
      fill="currentColor"
      d="m18.5 8.82 6.68 6.68H29V20h-.938l-2.25 7.5H11.188L8.938 20H8v-4.5h3.82l6.68-6.68Zm0 2.133L13.953 15.5h9.094L18.5 10.953ZM9.5 17v1.5h.563l2.25 7.5h12.374l2.25-7.5h.563V17h-18Zm5.25 2.25h1.5v5.25h-1.5v-5.25Zm3 0h1.5v5.25h-1.5v-5.25Zm3 0h1.5v5.25h-1.5v-5.25Z"
    />
  </svg>
);
export default CartIcon;
