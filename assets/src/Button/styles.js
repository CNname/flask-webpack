import styled, { css } from 'styled-components'
import React from 'react'
import colors from '../colors';

export const Button = styled.a`
  margin: 0 auto;
  color: ${colors.text.white};
  padding: 0.3em 1em;
  border: 1px solid  ${colors.text.white};
  text-transform: uppercase;
  font-family: lato;
`

export const ButtonInverted = styled(Button)`
  color: ${colors.primary.darkblue};
  border: 1px solid  ${colors.primary.darkblue};
`
