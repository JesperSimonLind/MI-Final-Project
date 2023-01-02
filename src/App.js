import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import "./App.css";
import { UploadImage } from "./components/UploadImage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/upload" element={<UploadImage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
