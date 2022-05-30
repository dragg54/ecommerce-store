import styled from 'styled-components'

export const NewProductContainer = styled.div`
    width: 100%;
    margin-top: 0;
    padding: 90px;
    position: relative;

    @media(max-width: 1080px){
        padding: 30px 20px;
        margin-bottom: 90px;
    }

    
    @media(max-width: 900px){
       margin-top: 10px;
       margin-bottom: 20px
    }

`
export const Header = styled.div`
    font-size: 2.6rem;
    font-weight: bolder;

    @media(max-width:600px){
        font-size: 2.0rem;
    }

    @media(max-width:468px){
       font-size: 1.8rem
    }
`

export const NewProductSection = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 38px;
    margin-bottom: 10px;
    
    @media(max-width: 1080px){
        margin-top: 20px;
    }


    @media(max-width: 600px){
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

`

export const NewProductImageContainer = styled.div`
    width: 700px;
    position: relative;
    margin-right: 100px;
    align-self: ${props=>props.primary? "right": ""};

    @media(max-width:900px){
        margin-right: 60px;
    }

    @media(max-width:600px){
        width: 80%;
        margin-right: 0px;
        margin-bottom: 20px;
    }
`

export const NewProducImgDecrContainer= styled.div`
    width: 550px;
    height: 600px;

    @media(max-width:600px){
        width: 100%;
        margin-bottom: 200px;
    }
    @media(max-width:468px){
        margin-bottom: 20px;
    }

`

export const DescrContainer = styled.div`
    width: 100%;
    padding: 20px 7px 20px 7px;
    margin-top: 10px;
    background-color: #EEEDE7;
`

export const DescrHeader = styled.h4`
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 0;

    
  @media(max-width: 600px){
    font-size: 1.1rem;
    margin-bottom: 3px;
  }

`

export const Desc = styled.p`
    font-size: 0.86rem;
    margin-top: 0;

    @media(max-width: 1080px){
        font-size:0.7rem;
    }
    @media(max-width: 900px){
        font-size:0.65rem;
`

export const NewInContainer = styled.div`
    width: 200px;
    height: 200px;
    border: 2px  solid #FF281B ;
    position: absolute;
    border-radius: 50%;
    top:${props=>props.primary? "10%": "35%"};
    bottom:${props=>props.primary? "": "50%"};
    right: ${props=>props.primary? "": "-100px"};
    left:${props=>props.primary? "-100%": ""};
    display: flex;
    justify-content: center;
    align-items: center;

    @media(max-width:1400px){
        width: 150px;
        height: 150px;
        right:-80px
    }

    @media(max-width: 900px){
        width: 120px;
        height: 120px;
        right: -50px;
    }

    @media(max-width:600px){
        width: 95px;
        height: 95px;
        right: -50px;
    }


`

export const NewInCaption = styled.p`
    color: #FF281B;
    font-size: 0.7rem;
    font-family: bolder;

    @media(max-width:600px){
        font-size: 0.6rem;
    }
`

export const NewProductName = styled.h1`
    color:  #FF281d;
    font-size: 230px;
    font-weight: bolder;
    position: absolute;
    bottom:${props=>props.primary? "": "-310px"};
    top:${props=>props.primary? "-340px": ""};
    left:${props=>props.primary? "": "-50px"};
    right: ${props=>props.primary? "-250px": ""};

    @media(max-width:1200px){
        bottom:${props=>props.primary? "": "-250px"};
        font-size:190px;
        left:${props=>props.primary? "": "-20px"};
        right: ${props=>props.primary? "-200px": ""};
        top:${props=>props.primary? "-290px": ""};
    }

    @media(max-width: 1080px){
        right: ${props=>props.primary? "-250px": ""};
    }



    @media(max-width: 900px){
        bottom:${props=>props.primary? "": "-200px"};
        font-size:160px;
        left:${props=>props.primary? "": "-20px"};
        right: ${props=>props.primary? "-255px": ""};
        top:${props=>props.primary? "-240px": ""};
    }

    @media(max-width: 600px){
        left:${props=>props.primary? "": "-2px"};
        font-size: 120px;
        right: ${props=>props.primary? "-90px": ""};
        bottom:${props=>props.primary? "": "-160px"};
        top:${props=>props.primary? "-170px": ""};

        @media(max-width:468px){
            right: ${props=>props.primary? "-70px": ""};
    }
    }

`

export const BuyNowButton = styled.button`
    width: 150px;
    font-size: 0.7rem;
    background-color: black;
    padding: 14px;
    color: white;
    margin-top: 10px;

    
  @media(max-width: 600px){
    font-size: 0.6rem;
    width: 120px;
    margin-top: 7px;
  }

`