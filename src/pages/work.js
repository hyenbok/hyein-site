import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Container } from 'reactstrap'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

import { centerAlign } from '../assets/global'
import SEO from '../components/seo'

const WorkWrapper = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
`

const Work = styled.li`
    /* width: 100%; */
    cursor: pointer;
    width: 100%;
    padding: 1.5rem;
    position: relative;

    .work-detail {
        opacity: 0;
        transition: 0.2s opacity ease-in;
        background: ${({ theme }) => theme.color.dustGreen};
        background: linear-gradient(
            182.96deg,
            #e7eae4 39.04%,
            rgba(231, 234, 228, 0.1) 97.68%
        );
        ${centerAlign};
        width: calc(100% - 2.6rem);
        height: calc(100% - 2.6rem);
        text-align: center;
        line-height: 2.4rem;
        color: ${({ theme }) => theme.color.grey2};

        .title-num {
            font-weight: bold;
            margin-top: 3.6rem;
        }
    }
    &:hover {
        .work-detail {
            opacity: 1;
        }
    }

    @media (min-width: ${({ theme }) => theme.bp.sm}px) {
        width: 50%;
    }

    @media (min-width: ${({ theme }) => theme.bp.md}px) {
        width: 33%;
    }
    @media (min-width: ${({ theme }) => theme.bp.xlg}px) {
        width: 25%;
    }
`

const WorkPage = () => {
    const data = useStaticQuery(graphql`
        query {
            allFile(
                filter: {
                    extension: { regex: "/(jpg)|(png)|(jpeg)/" }
                    relativeDirectory: { eq: "works" }
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

    return (
        <>
            <SEO title="Work" />
            <Container>
                <WorkWrapper>
                    {data.allFile.edges.map((image, idx) => (
                        <Work key={image.node.base.split('.')[0]}>
                            <AniLink
                                to={`/work/product${
                                    image.node.base.split('.')[0]
                                }`}
                            >
                                <Img
                                    fluid={image.node.childImageSharp.fluid}
                                    alt={image.node.base.split('.')[0]}
                                />
                                <div className="work-detail">
                                    <h2 className="title-num">#{idx + 1}</h2>
                                    <h3 className="title">프로젝트 이름</h3>
                                </div>
                            </AniLink>
                        </Work>
                    ))}
                </WorkWrapper>
            </Container>
        </>
    )
}

export default WorkPage
