import styled, { keyframes, css } from "styled-components";

const typing = keyframes`
    from { width: 0 }
`

const blink = keyframes`
    50% { border-color: transparent }
`

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`

const arrowEffect = keyframes`
    0% {
        top: 45%;
    }
    50% {
        top: 55%;
    }
    100% {
        top: 45%;
    }
`

export const TextMarvel = styled.h1`
    display: block;
    font-family: monospace;
    white-space: nowrap;
    border-right: ${ props => props.animated ? "6px solid" : "none"};
    width: ${ props => props.animated ? "27ch" : "100vw" };
    animation: ${props => props.animated ? css`${typing} 3s steps(27), ${blink} .5s infinite step-end alternate !important` : "none"};

    overflow: hidden;

    color: var(--white);
    
    letter-spacing: 10px;
    font-family: Panchang;
    font-size: ${ props => props.animated ? "40px" : "none" };
    font-weight: ${ props => props.animated ? "var(--font-w-max)" : "var(--font-w-mid)" };
    text-transform: uppercase;
    margin-top: ${props => props.mt5 ? "2em" : "none"};
`

export const SpinnerContainer = styled.div`
    position: absolute;
    bottom: -1vh;
    right: 5vw;
    width: 10vw;
    height: 10vw;
    transform: translate(-30%, -90%);
    border-radius: 50%;
    background-color: var(--red-marvel-navbar-transparent);
    overflow: hidden;
    transition: all .3s ease-in-out;

    &:hover {
        box-shadow: 2px 2px 2px rgba(255, 255, 255, 0.8);
    }
`

export const ImageBgSpinner = styled.img`
    position: absolute;
    width: 100%;
    border-radius: 50%;
    animation: ${spin} 12s infinite linear;
    
    &:last-of-type {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 30%;

        animation: ${arrowEffect} 4s ease-in-out infinite;
    }
`

const prueba = keyframes`
    0% {
        -webkit-transform: translateX(0);
        transform: translateX(0);
    }
    100% {
        -webkit-transform: translateX(-100vw);
        transform: translateX(-100vw);
    }
`

export const SliderTrack = styled.div`
    display: flex;
    animation: ${prueba} 15s linear infinite;
    -webkit-animation: ${prueba} 15s linear infinite;
    width: calc(100vw * 2);
    position: absolute;
    top: 60px;
    /* background-color: var(--red-marvel-navbar-transparent); */
    `

export const Slide = styled.div`
    background-color: var(--red-marvel-navbar-transparent);
    padding: 5px;
    width: 100vw;
    height: 100%;
`


const showText = keyframes`
    from { width: 0vw }
    /* to { width: 60vw} */
`

export const TextSecondary = styled.h2`
    width: 40%;

    position: absolute;
    bottom: 15vh;
    left: 2vw;
    text-align: left;
    letter-spacing: 3px;

    font-size: var(--font-s-mid);
    font-weight: var(--font-w-min);
    color: var(--white);
    filter: drop-shadow(1px 1px 1px #ffff);

    overflow: hidden;
    width: 60vw;
    height: 10vh;
    animation: ${showText} 3s ease-in-out;
`

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: -2;
    filter: brightness(50%);
    opacity: .3;
`

export const ContainerHero = styled.div`
    /* position: fixed; */
    top: 60px;

    display: flex;
    justify-content: center;
    align-items: center;
    left: 0;
    width: 100vw;
    height: 100vh;
`