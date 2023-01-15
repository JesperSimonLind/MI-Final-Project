import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { client, urlFor } from "../client";
import { auth } from "../firebase-config";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export const Posted = ({ userPost: { createdBy, image, _id } }) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const deletePost = (id) => {
    toast.success(
      "Image successfully deleted. Please note that it may take some time before your image disappears",
      {
        duration: 5000,
      }
    );
    client.delete(id).then(() => {
      setTimeout(() => {
        window.location.reload();
      }, 5000);
    });
  };

  return (
    <>
      <Toaster />
      <div className="rounded-xl shadow-lg bg-white w-5/6">
        <Link to={`/profile/${createdBy?._id}`}>
          <div className="flex justify-start items-center p-2 gap-3">
            <img className="rounded-full h-14 w-14" src={createdBy.image}></img>
            <h2 className="text-md">{createdBy.userName}</h2>
          </div>
        </Link>
        <div className="p-2 flex-col">
          <div className="rounded-xl overflow-hidden">
            <Link to={`/userpost-detail/${_id}`}>
              <img
                className="object-contain"
                src={urlFor(image).url()}
                alt="user-uploaded-image"
              ></img>
            </Link>
          </div>
          {createdBy?._id === user?.uid && (
            <div className="flex justify-center gap-5">
              <Link to={`/edit-post/${_id}`}>
                <button className="text-center bg-btnBlue text-white py-2 rounded-md mt-4 w-20">
                  <FaEdit className="w-5 h-5 inline-flex" />
                  Edit
                </button>
              </Link>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  deletePost(_id);
                }}
                className="text-center bg-btnBlue text-white py-2 rounded-md mt-4 w-20"
              >
                <FaTrashAlt className="w-5 h-5 inline-flex" />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
