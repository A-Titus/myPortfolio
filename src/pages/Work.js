import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <Container>
      <ProjectContainer>
        <ProjectImageContainer></ProjectImageContainer>
        <ProjectDescriptionContainer>
          <DescriptionContainer></DescriptionContainer>
          <ButtonContainer>
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
              onClick={() => {}}
            >
              View Code
            </Button>
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
              onClick={() => {}}
            >
              Live site
            </Button>
          </ButtonContainer>
        </ProjectDescriptionContainer>
      </ProjectContainer>

      <ProjectContainer>
        <ProjectImageContainer></ProjectImageContainer>
        <ProjectDescriptionContainer>
          <DescriptionContainer></DescriptionContainer>
          <ButtonContainer>
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
              onClick={() => {}}
            >
              View Code
            </Button>
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
              onClick={() => {}}
            >
              Live site
            </Button>
          </ButtonContainer>
        </ProjectDescriptionContainer>
      </ProjectContainer>

      <ProjectContainer>
        <ProjectImageContainer></ProjectImageContainer>
        <ProjectDescriptionContainer>
          <DescriptionContainer></DescriptionContainer>
          <ButtonContainer>
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
              onClick={() => {}}
            >
              View Code
            </Button>
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
              onClick={() => {}}
            >
              Live site
            </Button>
          </ButtonContainer>
        </ProjectDescriptionContainer>
      </ProjectContainer>
      </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ProjectContainer = styled.div`
  width: 90%;
  height: 80vh;
  background-color: red;
  margin-top: 40px;
  margin-bottom: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;
`;

const ProjectImageContainer = styled.div`
  width: 50%;
  height: 90%;
  background-color: teal;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const ProjectDescriptionContainer = styled.div`
  width: 50%;
  height: 90%;
  background-color: green;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: black;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const DescriptionContainer = styled.div`
  width: 100%;
  height: 40vh;
  background-color: yellow;
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 70px;
`;



const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
  margin-left: -12;
`;
