import styled from "styled-components";

export const ImageContainer = styled.div`
  width: ${(props) => (props.primary ? "200px" : "300px")};
  height: ${(props) => (props.primary ? "450px" : "700px")};
  cursor: pointer;

  @media (max-width: 990px) {
    margin: 8px;
  }
`;
export const ImageSection = styled.div`
  display: ${props=>props.primary? "grid":"flex"};
  grid-template-columns: repeat(3, 1fr);
  row-gap: 70px;
  column-gap: 150px;
  justify-content: space-around;
  align-items: center;
  padding: 50px;


  @media (max-width: 990px) {
    padding: 40px 20px;
    justify-content: space-between;
  }
`;

export const ImageCaption = styled.p`
  font-weight: ${props=>props.primary? "": "bolder"};
  cursor: pointer;
  font-size: 14px;
  @media (max-width: 990px) {
    font-size: 12px;
  }
`;

export const ImageNumber = styled.p`
  color: orange;
  font-size: 12px;
  font-weight: bolder;
`;
