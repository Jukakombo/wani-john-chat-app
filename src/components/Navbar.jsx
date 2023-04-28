import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
import logo from "../img/Uoj-logo.png";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <span className="logo">
        <img src={logo} style={{ width: "30px" }} alt="" />
      </span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
