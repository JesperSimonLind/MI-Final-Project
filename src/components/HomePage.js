import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { client } from "../client";
import { auth } from "../firebase-config";
import { userQuery } from "../data/data";
import { Profile } from "./Profile";

export const HomePage = () => {
  const [user] = useAuthState(auth);
  const [userdb, setUserdb] = useState(null);

  useEffect(() => {
    const query = userQuery(user?.uid);
    client.fetch(query).then((data) => {
      setUserdb(data[0]);
      //   console.log(userdb._id + " Hej här är ditt id");
    });
  }, [user]);

  return (
    <>
      <Link to={`/profile/${userdb?._id}`}>
        Klicka här för att komma till din profil
      </Link>
      {/* <div>
        <Routes>
          <Route path="/profile/:userId" element={<Profile />}>
            Hej
          </Route>
        </Routes>
      </div> */}
    </>
  );
};
