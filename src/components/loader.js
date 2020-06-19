import React, { useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: fixed;
    z-index: 9999;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #e7eae4;
`
const LoaderBox = styled.div`
    animation: rotate 2s infinite;
    transform: rotate(45deg);
    display: grid;
    grid-template-columns: 35px 35px;
    grid-gap: 5px;

    .dots {
        border-radius: 50%;
        height: 35px;
        background-color: #62952d;
    }

    @keyframes rotate {
        0% {
            transform: rotate(45deg);
        }
        25% {
            transform: rotate(90deg);
            grid-gap: 30px;
        }
        50% {
            transform: rotate(180deg);
            grid-gap: 5px;
        }
        100% {
            transform: rotate(405deg);
        }
    }
`

const Loader = () => {
    useEffect(() => {
        const timeout = setTimeout(() => {
            const loader = document.getElementById('loader')
            loader.style.display = 'none'
        }, 1500)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return (
        <Wrapper id="loader">
            <LoaderBox>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
                <div className="dots"></div>
            </LoaderBox>
        </Wrapper>
    )
}

export default Loader
