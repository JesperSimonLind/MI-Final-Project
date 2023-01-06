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
      <h1>Det här är min profil</h1>
      <h2>{user.userName}</h2>
      <img src={user.image} />
      <Link to="/upload">Klick här för att ladda upp en bild</Link>
      <PostLayout createdImages={createdImages}></PostLayout>
      <div></div>
    </>
  );
};
