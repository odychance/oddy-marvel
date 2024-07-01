import React from 'react'
import {
    ContainerCharacters,
    ContainerTargetCharacters,
    Gallery,
    GalleryItem
} from '../Characters.styled'
import { Indicator as IndicatorMouse } from './Characters.indicator'


const Carousel = ({ charactersArr }) => {

    const target = charactersArr?.map((el, i) => {
        let nameRplc = el.name
        let newName = nameRplc
  
        if(nameRplc.includes(" ")) {
          newName = nameRplc.replace(/ /g, "-")
        }
  
        return {
          "name": el.name,
          "img": `${el?.thumbnail?.path}.${el?.thumbnail?.extension}`,
          "url": el.urls[0].url,
          "lastUpdate": el.modified,
          "id": el.id,
          "description": el.description ? el.description : "WARNING! This information is classified.",
          "urlCharacter": `http://www.marvel.com/characters/${newName}`
        } 
      })

  return (
    <ContainerCharacters>
        <div />
        <ContainerTargetCharacters>
            <IndicatorMouse />
            <Gallery >
                {target?.map((el, i) => (
                    <GalleryItem  key={i} >
                    <img src={el.img} alt="img" />

                    <span>{el.name}</span>
                    <a href={el.urlCharacter} target='_blank'>See more about {el.name}</a>

                    <span>{el.description}</span>
                    
                    </GalleryItem>
                ))}
            </Gallery>
        </ContainerTargetCharacters>
     </ContainerCharacters>

)
}

export { Carousel }