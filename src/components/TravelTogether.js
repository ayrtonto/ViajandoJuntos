import React from "react";
import styled from "styled-components";

function TravelTogether() {
  return (
    <Container>
      <Header>
        <Logo>TravelTogether.</Logo>
        <Navigation>
          <NavItem>Home</NavItem>
          <NavItem>Foro</NavItem>
          <NavItem>Planifica</NavItem>
          <NavItem>Beneficios</NavItem>
          <NavItem>Sobre nosotros</NavItem>
          <NavItem>Ingresa</NavItem>
        </Navigation>
      </Header>
      <Main>
        <Hero>
          <HeroTitle>Reserva tu próximo vuelo</HeroTitle>
          <SearchForm>
            <SearchInput type="text" placeholder="Lima, Perú" />
            <SearchInput type="text" placeholder="Kyoto, Japón" />
            <SearchInput type="date" />
            <SearchInput type="text" placeholder="1 persona, economía" />
            <SearchButton>Buscar</SearchButton>
          </SearchForm>
          <Options>
            <Option>
              <OptionIcon />
              <OptionText>Solo ida</OptionText>
            </Option>
            <Option>
              <OptionIcon />
              <OptionText>Ida y vuelta</OptionText>
            </Option>
          </Options>
          <Options>
            <Option>
              <OptionIcon2 />
              <OptionText>Lima, Perú</OptionText>
            </Option>
            <Option>
              <OptionIcon2 />
              <OptionText>Kyoto, Japón</OptionText>
            </Option>
          </Options>
          <Options>
            <Option>
              <OptionIcon3 />
              <OptionText>25/11/2023</OptionText>
            </Option>
          </Options>
          <Options>
            <Option>
              <OptionIcon4 />
              <OptionText>1 persona, economía</OptionText>
            </Option>
          </Options>
          <Options>
            <Option>
              <OptionIcon5 />
              <OptionText>Todas las escalas</OptionText>
            </Option>
            <Option>
              <OptionIcon5 />
              <OptionText>1 Escala</OptionText>
            </Option>
            <Option>
              <OptionIcon5 />
              <OptionText>2 o más escalas</OptionText>
            </Option>
          </Options>
          <Options>
            <Option>
              <OptionIcon6 />
              <OptionText>Todas las opciones</OptionText>
            </Option>
            <Option>
              <OptionIcon6 />
              <OptionText>Equipaje de mano</OptionText>
            </Option>
            <Option>
              <OptionIcon6 />
              <OptionText>Equipaje en bodega</OptionText>
            </Option>
          </Options>
        </Hero>
        <BestOptions>
          <OptionColumn>
            <OptionTitle>Lo mejor</OptionTitle>
            <OptionImage />
          </OptionColumn>
          <OptionColumn>
            <OptionTitle>Lo más barato</OptionTitle>
            <OptionTitle>Lo más rápido</OptionTitle>
          </OptionColumn>
        </BestOptions>
      </Main>
      <Footer>
        <FooterColumn>
          <FooterTitle>TravelTogether.</FooterTitle>
          <FooterText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel
          </FooterText>
        </FooterColumn>
        <FooterColumn>
          <FooterLinks>
            <FooterLink>Anexos</FooterLink>
            <FooterLink>Descubre</FooterLink>
            <FooterLink>Descuentos especiales</FooterLink>
            <FooterLink>Servicios</FooterLink>
            <FooterLink>Comunidad</FooterLink>
            <FooterLink>About Us</FooterLink>
          </FooterLinks>
          <FooterLinks>
            <FooterLink>Servicios</FooterLink>
            <FooterLink>Sobre nosotros</FooterLink>
            <FooterLink>Blog & Articulos</FooterLink>
            <FooterLink>Términos y Condiciones</FooterLink>
            <FooterLink>Política</FooterLink>
            <FooterLink>Contáctanos</FooterLink>
          </FooterLinks>
        </FooterColumn>
        <FooterColumn>
          <FooterContact>
            <FooterContactItem>Contacto</FooterContactItem>
            <FooterContactItem>Dirección</FooterContactItem>
            <FooterContactItem>Lorem ipsum</FooterContactItem>
            <FooterContactItem>Teléfono: 123 456 7890</FooterContactItem>
            <FooterContactItem>Email: UPC@gmail.com</FooterContactItem>
            <FooterContactItem>Maps: Lorem Ipsum</FooterContactItem>
          </FooterContact>
        </FooterColumn>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: #d8ecd0;
  align-self: stretch;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 21px 20px 10px;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Logo = styled.div`
  color: #3a2244;
  max-width: 303px;
  align-self: start;
  margin-top: 4px;
  flex-grow: 1;
  flex-basis: auto;
  font: 700 33.18px/120% Poppins, sans-serif;
`;

const Navigation = styled.div`
  align-self: start;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 19px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const NavItem = styled.div`
  color: #3a2244;
  align-self: start;
  font: 400 22px/180% Poppins, sans-serif;
`;

const Main = styled.div`
  align-self: center;
  display: flex;
  margin-top: 105px;
  width: 100%;
  max-width: 1344px;
  flex-direction: column;
  padding: 0 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Hero = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  margin-top: 48px;
  width: 100%;

  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const HeroTitle = styled.div`
  color: #295943;
  align-self: start;
  margin-left: 36px;
  max-width: 1255px;
  font: 700 40px/120% Poppins, sans-serif;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const SearchForm = styled.div`
  align-self: start;
  display: flex;
  margin-top: 51px;
  width: 100%;
  flex-direction: column;
  padding: 17px 20px 17px 15px;

  @media (max-width: 991px) {
    margin: 40px 0 0 1px;
  }
`;

const SearchInput = styled.input`
  border-radius: 10px;
  border: 1px solid #fff;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  padding: 14px 27px 14px 22px;
`;

const SearchButton = styled.button`
  border-radius: 10px;
  background-color: var(--accent, #63ab44);
  align-self: stretch;
  display: flex;
  margin-top: 25px;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 14px 27px 14px 22px;
  cursor: pointer;
`;

const Options = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-grow: 1;
  flex-direction: column;
  margin-top: 44px;
  padding: 20px 20px 20px 19px;

  @media (max-width: 991px) {
    margin: 40px 0 0 1px;
  }
`;

const Option = styled.div`
  align-items: flex-start;
  align-self: start;
  display: flex;
  margin-top: 16px;
  width: 100%;
  gap: 6px;
`;

const OptionIcon = styled.div`
  border-radius: 100px;
  border: 3px solid #5470ff;
  box-shadow: 0px 3px 5px 0px rgba(46, 46, 66, 0.08);
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 20px;
  height: 20px;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: auto;
`;

const OptionText = styled.div`
  color: #000;
  align-self: stretch;
  text-wrap: nowrap;
  font: 400 15px/133.333% Poppins, sans-serif;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const OptionIcon2 = styled.div`
  border-radius: 100px;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 3px 5px 0px rgba(46, 46, 66, 0.08);
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 20px;
  height: 20px;
  flex-direction: column;
  flex-grow: 1;
  flex-basis: auto;
`;

const OptionIcon3 = styled.div`
  border-radius: 100px;
  border: 1px solid #000;
  box-shadow: 0px 3px 5px 0px rgba(46, 46, 66, 0.08);
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 17px;
  height: 15px;
  flex-direction: column;
`;

const OptionIcon4 = styled.div`
  border-radius: 100px;
  border: 1px solid #000;
  box-shadow: 0px 3px 5px 0px rgba(46, 46, 66, 0.08);
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 20px;
  height: 20px;
  flex-direction: column;
`;

const OptionIcon5 = styled.div`
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 3px 5px 0px rgba(46, 46, 66, 0.08);
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 20px;
  height: 20px;
  flex-direction: column;
`;

const OptionIcon6 = styled.div`
  border-radius: 5px;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 3px 5px 0px rgba(46, 46, 66, 0.08);
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 20px;
  height: 20px;
  flex-direction: column;
`;

const BestOptions = styled.div`
  gap: 20px;
  display: flex;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const OptionColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 30%;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const OptionTitle = styled.div`
  justify-content: center;
  color: #63ab44;
  font: 700 20px Poppins, sans-serif;
`;

const OptionImage = styled.img`
  aspect-ratio: 4.75;
  object-fit: cover;
  object-position: center;
  width: 859px;
  overflow: hidden;
  align-self: start;
  margin-top: 41px;
  max-width: 100%;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const Footer = styled.div`
  align-self: center;
  display: flex;
  margin-top: 196px;
  width: 100%;
  max-width: 1317px;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 20%;
  margin-left: 20px;

  @media (max-width: 991px) {
    width: 100%;
  }
`;

const FooterTitle = styled.div`
  color: #fff;
  align-self: start;
  text-wrap: nowrap;
  font: 400 33.18px/120% Poppins, sans-serif;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const FooterText = styled.div`
  color: #fff;
  margin-top: 15px;
  font: 400 16px Poppins, sans-serif;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FooterLink = styled.div`
  color: #fff;
  text-transform: capitalize;
  align-self: start;
  font: 400 16px Poppins, sans-serif;

  @media (max-width: 991px) {
    text-wrap: initial;
  }
`;

const FooterContact = styled.div`
  display: flex;
  margin-top: 6px;
  flex-direction: column;

  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

const FooterContactItem = styled.div`
  color: #fff;
  text-transform: capitalize;
  align-self: start;
  font: 400 16px Poppins, sans-serif;
`;

export default TravelTogether;