import {Routes, Route, Outlet, Link, Form} from "react-router-dom"
import React, {useState, useEffect} from 'react';
import DotLoader from "react-spinners/DotLoader";
import './gallery.css'
import './App.css';
import Home from './Home';
import Game from './game';
import Mapa from './map';
import Park from './park';
import Kontakt from './kontakt';
import Gallery from "./gallery";
import Footer from "./footer";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 8000);
    }, []);
    return (
        <div className="App">
            {loading ? (
                    <DotLoader size={30} color={"#6cc464"} loading={loading} />
                ) :

                <Navbar collapseOnSelect expand="lg" variant="light"
                        style={{backgroundColor: "rgba(129, 129, 129, 0.3)", fontSize: 25}}>

                    <Link className="nav-link" style={{color: "#6cc464", padding: 40}} to="/">
                        <Navbar.Brand href="#home">
                        <span style={{
                            color: "forestgreen",
                            padding: 80,
                            fontFamily: "'Anonymous Pro', monospace",
                            fontSize: 30
                        }}>Biebrzański Park Narodowy</span>
                        </Navbar.Brand>
                    </Link>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse style={{fontFamily: "'Anonymous Pro', monospace"}} id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="nav-link" style={{color: "#6cc464", padding: 40}} to="/">Strona
                                Główna</Link>
                            <Link className="nav-link" style={{color: "#6cc464", padding: 40}} to="/game">Gra</Link>
                            <Link className="nav-link" style={{color: "#6cc464", padding: 40}} to="/mapa">Mapa</Link>
                            <Link className="nav-link" style={{color: "#6cc464", padding: 40}}
                                  to="/park">O Parku</Link>
                            <Link className="nav-link" style={{color: "#6cc464", padding: 40}}
                                  to="/gallery">Galeria</Link>
                            <Link className="nav-link" style={{color: "#6cc464", padding: 40}}
                                  to="/kontakt">Kontakt</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            }
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="/game" element={<Game/>}/>
                <Route path="/mapa" element={<Mapa/>}/>
                <Route path="/park" element={<Park/>}/>
                <Route path="/kontakt" element={<Kontakt/>}/>
                <Route path="/gallery" element={<Gallery/>}/>
            </Routes>

            <Footer/>

        </div>
    );
}

export default App;
