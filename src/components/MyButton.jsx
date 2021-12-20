import React from 'react'

import styled, { css } from 'styled-components'

function getColor(nr) {
  if(nr < 0) {
    return "red"
  } else {
    return "blue"
  }
}

const Button = styled.button`
  background: ${props => props.bgColor};
  border-radius: 5px;
  border: 1px solid red;
  color: ${props => getColor(props.color)};

  ${props => props.margin ? css `margin: 10px 10px;`: css`margin:0;`}
  ${props => props.padding && css `padding: 20px 20px;`}
`

const BigButton = styled(Button)`
  font-size: 32px;
`

export default function MyButton(props) {
    return (
        <>
        {props.big ? 
            <BigButton {...props}>{props.children}</BigButton>
            : <Button {...props}>{props.children}</Button>
        }
        </>
    )
}
