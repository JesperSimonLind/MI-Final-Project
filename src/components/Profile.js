import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { client } from "../client";
import { useAuthState } from "react-firebase-hooks/auth";
import { userQuery } from "../data/data";
import { auth } from "../firebase-config";

export const Profile = ({}) => {
  const [userCred] = useAuthState(auth);
  const [user, setUser] = useState();
  const { userId } = useParams();

  useEffect(() => {
    const query = userQuery(userId);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, [userId]);
  return (
    <>
      <h1>Det här är min profil</h1>
      {/* <h2>{user.userName}</h2>
      <img src={user.image} /> */}

      <Link to="/upload">Klick här för att ladda upp en bild</Link>
    </>
  );
};
