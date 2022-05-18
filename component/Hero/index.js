import React from "react";
import {
  HeaderContainer,
  HeroContainer,
  Logo,
  NavElements,
  NavList,
} from "./StyledHero";

function Header() {
  return (
    <HeroContainer>
      <HeaderContainer>
        <Logo>ABC.</Logo>
        <NavList>
          <NavElements>MEN</NavElements>
          <NavElements>WOMEN</NavElements>
          <NavElements>SALE</NavElements>
          <NavElements>NEW IN</NavElements>
          <NavElements>DESIGNERS</NavElements>
          <NavElements>THE JOURNAL</NavElements>
          <NavElements>STYLES</NavElements>
        </NavList>
      </HeaderContainer>
    </HeroContainer>
  );
}

export default Header;
