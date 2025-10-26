import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="left">
                <span className="upper-top"></span>
                <span className="upper-bottom"></span>
                    <div className="wrapper">
                        <h1>ABOUT ME</h1>
                        <p>
                            I am a full stack web developer with over 2 years
                            of experience building and maintaining an e-learning platform as 
                            part of a small, agile team.

                            This role gave me the opportunity to work across the entire stack - from backend 
                            development in .NET (C#) and MySQL to frontend work with HTML, TypeScript and CSS/Bootstrap, all deployed on Azure.
                            
                            I'm passionate about clean code, intuitive user interfaces, and 
                            continuous learning. I'm now looking for new challenges where I 
                            can grow further and contribute to meaningful products.                            
                        </p>
                    </div>
                <span className="lower-top"></span>
                <span className="lower-bottom"></span>
            </div>
            <div className="right">
                <div className="imgContainer">
                    <img src="assets/profilepic4.jpeg" alt="Profile" />
                </div>
            </div>
        </div>
    )
}
