import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li>
                    <a href="#home" className="menu-btn">Home</a>
                </li>
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
    )
}
