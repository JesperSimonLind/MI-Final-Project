import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebase-config";
import { client } from "../client";

export const Login = () => {
  const navigate = useNavigate();

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const createUserProfile = (user) => {
    const userInfo = {
      _id: user.uid,
      image: user.photoURL,
      userName: user.displayName,
      _type: "user",
    };
    client.createIfNotExists(userInfo).then(() => {
      navigate("/profile");
    });
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
