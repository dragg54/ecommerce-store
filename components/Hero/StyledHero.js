import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 800px;
  background-image: url("../../images/unsplash.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 50px;

  @media(max-width: 1200px){
    padding:0 30px;
  }

  @media(max-width: 900px){
    padding:0 20px;
  }

  @media(max-width: 768px){
    padding:0 15px;
  }

  @media (max-width: 600px) {
    height: 600px;
    padding: 0
  }
`;
export const HeaderContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${props=>props.primary? "#FF281B":""};

  @media(max-width: 1020px){
    height: 70px;
    padding: 10px 20px 5px 16px;
  }

  @media(max-width: 900px){
    height: 65px;
    justify-content: flex-start;
    padding: 5px 20px 5px 16px;
}
@media(max-width: 480px) {
       height: 55px;
       padding: 5px 20px 5px 10px;
  }
`;


export const NavAccountContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Logo = styled.h2`
  color:  ${props=>props.primary? "#fff":"#FF281B"};
  font-size: 2.3rem;
  font-weight: bolder;

  @media(max-width: 900px){
    margin-right: auto ;
  }

  @media(max-width: 480px){
   font-size:1.9rem;
  }


  
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin-right: 16px;

  @media(max-width: 900px){
    display: none;
  }
`;

export const NavElements = styled.li`
  font-size: ${props=>props.user? "1.5rem": "0.9rem"};
  color: #fff;
  white-space: nowrap;
  margin-right: 10px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items:center;


  @media(max-width: 1020px){
  }
  
  @media(max-width: 480px){
    font-size: ${props=>props.user? "0.95rem": "0.6rem"};
  }

`

export const HeroCaptionContainer = styled.div`
  width: 60%;
  height: 700px;
  padding: 10px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 768px){
      padding:20px;
      width: 70%;
  }

  @media (max-width: 600px){
      height: 700px;
      width:75%;
      padding: 20px;
  }
`;

export const HeroPrimaryCaption = styled.h1`
  font-size: 4.9rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: -15px;
  line-height: 5.1rem;

  @media(max-width: 900px){
      font-size: 3.5rem;
      line-height: 3.9rem;
  }
  
  @media(max-width: 768px){
        font-size: 3rem;
        line-height: 3.2rem;
    }

  @media(max-width: 600px){
    font-size: 2.65rem;
    margin-bottom: 0px;
    line-height: 3rem;
  }
`

export const HeroSecondaryCaption = styled.p`
  font-size: 1rem;
  color: #fff;


  @media(max-width: 600px){
      font-size: 0.7rem;
  }
  @media(max-width: 480px){
      font-size: 0.6rem;
  }
  
`;

export const PrimaryButton = styled.button`
  font-size: 0.78rem;
  padding: 17px 10px;
  background-color: #FF281B;
  width: 170px;
  color: #fff;
  border: none;
  box-shadow: 1px 1px 1px #FF281B;

  @media(max-width: 1020px){
      width: 95px;
  }

  @media(max-width: 900px){
      width: 110px;
  }

  @media(max-width: 600px){
      font-size: 0.5rem;
      width: 150px;
      padding: 12px 12px;
      margin-bottom: 200px;
  }

     
  @media(max-width: 480px){
    width: 79px;
    padding: 10px;
  }

`;

export const NoOfCartedProducts = styled.p`
  font-size: 8px;
  position: absolute;
  color: ${props=>props.primary? "#FF281B": "#fff"};
  top: -14px;
  right: -2px;
  font-weight: bolder;
  color: #fff;
  padding: 1px 5px;
  background-color: ${props=>props.primary? "#FF281B": "#FF281B"};
  border-radius: 100%;
`

export const CartLogo = styled.div`
  position: relative;
  font-size: 1.8rem;
  display: flex;
  align-items: center;

  @media(max-width: 480px){
    font-size: 1.35rem
  }
`
export const MenuIcon = styled.div`
  font-size: 1.6rem;
  color: #fff;
  margin-right: 8px;
  display: none;

  @media(max-width: 900px){
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media(max-width: 480px){
    font-size: 1.4rem;
  }
`

export const CartIcon = styled.div`
  display: none;

  @media(max-width: 900px){
    display: block;
    color: #fff;
    font-size: 2.5rem;
  }
`

export const NavIcons = styled.div`
  display: none;

  @media(max-width: 900px){
    display: flex;
    align-items: center
  }
`
export const Input = styled.input`
  width: 160px;
  border: none;
  outline: none;
  border-radius: 4px;
  padding:6px;

  @media(max-width: 480px){  
    width:120px
  }

`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #000;
  height: 33px;
  background-color: #fff;
  border-radius: 6px;
  color: #746C70;
  overflow: hidden;
  box-shadow: 1px 1px 1px #746C70;

  @media(max-width: 768px){
    height:30px;
  }

  @media(max-width: 480px){
    height:25px;
  }

`
export const SearchContainer = styled.div`
  background-color: #333652;
  height: 100%;
  padding:4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 0.9rem;
  width: 30px;

  @media(max-width: 480px){
  width:20px
  }

`