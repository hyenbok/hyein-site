import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../assets/theme'
import { GlobalStyles } from '../assets/global'

import 'typeface-noto-serif-kr'
import '../assets/normalize.css'
import Header from './header'

const LayoutWrapper = styled.div`
    @media (min-width: ${({ theme }) => theme.bp.sm}px) {
        margin-top: ${({ theme }) => theme.size.headerPc};
    }
`

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Header siteTitle={data.site.siteMetadata.title} />
            <LayoutWrapper>
                <main>{children}</main>
            </LayoutWrapper>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
