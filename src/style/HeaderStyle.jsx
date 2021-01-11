import styled from "styled-components";

export const Nav = styled.nav`
  background-color: #00a968;
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-between;
  text-align: center;
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  :hover {
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 0.7s;
  }
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 50px 30px;
`;

export const HoverText = styled.p`
  margin-right: 50px;
  text-align: center;
  color: "white";
  :hover {
    color: white;
    cursor: pointer;
    transform: scale(1.3);
    transition-duration: 0.8s;
  }
`;