import Image from "next/image";
import Men from "../../assets/images/men.jpg";
import Women from "../../assets/images/woman.jpg";
import Accessories from "../../assets/images/watch.jpg";
import Gadgets from "../../assets/images/gadgets.jpg";
import styled from "styled-components";
import {
  ImageCaption,
  ImageContainer,
  ImageNumber,
  ImageSection,
  Liner,
  LinerContainer,
} from "./StyledSection";
import Link from "next/link";
import NewProduct from "./NewProductSection";
import BestPrice from "./BestPrice";
import SpringSale from "./SpringSale";
import Journal from "./Journal";
import StayFeel from "./StayFeel";
import Instagram from "./Instagram";
import FooterPicture from "./FooterPicture";
import Conclusion from "../Conclusion";

const Section = () => {
  return (
    <>
      <ImageSection>
        <ImageContainer>
          <Image src={Men} width={400} height={500} alt="image" />
          <ImageNumber>1</ImageNumber>
          <Link href=".../../Men" passHref>
            <ImageCaption>MEN</ImageCaption>
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Image src={Women} width={400} height={500} alt="image" />
          <ImageNumber>2</ImageNumber>
          <Link href=".../../Women" passHref>
            <ImageCaption>WOMEN</ImageCaption>
          </Link>
        </ImageContainer>
        <ImageContainer>
          <Image src={Accessories} width={400} height={500} alt="image" />
          <ImageNumber>3</ImageNumber>
          <Link href="">
            <ImageCaption>ACCESSORIES</ImageCaption>
          </Link>
        </ImageContainer>
        <ImageContainer lastChild>
        <Image src={Gadgets} width={400} height={500} alt="image" />
        <ImageNumber>4</ImageNumber>
        <Link href="">
          <ImageCaption>GADGETS</ImageCaption>
        </Link>
      </ImageContainer>
      </ImageSection>
      <LinerContainer>
        <Liner></Liner>
      </LinerContainer>
      <NewProduct/>
      <BestPrice />
      <SpringSale/>
      <Journal/>
      <StayFeel />
      <Instagram />
      <FooterPicture />
      <Conclusion />
    </>
  );
};

export default Section;
