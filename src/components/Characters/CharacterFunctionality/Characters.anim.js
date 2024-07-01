import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const anim = ({mainContainerRef}) => {

    const mainContainer = mainContainerRef.current

    gsap.from(mainContainer, {
        // x: "120vw",
        x: 0,
        // opacity: 0,
        pointerEvents: false,
    })
    gsap.to(mainContainer, {
        // x: 0,
        x: "-100vw",
        y: 0,
        // opacity: 1,
        pointerEvents: true,
        duration: 2,
        ease: "power1.out",
        scrollTrigger: {
            trigger: mainContainer,
            start: "center 45%",
            end: "center 45%",
            toggleActions: "play none reverse none"
        }
    })

}

const animFinded = ({ speedRef, targetRef }) => {
    const speed = speedRef?.current
    const target = targetRef?.current

    gsap.fromTo(speed, {
        width: "400vw"
    }, {
        width: "110vw",
        duration: 1,
        ease: "power4.easeIn"
        })
        
    gsap.fromTo(target, {
        scale: 0,
        opacity: 0
        }, {
        scale: 1,
        opacity: 1,
        delay: 1,
        duration: 1,
        ease: "power4.easeInOut"
    })

}

export { anim, animFinded }