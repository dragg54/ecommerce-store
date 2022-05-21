import Image from "next/image";
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
} from "../../component/Hero/StyledHero";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import {
  CartButton,
  ImageWrapper,
  ProductContainer,
} from "../Women/StyledWomenComponent";

function menPage({ products }) {
  return (
    <>
      <HeaderContainer primary>
        <Logo primary>ABC.</Logo>
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
      <ImageWrapper>
        <ImageSection primary>
          {products.map((product) => {
            if (product.category === "men's clothing") {
              return (
                <ProductContainer>
                  <ImageContainer primary key={product.id}>
                    <Image
                      src={product.image}
                      width={200}
                      height={300}
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
                    <CartButton>ADD TO CART</CartButton>
                  </ImageContainer>
                </ProductContainer>
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
