import React from "react";
import Image from "next/image";
import Profile from "./Profile";

import TwitterLogo from "../../public/logo.svg";

const NavBar = () => {
  return (
    <>
      <header className="absolute top-4 flex h-[85%] min-h-[80%] min-w-4 flex-col bg-black sm:left-0 sm:w-36 md:left-72 md:w-96 lg:left-0 lg:w-24 lg:text-2xl xl:left-72 xl:w-96">
        <ul className="flex flex-col justify-center">
          <div className="logo ml-[0.6rem] h-8 w-8 pb-16 text-white xl:pl-0">
            <Image src={TwitterLogo} alt="Logo" />
          </div>
          <li className="flex flex-row gap-4 pb-4">
            <div className="relative flex h-14 w-12 flex-row items-center gap-4 pl-3 hover:rounded-[4rem] hover:bg-[rgba(185,185,185,0.4)] xl:w-36 xl:pl-2">
              <span className="material-symbols-outlined">home</span>
              <span className="hidden xl:block">Home</span>
            </div>
          </li>
          <li className="flex flex-row gap-4 pb-4">
            <div className="relative flex h-14 w-12 flex-row items-center gap-4 pl-3 hover:rounded-[4rem] hover:bg-[rgba(185,185,185,0.4)] xl:w-44 xl:pl-2">
              <span className="material-symbols-outlined">search</span>
              <span className="hidden xl:block">Explore</span>
            </div>
          </li>
          <li className="flex flex-row gap-4 pb-4">
            <div className="relative flex h-14 w-12 flex-row items-center gap-4 pl-3 hover:rounded-[4rem] hover:bg-[rgba(185,185,185,0.4)] xl:w-56 xl:pl-2">
              <span className="material-symbols-outlined">notifications</span>
              <span className="hidden xl:block">Notification</span>
            </div>
          </li>
          <li className="flex flex-row gap-4 pb-4">
            <div className="relative flex h-14 w-12 flex-row items-center gap-4 pl-3 hover:rounded-[4rem] hover:bg-[rgba(185,185,185,0.4)] xl:w-[9.2rem] xl:pl-2">
              <span className="material-symbols-outlined">account_circle</span>
              <span className="hidden xl:block">Profile</span>
            </div>
          </li>
          <li className="flex flex-row gap-4">
            <div className="relative flex h-14 w-12 flex-row items-center gap-4 pl-3 hover:rounded-[4rem] hover:bg-[rgba(185,185,185,0.4)] xl:w-36 xl:pl-2">
              <span className="material-symbols-outlined">more_horiz</span>
              <span className="hidden xl:block">More</span>
            </div>
          </li>
        </ul>
      </header>

      <div className="absolute top-[80%] flex h-16 items-center justify-center rounded-full bg-[rgb(29,155,240)] text-xl font-medium hover:bg-[rgb(65,147,201)] xl:left-72 xl:w-64">
        <span className="material-symbols-outlined pr-1 xl:hidden">edit</span>

        <button className="hidden xl:inline">Post</button>
      </div>

      <div className="absolute left-72 bottom-4">
        <Profile />
      </div>
    </>
  );
};

export default NavBar;
