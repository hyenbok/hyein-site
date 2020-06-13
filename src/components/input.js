import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.input`
    background: ${({ theme }) => theme.color.lighterGrey};
    border-bottom: 1px solid ${({ theme }) => theme.color.grey3};
    color: ${({ theme }) => theme.color.grey1};
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: bold;
    padding: 0.8rem;
    width: 100%;

    &:focus {
        border-color: ${({ theme }) => theme.color.grey1};
    }
`

const Input = ({ ...rest }) => {
    return <Wrapper {...rest} />
}

export default Input
