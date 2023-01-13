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
      <div className="flex justify-start items-center flex-col h-screen bg-lgblack overflow-auto">
        <div className="w-full h-full">
          <div className="grid justify-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ml-7 mr-7 items-center pt-20 pb-4">
            <PostLayout createdImages={postFeed}></PostLayout>
          </div>
        </div>
      </div>
    </>
  );
};
