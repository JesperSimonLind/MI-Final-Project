import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../client";
import { DetailedPostQuery } from "../data/data";
import { Loader } from "./Loader";
import { Menu } from "./Menu";

export const SinglePost = ({ user }) => {
  const { userPostId } = useParams();
  const [userPostDetail, setUserPostDetail] = useState();

  const fetchUserPostDetails = () => {
    let query = DetailedPostQuery(userPostId);
    if (query) {
      client.fetch(`${query}`).then((data) => {
        setUserPostDetail(data[0]);
      });
    }
  };

  useEffect(() => {
    fetchUserPostDetails();
  }, [userPostId]);

  if (!userPostDetail) return <Loader />;
  return (
    <>
      <Menu />
      <div className="flex justify-start items-center flex-col h-screen bg-lgblack">
        <div className="relative w-full h-full">
          <div className="absolute flex flex-col justify-center top-0 right-0 left-0 bottom-0">
            <div className="flex justify-center flex-col items-center">
              <div className="rounded-xl shadow-lg bg-white w-5/6  lg:w-3/6">
                <div className="flex items-center p-2 gap-3">
                  <img
                    className="rounded-full h-14 w-14"
                    src={userPostDetail.createdBy.image}
                  ></img>
                  <h2 className="text-md">
                    {userPostDetail.createdBy.userName}
                  </h2>
                </div>
                <img
                  className="pb-4 rounded-lg"
                  src={userPostDetail && urlFor(userPostDetail.image).url()}
                  alt="User Posted Image"
                ></img>
                <h1 className="text-3xl pl-2">{userPostDetail.title}</h1>
                <h2 className="pl-2">{userPostDetail.about}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
