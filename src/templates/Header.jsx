import React from "react";
import { Nav, NavBtn, NavItem, HoverText,  } from "../style/HeaderStyle";
import rogo from "../img/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faFolderOpen, faUser  } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
   const items = {
    textDecoration: "none",
    color: "black",
    fontSize: "16px",
    padding: "10px",
    textAlin: "center",
    transition: "all 0.2s",
    marginTop: "3px",
    "&:hover": {
      color: "white",
    },
  }

  return (
    <>
      <Nav>
        <NavBtn>
          <Link to="/">
            <img
              src={rogo}
              alt="rogo"
              style={{ height: "75px", width: "249px" }}
            />
          </Link>
        </NavBtn>
        <NavItem>
          <Link style={items} to="/cat">
            <HoverText>
              <FontAwesomeIcon icon={faCat} />
              <h6 style={{ fontSize: "13px", marginTop: "2px" }}>Cat</h6>
            </HoverText>
          </Link>
          <Link style={items} to="/portfolio">
            <HoverText>
              <FontAwesomeIcon icon={faFolderOpen} />
              <h6 style={{ fontSize: "13px", marginTop: "2px" }}>portfolio</h6>
            </HoverText>
          </Link>
          <Link style={items} to="/about">
            <HoverText>
              <FontAwesomeIcon icon={faUser} />
              <h6 style={{ fontSize: "13px", marginTop: "2px" }}>about</h6>
            </HoverText>
          </Link>
        </NavItem>
      </Nav>
    </>
  );
};
