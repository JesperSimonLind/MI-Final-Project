import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "../client";
import { userQuery } from "../data/data";
import { useParams } from "react-router-dom";

export const UploadImage = () => {
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [imageAsset, setImageAsset] = useState(null);
  const [user, setUser] = useState();
  const { userId } = useParams();

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
      createdBy: {
        _type: "createdBy",
        _ref: user._id,
      },
    };
    client.create(imagePost).then(() => {
      navigate("/home");
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
