import React from "react";
import {Link} from 'gatsby'


export default function NavBar() {
    return (
        <nav>
            <div className="links">
            <img src="/inspire-small-logo.svg" alt="inspire logo" style={{maxWidth: '100%'}}/>
                <Link to="/">Home</Link>
                <Link to="/community">Community</Link>
                <Link to="/programs">Programs & Services</Link>
                <Link to="/innovation">Innovation</Link>
                <Link to="/story">Our Story</Link>

            </div>
        </nav>
    )
}