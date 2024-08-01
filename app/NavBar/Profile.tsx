import React from "react";
import Image from "next/image";

import ProfilePic from "../../public/profile.png";

const Profile = () => {
  return (
    <>
      <div className="felx-row flex h-12 w-12 gap-4">
        <Image src={ProfilePic} alt="Profile Pic" className="rounded-full" />
        <div className="flex flex-col justify-center">
          <span className="text-lg font-medium">Clicxl</span>
          <span className="text-sm text-slate-600">@TheClicxl</span>
        </div>
      </div>
    </>
  );
};

export default Profile;
