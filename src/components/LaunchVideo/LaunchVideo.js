import React, { useEffect, useRef, useState } from 'react'
import { ContainerVideo } from '../StyledComponents'
import anim from './LaunchVideo.anim'
import { VideoLaunch, SkipButton } from './LaunchVideo.styled'

const LaunchVideo = ({ skipVideo, setSkipVideo}) => {

    const videoRef = useRef(null)

    useEffect(() => {
        anim({videoRef})

        }, [])
        
    const skipVid = () => {
        setSkipVideo(!skipVideo)
    }
            
    if(skipVideo === false) {
        setTimeout(() => {
            skipVid()
        }, 39000)
    }


  return (
    <>
        { !skipVideo ? (
            <ContainerVideo ref={videoRef}>
                <VideoLaunch  src="/Media/Video/videoplayback.mp4" autoPlay muted/>
        
                <SkipButton onClick={skipVid}>Skip Intro</SkipButton>
            </ContainerVideo>
        ) : null 
        }
    </>
  )
}

export { LaunchVideo }