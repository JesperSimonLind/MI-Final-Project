import React from "react";
import { Posted } from "./Posted";

export const PostLayout = ({ createdImages }) => {
  return (
    <>
      {createdImages?.map((userPost) => (
        <Posted key={userPost._id} userPost={userPost} />
      ))}
    </>
  );
};
