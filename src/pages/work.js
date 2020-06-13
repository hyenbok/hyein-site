import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

const Container = styled.div`
    margin: 3rem auto;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const WorkPage = () => (
    <Layout>
        <Container>
            <SEO title="Work" meta={[{ d: 'asfd', a: 'df' }]} />
            <h1>Hi people</h1>
        </Container>
    </Layout>
)

export default WorkPage
