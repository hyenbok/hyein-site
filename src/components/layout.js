import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from '../assets/theme'
import { GlobalStyles } from '../assets/global'
import { ToastContainer } from 'react-toastify'

import 'typeface-noto-serif-kr'
import '../assets/normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import Loader from './loader'
import Header from './header'

const LayoutWrapper = styled.div`
    margin-top: ${({ theme }) => theme.size.headerMobile};
    @media (min-width: ${({ theme }) => theme.bp.md}px) {
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
            <Loader />
            <Header siteTitle={data.site.siteMetadata.title} />
            <LayoutWrapper>
                <main>{children}</main>
            </LayoutWrapper>
            <ToastContainer />
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
