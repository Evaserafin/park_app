import {Routes, Route, Outlet, Link, Form} from "react-router-dom"
import React from 'react';

import './gallery.css'
import './gallery2.css'
import './App.css';
import Home from './Home';
import Game from './game';
import Mapa from './map';
import Park from './park';
import Kontakt from './kontakt';
import Gallery from './gallery';
import Gallery2 from './gallery2';
import Footer from "./footer";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";



function App() {

    return (
        <div className="App">

            <Navbar collapseOnSelect expand="lg" variant="light"
                    style={{backgroundColor: "rgba(129, 129, 129, 0.3)", fontSize: 18}}>

                <Link className="nav-link navbar-brand" to="/">
                    <div style={{
                        color: "forestgreen",
                        fontFamily: "'Anonymous Pro', monospace",
                        fontSize: 22
                    }}>
                        <span style={{color: "white", fontWeight: 600, fontSize: 30}}>Biebrzański</span> Park Narodowy
                    </div>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse style={{fontFamily: "'Anonymous Pro', monospace"}} id="responsive-navbar-nav">
                    <Nav className="mr-auto" style={{flexWrap: 'wrap'}}>
                        <Link className="nav-link" to="/">Strona Główna</Link>
                        <Link className="nav-link" to="/game">Gra</Link>
                        <Link className="nav-link" to="/mapa">Mapa</Link>
                        <Link className="nav-link" to="/park">O Parku</Link>
                        <Link className="nav-link" to="/gallery">Ptaki</Link>
                        <Link className="nav-link" to="/gallery2">Zwierzęta</Link>
                        <Link className="nav-link" to="/kontakt">Kontakt</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="container">
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path="/game" element={<Game/>}/>
                    <Route path="/mapa" element={<Mapa/>}/>
                    <Route path="/park" element={<Park/>}/>
                    <Route path="/kontakt" element={<Kontakt/>}/>
                    <Route path="/gallery" element={<Gallery/>}/>
                    <Route path="/gallery2" element={<Gallery2/>}/>
                </Routes>
            </div>

            <Footer/>

        </div>
    );
}

export default App;
