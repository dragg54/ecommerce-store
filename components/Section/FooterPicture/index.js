import React from 'react'
import FooterImage from "../../../assets/images/footerImg.jpg"
import { FooterImgContainer, FooterPicContainer } from './StyledFooterPic'
import Image from "next/image"
import { Liner, LinerContainer } from '../StyledSection'

function FooterPicture() {
  return (
    <FooterImgContainer>
    <LinerContainer primary>
        <Liner></Liner>
      </LinerContainer>
    <FooterPicContainer><Image src={FooterImage} layout="responsive"/></FooterPicContainer>
    </FooterImgContainer>
    
  )
}

export default FooterPicture