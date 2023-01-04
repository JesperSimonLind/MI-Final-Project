import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";
import { client } from "../client";

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
      {userInformation ? (
        <h1>Användaren är inloggad</h1>
      ) : (
        <button onClick={() => signInWithGoogle()}>Sign in with google</button>
      )}
    </>
  );
};
