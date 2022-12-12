import {Routes, Route, Outlet, Link, Form} from "react-router-dom"
import React from 'react';
import './gallery.css'
import './App.css';
import Home from './Home';
import Game from './game';
import Mapa from './map';
import Zwierzeta from './zwierzeta';
import Kontakt from './kontakt';
import Gallery from "./gallery";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

function App() {
    return (
        <div className="App">
            <Navbar collapseOnSelect expand="lg" variant="light"
                    style={{backgroundColor: "rgba(129, 129, 129, 0.3)", fontSize: 25}}>

                <Link className="nav-link" style={{color: "#6cc464", padding: 40}} to="/">
                    <Navbar.Brand href="#home">
                        <span style={{color: "forestgreen", padding: 80, fontFamily: "'Anonymous Pro', monospace", fontSize: 30}}>Biebrzański Park Narodowy</span>
                    </Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse style={{fontFamily: "'Anonymous Pro', monospace"}} id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" style={{color: "#6cc464", padding: 40}} to="/">Strona Główna</Link>
                        <Link className="nav-link" style={{color: "#6cc464", padding: 40}} to="/game">Gra</Link>
                        <Link className="nav-link" style={{color: "#6cc464", padding: 40}} to="/mapa">Mapa</Link>
                        <Link className="nav-link" style={{color: "#6cc464", padding: 40}}
                              to="/zwierzeta">Zwierzęta</Link>
                        <Link className="nav-link" style={{color: "#6cc464", padding: 40}} to="/gallery">Galeria</Link>
                        <Link className="nav-link" style={{color: "#6cc464", padding: 40}} to="/kontakt">Kontakt</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/game" element={<Game/>}/>
                <Route path="/mapa" element={<Mapa/>}/>
                <Route path="/zwierzeta" element={<Zwierzeta/>}/>
                <Route path="/kontakt" element={<Kontakt/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
            </Routes>

            <div style={{textAlign: 'center', color: 'white'}}>
                tutaj footer
            </div>
        </div>
    );
}

export default App;
