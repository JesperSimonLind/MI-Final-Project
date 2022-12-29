import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle } from "../firebase-config";

export const Login = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with google</button>
    </>
  );
};
