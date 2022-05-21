import styled from 'styled-components'

export const ImageContainer = styled.div`
    width: 500px;
    height: 700px;
    margin: 8px;
`
export const ImageSection = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 50px;

  @media(max-width: 990px){
      padding: 40px 20px;
      justify-content: space-between;
  }
`;

export const ImageCaption = styled.p`
  font-weight: bolder;
  cursor: pointer;
  @media(max-width:990px){
      font-size:12px;
  }
`

export const ImageNumber = styled.p`
  color: orange;
  font-size: 12px;
  font-weight: bolder;
`
