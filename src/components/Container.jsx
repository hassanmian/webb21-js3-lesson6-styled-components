import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
    width: ${props => props.col*(100/12)}%;
    height: 50px;
    background-color: gray;
`
export default function Container(props) {
    return (
        <StyledContainer col={props.col}>
            {props.children}
        </StyledContainer>
    )
}
