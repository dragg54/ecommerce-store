import styled from 'styled-components'

export const NewProductContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    padding: 80px;

`
export const Header = styled.div`
    font-size: 2.6rem;
    font-weight: bolder;
`

export const NewProductSection = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 38px;
`

export const NewProductImageContainer = styled.div`
    width: 700px;
    height: 900px;
    position: relative;
`

export const NewProducImgDecrContainer= styled.div`
    width: 550px;
    height: 700px;
`

export const DescrContainer = styled.div`
    width: 100%;
    padding: 20px 0 20px 0;
    margin-top: 10px;
`

export const DescrHeader = styled.h4`
    font-size: 1.4rem;
    font-weight: bold;
`

export const Desc = styled.p`
    font-size: 0.65rem;
`

export const NewInContainer = styled.div`
    width: 200px;
    height: 200px;
    border: 2px  solid #ff6f1d ;
    position: absolute;
    border-radius: 50%;
    top:35%;
    bottom:50%;
    right: -100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const NewInCaption = styled.p`
    color: #ff6f1d;
    font-size: 0.7rem;
    font-family: bolder;
`

export const NewProductName = styled.h1`
    color:  #ff6f1d;
    font-size: 12rem;
    font-weight: bolder;
    position: absolute;
    bottom: -250px;
    left: -50px
`

export const BuyNowButton = styled.button`
    width: 150px;
    font-size: 0.7rem;
    background-color: black;
    padding: 14px;
    color: white;
    margin-top: 10px;
`