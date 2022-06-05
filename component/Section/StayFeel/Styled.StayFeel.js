import styled from "styled-components";
import { NewInContainer, NewProductName } from "../NewProductSection/StyledNewProduct";

export const StayFeelWrapper = styled.div`
    margin: 30px auto;
    padding: 80px;
    width:100%;
    display: flex;
    flex-direction: column;

    @media(max-width: 900px){
        padding-right: 45px;
        padding-left: 45px;
        padding-bottom: 50px;
        margin-top: 10px;
    }

    @media(max-width: 480px){
        padding:50px 20px;
        margin-top:30px;
        justify-content: center
    }
`

export const StayFeelHeader = styled(NewProductName)`
    top: -110px;
    left: 10px;
    margin:0;
    font-size: 120px;
    position: absolute;

    @media(max-width: 1200px){
        font-size: 90px;
        top: -90px
    }

    
    @media(max-width: 900px){
        left:1px;
        font-size: 55px;
        top: -40px
    }

    @media(max-width: 768px){
        left:1px;
        font-size: 70px
    }
    @media(max-width: 480px){
        font-size: 40px;
        top: -40px
    }
`

export const StayFeelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    align-items:flex-start;

    @media(max-width: 1200px){
        margin-top: -5px
    }
    @media(max-width: 768px){
        padding-top:0px;
        margin-top:0px
    }

    @media(max-width:480px){
        flex-direction: column
    }

    
`

export const StayFeelDescContainer = styled.div`
    width:80%;
    position: relative;
    object-fit: contain;
    margin-bottom: 40px;
    margin-top: 62px;
    border: 0.00001rem  solid #B9B7BD;
    box-shadow: 2px 2px 2px gray;
    margin-right:50px;
    padding:0.4%;

    @media(max-width: 1200px){
        margin-right: 40px;
        padding:1%;
        width:100%;
    }
    @media(max-width: 900px){
        margin-right: 30px
    }

    @media(max-width: 768px){
        margin-top:80px
    }
`

export const StayFeelImgContainer = styled.div`
width:80%;
position: relative;
object-fit: contain;
align-self: flex-end;

@media(max-width: 480px){
        align-self: center;
        width:100%
    }
`

export const PlayContainer = styled(NewInContainer)`
    top:25%;
    right:-17%;

    @media(max-width: 1200px){
        right: -82px
    }

`

export const ImageCover = styled.div`
    position: absolute;
    width:100%;
    height: 100%;
    background-color: gray;
    opacity: 0.2;
    top:0
`