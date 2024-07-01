"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Image as ImageType } from "@/app/store/accesorios/lib/interfaces";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  appendDots: (dots: any) => (
    <ul
      style={{
        display: "flex",
        bottom: "-12px",
        justifyContent: "center",
      }}
    >
      {dots}
    </ul>
  ),
  customPaging: () => {
    return <div className="h-2 bg-light rounded-lg"></div>;
  },
};

export default function Carousel({ images }: { images: ImageType[] }) {
  const slider = React.useRef(null) as any;

  return (
    <div className="mt-4 md:mt-0 relative">
      <Slider ref={slider} {...settings}>
        {images.map(({ height, width, url, name, id }) => (
          <Image key={id} alt={name} height={height} src={url} width={width} />
        ))}
      </Slider>
      <ChevronLeftIcon
        className=" absolute left-0 top-[50%] size-8 text-primary cursor-pointer"
        onClick={() => slider?.current?.slickPrev()}
      />
      <ChevronRightIcon
        className="absolute right-0 top-[50%] size-8 text-primary cursor-pointer"
        onClick={() => slider?.current?.slickNext()}
      />
    </div>
  );
}
