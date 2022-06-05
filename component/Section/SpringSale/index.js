import React from 'react'
import SpringSaleImg from "../../../assets/images/SpringSale.png"
import { BuyNowButton, Desc, DescrContainer, DescrHeader } from '../NewProductSection/StyledNewProduct'
import { ImgCont, SpringSaleContainer, SpringSaleDescrContainer, SpringSaleHeader } from './StyledSpringSale'
import Image from 'next/image'

function SpringSale() {
  return (
    <SpringSaleContainer>
        <SpringSaleDescrContainer>
            <DescrHeader primary>SPRING SALE <br/>SHOP 50% OFF</DescrHeader>
            <Desc >
                Discover a selection of neo-classics that underscore the modern spirit that Kim Jones has introduced to the House of Dior 
            </Desc>
            <BuyNowButton primary>BUY NOW</BuyNowButton>
          </SpringSaleDescrContainer>
        <ImgCont><Image src={SpringSaleImg} width={300} layout='fill'/></ImgCont>
        <SpringSaleHeader>Spring Sale</SpringSaleHeader >
    </SpringSaleContainer>
  )
}

export default SpringSale