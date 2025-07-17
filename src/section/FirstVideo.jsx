import {useRef} from "react"

const FirstVideo = () => {
    const videoRef = useRef(null);

    return (
        <section className="first-vd-wrapper">
           <div className="h-dvh">
            <video 
            ref={videoRef} 
            muted
            playsInline
            preload="auto"
            src="/videos/output1.mp4"
            className="first-vd"
             />
           </div>
        </section>
    )
}

export default FirstVideo