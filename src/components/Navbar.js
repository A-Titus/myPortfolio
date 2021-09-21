import React from "react";
import styled from "styled-components";


import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends React.Component {
  render() {
    return (
      <MainContainer>
        <LogoContainer>
          <h1>AT</h1>
        </LogoContainer>
        {/* <Container> */}
          {/* <Navbar>
            <Nav>
              <NavContainer>
                <LinkContainer>
                  <Nav.Link
                    style={{ color: "white", textDecoration: "none" }}
                    href="#home"
                  >
                    Home
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer>
                  <Nav.Link
                    style={{ color: "white", textDecoration: "none" }}
                    href="#home"
                  >
                    About
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer>
                  <Nav.Link
                    style={{ color: "white", textDecoration: "none" }}
                    href="#home"
                  >
                    Projects
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer>
                  <Nav.Link
                    style={{ color: "white", textDecoration: "none" }}
                    href="#home"
                  >
                    Contact
                  </Nav.Link>
                </LinkContainer>
              </NavContainer>
            </Nav>
          </Navbar> */}
    
        {/* </Container> */}
      </MainContainer>
    );
  }
}

export default NavBar;
const MainContainer = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;

const Container = styled.div`
  width: 25vw;
  height: 50px;
  background-color: red;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;

const LinkContainer = styled.div`
  width: 100%;
  height: 25px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;

const NavContainer = styled.div`
  width: 100%;
  height: 40px;
  padding: 5px;
  display: flex;
  justify-content: center;
  border-radius: 5px;
`;

const LogoContainer = styled.div`
  background-color: white;
  width: 50px;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
