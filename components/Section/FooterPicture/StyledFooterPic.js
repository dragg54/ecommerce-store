import styled from "styled-components"

export const FooterPicContainer = styled.div`
    width:100%;
    height: 350px;
    object-fit:contain;
    position: relative;
    overflow:hidden;
    padding: 90px;
    margin-bottom: 60px;
    margin-top:40px;

    @media(max-width: 1200px){
        margin-top: 10px;
    }

    @media(max-width:900px){
        padding:50px;
    }

    
    @media(max-width: 768px){
       margin-top: 0px;
       padding:50px
    }

    @media(max-width:480px){
        margin-top: 30px;
        margin-bottom: 0px;
        padding:30px 30px 0 30px;
    }
    
`

export const FooterImgContainer = styled.div`
    margin-top:-110px
`