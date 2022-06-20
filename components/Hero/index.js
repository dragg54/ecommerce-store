import React, { useState, useEffect } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import Link from "next/link";

import {
  CartIcon,
  CartLogo,
  HeaderContainer,
  HeroCaptionContainer,
  HeroContainer,
  HeroPrimaryCaption,
  HeroSecondaryCaption,
  Input,
  InputContainer,
  Logo,
  MenuIcon,
  NavElements,
  NavIcons,
  NavList,
  NoOfCartedProducts,
  PrimaryButton,
  SearchContainer,
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
          <NavElements user><FaUser /></NavElements>
          <NavElements>
          <InputContainer> 
              <Input type="text" placeholder='search'/>
              <SearchContainer><FiSearch /></SearchContainer>
            </InputContainer>
         
          </NavElements>
          <Link href="../../../Cart" passHref>
            <CartIcon>
              <CartLogo>
                <BsCart3 />
                <NoOfCartedProducts primary>
                  {localProducts ? localProducts.length : 0}
                </NoOfCartedProducts>
              </CartLogo>
            </CartIcon>
          </Link>
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
          <NavElements user><FaUser/></NavElements>
          <NavElements>
            <InputContainer> 
              <Input type="text" placeholder='search'/>
              <SearchContainer><FiSearch /></SearchContainer>
            </InputContainer>
         
          </NavElements>
          <NavElements>
            <Link href="../../../Cart" passHref>
            <CartLogo>
              <BsCart3 />
              <NoOfCartedProducts primary>
                {localProducts ? localProducts.length : 0}
              </NoOfCartedProducts>
            </CartLogo>
            </Link>
          </NavElements>
        </NavList>
      </HeaderContainer>
      <HeroCaptionContainer>
        <HeroPrimaryCaption>TIS THE SEASON TO SHOP FOR YOUR WISHES</HeroPrimaryCaption>
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
