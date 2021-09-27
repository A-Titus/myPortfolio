import React from "react";

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const Navbar = () => {
  const about = useSpring({
    from: { x: -100, rotateZ: 180 },
    config: { duration: 300 },
    loop: {
      x: 0,
      rotateZ:0
    },
  });

  const work = useSpring({
    from: { y: 100 },
    config: { duration: 300 },
    loop: {
      y: 0,
    },
  });

  // const contact = useSpring({
  //   from: { x: -100 },
  //   config: { duration: 300 },
  //   loop: {
  //     x: 0,
  //   },
  // });
  return (
    <>
      <Nav>
        <NavLogoContainer>
          <NavLink to="/">
            <NavLogo>AT</NavLogo>
          </NavLink>
        </NavLogoContainer>
        <Bars />

        <NavMenu>
          <animated.div style={about}>
            <NavBtn>
              <NavBtnLink to="/about" >
                About
              </NavBtnLink>
            </NavBtn>
          </animated.div>

          <animated.div style={work}>
          <NavBtn>
            <NavBtnLink to="/work" >
              Work
            </NavBtnLink>
          </NavBtn>
          </animated.div>

          <animated.div style={about}>
          <NavBtn>
            <NavBtnLink to="/contact" >
              Contact
            </NavBtnLink>
          </NavBtn>
          </animated.div>
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;

const Nav = styled.nav`
  background: black;
  height: 55px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  z-index: 12;
`;
const NavLogoContainer = styled.div`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavLogo = styled.div`
  background-color: white;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: black;
  }
  &:hover {
    color: black;
  }
`;

const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: flex-end;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 14px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: ;
  border: 1px solid #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 14px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: red;
    color: #fff;
    border: 1px solid red;
  }
`;
