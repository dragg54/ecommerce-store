import React from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

import {
  HeaderContainer,
  HeroCaptionContainer,
  HeroContainer,
  HeroPrimaryCaption,
  HeroSecondaryCaption,
  Logo,
  NavElements,
  NavList,
  PrimaryButton,
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
        <NavList>
        <NavElements>MY ACCOUNT</NavElements>
        <NavElements>
          <FiSearch />
        </NavElements>
        <NavElements>
          <FiShoppingBag />
        </NavElements>
      </NavList>
      </HeaderContainer>
      <HeroCaptionContainer>
        <HeroPrimaryCaption>TIS THE SEASON</HeroPrimaryCaption>
        <HeroSecondaryCaption>SHOP OUR SELECTION OF UNIQUE GIFTS<br/> GUARANTEED TO MAKE YOU SMILE.</HeroSecondaryCaption>
        <PrimaryButton>SHOP NOW</PrimaryButton>
      </HeroCaptionContainer>
    </HeroContainer>
  );
}

export default Header;
