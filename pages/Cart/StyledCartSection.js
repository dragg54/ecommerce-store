import styled  from "styled-components";

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-color: white;
    align-items: center;
    justify-content: space-between;
    background-color: #EEEDE7;

    @media(max-width:900px){
        padding: 12px;
    }
    
`

export const CartProductsContainer = styled.div`
    width: 90%;
    height: 300px;
    margin-top: 9px;
    background-color: white;
    display: flex;
    padding:20px 15px 20px 15px;
    align-items: center;
    justify-content: space-between;

    @media(max-width:900px){
        height: 240px;
    }

    @media(max-width: 480px) {
       margin-top: 5px;
       padding: 12px 15px;
       margin-bottom: 0;
  }
`

export const CartHeader = styled.div`
    font-size: 2.6rem;
    width: 80%;
    height: 80px;
    margin-top: 9px;
    background-color: white;
    padding: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media(max-width:900px){
        font-size: 2.0rem;
        height: 60px;
    }
`

export const CartImgContainer = styled.div`
    width: 280px;
    height: 300px;
    object-fit: contain;
    margin-right: 12px;
    padding-top: 15px;
    margin-top: 20px;

    @media(max-width: 900px) {
        padding-top: 50px;
  }

  @media(max-width: 600px) {
        padding-top: 60px;
  }
`

export const InStock = styled.p`
    font-size: 0.6rem;
    color: #8BCD50;
`

export const CartBtnContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
`
export const ProductDescr = styled.p`
    font-size: 1rem;

    @media(max-width:900px){
        font-size: 0.8rem;
    }

    @media(max-width: 600px) {
        font-size: 0.7rem;
  }

`
export const EmptyCartContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`

export const EmptyCartCaption = styled.h2`
    color: #821D30;
    font-size: 4rem;
    font-weight: bolder;
`

export const SelectBtn = styled.select`
    font-size: 15px;
    width: 100px;
    outline: none;
    padding: 4px 6px 4px 6px;
    text-align: center;
    border-radius: 10px;
    margin-right: 5px;

    @media(max-width: 768px) {
        font-size: 0.7rem;
        width: 85px;
        padding:4px 
  }
  @media(max-width: 480px) {
        width: 60px;
        padding:3px 4px
  }
`
export const Price = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    height: 15px;
    margin-bottom: 0;

    @media(max-width: 480px) {
        margin-top: 6px;
        font-size: 1.2rem;
  }
    
`



export const DeleteBtn = styled.button`
    font-size: 15px;
    padding: 5px 8px 5px 8px;
    border-radius: 10px;
    margin: 0 5px 0 5px;
    outline: none;
    border: none;
    width: 60px;

    @media(max-width: 768px) {
        font-size: 12px;
  }
`

export const Slash = styled.span`
    opacity: 0.3;
    color: #444444;
`