import * as React from "react";
import styled from "styled-components";





export default function StackData(props) {
  return (

      <ImageContainer>
        <img src={props.image} alt="Logo" />
      </ImageContainer>

  );
}



const ImageContainer = styled.div`
  background-color: black;
  width: 15%;
  height: 15vh;
  border-radius: 5px;
  font-size: 30px;
  align-self: center;
  color: white;
  padding: 5px;

  img {
    height: 30%;
    width: 30%;
    border-radius: 5px;

  }
`;



