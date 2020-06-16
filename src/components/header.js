import React, { useState } from 'react'
import PropTypes from 'prop-types'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styled from 'styled-components'
import { flexMC } from '../assets/global'
import Burger from './burger'

const Wrapper = styled.header`
    ${flexMC}
`

const MenuWrapper = styled(AniLink)`
    font-weight: bold;
    font-size: 2rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.color.grey3};
    position: relative;
    transition: 0.2s color ease-in, 0.2s font-weight ease-in;
    & ~ a {
        margin-top: 5rem;
    }
    @media (min-width: ${({ theme }) => theme.bp.md}px) {
        font-size: 1.6rem;
        & ~ a {
            margin-top: 0;
            margin-left: 10rem;
        }
    }
    &.active,
    &:hover {
        color: ${({ theme }) => theme.color.black};
    }
`

const NavWrapper = styled.nav`
    position: fixed;
    z-index: 19;
    background: ${({ theme }) => theme.color.white};
    ${flexMC};
    flex-direction: column;
    top: 0;
    left: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    height: 100%;
    transition: 0.2s left ease-in-out;
    @media (min-width: ${({ theme }) => theme.bp.md}px) {
        height: ${({ theme }) => theme.size.headerPc};
        left: 0;
        flex-direction: row;
    }
`

const Header = () => {
    const [isBurgerOpen, setBurger] = useState(false)
    const menuList = [
        {
            to: '/',
            label: 'Main',
        },
        {
            to: '/work',
            label: 'Work',
        },
        {
            to: '/info',
            label: 'Info',
        },
    ]
    return (
        <Wrapper>
            <Burger
                onClick={() => setBurger(!isBurgerOpen)}
                isOpen={isBurgerOpen}
            />
            <NavWrapper open={isBurgerOpen}>
                {menuList.map((ele, idx) => (
                    <MenuWrapper
                        key={`${ele.label}-${idx}`}
                        to={ele.to}
                        activeClassName="active"
                        partiallyActive={true}
                        paintDrip
                        hex="#E7EAE4"
                    >
                        {ele.label}
                    </MenuWrapper>
                ))}
            </NavWrapper>
        </Wrapper>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
