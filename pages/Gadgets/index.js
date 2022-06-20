import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ImageCaption,
  ImageContainer,
  ImageNumber,
  ImageSection,
} from "../../components/Section/StyledSection";
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
  InputContainer,
  SearchContainer,
  Input,
} from "../../components/Hero/StyledHero";
import { FiMenu, FiSearch, FiShoppingBag } from "react-icons/fi";
import {
  CartButton,
  ImageWrapper,
  ProductContainer,
} from "../Women/StyledWomenComponent";
import { BsCart3 } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import Footer from "../../components/Footer";
import Link from "next/link";

function menPage({ products }) {
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
        <NavElements user><FaUser /></NavElements>
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
      <ImageWrapper category>
        <ImageSection primary>
          {products.map((product) => {
            if (product.category === "electronics") {
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
                      product.title.length > 30
                        ? product.title.substring(0, 20) + "..."
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
      <Footer />
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
