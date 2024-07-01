import gsap from "gsap";

const anim = ({ videoRef }) => {

    const video = videoRef.current

    gsap.to(video, {
        opacity: 0,
        delay: 37,
        duration: 2,
        pointerEvents: "none",
    })

}

export default anim