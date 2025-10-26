import "./home.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Home() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["UX Design", "Website Development", "Databases" ] 
        });
    }, [])

    return (
        <div className="home" id="home">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/profile_pic.jpg" alt="Profile" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Josh Ferguson</h1>
                    <h3>
                        - <span ref={textRef}></span>
                    </h3>
                </div>
            </div>
        </div>
    )
}
