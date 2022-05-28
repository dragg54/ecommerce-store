import React, { useState, useEffect } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

import {
  CartIcon,
  CartLogo,
  HeaderContainer,
  HeroCaptionContainer,
  HeroContainer,
  HeroPrimaryCaption,
  HeroSecondaryCaption,
  Logo,
  MenuIcon,
  NavElements,
  NavIcons,
  NavList,
  NoOfCartedProducts,
  PrimaryButton,
} from "./StyledHero";

function Header() {
  const [localProducts, setLocalProducts] = useState([]);

  useEffect(() => {
    if (localProducts) {
      const localProducts = JSON.parse(localStorage.getItem("storedProducts"));
      setLocalProducts(localProducts);
    }
  }, []);
  return (
    <HeroContainer>
      <HeaderContainer>
        <MenuIcon>
          <FiMenu />
        </MenuIcon>
        <Logo>ABC.</Logo>
        <NavIcons>
          {" "}
          <NavElements>MY ACCOUNT</NavElements>
          <NavElements>
            <FiSearch />
          </NavElements>
          <CartIcon>
            <CartLogo>
              <BsCart3 />
              <NoOfCartedProducts primary>
                {localProducts ? localProducts.length : 0}
              </NoOfCartedProducts>
            </CartLogo>
          </CartIcon>
        </NavIcons>
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
              <BsCart3 />
              <NoOfCartedProducts primary>
                {localProducts ? localProducts.length : 0}
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
