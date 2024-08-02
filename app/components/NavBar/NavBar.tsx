import React from "react";
import Image from "next/image";
import Profile from "./Profile";

import TwitterLogo from "../../../public/logo.svg";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <>
      <header className="absolute left-72 top-4 flex h-[85%] min-h-[80%] w-96 min-w-4 flex-col space-y-4 bg-black text-2xl">
        <ul className="flex flex-col justify-center">
          <div
            className={`logo h-12 w-12 cursor-pointer text-white ${styles.onHover}`}
          >
            <Image
              src={TwitterLogo}
              alt="Logo"
              width={32}
              height={32}
              className="absolute left-2 top-2"
            />
          </div>
          <li className="flex flex-row gap-4">
            <div
              className={`relative flex h-14 w-auto flex-row items-center gap-4 pl-2 ${styles.onHover}`}
            >
              <span className="material-symbols-outlined">home</span>
              <span className="pr-4">Home</span>
            </div>
          </li>
          <li className="flex flex-row gap-4">
            <div
              className={`w- relative flex h-14 w-auto flex-row items-center gap-4 pl-2 ${styles.onHover}`}
            >
              <span className="material-symbols-outlined">search</span>
              <span className="pr-4">Explore</span>
            </div>
          </li>
          <li className="flex flex-row gap-4">
            <div
              className={`w- relative flex h-14 w-auto flex-row items-center gap-4 pl-2 pr-4 ${styles.onHover}`}
            >
              <span className="material-symbols-outlined">notifications</span>
              <span className="">Notification</span>
            </div>
          </li>
          <li className="flex flex-row gap-4">
            <div
              className={`relative flex h-14 w-auto flex-row items-center gap-4 pl-2 pr-4 ${styles.onHover}`}
            >
              <span className="material-symbols-outlined">account_circle</span>
              <span className="blck">Profile</span>
            </div>
          </li>
          <li className="flex flex-row gap-4">
            <div
              className={`relative flex h-14 w-auto flex-row items-center gap-4 pl-2 pr-4 ${styles.onHover}`}
            >
              <span className="material-symbols-outlined">more_horiz</span>
              <span className="">More</span>
            </div>
          </li>
        </ul>
      </header>

      <div className="absolute left-72 top-[80%] flex h-16 w-64 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-xl font-medium hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600">
        <button className="">Post</button>
      </div>

      <div
        className={`absolute bottom-4 left-[18rem] h-auto w-64 pb-2 pl-2 pt-2 ${styles.onHover} flex flex-row items-center justify-between pr-4`}
      >
        <Profile />
        <span className="material-symbols-outlined">more_horiz</span>
      </div>
    </>
  );
};

export default NavBar;
