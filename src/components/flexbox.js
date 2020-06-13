import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    align-items: ${({ props }) => props.alignItems};
    justify-content: ${({ props }) => props.justifyContent};
    flex-direction: ${({ props }) => props.flexDirection};

    @media (min-width: ${({ theme }) => theme.bp.sm}px) {
        flex-direction: ${({ props }) => props.flexDirectionPc};
    }
`

const FlexBox = ({ flexStyles, children }) => {
    return <Wrapper props={flexStyles}>{children}</Wrapper>
}

FlexBox.propTypes = {
    children: PropTypes.node.isRequired,
    flexStyles: PropTypes.object,
}

FlexBox.defaultProps = {
    flexStyles: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        flexDirectionPc: 'row',
    },
}

export default FlexBox
