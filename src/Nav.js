import React, { useEffect, useState } from 'react'
import './Nav.css';

function Nav() {
const [show, handleShow] = useState(false); 

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 120) {
            handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img
                className="nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />

            <img
                className="nav_avatar"
                src=" https://occ-0-472-465.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
                alt="Netflix Logo"
            />

        </div>

    );
}

export default Nav;