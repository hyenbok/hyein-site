import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { Container, Col, Row } from 'reactstrap'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Input from '../components/input'
import Textarea from '../components/Textarea'
import Button from '../components/Button'
import FlexBox from '../components/FlexBox'
import ownerImg from '../images/owner.png'

function devideBgDeco() {
    let styles = ''

    for (let i = 2; i < 6; i += 1) {
        styles += `
            &:nth-child(${i}) {
                left: ${25 * (i - 1)}%;
            }
        `
    }

    return css`
        ${styles}
    `
}

const ContentWrapper = styled.div`
    padding: 2rem 0;
    position: relative;
    .bg-deco {
        display: none;
    }
    @media (min-width: ${({ theme }) => theme.bp.md}px) {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4.8rem 0;
        min-height: calc(100vh - ${props => props.theme.size.headerPc});

        .bg-deco {
            display: block;
            background: ${({ theme }) => theme.color.grey5};
            width: 0.1rem;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: -1;

            ${devideBgDeco()}
        }
    }
`

const ImgWrapper = styled.div`
    position: relative;
    margin: 1.5rem 0 3rem 1.5rem;
    display: flex;
    justify-content: center;

    .img-deco {
        position: relative;

        img {
            box-shadow: 2px 2px 12px rgba(175, 180, 172, 0.74);
            width: 100%;
            max-width: 30rem;
            position: relative;
        }

        &:before {
            content: '';
            display: block;
            background: ${({ theme }) => theme.color.dustGreen};
            width: 100%;
            max-width: 30rem;
            height: 100%;
            position: absolute;
            left: -1.5rem;
            top: -1.5rem;
        }
    }

    @media (min-width: ${({ theme }) => theme.bp.md}px) {
        margin-top: 3.5rem;
        .img-deco {
            display: table;
        }
    }
`

const InfoTextWrapper = styled.div`
    color: ${({ theme }) => theme.color.grey1};
    text-align: center;
    .description {
        font-size: 1.2rem;
        line-height: 2.4rem;
        font-weight: bold;
        margin-bottom: 1.2rem;
    }

    .sns-box {
        font-size: 1.2rem;
        line-height: 2.4rem;

        b {
            margin-left: 1rem;
        }

        a {
            text-decoration: underline;
        }
    }

    .deco-line {
        display: block;
        border-bottom: 1px solid ${({ theme }) => theme.color.grey2};
        margin: 3.2rem 0;
    }

    input {
        margin-bottom: 2rem;
    }

    textarea {
        margin-bottom: 3.2rem;
    }

    @media (min-width: ${({ theme }) => theme.bp.md}px) {
        text-align: left;
        h1 {
            margin: 0;
        }

        .sns-box {
            & ~ .sns-box {
                margin-left: 3rem;
            }
        }

        .input-flexbox {
            input {
                ~ input {
                    margin-left: 2.8rem;
                }
            }
        }
    }
`

const InfoPage = () => {
    return (
        <Layout>
            <SEO title="Info" />
            <ContentWrapper>
                <span className="bg-deco"></span>
                <span className="bg-deco"></span>
                <span className="bg-deco"></span>
                <span className="bg-deco"></span>
                <span className="bg-deco"></span>
                <Container>
                    <Row>
                        <Col className="m-pl-pr-none pl-none" xs="12" md="6">
                            <ImgWrapper>
                                <span className="img-deco">
                                    <img
                                        src={ownerImg}
                                        alt="site owner image, holding plants, smiling"
                                    />
                                </span>
                            </ImgWrapper>
                        </Col>
                        <Col className="pl-pr-none" xs="12" md="6">
                            <InfoTextWrapper>
                                <h1>Hyein Jeong</h1>
                                <p className="description">
                                    currently working as a freelance
                                    photographer in Seoul, South Korea
                                </p>
                                <Row>
                                    <Col xs="12" md="6">
                                        <p className="sns-box">
                                            Contact
                                            <b>
                                                <a href="mailto:invely20@naver.com">
                                                    invely20@naver.com
                                                </a>
                                            </b>
                                        </p>
                                    </Col>
                                    <Col xs="12" md="6">
                                        <p className="sns-box">
                                            Blog
                                            <b>
                                                <a
                                                    href="https://blog.naver.com/invely20"
                                                    target="_blank"
                                                >
                                                    blog.naver.com/invely20
                                                </a>
                                            </b>
                                        </p>
                                    </Col>
                                </Row>
                                <span className="deco-line"></span>
                                <form>
                                    <Row>
                                        <Col xs="12" md="6">
                                            <Input placeholder="Name" />
                                        </Col>
                                        <Col xs="12" md="6">
                                            <Input
                                                placeholder="Email"
                                                type="email"
                                            />
                                        </Col>
                                    </Row>
                                    <Input placeholder="Subject" />
                                    <Textarea
                                        minHeight={'15.6rem'}
                                        placeholder="Message"
                                    />
                                    <FlexBox
                                        flexStyles={{
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Button>send</Button>
                                    </FlexBox>
                                </form>
                            </InfoTextWrapper>
                        </Col>
                    </Row>
                </Container>
            </ContentWrapper>
        </Layout>
    )
}

export default InfoPage
