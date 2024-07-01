import React from 'react'
import { ContainerNavbar, LogoImage, ContainerImg, ContainerButtons } from './Navbar.styled'
import { Button } from '../../StyledComponents'

const Navbar = () => {

    
  return (
        <ContainerNavbar>
            <ContainerImg>
                <a href='/'>
                    <LogoImage src="/Media/Images/MarvelLogo.webp" alt="logo" />
                </a>
            </ContainerImg>

            <ContainerButtons>
                <Button>
                    <a href="https://www.marvel.com/comics" target='_blank'>Comics</a>
                </Button>
                <Button>
                    <a href="https://www.marvel.com/characters" target='_blank'>Characters</a>
                </Button>
                <Button>
                    <a href="https://www.marvel.com/articles" target='_blank'>News</a>
                </Button>
            </ContainerButtons>
        </ContainerNavbar>
    )
}

export { Navbar }