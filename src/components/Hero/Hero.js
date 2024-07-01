import React from 'react'

import { Characters } from '../Characters/Characters'
import { ContainerView } from '../StyledComponents'
import { TextMarvel, SpinnerContainer, ImageBgSpinner, SliderTrack, Slide, TextSecondary, BackgroundImage, ContainerHero } from './Hero.styled'
import { BackgroundMarvel } from '../BabkgroundMarvel/BackgroundMarvel'

const Hero = ({ infoMarvel, skipVideo }) => {

  return (
    <ContainerView fcolumn="true" sticky="true">

      <ContainerHero>

        <BackgroundMarvel />
        {/* <BackgroundImage src="/Media/Images/MargelBgCharacters.jpeg" />       */}

        <SliderTrack>
          <Slide><TextMarvel>MARVEL © MARVEL © MARVEL © MARVEL © MARVEL © MARVEL © MARVEL © MARVEL ©  </TextMarvel></Slide>
          <Slide><TextMarvel>MARVEL © MARVEL © MARVEL © MARVEL © MARVEL © MARVEL © MARVEL © MARVEL © </TextMarvel></Slide>
          <Slide><TextMarvel>MARVEL © MARVEL © MARVEL © MARVEL © MARVEL © MARVEL © MARVEL © MARVEL ©  </TextMarvel></Slide>
          <Slide><TextMarvel>MARVEL © MARVEL © MARVEL © MARVEL © MARVEL © MARVEL © MARVEL © MARVEL ©  </TextMarvel></Slide>
        </SliderTrack>

        { skipVideo ? (
          <TextMarvel animated="true" mt5="true">THE MARVEL UNIVERSE IS HERE!</TextMarvel>          
        ) : null}


        <SpinnerContainer>
            <ImageBgSpinner src="/Media/Images/SpinnerText.jpg" />
            <ImageBgSpinner src="/Media/Images/ArrowSpinner.jpg" />
        </SpinnerContainer>

        { skipVideo ? (
          <TextSecondary>Marvel Universe is a vast and complex fictional universe where the stories of Marvel characters take place. It is characterized by its interconnected characters, allowing heroes and villains to interact in different series and media.</TextSecondary>
        ) : null}

      </ContainerHero>
      <Characters infoMarvel={infoMarvel}/>

    </ContainerView>
  )
}

export { Hero }