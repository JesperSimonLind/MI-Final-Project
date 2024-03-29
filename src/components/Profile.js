import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";
import { userQuery, userUploadedImagesQuery } from "../data/data";
import { PostLayout } from "./PostLayout";
import { Loader } from "./Loader";
import { Menu } from "./Menu";

export const Profile = () => {
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
  if (!user) return <Loader />;
  if (!createdImages) return <Loader />;
  return (
    <>
      <Menu />
      <div className="flex justify-start items-center flex-col h-screen bg-lgblack overflow-auto">
        <div className=" w-full h-full">
          <div className="flex flex-col justify-center items-center">
            <img
              className="rounded-full"
              src={user.image}
              alt="user-profile"
            ></img>
            <h1 className="text-4xl mt-2 text-white">{user.userName}</h1>
          </div>
          <div className="grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-7 mr-7 items-center pt-20 pb-4">
            <PostLayout createdImages={createdImages}></PostLayout>
          </div>
        </div>
      </div>
    </>
  );
};
