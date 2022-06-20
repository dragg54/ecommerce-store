import React from 'react'
import MaleModel from "../../../assets/images/maleModel.jpg"
import FemaleModel from "../../../assets/images/femaleModel.jpg"
import Shoe from "../../../assets/images/shoeModel.jpg"
import { JournalContainer, JournalWrapper, StyledHeader } from '../Journal/StyledJournal';
import { ImageContainer, Liner, LinerContainer } from '../StyledSection';
import Image from "next/image"
import { DateAndLikes, Dates, Likes } from './StyledInstagram';
function Instagram() {
  return (
    <JournalWrapper secondary>
      <StyledHeader secondary>WE ARE ON INSTAGRAM</StyledHeader>
      <JournalContainer>
        <ImageContainer secondary>
          <Image src={MaleModel} width={400} height={500} alt="image" />
          <DateAndLikes>
            <Dates>11.05.2021</Dates>
            <Likes>112,000 LIKES</Likes>
          </DateAndLikes>
        </ImageContainer>
        <ImageContainer secondary>
          <Image
            src={FemaleModel}
            width={400}
            height={500}
            primary
            alt="image"
          />
          <DateAndLikes>
            <Dates>21.05.2021</Dates>
            <Likes>124,070 LIKES</Likes>
          </DateAndLikes>
        </ImageContainer>
        <ImageContainer secondary>
          <Image src={Shoe} width={400} height={500} alt="image" />
          <DateAndLikes>
              <Dates>13.06.2021</Dates>
              <Likes>96,070 LIKES</Likes>
            </DateAndLikes>
        </ImageContainer>
      </JournalContainer>
    </JournalWrapper>
  );
}

export default Instagram