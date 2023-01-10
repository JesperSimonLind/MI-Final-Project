import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <div className="flex justify-start items-center flex-col h-screen bg-lgblack">
        <div className="relative w-full h-full">
          <div className="absolute flex flex-col justify-center item-center top-0 right-0 left-0 bottom-0  bg-blackOverlay">
            <div className="flex justify-center flex-col items-center">
              <img
                className="pb-9"
                src="https://i.pinimg.com/originals/ac/79/98/ac799833b8d540819d2435e037ae5b4f.png"
                alt="SnapSociety Logo"
                width="400px"
              ></img>
              <h1 className="text-white text-9xl">404</h1>
              <h2 className="text-white">Page Not Found</h2>
              <p className="text-white pb-6">
                The Page you are looking for does not seem to exist
              </p>
              <Link to="/home">
                <button
                  type="button"
                  className="bg-btnBlue hover:bg-btnBlueHover py-2 px-4 rounded text-lg text-white"
                >
                  Go to Home
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
