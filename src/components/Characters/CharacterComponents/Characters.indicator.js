import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const IndicatorMouse = styled.div`
    position: absolute;
    pointer-events: none;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 8px solid var(--white);
    transform: rotate(180deg);

`

const Indicator = () => {
    const [ position, setPosition ] = useState({ left: 0, top: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {

            const maxX = 1000
            let newLeft = e.clientX - 225

            if(window.innerWidth > 1400) {
                newLeft = e.clientX - 205
            } else if( window.innerWidth > 1200 ) {
                newLeft = e.clientX - 110
            } else if( window.innerWidth > 800 ) {
                newLeft = e.clientX - 20  
            }

            if(newLeft < 0) {
                newLeft = 0
            } else if ( newLeft > maxX - 8) {
                newLeft = maxX - 8
                }

            setPosition({ left: newLeft })
        }
        window.addEventListener('mousemove', handleMouseMove)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

  return (
    <IndicatorMouse style={{ left: position.left, top: 0}}></IndicatorMouse>
  )
}

export { Indicator }