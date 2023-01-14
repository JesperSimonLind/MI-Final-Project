import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { client } from "../client";

export const SinglePost = ({ user }) => {
  const { userPostId } = useParams();
  const [post, setPost] = useState();
  const [userPostDetail, setUserPostDetail] = useState();

  const fetchUserPostDetails = () => {
    let query = DetailedPostQuery(userPostId);
    if (query) {
      client.fetch(`${query}`).then((data) => {
        setUserPostDetail(data[0]);
      });
    }
  };
  return <></>;
};
