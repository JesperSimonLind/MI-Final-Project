import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../client";
import { userQuery } from "../data/data";
import { useParams } from "react-router-dom";
import { Menu } from "./Menu";
import toast, { Toaster } from "react-hot-toast";

export const UploadImage = () => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  const [user, setUser] = useState();
  const { userId } = useParams();
  const [emptyFields, setEmptyFields] = useState(false);

  useEffect(() => {
    const query = userQuery(userId);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);

  const navigate = useNavigate();

  const upload = (e) => {
    const { type, name } = e.target.files[0];

    client.assets
      .upload("image", e.target.files[0], {
        contentType: type,
        filename: name,
      })
      .then((document) => {
        setImageAsset(document);
      });
  };

  const saveImage = () => {
    if (title && about && imageAsset?._id) {
      const imagePost = {
        _type: "userPost",
        title,
        about,
        image: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imageAsset?._id,
          },
        },
        userId: user._id,
        createdBy: {
          _type: "createdBy",
          _ref: user._id,
        },
      };
      toast.success(
        "Image successfully posted. Please note that it may take some time before your image appears",
        {
          duration: 5000,
        }
      );
      client.create(imagePost).then(() => {
        setTimeout(() => {
          navigate("/home");
        }, 5000);
      });
    } else {
      setEmptyFields(true);
    }
  };
  return (
    <>
      <Menu />
      <Toaster />
      <div className="flex justify-start items-center flex-col h-screen bg-lgblack">
        <div className="relative w-full h-full">
          <div className="absolute flex flex-col justify-center item-center top-0 right-0 left-0 bottom-0">
            <div className="flex justify-center flex-col items-center">
              <div className="flex flex-col gap-3">
                <h1 className="text-white text-3xl text-center">Upload</h1>
                {emptyFields && (
                  <p
                    className="text-red-400 text-center"
                    data-testid="errorText"
                  >
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
                  placeholder="Title..."
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
                  placeholder="About..."
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

                <label
                  className="block  text-sm font-medium text-white"
                  htmlFor="file_input"
                >
                  Upload file
                </label>
                <input
                  onChange={upload}
                  className="form-control
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
                  id="file_input"
                  type="file"
                ></input>
                <button
                  type="button"
                  className="bg-btnBlue hover:bg-btnBlueHover py-2 px-4 rounded text-lg text-white"
                  onClick={saveImage}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
