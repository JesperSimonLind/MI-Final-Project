import React from "react";
import { signInWithGoogle } from "../firebase-config";

export const Login = () => {
  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </>
  );
};
