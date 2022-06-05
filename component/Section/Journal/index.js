import React from "react";
import Artwork from "../../../assets/images/artwork.jpg";
import { ImageCaption, ImageContainer, ImageNumber, Liner, LinerContainer } from "../StyledSection";
import Image from "next/image";
import { JournalContainer, JournalWrapper, StyledHeader } from "./StyledJournal";
import Shoe from "../../../assets/images/leather.jpg";
import Bicycle from "../../../assets/images/bicycle.jpg";

function Journal() {
  return (
    <>
    <JournalWrapper>
        <StyledHeader>JOURNAL</StyledHeader>
      <JournalContainer>
        <ImageContainer>
          <Image src={Artwork} width={400} height={500} alt="image" />
          <ImageNumber>111</ImageNumber>
          <ImageCaption>
            Discover the best artworks being released all over the world
          </ImageCaption>
        </ImageContainer>
        <ImageContainer>
          <Image src={Shoe} width={400} height={500} primary alt="image" />
          <ImageNumber>111</ImageNumber>
          <ImageCaption>
         Summer 19 Capsule
          </ImageCaption>
        </ImageContainer>
        <ImageContainer>
          <Image src={Bicycle} width={400} height={500} alt="image" />
          <ImageNumber>111</ImageNumber>
          <ImageCaption>
            Supreme teams with S&M for Retro 1995 BMX
          </ImageCaption>
        </ImageContainer>
      </JournalContainer>
    </JournalWrapper><LinerContainer  secondary><Liner></Liner></LinerContainer>
   </>
  );
}

export default Journal;
