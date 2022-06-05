import styled from 'styled-components'

export const JournalContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0px auto;
    width: 100%;
    justify-content: space-between;
    background-color: #fff;

    
    @media(max-width: 900px){
        margin:0 auto 0px 0
    }

`

export const JournalWrapper = styled.div`
width:90%;
margin: ${props=>props.secondary? "-30px auto 0 auto": "80px auto 0px auto"};
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;


@media(max-width: 900px){
    margin-top:${props=>props.secondary? "-40px":"45px"};
    }

    @media(max-width:480px){
        margin-top: -30px;
        }



`
export const StyledHeader = styled.h1`
    font-size: 1.5rem;

    @media(max-width: 768px){
        font-size:${props=>props.secondary? "1.6rem": "2rem"}
    }
    @media(max-width: 480px){
        font-size:${props=>props.secondary? "1.2rem": ""}
    }
`