import React, { useState, useEffect } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

import {
  CartLogo,
  HeaderContainer,
  HeroCaptionContainer,
  HeroContainer,
  HeroPrimaryCaption,
  HeroSecondaryCaption,
  Logo,
  NavElements,
  NavList,
  NoOfCartedProducts,
  PrimaryButton,
} from "./StyledHero";

function Header() {
  const[localProducts, setLocalProducts] = useState([])

  useEffect(()=>{
    const localProducts = JSON.parse(localStorage.getItem("storedProducts"))
      if(localProducts){
        setLocalProducts(localProducts)
      }
  },[]) 
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
            <CartLogo>
              <FiShoppingBag />
              <NoOfCartedProducts primary>
                {localProducts? localProducts.length: 0}
              </NoOfCartedProducts>
            </CartLogo>
          </NavElements>
        </NavList>
      </HeaderContainer>
      <HeroCaptionContainer>
        <HeroPrimaryCaption>TIS THE SEASON</HeroPrimaryCaption>
        <HeroSecondaryCaption>
          SHOP OUR SELECTION OF UNIQUE GIFTS
          <br /> GUARANTEED TO MAKE YOU SMILE.
        </HeroSecondaryCaption>
        <PrimaryButton>SHOP NOW</PrimaryButton>
      </HeroCaptionContainer>
    </HeroContainer>
  );
}

export default Header;
