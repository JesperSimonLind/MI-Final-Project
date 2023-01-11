import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <div className="w-40 h-screen bg-btnBlue flex">
        <ul className="relative flex gap-5 flex-col w-full ">
          <li className="relative">
            <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:bg-btnBlueHover transition duration-300 ease-in-out">
              Home
            </Link>
          </li>
          <li className="relative">
            <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:bg-btnBlueHover transition duration-300 ease-in-out">
              Upload
            </Link>
          </li>
          <li className="relative">
            <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:bg-btnBlueHover transition duration-300 ease-in-out">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
