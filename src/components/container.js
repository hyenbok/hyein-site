import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    padding: 0 1.5rem;
    @media (min-width: ${({ theme }) => theme.bp.lg}px) {
        width: 120rem;
        margin: 0 auto;
    }
`

const Container = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Container
