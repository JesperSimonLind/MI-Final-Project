import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { urlFor } from "../client";
import { auth } from "../firebase-config";

export const Posted = ({ userPost: { createdBy, image, _id } }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <>
      <img src={urlFor(image).width(200).url()}></img>
      <img src={createdBy.image}></img>
      <p>{createdBy.userName}</p>
      <p>{createdBy._id}</p>
    </>
  );
};
