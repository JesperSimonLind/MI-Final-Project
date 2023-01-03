import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../client";

export const UploadImage = (user) => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [imageAsset, setImageAsset] = useState(null);

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
    const imagePost = {
      _type: "post",
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
    };
    client.create(imagePost).then(() => {
      navigate("/profile");
    });
  };
  return (
    <>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Skriv din titel här"
      ></input>
      <input
        type="text"
        value={about}
        onChange={(e) => setAbout(e.target.value)}
        placeholder="Skriv din om text här"
      ></input>
      <input type="file" name="upload-image" onChange={upload}></input>
      <button type="button" onClick={saveImage}>
        Klick här för att spara bild
      </button>
      {user && (
        <div>
          <img src={user.image}></img>
          <p>{user.userName}</p>
        </div>
      )}
    </>
  );
};
