import styled from "styled-components"

export const DateAndLikes = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    list-style-type: none;
    padding:0px;
    font-size: 0.8rem;

    @media(max-width: 900px){
        font-size: 0.7rem;
    }
    @media(max-width: 768px){
        font-size: 0.4rem;
    }

`

export const Dates = styled.li`

`

export const Likes = styled.li`
    color: #FF281B
`