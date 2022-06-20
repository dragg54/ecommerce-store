import styled from 'styled-components'
import { keyframes } from 'styled-components'
import { NewProductName } from '../NewProductSection/StyledNewProduct'


const moveText = keyframes`
    from{
        transform: translate(140%, 0px);  
    }
    to{
        transform: translate(-120%,0px)         
    }
    `

    
const moveTextMobile = keyframes`
from{
    transform: translate(70%, 0px);  
}
to{
    transform: translate(-110%,0px)         
}
`


export const SpringSaleContainer = styled.div`  
    width:100%;
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #FEDE00;
    position: relative;
    padding: 0 90px;
    margin-top:-10px;

    @media(max-width: 1200px){
        margin-top:60px;
        padding: 0 50px
    }

    @media(max-width: 900px){
        height: 350px;
        margin-top:-60px
    }

    @media(max-width: 768px){
        height: 320px;
        justify-content: space-between;
        padding: 20px 50px;
        margin-top: 10px
    }

    
    @media(max-width: 600px){
        height: 250px;
        margin-top: 70px;
        padding: 20px 20px 20px 30px
    }

    @media(max-width:480px){
        height: 200px;
        padding:10px 20px;
        margin-top:80px
        }


`

export const SpringSaleDescrContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 500px;
    width: 70%;
    justify-content: center;
    color: #000;

    @media(max-width:1200px){
        width:60%;  
    }

    @media(max-width:900px){
        width:50%;
    }

    @media(max-width:768px){
        width:90%;
    }
    

    @media(max-width:600px){
        width:80%;
        height: 250px;
    }
    @media(max-width:480px){
        width: 70%
        }

`
 export const SpringSaleHeader = styled(NewProductName)`
    animation:${moveText} 10s infinite ease-out;
    animation-delay:0;
    font-size:150px;
    bottom: -190px;

    @media(max-width: 900px){
        font-size: 120px;
        white-space: nowrap;
        bottom: -175px
    }

    @media(max-width: 768px){
       bottom: -170px
    }

    @media(max-width: 480px){
        bottom:-120px;
        font-size: 80px;
        animation:${moveTextMobile} 5s infinite ease-out
    }

`
export const ImgCont = styled.div`
        margin-top:100px;
        height:500px;
        width:70%;
        position:relative;
        align-self: flex-end;

        @media(max-width:1200px){
            width:100%;
            height:500px;
        }

        @media(max-width:900px){
            width:80%;
            height:340px;
            margin-top:0px
        }
        @media(max-width:768px){
            width:100%;
            height:300px;
        }

        @media(max-width:480px){
            margin-top:19px;
            height:220px;
    }
`