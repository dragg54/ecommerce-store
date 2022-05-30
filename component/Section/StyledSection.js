import styled from "styled-components";

export const ImageContainer = styled.div`
  width: ${(props) => (props.primary ? "200px" : "350px")};
  height: ${(props) => (props.primary ? "450px" : "450px")};
  object-fit: contain;
  cursor: pointer;
  margin: 20px;


  @media(max-width: 1200px) {
    height: 300px;
    width: 220px;
  }

  @media(max-width: 768px){
    height: 250px;
    width: 170px;
    margin-bottom: 0;
  }

  @media(max-width: 600px){
        height:200px;

  @media(max-width: 480px){
    height: 140px;
    width: 120px;
    margin: 0 4px;
  }
`;
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
   padding:30px 4px
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
    font-size: 12px;
  }

  
  @media(max-width: 600px){
    font-size: 9px;
    margin-top: 0;
  }


  @media (max-width: 480px) {
    height: ${(props) => (props.primary ? "40px" : "100px")};
    margin-bottom: 2px;
  }
`;

export const ImageNumber = styled.p`
  color: orange;
  font-size: 12px;
  font-weight: bolder;

  
  @media(max-width: 600px){
    font-size: 10px;
    margin-top: 0;
  }

`;

export const LinerContainer = styled.div`
  width: 100%;
  padding: 0 95px 0 95px;
  margin-top: 10px;
  opacity: 0.6;

  @media (max-width: 1200px) {
    margin-top: 70px;
    padding: 0 60px 0 60px
  }

  @media(max-width: 1080px){
    padding: 0 20px;
  }

  @media(max-width: 900px){
    margin-top: 20px;
  }

  @media(max-width:768px){
        margin-top: 0px
    }
  
  @media(max-width: 600px){
    margin-top:0px
  }

  @media(max-width:468px){
    margin-top: 30px;
    padding: 0 10px;
    }



  
`;

export const Liner = styled.div`
  width: 100%;
  height: 3px;
  background-color: #FF281B;
`;
