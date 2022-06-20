import React from 'react'
import Image from "next/image";
import Shoe from "../../../assets/images/shoe.jpg";
import BestPriceShoe from "../../../assets/images/bestprice.jpg";
import {
  BuyNowButton,
  Desc,
  DescrContainer,
  DescrHeader,
  Header,
  NewInCaption,
  NewInContainer,
  NewProducImgDecrContainer,
  NewProductContainer,
  NewProductImageContainer,
  NewProductName,
  NewProductSection,
} from "../NewProductSection/StyledNewProduct";

function BestPrice() {
  return (
    <NewProductContainer>
      <Header>BEST PRICE</Header>
      <NewProductSection>
        <NewProductImageContainer>
          <Image src={BestPriceShoe} layout='responsive' alt="img" />
          <NewInContainer>
            <NewInCaption primary>50%</NewInCaption>
          </NewInContainer>
          <NewProductName primary>sale</NewProductName>
        </NewProductImageContainer>
        <NewProducImgDecrContainer>
          <Image src={Shoe} width={550} height={600} />
          <DescrContainer primary>
            <DescrHeader>END. AND ADIDAS</DescrHeader>
            <Desc>
                Following on from their recent football culture-inspired 'Three Bridges' capsule, END. and adidas join forces again, looking towards the world of ceramics
            </Desc>
            <BuyNowButton>BUY NOW</BuyNowButton>
          </DescrContainer>
        </NewProducImgDecrContainer>
      </NewProductSection>
    </NewProductContainer>
  );
}

export default BestPrice;