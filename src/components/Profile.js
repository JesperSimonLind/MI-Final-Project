import React from "react";
import { Link } from "react-router-dom";
import { client } from "../client";

export const Profile = () => {
  return (
    <>
      <h1>Det här är min profil</h1>

      <Link to="/upload">Klick här för att ladda upp en bild</Link>
    </>
  );
};
