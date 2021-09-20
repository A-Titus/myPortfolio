import React, { Component } from "react";
import styled from "styled-components";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialMediaLinks from "../components/SocialMediaLinks";
import RainbowText from "react-rainbow-text";

class Home extends Component {
  render() {
    return (
      <Container>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <HeaderContainer>
          <Header>
            <Text>Hi, I'm Abdus-Samad</Text>I am a Full stack javascript
            developer. I create <RainbowText lightness={0.5} saturation={1}>
              Beautiful 
            </RainbowText> and Functional websites as well as mobile applications.
          </Header>
        </HeaderContainer>
        <SocialMediaLinks/>
        <Footer/>
      </Container>
    );
  }
}

export default Home;

const Container = styled.div`
  background-color: black;
  width: 100%;
  height: auto;
`;

const Text = styled.div`
  width: 50%;
  height: 50px;
  font-size: 20px;
  color: white;
  font-family: Geneva;
`;

const Header = styled.div`
  width: 55%;
  height: 150px;
  font-size: 40px;
  color: white;
  font-family: Geneva;
`;

const HeaderContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  padding-top: 210px;
`;

const ImageContainer = styled.div`
  justify-content: center;
  display: flex;
`;

const NavBarContainer = styled.div`
  justify-content: center;
  display: flex;
`;
