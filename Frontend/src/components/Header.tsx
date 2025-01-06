import { useContext, useState } from "react";
import { GiHabitatDome } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { authState } from "../context/AuthContext";
import { scrollState } from "../context/ScrollContext";
import { IoReorderThreeSharp } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import {
  SmallCommonButton,
  SmallCommonButtonBorder,
} from "./commonFormElement/CommonButton";

function Header() {
  const { user, signOut } = useContext(authState);
  const { scrollToContact, scrollToAbout } = useContext(scrollState);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const logOut = () => {
    navigate("/login");
    signOut();
  };
  return (
    <div>
    <div className="flex justify-between items-center px-2 sm:px-5 md:px-10 py-4">
      <div onClick={() => navigate("/")} className="flex flex-col justify-center items-center">
        <GiHabitatDome className="w-10 h-10" />
        <h1 className="text-xl sm:text-2xl font-bold">HabitHive</h1>
      </div>

      {user ? (
        <div className="flex gap-3 sm:gap-6">
          <div className="flex gap-1 sm:gap-2 items-center">
            <img
              src={
                user.photoURL
                  ? user.photoURL
                  : "https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              }
              alt="Profile"
              className="w-10 h-10 rounded-full hover:scale-105"
            />
            <p className="font-bold">
              {user.displayName ? user.displayName.split(" ")[0] : "John Doe"}
            </p>
          </div>
          <button
            onClick={logOut}
            className="bg-black px-4 py-2 rounded-md text-white font-semibold hover:bg-neutral-950"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="hidden sm:flex text-sm sm:text-base">
          <div className="flex gap-1 sm:gap-4 mr-2 sm:mr-5">
            <button
              onClick={scrollToAbout}
              className="font-bold py-2 px-2 sm:px-4 rounded hover:underline"
            >
              About Us
            </button>
            <button
              onClick={scrollToContact}
              className="font-bold py-2 px-2 sm:px-4 rounded hover:underline"
            >
              Contact Us
            </button>
          </div>
          <div className="flex gap-2 sm:gap-4 pl-3 sm:pl-8 border-l-2 border-black">
            <Link to="/login">
              <SmallCommonButtonBorder
                onClick={() => navigate("/login")}
                type="button"
                label="Login"
              />
            </Link>
            <Link to="/register">
              <SmallCommonButton
                onClick={() => navigate("/register")}
                type="button"
                label="Sign Up"
              />
            </Link>
          </div>
        </div>
      )}
      </div>

      {/* mobile view */}
      <div className="sm:hidden absolute top-8 right-5">
        {showMenu ? (
          <ImCross
            onClick={() => setShowMenu(false)}
            className="text-4xl p-2 cursor-pointer"
          />
        ) : (
          <IoReorderThreeSharp
            onClick={() => setShowMenu(true)}
            className="text-4xl cursor-pointer"
          />
        )}
      </div>
      {showMenu && (
        <div className="sm:hidden border-y-2 flex flex-col gap-4 bg-white p-4 rounded-md shadow-lg">
          <button
            onClick={scrollToAbout}
            className="font-bold py-2 px-2 sm:px-4 rounded hover:bg-slate-500"
          >
            About Us
          </button>
          <button
            onClick={scrollToContact}
            className="font-bold py-2 px-2 sm:px-4 rounded hover:underline"
          >
            Contact Us
          </button>
          <div className="flex gap-2 sm:gap-4 w-full">
          <Link className="w-1/2" to="/login">
            <button
              onClick={() => navigate("/login")}
              className="w-full border-2 border-black hover:shadow-2xl text-black font-semibold rounded px-4 py-3"
            >Login</button>
          </Link>
          <Link className="w-1/2" to="/register">
            <button
              onClick={() => navigate("/register")}
              className="w-full border-2 bg-black hover:shadow-2xl text-white font-semibold rounded px-4 py-3"
            >Sign Up</button>
          </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
