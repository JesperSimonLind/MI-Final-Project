import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export const Menu = ({ user }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const showMenu = () => {
    setToggleMenu(true);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };
  return (
    <>
      <header>
        <div className="h-20 w-screen bg-lgblack">
          <div className="flex h-20 items-center justify-center flex-row">
            <Link to="/home">
              <img
                className="pl-5"
                src="https://i.pinimg.com/originals/ac/79/98/ac799833b8d540819d2435e037ae5b4f.png"
                alt="SnapSociety Logo"
                width="200px"
              ></img>
            </Link>
            <div className="flex w-full justify-end pr-8">
              <button onClick={showMenu} type="button">
                <AiOutlineMenu className="w-9 h-9 text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {toggleMenu && (
        <nav className="fixed top-0 right-0 bottom-0 left-0 backdrop:-blur-sm z-10">
          <ul className="absolute top-0 right-0 bottom-0 w-6/12 lg:w-1/6  md:w-1/4  py-4 bg-white drop-shadow-2xl z-10">
            <li className="border-b border-inherit">
              {/* <Link to={`user-profile/${user._id}`} className="block p-4">
              <img
                src={user.image}
                className="w-10 h-10 rounded-full"
                alt="user"
              ></img>
              <p>{user.userName}</p>
            </Link> */}
            </li>
            <li className="border-b border-inherit">
              <Link to="/" className="block p-4">
                Home
              </Link>
            </li>
            <li className="border-b border-inherit">
              <Link to="/" className="block p-4">
                Upload
              </Link>
            </li>
            <li className="border-b border-inherit">
              <Link to="/" className="block p-4">
                Logout
              </Link>
            </li>
          </ul>
          <button
            onClick={closeMenu}
            className="absolute top-5 right-0 bottom-0 left-36 lg:left-3/4 md:left-2/3"
          >
            <AiOutlineClose className="text-white h-6 w-6 absolute top-2 left-2" />
          </button>
        </nav>
      )}
    </>
  );
};
