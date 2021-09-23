import React from "react";
import styled from "styled-components";
import SocialMediaLinks from "./SocialMediaLinks";

class Footer extends React.Component {
  render() {
    return (
      <MainContainer>
        <SocialMediaLinks />
        <Container />
      </MainContainer>
    );
  }
}

export default Footer;

const Container = styled.div`
  width: 100%;
  height: 20px;
  background-color: red;
  justfify-content: center;
  display: flex;
`;

const MainContainer = styled.div`
  width: 100%;
  height: 20px;
  
`;
