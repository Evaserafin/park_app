import React from 'react';
import './App.css';

import Dropdown from './button';
import {Link} from "react-router-dom";
import {Nav} from "react-bootstrap";

function Home() {
    return (
        <main>
            <div className="picture_park">
            </div>
            <div className="line-2" style={{maxWidth: '100%'}}>
                <h1>Witamy na stronie Biebrzńskiego Parku Narodowego</h1>
            </div>
            <div className="navigation">
                <Link className="button_menu px-3" to="/gallery" >Galeria</Link>
                <Link className="button_menu px-3" to="/game">Gra</Link>
                <Link className="button_menu px-3" to="/mapa">Mapa</Link>
                <Link className="button_menu px-3" to="/park">O Parku</Link>

            </div>

        </main>
    );
}

export default Home;
