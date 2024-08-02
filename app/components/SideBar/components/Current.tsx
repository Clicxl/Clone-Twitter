import React from "react";
import Image from "next/image";

import happBanner from "../../../../public/happBanner.jpg";

const Current = () => {
  return (
    <div className="absolute right-[21rem] top-64 flex min-w-[22rem] flex-col space-y-4 rounded-xl border-[0.1rem] border-gray-600 p-4">
      <h1>
        <span className="text-xl font-bold">What’s happening</span>
      </h1>

      <div>
        <div className="flex flex-row gap-4">
          <Image
            src={happBanner}
            alt="Esports"
            width={100}
            height={100}
            className="h-20 w-20 rounded-xl"
          ></Image>
          <div className="flex flex-col">
            <span className="text-base font-bold">Doggy Power 2025</span>
            <span className="text-xs text-gray-500">DOG PLAY · LIVE</span>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Current;
