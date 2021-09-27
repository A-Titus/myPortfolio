import React from "react";
import styled from "styled-components";
import EducationTable from "../components/EducationTable";
import ExperienceTable from "../components/ExperienceTable";

import css from "./images/css.png";
import html from "./images/html.png";
import javascript from "./images/javascript.png";
import mui from "./images/mui.png";
import mysql from "./images/mysql.png";
import node from "./images/node.png";
import react from "./images/react.png";
import reactNative from "./images/reactNative.png";
import express from "./images/express.png";
import mongodb from "./images/mongodb.png";

const About = () => {
  return (
    <Container>
      {/* <h2>About Me</h2> */}
      <BodyContainer>
        <ImageContainer>
          <img style={{ height: "auto", width: "100%" }} src={""} alt={""} />
        </ImageContainer>
        <TextContainer>
          <p>
            Hi, My name is a Abdus-Samad Titus and I am a Full stack Javascript
            developer currently residing in Johannesburg South Africa. I am pationate about creating web and mobile applictions that not only look awsome but add value to your lives.
          </p>
        </TextContainer>
      </BodyContainer>
      <EducationContainer>
        <EducationTable />
      </EducationContainer>
      <ExperienceContainer>
        <ExperienceTable />
      </ExperienceContainer>
      <TechStackContainer>
        <img
          style={{ height: "100px", width: "100px", padding: "5px" }}
          src={html}
          alt={""}
        />
        <img
          style={{ height: "100px", width: "100px", padding: "5px" }}
          src={css}
          alt={""}
        />
        <img
          style={{ height: "100px", width: "100px", padding: "5px" }}
          src={javascript}
          alt={""}
        />
        <img
          style={{ height: "100px", width: "200px", padding: "5px" }}
          src={react}
          alt={""}
        />
        <img
          style={{ height: "100px", width: "200px", padding: "5px" }}
          src={reactNative}
          alt={""}
        />
        <img
          style={{ height: "100px", width: "100px", padding: "5px" }}
          src={node}
          alt={""}
        />
        <img
          style={{ height: "100px", width: "100px", padding: "5px" }}
          src={express}
          alt={""}
        />
        <img
          style={{ height: "100px", width: "100px", padding: "5px" }}
          src={mongodb}
          alt={""}
        />
        <img
          style={{ height: "100px", width: "100px", padding: "5px" }}
          src={mysql}
          alt={""}
        />
        <img
          style={{ height: "100px", width: "100px", padding: "5px" }}
          src={mui}
          alt={""}
        />
      </TechStackContainer>
    </Container>
  );
};

export default About;

const Container = styled.div`
  background-color: black;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: white;
  }
`;

const ImageContainer = styled.div`
  background-color: green;
  width: 25%;
  height: 40vh;
  border-radius: 5px;
  padding: 20px;
  @media (max-width: 500px) {
     {
      max-height: 20vh;
      max-width: 50%;
    }
  }

  @media (min-width: 501px) {
     {
      max-height: 60vh;
      max-width: 70%;
    }
  }
`;

const TextContainer = styled.div`
  background-color: black;
  width: 85%;
  height: 40vh;
  border-radius: 5px;

  padding: 20px;
  text-align: left;
  color: white;

  @media (max-width: 500px) {
    p {
      font-size: 1.2em;
    }
  }

  @media (min-width: 501px) {
    p {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 500px) {
     {
      max-height: 40vh;
      max-width: 100%;
      margin-top: 20px;
    }
  }

  @media (min-width: 501px) {
     {
      max-height: 40vh;
      max-width: 50%;
    }
  }
`;

const EducationContainer = styled.div`
  background-color: red;
  width: 90%;
  height: auto;
  border-radius: 5px;
  font-size: 30px;
  text-align: center;
  color: white;
  margin-bottom: 150px;
  margin-top: 150px;
`;

const ExperienceContainer = styled.div`
  background-color: red;
  width: 90%;
  height: auto;
  border-radius: 5px;
  font-size: 30px;
  text-align: center;
  color: white;
  margin-bottom: 150px;
`;

const TechStackContainer = styled.div`
  background-color: red;
  width: 100%;
  height: auto;
  border-radius: 5px;
  font-size: 30px;
  text-align: center;
  color: white;
  margin-bottom: 150px;
`;

const BodyContainer = styled.div`
  background-color: black;
  margin-top: 100px;
  margin-bottom: 150px;
  width: auto;
  height: auto;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 500px) {
     {
      flex-direction: column;
      align-items: center;
    }
  }

  @media (min-width: 501px) {
     {
    }
  }
`;
