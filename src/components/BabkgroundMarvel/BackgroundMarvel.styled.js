import styled, { keyframes } from 'styled-components'

const prueba = keyframes`
0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
}
100% {
    -webkit-transform: translateX(calc(-1000px * 4));
    transform: translateX(calc(-1000px * 4));
}
`

export const ContainerMarvel = styled.div`
width: 150%;
height: 100%;
margin: auto;
overflow: hidden;
position: fixed;
top: 30%;
left: -20%;
transform: rotate(10deg);
z-index: -9999;
`

export const SliderTrack = styled.div`
display: flex;
animation: ${prueba} 60s linear infinite;
-webkit-animation: ${prueba} 60s linear infinite;
width: calc(1000px * 8);
opacity: .4;
`

export const Slide = styled.div`
width: 1000px;
height: 100%;
`

export const ImageMarvel = styled.img`
width: 100%;
/* filter: brightness(90%) grayscale(50%) saturate(100%); */
`
