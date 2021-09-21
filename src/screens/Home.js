import React, { Component } from "react";
import styled from "styled-components";

import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import RainbowText from "react-rainbow-text";

class Home extends Component {
  render() {
    return (
      <MainContainer>
        <NavBarContainer>
          <NavBar />
        </NavBarContainer>
        <Container>
          <HeaderContainer></HeaderContainer>
          <BodyContainer>
            <Body>
              <span className="header">Hi, I'm Abdus-Samad</span>
              <p>
                I am a Full stack javascript developer. I create{" "}
                <RainbowText lightness={0.5} saturation={1}>
                  Beautiful
                </RainbowText>{" "}
                and Functional websites as well as mobile applications.
              </p>
            </Body>
          </BodyContainer>
          <FooterContainer>
            {/* <SocialMediaLinks/> */}
            <Footer />
          </FooterContainer>
        </Container>
      </MainContainer>
    );
  }
}

export default Home;

const MainContainer = styled.div`
  background-color: black;
  width: 100%;
  height: auto%;
`;

const Container = styled.div`
  width: 100%;
  height: auto%;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  width: 55%;
  height: 150px;
  color: white;
  font-family: Geneva;

  @media (max-width: 500px) {
    p {
      font-size: 1.2em;
    }
  }

  @media (min-width: 501px) {
    p {
      font-size: 2.7rem;
    }
  }

  @media (max-width: 500px) {
    .header {
      font-size: 0.7em;
    }
  }

  @media (min-width: 501px) {
    .header {
      font-size: 1.7rem;
    }
  }
`;

const HeaderContainer = styled.div`
  background-color: black;
  width: 98%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;

  color: white;
`;

const BodyContainer = styled.div`
  background-color: black;
  width: 98%;
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: white;
`;

const FooterContainer = styled.div`
  background-color: black;
  width: 98%;
  height: 16.5vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: white;
`;

// const ImageContainer = styled.div`
//   justify-content: center;
//   display: flex;
// `;

const NavBarContainer = styled.div`
  justify-content: center;
  display: flex;

  margin-bottom: 20px;
`;
