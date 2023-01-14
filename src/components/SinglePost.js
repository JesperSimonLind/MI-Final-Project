import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { client, urlFor } from "../client";
import { DetailedPostQuery } from "../data/data";
import { Loader } from "./Loader";

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
      <h1>{userPostDetail.title}</h1>
      <h2>{userPostDetail.about}</h2>
      <img src={userPostDetail.image && urlFor(userPostDetail.image).url()} />
    </>
  );
};
