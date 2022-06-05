import React from 'react'
import FooterImage from "../../../assets/images/footerImg.jpg"
import { FooterPicContainer } from './StyledFooterPic'
import Image from "next/image"
import { Liner, LinerContainer } from '../StyledSection'

function FooterPicture() {
  return (
    <>
    <LinerContainer secondary>
        <Liner></Liner>
      </LinerContainer>
    <FooterPicContainer><Image src={FooterImage} layout="responsive"/></FooterPicContainer>
    </>
    
  )
}

export default FooterPicture