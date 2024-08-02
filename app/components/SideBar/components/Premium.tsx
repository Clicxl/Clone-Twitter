import React from "react";

const Premium = () => {
  return (
    <div className="absolute p-4 min-w-[22rem] right-[21rem] top-20 border-[0.1rem] rounded-xl border-gray-600 flex flex-col space-y-2">
      <h1>
        <span className="font-bold text-xl">Subscribe to Premium</span>
      </h1>
      <span className="text-sm">
        Subscribe to unlock new features and if <br /> eligible, receive a share
        of ads revenue.
      </span>

      <div className="flex h-10 w-36 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 font-medium hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600">
        <button className="">Subscribe</button>
      </div>

    </div>
  );
};

export default Premium;
