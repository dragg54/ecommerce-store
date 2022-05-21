import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 800px;
  background-image: url("../../images/unsplash.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    height: 600px;
  }
`;
export const HeaderContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${props=>props.primary? "#ff6f1d":""};
`;

export const NavAccountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.h2`
  color:  ${props=>props.primary? "white":"#ff6f1d"};
  font-size: 1.8rem;
  font-weight: bolder;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  margin-right: 16px;

  @media(max-width: 992px){
      display: none;
  }
`;

export const NavElements = styled.li`
  font-size: 1rem;
  color: white;
  margin-right: 16px;
`;

export const HeroCaptionContainer = styled.div`
  width: 80%;
  height: 600px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px){
      width: 100%;
      height: 100%;
  }

  @media(max-width: 768px){
      padding:20px
  }
`;

export const HeroPrimaryCaption = styled.h1`
  font-size: 3.4rem;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;

  @media(max-width: 640px){
    font-size: 2.4rem;
    margin-bottom: 0px
  }
`;

export const HeroSecondaryCaption = styled.p`
  font-size: 1.2rem;
  color: white;

  @media(max-width: 640px){
      font-size: 0.8rem;
  }
`;

export const PrimaryButton = styled.button`
  font-size: 0.7rem;
  padding: 18px 12px;
  background-color: #ff6f1d;
  width: 300px;
  color: white;
  border: none;

  @media(max-width: 640px){
      font-size: 0.5rem;
      width: 200px;
      padding: 12px 12px;
      margin-bottom: 200px;
  }
`;
