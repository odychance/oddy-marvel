import React, { useEffect, useRef } from 'react'
import {
  ImgTarget,
  CharacterTarget,
  AnimatedBg,
  ContainerHero,
  InfoTarget,
} from '../Characters.styled'
import { ButtonClose } from '../../StyledComponents/Buttons'
import { animFinded } from '../CharacterFunctionality/Characters.anim'

const CharacterFinded = ({ responseCharacter, handleClose, setStateCharacter, setResponseCharacter, stateCharacter }) => {

//stateCharacter lo usare para ejecutar la animacion

  const speedRef = useRef(null)
  const targetRef = useRef(null)

  useEffect(() => {
    if(stateCharacter) {
      animFinded({ speedRef, targetRef })
    } 
  }, [setResponseCharacter])

  return (
    <CharacterTarget>
    <AnimatedBg src="/Media/Images/ComicSpeedBg.png" ref={speedRef}/>
    <ContainerHero ref={targetRef}>

      <ButtonClose onClick={() => handleClose({ setStateCharacter, setResponseCharacter})}>
        <div></div>
        <div></div>
      </ButtonClose>

      <ImgTarget src={`${responseCharacter?.thumbnail?.path}.${responseCharacter?.thumbnail?.extension}`}/>
      <InfoTarget>
        <p>Name: <span>{responseCharacter.name}</span></p>
        <p>About this hero: <span>{responseCharacter.description === "" ? "This information is classified." : responseCharacter.description}</span></p>

        <p>Where to get Info About of {responseCharacter.name}?</p>

        <a target='_blank' href={`https://www.marvel.com/characters/${responseCharacter.name}`}>Just click here!</a>
      </InfoTarget>
    </ContainerHero>
  </CharacterTarget>

)
}

export { CharacterFinded }