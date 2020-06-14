import React from 'react'
import styled from 'styled-components'

const StyledBurger = styled.div`
    cursor: pointer;
    width: 3rem;
    height: 3rem;
    position: fixed;
    top: 15px;
    right: 20px;
    z-index: 20;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    @media (min-width: ${({ theme }) => theme.bp.md}px) {
        display: none;
    }
    div {
        width: 3rem;
        height: 0.15rem;
        background-color: ${({ theme }) => theme.color.black};
        transform-origin: 1px;
        transition: all 0.3s linear;
        &:nth-child(1) {
            transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
        }
        &:nth-child(2) {
            transform: ${({ open }) =>
                open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => (open ? 0 : 1)};
        }
        &:nth-child(3) {
            transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }
`

const Burger = ({ isOpen, ...rest }) => {
    return (
        <StyledBurger open={isOpen} {...rest}>
            <div />
            <div />
            <div />
        </StyledBurger>
    )
}
export default Burger
