import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useSpring, animated } from "react-spring";

import Footer from "../components/Footer";
import RainbowText from "react-rainbow-text";
import { useHistory } from "react-router-dom";

function Home() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 }, delay: 300 });
  const learnMoreBtn = useSpring({ to: { x: 0 }, from: { x: 10 }, delay: 50 ,  loop: { reverse: true }});
  let history = useHistory();
  return (
    <MainContainer>
      <Container>
        <HeaderContainer></HeaderContainer>
        <BodyContainer>
          <Body>
            <animated.div style={props}>
              <div>
                <span className="header">Hi, I'm Abdus-Samad</span>
                <p>
                  I am a Full stack javascript developer. I create{" "}
                  <RainbowText lightness={0.5} saturation={1}>
                    Beautiful
                  </RainbowText>{" "}
                  and <span style={{color: "red"}}>Functional</span> websites as well as mobile applications.
                </p>
              </div>
            </animated.div>

            <animated.div style={learnMoreBtn}>
            <Button
              whileHover={{ scale: 1.05 }}
              whileTap={{
                scale: 0.95,
                backgroundColor: "red",
                border: "none",
                color: "#fff",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 1.5 } }}
              onClick={()=> {history.push("/about")}}
            >
              Learn more?
            </Button>
            </animated.div>
            <AnimationContainer></AnimationContainer>
          </Body>
        </BodyContainer>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </Container>
    </MainContainer>
  );
}

export default Home;

const MainContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  padding-bottom: 40px;
`;

const Container = styled.div`
  width: 100%;
  height: auto;
  display: block;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  width: 85%;
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
      font-size: 2.6rem;
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
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: white;
`;

const FooterContainer = styled.div`
  background-color: black;
  width: 98%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: white;
`;
const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;


const AnimationContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 36.5vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: white;
  margin-top: 20px;
`;
