import "./topbar.scss"

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#home" className="logo">JoshFerguson.</a>
                    <div className="menu-container">
                        <ul>
                            <li>
                                <a href="#intro" className="menu-btn">About</a>
                            </li>
                            <li>
                                <a href="#education" className="menu-btn">Education</a>
                            </li>
                            <li>
                                <a href="#skills" className="menu-btn">Skills</a>
                            </li>
                            <li>
                                <a href="#portfolio" className="menu-btn">Portfolio</a>
                            </li>
                            <li>
                                <a href="#contact" className="menu-btn">Contact me</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
