import React from "react";
import { Nav, NavBtn } from "../style/HeaderStyle";
import rogo from "../img/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <Nav>
        <Link to="/">
          <NavBtn>
            <img
              src={rogo}
              alt="rogo"
              style={{ height: "70px", width: "249px", marginTop: "10px" }}
            />
          </NavBtn>
        </Link>
      </Nav>
    </>
  );
};
