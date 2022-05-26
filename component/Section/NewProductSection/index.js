import React from "react";
import Image from "next/image";
import New from "../../../assets/images/New.jpg";
import Coco from "../../../assets/images/coco.jpg";
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
} from "./StyledNewProduct";

function NewProduct() {
  return (
    <NewProductContainer>
      <Header>NEW PRODUCT</Header>
      <NewProductSection>
        <NewProductImageContainer>
          <Image src={New} width={700} height={900} alt="img" />
          <NewInContainer>
            <NewInCaption>NEW IN</NewInCaption>
          </NewInContainer>
          <NewProductName>bleak</NewProductName>
        </NewProductImageContainer>
        <NewProducImgDecrContainer>
          <Image src={Coco} width={550} height={700} />
          <DescrContainer>
            <DescrHeader>DESCRIPTION</DescrHeader>
            <Desc>
              Chanel Coco Mademoiselle is a Chypre Floral fragrance for women.
              Coco Mademoiselle was launched in 2001. The nose behind this
              fragrance is Jacques Polge. Top notes are orange, mandarin orange,
              orange blossom and bergamot; middle notes are mimose, jasmine,
              turkish rose and ylang-ylang; base notes are tonka bean,
              patchouli, opoponax, vanilla, vetiver and white musk. This perfume
              is the winner of award FiFi Award Best National Advertising
              Campaign / TV 2008.
            </Desc>
            <BuyNowButton>BUY NOW</BuyNowButton>
          </DescrContainer>
        </NewProducImgDecrContainer>
      </NewProductSection>
    </NewProductContainer>
  );
}

export default NewProduct;
