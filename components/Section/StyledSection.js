import styled from "styled-components";
import { keyframes } from "styled-components";

export const ImageContainer = styled.div`
  width: ${(props) => (props.primary ? "200px" : "350px")};
  height: ${(props) => (props.primary ? "450px" : "450px")};
  display:${props=>props.secondary? "":""};
  flex-direction: column;
  object-fit: contain;
  cursor: pointer;
  margin: 20px;


  @media(max-width: 1200px) {
    width: ${(props) => (props.primary ? "200px" : "350px")};
  height: ${(props) => (props.primary ? "400px" : "300px")};
  }

  @media(max-width: 768px){
    height: 250px;
    width: 170px;
    margin: 45px 0;
  }

  @media(max-width: 600px){
        height:200px;
  }
  @media(max-width: 480px){
    height: 140px;
    width: 120px;
    margin: 15px 4px;
  }
`
export const ImageSection = styled.div`
  display: ${(props) => (props.primary ? "grid" : "flex")};
  grid-template-columns: repeat(3, 1fr);
  row-gap: ${(props) => (props.primary ? "70px" : "70px")};;
  justify-content: space-between;
  padding: 80px;
  width: 100%;
  justify-items: center;
  margin-top: 0;

  @media (max-width: 1200px) {
    margin-top: 30px;
    row-gap: 180px;
    padding: 60px
  }

  @media (max-width: 1080px) {
    margin-top: 30px;
    row-gap: 180px;
    padding: 20px
  }

  @media (max-width: 900px) {
    padding: 40px 20px 0 20px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 10px;
    column-gap: 15px
  }

  @media(max-width: 768px){
    padding: 40px 15px 40px 15px;
    column-gap: 10px
  }

  
  @media(max-width: 600px){
   padding:30px 4px;
  }


  /* @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  } */
`;

export const ImageCaption = styled.p`
  font-weight: ${(props) => (props.primary ? "" : "bolder")};
  cursor: pointer;
  font-size: 18px;
  @media (max-width: 990px) {
    font-size: 17px;
  }

  
  @media(max-width: 600px){
    font-size: 14px;
    margin-top: 0;
  }


  @media (max-width: 480px) {
    height: ${(props) => (props.primary ? "40px" : "50px")};
    margin-bottom: 2px;
    font-size: 14px;
  }
`;

export const ImageNumber = styled.p`
  color: #FF281B;
  font-size: 0.6rem;
  font-weight: bolder;

  
  @media(max-width: 600px){
    font-size: 10px;
    margin-top: 0;
  }

`;

export const LinerContainer = styled.div`
  width: 100%;
  margin-top: ${props=>props.secondary? "165px" :props.primary?"195px": "-3px"};
  opacity: 0.6;

  @media (max-width: 1200px) {
    margin-top: ${props=>props.secondary? "250px" :props.primary?"271px": "50px"};
  }

  @media(max-width: 1080px){
  }

  @media(max-width: 900px){
    margin-top: ${props=>props.secondary? "130px" :props.primary?"155px": "0px"};
  }

  @media(max-width:768px){
    margin-top: ${props=>props.secondary? "120px" :props.primary?"155px": "0px"};
    }
  
  @media(max-width: 600px){
   margin-top: ${props=>props.secondary? "130px" :props.primary?"195px": "25px"};
  }

  @media(max-width:480px){
    margin-top: ${props=>props.secondary? "132px" :props.primary?"195px": "42px"}
    }
`

export const Liner = styled.div`
  width: 100%;
  height: 3px;
  background-color: #FF281B;
`;
