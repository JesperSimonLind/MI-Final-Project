import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../client";
import { useAuthState } from "react-firebase-hooks/auth";
import { userQuery, userUploadedImagesQuery } from "../data/data";
import { auth } from "../firebase-config";
import { PostLayout } from "./PostLayout";

export const Profile = () => {
  const [userCred] = useAuthState(auth);
  const [user, setUser] = useState();
  const { userId } = useParams();
  const [createdImages, setCreatedImages] = useState();

  useEffect(() => {
    const query = userQuery(userId);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  useEffect(() => {
    const UploadedImagesQuery = userUploadedImagesQuery(userId);

    client.fetch(UploadedImagesQuery).then((data) => {
      setCreatedImages(data);
    });
  }, [userId]);
  if (!user) return <p>Fetching Profile...</p>;
  if (!createdImages) return <p>Fetching Images...</p>;
  return (
    <>
      {/* <h1>Det här är min profil</h1>
      <h2>{user.userName}</h2>
      <img src={user.image} />
      <PostLayout createdImages={createdImages}></PostLayout>
      <div></div> */}
      <div className="flex justify-start items-center flex-col h-screen bg-lgblack overflow-auto">
        <div className=" w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full"
              src={user.image}
              alt="profile-picture"
            ></img>
            <h1 className="text-4xl mt-2 text-white">{user.userName}</h1>
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-7 mr-7 ">
            <PostLayout createdImages={createdImages}></PostLayout>
          </div>
        </div>
      </div>
    </>
  );
};
