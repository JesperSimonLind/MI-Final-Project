import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { client } from "../client";
import { auth } from "../firebase-config";
import { homeQuery, userQuery } from "../data/data";
import { PostLayout } from "./PostLayout";
import { Loader } from "./Loader";
import { Menu } from "./Menu";

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
  if (!postFeed) return <Loader />;
  return (
    <>
      <Menu />
      <div>
        <PostLayout createdImages={postFeed}></PostLayout>
      </div>
    </>
  );
};
