import React from 'react'
import { ContainerMarvel, SliderTrack, Slide, ImageMarvel } from './BackgroundMarvel.styled'

const BackgroundMarvel = () => {

  return (
    <ContainerMarvel>
        <SliderTrack>
            <Slide>
                <ImageMarvel src="/Media/Images/MarvelText.webp" alt="marvelBackground"/>
            </Slide>
            <Slide>
                <ImageMarvel src="/Media/Images/MarvelText.webp" alt="marvelBackground"/>
            </Slide>
            <Slide>
                <ImageMarvel src="/Media/Images/MarvelText.webp" alt="marvelBackground"/>
            </Slide>
            <Slide>
                <ImageMarvel src="/Media/Images/MarvelText.webp" alt="marvelBackground"/>
            </Slide>
            <Slide>
                <ImageMarvel src="/Media/Images/MarvelText.webp" alt="marvelBackground"/>
            </Slide>
            <Slide>
                <ImageMarvel src="/Media/Images/MarvelText.webp" alt="marvelBackground"/>
            </Slide>
            <Slide>
                <ImageMarvel src="/Media/Images/MarvelText.webp" alt="marvelBackground"/>
            </Slide>
            <Slide>
                <ImageMarvel src="/Media/Images/MarvelText.webp" alt="marvelBackground"/>
            </Slide>
        </SliderTrack>
    </ContainerMarvel>
  )
}

export { BackgroundMarvel }