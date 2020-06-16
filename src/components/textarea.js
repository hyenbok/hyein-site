import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.textarea`
    background: ${({ theme }) => theme.color.grey7};
    border-bottom: 2px solid ${({ theme }) => theme.color.grey3};
    color: ${({ theme }) => theme.color.grey1};
    font-size: 1.4rem;
    line-height: 2.4rem;
    font-weight: bold;
    padding: 0.8rem;
    min-height: ${({ minHeight }) => minHeight};
    width: 100%;

    &:focus {
        border-color: ${({ theme }) => theme.color.grey1};
    }
`

const Textarea = ({ minHeight, ...rest }) => {
    return <Wrapper minHeight={minHeight} {...rest} />
}

Textarea.propTypes = {
    minHeight: PropTypes.string,
}

Textarea.defaultProps = {
    minHeight: '10rem',
}

export default Textarea
