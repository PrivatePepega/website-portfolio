"use client";

import Image from "next/image";
import { Lottie } from "lottie-react";

// Assets
import happyface from "../assets/data.json";
import profilepic from "../assets/foto.png";

const BlockProfilePic = () => {
  return (
    <div className="relative mb-16 flex w-full flex-col items-center justify-center min-[600px]:flex-row">
      <div className="relative flex aspect-square h-auto w-full min-[600px]:w-[65%]">
        <Lottie className="h-full w-full" src={happyface} loop={false} autoplay={true} />
      </div>

      <div className="relative flex h-auto w-full justify-center">
        <Image
          className="h-auto w-full object-cover"
          src={profilepic}
          alt="My Image"
          width={2592}
          height={1728}
          priority
        />
      </div>
    </div>
  );
};

export default BlockProfilePic;
