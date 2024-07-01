import styled from "styled-components";

export const ContainerNavbar = styled.div`
    width: 100%;
    height: 60px;
    /* background-color: var(--red-marvel-navbar-transparent); */
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    z-index: 999;
`

export const ContainerImg = styled.div`
    width: 120px;
    height: 40px;
    overflow: hidden;
    position: absolute;
    top: 50%;
    left: .5%;
    transform: translate(-.5%, -50%);
    border-radius: 5px;
    transition: all .5s;

    &:hover {
        transform: translate(-.5%, -50%) rotate(-5deg);
        cursor: pointer;
    }
`

export const LogoImage = styled.img`
    width: 140%;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
`

export const ContainerButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`