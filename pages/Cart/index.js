import React, { useState, useEffect } from "react";
import {
  ImageCaption,
  ImageNumber,
  ImageSection,
} from "../../component/Section/StyledSection";
import {
  HeaderContainer,
  Logo,
  NavList,
  NavElements,
  CartLogo,
  NoOfCartedProducts,
  MenuIcon,
  NavIcons,
  CartIcon,
} from "../../component/Hero/StyledHero";
import { FiMenu, FiSearch, FiShoppingBag } from "react-icons/fi";
import {
  CartButton,
  ImageWrapper,
  ProductContainer,
} from "../Women/StyledWomenComponent";
import { BsCart3 } from "react-icons/bs";

import {
  BtnContainer,
  CartBtnContainer,
  CartContainer,
  CartHeader,
  CartImgContainer,
  CartProductsContainer,
  DeleteBtn,
  EmptyCartCaption,
  EmptyCartContainer,
  EmptyCartImgContainer,
  ImageContainer,
  InStock,
  Price,
  ProductContent,
  ProductDescr,
  SelectBtn,
  Slash,
} from "./StyledCartSection";
import EmptyCart from "../../assets/images/emptycart.jpg";
import SadEmoji from "../../assets/images/emoji.jpg";
import Image from "next/image";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("storedProducts"));
    if (cartProducts) {
      setCartProducts(cartProducts);
    }
   
  }, [])

  const deleteItem = id =>{
    const cartItems = cartProducts.filter(cartProduct=>cartProduct.id != id)
    if(cartItems){
      localStorage.setItem("storedProducts", JSON.stringify(cartItems))
      setCartProducts(cartItems)
    }
  }

  if (cartProducts.length>0) {
    return (
      <>
      <HeaderContainer primary>
        <MenuIcon>
          <FiMenu />
        </MenuIcon>
        <Logo primary>ABC.</Logo>
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
                {cartProducts ? cartProducts.length : 0}
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
              <FiShoppingBag />
              <NoOfCartedProducts>
                {cartProducts ? cartProducts.length : 0}
              </NoOfCartedProducts>
            </CartLogo>
          </NavElements>
        </NavList>
      </HeaderContainer>
        <CartHeader>Shopping Cart</CartHeader>
        {cartProducts.map((cartProduct) => {
          return (
            <div>
              <CartContainer key={cartProduct.id}>
                <CartProductsContainer>
                  <CartImgContainer>
                    <Image src={cartProduct.image} width={220} height={250} />
                  </CartImgContainer>
                  <ProductContent>
                    <ProductDescr>
                      {cartProduct.description.length > 150
                        ? cartProduct.description.substring(0, 150) + "..."
                        : cartProduct.description}
                        <Price>${cartProduct.price}</Price>
                    </ProductDescr>
                    <div>
                      <InStock>In Stock</InStock>
                    </div>
                    <CartBtnContainer>
                        <SelectBtn class="select" name="option">
                          <option value='0'>
                            Qty:0
                          </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                        </SelectBtn>
                        <Slash>|</Slash>
                        <DeleteBtn onClick={()=>deleteItem(cartProduct.id)}>Delete</DeleteBtn>
                    </CartBtnContainer>
                  </ProductContent>
                </CartProductsContainer>
              </CartContainer>
            </div>
          );
        })}
      </>
    );
  } if(cartProducts.length==0){
    return (
      <EmptyCartContainer>
        <Image src={EmptyCart} width={750} height={400} alt="empty cart" />
        <EmptyCartCaption>
          Cart Empty <Image src={SadEmoji} height={50} width={50} />
        </EmptyCartCaption>
      </EmptyCartContainer>
    );
  }
}

export default Cart;
