import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const BasicExample = () => {
    return (
        <Dropdown>
            <Dropdown.Toggle style={{width:500, height: 100, background: "black", color: "white"}} variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default BasicExample;