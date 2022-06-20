import styled from "styled-components"

export const FooterContainer = styled.div`
    display: flex;
    background-color: #EEEDE7;
    justify-content: space-between;
    width: 100%;
    height: 250px;
    align-items: flex-start;
    padding: 30px 70px;
    margin-top: 100px;

    
    @media(max-width: 900px){
        padding:25px 20px;
        align-items: center;
    }

  
    @media(max-width: 768px){
       margin-top: 40px;
    }
    
    
@media(max-width: 480px){
       flex-direction: column;
       height: 500px;
       justify-content: center
    }

`

export const Containers = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 200px;
    margin: 0 10px;
    height:100%;
    padding: 0;

    @media(max-width:480px){
        align-items: center;
        justify-content: center;
    }

`

export const Header = styled.h4`
    font-size: 0.95rem;
    color:#FF281B;
    margin:0;
    padding:0;
    margin-bottom: 26px;

    @media(max-width:480px){
        text-align: center
    }
`
export const List = styled.li`
    font-size: 0.82rem;
    padding:0;
    margin: 0 ;
    list-style: none;
    margin-bottom: 10.5px;

`

export const ExtraContainer = styled.div`
    height: 35px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 70px;

    @media(max-width: 900px){
        padding:0 20px;
    }
`

export const Extras = styled.li`
    font-size: 0.6rem;
    color: ${props=>props.black? "gray": "gray"};
    list-style: none;

    @media(max-width: 768px){
        font-size: 0.5rem;
    }

    @media(max-width: 480px){
        font-size: 0.45rem
    }
`