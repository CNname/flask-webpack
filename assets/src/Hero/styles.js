import styled, { css } from 'styled-components'
import colors from '../colors';

export const Hero = styled.div`
  color: ${colors.text.white};
  font-family: 'Playfair Display';
  background-color: blue;
  background-image: url(${props => props.bgImage});
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  text-align: center;
`

export const Image = styled.img`
  color: red;
  width: 100px;
  margin-bottom: 10px;
`

export const Title = styled.div`
font-size: 48px;
font-family: 'Playfair Display';
font-weight: bold;

`

export const Subtitle = styled.h3`
margin-bottom: 20px;
font-size: 20px;
font-family: 'Playfair Display';

`
