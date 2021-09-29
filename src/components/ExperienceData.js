import * as React from "react";
import styled from "styled-components";
import vodacom from "../pages/images/vodacom.png";
import wtc from "../pages/images/wtc.png";
import tarsus from "../pages/images/tarsus.jpeg";

function createData(title, institution, period, image) {
  return { title, institution, period, image };
}

const rows = [
  createData(
    "Technical support Intern",
    "Tarsus Technologies",
    "Jan 2018 - Feb 2019",
    tarsus
  ),
  createData(
    "Software Engineer Student",
    "WeThinkCode",
    "May 2019  -  May 2021",
    wtc
  ),
  createData(
    "Software Engineer Intern",
    "Vodacom",
    "Feb 2020 - Jul 2020",
    vodacom
  ),
  createData(
    "Software Engineer Intern",
    "Vodacom",
    "Mar 2021 - Present",
    vodacom
  ),
];

export default function ExperienceData(props) {
  return (
    <ExperienceContent>
      <DescriptionContainer>
        <p><span className="title">Title: </span>{rows[props.index].title}</p>{" "}
        <p><span className="title">Institution:</span> {rows[props.index].institution}</p>
        <p><span className="title">Period:</span> {rows[props.index].period}</p>
      </DescriptionContainer>
      <ImageContainer>
        <img src={rows[props.index].image} alt="Logo" />
      </ImageContainer>
    </ExperienceContent>
  );
}

const ExperienceContent = styled.div`
background-color: #121212;
width: 35%;
height: 25vh;
border-radius: 5px;
font-size: 20px;
text-align: center;
color: white;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: row;
padding: 5px;


@media (max-width: 500px) {
  {
    width: 95%;
    height: 30vh;
    margin-top: 5px;
    margin-bottom: 10px;
 }
}

@media (min-width: 501px) {
  {
    width: 35%;
    height: 25vh;
 }
}
`;

const ImageContainer = styled.div`
  background-color: #121212;
  width: 30%;
  height: 15vh;
  border-radius: 5px;
  font-size: 30px;
  align-self: flex-start;
  color: white;

  img {
    height: 100%;
    width: 100%;
    border-radius: 5px;
    margin-top: 20px;
  }
`;

const DescriptionContainer = styled.div`
  background-color: #121212;
  width: 40%;
  height: 20vh;
  border-radius: 5px;
  font-size: 20px;
  align-self: flex-start;
  color: white;

  h5 {
    text-align: left;
  }

  p {
    text-align: left;
    font-size: 15px;
  }

  .title {
    font-size: 15px;
    font-weight: bold;
  }

 
`;

