import React from "react";
import styled from "styled-components";

import Linkedin from "../linkedin.png";
import Github from "../github.png";
import Whatsapp from "../whatsapp.png";

class SocialMediaLinks extends React.Component {
  render() {
    return (
      <Container>
        <Link1Container></Link1Container>
        <Link2Container>
          <img
            src={Linkedin}
            alt="Linkedin"
            width="40%"
            max-height="40%"
            object-fit="contain"
          />
        </Link2Container>

        <Link3Container>
          <img
            src={Github}
            alt="Github"
            width="40%"
            max-height="40%"
            object-fit="contain"
          />
        </Link3Container>
        <Link4Container>
          <img
            src={Whatsapp}
            alt="Whatsapp"
            width="40%"
            max-height="40%"
            object-fit="contain"
          />
        </Link4Container>
      </Container>
    );
  }
}

export default SocialMediaLinks;

const Container = styled.div`
  width: 150px;
  height: 0px;
  margin-left: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

// const GroupLinksContainer1 = styled.div`
//   width: 40px;
//   height: 70px;
// `;

// const GroupLinksContainer2 = styled.div`
//   width: 40px;
//   height: 70px;
// `;

const Link1Container = styled.div`
  width: 0%;
  height: 30px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Link2Container = styled.div`
  width: 90%;
  height: 30px;
  background-color: #ff007f;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Link3Container = styled.div`
  width: 90%;
  height: 30px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Link4Container = styled.div`
  width: 90%;
  height: 30px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
