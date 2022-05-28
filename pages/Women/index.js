import Image from "next/image";
import React, { useState, useEffect } from "react";

import {
  ImageCaption,
  ImageContainer,
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
} from "./StyledWomenComponent";
import { BsCart3 } from "react-icons/bs";

function menPage({ products }) {
  const [noOfProdCarted, setNoOfProductCarted] = useState();
  const [localProducts, setLocalProducts] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (product) {
      const localProduct = JSON.parse(localStorage.getItem("storedProducts"));
      console.log(localProduct);
      setLocalProducts(localProduct);
    } else {
      setLocalProducts([]);
    }
  }, [product]);

  const handleItems = (product) => {
    setProduct(product);
    if (localProducts) {
      localStorage.setItem(
        "storedProducts",
        JSON.stringify([...localProducts, product])
      );
    } else {
      localStorage.setItem("storedProducts", JSON.stringify([product]));
    }
  };

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
              <FiShoppingBag />
              <NoOfCartedProducts primary>
              {localProducts? localProducts.length : 0}
              </NoOfCartedProducts>
            </CartLogo>
          </NavElements>
        </NavList>
      </HeaderContainer>
      <ImageWrapper>
        <ImageSection primary>
          {products.map((product) => {
            if (product.category === "women's clothing") {
              return (
                  <ImageContainer primary key={product.id}>
                    <Image
                      src={product.image}
                      width={200}
                      height={280}
                      alt="image"
                    />
                    <ImageNumber>{product.category}</ImageNumber>
                    <ImageCaption primary>
                      {`${
                        product.title.length > 20
                          ? product.title.substring(0, 30) + "..."
                          : product.title
                      }`}
                      <ImageCaption>${product.price}</ImageCaption>
                    </ImageCaption>
                    <CartButton onClick={() => handleItems(product)}>
                      ADD TO CART
                    </CartButton>
                  </ImageContainer>
              
              );
            }
          })}
        </ImageSection>
      </ImageWrapper>
    </>
  );
}

export default menPage;

export async function getStaticProps() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();

  return {
    props: {
      products: data,
    },
  };
}
