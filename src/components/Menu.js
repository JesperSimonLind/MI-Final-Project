import React from "react";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <>
      <header>
        <div className="h-20 w-screen bg-lgblack">
          <div className="flex h-20 items-center justify-center">
            <Link to="/home">
              <img
                className=""
                src="https://i.pinimg.com/originals/ac/79/98/ac799833b8d540819d2435e037ae5b4f.png"
                alt="SnapSociety Logo"
                width="200px"
              ></img>
            </Link>
          </div>
        </div>
      </header>
      {/* <div className="w-40 h-screen bg-btnBlue flex">
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
      </div> */}
    </>
  );
};
