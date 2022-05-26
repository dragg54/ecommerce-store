import styled from "styled-components";

export const ImageContainer = styled.div`
  width: ${(props) => (props.primary ? "200px" : "200px")};
  height: ${(props) => (props.primary ? "450px" : "300px")};
  object-fit: contain;
  cursor: pointer;
  object-fit: contain;
  position: relative;
  background-color: white;

  @media (max-width: 1200px) {
    margin: 0 8px 0 8px;
    height: 250px;
    width: 500px;
  }
`;
export const ImageSection = styled.div`
  display: ${(props) => (props.primary ? "grid" : "flex")};
  grid-template-columns: repeat(3, 1fr);
  row-gap: 70px;
  column-gap: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 80px;
  width: 100%;
  background-color: white;

  @media (max-width: 1200px) {
    margin-top: 30px;
    padding: 0 80px 0 80px;
  }

  @media (max-width: 990px) {
    padding: 40px 50px 0 50px;
    grid-template-columns: repeat(2, 1fr);
    margin-top: 0;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0;
  }
`;

export const ImageCaption = styled.p`
  font-weight: ${(props) => (props.primary ? "" : "bolder")};
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

export const LinerContainer = styled.div`
  width: 100%;
  padding: 0 80px 0 80px;

  @media (max-width: 1200px) {
    margin-top: 200px;
    padding: 0 60px 0 60px
  }

  @media(max-width: 990px){
    margin-top: 130px;
  }
`;

export const Liner = styled.div`
  width: 100%;
  height: 3px;
  background-color: #ff6f1d;
`;
