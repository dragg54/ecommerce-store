import styled from "styled-components";
import { keyframes } from "styled-components";

export const NewProductContainer = styled.div`
  width: 100%;
  margin-top: 0;
  padding: 90px 90px 30px 90px;
  position: relative;

  @media (max-width: 1080px) {
    padding: 30px 20px;
    margin-bottom: 90px;
  }

  @media (max-width: 900px) {
    margin-top:${(props) => (props.primary ? "40px" : "-35px")};
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    margin-top:${(props) => (props.primary ? "90px" : "40px")}
  }

  @media (max-width: 600px) {
    margin-top: ${(props) => (props.primary ? "30px" : "90px")};
  }

  @media (max-width: 480px) {
    margin-top: ${(props) => (props.primary ? "30px" : "130px")};
    margin-bottom: ${(props) => (props.primary ? "30px" : "20px")};
    padding: 0px 20px;
  }
`;
export const Header = styled.div`
  font-size: 1.75rem;
  font-weight: bolder;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 468px) {
    font-size: 1.3rem;
  }
`;

export const NewProductSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 38px;
  margin-bottom: 10px;

  @media (max-width: 1080px) {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    margin-bottom: 0px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

export const NewProductImageContainer = styled.div`
  width: 700px;
  position: relative;
  margin-right: 100px;
  align-self: ${(props) => (props.primary ? "right" : "")};

  @media (max-width: 900px) {
    margin-right: 60px;
  }

  @media (max-width: 600px) {
    width: 80%;
    margin-right: 0px;
    margin-bottom: 20px;
  }
`;

export const NewProducImgDecrContainer = styled.div`
  width: 550px;
  height: 600px;

  @media (max-width: 768px) {
    height: 500px;
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 200px;
  }
  @media (max-width: 468px) {
    margin-bottom: 20px;
  }
`;

export const DescrContainer = styled.div`
  width: 100%;
  padding: 20px 7px 20px 7px;
  margin-top: px;
  border: 0.00001rem  solid #B9B7BD;
  box-shadow: 2px 2px 2px gray;
  margin-bottom: 0;

  
  @media (max-width: 768px) {
   padding: 20px 15px 
  }

  @media (max-width: 600px) {
    height:${props=>props.primary? "158px": "230px"}
  }

  @media (max-width: 480px) {
    height:${props=>props.primary? "140px": "200px"}
  }

  @media (max-width: 423px) {
    height:${props=>props.primary? "155px": "220px"}
  }
`;

export const DescrHeader = styled.h4`
  font-size: ${(props) => (props.primary ? "1.7rem" : "1.1rem")};
  font-weight: bold;
  margin-top: ${props=>props.secondary? "20px": "0"};
  margin-bottom:${props=>props.primary? "10px" : "10px"};
  white-space: nowrap;

  @media (max-width: 900px) {
    margin-bottom:${props=>props.primary? "10px" : "10px"};
    font-size: ${(props) => (props.primary ? "2rem" : "1.0rem")};
  }


  @media (max-width: 768px) {
    margin-bottom: 10px;
  }

  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-bottom: 3px;
  }
`;

export const Desc = styled.p`
  font-size: 0.65rem;
  margin-top: 0;

  @media (max-width: 1080px) {
    font-size: 0.55rem;
  }
  @media (max-width: 900px) {
    font-size: 0.50rem;
  }

  @media (max-width: 480px) {
    font-size: 0.45rem;
  }
`;

export const NewInContainer = styled.div`
  width: 200px;
  height: 200px;
  border: 2px solid #ff281b;
  position: absolute;
  border-radius: 50%;
  top: ${(props) => (props.primary ? "10%" : "35%")};
  bottom: ${(props) => (props.primary ? "" : "50%")};
  right: ${(props) => (props.primary ? "" : "-100px")};
  left: ${(props) => (props.primary ? "-100%" : "")};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1400px) {
    width: 150px;
    height: 150px;
    right: -80px;
  }

  @media (max-width: 900px) {
    width: 120px;
    height: 120px;
    right: -50px;
  }

  @media (max-width: 600px) {
    width: 95px;
    height: 95px;
    right: -50px;
  }
`;

export const NewInCaption = styled.p`
  color: #ff281b;
  font-size: 0.7rem;
  font-family: bolder;

  @media (max-width: 600px) {
    font-size: 0.6rem;
  }
`;

export const NewProductName = styled.h1`
  color: #ff281d;
  font-size: 230px;
  font-weight: bolder;
  position: absolute;
  bottom: ${(props) => (props.primary ? "" : "-310px")};
  top: ${(props) => (props.primary ? "-340px" : "")};
  left: ${(props) => (props.primary ? "" : "-50px")};
  right: ${(props) => (props.primary ? "-250px" : "")};

  @media (max-width: 1200px) {
    bottom: ${(props) => (props.primary ? "" : "-250px")};
    font-size: 190px;
    /*   left:${(props) => (props.primary ? "" : "-20px")};
        right: ${(props) => (props.primary ? "-200px" : "")}; */
    top: ${(props) => (props.primary ? "-290px" : "")};
    right: ${(props) => (props.primary ? "-230px" : "")};
  }

  @media (max-width: 1080px) {
    right: ${(props) => (props.primary ? "-250px" : "")};
  }

  @media (max-width: 900px) {
    bottom: ${(props) => (props.primary ? "" : "-200px")};
    font-size: 160px;
    left: ${(props) => (props.primary ? "" : "-20px")};
    right: ${(props) => (props.primary ? "-255px" : "")};
    top: ${(props) => (props.primary ? "-260px" : "")};
  }

  @media (max-width: 768px) {
    right: ${(props) => (props.primary ? "-260px" : "")};
    top: ${(props) => (props.primary ? "-250px" : "")};
    font-size: ${(props) => (props.primary ? "150px" : "")};
  }

  @media (max-width: 600px) {
    left: ${(props) => (props.primary ? "" : "-2px")};
    font-size: 120px;
    right: ${(props) => (props.primary ? "-90px" : "")};
    bottom: ${(props) => (props.primary ? "" : "-160px")};
    top: ${(props) => (props.primary ? "-170px" : "")};

    @media (max-width: 468px) {
      right: ${(props) => (props.primary ? "-70px" : "")};
    }
  }
`;

export const BuyNowButton = styled.button`
  width: 100px;
  font-size: 0.56rem;
  background-color: black;
  padding: 10px 8px;
  color: white;
  margin-top: 10px;
  margin-bottom: ${props=>props.secondary? "8px": ""};
  border-color: ${(props) => (props.primary ? "" : "")};

@media(max-width: 1200px){
  width:100px;
  font-size:0.50rem
}
   
  @media (max-width: 900px) {
    font-size: 0.6rem;
    width: 80px;
    margin-top: 7px;
    padding-top: 10px
  }

  
  @media (max-width: 768px) {
    font-size: 0.6rem;
    width: 90px;
    margin-top: 7px;
    padding-top: 10px
  }

  @media (max-width: 600px) {
    font-size: 0.58rem;
    width: 90px;
    margin-top: 7px;
  }

  @media (max-width: 480px) {
    font-size: 0.54rem;
    width: 75px;
    margin-top: 4px;
    padding: 9px;
  }
`;
