import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";
import { client } from "../client";
import LoginBackground from "../Assets/LoginBackground.mp4";

export const Login = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, userInformation, loading, error] =
    useSignInWithGoogle(auth);

  const createUserProfile = async (user) => {
    const userInfo = {
      _id: user?.uid,
      image: user?.photoURL,
      userName: user?.displayName,
      _type: "user",
    };
    client.createIfNotExists(userInfo).then(() => {
      navigate("/home", { replace: true });
    });
    // console.log(userInfo);
  };

  useEffect(() => {
    if (userInformation) {
      createUserProfile(userInformation.user);
      console.log(userInformation.user);
    }
  }, [userInformation]);
  return (
    <>
      <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <video
            src={LoginBackground}
            type="video/mp4"
            loop
            controls={false}
            muted
            autoPlay
            className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col justify-center item-center top-0 right-0 left-0 bottom-0  bg-blackOverlay">
            <div className="flex justify-center">
              <img
                src="https://i.pinimg.com/originals/ac/79/98/ac799833b8d540819d2435e037ae5b4f.png"
                alt="SnapSociety Logo"
                width="400px"
              ></img>
            </div>
            <div className="flex justify-center pt-8">
              <button
                type="button"
                className="text-white font-roboto flex justify-center bg-transparent hover:bg-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded cursor-pointer"
                onClick={() => signInWithGoogle()}
              >
                Sign in with google
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={() => signInWithGoogle()}>Sign in with google</button> */}
    </>
  );
};
