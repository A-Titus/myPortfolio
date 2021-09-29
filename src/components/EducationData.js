import * as React from "react";
import styled from "styled-components";
import wtc from "../pages/images/wtc.png";
import dbe from "../pages/images/dbe.png";
import ti from "../pages/images/ti.png";
import mancosa from "../pages/images/mancosa.png";

function createData(qualification, institution, year, image) {
  return { qualification, institution, year, image };
}
console.log(wtc);

const rows = [
  createData("Matric", "Insitute for quality collegiate", 2017, dbe),
  createData("NQF 4 Technical Support", "Torque It", 2018, ti),
  createData(
    "Higher Certificate in Information Technology",
    "Mancosa",
    2019,
    mancosa
  ),
  createData("Software Engineer Course", "WeThinkCode", "2019-2021", wtc),
  createData(
    "Higher Certificate in Systems Development",
    "WeThinkCode",
    "2019-2021",
    wtc
  ),
];

export default function EducationData(props) {
  console.log(props.index);
  return (
    <EducationContent>
      <DescriptionContainer>
        <p><span className="title">Qualification:</span> {rows[props.index].qualification}</p>{" "}
        <p><span className="title">Institution: </span>{rows[props.index].institution}</p>
        <p><span className="title">Year:</span> {rows[props.index].year}</p>
      </DescriptionContainer>
      <ImageContainer>
        <img src={rows[props.index].image} alt="Logo" />
      </ImageContainer>
    </EducationContent>
  );
}

const EducationContent = styled.div`
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
