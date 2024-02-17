import React from "react"

function Header() {
    return (
        <div className="header">
            <div className="name">
                <div className="title"></div>
                <p className="logo">MeToYou</p>
                <div className="links">
                        <a href="#" className="about" data-content="About">About</a>
                        <a href="#" className="contact" data-content="Contact">Contact</a>
                </div>
            </div>
        </div>
    );
}

export default Header;