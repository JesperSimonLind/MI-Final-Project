import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { client } from "../client";
import { auth } from "../firebase-config";
import { homeQuery, userQuery } from "../data/data";
import { PostLayout } from "./PostLayout";

export const HomePage = () => {
  const [user] = useAuthState(auth);
  const [userdb, setUserdb] = useState(null);
  const [postFeed, setPostFeed] = useState();

  useEffect(() => {
    const query = userQuery(user?.uid);
    client.fetch(query).then((data) => {
      setUserdb(data[0]);
    });
  }, [user]);

  useEffect(() => {
    client.fetch(homeQuery).then((data) => {
      setPostFeed(data);
    });
  }, []);
  if (!postFeed) return <p>Fetching Feed...</p>;
  return (
    <>
      <Link to={`/profile/${userdb?._id}`}>
        Klicka här för att komma till din profil
      </Link>
      <br></br>
      <Link to={`/upload/${userdb?._id}`}>
        {" "}
        Klicka här för att ladda upp en bild
      </Link>
      <div>
        <PostLayout createdImages={postFeed}></PostLayout>
      </div>
    </>
  );
};
