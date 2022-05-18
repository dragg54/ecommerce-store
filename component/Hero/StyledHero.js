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
    width:1000px;
    height:100px;
    display:flex;
    justify-content: space-between;
    align-items: center;
`
export const Logo = styled.h2`
    color: #FF4500;
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
    font-size: 0.8rem;
    color: white;
    margin-right: 16px
`