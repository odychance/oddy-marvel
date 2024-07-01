import styled from "styled-components";
import { keyframes } from "styled-components";

const radiation = keyframes`
    0% { border: 1px solid #A5FF6B }
    50% { border: 1px solid var(--red-marvel) }
    100% { border: 1px solid #A5FF6B}
`


export const ContainerVideo = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 1;
    /* opacity: .8; */
    filter: brightness(40%) saturate(300%) contrast(80%);
`

export const VideoCharacters = styled.video`
    object-fit: cover;
    width: 100vw;
    height: 110vh;

`

export const SecondaryContainer = styled.div`
    position: relative;
    top: 0;
    left: 0;

    width: 90vw;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    color: white;

`



export const SearchContainer = styled.div`
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    > input {
        background-color: var(--red-marvel-transparent);
        border: none;
        height: 40px;
        width: 20em;
        padding: 8px;
        padding-left: 10px;
        border-radius:  20px 0 0 20px ;
        color: var(--white);
        border: 1px solid transparent;
        
        &:focus {
            animation-name: ${radiation};
            animation-duration: 2s;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
            outline: none;
            }
            
            
    }
            
    > button {
        background-color: var(--red-marvel-transparent);
        /* background-color: green; */
        height: 40px;
        width: 60px;
        border: none;
        border-radius: 0 20px 20px 0;
        cursor: pointer;
        
        display: flex;
        justify-content: center;
        align-items: center;
        border-left: 2px solid var(--red-marvel-navbar);
        transition: all.3s ease-in-out;
        
        &:hover {
            background-color: var(--red-marvel-navbar-transparent);
        }
            
            > svg {
                width: 30%;
            }
        }
    `

export const CharacterTarget = styled.div`
    width: 100%;
    height: 80%;
    position: relative;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    /* background-color: var(--gray-transparent); */
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    `

export const AnimatedBg = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180vw;
    z-index: -9999999;
    pointer-events: none;
    /* scale: 3; */
`

export const ContainerHero = styled.div`
    background-color: var(--red-marvel);
    width: 90%;
    height: 80%;
    border-radius: 80px 0 80px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: relative;
    border: 1px solid var(--white);
    opacity: 0;
    `

export const InfoTarget = styled.div`
    width: 50%;
    height: 90%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;

    > p {
        font-size: var(--font-s-mid);
        font-family: panchang;
        
        > span {
            font-size: var(--font-s-mid);
            font-style: italic;
            font-weight: var(--font-w-high);
            font-family: panchang;

        }
    }

    > a {
        color: var(--white);
        text-decoration: none;
        font-size: var(--font-s-mid);
        font-style: italic;
        font-weight: var(--font-w-min);
        font-family: panchang;
        transition: al.3s ease-in-out;
    }
`


export const ImgTarget = styled.img`
    width: 32%;
    height: 90%;
    border-radius: 150px 0 150px 0;
    object-fit: cover;
    opacity: .8;
    transition: all .5s ease-in-out;
    border: 1px solid var(--white);


    &:hover {
        opacity: 1;
    }
`

export const ContainerCharacters = styled.div`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -70%);

    width: 110vw;
    height: 70vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    
    &:hover > :first-child {
        width: 200vw;
        height: 200vh;
        }
        
        > :first-child {
        transition: all 1s ease-in-out;
        background-color: var(--black-transparent);
        width: 0px;
        height: 0px;
        border-radius: 50%;
    }
`

export const ContainerTargetCharacters = styled.div`
/* overflow: hidden; */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin: center;
    width: 1000px;
    margin: 0 auto 2em auto;
    padding: 1em 0.5em;
    display: flex;
    justify-content: center;

    background-color: var(--black-transparent);
    height: 400px;

    border-radius: 30px 0 30px 0;
`

export const Gallery = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    overflow: hidden;
`

export const GalleryItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 0 1 20px;
    height: 400px;
    margin: 0 5px;
    overflow: hidden;
    transition: flex 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    position: relative;
    opacity: .5;
    transition: all .3s ease-in-out;

    
    > img {
        width: 400px;
        height: 100%;
        object-fit: contain;
        transform: scale(2);
    }
        
    > a {
        position: absolute;
        bottom: 10%;
        opacity: 0;
        width: 100%;
        height:  40px;
        text-decoration: none;
        color: var(--white);
        font-family: panchang;
        font-weight: var(--font-w-high);
        font-size: var(--font-s-mid);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        transition: all .3s ease-in-out;
        padding: 5px;
        background-color: var(--red-marvel-transparent);
        }
        
        > span {
        position: absolute;
        z-index: 100;
        width: 100%;
        text-align: center;
        font-style: panchang;
        font-size: var(--font-s-high);
        color: var(--black);
        opacity: 0;
        transition: all .3s ease-in-out;

        &:nth-of-type(1) {
            top: 10%;
            font-style: italic;
            
            font-weight: var(--font-w-max);
            color: var(--white);
            mix-blend-mode: difference;
        }

        &:nth-of-type(2) {
            font-size: var(--font-s-mid);
            background-color: var(--red-marvel-transparent);
            color: var(--white);
        }
    }

    &:hover {
        flex: 1 1 400px; 
        opacity: 1;
        
        > a {
            opacity: 1;
            }
            
            > span {
            opacity: 1;
        }
    }
`