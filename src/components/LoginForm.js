import React from "react";
import styled from "styled-components";
import bg1 from "../images/login/bg1.svg"
import bg2 from "../images/login/bg2.svg"
import { Link } from "react-router-dom";

function LoginForm(props) {
  return (
    <Container>
      <BackgroundImage loading="lazy" src={bg1}/>
      <LogoContainer>
        <LogoText style={{ fontFamily: "Poppins, sans-serif" }}>
          ViajandoJuntos
        </LogoText>
        <LogoDot style={{ fontFamily: "Poppins, sans-serif" }}>.</LogoDot>
      </LogoContainer>
      <Subtitle>¡Ingresa y empieza a planificar tu diversión!</Subtitle>
        <Input type="text" placeholder="usuario"/>
        <Input type="password" placeholder="contraseña"/>
      <RememberMeContainer>
        <Checkbox />
        <RememberMeText>Remember me</RememberMeText>
        <ForgotPasswordLink>Forgot password?</ForgotPasswordLink>
      </RememberMeContainer>
      <Button>
        <Link to = "/my-account/posts">Login</Link>
        </Button>
      <FooterImage loading="lazy" src={bg2}/>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--background, #fcfdfc);
  display: flex;
  flex-direction: column;
  max-height: 742px;
  @media(max-witdh: 991px){
    max-height: 649px;
  }
`;

const BackgroundImage = styled.img`
  aspect-ratio: 11.53;
  object-fit: cover;
  object-position: center;
  width: 100%;
  overflow: hidden;
  align-self: stretch;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const LogoContainer = styled.div`
  color: #141f0f;
  text-align: center;
  align-self: center;
  margin-top: 67px;
  text-wrap: nowrap;
  font: 400 64px Poppins, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
    font-size: 40px;
    margin-top: 40px;
    text-wrap: initial;
  }
`;

const LogoText = styled.span``;

const LogoDot = styled.span``;

const Subtitle = styled.div`
  color: #141f0f;
  text-align: center;
  align-self: center;
  margin-top: 37px;
  text-wrap: nowrap;
  font: 400 16px Poppins, sans-serif;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;
const Input = styled.input`
color: #fff;
text-align: left;
align-self: center;
text-wrap: nowrap;
border-radius: 10px;
background-color: #141f0f;
margin-top: 29px;
width: 300px;
max-width: 100%;
padding: 15px 20px;
font: 400 14px/142.857% Poppins, sans-serif;

@media (max-width: 991px) {
  text-wrap: initial;
}
`;

const RememberMeContainer = styled.div`
  align-self: center;
  display: flex;
  margin-top: 23px;
  width: 292px;
  max-width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
  padding: 0 20px;

  @media (max-width: 991px) {
    justify-content: center;
  }
`;

const Checkbox = styled.div`
  border-radius: 5px;
  background-color: #141f0f;
  align-self: stretch;
  display: flex;
  width: 18px;
  height: 17px;
  flex-direction: column;
`;

const RememberMeText = styled.div`
  color: #093545;
  text-align: center;
  margin: auto 0;
  font: 500 14px Poppins, sans-serif
`;

const ForgotPasswordLink = styled.a`
  color: #000;
  text-align: center;
  align-self: start;
  margin-top: 4px;
  text-wrap: nowrap;
  font: 500 14px Poppins, sans-serif
  cursor: pointer;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const Button = styled.div`
  border-radius: 10px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
  background-color: var(--accent, #63ab44);
  align-self: center;
  display: flex;
  margin-top: 22px;
  width: 300px;
  max-width: 100%;
  flex-direction: column;
  padding: 15px 20px;
  cursor: pointer;
  text-align: center;
`;

const FooterImage = styled.img`
  aspect-ratio: 11.53;
  object-fit: cover;
  object-position: center;
  width: 100%;
  overflow: hidden;
  align-self: stretch;
  margin-top: 46px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

export default LoginForm;