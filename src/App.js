import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import "./App.css";
import { UploadImage } from "./components/UploadImage";
import { HomePage } from "./components/HomePage";
import { PageNotFound } from "./components/PageNotFound";
import { SinglePost } from "./components/SinglePost";
import { EditPost } from "./components/EditPost";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home/*" element={<HomePage />}></Route>
          <Route path="/profile/:userId" element={<Profile />}></Route>
          <Route path="/upload/:userId" element={<UploadImage />}></Route>
          <Route path="*" element={<PageNotFound />} />
          <Route
            path="/userpost-detail/:userPostId"
            element={<SinglePost />}
          ></Route>
          <Route path="/edit-post/:userPostId" element={<EditPost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
