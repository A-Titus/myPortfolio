import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { TextField } from "@mui/material";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

function Contact() {
  const SendBtn = useSpring({
    to: { x: 0 },
    from: { x: 10 },
    delay: 50,
    loop: { reverse: true },
  });
  return (
    <Container>
      <ContactContainer>
        <h1>Get in touch</h1>
        <p style={{ fontSize: "15px" }}>
          Feel free to contact me if you have any questions
        </p>
        <FooterContainer>
          <Footer />
        </FooterContainer>
      </ContactContainer>
      <FormContainer>
        <NameContainer>
          <WhiteBorderTextField
            color="error"
            id="outlined"
            variant="outlined"
            label="Name"
            fullWidth
            style={{
              backgroundColor: "#121212",
              borderColor: "white",
              marginRight: "10px"
            }}
            InputProps={{
              style: {
                color: "white",
              },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />
          <WhiteBorderTextField
            color="error"
            id="outlined"
            variant="outlined"
            label="Surname"
            fullWidth
            style={{
              backgroundColor: "#121212",
              borderColor: "white",
              marginLeft: "10px"
            }}
            InputProps={{
              style: {
                color: "white",
              },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />
        </NameContainer>
        <EmailContainer>
          <WhiteBorderTextField
            color="error"
            id="outlined"
            variant="outlined"
            label="Email"
            fullWidth
            style={{
              backgroundColor: "#121212",
              borderColor: "white",
            }}
            InputProps={{
              style: {
                color: "white",
              },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />
        </EmailContainer>
        <MessageContainer>
          <WhiteBorderTextField
            color="error"
            id="outlined"
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={12}
            style={{
              backgroundColor: "#121212",
            }}
            InputProps={{
              style: {
                color: "white",
              },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
          />
        </MessageContainer>
        <ButtonContainer>
          <animated.div style={SendBtn}>
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
              onClick={() => {
                console.log("send");
              }}
            >
              Send
            </Button>
          </animated.div>
        </ButtonContainer>
      </FormContainer>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
    width; 100%;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 500px) {
        {
         height: 150vh;
         max-width: 100%;
         display: column;
         justify-content: center;
         align-items: center;
         flex-direction: column;
       }
     }
    
     @media (min-width: 501px) {
        {
         max-height: 100vh;
         max-width: 100%;
       }
     }
`;

const FormContainer = styled.div`
  width: 40%;
  height: 70vh;
  background-color: black;
  border-radius: 5px;
  margin-right: 70px;
  display: column;
  justify-content: center;
  align-items: flex-start;
  padding: 25px;

  @media (max-width: 500px) {
     {
      max-height: 70vh;
      width: 80%;
      margin-right: 0px;
      margin-bottom: 30px;
    }
  }

  @media (min-width: 501px) {
     {
      max-height: 70vh;
      max-width: 40%;
    }
  }
`;

const ContactContainer = styled.div`
  width: 40%;
  height: 80vh;
  background-color: black;
  border-radius: 5px;
  margin-left: 70px;
  display: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  color: white;

  @media (max-width: 500px) {
     {
      max-height: 80vh;
      width: 80%;
      margin-left: 0px;
      margin-top: 100px;
    }
  }

  @media (min-width: 501px) {
     {
      max-height: 80vh;
      max-width: 40%;
    }
  }
`;

const MessageContainer = styled.div`
  width: 100%;
  height: 30vh;
  background-color: black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom 120px;
`;

const EmailContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const NameContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: black;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const FooterContainer = styled.div`
  width: 100%;
  height: 20vh;
  background-color: black;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 10vh;
  background-color: black;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid red;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  background: red;
  color: #fff;
  margin-left: -12;
`;

const WhiteBorderTextField = styled(TextField)`
  & label.Mui-focused {
    color: white;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: white;
    }
  }
`;
