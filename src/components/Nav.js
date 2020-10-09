import React from 'react';
//bootstrap
import Navbar from 'react-bootstrap/Navbar';
import '../styles.css'

const Nav = () => {
        return(
                <>
                <Navbar className='nav' >
                        <Navbar.Brand>
                                <h1>Covid 19 rasteador</h1>
                        </Navbar.Brand>
                  </Navbar>
                </>
        );
}

export default Nav;

