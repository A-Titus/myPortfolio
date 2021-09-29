import React from "react";
import styled from "styled-components";
import EducationData from "../components/EducationData";
import ExperienceData from "../components/ExperienceData";
import Footer from "../components/Footer";
// import StackData from "../components/TechStack";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";

// import css from "./images/css.png";
// import html from "./images/html.png";
// import javascript from "./images/javascript.png";
// import mui from "./images/mui.png";
// import mysql from "./images/mysql.png";
// import node from "./images/node.png";
// import react from "./images/react.png";
// import reactNative from "./images/reactNative.png";
// import express from "./images/express.png";
// import mongodb from "./images/mongodb.png";
// import java from "./images/java.png";

const About = () => {
  return (
    <Container>
      <BodyContainer>
        <ImageContainer>
          <img style={{ height: "auto", width: "100%" }} src={""} alt={""} />
        </ImageContainer>
        <TextContainer>
          <p>
            Hi, My name is a Abdus-Samad Titus and I am a Full stack Javascript
            developer currently residing in Johannesburg South Africa. I am a{" "}
            <a
              href="https://www.wethinkcode.co.za/"
              style={{ textDecoration: "none", color: "deepskyblue" }}
            >
              WTC{" "}
            </a>
            graduate where i completed a 2 year software engineering program. I
            am pationate about creating web and mobile applictions that not only
            look awsome but add value to your lives.
          </p>
        </TextContainer>
      </BodyContainer>
      <BodyBottomContainer>
        <EducationContainer>
          <HeaderContainer></HeaderContainer>
          <h4 style={{ color: "white", fontSize: "30px" }}>Education</h4>
          <TilesContainer>
            <EducationData index={0} />
            <EducationData index={1} />
          </TilesContainer>
          <TilesContainer>
            <EducationData index={2} />
            <EducationData index={3} />
          </TilesContainer>
          <TilesContainer>
            <EducationData index={4} />
            <EducationData index={4} />
          </TilesContainer>
        </EducationContainer>{" "}
        <ExperienceContainer>
          <HeaderContainer></HeaderContainer>
          <h4 style={{ color: "white", fontSize: "30px" }}>Experience</h4>
          <TilesContainer>
            <ExperienceData index={0} />
            <ExperienceData index={1} />
          </TilesContainer>
          <TilesContainer>
            <ExperienceData index={2} />
            <ExperienceData index={3} />
          </TilesContainer>
        </ExperienceContainer>{" "}
          {/* <HeaderContainer></HeaderContainer>
          <h4 style={{ color: "white", fontSize: "30px" }}>Tech Stack</h4> */}
        {/* <TechStackContainer>
          <StackData image={node}/>
          <StackData image={react}/>
          <StackData image={javascript}/>
          <StackData image={html }/>
          <StackData image={css}/>
          <StackData image={mongodb}/>
        </TechStackContainer> */}
      </BodyBottomContainer>
      <Footer />
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
      max-width: 70%;
    }
  }

  @media (min-width: 501px) {
     {
      max-height: 30vh;
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
      font-size: 1.5em;
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
      max-width: 60%;
    }
  }
`;

const EducationContainer = styled.div`
  background-color: black;
  border-radius: 5px;
  font-size: 30px;
  color: white;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
     {
      height: 80vh;
      width: 90%;
      margin-bottom: 350px;
    }
  }

  @media (min-width: 501px) {
     {
      height: 100vh;
      width: 90%;
    }
  }
`;

const TilesContainer = styled.div`
  width: 100%;
  height: 35vh;
  background-color: black;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 500px) {
     {
      flex-direction: column;
      align-items: center;

      width: 100%;
      height: 55vh;
    }
  }

  @media (min-width: 501px) {
     {
      width: 100%;
      height: 35vh;
    }
  }
`;

const ExperienceContainer = styled.div`
  background-color: black;
  border-radius: 5px;
  font-size: 30px;
  color: white;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 500px) {
     {
      height: 80vh;
      width: 90%;
      margin-top: 250px;
    }
  }

  @media (min-width: 501px) {
     {
      height: 73vh;
      width: 90%;
    }
  }
`;

// const TechStackContainer = styled.div`
//   background-color: blue;
//   border-radius: 5px;
//   font-size: 30px;
//   color: white;
//   margin-top: 150px;
//   margin-bottom: 50px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;

//   @media (max-width: 500px) {
//      {
//       height: 80vh;
//       width: 90%;
//       margin-bottom: 350px;
//     }
//   }

//   @media (min-width: 501px) {
//      {
//       height: 50vh;
//       width: 90%;
//     }
//   }
// `;

const HeaderContainer = styled.div`
  background-color: red;
  width: 95%;
  height: 20px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;

  @media (max-width: 500px) {
     {
      width: 95%;
      height: 20px;
    }
  }

  @media (min-width: 501px) {
     {
      width: 95%;
      height: 20px;
    }
  }
`;

const BodyContainer = styled.div`
  background-color: black;
  margin-top: 100px;
  margin-bottom: 50px;
  width: auto;
  height: auto;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 1000px) {
     {
      flex-direction: column;
      align-items: center;
      margin-bottom: 550px;
    }
  }

  @media (min-width: 1001px) {
     {
      padding: 20px;
    }
  }
`;

const BodyBottomContainer = styled.div`
  background-color: black;
  margin-top: 50px;
  margin-bottom: 150px;
  width: 100%;
  height: auto;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
