import React, { useEffect } from 'react'

import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { centerAlign, flexMC } from '../assets/global'

const TextBox = styled.div`
    ${flexMC};
    flex-direction: column;
    padding-top: 4rem;
    p {
        font-weight: bold;
        font-size: 1.6rem;
        line-height: 4.2rem;
        position: relative;

        &:before {
            content: '';
            display: block;
            background: white;
            width: 120%;
            height: 50%;
            ${centerAlign};
            top: 75%;
            z-index: -1;
        }
    }

    @media (min-width: ${({ theme }) => theme.bp.md}px) {
        padding-top: 9rem;

        p {
            font-size: 2rem;
        }
    }
`

const IndexPage = () => {
    useEffect(() => {
        document.body.classList.add('has-bg')

        return () => {
            document.body.classList.remove('has-bg')
        }
    }, [])

    return (
        <Layout>
            <SEO title="Main" />

            <TextBox>
                <p>Hello, I'm Hyein</p>
                <p>Landscape designer</p>
            </TextBox>
        </Layout>
    )
}

export default IndexPage
