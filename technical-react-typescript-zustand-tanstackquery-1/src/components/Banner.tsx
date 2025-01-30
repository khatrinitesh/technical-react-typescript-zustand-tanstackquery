import React from "react";
import { BannerProps } from "../interface";

const Banner: React.FC<BannerProps> = ({ bannerStyle, title, desc }) => {
  return (
    <div className={`${bannerStyle} bannerContent py-[50px] bg-bgGradient1`}>
      <div className="container mx-auto">
        <h2 className="bannerTitle font-congenialR text-white text-[32px] font-bold">{title}</h2>
        <p className="text-white text-[18px]">{desc}</p>
      </div>
    </div>
  );
};

export default Banner;
