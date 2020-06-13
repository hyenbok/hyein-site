import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'
import Input from '../components/input'
import Textarea from '../components/Textarea'
import Button from '../components/Button'
import FlexBox from '../components/FlexBox'
import ownerImg from '../images/owner.png'

const ContentWrapper = styled.div`
    padding: 2rem 0;
`

const ImgWrapper = styled.div`
    position: relative;
    margin-left: 1.5rem;
    margin-top: 1.5rem;

    img {
        box-shadow: 2px 2px 12px rgba(175, 180, 172, 0.74);
        position: relative;
        width: 100%;
        max-width: 30rem;
    }

    span {
        display: block;
        background: ${({ theme }) => theme.color.dustGreen};
        width: 100%;
        height: 100%;
        position: absolute;
        left: -1.5rem;
        top: -1.5rem;
    }
`

const InfoTextWrapper = styled.div`
    color: ${({ theme }) => theme.color.grey1};
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
`

const InfoPage = () => {
    return (
        <Layout>
            <SEO title="Info" />
            <Container>
                <ContentWrapper>
                    <ImgWrapper>
                        <span></span>
                        <img
                            src={ownerImg}
                            alt="site owner image, holding plants, smiling"
                        />
                    </ImgWrapper>
                    <InfoTextWrapper>
                        <h1>Hyein Jeong</h1>
                        <p className="description">
                            currently working as a freelance photographer in
                            Seoul, South Korea
                        </p>
                        <FlexBox flexStyles={{ flexDirection: 'column' }}>
                            <p className="sns-box">
                                Contact<b>abcd@gmail.com</b>
                            </p>
                            <p className="sns-box">
                                Blog<b>abcd@gmail.com</b>
                            </p>
                        </FlexBox>
                        <span className="deco-line"></span>
                        <FlexBox flexStyles={{ flexDirection: 'column' }}>
                            <Input placeholder="Name" />
                            <Input placeholder="Email" type="email" />
                        </FlexBox>
                        <Input placeholder="Subject" />
                        <Textarea minHeight={'15.6rem'} placeholder="Message" />
                        <FlexBox flexStyles={{ justifyContent: 'center' }}>
                            <Button>send</Button>
                        </FlexBox>
                    </InfoTextWrapper>
                </ContentWrapper>
            </Container>
        </Layout>
    )
}

export default InfoPage
