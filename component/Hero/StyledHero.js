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

  @media(max-width: 990px){
    justify-content: flex-start;
    padding: 10px 20px 14px 16px
}
`;


export const NavAccountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.h2`
  color:  ${props=>props.primary? "white":"#ff6f1d"};
  font-size: 1.8rem;
  font-weight: bolder;

  @media(max-width: 990px){
    margin-right: auto ;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  margin-right: 16px;
`;

export const NavElements = styled.li`
  font-size: 1rem;
  color: white;
  margin-right: 16px;
  list-style-type: none;
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
      padding: 20px;
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
      width: 150px;
      padding: 12px 12px;
      margin-bottom: 200px;
  }
`;

export const NoOfCartedProducts = styled.p`
  font-size: 8px;
  position: absolute;
  color: ${props=>props.primary? "orange": "white"};
  top: -14px;
  right: -2px;
  font-weight: bolder;
  color: white;
  padding: 1px 5px;
  background-color: ${props=>props.primary? "orange": "orange"};
  border-radius: 100%;
`

export const CartLogo = styled.div`
  position: relative;
  font-size: 20px;
`
export const MenuIcon = styled.div`
  font-size: 1.6rem;
  color: white;
  margin-right: 8px;
  display: none;

  @media(max-width: 990px){
    display: block
  }
`

export const CartIcon = styled.div`
  display: none;

  @media(max-width: 990px){
    display: block;
    color: white;
    font-size: 2.5rem;
  }
`

export const NavIcons = styled.div`
  display: none;

  @media(max-width: 990px){
    display: flex;
  }
`
