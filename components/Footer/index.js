import React from "react";
import { Containers, ExtraContainer, Extras, FooterContainer, Header, List } from "./StyledFooter";

function Footer() {
  return (
    <>
      <FooterContainer>
        <Containers left>
          <Header>CONTACT</Header>
          <List>info@abcshop.com</List>
          <List>+1 650 799 3672</List>
        </Containers>
        <Containers>
          <Header>CUSTOMER SERVICE</Header>
          <List>Help</List>
          <List>Shipping</List>
          <List>Returns</List>
          <List>Your Order</List>
        </Containers>
        <Containers right>
          <Header>NEWSLETTER SIGN UP</Header>
          <List>Email</List>
          <List>________________</List>
        </Containers>
      </FooterContainer>
      <ExtraContainer>
        <Extras>Copyright @ Sadiq Ajibola 2022 | All Rights Reserved</Extras>
        <Extras>Privacy Policy | Terms and Conditions</Extras>
        <Extras black>Apple Pay | PayPal | Master Card | Visa</Extras>
      </ExtraContainer>
    </>
  );
}

export default Footer;
