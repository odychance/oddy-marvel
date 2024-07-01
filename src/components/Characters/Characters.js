import React, { useState, useEffect, useRef } from 'react'
import { ContainerView, ContainerPanel } from '../StyledComponents/Containers'
import {
  ContainerVideo,
  VideoCharacters,
  SecondaryContainer,
} from './Characters.styled'
import { CharacterFinded } from './CharacterComponents/Character.finded'
import { Carousel } from './CharacterComponents/Characters.carousel'
import { SearchBar } from './CharacterComponents/Characters.searchBar'
import { Alert } from '../StyledComponents/AlertMsg'
import { anim } from './CharacterFunctionality/Characters.anim'
import { handleSubmit } from './CharacterFunctionality/Characters.functions'
import { handleClose } from './CharacterFunctionality/Characters.functions'
import { getCharacter } from './CharacterFunctionality/Characters.axios'

const Characters = ({infoMarvel}) => {

    const [ characterName, setCharacterName ] = useState('')
    const [ responseCharacter, setResponseCharacter ] = useState(null)
    const [ stateCharacter, setStateCharacter ] = useState(false)
    const [ alertState, setAlertState ] = useState(false)

    const charactersArr = infoMarvel[1]
    const mainContainerRef = useRef(null)

    useEffect(() => {
      anim({mainContainerRef})
    }, [])

  return (
    <ContainerView fcolumn="true" sticky="true" slide="true" ref={mainContainerRef}>
            <ContainerPanel>
                <ContainerVideo>
                    <VideoCharacters src="/Media/Video/BgHomeMarvel.mp4"  autoPlay muted loop/>
                </ContainerVideo>

                <SecondaryContainer>

                  <SearchBar characterName={characterName} setCharacterName={setCharacterName} handleSubmit={() =>handleSubmit({ getCharacter, characterName, setResponseCharacter, setStateCharacter, setAlertState, })} />
                  

                  { alertState ? (
                    <Alert>Mistake! Character not found or confidential!</Alert>
                  ) : null}

                  { !stateCharacter ? (
                    null
                  ) : (
                    <CharacterFinded responseCharacter={responseCharacter} handleClose={handleClose} setStateCharacter={setStateCharacter} setResponseCharacter={setResponseCharacter} stateCharacter={stateCharacter}/>
                  )}
                  
                  <Carousel charactersArr={charactersArr} />
{/*  */}
                </SecondaryContainer>
            </ContainerPanel>
    </ContainerView>
  )
}

export { Characters }

