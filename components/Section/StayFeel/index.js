import React from "react";
import {
    ImageCover,
    PlayContainer,
  StayFeelContainer,
  StayFeelDescContainer,
  StayFeelHeader,
  StayFeelImgContainer,
  StayFeelWrapper,
} from "./Styled.StayFeel";
import Bag from "../../../assets/images/bag.jpg";
import PradaBag from "../../../assets/images/bag2.jpg";
import Image from "next/image";
import { BuyNowButton, Desc, DescrHeader, NewInCaption, NewInContainer } from "../NewProductSection/StyledNewProduct";

function StayFeel() {
  return (
    <StayFeelWrapper>
      <StayFeelContainer>
        <StayFeelHeader>Stay Feel</StayFeelHeader>
        <StayFeelDescContainer>
          <Image src={Bag} height="700px" width="600px" />
          <DescrHeader secondary>THE DIOR AND RIMOWA <br/>PERSONAL CLUTCH</DescrHeader>
          <Desc>The rectangle bag is small enough to be carried by hand  <br/>and can also be worn over the shoulder with the optional strap leather</Desc>
          <BuyNowButton secondary>BUY NOW</BuyNowButton>
          <PlayContainer><NewInCaption>PLAY</NewInCaption></PlayContainer>
        </StayFeelDescContainer>
        <StayFeelImgContainer>
          <Image src={PradaBag} height="700px" width="600px" layout="responsive" />
          <ImageCover></ImageCover>
        </StayFeelImgContainer>
      </StayFeelContainer>
    </StayFeelWrapper>
  );
}

export default StayFeel;
