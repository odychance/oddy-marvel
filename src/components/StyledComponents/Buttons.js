import styled from "styled-components";

export const Button = styled.button`
    width: 12em;
    border-radius: 10px;
    border: none;
    padding: 5px;
    background-color: transparent;
    transition: all .5s;
    cursor: pointer;
    margin: 1rem;
    text-transform: uppercase;
    
    font-family: Panchang;
    font-size: var(--font-s-min);
    font-weight: var(--font-w-mid);
    
    > a {
        color: var(--white);
        text-decoration: none;
    }
    
    &:hover{
        background-color: var(--red-marvel-navbar);
    }
`

export const ButtonClose = styled.div`
    width: 50px;
    height: 50px;
    background-color: var(--red-marvel-navbar);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: -10px;
    right: -10px;
    z-index: 999;
    cursor: pointer;
    border: 1px solid var(--white);
    
    > div {
        transition: all .8s;
        background-color: var(--white);
        width: 25px;
        height: 2px;
        position: absolute;

    }
    > :nth-child(1) {
        transform: rotate(45deg);

        }
        > :nth-child(2) {
        transform: rotate(-45deg);
    }

    &:hover {
        > div {
            width: 20px;

            transform: rotate(360deg);
        }
    }

`