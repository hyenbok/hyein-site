import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.button`
    background: ${({ theme }) => theme.color.grey4};
    border-radius: 0.8rem;
    cursor: pointer;
    padding: 1.6rem 5rem;
    color: ${({ theme }) => theme.color.grey6};
    line-height: 2.4rem;
    font-size: 1.6rem;
    transition: background-color 0.2s ease-in-out;
    text-transform: uppercase;
    letter-spacing: 0.6rem;

    &:hover {
        background: ${({ theme }) => theme.color.grey1};
    }
`

const Button = ({ children, ...rest }) => {
    return <Wrapper {...rest}>{children}</Wrapper>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Button
