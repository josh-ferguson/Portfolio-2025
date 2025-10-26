import "./skills.scss"

export default function Skills() {
    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div className="container">
                <div className="skillContainer">
                    <h2 className="skillTitle">Front End</h2>
                    <div className="skillList">
                        <div>HTML</div>
                        <div>JavaScript</div>
                        <div>TypeScript</div>
                        <div>React</div>
                        <div>Node.JS</div>
                    </div>
                </div>

                <div className="skillContainer">
                    <h2 className="skillTitle">Back End</h2>
                    <div className="skillList">
                        <div>.Net (c#)</div>
                        <div>mySQL</div>
                    </div>
                </div>

                <div className="skillContainer">
                    <h2 className="skillTitle">Styling</h2>
                    <div className="skillList">
                        <div>CSS</div>
                        <div>Bootstrap</div>
                        <div>SASS</div>
                    </div>
                </div>

                <div className="skillContainer">
                    <h2 className="skillTitle">Other</h2>
                    <div className="skillList">
                        <div>Azure</div>
                        <div>Git</div>
                        <div>Geographical Information Systems</div>
                        <div>UX Design</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
