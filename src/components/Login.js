import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";
import { client } from "../client";

export const Login = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const createUserProfile = async (user) => {
    try {
      const userInfo = {
        _id: user.uid,
        _type: "user",
        userName: user.displayName,
        image: user.photoURL,
      };
      client.createIfNotExists(userInfo).then(() => {
        navigate("/profile");
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      createUserProfile(user.user);
    }
  }, [user]);
  return (
    <>
      <button onClick={() => signInWithGoogle()}>Sign in with google</button>
    </>
  );
};
