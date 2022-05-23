import styled from 'styled-components'
import { ImageContainer } from '../../component/Section/StyledSection'

export const ImageWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

export const CartButton = styled.button`
    width:100%;
    padding: 8px 0 8px 0;
    font-size: 15px;
    font-weight: bolder;
    background-color: #ff6f1d;
    color: white;
    border: none;
    margin-bottom: 0;
    margin-top: 0;
    visibility: hidden;
    border-radius: 5px;
    cursor: pointer;
    ${ImageContainer}:hover & {
        visibility: visible;
    }

`

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
`