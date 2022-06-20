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
        <Link href=".../../Men" passHref>
          <ImageContainer>
            <Image src={Men} width={400} height={500} alt="image" />
            <ImageNumber>1</ImageNumber>
            <ImageCaption>MEN</ImageCaption>
          </ImageContainer>
        </Link>
        <Link href=".../../Women" passHref>
          <ImageContainer>
            <Image src={Women} width={400} height={500} alt="image" />
            <ImageNumber>2</ImageNumber>
            <ImageCaption>WOMEN</ImageCaption>
          </ImageContainer>
        </Link>
        <Link href=".../../Jewelries" passHref>
          <ImageContainer>
            <Image src={Accessories} width={400} height={500} alt="image" />
            <ImageNumber>3</ImageNumber>
            <ImageCaption>JEWELRIES</ImageCaption>
          </ImageContainer>
        </Link>
        <Link href=".../../Gadgets" passHref>
          <ImageContainer lastChild>
            <Image src={Gadgets} width={400} height={500} alt="image" />
            <ImageNumber>4</ImageNumber>
            <ImageCaption>GADGETS</ImageCaption>
          </ImageContainer>
        </Link>
      </ImageSection>
      <LinerContainer>
        <Liner></Liner>
      </LinerContainer>
      <NewProduct />
      <BestPrice />
      <SpringSale />
      <Journal />
      <StayFeel />
      <Instagram />
      <FooterPicture />
      <Conclusion />
    </>
  );
};

export default Section;
