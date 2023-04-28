import React, { useContext } from "react";
import logo from "../img/Uoj-logo.png";
import { AuthContext } from "../context/AuthContext";
function Navigation() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navigation__bar">
      <div className="navlogo">
        <img style={{ width: "60px", marginRight: "15px" }} src={logo} alt="" />
        <div className="info__nav">
          <p>University of Juba</p>
          <p>Department of Computer Science</p>
        </div>
      </div>
      <div className="navlogo">
        <div className="">
          <p
            style={{ marginRight: "10px", fontWeight: "bold", color: "white" }}
          >
            Welcome {currentUser.displayName}
          </p>
        </div>
        <img
          style={{ width: "70px", marginRight: "15px", borderRadius: "50%" }}
          src={currentUser.photoURL}
          alt=""
        />
      </div>
    </div>
  );
}

export default Navigation;
