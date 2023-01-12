import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { urlFor } from "../client";
import { auth } from "../firebase-config";
import { FaTrashAlt, FaEdit } from "react-icons/fa";

export const Posted = ({ userPost: { createdBy, image, _id } }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  return (
    <>
      {/* <img src={urlFor(image).width(200).url()}></img>
        <img src={createdBy.image}></img>
        <p>{createdBy.userName}</p>
        <p>{createdBy._id}</p> */}
      <div className="bg-white rounded-2xl">
        <div className="flex justify-start items-center p-2 gap-3">
          <img className="rounded-full h-14 w-14" src={createdBy.image}></img>
          <h2>{createdBy.userName}</h2>
        </div>
        <img
          className="object-contain"
          src={urlFor(image).url()}
          alt="user-uploaded-image"
        ></img>
        <div className="flex justify-center pt-3">
          <button
            type="button"
            className="flex justify-center items-center w-12 h-12"
          >
            <FaEdit className="w-10 h-10" />
          </button>
          <button className=" w-12 h-12" type="button">
            <FaTrashAlt className="w-10 h-10" />
          </button>
        </div>
      </div>
    </>
  );
};
