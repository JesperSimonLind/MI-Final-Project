import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../client";
import { DetailedPostQuery } from "../data/data";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Loader } from "./Loader";
import { Menu } from "./Menu";

export const EditPost = () => {
  const { userPostId } = useParams();
  const [editPostDetail, setEditPostDetail] = useState();
  const [emptyFields, setEmptyFields] = useState(false);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");

  const navigate = useNavigate();

  const fetchEditPostDetails = () => {
    let query = DetailedPostQuery(userPostId);
    if (query) {
      client.fetch(`${query}`).then((data) => {
        setEditPostDetail(data[0]);
      });
    }
  };

  const saveEditPost = () => {
    if (title && about) {
      toast.success(
        "Image successfully updated. Please note that it may take some time before your image information updates",
        {
          duration: 5000,
        }
      );
      client
        .patch(userPostId)
        .set({
          title,
          about,
        })
        .commit()
        .then(() => {
          setTimeout(() => {
            navigate("/home");
          }, 5000);
        });
    } else {
      setEmptyFields(true);
    }
  };
  useEffect(() => {
    fetchEditPostDetails();
  }, [userPostId]);

  if (!editPostDetail) return <Loader />;
  return (
    <>
      <Menu />
      <Toaster />
      <div className="flex justify-start items-center flex-col h-screen bg-lgblack">
        <div className="relative w-full h-full">
          <div className="absolute flex flex-col justify-center item-center top-0 right-0 left-0 bottom-0">
            <div className="flex justify-center flex-col items-center">
              <div className="flex flex-col gap-3">
                <h1 className="text-white text-3xl text-center">Update post</h1>
                {emptyFields && (
                  <p className="text-red-400 text-center">
                    Some fields are empty or incorrect <br /> Please fill in all
                    fields.
                  </p>
                )}
                <label
                  className="block text-sm font-medium text-white"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder={editPostDetail.title}
                  id="title"
                  className=" form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                ></input>
                <label
                  className="block  text-sm font-medium text-white"
                  htmlFor="about"
                >
                  About
                </label>
                <input
                  type="text"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  placeholder={editPostDetail.about}
                  id="about"
                  className=" form-control
                  block
                  w-full
                  px-3
                  py-1.5
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                ></input>
                <button
                  type="button"
                  className="bg-btnBlue hover:bg-btnBlueHover py-2 px-4 rounded text-lg text-white"
                  onClick={saveEditPost}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
