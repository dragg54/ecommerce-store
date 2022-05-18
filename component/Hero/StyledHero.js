import styled from 'styled-components'

export const HeroContainer = styled.div`
    width:100%;
    height:800px;
    background-image: url('../../images/unsplash.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    `
export const HeaderContainer = styled.div`
    width:100%;
    height:100px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
`

export const NavAccountContainer = styled.div`
    display: flex;
    justify-content: space-between;
`   

export const Logo = styled.h2`
    color: #FF6F1D;
    font-size: 30px;
    font-weight: bolder;
`

export const NavList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
    margin-right: 16px;
`

export const NavElements = styled.li`
    font-size: 1rem;
    color: white;
    margin-right: 16px
`

export const HeroCaptionContainer = styled.div`
    width: 40%;
    height: 600px;
    padding:50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HeroPrimaryCaption = styled.h1`
    font-size: 3.4rem;
    font-weight: bold;
    color: white;
    margin-bottom: 10px;
`

export const HeroSecondaryCaption = styled.p`
    font-size: 1.2rem;
    color: white;
`

export const PrimaryButton = styled.button`
    font-size: 0.7rem;
    padding: 18px 12px;
    background-color: #FF6F1D;
    width: 300px;
    color: white;
    border: none
`