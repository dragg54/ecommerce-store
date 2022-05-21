import Image from "next/image";
import Men from "../../assets/images/men.jpg";
import Women from "../../assets/images/woman.jpg";
import Accessories from "../../assets/images/watch.jpg";
import styled from "styled-components";
import {
  ImageCaption,
  ImageContainer,
  ImageNumber,
  ImageSection,
} from "./StyledSection";
import Link from "next/link";

const Section = () => {
  return (
    <ImageSection>
      <ImageContainer>
        <Image src={Men} width={300} height={400} alt="image" />
        <ImageNumber>1</ImageNumber>
        <Link href=".../../Men" passHref>
          <ImageCaption>MEN</ImageCaption>
        </Link>
      </ImageContainer>
      <ImageContainer>
        <Image src={Women} width={300} height={400} alt="image" />
        <ImageNumber>2</ImageNumber>
        <Link href="">
          <ImageCaption>WOMEN</ImageCaption>
        </Link>
      </ImageContainer>
      <ImageContainer>
        <Image src={Accessories} width={300} height={400} alt="image" />
        <ImageNumber>3</ImageNumber>
        <Link href="">
          <ImageCaption>ACCESSORIES</ImageCaption>
        </Link>
      </ImageContainer>
    </ImageSection>
  );
};

export default Section;