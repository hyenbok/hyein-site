import { createGlobalStyle, css } from 'styled-components'

import bgMobile from '../images/bg-mobile.jpg'
import bg from '../images/bg.jpg'
import carouselPrevArrow from '../images/carousel-prev.svg'

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: 'Noto Serif KR', sans-serif;
    font-size: 10px;
    overflow-x: hidden;
    min-height: 100vh;
  }

  body {
    &.has-bg {
      background-image: url(${bgMobile});
      background-repeat: no-repeat;
      background-size: cover;
      background-position: bottom center;

      @media (min-width: ${({ theme }) => theme.bp.md}px) {
        background-image: url(${bg});
      }
    }
  }

  *, :before, :after {
    box-sizing: border-box;
  }

  input, textarea {
    padding: 0;
    border: none;
    outline: none;
  }

  button {
    padding: 0;
    border: none;

    &:focus {
      outline: none;
    }
  }

  a {
    color: inherit;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    text-decoration: none;
    border: 0;
    text-decoration: inherit;


    &:visited,
    &:hover,
    &:focus,
    &:active {
        text-decoration: none;
        outline: none;
        box-shadow: none;
    }
  }

  p {
    margin: 0;
  }

  .container {
    & > .row {
      margin-left: 0;
      margin-right: 0;
    }
  }

  .pl-none {
        padding-left: 0 !important;
    }

    .pr-none {
        padding-right: 0 !important;
    }

    .p-pl-none {
        @media ${({ theme }) => theme.bp.md} {
            padding-left: 0 !important;
        }
    }

.p-pr-none {
	@media ${({ theme }) => theme.bp.md}  {
		padding-right: 0 !important;
	}
}

.pl-pr-none { 
  	padding-left: 0 !important;
  	padding-right: 0 !important;
}

.m-pl-pr-none {
	@media ${({ theme }) => theme.bp.md}  {
		padding-left: 0 !important;
  	    padding-right: 0 !important;
	}
}

.Toastify__toast-container {
  font-size: 1.6rem;
}

.carousel-control-prev-icon, .carousel-control-next-icon {
  background-image: url(${carouselPrevArrow});
}

.carousel-control-next-icon {
  transform: rotate(180deg);
}

`

const flexMC = css`
    display: flex;
    align-items: center;
    justify-content: center;
`

const centerAlign = css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export { GlobalStyles, flexMC, centerAlign }
