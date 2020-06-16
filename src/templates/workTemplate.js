import React, { useState } from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

import styled from 'styled-components'
import {
    Container,
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { GoBack, Search } from '../components/icons'
import { flexMC } from '../assets/global'

const TemplateWrapper = styled.div`
    min-height: calc(100vh - ${({ theme }) => theme.size.headerPc});
    ${flexMC};
    position: relative;
    padding: 5rem 0;

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        padding: 3rem 0;
    }
`

const GoBackWrapper = styled(Link)`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    margin-bottom: 2rem;
    position: absolute;
    left: 0;
    top: 0;
    span {
        display: inline-block;
        font-size: 1.2rem;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.color.grey1};
        text-transform: uppercase;
        margin-left: 1.6rem;
    }
`

const DescriptionWrapper = styled.article`
    padding: 3rem 2.2rem;
    margin-top: 3rem;
    background-color: ${({ theme }) => theme.color.dustGreen};
    color: ${({ theme }) => theme.color.grey1};

    h1 {
        font-size: 2rem;
        line-height: 2rem;
        font-weight: bold;
    }

    .date {
        font-size: 1.2rem;
        line-height: 2.4rem;
        font-weight: bold;
    }

    .description {
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding-top: 2.5rem;
        margin-top: 1.6rem;
        position: relative;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 0.1rem;
            background-color: ${({ theme }) => theme.color.grey2};
        }
    }
    @media (min-width: ${({ theme }) => theme.bp.md}) {
        margin-top: 0;
    }
`

const ZoomWrapper = styled.a`
    ${flexMC};
    cursor: pointer;
    margin-top: 1.6rem;
    span {
        display: inline-block;
        margin-left: 1rem;
        color: ${({ theme }) => theme.color.grey1};
        font-weight: bold;
        font-size: 1.2rem;
        line-height: 2.4rem;
        text-transform: uppercase;
    }
`

const WorkTemplate = props => {
    const { pageContext } = props
    const { name, date, description } = pageContext

    const [activeIndex, setActiveIndex] = useState(0)
    const [animating, setAnimating] = useState(false)

    let images = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                    extension: { regex: "/(jpg)|(png)|(jpeg)/" }
                    relativeDirectory: { eq: "works" }
                    name: { eq: "5" }
                }
            ) {
                edges {
                    node {
                        base
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    images = images.allFile.edges

    const next = () => {
        if (animating) return
        const nextIndex =
            activeIndex === images.length - 1 ? 0 : activeIndex + 1
        setActiveIndex(nextIndex)
    }

    const previous = () => {
        if (animating) return
        const nextIndex =
            activeIndex === 0 ? images.length - 1 : activeIndex - 1
        setActiveIndex(nextIndex)
    }

    const goToIndex = newIndex => {
        if (animating) return
        setActiveIndex(newIndex)
    }

    const slides = images.map(item => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.node.base.split('.')[0]}
            >
                {console.log(item)}
                <div style={{ width: '70% ', margin: '0 auto' }}>
                    <Img
                        fluid={item.node.childImageSharp.fluid}
                        alt={item.node.base.split('.')[0]}
                    />
                    <ZoomWrapper
                        href={item.node.childImageSharp.fluid.src}
                        target="_blank"
                    >
                        <Search />
                        <span>zoom</span>
                    </ZoomWrapper>
                </div>
            </CarouselItem>
        )
    })

    return (
        <Layout>
            <SEO title="Work" />
            <Container>
                <TemplateWrapper>
                    <GoBackWrapper to="/work">
                        <GoBack />
                        <span>back</span>
                    </GoBackWrapper>

                    <article>
                        <Row style={{ alignItems: 'center' }}>
                            <Col xs="12" md="7">
                                <Carousel
                                    activeIndex={activeIndex}
                                    next={next}
                                    previous={previous}
                                >
                                    <CarouselIndicators
                                        items={images}
                                        activeIndex={activeIndex}
                                        onClickHandler={goToIndex}
                                    />
                                    {slides}
                                    <CarouselControl
                                        direction="prev"
                                        directionText="Previous"
                                        onClickHandler={previous}
                                    />
                                    <CarouselControl
                                        direction="next"
                                        directionText="Next"
                                        onClickHandler={next}
                                    />
                                </Carousel>
                            </Col>
                            <Col xs="12" md="5">
                                <DescriptionWrapper>
                                    <h1>{name}</h1>
                                    <p className="date">{date}</p>
                                    <p className="description">{description}</p>
                                </DescriptionWrapper>
                            </Col>
                        </Row>
                    </article>
                </TemplateWrapper>
            </Container>
        </Layout>
    )
}
export default WorkTemplate
