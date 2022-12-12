import React from 'react';
import './App.css';

import Dropdown from './button';
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";


function Home() {
    return (
        <main>
            <img className="picture_park"></img>
            <p className="line-2 anim-typewriter">Witamy na stronie Biebrzńskiego Parku Narodowego</p>
            <div className="navigation">
                <Link className="button_menu px-3" to="/" >Strona Główna</Link>
                <Link className="button_menu px-3" to="/game">Gra</Link>
                <Link className="button_menu px-3" to="/mapa">Mapa</Link>
                <Link className="button_menu px-3" to="/gallery">Galeria</Link>

            </div>

        </main>
    );
}

export default Home;
