import styled from "styled-components"

export const ContainerView = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 20px;
    display: flex;
    flex-direction: ${props => props.fcolumn ? "column" : "row" };
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: ${props => props.sticky ? "fixed" : "relative"};
    top: 0;
    left: ${props => props.slide ? "100vw" : 0};
    /* left: 0; */
`

export const ContainerPanel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    position: relative;
    top: 0;
    /* background-color: green; */
`

export const ContainerVideo = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    display: flex;
    justify-content: center;
    align-items: center;
`